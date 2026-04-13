import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pb-20 pt-6 md:pt-10">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="linear-eyebrow">
              Professional Profile
            </p>
            <h1 className="max-w-3xl text-[40px] font-[510] leading-[1.04] tracking-[-0.04em] md:text-[56px]">
              Computer Engineer focused on modern web systems and applied AI.
            </h1>
            <p className="max-w-2xl text-[16px] leading-relaxed linear-muted md:text-[18px]">
              I am Christian Jude Eraldo, a graduating Computer Engineering student who builds
              production-ready software with a strong systems mindset. My work sits at the
              intersection of performant frontend engineering, backend reliability, and
              AI-assisted product development.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="linear-button linear-button-primary"
              >
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Christian_Jude_Eraldo_Resume.pdf"
                className="linear-button linear-button-ghost"
              >
                Download PDF
              </a>
            </div>
          </div>

          <dl className="linear-card overflow-hidden">
            <div className="grid gap-1 border-b border-(--border-subtle) px-6 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
                Specialization
              </dt>
              <dd className="text-[15px] leading-relaxed linear-muted md:text-[16px]">
                Full-stack web development, AI-driven features, and efficient software
                architecture for constrained and real-world environments.
              </dd>
            </div>
            <div className="grid gap-1 border-b border-(--border-subtle) px-6 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
                Experience
              </dt>
              <dd className="text-[15px] leading-relaxed linear-muted md:text-[16px]">
                3+ years of hands-on project experience across academic and personal
                software builds, including thesis-level machine learning systems.
              </dd>
            </div>
            <div className="grid gap-1 border-b border-(--border-subtle) px-6 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
                Industries
              </dt>
              <dd className="text-[15px] leading-relaxed linear-muted md:text-[16px]">
                Education technology, student wellness research, and productivity tooling
                with cybersecurity-aware development practices.
              </dd>
            </div>
            <div className="grid gap-1 px-6 py-5 md:grid-cols-[180px_1fr] md:gap-8">
              <dt className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
                Collaboration
              </dt>
              <dd className="text-[15px] leading-relaxed linear-muted md:text-[16px]">
                I work best in feedback-driven teams, communicate in clear milestones, and
                keep delivery transparent through documentation, regular demos, and rapid
                iteration.
              </dd>
            </div>
          </dl>
        </div>

        <aside className="space-y-6 lg:pt-2">
          <figure className="linear-avatar relative mx-auto w-full max-w-sm rounded-full">
            <Image
              src="/profile.jpg"
              alt="Christian Jude Eraldo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </figure>

          <blockquote className="border-l border-(--accent)/80 pl-4 text-[15px] leading-relaxed linear-muted md:text-[16px]">
            I enjoy solving difficult problems with practical code. Outside development,
            I study system behavior, test new workflows, and refine how ideas move from
            prototype to reliable product.
          </blockquote>
        </aside>
      </section>
    </div>
  );
}