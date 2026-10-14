import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group w-full text-left p-3 sm:p-4 rounded-2xl border border-black/6 dark:border-white/8 bg-white/50 dark:bg-white/4 hover:bg-black/3 dark:hover:bg-white/8 hover:border-black/12 dark:hover:border-white/15 transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 sm:gap-4 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)/40"
    >
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
        {/* Squircle Thumbnail */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-black/8 dark:border-white/10 overflow-hidden relative shrink-0 bg-black/4 dark:bg-white/6 p-1 shadow-xs group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-full rounded-[11px] overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={`${project.title} icon`}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        {/* Title & Short Summary */}
        <div className="min-w-0 flex-1 space-y-0.5 sm:space-y-1">
          <h3 className="font-sans font-semibold text-[15px] sm:text-[16px] text-(--ink) group-hover:text-(--apple-blue) transition-colors truncate">
            {project.shortTitle}
          </h3>

          <p className="text-[13px] text-(--ink-secondary) leading-snug line-clamp-1 font-normal">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Right Category Tag & Arrow */}
      <div className="flex items-center gap-2.5 shrink-0">
        <span className="hidden sm:inline-block text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/4 dark:bg-white/8 text-(--ink-secondary) border border-black/4 dark:border-white/6 whitespace-nowrap">
          {project.tag}
        </span>

        <div className="w-7 h-7 rounded-full bg-black/4 dark:bg-white/6 text-(--ink-tertiary) group-hover:text-(--apple-blue) group-hover:bg-(--apple-blue)/10 flex items-center justify-center transition-colors">
          <ChevronRight size={15} strokeWidth={2.2} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
