"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { SoundToggle } from "@/components/sound-toggle"
import { projects } from "@/data/projects"
import { certificates } from "@/data/certificates"
import {
  User,
  Wrench,
  FolderGit2,
  Award,
  Mail,
  PanelLeftClose,
  PanelLeftOpen,
  PanelLeft,
  X,
} from "lucide-react"

interface NavItem {
  name: string
  href: string
  id: string
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  count?: number
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about", id: "about", icon: User },
  { name: "Skills", href: "#skills", id: "skills", icon: Wrench, count: 12 },
  { name: "Projects", href: "#projects", id: "projects", icon: FolderGit2, count: projects.length },
]

const EXPLORE_NAV_ITEMS: NavItem[] = [
  { name: "Certificates", href: "#certificates", id: "certificates", icon: Award, count: certificates.length },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
]

const ALL_SECTION_IDS = ["intro", "about", "skills", "projects", "certificates", "contact"]

const CLOCK_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Manila",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
})

function SidebarClock() {
  const timeRef = useRef<HTMLTimeElement | null>(null)

  useEffect(() => {
    let timeoutId: number | undefined
    let intervalId: number | undefined

    const updateTime = () => {
      const el = timeRef.current
      if (!el) return
      const formatted = CLOCK_FORMATTER.format(new Date())
      el.textContent = formatted
      el.dateTime = formatted
    }

    const stopClock = () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
        timeoutId = undefined
      }
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
        intervalId = undefined
      }
    }

    const startClock = () => {
      stopClock()
      updateTime()
      const msUntilNextSecond = 1000 - (Date.now() % 1000)
      timeoutId = window.setTimeout(() => {
        updateTime()
        intervalId = window.setInterval(updateTime, 1000)
      }, msUntilNextSecond)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopClock()
      } else {
        startClock()
      }
    }

    if (document.visibilityState !== "hidden") {
      startClock()
    } else {
      updateTime()
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      stopClock()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <time
      ref={timeRef}
      title="Philippine Standard Time (GMT+8)"
      aria-label="Current time in GMT+8"
      className="text-[11.5px] font-mono tabular-nums font-medium text-(--ink-tertiary) dark:text-[#737373] pl-0.5 select-none whitespace-nowrap"
    >
      --:--:--
    </time>
  )
}

function GitHubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

const SQUARE_ICON_BTN_CLASS =
  "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-black/8 dark:border-white/[0.08] bg-black/[0.03] dark:bg-[#1c1c1c] hover:bg-black/[0.06] dark:hover:bg-[#252525] text-(--ink-secondary) dark:text-[#a1a1aa] hover:text-(--ink) dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"

interface SidebarContentProps {
  collapsed: boolean
  activeSection: string
  isMobileDrawer?: boolean
  closeButtonRef?: React.RefObject<HTMLButtonElement | null>
  onToggleCollapse?: () => void
  onCloseDrawer?: () => void
  onNavigateSection: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void
  onNavigateTop: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function SidebarContent({
  collapsed,
  activeSection,
  isMobileDrawer = false,
  closeButtonRef,
  onToggleCollapse,
  onCloseDrawer,
  onNavigateSection,
  onNavigateTop,
}: SidebarContentProps) {
  const renderNavLink = (item: NavItem) => {
    const isActive = activeSection === item.id
    const Icon = item.icon

    return (
      <a
        key={item.id}
        href={item.href}
        onClick={(e) => onNavigateSection(e, item.id)}
        aria-current={isActive ? "page" : undefined}
        title={collapsed ? item.name : undefined}
        aria-label={collapsed ? item.name : undefined}
        className={`group flex items-center rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue) ${
          collapsed ? "justify-center w-10 h-10 mx-auto" : "justify-between gap-2.5 px-2.5 py-2"
        } ${
          isActive
            ? "bg-black/6 dark:bg-white/8 text-(--ink) dark:text-white font-semibold"
            : "text-(--ink-secondary) dark:text-[#c7c7cc] hover:text-(--ink) dark:hover:text-white hover:bg-black/4 dark:hover:bg-white/5 font-medium"
        }`}
      >
        <span className="flex items-center gap-3 min-w-0">
          <Icon
            size={16}
            strokeWidth={1.65}
            aria-hidden="true"
            className={`shrink-0 transition-colors ${
              isActive
                ? "text-(--ink) dark:text-white"
                : "text-(--ink-tertiary) dark:text-[#7c7c80] group-hover:text-(--ink) dark:group-hover:text-white"
            }`}
          />
          {!collapsed && <span className="text-[13.5px] truncate">{item.name}</span>}
        </span>

        {!collapsed && item.count !== undefined && (
          <span className="text-[11.5px] font-mono tabular-nums text-(--ink-tertiary) dark:text-[#686868] shrink-0">
            {item.count}
          </span>
        )}
      </a>
    )
  }

  return (
    <>
      {/* ─── Top Header ─── */}
      <div
        className={`flex items-center shrink-0 ${
          collapsed ? "justify-center" : "justify-between gap-2 px-1"
        }`}
      >
        {!collapsed && (
          <Link
            href="/"
            onClick={onNavigateTop}
            className="text-[15px] font-semibold tracking-tight text-(--ink) dark:text-white hover:opacity-80 transition-opacity truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue) rounded-md"
          >
            Christian Jude
          </Link>
        )}

        {isMobileDrawer ? (
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onCloseDrawer}
            aria-label="Close navigation drawer"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-(--ink-secondary) dark:text-[#a1a1aa] hover:text-(--ink) dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/6 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
          >
            <X size={16} strokeWidth={1.75} aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-(--ink-secondary) dark:text-[#a1a1aa] hover:text-(--ink) dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/6 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
          >
            {collapsed ? (
              <PanelLeftOpen size={16} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <PanelLeftClose size={16} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      {/* ─── Primary Contact Pill CTA ─── */}
      <div className="mt-4 shrink-0">
        <a
          href="#contact"
          onClick={(e) => onNavigateSection(e, "contact")}
          title={collapsed ? "Contact" : undefined}
          aria-label={collapsed ? "Contact" : undefined}
          className={`flex items-center rounded-full border border-black/10 dark:border-white/9 bg-black/3 dark:bg-[#1c1c1c] hover:bg-black/6 dark:hover:bg-[#242424] text-(--ink) dark:text-white text-[13.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue) ${
            collapsed ? "justify-center w-10 h-10 mx-auto" : "justify-start gap-3 w-full px-4 py-2.5"
          }`}
        >
          <Mail
            size={15}
            strokeWidth={1.75}
            aria-hidden="true"
            className="shrink-0 text-(--ink-secondary) dark:text-[#a1a1aa]"
          />
          {!collapsed && <span>Contact</span>}
        </a>
      </div>

      {/* ─── Scrollable Middle Navigation List ─── */}
      <div
        className="flex-1 min-h-0 overflow-y-auto my-3 pr-1 sidebar-scroll"
        data-lenis-prevent
      >
        <nav aria-label="Main Navigation" className="flex flex-col">
          <div className="flex flex-col gap-0.5">
            {PRIMARY_NAV_ITEMS.map(renderNavLink)}
          </div>

          {collapsed ? (
            <div
              className="my-2.5 mx-auto w-5 border-t border-black/8 dark:border-white/8"
              aria-hidden="true"
            />
          ) : (
            <p className="px-2.5 pt-5 pb-1.5 text-[11.5px] font-medium text-(--ink-tertiary) dark:text-[#686868] select-none">
              Explore
            </p>
          )}

          <div className="flex flex-col gap-0.5">
            {EXPLORE_NAV_ITEMS.map(renderNavLink)}
          </div>
        </nav>
      </div>

      {/* ─── Pinned Bottom Footer ─── */}
      <div className="shrink-0">
        <div
          className={`border-t border-black/6 dark:border-white/[0.07] pt-3 ${
            collapsed
              ? "flex flex-col items-center gap-1.5"
              : "flex items-center justify-between gap-2"
          }`}
        >
          {!collapsed && <SidebarClock />}

          <div
            className={`flex items-center ${
              collapsed ? "flex-col gap-1.5" : "gap-1.5"
            }`}
          >
            <ModeToggle variant="square" />
            <SoundToggle variant="square" />
            <a
              href="https://github.com/ChristianJudeEraldo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className={SQUARE_ICON_BTN_CLASS}
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-jude-eraldo-012718251/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className={SQUARE_ICON_BTN_CLASS}
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>("intro")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const mobileOpenBtnRef = useRef<HTMLButtonElement | null>(null)
  const mobileCloseBtnRef = useRef<HTMLButtonElement | null>(null)
  const wasMobileMenuOpenRef = useRef(false)

  // Track active section via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180

      for (let i = ALL_SECTION_IDS.length - 1; i >= 0; i--) {
        const id = ALL_SECTION_IDS[i]
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

  // Handle mobile drawer Escape dismissal, scroll lock, and focus management
  useEffect(() => {
    if (isMobileMenuOpen) {
      wasMobileMenuOpenRef.current = true
      document.body.style.overflow = "hidden"
      mobileCloseBtnRef.current?.focus()

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false)
        }
      }

      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = ""
        document.removeEventListener("keydown", handleKeyDown)
      }
    } else if (wasMobileMenuOpenRef.current) {
      wasMobileMenuOpenRef.current = false
      document.body.style.overflow = ""
      mobileOpenBtnRef.current?.focus()
    }
  }, [isMobileMenuOpen])

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
      {/* Mobile Top Bar */}
      <header className="lg:hidden sticky top-0 z-40 flex h-14 items-center justify-between border-b border-black/6 dark:border-white/8 bg-(--surface-translucent) px-3 sm:px-4 backdrop-blur-2xl">
        <Link
          href="/"
          onClick={scrollToTop}
          className="text-[15px] font-semibold tracking-tight text-(--ink) dark:text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue) rounded-md"
        >
          Christian Jude
        </Link>

        <div className="flex items-center gap-1.5">
          <ModeToggle variant="square" />
          <div className="hidden sm:flex">
            <SoundToggle variant="square" />
          </div>
          <button
            ref={mobileOpenBtnRef}
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-sidebar-drawer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className={SQUARE_ICON_BTN_CLASS}
          >
            {isMobileMenuOpen ? (
              <X size={16} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <PanelLeft size={16} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex p-3">
          {/* Dimmed backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Card Drawer */}
          <div
            id="mobile-sidebar-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation drawer"
            className="sidebar-textured relative z-10 flex h-full w-[min(19rem,calc(100vw-1.5rem))] flex-col justify-between rounded-[22px] border border-black/8 dark:border-white/8 p-4 shadow-xl"
          >
            <SidebarContent
              collapsed={false}
              activeSection={activeSection}
              isMobileDrawer={true}
              closeButtonRef={mobileCloseBtnRef}
              onCloseDrawer={() => setIsMobileMenuOpen(false)}
              onNavigateSection={scrollToSection}
              onNavigateTop={scrollToTop}
            />
          </div>
        </div>
      )}

      {/* Desktop Layout Spacer (keeps <main> offset synced with sidebar width) */}
      <div
        className={`hidden lg:block shrink-0 transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCollapsed ? "w-20" : "w-68"
        }`}
        aria-hidden="true"
      />

      {/* Desktop Floating Card Sidebar */}
      <aside
        aria-label="Sidebar"
        className={`sidebar-textured hidden lg:flex fixed top-3 bottom-3 left-3 z-30 flex-col justify-between rounded-[22px] border border-black/8 dark:border-white/8 shadow-sm transition-[width,padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCollapsed ? "w-16 py-4 px-2.5 items-center" : "w-64 p-4"
        }`}
      >
        <SidebarContent
          collapsed={isCollapsed}
          activeSection={activeSection}
          onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
          onNavigateSection={scrollToSection}
          onNavigateTop={scrollToTop}
        />
      </aside>
    </>
  )
}
