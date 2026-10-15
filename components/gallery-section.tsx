"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Activity, ArrowUpRight } from "lucide-react";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const active = ARTIFACTS[activeIndex];
  const count = ARTIFACTS.length;

  const next = () => setActiveIndex((prev) => (prev + 1) % count);
  const prev = () => setActiveIndex((prev) => (prev - 1 + count) % count);

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

        {/* Screenshot Viewport Container with Touch Navigation */}
        <div className="relative w-full aspect-16/10 sm:aspect-video bg-black/5 dark:bg-black/40 overflow-hidden group">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />

          {/* Navigation Overlay Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous artifact"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 dark:bg-black/65 text-white backdrop-blur-md flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next artifact"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 dark:bg-black/65 text-white backdrop-blur-md flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Caption & Metadata Footer */}
        <div className="px-3.5 py-3 sm:px-6 sm:py-4 space-y-1 bg-white/40 dark:bg-white/2">
          <h3 className="font-sans font-semibold text-[14px] sm:text-[16px] text-(--ink) leading-snug">
            {active.title}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-(--ink-secondary) leading-relaxed">
            {active.caption}
          </p>
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
    </div>
  );
}
