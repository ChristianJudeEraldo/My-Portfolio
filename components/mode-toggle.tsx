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
    return <div className="h-[24px]" /> 
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="bryl-label hover:text-[var(--ink)] transition-colors flex items-center gap-2"
    >
      <span className="w-2.5 h-2.5 rounded-full border border-[var(--gray-400)] flex items-center justify-center">
        <span className={`w-1.5 h-1.5 rounded-full bg-[var(--gray-400)] transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
      </span>
      {isDark ? "DARK THEME" : "LIGHT THEME"}
    </button>
  )
}