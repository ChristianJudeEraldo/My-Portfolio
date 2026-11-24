"use client";

import { useEffect, useRef, useState } from "react";


// ─── Precision Brand SVG Icons ───

function HtmlIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="HTML5">
      <path d="M1.5 0h21l-1.91 21.48L12 24l-8.59-2.52L1.5 0zm17.65 4.8H4.85l.48 5.4h11.97l-.46 5.16L12 16.68l-4.84-1.32-.32-3.6H4.28l.6 6.84L12 21.24l7.12-2.64.9-9.12H19.6l.55-4.68z" />
    </svg>
  );
}

function CssIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="CSS3">
      <path d="M1.5 0h21l-1.91 21.48L12 24l-8.59-2.52L1.5 0zm16.8 4.8H5.7l.42 4.8h10.98l-.48 5.4-4.62 1.26-4.62-1.26-.3-3.36H4.5l.54 6.12L12 20.28l6.96-2.52.84-9.36H18.7l.6-3.6z" />
    </svg>
  );
}

function JsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="JavaScript">
      <path d="M3 3h18v18H3V3zm13.78 14.18c1.32 0 2.22-.68 2.22-1.85 0-1.27-.86-1.74-2.28-2.36l-.68-.3c-.94-.41-1.35-.77-1.35-1.4 0-.64.51-1.12 1.34-1.12.87 0 1.39.38 1.76 1.07l1.77-1.12c-.73-1.36-1.92-1.89-3.53-1.89-2.03 0-3.48 1.25-3.48 3.03 0 1.48.91 2.24 2.45 2.89l.68.29c1.07.47 1.54.83 1.54 1.57 0 .76-.64 1.28-1.63 1.28-1.22 0-1.97-.61-2.43-1.57l-1.83 1.15c.81 1.63 2.28 2.36 4.47 2.36zm-6.9 0c1.09 0 1.94-.46 2.33-1.24.18-.36.26-.77.26-1.75V8.5H10.1v6.25c0 .77-.28 1.05-.88 1.05-.44 0-.74-.15-.99-.39l-1.34 1.42c.65.85 1.54 1.35 2.99 1.35z" />
    </svg>
  );
}

function ReactIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-label="React">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Tailwind CSS">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

function NextjsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Next.js">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 17.585-6.242-8.083v8.083H9.75V6.415h1.722l6.275 8.163v-8.163h1.669v11.17h-1.75z" />
    </svg>
  );
}

function PythonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Python">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  );
}

function FirebaseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Firebase">
      <path d="M4.686 16.516 2.052 3.498a.65.65 0 0 1 1.09-.544l2.748 3.513zm15.437.042-2.128-13.06a.65.65 0 0 0-1.16-.312L3.58 17.51l7.633 4.298a1.64 1.64 0 0 0 1.574 0l7.336-4.25zm-8.86-12.822a.65.65 0 0 0-1.22.188L8.6 9.87l4.02-4.02z" />
    </svg>
  );
}

function NodejsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Node.js">
      <path d="M12 2a1.73 1.73 0 0 0-.87.23l-7.79 4.5A1.73 1.73 0 0 0 2.5 8.23v9a1.73 1.73 0 0 0 .84 1.5l7.79 4.5a1.73 1.73 0 0 0 1.74 0l7.79-4.5a1.73 1.73 0 0 0 .84-1.5v-9a1.73 1.73 0 0 0-.84-1.5l-7.79-4.5A1.73 1.73 0 0 0 12 2zm0 2.31 6.54 3.77-2.85 1.64-3.69-2.13v5.18l-1.5.86V8.45L6.81 10.58 3.96 8.94 12 4.31zm-7.5 5.62 3.69 2.13v3.74l-3.69-2.13zm15 0v3.74l-3.69 2.13v-3.74zM12 14.5l3.69-2.13 2.85 1.64-6.54 3.78-6.54-3.78 2.85-1.64L12 14.5z" />
    </svg>
  );
}

function PostgresIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="PostgreSQL">
      <path d="M12.012 2c-5.523 0-10 4.477-10 10 0 3.722 2.035 6.968 5.05 8.67-.042-.392-.062-.821-.062-1.293 0-2.316.589-4.148 1.834-5.237-.417-.551-.662-1.246-.662-2.002 0-1.84 1.492-3.332 3.332-3.332.88 0 1.68.341 2.274.898.391-.212.83-.334 1.3-.334 1.547 0 2.802 1.255 2.802 2.802 0 .524-.145 1.014-.396 1.433.996.953 1.526 2.457 1.526 4.27 0 .394-.025.765-.074 1.111 3.003-1.705 5.035-4.943 5.035-8.653 0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function SupabaseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Supabase">
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.416 13.916a.792.792 0 0 0 .616 1.272H12v8.416a.396.396 0 0 0 .716.233l10.868-13.753a.792.792 0 0 0-.616-1.272z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitHub">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function VercelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Vercel">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
}

function VscodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="VS Code">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
    </svg>
  );
}

// ─── Tech Stack Specifications ───

type TechItem = {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools";
  role: string;
  certified?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

const TECH_STACK: TechItem[] = [
  {
    id: "react",
    name: "React",
    category: "frontend",
    role: "Component Architecture",
    icon: ReactIcon,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    role: "Full-Stack App Router",
    icon: NextjsIcon,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    role: "Design Systems & Tokens",
    icon: TailwindIcon,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    role: "ES6+ & Modern Web APIs",
    icon: JsIcon,
  },
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    role: "Semantic Markup & a11y",
    icon: HtmlIcon,
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    role: "Grid, Flexbox & Tokens",
    icon: CssIcon,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    role: "Runtime & API Engines",
    icon: NodejsIcon,
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    role: "Machine Learning & AI",
    certified: true,
    icon: PythonIcon,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "backend",
    role: "Relational Database",
    icon: PostgresIcon,
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "backend",
    role: "Postgres BaaS & Auth",
    icon: SupabaseIcon,
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "backend",
    role: "Cloud & Realtime DB",
    icon: FirebaseIcon,
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    role: "Version Control & CI/CD",
    icon: GithubIcon,
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "tools",
    role: "Deployment & Hosting",
    icon: VercelIcon,
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    role: "Editor & Dev Workflow",
    icon: VscodeIcon,
  },
];


// ─── Visual Config ───

/** Brand accent revealed on hover/focus. Monochrome brands follow the theme ink. */
const BRAND: Record<string, string> = {
  react: "#61dafb",
  nextjs: "var(--ink)",
  tailwind: "#38bdf8",
  javascript: "#f7df1e",
  html: "#e34f26",
  css: "#2f8fe0",
  nodejs: "#6cc24a",
  python: "#4f9fd8",
  postgres: "#6aa0d8",
  supabase: "#3ecf8e",
  firebase: "#ffca28",
  github: "var(--ink)",
  vercel: "var(--ink)",
  vscode: "#2fa3f2",
};

/** Primary tools shown as feature cards. */
const FEATURED_IDS = ["nextjs", "react", "python"];
const FEATURED = FEATURED_IDS.map((id) => TECH_STACK.find((t) => t.id === id)!);

interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
  startIndex: number;
}

const CATEGORY_DEFS = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & DB" },
  { id: "tools", label: "Cloud & Tools" },
] as const;

// Secondary tools grouped by category; startIndex keeps the entrance stagger continuous.
const CATEGORIES: TechCategory[] = (() => {
  let cursor = FEATURED.length;
  return CATEGORY_DEFS.map((def) => {
    const items = TECH_STACK.filter(
      (t) => t.category === def.id && !FEATURED_IDS.includes(t.id)
    );
    const cat = { ...def, items, startIndex: cursor };
    cursor += items.length;
    return cat;
  }).filter((c) => c.items.length > 0);
})();

const brandStyle = (id: string) => ({ "--brand": BRAND[id] }) as React.CSSProperties;

// ─── Helpers ───

function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView] as const;
}

/** Staggered fade/slide-in. Kept on a wrapper so its delay never affects hover transitions. */
function Reveal({
  show,
  index,
  className = "",
  children,
}: {
  show: boolean;
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
      style={{ transitionDelay: show ? `${index * 55}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function trackSpotlight(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

// ─── Feature Card (primary tools) ───

function FeatureCard({ tech }: { tech: TechItem }) {
  const Icon = tech.icon;

  return (
    <article
      onMouseMove={trackSpotlight}
      style={brandStyle(tech.id)}
      className="group relative flex h-full items-center gap-3 overflow-hidden rounded-xl border border-(--border) bg-(--fill) p-3 transition-colors sm:block sm:p-4 duration-200 hover:bg-(--fill-hover) hover:border-black/15 dark:hover:border-zinc-700"
    >
      {/* Cursor-following brand spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--brand) 16%, transparent), transparent 70%)",
        }}
      />

      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-(--fill) text-(--ink-secondary) transition-colors duration-200 group-hover:text-(--brand) sm:h-9 sm:w-9">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>

      <div className="relative min-w-0 flex-1 sm:mt-3 sm:flex-none">
        <h3 className="text-sm font-medium leading-tight text-(--ink)">{tech.name}</h3>
        <p className="mt-0.5 text-xs text-(--ink-secondary)">{tech.role}</p>
      </div>

      {tech.certified && (
        <span className="relative shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-600 dark:text-blue-400 sm:absolute sm:right-4 sm:top-4">
          Certified
        </span>
      )}
    </article>
  );
}

// ─── Compact Chip (secondary tools) ───

function TechChip({ tech }: { tech: TechItem }) {
  const Icon = tech.icon;

  return (
    <span
      tabIndex={0}
      style={brandStyle(tech.id)}
      className="group relative inline-flex cursor-default items-center gap-2 rounded-lg border border-(--border) bg-(--fill) px-3 py-1.5 text-xs text-(--ink) outline-none transition-all duration-200 hover:bg-(--fill-hover) hover:border-black/15 hover:shadow-[0_0_18px_-6px_var(--brand)] focus-visible:ring-2 focus-visible:ring-(--ink)/40 dark:hover:border-zinc-700 sm:text-sm"
    >
      <Icon className="h-4 w-4 shrink-0 text-(--ink-secondary) transition-colors group-hover:text-(--brand) group-focus-visible:text-(--brand)" />
      <span>{tech.name}</span>
      <span className="sr-only"> — {tech.role}</span>

      {/* Role tooltip (visual only; screen readers get the sr-only text above) */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#1c1c1e] px-2 py-1 text-[11px] text-[#f5f5f7] opacity-0 shadow-lg transition duration-150 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100"
      >
        {tech.role}
      </span>
    </span>
  );
}

// ─── Section ───

export function TechStackSection() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="w-full">
      {/* ─── Section Header ─── */}
      <h2 className="bryl-label mb-4">Tech Stack</h2>

      {/* ─── Core Stack: Feature Cards ─── */}
      <div
        role="group"
        aria-label="Core technologies"
        tabIndex={0}
        className="mb-3 flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain rounded-xl pb-1 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-(--ink)/40 [&::-webkit-scrollbar]:hidden sm:mb-4 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-2.5 sm:overflow-visible sm:pb-0"
      >
        {FEATURED.map((tech, i) => (
          <Reveal
            key={tech.id}
            show={inView}
            index={i}
            className="w-64 shrink-0 snap-start sm:w-auto sm:shrink"
          >
            <FeatureCard tech={tech} />
          </Reveal>
        ))}
      </div>

      {/* ─── Supporting Stack: Categorized Chips ─── */}
      <div className="divide-y divide-black/8 border-y border-black/8 dark:divide-zinc-800/60 dark:border-zinc-800/60">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="grid grid-cols-1 items-start gap-2.5 py-3.5 sm:grid-cols-4 sm:gap-3 sm:py-4"
          >
            <span className="select-none text-[11px] font-semibold uppercase tracking-wider text-(--ink-secondary) sm:col-span-1 sm:pt-1.5 sm:text-xs sm:font-medium">
              {cat.label}
            </span>

            <div className="flex flex-wrap items-center gap-1.5 sm:col-span-3 sm:gap-2">
              {cat.items.map((tech, i) => (
                <Reveal key={tech.id} show={inView} index={cat.startIndex + i}>
                  <TechChip tech={tech} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
