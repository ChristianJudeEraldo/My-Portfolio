"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const circleRef = useRef<SVGCircleElement>(null)
  const pathname = usePathname()

  // Radius is 16, circumference = 2 * PI * 16 ≈ 100.53
  const circumference = 100.53

  useEffect(() => {
    let rafId: number | null = null
    let lastVisible = false

    const getScrollInfo = () => {
      const lenis = (window as any).__lenis
      if (lenis && typeof lenis.progress === "number" && typeof lenis.scroll === "number") {
        return {
          scrollTop: lenis.scroll,
          progress: Math.min(Math.max(lenis.progress, 0), 1),
        }
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      const scrollHeight =
        (document.documentElement.scrollHeight || document.body.scrollHeight || 0) -
        document.documentElement.clientHeight
      const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0

      return { scrollTop, progress }
    }

    const update = (forcedProgress?: number, forcedScrollTop?: number) => {
      const info =
        forcedProgress !== undefined && forcedScrollTop !== undefined
          ? { progress: forcedProgress, scrollTop: forcedScrollTop }
          : getScrollInfo()

      if (circleRef.current) {
        const offset = circumference * (1 - info.progress)
        circleRef.current.style.strokeDashoffset = `${offset}`
      }

      const shouldBeVisible = info.scrollTop > 260
      if (shouldBeVisible !== lastVisible) {
        lastVisible = shouldBeVisible
        setIsVisible(shouldBeVisible)
      }
    }

    const handleScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        update()
        rafId = null
      })
    }

    // Connect to Lenis if active
    const lenis = (window as any).__lenis
    let unsubscribeLenis: (() => void) | null = null

    if (lenis && typeof lenis.on === "function") {
      const onLenisScroll = (e: any) => {
        const p =
          typeof e.progress === "number"
            ? Math.min(Math.max(e.progress, 0), 1)
            : getScrollInfo().progress
        const s = typeof e.scroll === "number" ? e.scroll : getScrollInfo().scrollTop
        update(p, s)
      }
      lenis.on("scroll", onLenisScroll)
      unsubscribeLenis = () => {
        if (typeof lenis.off === "function") {
          lenis.off("scroll", onLenisScroll)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    // Initial calculation and post-navigation updates
    update()
    const t1 = setTimeout(() => update(), 50)
    const t2 = setTimeout(() => update(), 250)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (unsubscribeLenis) unsubscribeLenis()
      if (rafId !== null) cancelAnimationFrame(rafId)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname])

  const scrollToTop = () => {
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:bottom-8 md:right-8 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-(--gray-200) bg-(--background)/90 text-(--ink) backdrop-blur-md shadow-xs transition-all duration-300 hover:border-(--gray-400) hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--gray-400) active:scale-95 cursor-pointer"
      >
        {/* Circular scroll progress ring */}
        <svg
          className="absolute inset-0 h-full w-full -rotate-90 text-(--gray-200)"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="opacity-30"
          />
          <circle
            ref={circleRef}
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.5"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            className="will-change-[stroke-dashoffset]"
          />
        </svg>

        {/* Up Arrow Icon with upward hover nudge */}
        <ArrowUp className="h-4 w-4 relative z-10 text-(--gray-500) transition-all duration-200 group-hover:text-(--ink) group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}
