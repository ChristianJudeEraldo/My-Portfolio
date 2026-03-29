"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid "Hydration Mismatch" (ensures the component only renders after the page loads)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-2 w-9 h-9" /> // Placeholder to prevent layout shift
  }

  return (
    <div className="flex items-center gap-1 border border-foreground/10 p-1 rounded-full bg-background/50 backdrop-blur-md">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-black text-white dark:bg-violet-500 dark:text-black shadow-md' : 'text-foreground/40 hover:text-foreground hover:bg-foreground/5'}`}
        aria-label="Light Mode"
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-black text-white dark:bg-violet-500 dark:text-black shadow-md' : 'text-foreground/40 hover:text-foreground hover:bg-foreground/5'}`}
        aria-label="Dark Mode"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-all ${theme === 'system' ? 'bg-black text-white dark:bg-violet-500 dark:text-black shadow-md' : 'text-foreground/40 hover:text-foreground hover:bg-foreground/5'}`}
        aria-label="System Mode"
      >
        <Monitor size={18} />
      </button>
    </div>
  )
}