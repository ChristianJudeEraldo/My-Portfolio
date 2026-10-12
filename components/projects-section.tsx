import { ProjectRow } from "@/components/project-row";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="animate-fade-up stagger-4 space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <p className="bryl-label">Featured Work & Projects</p>
          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/4 dark:bg-white/8 text-(--ink-secondary)">
            {projects.length} Engineering Projects
          </span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-(--ink) mt-1.5">
          Production Systems & Research
        </h2>
        <p className="text-[14px] text-(--ink-secondary) mt-1">
          Click any project below to inspect the architectural overview, screenshots, and live demo.
        </p>
      </div>

      {/* Projects List Rows */}
      <div className="space-y-3">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
