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

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="7.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M7.5 11v6.5" />
      <path d="M12 17.5V11" />
      <path d="M12 13.5a2.75 2.75 0 0 1 5.5 0v4" />
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
          {!collapsed && (
            <span className="text-[11.5px] font-medium text-(--ink-tertiary) dark:text-[#737373] pl-0.5 select-none">
              GMT+8
            </span>
          )}

          <div
            className={`flex items-center ${
              collapsed ? "flex-col gap-1.5" : "gap-1.5"
            }`}
          >
            <ModeToggle variant="square" />
            <SoundToggle variant="square" />
            <a
              href="mailto:cjeraldo@outlook.ph"
              aria-label="Email Christian Jude"
              title="Email"
              className={SQUARE_ICON_BTN_CLASS}
            >
              <Mail size={14} strokeWidth={1.75} aria-hidden="true" />
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
            className="relative z-10 flex h-full w-[min(19rem,calc(100vw-1.5rem))] flex-col justify-between rounded-[22px] border border-black/8 dark:border-white/8 bg-[#f8f8fa] dark:bg-[#141414] p-4 shadow-xl"
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
        className={`hidden lg:flex fixed top-3 bottom-3 left-3 z-30 flex-col justify-between rounded-[22px] border border-black/8 dark:border-white/8 bg-[#f8f8fa] dark:bg-[#141414] shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-[width,padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
