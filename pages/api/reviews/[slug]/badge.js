import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const { slug } = req.query

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' })
  }

  const badgePath = path.join(process.cwd(), 'reviews', slug, 'badge.html')

  if (!fs.existsSync(badgePath)) {
    return res.status(404).json({ error: 'Badge not found' })
  }

  const badgeHtml = fs.readFileSync(badgePath, 'utf8')

  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.send(badgeHtml)
}
