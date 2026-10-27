"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

function LaurelIcon({ className = "h-3.75 w-auto shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 13 22" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z" transform="translate(8 5) rotate(46)" />
      <path d="M0 -4.3C2.3 -2.8 2.3 2.8 0 4.3C-2.3 2.8 -2.3 -2.8 0 -4.3Z" transform="translate(4.6 11) rotate(14)" />
      <path d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z" transform="translate(8 17) rotate(-30)" />
    </svg>
  );
}

export function ProjectsSection() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = projects.length;
  const leftIndex = (centerIndex - 1 + total) % total;
  const rightIndex = (centerIndex + 1) % total;

  const activateCard = (index: number) => {
    if (index === centerIndex) return;
    setCenterIndex(index);
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activateCard(index);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section id="projects" className="animate-fade-up stagger-4 space-y-6">
      {/* ─── Header matching Tech Stack section font & style ─── */}
      <div className="flex items-center justify-between">
        <p className="bryl-label">Projects</p>
      </div>

      {/* ─── Spotlight Card Deck (3D Fanned Cards) ─── */}
      <div
        className="deck"
        data-deck
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => {
          const isCenter = index === centerIndex;
          const isLeft = index === leftIndex;
          const slotClass = isCenter ? "is-center" : isLeft ? "is-left" : "is-right";

          return (
            <article
              key={project.slug}
              className={`deck-card ${slotClass} rounded-2xl border border-black/8 dark:border-white/10 bg-white dark:bg-[#151518] backdrop-blur-xl p-5 select-none transition-all`}
              role="button"
              tabIndex={0}
              aria-label={`Show ${project.title}`}
              aria-pressed={isCenter}
              onClick={() => activateCard(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {/* Laurel Wreath Badge & Secondary Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-(--ink) px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-(--background) shadow-xs">
                  <LaurelIcon className="h-3.5 w-auto shrink-0" />
                  <span>{project.laurelBadge || project.badge}</span>
                  <span className="inline-flex -scale-x-100">
                    <LaurelIcon className="h-3.5 w-auto shrink-0" />
                  </span>
                </span>

                {project.pillTags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-(--ink-secondary)"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* App / Project Icon and Title */}
              <div className="mt-4 flex items-center gap-3.5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-black/8 dark:border-white/12 bg-white dark:bg-[#1c1c1e] shadow-xs p-1">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} icon`}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5 rounded-lg"
                  />
                </div>
                <h3 className="font-sans font-bold text-base sm:text-[17px] leading-tight text-(--ink)">
                  {project.shortTitle || project.title}
                </h3>
              </div>

              {/* Summary Description */}
              <p className="mt-3 text-[13px] leading-relaxed text-(--ink-secondary) line-clamp-3 font-normal">
                {project.summary}
              </p>

              {/* Action Buttons: Live demo & Architecture detail */}
              <div className="mt-5 flex flex-wrap items-center gap-2 pt-0.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deck-action-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-semibold text-white bg-black dark:bg-white dark:text-black hover:opacity-90 active:scale-95 transition-all shadow-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live demo</span>
                    <ArrowUpRight size={13} strokeWidth={2.2} />
                  </a>
                )}

                <Link
                  href={`/projects/${project.slug}`}
                  className="deck-action-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-medium text-(--ink) bg-black/4 dark:bg-white/8 hover:bg-black/8 dark:hover:bg-white/12 border border-black/8 dark:border-white/12 active:scale-95 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Layers size={13} strokeWidth={2} />
                  <span>Architecture detail</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* ─── Controls & Indicator Pills ─── */}
      <div className="pt-2 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project"
          className="w-7 h-7 rounded-full border border-black/8 dark:border-white/10 bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 text-(--ink-secondary) hover:text-(--ink) flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {projects.map((p, idx) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => activateCard(idx)}
              aria-label={`Switch to ${p.title}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === centerIndex
                  ? "w-6 bg-(--apple-blue)"
                  : "w-1.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="w-7 h-7 rounded-full border border-black/8 dark:border-white/10 bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 text-(--ink-secondary) hover:text-(--ink) flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}
