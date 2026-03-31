"use client" // Required to use usePathname

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
          Jude<span className="text-blue-500">.</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => {
            // Check if the current path starts with the link href
            // This keeps "Projects" highlighted even when viewing a sub-project
            const isActive = pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {item.name}
                {/* Visual Highlight: An animated blue dot or underline */}
                {isActive && (
                  <span className="absolute -bottom-5.25 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                )}
              </Link>
            )
          })}
          
          <div className="ml-2 border-l border-foreground/10 pl-6">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}