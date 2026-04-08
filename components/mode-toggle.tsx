"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

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
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-0 min-w-0 ${
        isDark ? "bg-zinc-700 hover:bg-zinc-600" : "bg-slate-300 hover:bg-gray-400"
      }`}
      aria-label="Toggle theme"
      data-theme-toggle
      type="button"
    >
      <span
        className={`absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out ${
          isDark ? "translate-x-5 bg-slate-800" : "translate-x-0 bg-amber-100"
        }`}
      >
        {isDark ? <Moon className="h-4 w-4 text-slate-100" /> : <Sun className="h-4 w-4 text-gray-500" />}
      </span>
    </button>
  )
}