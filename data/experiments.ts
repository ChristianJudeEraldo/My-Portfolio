export interface ExperimentScene {
  index: string;
  label: string;
  timestamp: string;
  description: string;
}

export interface ExperimentSpecs {
  resolution: string;
  fps: number;
  duration: string;
  width: number;
  height: number;
  bpm: number;
}

export interface Experiment {
  id: string;
  indexLabel: string;
  title: string;
  summary: string;
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
  captionsSrc: string;
  specs: ExperimentSpecs;
  stack: string[];
  scenes: ExperimentScene[];
}

export const experiments: Experiment[] = [
  {
    id: "jude-reel-2026",
    indexLabel: "EXP 01",
    title: "Engineering Reel '26",
    summary:
      "Programmatic 60 FPS engineering reel generated through an agentic workflow—orchestrated with Orchestrator (Neon) and rendered frame-by-frame in TypeScript, React, and Remotion.",
    videoSrc: "/videos/jude-reel-2026.mp4",
    posterSrc: "/videos/jude-reel-2026-poster.webp",
    posterAlt:
      "Engineering Reel '26 signature frame displaying JUDE — Christian Jude Eraldo, judeeraldo.tech",
    captionsSrc: "/videos/jude-reel-2026.vtt",
    specs: {
      resolution: "1080p",
      fps: 60,
      duration: "0:20",
      width: 1920,
      height: 1080,
      bpm: 120,
    },
    stack: ["Orchestrator (Neon)", "TypeScript", "React", "Remotion"],
    scenes: [
      {
        index: "01/07",
        label: "Genesis",
        timestamp: "0:00",
        description: "System initialization and 120 BPM beat-synced timing lock at 60 FPS.",
      },
      {
        index: "02/07",
        label: "Identity",
        timestamp: "0:03",
        description: "Architectural grid, exponential easing curve plot, and engineering profile.",
      },
      {
        index: "03/07",
        label: "Edge Vision",
        timestamp: "0:06",
        description: "Real-time inference telemetry matrix on Raspberry Pi 5 + Hailo-8 with YOLOv11n.",
      },
      {
        index: "04/07",
        label: "Systems",
        timestamp: "0:09",
        description: "Python & SQL relational schema, packet stream telemetry, and 99.984% availability.",
      },
      {
        index: "05/07",
        label: "Stack Flow",
        timestamp: "0:12",
        description: "2,000-particle curl field resolving into Next.js, TypeScript, Tailwind, Convex, and Supabase.",
      },
      {
        index: "06/07",
        label: "Agents",
        timestamp: "0:15",
        description: "1,748-vertex topological sphere morphing into a torus across Gen, MCP, Voice, and Multi-Agent.",
      },
      {
        index: "07/07",
        label: "Signature",
        timestamp: "0:18",
        description: "Concentric radar mark and judeeraldo.tech engineering sign-off.",
      },
    ],
  },
];
