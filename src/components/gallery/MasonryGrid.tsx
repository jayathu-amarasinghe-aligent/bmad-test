'use client'

import { ReactNode } from 'react'

interface MasonryGridProps {
  children: ReactNode
}

export default function MasonryGrid({ children }: MasonryGridProps) {
  return (
    <div className="
      columns-1 gap-8
      sm:columns-2 sm:gap-10
      md:columns-2 md:gap-12
      lg:columns-3 lg:gap-16
      xl:columns-3 xl:gap-16
      2xl:columns-3 2xl:gap-20
      pt-15
    ">
      {children}
    </div>
  )
}
