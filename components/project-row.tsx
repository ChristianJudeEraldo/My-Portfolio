import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Activity } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  // Extract top tech items across categories for clean preview chips
  const keyTech = project.techStack
    .flatMap((cat) => cat.items)
    .slice(0, 5);

  const previewImage = project.images?.[0]?.src || project.thumbnail;

  return (
    <article className="group rounded-2xl sm:rounded-3xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-[#1c1c1e]/70 backdrop-blur-xl p-4 sm:p-6 md:p-7 shadow-xs hover:shadow-md transition-all duration-300 hover:border-black/15 dark:hover:border-white/20">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start justify-between">
        
        {/* Left / Main Details & Telemetry */}
        <div className="flex-1 space-y-3 sm:space-y-4 min-w-0 w-full">
          
          {/* Tag, Badge, and Title */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-(--apple-blue)/10 text-(--apple-blue)">
                <Activity size={11} className="animate-pulse-slow" />
                <span>{project.tag}</span>
              </span>

              {project.badge && (
                <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/8 text-(--ink-secondary)">
                  {project.badge}
                </span>
              )}
            </div>

            <Link href={`/projects/${project.slug}`}>
              <h3 className="font-sans font-bold text-lg sm:text-2xl text-(--ink) group-hover:text-(--apple-blue) transition-colors leading-snug">
                {project.title}
              </h3>
            </Link>
          </div>

          {/* Summary */}
          <p className="text-[13px] sm:text-[15px] leading-relaxed text-(--ink-secondary) font-normal">
            {project.summary}
          </p>

          {/* Key Engineering Highlights / Telemetry (Primary on mobile, expanded on sm+) */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1 sm:space-y-1.5 pt-0.5 text-[12px] sm:text-[13px] text-(--ink-secondary)">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 ${idx > 0 ? "hidden sm:flex" : ""}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-(--apple-blue) mt-1.5 shrink-0" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Chips (compact 3 items on mobile, 5 on sm+) */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {keyTech.map((tech, idx) => (
              <span
                key={idx}
                className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/4 dark:bg-white/6 border border-black/4 dark:border-white/8 text-(--ink-secondary) ${
                  idx >= 3 ? "hidden sm:inline-block" : ""
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct Actions: Live Demo + Deep Dive Link (Always in the same row) */}
          <div className="flex flex-row items-center gap-2 pt-2 w-full">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-primary px-2.5! sm:px-3.5! py-2! sm:py-1.5! text-[11px]! sm:text-[13px]! h-auto! min-h-9.5 justify-center flex-1 sm:flex-initial text-center whitespace-nowrap gap-1 sm:gap-1.5"
              >
                <span className="sm:hidden">Live Demo</span>
                <span className="hidden sm:inline">Live System Demo</span>
                <ArrowUpRight size={13} className="shrink-0" />
              </a>
            )}

            <Link
              href={`/projects/${project.slug}`}
              className="apple-button-secondary px-2.5! sm:px-3.5! py-2! sm:py-1.5! text-[11px]! sm:text-[13px]! h-auto! min-h-9.5 justify-center flex-1 sm:flex-initial text-center whitespace-nowrap gap-1 sm:gap-1.5"
            >
              <span className="min-[380px]:inline hidden">Architecture & Details</span>
              <span className="min-[380px]:hidden inline">Architecture</span>
              <ChevronRight size={13} className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* Right / Secondary: Visual Telemetry / Screenshot Preview */}
        <div className="w-full lg:w-72 xl:w-80 shrink-0 self-center lg:self-start">
          <Link
            href={`/projects/${project.slug}`}
            className="block relative w-full aspect-video sm:aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden border border-black/8 dark:border-white/12 bg-black/4 dark:bg-black/40 group/img shadow-sm"
          >
            <Image
              src={previewImage}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors" />
          </Link>
        </div>
      </div>
    </article>
  );
}
