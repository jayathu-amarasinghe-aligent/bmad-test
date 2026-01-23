import Link from 'next/link'

export default function BWGalleryPage() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-block mb-8 text-savanna-600 hover:text-savanna-700 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-serif text-4xl font-bold text-savanna-700 mb-4">
          Black & White Gallery
        </h1>
        <p className="text-neutral-600 text-lg">
          Coming soon - Wildlife photography in timeless black and white
        </p>
      </div>
    </main>
  )
}
