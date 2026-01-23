import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom matte nature color palette
        forest: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#b9dccb',
          300: '#8dc4aa',
          400: '#5fa687',
          500: '#3f8a6b',
          600: '#2e6e54',
          700: '#255843',
          800: '#1f4636',
          900: '#1b3a2d',
        },
        savanna: {
          50: '#faf8f3',
          100: '#f3ede0',
          200: '#e7dac0',
          300: '#d6bf97',
          400: '#c5a26e',
          500: '#b88a52',
          600: '#aa7546',
          700: '#8e5d3c',
          800: '#744c36',
          900: '#5f402f',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant-garamond)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
