'use client'

import { useState, useMemo } from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function WFCReviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useState(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  })

  const filteredReviews = useMemo(() => {
    if (!searchQuery) return reviews
    const query = searchQuery.toLowerCase()
    return reviews.filter(
      (review) =>
        review.data.name.toLowerCase().includes(query) ||
        review.data.location.toLowerCase().includes(query) ||
        review.data.wfcSuitability.toLowerCase().includes(query)
    )
  }, [reviews, searchQuery])

  return (
    <>
      <PageSEO title="WFC Reviews" description="Work From Cafe reviews and badges" />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Work From Cafe Reviews
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Reviews of cafes and spots suitable for remote work, with detailed metrics and badges.
          </p>
        </div>

        {!loading && reviews.length > 0 && (
          <div className="py-4">
            <input
              type="text"
              placeholder="Search by name, location, or suitability..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        )}

        {loading ? (
          <div className="py-12">
            <p className="text-gray-500 dark:text-gray-400">Loading reviews...</p>
          </div>
        ) : !reviews.length ? (
          <div className="py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No WFC reviews yet. Generate one using the wfc-review script!
            </p>
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="py-12">
            <p className="text-gray-500 dark:text-gray-400">No reviews match your search.</p>
          </div>
        ) : (
          <div className="py-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review) => (
              <a
                key={review.slug}
                href={`/wfc-reviews/${review.slug}`}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">
                      {review.data.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {review.data.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold text-primary-500">{review.data.rating}/5</div>
                    <div
                      className={`text-xs font-medium px-3 py-1 rounded ${
                        review.data.wfcSuitability === 'Excellent'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : review.data.wfcSuitability === 'Good'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                      }`}
                    >
                      {review.data.wfcSuitability}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
