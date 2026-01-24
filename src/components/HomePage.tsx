'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTimeOfDay } from '@/hooks/useTimeOfDay'

const TIME_BACKGROUNDS = {
  dawn: {
    imageUrl: 'https://placehold.co/1920x1080/e0d5c3/735d45?text=Dawn+Wildlife',
  },
  midday: {
    imageUrl: 'https://placehold.co/1920x1080/d4cfc7/3a352f?text=Midday+Wildlife',
  },
  dusk: {
    imageUrl: 'https://placehold.co/1920x1080/c9b89d/735d45?text=Dusk+Wildlife',
  },
  night: {
    imageUrl: 'https://placehold.co/1920x1080/524c46/d4cfc7?text=Night+Wildlife',
  },
}

export function HomePage() {
  const autoTimeOfDay = useTimeOfDay()
  const [showNavigation, setShowNavigation] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [manualTimeOfDay, setManualTimeOfDay] = useState<string | null>(null)

  const timeOfDay = (manualTimeOfDay || autoTimeOfDay) as keyof typeof TIME_BACKGROUNDS

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (hasVisited) {
      setShowNavigation(true)
      setIsFirstVisit(false)
      return
    }

    const timer = setTimeout(() => {
      setShowNavigation(true)
      sessionStorage.setItem('hasVisited', 'true')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const background = TIME_BACKGROUNDS[timeOfDay]

  const timeLabels = {
    dawn: 'Dawn 🌅',
    midday: 'Midday ☀️',
    dusk: 'Dusk 🌇',
    night: 'Night 🌙',
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Time indicator */}
      <div className="absolute top-6 right-6 z-10 font-sans text-xs text-neutral-600 bg-white/80 px-4 py-2 rounded-full border border-neutral-600/20">
        Time: {timeLabels[timeOfDay]}
      </div>

      {/* Time-adaptive background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background.imageUrl}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </div>

      {/* Centered content */}
      <div className="relative z-[2] text-center px-6 py-12 max-w-[600px]">
        <h1 className="font-serif text-[clamp(36px,8vw,48px)] font-bold text-neutral-800 mb-4 tracking-[0.02em]">
          Wildlife Photography
        </h1>
        <p className="font-sans text-lg text-neutral-600 mb-12 font-light tracking-[0.01em]">
          Capturing the untamed beauty of nature
        </p>

        <nav
          className={`flex flex-row gap-8 mb-12 justify-center flex-wrap transition-opacity duration-600 ${
            showNavigation && isFirstVisit
              ? 'animate-fade-in'
              : showNavigation
                ? 'opacity-100'
                : 'opacity-0'
          }`}
        >
          <Link
            href="/gallery/color/"
            className="relative inline-block font-sans text-lg font-normal no-underline transition-all duration-300 ease-nature text-forest-600 nav-link-underline after:bg-forest-500 hover:text-forest-500"
          >
            Color Gallery
          </Link>
          <Link
            href="/gallery/bw/"
            className="relative inline-block font-sans text-lg font-normal no-underline transition-all duration-300 ease-nature text-savanna-600 nav-link-underline after:bg-savanna-500 hover:text-savanna-500"
          >
            Black &amp; White Gallery
          </Link>
          <Link
            href="/about/"
            className="relative inline-block font-sans text-lg font-normal no-underline transition-all duration-300 ease-nature text-neutral-600 nav-link-underline after:bg-neutral-600 hover:text-neutral-800"
          >
            About
          </Link>
        </nav>

        <div
          className={`flex gap-6 justify-center items-center transition-opacity duration-600 ${
            showNavigation && isFirstVisit
              ? 'animate-fade-in'
              : showNavigation
                ? 'opacity-100'
                : 'opacity-0'
          }`}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center text-neutral-600 no-underline rounded-full bg-white/50 border border-neutral-600/20 transition-all duration-[400ms] ease-nature text-xl hover:text-forest-600 hover:bg-forest-500/10 hover:border-forest-500 hover:-translate-y-1 hover-firefly"
            title="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center text-neutral-600 no-underline rounded-full bg-white/50 border border-neutral-600/20 transition-all duration-[400ms] ease-nature text-xl hover:text-forest-600 hover:bg-forest-500/10 hover:border-forest-500 hover:-translate-y-1 hover-firefly"
            title="Facebook"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-12 h-12 flex items-center justify-center text-neutral-600 no-underline rounded-full bg-white/50 border border-neutral-600/20 transition-all duration-[400ms] ease-nature text-xl hover:text-forest-600 hover:bg-forest-500/10 hover:border-forest-500 hover:-translate-y-1 hover-firefly"
            title="Email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Demo controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        <button
          className={`font-sans text-xs px-4 py-2 border rounded cursor-pointer transition-all duration-300 ${
            timeOfDay === 'dawn'
              ? 'bg-forest-600 text-white border-forest-600'
              : 'bg-white/90 border-neutral-600 hover:bg-forest-500 hover:text-white hover:border-forest-500'
          }`}
          onClick={() => setManualTimeOfDay('dawn')}
        >
          Dawn 🌅
        </button>
        <button
          className={`font-sans text-xs px-4 py-2 border rounded cursor-pointer transition-all duration-300 ${
            timeOfDay === 'midday'
              ? 'bg-forest-600 text-white border-forest-600'
              : 'bg-white/90 border-neutral-600 hover:bg-forest-500 hover:text-white hover:border-forest-500'
          }`}
          onClick={() => setManualTimeOfDay('midday')}
        >
          Midday ☀️
        </button>
        <button
          className={`font-sans text-xs px-4 py-2 border rounded cursor-pointer transition-all duration-300 ${
            timeOfDay === 'dusk'
              ? 'bg-forest-600 text-white border-forest-600'
              : 'bg-white/90 border-neutral-600 hover:bg-forest-500 hover:text-white hover:border-forest-500'
          }`}
          onClick={() => setManualTimeOfDay('dusk')}
        >
          Dusk 🌇
        </button>
        <button
          className={`font-sans text-xs px-4 py-2 border rounded cursor-pointer transition-all duration-300 ${
            timeOfDay === 'night'
              ? 'bg-forest-600 text-white border-forest-600'
              : 'bg-white/90 border-neutral-600 hover:bg-forest-500 hover:text-white hover:border-forest-500'
          }`}
          onClick={() => setManualTimeOfDay('night')}
        >
          Night 🌙
        </button>
      </div>
    </div>
  )
}
