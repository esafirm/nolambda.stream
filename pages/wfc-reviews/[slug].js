'use client'

import { useState } from 'react'
import fs from 'fs'
import path from 'path'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export async function getStaticPaths() {
  const reviewsDir = path.join(process.cwd(), 'reviews')

  if (!fs.existsSync(reviewsDir)) {
    return { paths: [], fallback: false }
  }

  const reviewDirs = fs.readdirSync(reviewsDir).filter((dir) => {
    const dirPath = path.join(reviewsDir, dir)
    return fs.statSync(dirPath).isDirectory() && fs.existsSync(path.join(dirPath, 'badge.html'))
  })

  const paths = reviewDirs.map((dir) => ({
    params: { slug: dir },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const reviewDir = path.join(process.cwd(), 'reviews', slug)

  const dataPath = path.join(reviewDir, 'data.json')
  const badgePath = path.join(reviewDir, 'badge.html')
  const badgePngPath = path.join(reviewDir, 'badge.png')
  const notionPath = path.join(reviewDir, 'notion.md')
  const reviewPath = path.join(reviewDir, 'review.md')

  if (!fs.existsSync(dataPath) || !fs.existsSync(badgePath)) {
    return { notFound: true }
  }

  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
  const badgeHtml = fs.readFileSync(badgePath, 'utf8')
  const badgePngExists = fs.existsSync(badgePngPath)
  const notionContent = fs.existsSync(notionPath) ? fs.readFileSync(notionPath, 'utf8') : null
  const reviewContent = fs.existsSync(reviewPath) ? fs.readFileSync(reviewPath, 'utf8') : null

  return {
    props: {
      slug,
      data,
      badgeHtml,
      badgePngExists,
      notionContent,
      reviewContent,
    },
    revalidate: 60,
  }
}

export default function WFCReview({
  slug,
  data,
  badgeHtml,
  badgePngExists,
  notionContent,
  reviewContent,
}) {
  const [downloading, setDownloading] = useState(false)

  const handleDownloadBadge = async () => {
    setDownloading(true)
    try {
      const response = await fetch(`/api/reviews/${slug}/badge-image`)
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${data.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error('Failed to download badge:', error)
      alert('Failed to download badge. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  const handleShareBadge = async () => {
    setDownloading(true)
    try {
      const response = await fetch(`/api/reviews/${slug}/badge-image`)
      if (response.ok) {
        const blob = await response.blob()
        const file = new File([blob], `${data.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`, {
          type: 'image/png',
        })

        if (navigator.share && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `WFC Review: ${data.name}`,
            text: `Check out my WFC review of ${data.name} in ${data.location}`,
            files: [file],
          })
        } else {
          // Fallback to download
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `${data.name.replace(/[^a-z0-9]/gi, '-')}-wfc-badge.png`
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
          document.body.removeChild(a)
          alert('Sharing not supported on this device. Badge has been downloaded instead.')
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Failed to share badge:', error)
        alert('Failed to share badge. Please try again.')
      }
    } finally {
      setDownloading(false)
    }
  }

  return (
    <>
      <PageSEO
        title={`${data.name} - WFC Review`}
        description={`Work From Cafe review for ${data.name} in ${data.location}`}
        ogImage={badgePngExists ? `/api/reviews/${slug}/badge-image` : null}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <Link
            href="/wfc-reviews"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            ← Back to all WFC Reviews
          </Link>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {data.name}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{data.location}</p>
        </div>

        <div className="grid gap-8 py-12 md:grid-cols-2">
          {/* Badge Section */}
          <div className="order-1">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">WFC Badge</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadBadge}
                  disabled={downloading || !badgePngExists}
                  className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
                  title={!badgePngExists ? 'Image not available' : ''}
                >
                  {downloading ? 'Downloading...' : 'Download'}
                </button>
                <button
                  onClick={handleShareBadge}
                  disabled={downloading || !badgePngExists}
                  className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                  title={!badgePngExists ? 'Image not available' : ''}
                >
                  {downloading ? 'Sharing...' : 'Share as Image'}
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <iframe
                srcDoc={badgeHtml}
                className="w-full max-w-[500px] rounded-xl border-0 shadow-xl"
                style={{ height: '700px' }}
                title="WFC Badge"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="order-2 space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Review Details
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                    Atmosphere
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{data.atmosphere}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">Service</h3>
                  <p className="text-gray-600 dark:text-gray-400">{data.service}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                    Food & Drink
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{data.food}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                    Final Verdict
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{data.verdict}</p>
                </div>
              </div>
            </div>

            {data.highlights && (
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Highlights
                </h2>
                <ul className="space-y-2">
                  {data.highlights.split(',').map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-primary-500">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{highlight.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Review Context
              </h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-medium">Reviewed From:</span> {data.currentLocation}
                </p>
                <p>
                  <span className="font-medium">Date:</span>{' '}
                  {new Date(data.date).toLocaleDateString('en-US')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
