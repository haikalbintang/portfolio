export type Project = {
  id: string;
  vital: string; // short monogram/readout label, like a monitor channel
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
    id: "amimum",
    vital: "RX",
    name: "Toko Herbal AmImUm",
    period: "Nov 2024 – Mar 2025",
    role: "Team Lead & Front-End Engineer",
    summary:
      "A group e-commerce marketplace for buying and selling herbal medicine, built with a 5-person team. Led the front end while owning checkout, authentication, and the product catalog.",
    highlights: [
      "Led a team of 5 (3 front-end, 2 back-end) from planning to ship",
      "Built cart, wishlist, and product filtering end to end",
      "Cut redundant API calls on product selection, improving catalog responsiveness",
    ],
    stack: ["Next.js", "Tailwind CSS", "FastAPI"],
    accent: "coral",
  },
  {
    id: "math-roadmap",
    vital: "DX",
    name: "Math Learning Roadmap",
    period: "Ongoing",
    role: "Solo Developer",
    summary:
      "An educational app that maps out a math learning path from kindergarten through high school, starting with an interactive K–2 Number Sense strand.",
    highlights: [
      "Designed a roadmap UI with expandable topic cards and category filters",
      "Built interactive practice questions for counting, place value, and comparison",
      "Typed component architecture built for years of curriculum growth",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "violet",
  },
  {
    id: "pomodoro",
    vital: "HR",
    name: "Pomodoro Timer PWA",
    period: "Ongoing",
    role: "Solo Developer",
    summary:
      "An installable Pomodoro timer with independent per-mode countdowns, so switching between Focus, Short Break, and Long Break never resets your progress.",
    highlights: [
      "Independent persisted timers per mode via localStorage",
      "Sound, vibration, and Notification API alerts on completion",
      "Auto-continue and sound settings wired directly into timer logic",
    ],
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS v4"],
    accent: "teal",
  },
];
