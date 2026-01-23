import Link from 'next/link'

export default function ColorGalleryPage() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-block mb-8 text-forest-600 hover:text-forest-700 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-serif text-4xl font-bold text-forest-700 mb-4">
          Color Gallery
        </h1>
        <p className="text-neutral-600 text-lg">
          Coming soon - Wildlife photography in vivid color
        </p>
      </div>
    </main>
  )
}
