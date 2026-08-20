import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pb-20 pt-8 animate-fade-up stagger-1">
      <section className="space-y-12 lg:space-y-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="bryl-label">
              01 &mdash; PROFESSIONAL PROFILE
            </p>
            <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-4xl text-(--ink)">
              computer engineer focused on modern web systems and applied ai.
            </h1>
            <p className="max-w-4xl text-[17px] font-serif leading-relaxed text-(--gray-500)">
              I am Christian Jude Eraldo, a Computer Engineering graduate, building production-ready software with a strong 
              systems mindset. My expertise spans performant frontend engineering, reliable backend architecture, and 
              practical AI integration.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bryl-button font-mono text-[11px] tracking-widest uppercase"
              >
                View Resume ↗
              </a>
              <a
                href="/resume.pdf"
                download="Christian_Jude_Eraldo_Resume.pdf"
                className="font-mono text-[11px] tracking-widest uppercase flex items-center text-(--gray-500) hover:text-(--ink) transition-colors"
              >
                Download PDF ↓
              </a>
            </div>
          </div>

          <div className="bryl-hairline animate-fade-up stagger-2" />

          <dl className="space-y-0 border-t border-(--gray-200) animate-fade-up stagger-3">
            <div className="grid gap-4 border-b border-(--gray-200) py-6 md:grid-cols-[180px_1fr]">
              <dt className="bryl-label mt-1">
                Specialization
              </dt>
              <dd className="text-[15px] leading-relaxed text-(--gray-500)">
                Full-stack web development, AI-driven features, and efficient software
                architecture for constrained and real-world environments.
              </dd>
            </div>
            <div className="grid gap-4 border-b border-(--gray-200) py-6 md:grid-cols-[180px_1fr]">
              <dt className="bryl-label mt-1">
                Experience
              </dt>
              <dd className="text-[15px] leading-relaxed text-(--gray-500)">
                3+ years of hands-on project experience across academic and personal
                software builds, including thesis-level machine learning systems.
              </dd>
            </div>
            <div className="grid gap-4 border-b border-(--gray-200) py-6 md:grid-cols-[180px_1fr]">
              <dt className="bryl-label mt-1">
                Industries
              </dt>
              <dd className="text-[15px] leading-relaxed text-(--gray-500)">
                Education technology, student wellness research, and productivity tooling
                with cybersecurity-aware development practices.
              </dd>
            </div>
            <div className="grid gap-4 border-b border-(--gray-200) py-6 md:grid-cols-[180px_1fr]">
              <dt className="bryl-label mt-1">
                Collaboration
              </dt>
              <dd className="text-[15px] leading-relaxed text-(--gray-500)">
                I work best in feedback-driven teams, communicate in clear milestones, and
                keep delivery transparent through documentation, regular demos, and rapid
                iteration.
              </dd>
            </div>
          </dl>
        </div>

        <aside className="space-y-8 animate-fade-up stagger-4 lg:pt-2">
          <figure className="relative mx-auto w-full max-w-56 rounded-xl overflow-hidden border border-(--gray-200) transition-all duration-500 aspect-4/5 bryl-card p-1">
            <div className="relative w-full h-full rounded-lg overflow-hidden group">
              <Image
                src="/newprofile1.jpg"
                alt="Christian Jude Eraldo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top bryl-image-hover dark:opacity-0 transition-opacity duration-500"
                priority
              />
              <Image
                src="/newprofile2.jpg"
                alt="Christian Jude Eraldo - Dark Mode"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top bryl-image-hover opacity-0 dark:opacity-100 transition-opacity duration-500"
                priority
              />
            </div>
          </figure>

          <blockquote className="border-l border-(--gray-300) pl-5 text-[17px] font-serif italic leading-relaxed text-(--gray-500)">
            I enjoy solving difficult problems with practical code. Outside development,
            I study system behavior, test new workflows, and refine how ideas move from
            prototype to reliable product.
          </blockquote>
        </aside>
      </section>
    </div>
  );
}