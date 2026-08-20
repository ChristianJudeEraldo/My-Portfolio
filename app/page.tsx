import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Database, Code } from "lucide-react";
import { GallerySection } from "@/components/gallery-section";
import { TechStackSection } from "@/components/tech-stack";

export default function Home() {

  return (
    <div className="space-y-16 pb-20">
      
      {/* Intro Section */}
      <section className="animate-fade-up stagger-1 relative pt-8 pb-12 rounded-xl flex flex-col md:flex-row gap-8 items-start">
        <div className="space-y-6 flex-1 order-2 md:order-1">
          <p className="bryl-label">01 &mdash; INTRODUCTION</p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-2xl text-(--ink)">
            hi i am jude a developer who builds systems that stay fast, clear, and reliable.
          </h1>
          <p className="max-w-xl text-[17px] font-serif leading-relaxed text-(--gray-500)">
           Computer Engineering Graduate specializing in high-performance web development, AI integration, 
           and end-to-end software delivery.
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
        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border border-(--gray-200) overflow-hidden relative transition-all duration-500 order-1 md:order-2 self-center md:self-start shadow-xs">
           <Image 
              src="/newprofile1.jpg" 
              alt="Christian Jude Profile" 
              fill 
              sizes="(max-width: 768px) 96px, 128px"
              className="object-cover object-top dark:opacity-0 transition-opacity duration-500"
              priority 
            />
            <Image 
              src="/newprofile2.jpg" 
              alt="Christian Jude Profile - Dark Mode" 
              fill 
              sizes="(max-width: 768px) 96px, 128px"
              className="object-cover object-top opacity-0 dark:opacity-100 transition-opacity duration-500"
              priority
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

      {/* Technical Skills & Tech Stack */}
      <section className="animate-fade-up stagger-4 space-y-6">
        <div>
          <p className="bryl-label">03 &mdash; TECH STACK & CAPABILITIES</p>
          <h2 className="font-mono text-2xl font-bold tracking-tight lowercase text-(--ink) mt-1">
            core technologies & toolchain
          </h2>
          <p className="text-[14px] font-serif text-(--gray-500) mt-1 max-w-xl">
            Interactive breakdown of my primary development stack, frameworks, and engineering tools.
          </p>
        </div>

        <TechStackSection />
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