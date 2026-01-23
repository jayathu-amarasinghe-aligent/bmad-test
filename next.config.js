/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export with external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
  trailingSlash: true, // Optional: adds trailing slashes to URLs
  // Turbopack is enabled by default in Next.js 16
  // React Compiler is enabled by default in Next.js 16
}

module.exports = nextConfig
