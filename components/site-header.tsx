"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[var(--gray-200)] bg-[var(--background)]/90 px-4 backdrop-blur-md">
        <Link href="/" className="font-mono text-[13px] font-bold tracking-tight text-[var(--ink)] uppercase">
          Jude
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bryl-label p-2"
        >
          {isMobileMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      {/* Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 animate-fade-up">
          <Link href="/" className="font-mono text-[11px] uppercase tracking-widest text-[var(--gray-500)] mb-4">
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl font-bold tracking-tight text-[var(--ink)]"
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-8">
            <ModeToggle />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[14rem] flex-col border-r border-[var(--gray-200)] bg-[var(--background)] py-10 px-8 justify-between z-30">
        <div>
          <Link href="/" className="font-mono text-[13px] font-bold tracking-tight text-[var(--ink)] uppercase mb-14 block">
            Jude
          </Link>
          <nav className="flex flex-col">
            {navItems.map((item, index) => {
              const isActive = pathname.startsWith(item.href)

              return (
                <div key={item.href} className="group flex flex-col">
                  {index > 0 && <div className="bryl-hairline my-3 opacity-60" />}
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 py-1 text-[13px] font-medium transition-colors ${
                      isActive ? "text-[var(--ink)]" : "text-[var(--gray-500)] hover:text-[var(--ink)]"
                    }`}
                  >
                    <span className={`text-[15px] font-serif leading-none transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 text-[var(--gray-300)]"}`}>
                      →
                    </span>
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </nav>
        </div>
        
        <div>
          <ModeToggle />
        </div>
      </aside>
    </>
  )
}