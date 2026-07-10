import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Award, Database, Code, 
  Code2, Globe, Terminal, Cpu, Bot } from "lucide-react";
import { GallerySection } from "@/components/gallery-section";

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
    <div className="space-y-16 pb-20">
      
      {/* Intro Section */}
      <section className="animate-fade-up stagger-1 relative pt-8 pb-12 rounded-xl flex flex-col md:flex-row gap-8 items-start">
        <div className="space-y-6 flex-1">
          <p className="bryl-label">01 &mdash; INTRODUCTION</p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-2xl text-(--ink)">
            hi i am jude a developer who builds systems that stay fast, clear, and reliable.
          </h1>
          <p className="max-w-xl text-[17px] font-serif leading-relaxed text-(--gray-500)">
            Graduating BSCPE engineer focused on high-performance web applications,
            AI-assisted workflows, and practical delivery from prototype to production.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects" className="bryl-button font-mono text-[11px] tracking-widest uppercase">
              Explore Projects ↗
            </Link>
            <Link href="/contact" className="font-mono text-[11px] tracking-widest uppercase flex items-center text-(--gray-500) hover:text-(--ink) transition-colors">
              Contact Me ↗
            </Link>
          </div>
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border border-(--gray-200) overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
           <Image 
              src="/profile.jpg" 
              alt="Christian Jude Profile" 
              fill 
              sizes="(max-width: 768px) 96px, 128px"
              className="object-cover dark:opacity-0 transition-opacity duration-500"
              priority 
              unoptimized
            />
            <Image 
              src="/profile2.jpg" 
              alt="Christian Jude Profile - Dark Mode" 
              fill 
              sizes="(max-width: 768px) 96px, 128px"
              className="object-cover opacity-0 dark:opacity-100 transition-opacity duration-500"
              unoptimized
            />
        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-2" />

      {/* Education & Certifications */}
      <section className="animate-fade-up stagger-3 space-y-8">
        <p className="bryl-label">02 &mdash; BACKGROUND</p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="bryl-card">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-(--gray-400)">
                <GraduationCap size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold tracking-tight text-(--ink)">B.S. in Computer Engineering</h3>
                <p className="bryl-label mt-1">Graduating Student</p>
                <p className="mt-4 text-[14px] leading-relaxed text-(--gray-500)">
                  Software-focused engineer building high-performance products,
                  backed by a BSCPE foundation and practical implementation discipline.
                </p>
              </div>
            </div>
          </article>

          <article className="bryl-card">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-(--gray-400)">
                <Award size={24} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-(--gray-400)">
                    <Code size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium leading-none text-(--ink)">Python Programming</p>
                    <p className="bryl-label mt-2">Pearson VUE Certified</p>
                  </div>
                </div>
                <div className="bryl-hairline my-2" />
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-(--gray-400)">
                    <Database size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium leading-none text-(--ink)">Database Management</p>
                    <p className="bryl-label mt-2">Pearson VUE Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-4" />

      {/* Technical Skills */}
      <section className="animate-fade-up stagger-4 space-y-8">
        <p className="bryl-label">03 &mdash; CAPABILITIES</p>

        <div className="grid gap-px bg-(--gray-200) sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-(--gray-200)">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article key={skill.name} className="bg-(--background) p-6 hover:bg-(--gray-50) transition-colors">
                <div className="mb-4 flex items-start justify-between">
                  <div className="text-(--gray-400)">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  {skill.certified && (
                    <span className="bryl-pill bryl-pill-inverted">
                      CERTIFIED
                    </span>
                  )}
                </div>
                <h3 className="text-[15px] font-medium tracking-tight text-(--ink)">{skill.name}</h3>
                <p className="mt-1 text-[13px] text-(--gray-500)">{skill.area}</p>
              </article>
            );
          })}
        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-5" />

      {/* Featured Work */}
      <section className="animate-fade-up stagger-5 space-y-8">
        <p className="bryl-label">04 &mdash; FEATURED WORK</p>

        <Link href="/projects/cnn-thesis" className="block group">
          <article className="bryl-card overflow-hidden p-0 relative">
            <div className="p-8 md:p-10 z-10 relative bg-linear-to-b from-transparent to-(--gray-50)">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="bryl-pill">Major Thesis</span>
                  </div>
                  <h3 className="font-mono text-2xl font-bold tracking-tight lowercase text-(--ink) group-hover:underline decoration-(--gray-300) underline-offset-4">
                    cnn-based facial recognition
                  </h3>
                  <p className="text-[15px] leading-relaxed text-(--gray-500) font-serif">
                    A deep learning system designed to detect early signs of sleep deprivation in students
                    using Convolutional Neural Networks.
                  </p>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-(--gray-500) group-hover:text-(--ink) transition-colors">
                  Read Case Study ↗
                </div>
              </div>
            </div>
          </article>
        </Link>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-5" />
      
      {/* Gallery Section */}
      <section className="animate-fade-up stagger-5 space-y-8">
        <p className="bryl-label">05 &mdash; GALLERY</p>
        <GallerySection />
      </section>

    </div>
  );
}