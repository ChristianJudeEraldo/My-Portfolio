"use client"

import { useState, useEffect, useCallback } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { SoundToggle } from "@/components/sound-toggle"
import { SiteLogo } from "@/components/site-logo"

interface NavItem {
  name: string
  href: string
  id: string
}

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>("intro")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  // Track active section via IntersectionObserver and scroll position
  useEffect(() => {
    const sectionIds = ["intro", "about", "skills", "projects", "gallery", "contact"]
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            // Map 'gallery' to 'projects' or keep active
            if (id === "gallery") {
              setActiveSection("projects")
            } else {
              setActiveSection(id)
            }
            return
          }
        }
      }
      setActiveSection("intro")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const element = document.getElementById(targetId)
    if (element) {
      const lenis = (window as any).__lenis
      if (lenis) {
        lenis.scrollTo(element, { offset: -24, duration: 1.0 })
      } else {
        const top = element.getBoundingClientRect().top + window.scrollY - 24
        window.scrollTo({ top, behavior: "smooth" })
      }
      
      // Update browser history hash without jump
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${targetId}`)
      }
      setActiveSection(targetId)
    }
  }, [])

  const scrollToTop = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.0 })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    if (window.history.pushState) {
      window.history.pushState(null, "", "/")
    }
    setActiveSection("intro")
  }, [])

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden sticky top-0 z-50 flex h-14 items-center justify-between border-b border-(--gray-200) bg-(--background)/90 px-4 backdrop-blur-md">
        <SiteLogo size="sm" showSubtitle={true} onClick={(e: any) => scrollToTop(e)} />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SoundToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bryl-label p-2 ml-1 cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-(--background)/95 backdrop-blur-md flex flex-col items-center justify-center gap-7 animate-fade-up">
          <SiteLogo size="lg" showSubtitle={true} onClick={(e: any) => scrollToTop(e)} />
          <div className="flex flex-col items-center gap-6 my-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-2xl font-mono lowercase tracking-tight transition-colors ${
                    isActive ? "text-(--ink) font-bold" : "text-(--gray-500) hover:text-(--ink)"
                  }`}
                >
                  {isActive && <span className="mr-2 text-(--ink)">→</span>}
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-56 flex-col border-r border-(--gray-200) bg-(--background) py-10 px-8 justify-between z-30">
        <div>
          <div className="mb-12">
            <SiteLogo size="md" showSubtitle={true} onClick={(e: any) => scrollToTop(e)} />
          </div>
          <nav className="flex flex-col" aria-label="Main Navigation">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id

              return (
                <div key={item.id} className="group flex flex-col">
                  {index > 0 && <div className="bryl-hairline my-2.5 opacity-60" />}
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`flex items-center gap-2 py-1 text-[13px] font-mono tracking-tight transition-colors ${
                      isActive ? "text-(--ink) font-semibold" : "text-(--gray-500) hover:text-(--ink)"
                    }`}
                  >
                    <span className={`text-[14px] font-serif leading-none transition-opacity ${isActive ? "opacity-100 text-(--ink)" : "opacity-0 group-hover:opacity-100 text-(--gray-300)"}`}>
                      →
                    </span>
                    {item.name}
                  </a>
                </div>
              )
            })}
          </nav>
        </div>
        
        <div className="space-y-4">
          <div className="bryl-hairline opacity-60" />
          <div className="flex items-center justify-between">
            <span className="bryl-label text-[9px]">THEME & AUDIO</span>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <SoundToggle />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}