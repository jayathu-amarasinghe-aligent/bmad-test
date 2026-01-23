'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTimeOfDay } from '@/hooks/useTimeOfDay'
import { SocialIcons } from './SocialIcons'

const TIME_BACKGROUNDS = {
  dawn: 'https://placehold.co/1920x1080/f0a576/ffffff?text=Dawn+Wildlife',
  midday: 'https://placehold.co/1920x1080/87ceeb/ffffff?text=Midday+Wildlife',
  dusk: 'https://placehold.co/1920x1080/ff8c42/ffffff?text=Dusk+Wildlife',
  night: 'https://placehold.co/1920x1080/2c3e50/ffffff?text=Night+Wildlife',
}

export function HomePage() {
  const timeOfDay = useTimeOfDay()
  const [showNavigation, setShowNavigation] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    // Check if user has visited before (progressive disclosure)
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (hasVisited) {
      setShowNavigation(true)
      setIsFirstVisit(false)
      return
    }

    // Progressive disclosure: show navigation after 1 second
    const timer = setTimeout(() => {
      setShowNavigation(true)
      sessionStorage.setItem('hasVisited', 'true')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-50">
      {/* Time-adaptive background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={TIME_BACKGROUNDS[timeOfDay]}
          alt=""
          fill
          priority
          className="object-cover opacity-25 blur-sm"
          sizes="100vw"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Photographer name - appears immediately */}
        <h1 className="font-serif text-5xl font-bold text-forest-700 sm:text-6xl md:text-7xl">
          BMAD
        </h1>
        <p className="mt-2 font-serif text-xl text-neutral-600 sm:text-2xl">
          Wildlife Photography
        </p>

        {/* Navigation - progressive disclosure */}
        <nav
          className={`mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8 transition-all duration-600 ${
            showNavigation && isFirstVisit
              ? 'animate-fade-in'
              : showNavigation
                ? 'opacity-100'
                : 'opacity-0'
          }`}
        >
          <Link
            href="/gallery/color/"
            className="group relative inline-block px-8 py-4 text-lg font-medium transition-all duration-300"
          >
            <span className="relative z-10 text-forest-600 group-hover:text-forest-700">
              Color Gallery
            </span>
            <span className="absolute inset-0 scale-x-0 border-b-2 border-forest-500 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

          <Link
            href="/gallery/bw/"
            className="group relative inline-block px-8 py-4 text-lg font-medium transition-all duration-300"
          >
            <span className="relative z-10 text-savanna-600 group-hover:text-savanna-700">
              Black & White Gallery
            </span>
            <span className="absolute inset-0 scale-x-0 border-b-2 border-savanna-500 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </nav>

        {/* Time of day indicator (subtle) */}
        <p
          className={`mt-8 text-sm text-neutral-500 transition-all duration-600 ${
            showNavigation && isFirstVisit ? 'animate-fade-in delay-500' : ''
          }`}
        >
          {timeOfDay === 'dawn' && '🌅 Good morning'}
          {timeOfDay === 'midday' && '☀️ Good afternoon'}
          {timeOfDay === 'dusk' && '🌆 Good evening'}
          {timeOfDay === 'night' && '🌙 Good night'}
        </p>
      </div>

      {/* Social media icons - progressive disclosure after navigation */}
      <div
        className={`transition-all duration-600 ${
          showNavigation && isFirstVisit
            ? 'animate-fade-in delay-700'
            : showNavigation
              ? 'opacity-100'
              : 'opacity-0'
        }`}
      >
        <SocialIcons />
      </div>
    </main>
  )
}
