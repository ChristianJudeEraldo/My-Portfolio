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
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  ArrowDown
} from "lucide-react";
import { GallerySection } from "@/components/gallery-section";
import { TechStackSection } from "@/components/tech-stack";
import { TodoList } from "@/components/todo-list";
import { ModeToggle } from "@/components/mode-toggle";
import { sendEmail } from "@/app/actions/sendEmail";
import { toast } from "sonner";

export default function Home() {
  const [isPending, setIsPending] = useState(false);
  const [isCnnExpanded, setIsCnnExpanded] = useState(false);

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
    <div className="space-y-12 pb-16">
      
      {/* ─── SECTION 01: INTRODUCTION & HERO ─── */}
      <section id="intro" className="animate-fade-up stagger-1 pt-4 pb-2">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-start justify-between">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-2">
              <span className="bryl-label">01 &mdash; INTRODUCTION</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-(--gray-400) animate-pulse-slow" />
            </div>
            
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight lowercase leading-[1.08] text-(--ink)">
              hi i am jude &mdash; building fast, reliable web systems and applied ai.
            </h1>
            
            <p className="text-[15px] sm:text-[16px] font-serif leading-relaxed text-(--gray-500) max-w-xl">
              Computer Engineering Graduate specializing in high-performance web development, 
              machine learning (CNN) integration, and production-grade software delivery.
            </p>

            {/* Fast Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToAnchor("projects")}
                className="bryl-button font-mono text-[11px] tracking-wider uppercase cursor-pointer"
              >
                Explore Work ↓
              </button>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3.5 py-2 rounded-md border border-(--gray-200) bg-(--gray-50) text-(--ink) font-mono text-[11px] tracking-wider uppercase hover:border-(--gray-400) transition-colors flex items-center gap-1"
              >
                Resume ↗
              </a>
              
              <a 
                href="/resume.pdf" 
                download="Christian_Jude_Eraldo_Resume.pdf"
                className="px-3 py-2 text-(--gray-500) hover:text-(--ink) font-mono text-[11px] tracking-wider uppercase transition-colors flex items-center gap-1"
              >
                PDF ↓
              </a>

              <button
                type="button"
                onClick={() => scrollToAnchor("contact")}
                className="px-3 py-2 text-(--gray-500) hover:text-(--ink) font-mono text-[11px] tracking-wider uppercase transition-colors flex items-center gap-1 cursor-pointer"
              >
                Contact ↗
              </button>
            </div>
          </div>

          {/* Dual Theme Profile Photo */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 rounded-2xl border border-(--gray-200) overflow-hidden relative transition-all duration-500 shadow-xs p-1 bg-(--gray-50) self-center md:self-start">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image 
                src="/newprofile1.jpg" 
                alt="Christian Jude Profile - Light" 
                fill 
                sizes="(max-width: 768px) 96px, 128px"
                className="object-cover object-top dark:opacity-0 transition-opacity duration-500"
                priority 
              />
              <Image 
                src="/newprofile2.jpg" 
                alt="Christian Jude Profile - Dark" 
                fill 
                sizes="(max-width: 768px) 96px, 128px"
                className="object-cover object-top opacity-0 dark:opacity-100 transition-opacity duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-2" />

      {/* ─── SECTION 02: BACKGROUND & CREDENTIALS ─── */}
      <section id="about" className="animate-fade-up stagger-2 space-y-5">
        <div className="flex items-center justify-between">
          <p className="bryl-label">02 &mdash; BACKGROUND & CREDENTIALS</p>
          <span className="font-mono text-[10px] text-(--gray-400) uppercase tracking-widest">
            Profile & Education
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Degree & Pearson Certifications */}
          <article className="bryl-card p-4 sm:p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-(--gray-400)">
                <GraduationCap size={20} strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-wider text-(--ink) font-bold">
                  Academic Foundation
                </span>
              </div>
              
              <div>
                <h3 className="text-[16px] font-semibold tracking-tight text-(--ink)">
                  B.S. in Computer Engineering
                </h3>
                <p className="bryl-label text-[10px] mt-0.5">Graduate</p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-(--gray-500) font-serif">
                  Software-focused engineer building high-performance systems,
                  backed by a BSCPE foundation and practical implementation discipline.
                </p>
              </div>
            </div>

            <div className="pt-3.5 border-t border-(--gray-200) space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-(--gray-400) shrink-0">
                  <Code size={16} strokeWidth={1.5} />
                </div>
                <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="text-[14px] font-medium text-(--ink)">Python Programming</p>
                  <p className="bryl-label text-[10px]">Pearson VUE Certified</p>
                </div>
              </div>
              
              <div className="bryl-hairline opacity-60" />

              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-(--gray-400) shrink-0">
                  <Database size={16} strokeWidth={1.5} />
                </div>
                <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="text-[14px] font-medium text-(--ink)">Database Management</p>
                  <p className="bryl-label text-[10px]">Pearson VUE Certified</p>
                </div>
              </div>
            </div>
          </article>

          {/* Specialization & Industry Focus */}
          <article className="bryl-card p-4 sm:p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-(--gray-400)">
                <Award size={20} strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-wider text-(--ink) font-bold">
                  Core Competencies
                </span>
              </div>

              <div className="space-y-2 text-[13px] leading-relaxed">
                <div>
                  <span className="bryl-label text-[10px] block">Specialization</span>
                  <p className="text-(--gray-500) mt-0.5">
                    Full-stack web systems, AI-driven features, and efficient architectures.
                  </p>
                </div>
                
                <div className="pt-1.5 border-t border-(--gray-200)">
                  <span className="bryl-label text-[10px] block">Experience & Focus</span>
                  <p className="text-(--gray-500) mt-0.5">
                    3+ years project experience across web builds, thesis ML models & real-time telemetry.
                  </p>
                </div>

                <div className="pt-1.5 border-t border-(--gray-200)">
                  <span className="bryl-label text-[10px] block">Collaboration</span>
                  <p className="text-(--gray-500) mt-0.5">
                    Feedback-driven development, clear documentation, and rapid iteration.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-(--gray-200)">
              <p className="text-[12px] font-serif italic text-(--gray-500) leading-snug">
                &ldquo;Refining how ideas move from prototype to reliable product.&rdquo;
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-3" />

      {/* ─── SECTION 03: TECH STACK & TOOLCHAIN ─── */}
      <section id="skills" className="animate-fade-up stagger-3 space-y-5">
        <div>
          <div className="flex items-center justify-between">
            <p className="bryl-label">03 &mdash; TECH STACK & TOOLCHAIN</p>
            <span className="font-mono text-[10px] text-(--gray-400) uppercase tracking-widest">
              Core Skills
            </span>
          </div>
          <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tight lowercase text-(--ink) mt-1">
            core technologies & toolchain
          </h2>
        </div>

        <TechStackSection />
      </section>

      <div className="bryl-hairline animate-fade-up stagger-4" />

      {/* ─── SECTION 04: FEATURED WORK & RESEARCH ─── */}
      <section id="projects" className="animate-fade-up stagger-4 space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <p className="bryl-label">04 &mdash; FEATURED WORK & RESEARCH</p>
            <span className="font-mono text-[10px] text-(--gray-400) uppercase tracking-widest">
              2 Key Projects
            </span>
          </div>
          <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tight lowercase text-(--ink) mt-1">
            engineering projects & live demos
          </h2>
        </div>

        <div className="space-y-6">
          
          {/* Project 1: CNN Thesis Research */}
          <article id="projects-cnn" className="bryl-card p-5 sm:p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="bryl-label text-[11px]">
                  01 &mdash; MAJOR THESIS & AI RESEARCH
                </span>
                <span className="font-mono text-[10px] text-(--gray-400) uppercase tracking-wider">
                  Thesis Project &bull; Real-time Processing
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-(--ink)">
                CNN-Based Facial Recognition for Sleep Deprivation Detection
              </h3>

              <p className="text-[14px] leading-relaxed text-(--gray-500) font-serif">
                A deep learning computer vision system designed to classify early physiological signs of sleep 
                deprivation in students using Convolutional Neural Networks and facial landmark telemetry.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ Python ]
                </span>
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ TensorFlow / Keras ]
                </span>
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ OpenCV ]
                </span>
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ MediaPipe ]
                </span>
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ Next.js 16 ]
                </span>
              </div>
            </div>

            {/* Case Study Inline Expandable Drawer */}
            <div className="pt-3 border-t border-(--gray-200)">
              <button
                type="button"
                onClick={() => setIsCnnExpanded(!isCnnExpanded)}
                className="flex items-center justify-between w-full py-1 text-left font-mono text-[11px] uppercase tracking-widest text-(--ink) hover:text-(--gray-600) transition-colors cursor-pointer"
                aria-expanded={isCnnExpanded}
              >
                <span className="flex items-center gap-2">
                  <Cpu size={14} className="text-(--gray-400)" />
                  {isCnnExpanded ? "Hide Technical Architecture & Methodology" : "View Technical Architecture & Methodology"}
                </span>
                {isCnnExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {isCnnExpanded && (
                <div className="mt-4 pt-4 border-t border-(--gray-200) space-y-4 text-[13px] leading-relaxed text-(--gray-500) animate-fade-up">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="p-3 rounded-lg border border-(--gray-200) bg-(--background)/60 space-y-1">
                      <p className="bryl-label text-[9px] text-(--ink)">1. Data Pipeline</p>
                      <p className="text-[12px] font-serif">
                        Facial landmark tracking and ocular region extraction with OpenCV and MediaPipe mesh coordinates.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-(--gray-200) bg-(--background)/60 space-y-1">
                      <p className="bryl-label text-[9px] text-(--ink)">2. CNN Model</p>
                      <p className="text-[12px] font-serif">
                        Multi-class fatigue classification (alert, moderately fatigued, sleep-deprived) built with TensorFlow/Keras.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg border border-(--gray-200) bg-(--background)/60 space-y-1">
                      <p className="bryl-label text-[9px] text-(--ink)">3. UI & Telemetry</p>
                      <p className="text-[12px] font-serif">
                        Real-time logging dashboard engineered with Next.js 16 and responsive high-contrast telemetry states.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg border border-(--gray-200) bg-(--background) flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <div>
                      <p className="font-mono text-[11px] font-bold text-(--ink) uppercase">
                        Interactive Contrast Verification
                      </p>
                      <p className="text-[12px] font-serif text-(--gray-500)">
                        Toggle themes to inspect how telemetry and data readouts adapt across high-contrast monochrome states.
                      </p>
                    </div>
                    <ModeToggle />
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Project 2: Interactive Task & State Management System */}
          <article id="projects-todo" className="bryl-card p-5 sm:p-6 space-y-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="bryl-label text-[11px]">
                  02 &mdash; FRONTEND ARCHITECTURE & STATE
                </span>
                <span className="font-mono text-[10px] text-(--gray-400) uppercase tracking-wider">
                  Client State &bull; Zero External UI Deps
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-(--ink)">
                Interactive Task & State Management System
              </h3>

              <p className="text-[14px] leading-relaxed text-(--gray-500) font-serif">
                A focused software architecture study on immutable state transitions, dynamic priority reordering, 
                and zero-dependency client state manipulation in React 19.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ React 19 ]
                </span>
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ TypeScript ]
                </span>
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ Tailwind CSS ]
                </span>
                <span className="px-2 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[11px] font-mono text-(--gray-500)">
                  [ Pure State Updates ]
                </span>
              </div>
            </div>

            {/* Live Embedded Interactive Component */}
            <div className="pt-4 border-t border-(--gray-200)">
              <div className="p-4 rounded-xl border border-(--gray-200) bg-(--background)/80 backdrop-blur-xs">
                <TodoList />
              </div>
            </div>
          </article>

        </div>
      </section>

      <div className="bryl-hairline animate-fade-up stagger-5" />
      
      {/* ─── SECTION 05: GALLERY & MILESTONES ─── */}
      <section id="gallery" className="animate-fade-up stagger-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="bryl-label">05 &mdash; GALLERY & MILESTONES</p>
          <span className="font-mono text-[10px] text-(--gray-400) uppercase tracking-widest">
            Snap Scroll
          </span>
        </div>
        <GallerySection />
      </section>

      <div className="bryl-hairline animate-fade-up stagger-5" />

      {/* ─── SECTION 06: CONTACT & INQUIRIES ─── */}
      <section id="contact" className="animate-fade-up stagger-5 space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <p className="bryl-label">06 &mdash; GET IN TOUCH</p>
            <span className="font-mono text-[10px] text-(--gray-400) uppercase tracking-widest">
              Direct & Message
            </span>
          </div>
          <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tight lowercase text-(--ink) mt-1">
            let&apos;s build something meaningful.
          </h2>
          <p className="text-[14px] font-serif text-(--gray-500) mt-1 max-w-xl">
            If you&apos;re hiring, collaborating, or discussing a project, I&apos;m open to conversations
            around full-stack web development, AI integration, and software engineering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 items-start">
          
          {/* Left Column: Direct Contact & Channels */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-semibold tracking-tight text-(--ink)">
              Reach Me Directly
            </h3>

            <ul className="space-y-0 border-t border-(--gray-200) text-[13px]">
              <li>
                <a
                  href="mailto:cjeraldo@outlook.ph"
                  className="group flex items-center justify-between gap-3 border-b border-(--gray-200) py-3 transition-colors hover:text-(--ink)"
                >
                  <div className="flex items-center gap-3 text-(--gray-400)">
                    <Mail size={16} strokeWidth={1.5} />
                    <span className="font-medium text-(--ink)">Email</span>
                  </div>
                  <span className="bryl-label text-[10px] group-hover:text-(--ink) transition-colors">
                    cjeraldo@outlook.ph
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/christian-jude-eraldo-012718251/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 border-b border-(--gray-200) py-3 transition-colors hover:text-(--ink)"
                >
                  <div className="flex items-center gap-3 text-(--gray-400)">
                    <Globe size={16} strokeWidth={1.5} />
                    <span className="font-medium text-(--ink)">LinkedIn</span>
                  </div>
                  <span className="bryl-label text-[10px] group-hover:text-(--ink) transition-colors">
                    Profile ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ChristianJudeEraldo"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 border-b border-(--gray-200) py-3 transition-colors hover:text-(--ink)"
                >
                  <div className="flex items-center gap-3 text-(--gray-400)">
                    <GitBranch size={16} strokeWidth={1.5} />
                    <span className="font-medium text-(--ink)">GitHub</span>
                  </div>
                  <span className="bryl-label text-[10px] group-hover:text-(--ink) transition-colors">
                    @ChristianJudeEraldo ↗
                  </span>
                </a>
              </li>
              <li className="flex items-center justify-between gap-3 py-3 border-b border-(--gray-200)">
                <div className="flex items-center gap-3 text-(--gray-400)">
                  <MapPin size={16} strokeWidth={1.5} />
                  <span className="font-medium text-(--ink)">Location</span>
                </div>
                <span className="bryl-label text-[10px]">Philippines</span>
              </li>
            </ul>

            {/* Micro Blog / Notes Status Badge */}
            <div className="p-3 rounded-lg border border-(--gray-200) bg-(--gray-50) flex items-center justify-between">
              <span className="bryl-label text-[9px]">TECHNICAL WRITE-UPS</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-(--gray-400) flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-(--gray-400) animate-pulse" />
                Coming Soon
              </span>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <form onSubmit={handleContactSubmit} className="bryl-card p-4 sm:p-5 space-y-3.5">
            <h3 className="text-[15px] font-semibold tracking-tight text-(--ink)">
              Send a Quick Message
            </h3>
            
            <div className="hidden" aria-hidden="true">
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="space-y-1">
              <label htmlFor="name" className="bryl-label text-[10px]">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-(--gray-200) bg-(--background) px-3 py-2 text-[13px] text-(--ink) outline-none focus:border-(--gray-400) transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="bryl-label text-[10px]">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-md border border-(--gray-200) bg-(--background) px-3 py-2 text-[13px] text-(--ink) outline-none focus:border-(--gray-400) transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="bryl-label text-[10px]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Tell me briefly about your project or opportunity."
                className="w-full resize-none rounded-md border border-(--gray-200) bg-(--background) px-3 py-2 text-[13px] leading-relaxed text-(--ink) outline-none focus:border-(--gray-400) transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="bryl-button w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest font-mono text-[11px] cursor-pointer"
            >
              {isPending ? <Loader2 size={14} className="animate-spin" /> : <Send size={13} />}
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </section>

      {/* ─── COMPACT FOOTER ─── */}
      <footer className="pt-8 border-t border-(--gray-200) flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-mono text-[10px] text-(--gray-400) uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Christian Jude Eraldo &middot; Built with Next.js & React 19
        </p>
        <button
          type="button"
          onClick={() => scrollToAnchor("intro")}
          className="font-mono text-[10px] uppercase tracking-widest text-(--gray-400) hover:text-(--ink) transition-colors cursor-pointer"
        >
          Back to Top ↑
        </button>
      </footer>

    </div>
  );
}