'use client'

interface ImageMetadata {
  camera: string | null
  iso: string | null
  aperture: string | null
  shutter: string | null
  lens: string | null
  focalLength: string | null
  location: string | null
  dateTaken: string | null
}

interface ImageMetadataProps {
  title: string
  metadata: ImageMetadata
  className?: string
}

export default function ImageMetadata({ title, metadata, className = '' }: ImageMetadataProps) {
  const hasExifData = metadata.camera || metadata.lens || metadata.aperture || metadata.shutter || metadata.iso
  const hasLocationData = metadata.location || metadata.dateTaken

  return (
    <div className={`bg-black/70 text-white px-6 py-4 rounded-lg ${className}`}>
      {/* <h3 className="font-serif text-lg mb-2">{title}</h3> */}
      <div className="font-mono text-xs leading-relaxed opacity-90">
        {/* EXIF Data */}
        {hasExifData && (
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {metadata.camera && <span>{metadata.camera}</span>}
            {metadata.lens && (
              <>
                <span>•</span>
                <span>{metadata.lens}</span>
              </>
            )}
            {metadata.aperture && (
              <>
                <span>•</span>
                <span>{metadata.aperture}</span>
              </>
            )}
            {metadata.shutter && (
              <>
                <span>•</span>
                <span>{metadata.shutter}</span>
              </>
            )}
            {metadata.iso && (
              <>
                <span>•</span>
                <span>ISO {metadata.iso}</span>
              </>
            )}
          </div>
        )}

        {/* Location and Date */}
        {hasLocationData && (
          <div className="mt-2 space-y-1">
            {metadata.location && (
              <div className="flex items-center gap-1.5">
                <span>📍</span>
                <span>{metadata.location}</span>
              </div>
            )}
            {metadata.dateTaken && (
              <div>
                {new Date(metadata.dateTaken).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
          </div>
        )}

        {/* No metadata message */}
        {!hasExifData && !hasLocationData && (
          <div className="text-neutral-300 italic">
            No metadata available for this image
          </div>
        )}
      </div>
    </div>
  )
}
