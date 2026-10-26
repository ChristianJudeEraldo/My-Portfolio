"use client";


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
      <path d="M11.914 0C5.794 0 6.177 2.656 6.177 2.656l.007 2.753h5.827v.826H3.84S0 5.797 0 11.94c0 6.14 3.344 5.922 3.344 5.922h1.996v-2.805s-.109-3.344 3.29-3.344h5.66v-.848H8.462s-3.344.054-3.344-3.235c0-3.29 2.887-3.208 2.887-3.208h8.868s2.969-.082 2.969 2.887v2.316h-1.67V8.118s.082-1.67-1.67-1.67H11.914s-1.67-.027-1.67 1.67c0 1.697 1.67 1.67 1.67 1.67h5.827s3.59.382 3.59 5.868c0 5.487-3.126 5.678-3.126 5.678h-1.942v2.343s.464 2.322-5.718 2.322c-6.182 0-5.772-2.683-5.772-2.683l-.007-2.726h5.827v-.826h-8.17S0 18.203 0 12.06c0-6.14 3.344-5.922 3.344-5.922h1.996V8.97s-.109 3.344 3.29 3.344h5.66v.848H8.462s-3.344-.054-3.344 3.235c0 3.29 2.887 3.208 2.887 3.208h8.868s2.969.082 2.969-2.887v-2.316h-1.67v2.316s.082 1.67-1.67 1.67H11.914s-1.67.027-1.67-1.67c0-1.697 1.67-1.67 1.67-1.67h5.827s3.59-.382 3.59-5.868c0-5.487-3.126-5.678-3.126-5.678h-1.942V2.656S18.096 0 11.914 0zm-2.42 1.838a.93.93 0 1 1 0 1.859.93.93 0 0 1 0-1.86zm5.012 18.465a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86z" />
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
];

interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: TECH_STACK.filter((item) => item.category === "frontend"),
  },
  {
    id: "backend",
    label: "Backend & DB",
    items: TECH_STACK.filter((item) => item.category === "backend"),
  },
  {
    id: "tools",
    label: "Cloud & Tools",
    items: TECH_STACK.filter((item) => item.category === "tools"),
  },
];

export function TechStackSection() {
  return (
    <div className="w-full">
      {/* ─── Section Header ─── */}
      <h2 className="text-xs font-semibold tracking-wider text-(--ink-secondary) uppercase mb-4">
        Tech Stack
      </h2>

      {/* ─── Categorized Rows Container ─── */}
      <div className="divide-y divide-black/8 dark:divide-zinc-800/60 border-y border-black/8 dark:border-zinc-800/60">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 sm:gap-3 py-3.5 sm:py-4 items-start"
          >
            {/* Category Label */}
            <span className="sm:col-span-1 text-[11px] sm:text-xs font-semibold sm:font-medium text-(--ink-secondary) uppercase tracking-wider sm:pt-1.5 select-none">
              {cat.label}
            </span>

            {/* Technology Pills */}
            <div className="sm:col-span-3 flex flex-wrap gap-1.5 sm:gap-2 items-center">
              {cat.items.map((tech) => {
                const Icon = tech.icon;

                return (
                  <span
                    key={tech.id}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-all duration-200 group cursor-default border text-(--ink) bg-(--fill) border-(--border) hover:bg-(--fill-hover) hover:border-black/15 dark:hover:border-zinc-700 hover:text-(--ink)"
                  >
                    <Icon className="w-4 h-4 shrink-0 text-(--ink-secondary) group-hover:text-(--ink) transition-colors" />
                    <span>{tech.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
