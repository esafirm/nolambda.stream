const cache = new Map()
const CACHE_TTL = 1000 * 60 * 60

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { cityA, cityB, salary } = req.body
  if (!cityA || !cityB) {
    return res.status(400).json({ error: 'Both cityA and cityB are required' })
  }

  const cacheKey = `${cityA.toLowerCase()}|${cityB.toLowerCase()}|${salary || 0}`
  const cached = cache.get(cacheKey)
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return res.status(200).json(cached.data)
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured' })
  }

  const prompt = buildPrompt(cityA, cityB, salary)

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.2, maxOutputTokens: 2048 },
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Gemini API error:', response.status, errorText)
      return res.status(response.status).json({ error: 'Gemini API error', details: errorText })
    }

    const data = await response.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || ''

    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return res.status(500).json({ error: 'Failed to parse AI response' })
    }

    const parsed = JSON.parse(jsonMatch[0])
    cache.set(cacheKey, { data: parsed, ts: Date.now() })
    return res.status(200).json(parsed)
  } catch (error) {
    console.error('Cost of living API error:', error)
    return res.status(500).json({ error: error.message || 'Internal server error' })
  }
}

function buildPrompt(cityA, cityB, salary) {
  const salaryLine = salary
    ? `\nThe user earns ${salary} in ${cityA}'s local currency. Calculate the equivalent salary needed in ${cityB} to maintain the same purchasing power.`
    : ''

  return `You are a cost of living data analyst. Compare the cost of living between "${cityA}" and "${cityB}".

Return ONLY a valid JSON object (no markdown, no explanation) with this exact structure:

{
  "cityA": {
    "name": "${cityA}",
    "country": "country name",
    "currency": "currency code (e.g. IDR, SGD)",
    "currencySymbol": "currency symbol (e.g. Rp, $)",
    "costIndex": overall cost of living index (integer, world average = 100),
    "categories": {
      "housing": {
        "rent_1br_center": monthly rent for 1BR in city center (in local currency, as number),
        "rent_1br_outside": monthly rent for 1BR outside center,
        "utilities": monthly basic utilities,
        "internet": monthly internet
      },
      "food": {
        "meal_inexpensive": inexpensive meal cost,
        "meal_midrange": mid-range 3-course meal for 2,
        "groceries": monthly groceries for 1 person,
        "cappuccino": regular cappuccino
      },
      "transport": {
        "monthly_pass": monthly public transport pass,
        "gas_1l": 1 liter of gasoline,
        "taxi_start": taxi start tariff
      },
      "lifestyle": {
        "gym": monthly gym membership,
        "cinema": 1 cinema ticket,
        "beer": domestic beer (0.5L)
      }
    }
  },
  "cityB": { ... same structure for cityB ... }
  ${
    salary
      ? `,
  "salaryComparison": {
    "cityASalary": ${salary},
    "equivalentSalaryInCityB": equivalent salary in cityB's currency,
    "cityBCurrency": "currency code of cityB",
    "purchasingPowerRatio": ratio as decimal (e.g. 0.33 means cityB is 3x more expensive)
  }`
      : ''
  }
}

Rules:
- All prices must be realistic for the current year (2026)
- Use local currency for each city
- Return numbers only (no strings like "50000" — use 50000)
- Be accurate — use widely known cost of living data
- If a city is very small or unknown, do your best estimate based on the country
${salaryLine}`
}
