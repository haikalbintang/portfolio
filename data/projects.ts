export type Project = {
  id: string;
  vital: string;
  name: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  accent: "coral" | "violet" | "teal";
  link?: string;
};

export const projects: Project[] = [
  {
    id: "haikal-bintang",
    vital: "HB",
    name: "haikal.bintang",
    period: "Ongoing",
    role: "Solo Developer",
    summary:
      "Personal portfolio site — the one you're looking at now. Designed around a single idea: a heartbeat line that resolves into a code bracket, tying a medicine background to a software present.",
    highlights: [
      "Custom EKG-to-code signature motif, hand-built as an animated SVG",
      "Scroll-snap section navigation with two-way enter/exit reveal animations",
      "Skills section styled as a monitor 'vitals' readout instead of a plain list",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "violet",
    link: "https://tinyurl.com/haikal-bintang-dev",
  },
  {
    id: "go-project",
    vital: "GX",
    name: "GO Project",
    period: "Ongoing",
    role: "Solo Developer",
    summary: "PLACEHOLDER — need description from you.",
    highlights: ["PLACEHOLDER — need highlights from you"],
    stack: ["Go", "React", "TypeScript", "Tailwind CSS"],
    accent: "coral",
  },
  {
    id: "studymate-ai",
    vital: "AI",
    name: "StudyMate AI",
    period: "Ongoing",
    role: "Solo Developer",
    summary:
      "A Pomodoro timer, study-tracker, and AI-powered insight PWA that works fully offline.",
    highlights: [
      "Four core views built on centralized state management for a clean, maintainable codebase",
      "Fully offline with IndexedDB local storage — session history and analytics stay in sync at zero backend hosting cost",
      "Custom analytics engine tracking study streaks, completion rates, and peak focus hours",
      "Installable, responsive PWA with smooth touch interactions on desktop and mobile",
    ],
    stack: ["React", "TypeScript", "IndexedDB", "PWA"],
    accent: "teal",
    link: "https://tinyurl.com/study-mate",
  },
];
