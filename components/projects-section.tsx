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
              className={`deck-card ${slotClass} card-textured rounded-2xl border border-black/8 dark:border-white/10 p-5 select-none transition-all`}
              role="button"
              tabIndex={0}
              aria-label={`Show ${project.title}`}
              aria-pressed={isCenter}
              onClick={() => activateCard(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {/* Laurel Wreath Eyebrow */}
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-(--ink-secondary)">
                <LaurelIcon className="h-3.5 w-auto shrink-0 text-(--ink)" />
                <span className="truncate">{project.laurelBadge || project.badge}</span>
                <span className="inline-flex -scale-x-100 text-(--ink)">
                  <LaurelIcon className="h-3.5 w-auto shrink-0" />
                </span>
              </div>

              {/* App / Project Icon, Title & Metadata */}
              <div className="mt-3.5 flex items-center gap-3.5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-black/8 dark:border-white/12 bg-white dark:bg-[#1c1c1e] shadow-xs p-1">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} icon`}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5 rounded-lg"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans font-semibold text-base sm:text-[17px] leading-tight text-(--ink) text-balance">
                    {project.shortTitle || project.title}
                  </h3>
                  {project.pillTags && project.pillTags.length > 0 && (
                    <p className="mt-1 font-mono text-[10.5px] text-(--ink-tertiary) truncate">
                      {project.pillTags.join(" · ")}
                    </p>
                  )}
                </div>
              </div>

              {/* Summary Description */}
              <p className="mt-3.5 text-[13px] leading-relaxed text-(--ink-secondary) line-clamp-3 font-normal text-pretty">
                {project.summary}
              </p>

              {/* Actions: Live demo & Architecture detail */}
              <div className="mt-5 flex flex-wrap items-center gap-3.5 pt-0.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deck-action-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold text-white bg-black dark:bg-white dark:text-black hover:opacity-90 active:scale-95 transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live demo</span>
                    <ArrowUpRight size={13} strokeWidth={2.2} />
                  </a>
                )}

                <Link
                  href={`/projects/${project.slug}`}
                  className="deck-action-btn group/link inline-flex items-center gap-1.5 py-1.5 text-[12px] font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue) rounded-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Layers size={13} strokeWidth={2} />
                  <span>Architecture detail</span>
                  <ChevronRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
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
                  ? "w-6 bg-(--ink)"
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
