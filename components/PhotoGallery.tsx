import React, { useState, useEffect, useCallback } from 'react'

interface TravelPhoto {
  url: string
  caption: string
  location: string
}

interface PhotoGalleryProps {
  photos: TravelPhoto[]
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % photos.length)
  }, [selectedIndex, photos.length])

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)
  }, [selectedIndex, photos.length])

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, goNext, goPrev])

  if (photos.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 px-3 pb-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="truncate text-sm font-medium text-white">{photo.caption}</p>
              <p className="truncate text-xs text-gray-300">{photo.location}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
          role="presentation"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') closeLightbox()
          }}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Previous"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:right-4 md:-translate-y-1/2"
            aria-label="Next"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
            onKeyDown={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].url.replace('w=800', 'w=1600')}
              alt={photos[selectedIndex].caption}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-base font-medium text-white">{photos[selectedIndex].caption}</p>
            <p className="mt-1 text-sm text-gray-400">{photos[selectedIndex].location}</p>
            <p className="mt-2 text-xs text-gray-500">
              {selectedIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default PhotoGallery
