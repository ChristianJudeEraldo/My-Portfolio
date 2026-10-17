"use client"

import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function CircularReveal() {
  const { setTheme } = useTheme()
  const [animating, setAnimating] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0, radius: 0 })
  const [targetTheme, setTargetTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Only register fallback listener if native startViewTransition is NOT supported
    if (typeof window !== "undefined" && !("startViewTransition" in document)) {
      ;(window as any).__triggerFallbackReveal = (
        nextTheme: "light" | "dark",
        point: { x: number; y: number }
      ) => {
        const radius = Math.hypot(
          Math.max(point.x, window.innerWidth - point.x),
          Math.max(point.y, window.innerHeight - point.y)
        )
        setCoords({ x: point.x, y: point.y, radius })
        setTargetTheme(nextTheme)
        setAnimating(true)

        // Switch theme midway through reveal
        setTimeout(() => {
          setTheme(nextTheme)
        }, 180)

        // Reset animation state after completion
        setTimeout(() => {
          setAnimating(false)
        }, 450)
      }
    }
  }, [setTheme])

  if (!animating) return null

  return (
    <div
      className="circular-reveal-fallback"
      style={
        {
          "--reveal-x": `${coords.x}px`,
          "--reveal-y": `${coords.y}px`,
          "--reveal-r": `${coords.radius}px`,
          backgroundColor: targetTheme === "dark" ? "#000000" : "#f5f5f7",
        } as React.CSSProperties
      }
      aria-hidden="true"
    />
  )
}
