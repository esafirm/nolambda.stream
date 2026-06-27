export default async function handler(req, res) {
  const { ticker } = req.query
  if (!ticker) {
    return res.status(400).json({ error: 'Ticker query parameter is required' })
  }

  // Sanitize ticker: remove whitespace, uppercase, remove any .JK suffix so we can standardize it
  let cleanTicker = ticker.trim().toUpperCase()
  if (cleanTicker.endsWith('.JK')) {
    // Keep it as is
  } else if (cleanTicker.includes('.')) {
    // Other exchange suffix, keep it
  } else {
    // Default to Indonesia Stock Exchange (.JK)
    cleanTicker = `${cleanTicker}.JK`
  }

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${cleanTicker}`
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ error: 'Stock ticker not found' })
      }
      return res.status(response.status).json({ error: 'Failed to fetch stock data' })
    }

    const data = await response.json()
    const result = data?.chart?.result?.[0]
    if (!result) {
      return res.status(404).json({ error: 'Stock ticker not found' })
    }

    const meta = result.meta
    return res.status(200).json({
      ticker: cleanTicker.replace('.JK', ''),
      symbol: meta.symbol,
      name: meta.longName || cleanTicker.replace('.JK', ''),
      price: meta.regularMarketPrice,
      currency: meta.currency,
      exchange: meta.exchangeName,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal server error' })
  }
}
