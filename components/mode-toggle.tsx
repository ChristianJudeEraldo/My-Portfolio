"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom"

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const isTransitioningRef = React.useRef(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div 
        className="h-7 w-12.5 rounded-full border border-black/8 dark:border-white/10 bg-black/4 dark:bg-white/8" 
        aria-hidden="true" 
      />
    )
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme
  const isDark = activeTheme === "dark"

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioningRef.current) return
    const nextTheme = isDark ? "light" : "dark"

    // 1. Get exact center of the clicked switch button
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    // 2. Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setTheme(nextTheme)
      return
    }

    // 3. View Transitions API (Chrome 111+, Safari 18+, Edge, Firefox 141+)
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      isTransitioningRef.current = true

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )

      const transition = (document as any).startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme)
        })
        document.documentElement.classList.toggle("dark", nextTheme === "dark")
      })

      transition.ready
        .then(() => {
          const anim = document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 450,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              pseudoElement: "::view-transition-new(root)",
            } as any
          )

          anim.finished.finally(() => {
            isTransitioningRef.current = false
          })
        })
        .catch(() => {
          isTransitioningRef.current = false
        })

      return
    }

    // 4. Smooth fallback for older browsers
    if (typeof window !== "undefined" && (window as any).__triggerFallbackReveal) {
      isTransitioningRef.current = true
      ;(window as any).__triggerFallbackReveal(nextTheme, { x, y })
      setTimeout(() => {
        isTransitioningRef.current = false
      }, 450)
    } else {
      setTheme(nextTheme)
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      data-theme-toggle
      onClick={toggleTheme}
      className={`group relative inline-flex h-7 w-12.5 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue) ${
        isDark 
          ? "bg-[#2c2c2e] border border-white/12" 
          : "bg-[#e5e5ea] border border-black/6"
      }`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Background track indicator icons */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-(--ink-tertiary)">
        {/* Sun Icon */}
        <svg
          className={`h-3 w-3 transition-opacity duration-200 ${
            isDark ? "opacity-40" : "opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`h-3 w-3 transition-opacity duration-200 ${
            isDark ? "opacity-0" : "opacity-40"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>

      {/* Authentic iOS Circular Thumb */}
      <span
        className={`pointer-events-none relative z-10 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-[0_2px_4px_rgba(0,0,0,0.18),0_0_1px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "translate-x-5.5" : "translate-x-0"
        }`}
      >
        {/* Sun icon inside thumb in light mode */}
        <svg
          className={`h-3 w-3 text-[#f59e0b] transition-all duration-300 ${
            isDark
              ? "absolute scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" fill="#f59e0b" fillOpacity="0.3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Moon icon inside thumb in dark mode */}
        <svg
          className={`h-3 w-3 text-[#0a84ff] transition-all duration-300 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "absolute scale-0 -rotate-90 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>
    </button>
  )
}