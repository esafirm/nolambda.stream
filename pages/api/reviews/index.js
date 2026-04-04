import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const reviewsDir = path.join(process.cwd(), 'reviews')

  // Check if reviews directory exists
  if (!fs.existsSync(reviewsDir)) {
    return res.json([])
  }

  const reviewDirs = fs.readdirSync(reviewsDir).filter((dir) => {
    const dirPath = path.join(reviewsDir, dir)
    return fs.statSync(dirPath).isDirectory()
  })

  const reviews = reviewDirs
    .map((dir) => {
      const dataPath = path.join(reviewsDir, dir, 'data.json')
      const badgePath = path.join(reviewsDir, dir, 'badge.html')

      let data = null
      if (fs.existsSync(dataPath)) {
        data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
      }

      return {
        slug: dir,
        hasBadge: fs.existsSync(badgePath),
        data,
      }
    })
    .filter((review) => review.hasBadge && review.data)

  res.json(reviews)
}
