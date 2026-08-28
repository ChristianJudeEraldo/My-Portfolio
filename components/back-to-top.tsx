"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const percentRef = useRef<HTMLSpanElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    let rafId: number | null = null
    let lastVisible = false

    const getScrollInfo = () => {
      const lenis = (window as any).__lenis
      if (lenis && typeof lenis.progress === "number" && typeof lenis.scroll === "number") {
        return {
          scrollTop: lenis.scroll,
          progress: Math.min(Math.max(lenis.progress, 0), 1),
        }
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      const scrollHeight =
        (document.documentElement.scrollHeight || document.body.scrollHeight || 0) -
        document.documentElement.clientHeight
      const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0

      return { scrollTop, progress }
    }

    const update = (forcedProgress?: number, forcedScrollTop?: number) => {
      const info =
        forcedProgress !== undefined && forcedScrollTop !== undefined
          ? { progress: forcedProgress, scrollTop: forcedScrollTop }
          : getScrollInfo()

      if (percentRef.current) {
        percentRef.current.textContent = `${Math.round(info.progress * 100)}%`
      }

      const shouldBeVisible = info.scrollTop > 260
      if (shouldBeVisible !== lastVisible) {
        lastVisible = shouldBeVisible
        setIsVisible(shouldBeVisible)
      }
    }

    const handleScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        update()
        rafId = null
      })
    }

    // Connect to Lenis if active
    const lenis = (window as any).__lenis
    let unsubscribeLenis: (() => void) | null = null

    if (lenis && typeof lenis.on === "function") {
      const onLenisScroll = (e: any) => {
        const p =
          typeof e.progress === "number"
            ? Math.min(Math.max(e.progress, 0), 1)
            : getScrollInfo().progress
        const s = typeof e.scroll === "number" ? e.scroll : getScrollInfo().scrollTop
        update(p, s)
      }
      lenis.on("scroll", onLenisScroll)
      unsubscribeLenis = () => {
        if (typeof lenis.off === "function") {
          lenis.off("scroll", onLenisScroll)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    // Initial calculation and post-navigation updates
    update()
    const t1 = setTimeout(() => update(), 50)
    const t2 = setTimeout(() => update(), 250)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (unsubscribeLenis) unsubscribeLenis()
      if (rafId !== null) cancelAnimationFrame(rafId)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname])

  const scrollToTop = () => {
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:bottom-8 md:right-8 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-(--gray-200) bg-(--gray-50) text-(--ink) shadow-xs transition-all duration-300 hover:border-(--ink) hover:bg-(--gray-100) hover:shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer select-none"
      >
        <ArrowUp className="h-3.5 w-3.5 text-(--gray-500) transition-all duration-200 group-hover:text-(--ink) group-hover:-translate-y-0.5" />
        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-(--gray-500) group-hover:text-(--ink) transition-colors">
          TOP
        </span>
        <span className="w-px h-2.5 bg-(--gray-200)" />
        <span
          ref={percentRef}
          className="font-mono text-[10px] font-semibold text-(--ink) tabular-nums tracking-tight min-w-[24px] text-right"
        >
          0%
        </span>
      </button>
    </div>
  )
}
