"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  GraduationCap, 
  Award, 
  Database, 
  Code, 
  Mail, 
  Globe, 
  GitBranch, 
  MapPin, 
  Send, 
  Loader2, 
  ArrowUpRight
} from "lucide-react";
import { GallerySection } from "@/components/gallery-section";
import { TechStackSection } from "@/components/tech-stack";
import { ProjectsSection } from "@/components/projects-section";
import { CertificatesDeck } from "@/components/certificates-deck";
import { sendEmail } from "@/app/actions/sendEmail";
import { toast } from "sonner";

export default function Home() {
  const [isPending, setIsPending] = useState(false);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -24, duration: 1.0 });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top, behavior: "smooth" });
      }
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await sendEmail(formData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Message sent successfully! I will be in touch soon.");
      form.reset();
    }

    setIsPending(false);
  }

  return (
    <div className="space-y-14 pb-20">
      
      {/* ─── SECTION 01: INTRODUCTION & HERO ─── */}
      <section id="intro" className="animate-fade-up stagger-1 pt-6 pb-2">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-10 items-start justify-between">
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-2">
              <span className="bryl-label">Introduction</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-(--apple-green) animate-pulse-slow" />
            </div>
            
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--ink) leading-[1.12]">
              Hi, I am Jude. I build fast, reliable web systems and applied AI.
            </h1>
            
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-(--ink-secondary) max-w-xl font-normal">
              Computer Engineering graduate focused on full-stack web applications and applied machine learning.
            </p>

            {/* Apple HIG Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToAnchor("projects")}
                className="apple-button-primary cursor-pointer"
              >
                Explore Work ↓
              </button>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="apple-button-secondary gap-1.5"
              >
                <span>Resume</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Apple Squircle Profile Image Container */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0 rounded-[28px] border border-black/8 dark:border-white/12 overflow-hidden relative transition-all duration-300 shadow-md p-1.5 bg-white/80 dark:bg-white/8 self-center md:self-start">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image 
                src="/newprofile1.jpg" 
                alt="Christian Jude Profile - Light" 
                fill 
                sizes="(max-width: 768px) 112px, 144px"
                className="object-cover object-top dark:opacity-0 transition-opacity duration-500"
                priority 
              />
              <Image 
                src="/newprofile2.jpg" 
                alt="Christian Jude Profile - Dark" 
                fill 
                sizes="(max-width: 768px) 112px, 144px"
                className="object-cover object-top opacity-0 dark:opacity-100 transition-opacity duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-2" />

      {/* ─── SECTION 02: BACKGROUND & CREDENTIALS ─── */}
      <section id="about" className="animate-fade-up stagger-2 space-y-6">
        <div>
          <p className="bryl-label">Background & Credentials</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Degree & Pearson Certifications */}
          <article className="bryl-card flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-(--ink-secondary)">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-(--apple-blue)/10 text-(--apple-blue)">
                  <GraduationCap size={18} strokeWidth={2} />
                </div>
                <span className="font-sans text-[13px] font-semibold text-(--ink)">
                  Academic Foundation
                </span>
              </div>
              
              <div>
                <h3 className="text-[17px] font-semibold tracking-tight text-(--ink)">
                  B.S. in Computer Engineering
                </h3>
              </div>
            </div>

            <div className="pt-4 border-t border-black/6 dark:border-white/8 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-(--ink)">
                  <div className="text-(--ink-tertiary)">
                    <Code size={16} strokeWidth={2} />
                  </div>
                  <p className="text-[14px] font-medium text-(--ink)">Python Programming</p>
                </div>
                <span className="rounded-full px-2.5 py-0.5 text-[10px] font-medium whitespace-nowrap shrink-0 bg-(--apple-blue)/10 text-(--apple-blue) dark:bg-(--apple-blue)/15 dark:text-(--apple-blue)">
                  Pearson VUE Certified
                </span>
              </div>
              
              <div className="bryl-hairline opacity-50" />

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-(--ink)">
                  <div className="text-(--ink-tertiary)">
                    <Database size={16} strokeWidth={2} />
                  </div>
                  <p className="text-[14px] font-medium text-(--ink)">Database Management</p>
                </div>
                <span className="rounded-full px-2.5 py-0.5 text-[10px] font-medium whitespace-nowrap shrink-0 bg-(--apple-blue)/10 text-(--apple-blue) dark:bg-(--apple-blue)/15 dark:text-(--apple-blue)">
                  Pearson VUE Certified
                </span>
              </div>
            </div>
          </article>

          {/* Specialization & Industry Focus */}
          <article className="bryl-card flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-(--ink-secondary)">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Award size={18} strokeWidth={2} />
                </div>
                <span className="font-sans text-[13px] font-semibold text-(--ink)">
                  Core Competencies
                </span>
              </div>

              <div className="space-y-3 text-[13px] leading-relaxed">
                <div>
                  <span className="font-semibold text-(--ink)">Full-Stack Systems</span>
                  <span className="text-(--ink-secondary)"> — Next.js, React, TypeScript & relational databases</span>
                </div>
                
                <div className="pt-2 border-t border-black/6 dark:border-white/8">
                  <span className="font-semibold text-(--ink)">Applied AI / ML</span>
                  <span className="text-(--ink-secondary)"> — Computer vision (CNN) & LLM data pipelines</span>
                </div>

                <div className="pt-2 border-t border-black/6 dark:border-white/8">
                  <span className="font-semibold text-(--ink)">Experience</span>
                  <span className="text-(--ink-secondary)"> — 3+ years building academic research & production web apps</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-3" />

      {/* ─── SECTION 03: TECH STACK & TOOLCHAIN ─── */}
      <section id="skills" className="animate-fade-up stagger-3 space-y-6">
        <div>
          <p className="bryl-label">Tech Stack</p>
        </div>

        <TechStackSection />
      </section>

      <div className="bryl-hairline animate-fade-up stagger-4" />

      {/* ─── SECTION 04: FEATURED WORK & PROJECTS ─── */}
      <ProjectsSection />

      <div className="bryl-hairline animate-fade-up stagger-5" />

      {/* ─── SECTION 05: CERTIFICATES & CREDENTIALS ─── */}
      <section id="certificates" className="animate-fade-up stagger-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="bryl-label">Certificates</p>
        </div>
        <CertificatesDeck />
      </section>

      <div className="bryl-hairline animate-fade-up stagger-5" />
      
      {/* ─── SECTION 06: GALLERY & MILESTONES ─── */}
      <section id="gallery" className="animate-fade-up stagger-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="bryl-label">Gallery</p>
        </div>
        <GallerySection />
      </section>

      <div className="bryl-hairline animate-fade-up stagger-5" />

      {/* ─── SECTION 06: CONTACT & INQUIRIES ─── */}
      <section id="contact" className="animate-fade-up stagger-5 space-y-6">
        <div>
          <p className="bryl-label">Contact</p>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-(--ink) mt-1.5">
            Let&apos;s build something meaningful.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 items-start">
          
          {/* Left Column: Direct Contact & Channels (Apple Settings Grouped List) */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-black/6 dark:border-white/8 bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-xl divide-y divide-black/6 dark:divide-white/8 text-[13px]">
              <a
                href="mailto:cjeraldo@outlook.ph"
                className="group flex items-center justify-between gap-3 p-3.5 transition-colors hover:bg-black/2 dark:hover:bg-white/3"
              >
                <div className="flex items-center gap-3 text-(--ink)">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-(--apple-blue)/10 text-(--apple-blue)">
                    <Mail size={15} strokeWidth={2} />
                  </div>
                  <span className="font-medium text-(--ink)">Email</span>
                </div>
                <span className="text-[12px] text-(--ink-secondary) group-hover:text-(--apple-blue) transition-colors flex items-center gap-1">
                  cjeraldo@outlook.ph
                  <ArrowUpRight size={12} />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/christian-jude-eraldo-012718251/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 transition-colors hover:bg-black/2 dark:hover:bg-white/3"
              >
                <div className="flex items-center gap-3 text-(--ink)">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-(--apple-blue)/10 text-(--apple-blue)">
                    <Globe size={15} strokeWidth={2} />
                  </div>
                  <span className="font-medium text-(--ink)">LinkedIn</span>
                </div>
                <span className="text-[12px] text-(--ink-secondary) group-hover:text-(--apple-blue) transition-colors flex items-center gap-1">
                  Profile
                  <ArrowUpRight size={12} />
                </span>
              </a>

              <a
                href="https://github.com/ChristianJudeEraldo"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 transition-colors hover:bg-black/2 dark:hover:bg-white/3"
              >
                <div className="flex items-center gap-3 text-(--ink)">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-(--apple-blue)/10 text-(--apple-blue)">
                    <GitBranch size={15} strokeWidth={2} />
                  </div>
                  <span className="font-medium text-(--ink)">GitHub</span>
                </div>
                <span className="text-[12px] text-(--ink-secondary) group-hover:text-(--apple-blue) transition-colors flex items-center gap-1">
                  @ChristianJudeEraldo
                  <ArrowUpRight size={12} />
                </span>
              </a>

              <div className="flex items-center justify-between gap-3 p-3.5">
                <div className="flex items-center gap-3 text-(--ink)">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MapPin size={15} strokeWidth={2} />
                  </div>
                  <span className="font-medium text-(--ink)">Location</span>
                </div>
                <span className="text-[12px] font-medium text-(--ink-secondary)">Philippines</span>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <form onSubmit={handleContactSubmit} className="bryl-card space-y-4">
            
            <div className="hidden" aria-hidden="true">
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[12px] font-medium text-(--ink-secondary)">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-black/8 dark:border-white/12 bg-black/2 dark:bg-white/5 px-3.5 py-2.5 text-[13px] text-(--ink) placeholder:text-(--ink-tertiary) outline-none focus:bg-white dark:focus:bg-[#1c1c1e] focus:border-(--apple-blue) focus:ring-3 focus:ring-(--apple-blue)/15 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[12px] font-medium text-(--ink-secondary)">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-black/8 dark:border-white/12 bg-black/2 dark:bg-white/5 px-3.5 py-2.5 text-[13px] text-(--ink) placeholder:text-(--ink-tertiary) outline-none focus:bg-white dark:focus:bg-[#1c1c1e] focus:border-(--apple-blue) focus:ring-3 focus:ring-(--apple-blue)/15 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[12px] font-medium text-(--ink-secondary)">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Tell me briefly about your project or opportunity."
                className="w-full resize-none rounded-xl border border-black/8 dark:border-white/12 bg-black/2 dark:bg-white/5 px-3.5 py-2.5 text-[13px] leading-relaxed text-(--ink) placeholder:text-(--ink-tertiary) outline-none focus:bg-white dark:focus:bg-[#1c1c1e] focus:border-(--apple-blue) focus:ring-3 focus:ring-(--apple-blue)/15 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="apple-button-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isPending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
              <span>{isPending ? "Sending..." : "Send Message"}</span>
            </button>
          </form>

        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="pt-8 border-t border-black/6 dark:border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-[12px] text-(--ink-secondary)">
          &copy; {new Date().getFullYear()} Christian Jude Eraldo &middot; Built with Next.js & React 19
        </p>
        <button
          type="button"
          onClick={() => scrollToAnchor("intro")}
          className="text-[12px] font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors cursor-pointer"
        >
          Back to Top ↑
        </button>
      </footer>

    </div>
  );
}