"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight

      // Show button once user has scrolled past 260px
      setIsVisible(scrollTop > 260)

      if (scrollHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

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

  // Radius is 16, circumference = 2 * PI * 16 ≈ 100.53
  const circumference = 100.53
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

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
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>

        {/* Up Arrow Icon with upward hover nudge */}
        <ArrowUp className="h-4 w-4 relative z-10 text-(--gray-500) transition-all duration-200 group-hover:text-(--ink) group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}
