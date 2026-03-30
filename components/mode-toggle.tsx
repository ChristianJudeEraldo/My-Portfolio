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

  return (
    <div className="flex items-center gap-1 border border-foreground/10 p-1 rounded-full bg-background/50 backdrop-blur-md" data-theme-toggle>
      <button
        onClick={() => triggerThemeChange("light")}
        className={`p-2 rounded-full transition-all duration-300 ${
          activeTheme === "light"
            ? "bg-amber-100 text-amber-900 shadow-md"
            : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
        }`}
        aria-label="Light Mode"
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => triggerThemeChange("dark")}
        className={`p-2 rounded-full transition-all duration-300 ${
          activeTheme === "dark"
            ? "bg-slate-800 text-slate-100 shadow-md"
            : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
        }`}
        aria-label="Dark Mode"
      >
        <Moon size={18} />
      </button>
    </div>
  )
}