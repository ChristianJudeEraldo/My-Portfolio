"use client"

import { useSound } from "@/components/sound-provider"
import { useState, useEffect } from "react"

export function SoundToggle() {
  const { enabled, setEnabled, play } = useSound()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[30px] w-[30px]" />
  }

  const handleToggle = () => {
    const next = !enabled
    setEnabled(next)
    if (next) {
      // Play a chime when the user turns sounds ON, so they get
      // immediate feedback that it works. We need a small delay
      // because the state update hasn't propagated yet.
      setTimeout(() => {
        play("chime")
      }, 50)
    }
  }

  return (
    <button
      type="button"
      data-sound-toggle
      onClick={handleToggle}
      className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-(--gray-200) text-(--gray-500) hover:border-(--gray-300) hover:text-(--ink) transition-all duration-200"
      aria-pressed={enabled}
      aria-label={enabled ? "Mute interface sounds" : "Enable interface sounds"}
      title={enabled ? "Sounds on" : "Sounds off"}
    >
      {/* Sound ON icon */}
      <svg
        className={`h-3.5 w-3.5 ${enabled ? "block" : "hidden"}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 10v4h3l4 3V7L8 10H5zM16 9a4 4 0 010 6M18.5 6.5a7.5 7.5 0 010 11"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Sound OFF icon */}
      <svg
        className={`h-3.5 w-3.5 ${enabled ? "hidden" : "block"}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 10v4h3l4 3V7L8 10H5zM16 10l5 5M21 10l-5 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
