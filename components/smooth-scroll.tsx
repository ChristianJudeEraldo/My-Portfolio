"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export function SmoothScroll() {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis
    ;(window as any).__lenis = lenis

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      delete (window as any).__lenis
    }
  }, [])

  // On route change, reset scroll position smoothly / immediately
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return null
}
