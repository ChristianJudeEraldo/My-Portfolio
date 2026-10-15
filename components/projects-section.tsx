import { ProjectRow } from "@/components/project-row";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="animate-fade-up stagger-4 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-(--ink)">
          Featured Engineering & Applied AI
        </h2>
        <span className="text-[12px] font-mono text-(--ink-tertiary)">
          [{projects.length} Production Systems]
        </span>
      </div>

      {/* Projects Showcase Cards */}
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
