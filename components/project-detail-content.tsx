"use client";

import { CheckCircle2, Cpu, ExternalLink, Layers, Sparkles } from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import type { Project } from "@/data/projects";

interface ProjectDetailContentProps {
  project: Project;
  showBackLink?: boolean;
}

export function ProjectDetailContent({ project, showBackLink }: ProjectDetailContentProps) {
  return (
    <div className="space-y-8">
      {/* ─── Header & Metadata ─── */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="bryl-label">{project.tag}</span>
            {project.badge && (
              <span className="px-2 py-0.5 rounded-full bg-(--apple-blue)/10 text-(--apple-blue) dark:bg-(--apple-blue)/15 text-[11px] font-semibold tracking-wide">
                {project.badge}
              </span>
            )}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-primary gap-1.5 text-[12px] py-1.5 px-3.5"
            >
              <span>Visit Live</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        <div>
          <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--ink) leading-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-[15px] sm:text-[16px] text-(--ink-secondary) leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* ─── Screenshot Carousel ─── */}
      <section aria-label="Project Screenshots">
        <ProjectCarousel images={project.images} title={project.title} />
      </section>

      {/* ─── Overview Section ─── */}
      <section className="space-y-3 pt-2">
        <h2 className="text-[13px] font-semibold uppercase tracking-wider text-(--ink) flex items-center gap-2">
          <Sparkles size={15} className="text-(--apple-blue)" />
          <span>Project Overview</span>
        </h2>
        <div className="space-y-3 text-[15px] leading-relaxed text-(--ink-secondary)">
          <p>{project.overview[0]}</p>
        </div>
      </section>

      {/* ─── Key Features Section ─── */}
      {project.features && project.features.length > 0 && (
        <section className="space-y-3 pt-2">
          <h2 className="text-[13px] font-semibold uppercase tracking-wider text-(--ink) flex items-center gap-2">
            <CheckCircle2 size={15} className="text-(--apple-green)" />
            <span>Key Capabilities & Features</span>
          </h2>
          <ul className="grid gap-2.5 sm:grid-cols-1">
            {project.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[14px] sm:text-[15px] leading-relaxed text-(--ink-secondary) p-2.5 rounded-xl bg-black/2 dark:bg-white/4 border border-black/4 dark:border-white/6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-(--apple-blue) mt-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ─── Engineering Highlights Section ─── */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="space-y-3 pt-2">
          <h2 className="text-[13px] font-semibold uppercase tracking-wider text-(--ink) flex items-center gap-2">
            <Cpu size={15} className="text-(--apple-blue)" />
            <span>Architecture & Engineering Highlights</span>
          </h2>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[14px] sm:text-[15px] leading-relaxed text-(--ink-secondary)"
              >
                <span className="font-mono text-[11px] text-(--ink-tertiary) mt-0.5 shrink-0">
                  [{idx + 1}]
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ─── Built With / Tech Stack Grid ─── */}
      <section className="space-y-3 pt-2 border-t border-black/6 dark:border-white/8">
        <h2 className="text-[13px] font-semibold uppercase tracking-wider text-(--ink) flex items-center gap-2 pt-2">
          <Layers size={15} className="text-(--apple-blue)" />
          <span>Built With</span>
        </h2>
        
        <div className="grid gap-3 sm:grid-cols-2">
          {project.techStack.map((category, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-black/6 dark:border-white/8 bg-white/60 dark:bg-[#1c1c1e]/60 space-y-2"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-(--ink-tertiary)">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-2.5 py-0.5 rounded-full bg-black/4 dark:bg-white/6 text-[11px] font-medium text-(--ink)"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

