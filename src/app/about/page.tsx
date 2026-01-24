import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-block text-forest-600 hover:text-forest-700"
        >
          ← Back to Home
        </Link>
        <h1 className="mt-8 font-serif text-4xl font-bold text-neutral-800">
          About
        </h1>
        <div className="mt-6 space-y-4 font-sans text-lg text-neutral-600">
          <p>
            Welcome to our wildlife photography portfolio. This is a showcase
            of nature&apos;s beauty captured through the lens.
          </p>
          <p>
            More content coming soon...
          </p>
        </div>
      </div>
    </main>
  )
}
