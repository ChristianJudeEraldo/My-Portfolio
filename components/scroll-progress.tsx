"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number | null = null;

    const getProgress = () => {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.progress === "number" && !isNaN(lenis.progress)) {
        return Math.min(Math.max(lenis.progress, 0), 1);
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight || 0) - document.documentElement.clientHeight;

      return scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
    };

    const updateBar = (progress?: number) => {
      if (barRef.current) {
        const p = typeof progress === "number" ? progress : getProgress();
        barRef.current.style.transform = `scaleX(${p})`;
      }
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updateBar();
        rafId = null;
      });
    };

    // Connect to Lenis if active
    const lenis = (window as any).__lenis;
    let unsubscribeLenis: (() => void) | null = null;

    if (lenis && typeof lenis.on === "function") {
      const onLenisScroll = (e: any) => {
        const p = typeof e.progress === "number" ? Math.min(Math.max(e.progress, 0), 1) : getProgress();
        updateBar(p);
      };
      lenis.on("scroll", onLenisScroll);
      unsubscribeLenis = () => {
        if (typeof lenis.off === "function") {
          lenis.off("scroll", onLenisScroll);
        }
      };
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial update and subsequent checks after route transitions / content loads
    updateBar(0);
    const t1 = setTimeout(() => updateBar(), 50);
    const t2 = setTimeout(() => updateBar(), 250);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (unsubscribeLenis) unsubscribeLenis();
      if (rafId !== null) cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div 
        ref={barRef}
        className="h-full w-full bg-(--ink) origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
