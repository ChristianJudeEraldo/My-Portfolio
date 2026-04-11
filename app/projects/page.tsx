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
    <div className="space-y-10 pb-20 pt-4 md:pt-8">
      <div className="space-y-4">
        <p className="linear-eyebrow">Portfolio Projects</p>
        <h1 className="text-[40px] font-[510] tracking-[-0.04em] md:text-[56px]">My Projects</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed linear-muted">
          A concise showcase of engineering work across AI research and interactive web systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.link} href={project.link} className="group">
            <article className="linear-card h-full p-6 transition-colors hover:border-[rgba(113,112,255,0.38)] hover:bg-[rgba(255,255,255,0.04)]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="linear-chip">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 text-[24px] font-[510] tracking-[-0.018em] transition-colors group-hover:text-(--accent)">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed linear-muted">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[13px] font-[510] text-(--text-secondary)">
                  View Project <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}