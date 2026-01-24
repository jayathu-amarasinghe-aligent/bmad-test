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
          300: '#a3c4af',
          400: '#5fa687',
          500: '#5a8a6d',
          600: '#4a6f5a',
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
          500: '#8f7556',
          600: '#735d45',
          700: '#8e5d3c',
          800: '#483a2c',
          900: '#5f402f',
        },
        neutral: {
          50: '#faf9f7',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4cfc7',
          400: '#aea89f',
          500: '#737373',
          600: '#6b645d',
          700: '#404040',
          800: '#3a352f',
          900: '#171717',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant-garamond)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'firefly': 'firefly 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        firefly: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      transitionTimingFunction: {
        'nature': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
