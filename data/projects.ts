export interface ProjectImage {
  src: string;
  caption?: string;
}

export interface ProjectTechCategory {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle?: string;
  summary: string;
  tag: string;
  badge?: string;
  laurelBadge?: string;
  pillTags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  images: ProjectImage[];
  overview: string[];
  features: string[];
  highlights?: string[];
  techStack: ProjectTechCategory[];
}

export const projects: Project[] = [
  {
    slug: "sleep-deprivation-detection",
    title: "CNN Facial Recognition for Sleep Deprivation Detection",
    shortTitle: "Sleep Deprivation Monitor",
    seoTitle: "CNN Sleep Deprivation Detection",
    summary: "Deep learning computer vision system classifying early physiological fatigue markers using CNNs and facial landmark telemetry.",
    tag: "Machine Learning / AI",
    badge: "Thesis & Telemetry",
    laurelBadge: "Computer Vision Thesis",
    pillTags: ["Machine Learning", "94.8% Accuracy"],
    liveUrl: "https://lpu-health-monitoring.me/",
    thumbnail: "/projects/sleep-deprivation/thumb.svg",
    images: [
      {
        src: "/lpuhealth.png",
        caption: "Live facial landmark mesh and ocular aspect ratio telemetry pipeline."
      },
      {
        src: "/lpuhealth2.png",
        caption: "Longitudinal student sleep deprivation metrics and clinic health portal."
      }
    ],
    overview: [
      "Engineered as an applied machine learning thesis system for Lyceum of the Philippines University - Cavite (LPU-C), this platform detects and classifies early physiological markers of sleep deprivation and cognitive fatigue in students.",
      "The system replaces subjective self-reported questionnaires with real-time ocular telemetry. By extracting facial landmark coordinates (Eye Aspect Ratio and Mouth Aspect Ratio) at 60 FPS, the multi-class Convolutional Neural Network accurately differentiates between alertness, mild drowsiness, and severe sleep deprivation."
    ],
    features: [
      "Real-time ocular telemetry tracking Eye Aspect Ratio (EAR) and blink frequency via MediaPipe FaceMesh.",
      "Multi-class CNN classification model categorizing fatigue states (Alert, Moderately Fatigued, Severely Sleep Deprived).",
      "Yawn detection telemetry using dynamic Mouth Aspect Ratio (MAR) thresholds.",
      "Secure clinic portal with longitudinal student health tracking, role-based access control, and telemetry logging.",
      "High-contrast responsive UI built for clinical monitors and ambient laboratory lighting conditions."
    ],
    highlights: [
      "94.8% test accuracy across controlled multi-angle lighting environments with OpenCV preprocessing.",
      "Edge-optimized landmark extraction minimizing latency and preserving student video privacy.",
      "Automated telemetry alert flags when persistent microsleeps are identified during monitoring sessions."
    ],
    techStack: [
      {
        category: "Computer Vision & ML",
        items: ["Python 3.10", "TensorFlow / Keras", "OpenCV", "MediaPipe"]
      },
      {
        category: "Web & Telemetry",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
      },
      {
        category: "Backend & Security",
        items: ["Node.js", "REST APIs", "Role-Based Auth (RBAC)"]
      },
      {
        category: "Deployment",
        items: ["Cloud Linux VM", "Nginx Reverse Proxy", "SSL / TLS"]
      }
    ]
  },
  {
    slug: "pamilihan-ai",
    title: "Pamilihan AI — Philippine Market Recipe Pricing",
    shortTitle: "Pamilihan AI",
    seoTitle: "Pamilihan AI: Market Recipe Pricing",
    summary: "Intelligent Philippine market recipe pricing platform powered by WFP HDX commodity datasets and a deterministic pricing engine.",
    tag: "AI & Data Platform",
    badge: "Featured Web App",
    laurelBadge: "WFP HDX Commodity AI",
    pillTags: ["REST API", "AI INTEGRATION"],
    liveUrl: "https://aipamilihan.vercel.app/",
    thumbnail: "/projects/pamilihan-ai/thumb.png",
    images: [
      {
        src: "/aipamilihan.png",
        caption: "Automated ingredient pricing calculation and serving cost breakdown for local dishes."
      },
      {
        src: "/aipamilihan2.png",
        caption: "Regional Philippine market variance analysis and commodity inflation tracking."
      }
    ],
    overview: [
      "Pamilihan AI is an intelligent recipe costing and market intelligence platform designed for Filipino home cooks, food businesses, and caterers. It calculates the exact cooking cost of dishes based on real-time commodity prices across Philippine wet markets ('palengke') and supermarkets.",
      "By ingesting and parsing United Nations World Food Programme (WFP) Humanitarian Data Exchange (HDX) datasets, the platform matches natural language ingredients to official commodity price indices across 17 Philippine regions, eliminating guesswork and budgeting blind spots."
    ],
    features: [
      "Regional price grounding matching ingredients to specific Philippine regional markets (NCR, Region VII, Region XI, etc.).",
      "Intelligent unit conversion engine normalizing wet market units (tali, dakot, kilo, piraso, lata) into standard metric prices.",
      "AI recipe parser turning freeform recipe texts, grocery lists, or URLs into priced line items.",
      "Per-serving cost breakdown helping small food enterprises price their menu offerings accurately.",
      "Interactive inflation indicators showing monthly price fluctuations for key staples like rice, pork, poultry, and vegetables."
    ],
    highlights: [
      "Deterministic calculation pipeline: ensures reproducible, transparent math while using AI strictly for semantic normalization.",
      "Integration with WFP Humanitarian Data Exchange (HDX) for validated, real-world Philippine commodity benchmarks.",
      "Optimized client bundle delivering instantaneous price updates and offline recipe drafting."
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Inter / SF Pro"]
      },
      {
        category: "AI & NLP",
        items: ["Vercel AI SDK", "LLM Structured Outputs", "Ingredient Semantic Parser"]
      },
      {
        category: "Data & Pricing",
        items: ["WFP HDX Commodity Datasets", "Deterministic Unit Engine", "Zod Validation"]
      },
      {
        category: "Hosting",
        items: ["Vercel", "Edge Network"]
      }
    ]
  },
  {
    slug: "subtrace",
    title: "SubTrace — Subscription & Recurring Expense Tracker",
    shortTitle: "SubTrace",
    seoTitle: "SubTrace: Recurring Expense Tracker",
    summary: "Modern SaaS financial tracker analyzing monthly run rate, annual commitments, renewal calendars, and overdue payment alerts.",
    tag: "Financial SaaS",
    badge: "Production App",
    laurelBadge: "Local-First Financial SaaS",
    pillTags: ["Apple HIG", "POSTGREQSL"],
    liveUrl: "https://sub-tracer.vercel.app/",
    thumbnail: "/projects/subtrace/thumb.svg",
    images: [
      {
        src: "/subtrace.png",
        caption: "Executive financial dashboard with MRR, annual commitments, and renewal alert badges."
      },
      {
        src: "/subtrace2.png",
        caption: "Category spend analytics and portfolio breakdown across infrastructure, AI, and utilities."
      }
    ],
    overview: [
      "SubTrace is a high-performance recurring expense management platform built to give developers, founders, and consumers complete clarity over recurring software, cloud infrastructure, and household commitments.",
      "The platform calculates real-time Monthly Run Rate (MRR), projects annual outlays, and flags impending or overdue renewal dates, preventing silent credit card bill spikes and forgotten subscription creep."
    ],
    features: [
      "Real-time Monthly Run Rate (MRR) and 12-month annual commitment financial forecasting.",
      "Renewal calendar with urgency triggers (Overdue, Due in 7 Days, Active, Paused, Cancelled).",
      "Categorized portfolio analysis tracking spend across SaaS, Cloud Infrastructure, Utilities, and Entertainment.",
      "Dual View system with Apple-style high-density Grid View and sortable Data Table View.",
      "Multi-currency financial normalization with native Philippine Peso (₱) and USD conversions.",
      "Instant search, status filtering, and multi-field sorting by due date, cost, and frequency."
    ],
    highlights: [
      "Local-first privacy architecture: zero financial credentials or bank logins required to maintain absolute user privacy.",
      "Apple Human Interface Guidelines (HIG) aesthetic with fluid light/dark mode transitions and tabbed analytics.",
      "Resilient PWA design with safe-area notch awareness for desktop, tablet, and iOS devices."
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Lucide Icons"]
      },
      {
        category: "Architecture",
        items: ["Local-First Persistence", "Hydration Guarding", "Responsive Safe-Area Layouts"]
      },
      {
        category: "Analytics",
        items: ["Deterministic Cashflow Projector", "Run-Rate Aggregator"]
      },
      {
        category: "Deployment",
        items: ["Vercel", "CI/CD Auto-Deploy"]
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

