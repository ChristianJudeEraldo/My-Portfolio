"use client"

import { useSound } from "@/components/sound-provider"
import { useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface SoundToggleProps {
  variant?: "circle" | "square"
}

export function SoundToggle({ variant = "circle" }: SoundToggleProps) {
  const { enabled, setEnabled, play } = useSound()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    if (variant === "square") {
      return (
        <div
          className="h-8 w-8 shrink-0 rounded-[10px] border border-black/8 dark:border-white/8lack/[0.03] dark:bg-[#1c1c1c]"
          aria-hidden="true"
        />
      )
    }
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

  if (variant === "square") {
    return (
      <button
        type="button"
        data-sound-toggle
        onClick={handleToggle}
        className={`relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue) ${
          enabled
            ? "border-black/12 dark:border-white/[0.14] bg-black/6 dark:bg-[#252525] text-(--ink) dark:text-white"
            : "border-black/8 dark:border-white/8 bg-black/3 dark:bg-[#1c1c1c] hover:bg-black/6 dark:hover:bg-[#252525] text-(--ink-secondary) dark:text-[#a1a1aa] hover:text-(--ink) dark:hover:text-white"
        }`}
        aria-pressed={enabled}
        aria-label={enabled ? "Mute interface sounds" : "Enable interface sounds"}
        title={enabled ? "Sound effects enabled" : "Sound effects muted"}
      >
        {enabled ? (
          <Volume2 size={14} strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <VolumeX size={14} strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>
    )
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
