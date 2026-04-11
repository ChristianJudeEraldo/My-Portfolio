import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Award, Database, Code, 
  Code2, Globe, Terminal, Cpu, CheckCircle2, Bot } from "lucide-react";

export default function Home() {
  const skills = [
    { name: "Python", area: "AI & Scripting", icon: Terminal, certified: true },
    { name: "MySQL", area: "Database Management", icon: Database, certified: true },
    { name: "PHP", area: "Backend Logic", icon: Code2, certified: false },
    { name: "JavaScript", area: "Interactive Web", icon: Code2, certified: false },
    { name: "HTML5 / CSS3", area: "Responsive Design", icon: Globe, certified: false },
    { name: "Agentic AI Workflows", area: "Automation & Orchestration", icon: Bot, certified: false },
  ];

  return (
    <div className="pb-20">
      <section className="grid items-center gap-12 pb-20 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pt-14">
        <div className="space-y-6">
          <p className="linear-eyebrow">Computer Engineer / Developer</p>
          <h1 className="max-w-2xl text-[44px] font-[510] leading-[1.02] tracking-[-0.05em] md:text-[64px]">
            Hi I am Jude a Developer who builds systems that stay fast, clear, and reliable.
          </h1>
          <p className="max-w-xl text-[16px] leading-relaxed text-(--text-secondary) md:text-[18px]">
            Graduating BSCPE engineer focused on high-performance web applications,
            AI-assisted workflows, and practical delivery from prototype to production.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="linear-button linear-button-primary">
              Explore Projects
            </Link>
            <Link href="/contact" className="linear-button linear-button-ghost">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-96">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(113,112,255,0.25),transparent_65%)] blur-2xl" />
          <div className="linear-avatar relative w-full rounded-full">
            <Image 
              src="/profile.jpg" 
              alt="Christian Jude Profile" 
              fill 
              className="object-cover dark:opacity-0 dark:invisible transition-opacity duration-700 delay-150 ease-in-out"
              priority 
              unoptimized
            />

            <Image 
              src="/profile2.jpg" 
              alt="Christian Jude Profile - Dark Mode" 
              fill 
              className="object-cover opacity-0 invisible dark:opacity-100 dark:visible transition-opacity duration-700 delay-150 ease-in-out"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="linear-grid pb-20 md:grid-cols-2">
        <article className="linear-card p-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-(--accent)">
              <GraduationCap size={28} />
              <h2 className="text-[24px] font-[510] tracking-[-0.02em]">Education</h2>
            </div>
            <div>
              <h3 className="text-[20px] font-[590] tracking-[-0.012em]">B.S. in Computer Engineering</h3>
              <p className="linear-subtle text-[13px]">Graduating Student</p>
              <p className="mt-4 text-[15px] leading-relaxed linear-muted">
                Software-focused engineer building high-performance products,
                backed by a BSCPE foundation and practical implementation discipline.
              </p>
            </div>
          </div>
        </article>

        <article className="linear-card p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-(--accent)">
              <Award size={28} />
              <h2 className="text-[24px] font-[510] tracking-[-0.02em]">Certifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-md border border-(--border-subtle) bg-[rgba(113,112,255,0.14)] p-2 text-(--accent)">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-[15px] font-[510] leading-none">Python Programming</p>
                  <p className="mt-1 text-[13px] linear-subtle">Pearson VUE Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-md border border-(--border-subtle) bg-[rgba(113,112,255,0.14)] p-2 text-(--accent)">
                  <Database size={20} />
                </div>
                <div>
                  <p className="text-[15px] font-[510] leading-none">Database Management</p>
                  <p className="mt-1 text-[13px] linear-subtle">Pearson VUE Certified</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="space-y-8 pb-20">
        <div className="flex items-center gap-3">
          <Cpu className="text-(--accent)" size={28} />
          <h2 className="text-[32px] font-[510] tracking-[-0.022em]">Technical Skills</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.name}
                className="linear-card group p-6 transition-colors hover:border-[rgba(113,112,255,0.38)]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-md border border-(--border-subtle) bg-[rgba(113,112,255,0.14)] p-2 text-(--accent)">
                    <Icon size={20} />
                  </div>
                  {skill.certified && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(39,166,68,0.32)] bg-[rgba(39,166,68,0.12)] px-2 py-0.5 text-[10px] font-[590] text-[#27a644]">
                      <CheckCircle2 size={10} /> CERTIFIED
                    </span>
                  )}
                </div>
                <h3 className="text-[16px] font-[510] tracking-[-0.01em]">{skill.name}</h3>
                <p className="mt-1 text-[13px] linear-subtle">{skill.area}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Briefcase className="text-(--accent)" size={28} />
          <h2 className="text-[32px] font-[510] tracking-[-0.022em]">Featured Work</h2>
        </div>

        <Link href="/projects/cnn-thesis" className="block group">
          <article className="linear-card p-8 transition-colors hover:border-[rgba(113,112,255,0.38)]">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 text-(--accent)">
                  <Cpu size={32} />
                  <span className="linear-chip">Major Thesis</span>
                </div>
                <h3 className="text-[32px] font-[510] tracking-[-0.022em] transition-colors group-hover:text-(--accent)">
                  CNN-Based Facial Recognition
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed linear-muted">
                  A deep learning system designed to detect early signs of sleep deprivation in students
                  using Convolutional Neural Networks.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-[510] text-(--text-secondary) transition-transform group-hover:translate-x-1 group-hover:text-(--foreground)">
                Read Case Study →
              </div>
            </div>
          </article>
        </Link>
      </section>
    </div>
  );
}