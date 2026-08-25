"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div 
        className="h-[30px] w-[56px] rounded-full border border-[var(--gray-200)] bg-[var(--gray-100)]" 
        aria-hidden="true" 
      />
    )
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme
  const isDark = activeTheme === "dark"

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark"
    if (typeof window !== "undefined" && (window as any).__triggerCircularReveal) {
      ;(window as any).__triggerCircularReveal(nextTheme)
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
      className="group relative inline-flex h-[30px] w-[56px] shrink-0 cursor-pointer items-center rounded-full border border-[var(--gray-200)] bg-[var(--gray-100)] p-[3px] transition-colors duration-200 hover:border-[var(--gray-300)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gray-400)]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Background track icons (Sun on left, Moon on right) */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-[var(--gray-400)] transition-colors group-hover:text-[var(--gray-500)]">
        {/* Sun Icon (faintly visible in dark mode) */}
        <svg
          className={`h-3 w-3 transition-opacity duration-200 ${
            isDark ? "opacity-60" : "opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Moon Icon (faintly visible in light mode) */}
        <svg
          className={`h-3 w-3 transition-opacity duration-200 ${
            isDark ? "opacity-0" : "opacity-60"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>

      {/* Sliding Thumb */}
      <span
        className={`pointer-events-none relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-[var(--gray-200)] bg-[var(--background)] text-[var(--ink)] shadow-xs transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "translate-x-[26px]" : "translate-x-0"
        }`}
      >
        {/* Sun inside thumb (active in light mode) */}
        <svg
          className={`h-3 w-3 transition-all duration-300 ${
            isDark
              ? "absolute scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Moon inside thumb (active in dark mode) */}
        <svg
          className={`h-3 w-3 transition-all duration-300 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "absolute scale-0 -rotate-90 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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