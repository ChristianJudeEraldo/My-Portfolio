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
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground">A showcase of my engineering and development work.</p>
      </div>

      {/* This grid puts them side-by-side on tablets and desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link key={project.link} href={project.link} className="group">
            <div className="h-full border border-foreground/10 rounded-2xl p-6 bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-[1.02] hover:shadow-lg">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 text-sm font-medium flex items-center gap-2">
                  View Project <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}