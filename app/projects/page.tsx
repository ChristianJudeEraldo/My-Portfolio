import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "CNN Facial Recognition",
      description: "Detecting early signs of sleep deprivation in students using AI.",
      link: "/projects/cnn-thesis",
      tag: "Thesis / AI"
    },
    {
      title: "Interactive To-Do List",
      description: "A React-based task manager with state persistence and reordering.",
      link: "/projects/todo",
      tag: "React / State"
    }
  ]

  return (
    <div className="space-y-12 pb-20 pt-8 animate-fade-up stagger-1">
      <div className="space-y-6">
        <p className="bryl-label">01 &mdash; PORTFOLIO PROJECTS</p>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-2xl text-[var(--ink)]">
          my projects
        </h1>
        <p className="max-w-2xl text-[17px] font-serif leading-relaxed text-[var(--gray-500)]">
          A concise showcase of engineering work across AI research and interactive web systems.
        </p>
      </div>

      <div className="bryl-hairline animate-fade-up stagger-2" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 animate-fade-up stagger-3">
        {projects.map((project) => (
          <Link key={project.link} href={project.link} className="group">
            <article className="bryl-card h-full flex flex-col justify-between">
              <div>
                <span className="bryl-pill">
                  {project.tag}
                </span>
                <h3 className="mt-5 font-mono text-2xl font-bold tracking-tight lowercase text-[var(--ink)] group-hover:underline decoration-[var(--gray-300)] underline-offset-4">
                  {project.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--gray-500)]">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 font-mono text-[11px] uppercase tracking-widest text-[var(--gray-500)] group-hover:text-[var(--ink)] transition-colors">
                View Project ↗
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}