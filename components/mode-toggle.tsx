"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
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

  const activeTheme = theme === "system" ? resolvedTheme : theme
  const isSystemMode = theme === "system"

  return (
    <div className="flex items-center gap-1 border border-foreground/10 p-1 rounded-full bg-background/50 backdrop-blur-md">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all duration-300 ${
          activeTheme === "light" && !isSystemMode
            ? "bg-amber-100 text-amber-900 shadow-md"
            : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
        }`}
        aria-label="Light Mode"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all duration-300 ${
          activeTheme === "dark" && !isSystemMode
            ? "bg-slate-800 text-slate-100 shadow-md"
            : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
        }`}
        aria-label="Dark Mode"
      >
        <Moon size={20} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-all duration-300 ${
          isSystemMode
            ? "bg-slate-600 text-slate-100 shadow-md"
            : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
        }`}
        aria-label="System Mode"
      >
        <Monitor size={20} />
      </button>
    </div>
  )
}