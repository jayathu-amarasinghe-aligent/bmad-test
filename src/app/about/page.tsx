'use client'

import { useEffect, useRef } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function AboutPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header currentPage="about" />

      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/about/nature-birds-pattern.png)',
            backgroundSize: '1000px auto',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Hero Section */}
      <section
        className="relative z-10 bg-white min-h-125 flex flex-col items-center justify-center py-16 md:py-20 px-6 text-center"
        style={{
          backgroundImage: 'url(/about/hero-elephant-bg.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img
          src="https://placehold.co/240x240/5a8a6d/ffffff?text=Profile"
          alt="Jayathu Amarasinghe"
          className="w-45 h-45 md:w-60 md:h-60 rounded-full border-4 border-forest-500 object-cover mb-8 shadow-[0_8px_24px_rgba(90,138,109,0.2)]"
        />
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-800 mb-3">
          Jayathu Amarasinghe
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 font-sans">
          Wildlife Photographer
        </p>
      </section>

      {/* Photo Strip 1 */}
      <div
        className="relative z-10 w-full h-62.5 md:h-100 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://placehold.co/1920x400/5a8a6d/ffffff?text=Wildlife+in+Action)'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/30" />
      </div>

      {/* Bio & Story Section */}
      <section className="relative z-10 max-w-4xl mx-auto py-16 md:py-24 px-6 bg-white">
        <h2 className="scroll-animate opacity-0 translate-y-8 font-serif text-3xl md:text-4xl font-bold text-forest-600 mb-6 transition-all duration-700 ease-out">
          My Story
        </h2>
        <p className="scroll-animate opacity-0 translate-y-8 text-base md:text-lg leading-relaxed text-neutral-600 mb-5 transition-all duration-700 ease-out delay-100">
          I grew up in a small town in Sri Lanka, where my passion for wildlife photography began. Immersed in nature from an early age, I explored and photographed across the country, visiting renowned national parks such as Yala, Wilpattu, and Kumana.
        </p>
        <p className="scroll-animate opacity-0 translate-y-8 text-base md:text-lg leading-relaxed text-neutral-600 mb-5 transition-all duration-700 ease-out delay-200">
          My strong fascination with leopards has driven me to closely study their behavior, shaping both my approach to wildlife observation and photography. I later moved to Australia and am now based in Adelaide, where I have continued exploring the Australian bush, photographing native wildlife including cockatoos and koalas.
        </p>
        <p className="scroll-animate opacity-0 translate-y-8 text-base md:text-lg leading-relaxed text-neutral-600 transition-all duration-700 ease-out delay-300">
          My journey has also taken me beyond Sri Lanka and Australia to destinations such as Kenya and Borneo, allowing me to experience and document wildlife across diverse ecosystems. I continue to seek out new landscapes and species, driven by curiosity, patience, and a deep respect for the natural world.
        </p>
      </section>

      {/* Photo Strip 2 */}
      <div
        className="relative z-10 w-full h-62.5 md:h-100 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://placehold.co/1920x400/5a8a6d/ffffff?text=Behind+the+Lens)'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/30" />
      </div>

      {/* Equipment & Approach Section */}
      <section className="relative z-10 max-w-4xl mx-auto py-16 md:py-24 px-6 bg-white">
        <h2 className="scroll-animate opacity-0 translate-y-8 font-serif text-3xl md:text-4xl font-bold text-forest-600 mb-6 transition-all duration-700 ease-out">
          Equipments
        </h2>
        <div className="space-y-6">
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              Primary Camera Bodies
            </h3>
            <ul className="space-y-2">
              <li className="text-neutral-600 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-forest-500 before:text-xl">
                Sony A1 mk2 - for incredible autofocus and continuous shooting
              </li>
              <li className="text-neutral-600 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-forest-500 before:text-xl">
                Sony A7rv - for versatility and high-resolution captures
              </li>
            </ul>
          </div>

          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              Lenses
            </h3>
            <ul className="space-y-2">
              <li className="text-neutral-600 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-forest-500 before:text-xl">
                Sony 400mm f/2.8 - prime telephoto for fast action
              </li>
              <li className="text-neutral-600 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-forest-500 before:text-xl">
                Sony 135mm f/1.8 - for intimate close-ups
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Photo Strip 3 */}
      <div
        className="relative z-10 w-full h-62.5 md:h-100 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://placehold.co/1920x400/5a8a6d/ffffff?text=Conservation+in+Action)'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/30" />
      </div>
      <Footer />
    </div>
  )
}
