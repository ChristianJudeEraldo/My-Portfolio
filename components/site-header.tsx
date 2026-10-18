"use client"

import { useState, useEffect, useCallback } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { SoundToggle } from "@/components/sound-toggle"
import { SiteLogo } from "@/components/site-logo"
import { User, Wrench, FolderGit2, Award, Mail, Menu, X } from "lucide-react"

interface NavItem {
  name: string
  href: string
  id: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>("intro")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { name: "About", href: "#about", id: "about", icon: User },
    { name: "Skills", href: "#skills", id: "skills", icon: Wrench },
    { name: "Projects", href: "#projects", id: "projects", icon: FolderGit2 },
    { name: "Certificates", href: "#certificates", id: "certificates", icon: Award },
    { name: "Contact", href: "#contact", id: "contact", icon: Mail },
  ]

  // Track active section via scroll position
  useEffect(() => {
    const sectionIds = ["intro", "about", "skills", "projects", "certificates", "contact"]
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(id)
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
      
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${targetId}`)
      }
      setActiveSection(targetId)
    } else {
      window.location.href = `/#${targetId}`
    }
  }, [])

  const scrollToTop = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (window.location.pathname !== "/") {
      window.location.href = "/"
      return
    }
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
      {/* Mobile Top Bar (iOS Frosted Glass Navigation Bar) */}
      <header className="lg:hidden sticky top-0 z-50 flex h-14 items-center justify-between border-b border-black/6 dark:border-white/8 bg-(--surface-translucent) px-3 sm:px-4 backdrop-blur-2xl">
        <SiteLogo size="sm" showSubtitle={false} onClick={(e: any) => scrollToTop(e)} />
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ModeToggle />
          <div className="hidden sm:flex">
            <SoundToggle />
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-black/4 dark:bg-white/8 text-(--ink) transition-colors hover:bg-black/8 dark:hover:bg-white/14 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu (iOS Modal Sheet Blur) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-6 animate-fade-up px-6">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 text-(--ink) hover:bg-black/10 dark:hover:bg-white/15 cursor-pointer transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>

          <SiteLogo size="lg" showSubtitle={true} onClick={(e: any) => scrollToTop(e)} />
          <div className="flex flex-col items-stretch w-full max-w-xs gap-1.5 my-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-[16px] font-medium min-h-12 transition-all ${
                    isActive 
                      ? "bg-[#0071e3] text-white shadow-xs" 
                      : "text-(--ink-secondary) hover:text-(--ink) hover:bg-black/4 dark:hover:bg-white/6"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3 p-2 rounded-full bg-black/4 dark:bg-white/8 border border-black/6 dark:border-white/8">
            <ModeToggle />
            <SoundToggle />
          </div>
        </div>
      )}

      {/* Desktop Sidebar (macOS Sequoia / Sonoma Translucent Glass Sidebar) */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-60 flex-col border-r border-black/6 dark:border-white/8 bg-white/70 dark:bg-[#121214]/70 backdrop-blur-2xl py-8 px-5 justify-between z-30">
        <div>
          <div className="mb-10 px-2">
            <SiteLogo size="md" showSubtitle={true} onClick={(e: any) => scrollToTop(e)} />
          </div>

          <div className="space-y-1">
            <p className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-(--ink-tertiary) uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-1" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                const Icon = item.icon

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-150 ${
                      isActive 
                        ? "bg-[#0071e3]/10 text-[#0071e3] dark:bg-[#2997ff]/15 dark:text-[#2997ff] font-semibold" 
                        : "text-(--ink-secondary) hover:text-(--ink) hover:bg-black/4 dark:hover:bg-white/6"
                    }`}
                  >
                    <Icon 
                      size={16} 
                      className={`transition-colors ${
                        isActive 
                          ? "text-[#0071e3] dark:text-[#2997ff]" 
                          : "text-(--ink-tertiary) group-hover:text-(--ink)"
                      }`} 
                    />
                    <span>{item.name}</span>
                  </a>
                )
              })}
            </nav>
          </div>
        </div>
        
        {/* Apple Control Center Style Theme & Sound Bar */}
        <div className="p-3 rounded-2xl bg-black/3 dark:bg-white/5 border border-black/4 dark:border-white/6 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-medium text-(--ink-tertiary) px-1">
            <span>Controls</span>
            <span className="w-1.5 h-1.5 rounded-full bg-(--apple-green)" />
          </div>
          <div className="flex items-center justify-between pt-1">
            <ModeToggle />
            <SoundToggle />
          </div>
        </div>
      </aside>
    </>
  )
}