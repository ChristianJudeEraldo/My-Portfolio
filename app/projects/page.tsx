import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      category: "01 — Major Thesis & AI Research",
      title: "CNN-Based Facial Recognition for Sleep Deprivation Detection",
      description: "A deep learning computer vision model designed to classify early physiological signs of sleep deprivation in students using Convolutional Neural Networks.",
      link: "/projects/cnn-thesis",
      stack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      highlights: "Thesis Project • Real-time Processing"
    },
    {
      category: "02 — Frontend Architecture & State",
      title: "Interactive Task & State Management System",
      description: "A responsive React application featuring immutable state transitions, dynamic priority reordering, and local persistence.",
      link: "/projects/todo",
      stack: ["React 19", "TypeScript", "Tailwind CSS", "MDX"],
      highlights: "Client State • Zero External UI Deps"
    }
  ]

  return (
    <div className="space-y-12 pb-20 pt-8 animate-fade-up stagger-1">
      <div className="space-y-6">
        <p className="bryl-label">01 &mdash; PORTFOLIO PROJECTS</p>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-2xl text-(--ink)">
          engineering projects
        </h1>
        <p className="max-w-2xl text-[17px] font-serif leading-relaxed text-(--gray-500)">
          A curated portfolio of software engineering projects, thesis research, and technical systems built for performance, clarity, and real-world utility.
        </p>
      </div>

      <div className="bryl-hairline animate-fade-up stagger-2" />

      <div className="grid grid-cols-1 gap-6 animate-fade-up stagger-3">
        {projects.map((project) => (
          <Link key={project.link} href={project.link} className="block group">
            <article className="bryl-card p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bryl-label text-[11px]">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-(--gray-400)">
                    {project.highlights}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-(--ink) group-hover:text-(--gray-700) dark:group-hover:text-(--gray-300) transition-colors">
                  {project.title}
                </h2>

                <p className="text-[15px] leading-relaxed text-(--gray-500) font-serif">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-(--gray-200)">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="font-mono text-[11px] text-(--gray-500)"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-(--ink) flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Project ↗
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}