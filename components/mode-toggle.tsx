"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const clipPathId = React.useId().replace(/:/g, "")

  // Avoid "Hydration Mismatch" (ensures the component only renders after the page loads)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-2 w-9 h-9" /> // Placeholder to prevent layout shift
  }

  const triggerThemeChange = (newTheme: string) => {
    const triggerReveal = (window as any).__triggerCircularReveal
    if (triggerReveal) {
      triggerReveal(newTheme)
    } else {
      setTheme(newTheme)
    }
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme
  const isDark = activeTheme === "dark"

  const toggleTheme = () => {
    triggerThemeChange(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${isDark ? "theme-toggle--toggled" : ""}`}
      title="Toggle theme"
      aria-label="Toggle theme"
      data-theme-toggle
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="1em"
        height="1em"
        fill="currentColor"
        strokeLinecap="round"
        className="theme-toggle__classic"
        viewBox="0 0 32 32"
      >
        <clipPath id={clipPathId}>
          <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
        </clipPath>
        <g clipPath={`url(#${clipPathId})`}>
          <circle cx="16" cy="16" r="9.34" />
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M16 5.5v-4" />
            <path d="M16 30.5v-4" />
            <path d="M1.5 16h4" />
            <path d="M26.5 16h4" />
            <path d="m23.4 8.6 2.8-2.8" />
            <path d="m5.7 26.3 2.9-2.9" />
            <path d="m5.8 5.8 2.8 2.8" />
            <path d="m23.4 23.4 2.9 2.9" />
          </g>
        </g>
      </svg>
    </button>
  )
}