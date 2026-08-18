"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

// ─── Precision Monochrome Brand SVG Icons ───

function HtmlIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="HTML5">
      <path d="M1.5 0h21l-1.91 21.48L12 24l-8.59-2.52L1.5 0zm17.65 4.8H4.85l.48 5.4h11.97l-.46 5.16L12 16.68l-4.84-1.32-.32-3.6H4.28l.6 6.84L12 21.24l7.12-2.64.9-9.12H19.6l.55-4.68z" />
    </svg>
  );
}

function CssIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="CSS3">
      <path d="M1.5 0h21l-1.91 21.48L12 24l-8.59-2.52L1.5 0zm16.8 4.8H5.7l.42 4.8h10.98l-.48 5.4-4.62 1.26-4.62-1.26-.3-3.36H4.5l.54 6.12L12 20.28l6.96-2.52.84-9.36H18.7l.6-3.6z" />
    </svg>
  );
}

function JsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="JavaScript">
      <path d="M3 3h18v18H3V3zm13.78 14.18c1.32 0 2.22-.68 2.22-1.85 0-1.27-.86-1.74-2.28-2.36l-.68-.3c-.94-.41-1.35-.77-1.35-1.4 0-.64.51-1.12 1.34-1.12.87 0 1.39.38 1.76 1.07l1.77-1.12c-.73-1.36-1.92-1.89-3.53-1.89-2.03 0-3.48 1.25-3.48 3.03 0 1.48.91 2.24 2.45 2.89l.68.29c1.07.47 1.54.83 1.54 1.57 0 .76-.64 1.28-1.63 1.28-1.22 0-1.97-.61-2.43-1.57l-1.83 1.15c.81 1.63 2.28 2.36 4.47 2.36zm-6.9 0c1.09 0 1.94-.46 2.33-1.24.18-.36.26-.77.26-1.75V8.5H10.1v6.25c0 .77-.28 1.05-.88 1.05-.44 0-.74-.15-.99-.39l-1.34 1.42c.65.85 1.54 1.35 2.99 1.35z" />
    </svg>
  );
}

function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-label="React">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Tailwind CSS">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

function NextjsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Next.js">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 17.585-6.242-8.083v8.083H9.75V6.415h1.722l6.275 8.163v-8.163h1.669v11.17h-1.75z" />
    </svg>
  );
}

function PythonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Python">
      <path d="M11.914 0C5.794 0 6.177 2.656 6.177 2.656l.007 2.753h5.827v.826H3.84S0 5.797 0 11.94c0 6.14 3.344 5.922 3.344 5.922h1.996v-2.805s-.109-3.344 3.29-3.344h5.66v-.848H8.462s-3.344.054-3.344-3.235c0-3.29 2.887-3.208 2.887-3.208h8.868s2.969-.082 2.969 2.887v2.316h-1.67V8.118s.082-1.67-1.67-1.67H11.914s-1.67-.027-1.67 1.67c0 1.697 1.67 1.67 1.67 1.67h5.827s3.59.382 3.59 5.868c0 5.487-3.126 5.678-3.126 5.678h-1.942v2.343s.464 2.322-5.718 2.322c-6.182 0-5.772-2.683-5.772-2.683l-.007-2.726h5.827v-.826h-8.17S0 18.203 0 12.06c0-6.14 3.344-5.922 3.344-5.922h1.996V8.97s-.109 3.344 3.29 3.344h5.66v.848H8.462s-3.344-.054-3.344 3.235c0 3.29 2.887 3.208 2.887 3.208h8.868s2.969.082 2.969-2.887v-2.316h-1.67v2.316s.082 1.67-1.67 1.67H11.914s-1.67.027-1.67-1.67c0-1.697 1.67-1.67 1.67-1.67h5.827s3.59-.382 3.59-5.868c0-5.487-3.126-5.678-3.126-5.678h-1.942V2.656S18.096 0 11.914 0zm-2.42 1.838a.93.93 0 1 1 0 1.859.93.93 0 0 1 0-1.86zm5.012 18.465a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86z" />
    </svg>
  );
}

function FirebaseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Firebase">
      <path d="M4.686 16.516 2.052 3.498a.65.65 0 0 1 1.09-.544l2.748 3.513zm15.437.042-2.128-13.06a.65.65 0 0 0-1.16-.312L3.58 17.51l7.633 4.298a1.64 1.64 0 0 0 1.574 0l7.336-4.25zm-8.86-12.822a.65.65 0 0 0-1.22.188L8.6 9.87l4.02-4.02z" />
    </svg>
  );
}

// ─── Tech Stack Specifications ───

type TechItem = {
  id: string;
  name: string;
  category: "frontend" | "languages" | "cloud";
  role: string;
  summary: string;
  tags: string[];
  certified?: boolean;
  projectHref?: string;
  projectTitle?: string;
  icon: React.ComponentType<{ className?: string }>;
};

const TECH_STACK: TechItem[] = [
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    role: "Semantic Markup & a11y",
    summary: "Semantic DOM architecture, WAI-ARIA standards, and SEO layout hierarchy.",
    tags: ["Semantic HTML", "WAI-ARIA", "Responsive DOM"],
    icon: HtmlIcon,
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    role: "Layouts & Design Tokens",
    summary: "Modern CSS Grid, Flexbox, custom properties tokens, and dark/light mode ramps.",
    tags: ["CSS Grid & Flex", "Variables / Tokens", "Animations"],
    icon: CssIcon,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    role: "Async Logic & Web APIs",
    summary: "Modern ES6+ syntax, Web Audio API synthesis, asynchronous flows, and DOM logic.",
    tags: ["ES6+ Modern", "Web Audio API", "Async / Await"],
    projectHref: "/projects/todo",
    projectTitle: "To-Do List",
    icon: JsIcon,
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    role: "Component Architecture",
    summary: "Declarative UI engineering, custom hooks, fine-grained state, and fast re-renders.",
    tags: ["React 19", "Custom Hooks", "State Architecture"],
    projectHref: "/projects/todo",
    projectTitle: "Interactive UI",
    icon: ReactIcon,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    role: "Utility-First Theming",
    summary: "Rapid responsive styling, Tailwind v4 design token engine, and custom variants.",
    tags: ["Tailwind v4", "Dark/Light Modes", "Design Systems"],
    icon: TailwindIcon,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    role: "Full-Stack App Router",
    summary: "React Server Components, SSG static pre-rendering, Turbopack, and API routes.",
    tags: ["App Router", "Server Components", "Turbopack"],
    projectHref: "/",
    projectTitle: "Portfolio Engine",
    icon: NextjsIcon,
  },
  {
    id: "python",
    name: "Python",
    category: "languages",
    role: "AI & Machine Learning",
    summary: "Convolutional Neural Networks, OpenCV computer vision, and backend scripting.",
    tags: ["CNN / Keras", "Computer Vision", "Automation"],
    certified: true,
    projectHref: "/projects/cnn-thesis",
    projectTitle: "CNN Thesis",
    icon: PythonIcon,
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "cloud",
    role: "Backend & Cloud Services",
    summary: "Cloud Firestore NoSQL database, Firebase Authentication, and real-time state sync.",
    tags: ["Firestore DB", "OAuth & Auth", "Realtime Sync"],
    icon: FirebaseIcon,
  },
];

export function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "frontend" | "languages" | "cloud">("all");

  const filteredItems = activeFilter === "all"
    ? TECH_STACK
    : TECH_STACK.filter((item) => {
        if (activeFilter === "frontend") return item.category === "frontend";
        if (activeFilter === "languages") return item.category === "languages" || item.id === "html" || item.id === "css";
        if (activeFilter === "cloud") return item.category === "cloud" || item.id === "python";
        return true;
      });

  return (
    <div className="space-y-6">
      
      {/* Category Pills - Quick 1-click Filter */}
      <div className="flex items-center gap-1.5 p-1 bg-(--gray-100) rounded-lg border border-(--gray-200) w-fit">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded transition-all cursor-pointer ${
            activeFilter === "all"
              ? "bg-(--ink) text-(--background) font-semibold shadow-xs"
              : "text-(--gray-500) hover:text-(--ink)"
          }`}
        >
          All [{TECH_STACK.length}]
        </button>
        <button
          onClick={() => setActiveFilter("frontend")}
          className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded transition-all cursor-pointer ${
            activeFilter === "frontend"
              ? "bg-(--ink) text-(--background) font-semibold shadow-xs"
              : "text-(--gray-500) hover:text-(--ink)"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveFilter("languages")}
          className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded transition-all cursor-pointer ${
            activeFilter === "languages"
              ? "bg-(--ink) text-(--background) font-semibold shadow-xs"
              : "text-(--gray-500) hover:text-(--ink)"
          }`}
        >
          Languages
        </button>
        <button
          onClick={() => setActiveFilter("cloud")}
          className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded transition-all cursor-pointer ${
            activeFilter === "cloud"
              ? "bg-(--ink) text-(--background) font-semibold shadow-xs"
              : "text-(--gray-500) hover:text-(--ink)"
          }`}
        >
          Cloud & AI
        </button>
      </div>

      {/* Direct, Straight-to-the-Point 8-Tech Grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {filteredItems.map((tech) => {
          const Icon = tech.icon;
          return (
            <article
              key={tech.id}
              className="bryl-card p-4.5 group relative flex flex-col justify-between transition-all duration-300 hover:border-(--gray-300) overflow-hidden"
            >
              {/* Subtle Halftone Effect on Hover */}
              <div className="absolute inset-0 bryl-halftone opacity-0 group-hover:opacity-15 pointer-events-none transition-opacity duration-300" />

              <div className="relative z-10 space-y-3">
                
                {/* Header: Icon + Name + Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg border border-(--gray-200) bg-(--background) text-(--ink) group-hover:border-(--gray-400) transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-[15px] font-bold text-(--ink) leading-tight">
                        {tech.name}
                      </h3>
                      <p className="bryl-label text-[10px] mt-0.5">
                        {tech.role}
                      </p>
                    </div>
                  </div>

                  {tech.certified && (
                    <span className="bryl-pill bryl-pill-inverted text-[8px] flex items-center gap-1 shrink-0">
                      <ShieldCheck size={10} /> CERTIFIED
                    </span>
                  )}
                </div>

                {/* Direct Summary */}
                <p className="text-[13px] leading-relaxed text-(--gray-500) font-serif">
                  {tech.summary}
                </p>

              </div>

              {/* Footer: Tags + Optional Direct Project Link */}
              <div className="relative z-10 pt-3 mt-3 border-t border-(--gray-200) flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-(--background) border border-(--gray-200) text-[10px] font-mono text-(--gray-500)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {tech.projectHref && (
                  <Link
                    href={tech.projectHref}
                    className="font-mono text-[10px] uppercase tracking-wider text-(--gray-400) hover:text-(--ink) flex items-center gap-0.5 transition-colors"
                  >
                    <span>{tech.projectTitle}</span>
                    <ArrowUpRight size={11} />
                  </Link>
                )}
              </div>

            </article>
          );
        })}
      </div>

    </div>
  );
}
