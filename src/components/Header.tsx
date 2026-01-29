interface HeaderProps {
  currentPage?: 'home' | 'color' | 'bw' | 'about'
}

export function Header({ currentPage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="font-serif text-xl md:text-2xl font-semibold text-neutral-800 hover:text-forest-600 transition-colors"
        >
          Jayathu Amarasinghe </a>
        <nav className="flex gap-4 md:gap-8 items-center text-sm md:text-base">
          <a
            href="/gallery/color"
            className={`transition-colors relative group ${
              currentPage === 'color'
                ? 'text-forest-600 font-medium'
                : 'text-neutral-700 hover:text-forest-500'
            }`}
          >
            Color Gallery
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-forest-500 transition-all duration-300 ${
                currentPage === 'color' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </a>
          <a
            href="/gallery/bw"
            className={`transition-colors relative group ${
              currentPage === 'bw'
                ? 'text-forest-600 font-medium'
                : 'text-neutral-700 hover:text-forest-500'
            }`}
          >
            Black &amp; White Gallery
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-forest-500 transition-all duration-300 ${
                currentPage === 'bw' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </a>
          <a
            href="/about"
            className={`transition-colors relative group ${
              currentPage === 'about'
                ? 'text-forest-600 font-medium'
                : 'text-neutral-700 hover:text-forest-500'
            }`}
          >
            About
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-forest-500 transition-all duration-300 ${
                currentPage === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </a>
        </nav>
      </div>
    </header>
  )
}
