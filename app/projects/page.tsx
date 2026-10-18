import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/project-row";

export const metadata = {
  title: "Projects | Christian Jude",
  description: "Comprehensive portfolio of applied machine learning, computer vision telemetry, and full-stack web platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8 py-4 sm:py-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors px-3 py-1.5 rounded-full bg-black/4 dark:bg-white/6 border border-black/4 dark:border-white/8 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <span className="text-[12px] font-mono text-(--ink-tertiary)">
          [{projects.length} Production Systems]
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight text-(--ink)">
          All Engineering Projects
        </h1>
        <p className="text-[14px] sm:text-[16px] text-(--ink-secondary) max-w-2xl">
          Deep dive into production machine learning, real-time edge telemetry, and full-stack web architectures.
        </p>
      </div>

      <div className="space-y-6 pt-2">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}