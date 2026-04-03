import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Award, Database, Code, 
  Code2, Globe, Terminal, Cpu, CheckCircle2, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-500">Christian Jude</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            A <span className="font-semibold text-foreground">Computer Engineering Student</span> specializing in 
            building high-performance web applications and AI-integrated software solutions.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/20">
              Explore Projects
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-foreground/10 hover:bg-foreground/5 rounded-full font-medium transition-all">
              Contact Me
            </Link>
          </div>
        </div>

       {/* Profile Picture Section */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 opacity-20 blur-2xl"></div>
          
          <div className="relative w-full h-full rounded-2xl border-2 border-foreground/10 overflow-hidden bg-foreground/5">
            {/* Light Mode Image */}
            <Image 
              src="/profile.jpg" 
              alt="Christian Jude Profile" 
              fill 
              className="object-cover dark:opacity-0 dark:invisible transition-opacity duration-700 delay-150 ease-in-out"
              priority 
              unoptimized
            />

            {/* Dark Mode Image */}
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

      {/* --- EDUCATION & CERTIFICATIONS BENTO --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education Box */}
        <div className="p-8 border border-foreground/10 rounded-3xl bg-foreground/5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-500">
              <GraduationCap size={28} />
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold">B.S. in Computer Engineering</h3>
              <p className="text-foreground/60 italic">Graduating Student</p>
              <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
                Software-focused engineer building high-performance apps, 
                backed by a BSCPE degree and industry certifications
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Box */}
        <div className="p-8 border border-foreground/10 rounded-3xl bg-foreground/5 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-500">
              <Award size={28} />
              <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Code size={20} />
                </div>
                <div>
                  <p className="font-semibold leading-none">Python Programming</p>
                  <p className="text-xs text-foreground/50 mt-1">Pearson VUE Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Database size={20} />
                </div>
                <div>
                  <p className="font-semibold leading-none">Database Management</p>
                  <p className="text-xs text-foreground/50 mt-1">Pearson VUE Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SKILLS --- */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Cpu className="text-blue-500" size={28} />
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Python - Certified */}
          <div className="p-6 border border-foreground/10 rounded-2xl bg-foreground/5 hover:border-blue-500/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Terminal size={24} />
              </div>
              <span className="text-[10px] font-bold px-2 py-1 bg-green-500/10 text-green-500 rounded-full flex items-center gap-1">
                <CheckCircle2 size={10} /> CERTIFIED
              </span>
            </div>
            <h3 className="font-bold">Python</h3>
            <p className="text-xs text-foreground/50 mt-1">AI & Scripting</p>
          </div>

          {/* MySQL - Certified */}
          <div className="p-6 border border-foreground/10 rounded-2xl bg-foreground/5 hover:border-blue-500/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Database size={24} />
              </div>
              <span className="text-[10px] font-bold px-2 py-1 bg-green-500/10 text-green-500 rounded-full flex items-center gap-1">
                <CheckCircle2 size={10} /> CERTIFIED
              </span>
            </div>
            <h3 className="font-bold">MySQL</h3>
            <p className="text-xs text-foreground/50 mt-1">Database Management</p>
          </div>

          {/* PHP */}
          <div className="p-6 border border-foreground/10 rounded-2xl bg-foreground/5 hover:border-blue-500/30 transition-all group">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 mb-4 w-fit">
              <Code2 size={24} />
            </div>
            <h3 className="font-bold">PHP</h3>
            <p className="text-xs text-foreground/50 mt-1">Backend Logic</p>
          </div>

          {/* JavaScript */}
          <div className="p-6 border border-foreground/10 rounded-2xl bg-foreground/5 hover:border-blue-500/30 transition-all group">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 mb-4 w-fit">
              <Code2 size={24} />
            </div>
            <h3 className="font-bold">JavaScript</h3>
            <p className="text-xs text-foreground/50 mt-1">Interactive Web</p>
          </div>

          {/* HTML & CSS */}
          <div className="p-6 border border-foreground/10 rounded-2xl bg-foreground/5 hover:border-blue-500/30 transition-all group">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 mb-4 w-fit">
              <Globe size={24} />
            </div>
            <h3 className="font-bold">HTML5 / CSS3</h3>
            <p className="text-xs text-foreground/50 mt-1">Responsive Design</p>
          </div>

          {/* Agentic AI Workflows */}
          <div className="p-6 border border-foreground/10 rounded-2xl bg-foreground/5 hover:border-blue-500/30 transition-all group">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 mb-4 w-fit">
              <Bot size={24} />
            </div>
            <h3 className="font-bold">Agentic AI Workflows</h3>
            <p className="text-xs text-foreground/50 mt-1">Automation & Orchestration</p>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECT --- */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Briefcase className="text-blue-500" size={28} />
          <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
        </div>

        <Link href="/projects/cnn-thesis" className="block group">
          <div className="p-1 border border-foreground/5 rounded-3xl transition-all hover:border-blue-500/30 bg-foreground/[0.02] hover:bg-foreground/[0.04]">
            <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 text-blue-500">
                  <Cpu size={32} />
                  <span className="text-xs font-bold px-2 py-1 bg-blue-500/10 rounded">Major Thesis</span>
                </div>
                <h3 className="text-3xl font-bold group-hover:text-blue-500 transition-colors">
                  CNN-Based Facial Recognition
                </h3>
                <p className="text-foreground/70 max-w-xl">
                  A deep learning system designed to detect early signs of sleep deprivation in students 
                  using Convolutional Neural Networks.
                </p>
              </div>
              <div className="text-sm font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Read Case Study →
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}