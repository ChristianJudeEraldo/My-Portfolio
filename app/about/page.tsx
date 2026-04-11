import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl pb-20 pt-6 md:pt-10">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Professional Profile
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Computer Engineer focused on modern web systems and applied AI.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
              I am Christian Jude, a graduating Computer Engineering student who builds
              production-ready software with a strong systems mindset. My work sits at the
              intersection of performant frontend engineering, backend reliability, and
              AI-assisted product development.
            </p>
          </div>

          <dl className="divide-y divide-foreground/10 border-y border-foreground/10">
            <div className="grid gap-1 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">
                Specialization
              </dt>
              <dd className="text-sm leading-relaxed text-foreground/80 md:text-base">
                Full-stack web development, AI-driven features, and efficient software
                architecture for constrained and real-world environments.
              </dd>
            </div>
            <div className="grid gap-1 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">
                Experience
              </dt>
              <dd className="text-sm leading-relaxed text-foreground/80 md:text-base">
                3+ years of hands-on project experience across academic and personal
                software builds, including thesis-level machine learning systems.
              </dd>
            </div>
            <div className="grid gap-1 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">
                Industries
              </dt>
              <dd className="text-sm leading-relaxed text-foreground/80 md:text-base">
                Education technology, student wellness research, and productivity tooling
                with cybersecurity-aware development practices.
              </dd>
            </div>
            <div className="grid gap-1 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">
                Collaboration
              </dt>
              <dd className="text-sm leading-relaxed text-foreground/80 md:text-base">
                I work best in feedback-driven teams, communicate in clear milestones, and
                keep delivery transparent through documentation, regular demos, and rapid
                iteration.
              </dd>
            </div>
          </dl>
        </div>

        <aside className="space-y-6 lg:pt-2">
          <figure className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border border-foreground/10 bg-foreground/5">
            <Image
              src="/profile.jpg"
              alt="Christian Jude Eraldo"
              fill
              className="object-cover"
              priority
            />
          </figure>

          <blockquote className="border-l-2 border-blue-500/70 pl-4 text-sm leading-relaxed text-foreground/70 md:text-base">
            I enjoy solving difficult problems with practical code. Outside development,
            I study system behavior, test new workflows, and refine how ideas move from
            prototype to reliable product.
          </blockquote>
        </aside>
      </section>
    </div>
  );
}