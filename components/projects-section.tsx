import { ProjectRow } from "@/components/project-row";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="animate-fade-up stagger-4 space-y-6">
      <div>
        <p className="bryl-label">Selected Work</p>
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
