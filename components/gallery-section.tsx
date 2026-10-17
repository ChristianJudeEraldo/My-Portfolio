"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Activity, ArrowUpRight, Maximize2, X } from "lucide-react";

interface Artifact {
  title: string;
  category: string;
  badge: string;
  caption: string;
  src: string;
  alt: string;
  projectHref?: string;
}

const ARTIFACTS: Artifact[] = [
  {
    title: "Facial Landmark Mesh & Ocular Telemetry",
    category: "Computer Vision / CNN Thesis",
    badge: "60 FPS · 94.8% Accuracy",
    caption: "Real-time Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) extraction via MediaPipe FaceMesh for cognitive fatigue detection.",
    src: "/lpuhealth.png",
    alt: "Live facial landmark mesh and ocular aspect ratio telemetry pipeline",
    projectHref: "/projects/sleep-deprivation-detection",
  },
  {
    title: "Longitudinal Clinical Sleep Portal",
    category: "Clinical Telemetry System",
    badge: "Full-Stack Portal · LPU-C",
    caption: "Student sleep deprivation tracking dashboard with role-based access control, longitudinal trend logs, and ambient clinic optimization.",
    src: "/lpuhealth2.png",
    alt: "Longitudinal student sleep deprivation metrics and clinic health portal",
    projectHref: "/projects/sleep-deprivation-detection",
  },
  {
    title: "Philippine Commodity Pricing Engine",
    category: "Pamilihan AI Data Platform",
    badge: "17 Regions · WFP HDX",
    caption: "Automated ingredient pricing calculation and serving cost breakdown grounded in United Nations World Food Programme market datasets.",
    src: "/aipamilihan.png",
    alt: "Automated ingredient pricing calculation and serving cost breakdown for local dishes",
    projectHref: "/projects/pamilihan-ai",
  },
  {
    title: "Executive Recurring Expense Dashboard",
    category: "SubTrace Financial SaaS",
    badge: "Local-First · Apple HIG",
    caption: "Deterministic Monthly Run Rate (MRR) projection, annual commitments forecasting, and renewal urgencies across software subscriptions.",
    src: "/subtrace.png",
    alt: "Executive financial dashboard with MRR and annual commitments",
    projectHref: "/projects/subtrace",
  },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const active = ARTIFACTS[activeIndex];
  const count = ARTIFACTS.length;

  const next = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % count);
  };

  const prev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + count) % count);
  };

  // Keyboard navigation & body scroll lock for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + count) % count);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % count);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen, count]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      next();
    } else if (distance < -45) {
      prev();
    }
    setTouchStart(null);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* ─── Main Artifact Display Card ─── */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative rounded-2xl sm:rounded-3xl border border-black/8 dark:border-white/12 bg-white/70 dark:bg-[#1c1c1e]/70 backdrop-blur-xl overflow-hidden shadow-xs transition-all duration-300"
      >
        
        {/* Top Header Bar inside Card */}
        <div className="flex items-center justify-between gap-1.5 px-3.5 py-2.5 sm:px-6 sm:py-3.5 border-b border-black/6 dark:border-white/8 bg-black/2 dark:bg-white/4">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono tracking-tight font-medium bg-(--apple-blue)/10 text-(--apple-blue) truncate">
              <Activity size={11} className="animate-pulse-slow shrink-0" />
              <span className="truncate">{active.category}</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-(--ink-tertiary) shrink-0">
              [{activeIndex + 1}/{count}]
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="hidden xs:inline-block text-[10px] sm:text-[11px] font-mono font-medium px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/8 text-(--ink-secondary)">
              {active.badge}
            </span>
            {active.projectHref && (
              <a
                href={active.projectHref}
                className="inline-flex items-center gap-0.5 text-[10px] sm:text-[11px] font-medium text-(--apple-blue) hover:underline pl-1"
              >
                <span>Details</span>
                <ArrowUpRight size={11} />
              </a>
            )}
          </div>
        </div>

        {/* Screenshot Viewport Container with Click to Expand */}
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-full aspect-16/10 sm:aspect-video bg-black/5 dark:bg-black/40 overflow-hidden group cursor-zoom-in"
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />

          {/* Full View Hover Hint Chip */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-medium shadow-md">
              <Maximize2 size={12} />
              <span>Click for Full View</span>
            </span>
          </div>

          {/* Navigation Overlay Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous artifact"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 dark:bg-black/65 text-white backdrop-blur-md flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm z-10"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next artifact"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 dark:bg-black/65 text-white backdrop-blur-md flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm z-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Caption & Metadata Footer with Quick Fullscreen Trigger */}
        <div className="px-3.5 py-3 sm:px-6 sm:py-4 space-y-1 bg-white/40 dark:bg-white/2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="space-y-1 min-w-0 flex-1">
            <h3 className="font-sans font-semibold text-[14px] sm:text-[16px] text-(--ink) leading-snug">
              {active.title}
            </h3>
            <p className="text-[12px] sm:text-[13px] text-(--ink-secondary) leading-relaxed">
              {active.caption}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-(--apple-blue) hover:underline cursor-pointer self-start sm:self-auto"
          >
            <Maximize2 size={11} />
            <span>Show Full Screenshot</span>
          </button>
        </div>
      </div>

      {/* ─── Mobile Clean Dot Indicator (<sm) ─── */}
      <div className="flex sm:hidden items-center justify-between px-1 pt-1">
        <p className="text-[11px] text-(--ink-tertiary)">
          Swipe or tap arrows to inspect
        </p>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {ARTIFACTS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to artifact ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-5 bg-(--apple-blue)"
                  : "w-1.5 bg-black/20 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ─── Desktop Thumbnails Scrub Bar (sm+) ─── */}
      <div className="hidden sm:grid sm:grid-cols-4 gap-2 pt-1">
        {ARTIFACTS.map((artifact, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`p-2 rounded-xl text-left border transition-all cursor-pointer flex flex-col gap-1.5 ${
                isCurrent
                  ? "border-(--apple-blue) bg-(--apple-blue)/5 dark:bg-(--apple-blue)/10 ring-1 ring-(--apple-blue)/30"
                  : "border-black/6 dark:border-white/8 bg-black/2 dark:bg-white/4 hover:bg-black/4 dark:hover:bg-white/8 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/10 dark:bg-black/30">
                <Image
                  src={artifact.src}
                  alt={artifact.title}
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-(--ink) truncate">
                  {artifact.title}
                </p>
                <p className="text-[10px] text-(--ink-tertiary) truncate">
                  {artifact.badge}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ─── Fullscreen Lightbox Modal (Portal to body so it covers sidebar & entire viewport with zero scrolling) ─── */}
      {mounted && isLightboxOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} full screenshot`}
          className="fixed inset-0 z-100 h-screen w-screen flex flex-col justify-between overflow-hidden p-3 sm:p-6 bg-black/95 backdrop-blur-2xl select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar - Fixed height */}
          <div 
            className="shrink-0 flex items-center justify-between gap-3 text-white max-w-7xl mx-auto w-full px-2 py-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 min-w-0 pr-2">
              <span className="hidden xs:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/10 text-white/90">
                <Activity size={12} className="text-(--apple-blue)" />
                <span>{active.category}</span>
              </span>
              <span className="text-[11px] sm:text-[12px] text-white/70">
                [{activeIndex + 1}/{count}] {active.badge}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-block text-[11px] font-mono text-white/50 px-2">
                ESC to close · Arrows to navigate
              </span>
              {active.projectHref && (
                <a
                  href={active.projectHref}
                  className="hidden xs:inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <span>Project Details</span>
                  <ArrowUpRight size={11} />
                </a>
              )}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close full view"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Uncropped Viewport - Centered, scaled by aspect-ratio, zero scroll */}
          <div 
            className="flex-1 min-h-0 w-full max-w-7xl mx-auto flex items-center justify-center relative p-2 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Native img with max constraints guarantees 100% visible, centered, uncropped, zero scroll */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[76vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl select-none mx-auto block"
            />

            {/* Navigation Overlay Arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous artifact"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 z-10"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next artifact"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 z-10"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Bottom Caption Bar - Fixed height */}
          <div 
            className="shrink-0 max-w-4xl mx-auto w-full px-2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/10 dark:bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-left sm:text-center space-y-0.5">
              <h4 className="font-semibold text-[13px] sm:text-[14px] text-white">
                {active.title}
              </h4>
              <p className="text-[11px] sm:text-[12px] text-white/80 leading-relaxed font-normal truncate sm:whitespace-normal">
                {active.caption}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
