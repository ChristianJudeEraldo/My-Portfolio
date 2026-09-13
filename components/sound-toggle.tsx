"use client"

import { useSound } from "@/components/sound-provider"
import { useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function SoundToggle() {
  const { enabled, setEnabled, play } = useSound()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-7 w-7 rounded-full bg-black/4 dark:bg-white/8" />
  }

  const handleToggle = () => {
    const next = !enabled
    setEnabled(next)
    if (next) {
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
      className={`relative inline-flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer ${
        enabled
          ? "border-black/8 dark:border-white/12 bg-white dark:bg-[#2c2c2e] text-(--apple-blue) shadow-xs"
          : "border-black/6 dark:border-white/8 bg-black/4 dark:bg-white/8 text-(--ink-tertiary) hover:text-(--ink)"
      }`}
      aria-pressed={enabled}
      aria-label={enabled ? "Mute interface sounds" : "Enable interface sounds"}
      title={enabled ? "Sound effects enabled" : "Sound effects muted"}
    >
      {enabled ? (
        <Volume2 size={14} strokeWidth={2} />
      ) : (
        <VolumeX size={14} strokeWidth={2} />
      )}
    </button>
  )
}
