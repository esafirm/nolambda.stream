import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const { slug } = req.query
  const badgePngPath = path.join(process.cwd(), 'reviews', slug, 'badge.png')

  if (!fs.existsSync(badgePngPath)) {
    return res.status(404).json({ error: 'Badge image not found' })
  }

  const imageBuffer = fs.readFileSync(badgePngPath)

  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Content-Length', imageBuffer.length)
  res.setHeader('Cache-Control', 'public, max-age=31536000') // Cache for 1 year

  res.send(imageBuffer)
}
