'use client'

import { useState, useEffect } from 'react'

export type TimeOfDay = 'dawn' | 'midday' | 'dusk' | 'night'

export function useTimeOfDay(): TimeOfDay {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('midday')

  useEffect(() => {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 10) {
      setTimeOfDay('dawn')
    } else if (hour >= 10 && hour < 17) {
      setTimeOfDay('midday')
    } else if (hour >= 17 && hour < 20) {
      setTimeOfDay('dusk')
    } else {
      setTimeOfDay('night')
    }
  }, [])

  return timeOfDay
}
