import { Cormorant_Garamond, Inter } from 'next/font/google'

export const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
})

export const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
