export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prompt, type } = req.body
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured' })
  }

  const parsePrompt = `You are a financial data parser. Parse the user's expense data into structured JSON.

Rules:
- Extract each expense item with "category" (short name like Rent, Groceries, Transport) and "amount" (monthly amount in IDR as a number)
- If a line has a frequency like "weekly" or "per week", multiply by 4.33 to get monthly
- If "yearly" or "per year", divide by 12
- Handle Indonesian format: dots as thousands separators, commas as decimals. Example: Rp 5.000.000 = 5000000
- If an item is clearly a lump sum for the year or quarter, normalize to monthly
- Return ONLY a valid JSON array, no explanation or markdown formatting

Example input:
Rent: Rp 5.000.000
Listrik: Rp 500.000 per bulan
Makan: 3x seminggu @ Rp 50.000
Transport: Rp 1.200.000

Example output:
[{"category":"Rent","amount":5000000},{"category":"Listrik","amount":500000},{"category":"Makan","amount":650000},{"category":"Transport","amount":1200000}]`

  const grillPrompt = `You are a smart financial coach reviewing someone's monthly expenses.

Current expenses: ${prompt}

Based on this spending profile, ask 2-3 insightful follow-up questions that help the user identify spending leaks, optimize their budget, or discover blind spots.

Rules:
- Each question must be specific and personalized based on their actual numbers
- Don't ask about categories already well-covered
- Focus on areas with unusually high spending ratios or missing common categories
- Return ONLY a valid JSON array of objects with "question" and "context" fields, no explanation

Example output:
[{"question":"Your food spending is 40% of total expenses. How much of that goes to food delivery vs cooking at home?","context":"Food"},{"question":"I notice you have no transportation costs. Do you work from home or use a company vehicle?","context":"Transport"}]`

  const systemPrompt = type === 'grill' ? grillPrompt : parsePrompt

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: `${systemPrompt}\n\n${prompt}` }] }],
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

    const jsonMatch = text.match(/\[[\s\S]*?\]/)
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0])
        return res.status(200).json(type === 'grill' ? { questions: parsed } : parsed)
      } catch (e) {
        // fall through
      }
    }

    return res.status(200).json({ text })
  } catch (error) {
    console.error('Expense API error:', error)
    return res.status(500).json({ error: error.message || 'Internal server error' })
  }
}
