import type { Metadata } from 'next'
import { cormorantGaramond, inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'BMAD Wildlife Photography',
  description: 'Professional wildlife photography portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
