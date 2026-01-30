'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ImageMetadata from './ImageMetadata'

interface ImageMetadataType {
  camera: string | null
  iso: string | null
  aperture: string | null
  shutter: string | null
  lens: string | null
  focalLength: string | null
  location: string | null
  dateTaken: string | null
}

interface ImageData {
  id: string
  url: string
  alt: string
  width: number
  height: number
  metadata: ImageMetadataType
}

interface LightboxProps {
  images: ImageData[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (direction: number) => void
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [showMetadata, setShowMetadata] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(-1)
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'i' || e.key === 'I') setShowMetadata((prev) => !prev)
    }

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onNavigate])

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 bg-black/95 z-1000 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 border border-white/20 rounded-full text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Previous button */}
      <button
        className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-20 w-12 h-12 bg-white/10 border border-white/20 rounded-full text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(-1)
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-20 w-12 h-12 bg-white/10 border border-white/20 rounded-full text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(1)
        }}
        aria-label="Next"
      >
        ›
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.url}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          className="max-w-full max-h-[90vh] w-auto h-auto block"
          priority
        />

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-sans">
          {currentIndex + 1} of {images.length}
        </div>

        {/* Metadata toggle button */}
        <button
          className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 border border-white/20 rounded-full text-white text-lg flex items-center justify-center hover:bg-white/20 transition-colors"
          onClick={() => setShowMetadata((prev) => !prev)}
          aria-label="Toggle metadata"
        >
          i
        </button>

        {/* Metadata panel */}
        {showMetadata && (
          <ImageMetadata
            title={currentImage.alt}
            metadata={currentImage.metadata}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-125 animate-fade-in"
          />
        )}
      </div>
    </div>
  )
}
