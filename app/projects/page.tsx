import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "CNN Thesis",
      slug: "cnn-thesis",
      description: "Your CNN thesis project details go here",
    },
    // Add more projects here as you create them
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-foreground/60 mb-12">
        A collection of my work and projects.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group border border-foreground/10 rounded-lg p-6 hover:border-foreground/30 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
              {project.title}
            </h2>
            <p className="text-foreground/60">{project.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}