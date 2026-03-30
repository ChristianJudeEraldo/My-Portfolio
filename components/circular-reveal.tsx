"use client"

import React, { useState, useCallback } from "react"
import { useTheme } from "next-themes"

export function CircularReveal() {
  const { theme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [nextTheme, setNextTheme] = useState("")

  const handleThemeChange = useCallback(
    (newTheme: string) => {
      // Get the toggle button position
      const toggleButton = document.querySelector("[data-theme-toggle]")
      if (toggleButton) {
        const rect = toggleButton.getBoundingClientRect()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2
        setPosition({ x, y })
      }

      setNextTheme(newTheme)
      setIsAnimating(true)

      // Complete the theme change after the animation starts
      setTimeout(() => {
        setTheme(newTheme)
      }, 50)

      // Reset animation state after completion
      setTimeout(() => {
        setIsAnimating(false)
      }, 600)
    },
    [setTheme]
  )

  // Expose the function globally for the ModeToggle component
  React.useEffect(() => {
    ;(window as any).__triggerCircularReveal = handleThemeChange
  }, [handleThemeChange])

  if (!isAnimating) return null

  return (
    <div
      className="circular-reveal-overlay"
      style={
        {
          "--reveal-x": `${position.x}px`,
          "--reveal-y": `${position.y}px`,
        } as React.CSSProperties
      }
    />
  )
}
