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
    <header className="sticky top-0 z-50 w-full border-b border-(--border-subtle) bg-(--header-bg) backdrop-blur-md">
      <div className="linear-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-[15px] font-[590] tracking-[-0.02em] text-(--foreground)">
          Jude<span className="text-(--accent)">.</span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-[13px] font-[510] tracking-[-0.01em] transition-colors ${
                  isActive ? "text-(--foreground)" : "text-(--text-secondary) hover:text-(--foreground)"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-4.25 left-0 right-0 h-px rounded-full bg-(--accent)" />
                )}
              </Link>
            )
          })}
          
          <div className="ml-1 flex items-center border-l border-(--border-subtle) pl-4">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}