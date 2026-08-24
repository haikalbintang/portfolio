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
    vital: "AX",
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
    accent: "coral",
    link: "https://tinyurl.com/haikal-bintang-dev",
  },
  {
    id: "math-roadmap",
    vital: "BX",
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
    stack: ["GO", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "violet",
  },
  {
    id: "studymate-ai",
    vital: "CX",
    name: "StudyMate AI",
    period: "Aug 2026",
    role: "Solo Developer",
    summary:
      "A Pomodoro timer and study-tracker PWA with an offline-first architecture and a client-side analytics engine.",
    highlights: [
      "Built with React + TypeScript across four core views, using Context API and custom hooks to eliminate prop drilling",
      "Offline-first persistence via IndexedDB (Dexie.js) with reactive live-queries — zero backend infrastructure",
      "Custom analytics engine: streaks, completion rate, best-focus-hour insight, GitHub-style contribution heatmap over 12-week rolling data",
      "Installable PWA with pinch-to-zoom timeline and dynamic viewport-aware layouts",
    ],
    stack: ["Vite", "React", "TypeScript", "IndexedDB", "Dexie.js", "PWA"],
    accent: "teal",
    link: "https://tinyurl.com/study-mate",
  },
  {
    id: "champion",
    vital: "09",
    name: "Champion",
    period: "Feb 2026",
    role: "Solo Developer",
    summary:
      "An anonymous scoring application with authentication and admin roles.",
    highlights: [
      "Built the core scoring workflow backend with FastAPI and SQLModel",
      "Implemented user authentication and an admin role for privileged access",
      "Designed the ERD defining the app's data entities and relationships",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "SQLModel",
      "Pydantic",
      "PyJWT",
    ],
    accent: "violet",
  },
  {
    id: "quranesia",
    vital: "08",
    name: "Quranesia",
    period: "Mar 2025",
    role: "Solo Developer",
    summary:
      "A web-based Quran app that dynamically retrieves and displays Quranic content.",
    highlights: [
      "Integrated a free Quran API with REST calls to fetch and render content",
      "Built reusable frontend components for presenting Quranic content",
      "Managed asynchronous data fetching for dynamically loaded content",
    ],
    stack: ["JavaScript", "REST API"],
    accent: "teal",
  },
  {
    id: "laravel-store",
    vital: "07",
    name: "Laravel Store",
    period: "Feb 2025",
    role: "Solo Developer",
    summary:
      "A full-stack Laravel marketplace for buying and selling second-hand goods, built for the Pondok Terong, Depok community.",
    highlights: [
      "Built with Laravel 11 and Blade for a dynamic, reusable frontend",
      "Integrated Laravel Breeze for lightweight authentication",
      "Configured MySQL/MariaDB with Adminer in Docker for database management",
    ],
    stack: ["Laravel", "PHP", "Blade", "Breeze", "MySQL"],
    accent: "coral",
  },
  {
    id: "amimum",
    vital: "06",
    name: "Toko Herbal AmImUm",
    period: "Jan 2025",
    role: "Team Lead & Front-End Engineer",
    summary:
      "A mobile-first e-commerce platform for herbal medicine, led with a 3-person front-end team.",
    highlights: [
      "Owned authentication, product catalog, and checkout flow",
      "Cut redundant API calls on product selection by 40%",
      "Built cart, wishlist, and product filtering features",
    ],
    stack: ["Next.js", "Tailwind CSS", "Axios", "FastAPI"],
    accent: "teal",
  },
  {
    id: "nutech-sims-ppob",
    vital: "05",
    name: "Nutech SIMS PPOB",
    period: "Nov 2024",
    role: "Solo Developer",
    summary: "A 3-day take-home test implementing a full web app to spec.",
    highlights: [
      "Implemented user authentication for managed access",
      "Integrated external REST APIs for dynamic data",
      "Built a React Router SPA with client-side navigation",
    ],
    stack: ["React", "React Router", "REST API"],
    accent: "coral",
  },
  {
    id: "todo-app",
    vital: "04",
    name: "To-do App",
    period: "Oct 2024",
    role: "Solo Developer",
    summary: "A task management app with a five-board workflow.",
    highlights: [
      "Click-and-move task functionality across workflow stages",
      "Task descriptions for added context",
      "Supabase backend with user authentication",
    ],
    stack: ["React", "Tailwind CSS", "Supabase"],
    accent: "violet",
  },
  {
    id: "yakuse",
    vital: "03",
    name: "Yakuse",
    period: "Sep 2024",
    role: "Back-End Engineer",
    summary:
      "An SME platform focused on defining a lean MVP and a fast backend.",
    highlights: [
      "Designed user stories and flow diagrams in Whimsical",
      "Defined the MVP to streamline development",
      "Optimized FastAPI + SQLAlchemy queries, cutting execution time by over 50%",
    ],
    stack: ["Docker", "MySQL", "Python", "FastAPI", "SQLAlchemy"],
    accent: "coral",
  },
  {
    id: "masakin",
    vital: "02",
    name: "Masakin",
    period: "Jul 2024",
    role: "Team Lead & Front-End Engineer",
    summary: "A receipt-sharing platform built by a 5-person team.",
    highlights: [
      "Led 5 developers (3 FE, 2 BE), hitting 100% on-time milestone delivery",
      "Translated PRDs into implementable front-end tasks",
      "Built a responsive recipe detail page with ratings, cook time, and tutorial videos",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Axios"],
    accent: "violet",
  },
  {
    id: "healthub",
    vital: "01",
    name: "Healthub",
    period: "Jun 2024",
    role: "Front-End Lead",
    summary:
      "A healthy-recipe sharing social platform that displays the nutritional value of each recipe.",
    highlights: [
      "Built recipe forms, nutrition scoring, profiles, and Explore functionality",
      "Added likes and comments for social interaction",
      "Designed a responsive, mobile-first UI with animated cards",
      "Added login/register modal, recipe feed page, dedicated recipe page, and dedicated profile page",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Formik",
      "React-Hook-Form",
      "Yup",
      "Zod",
      "SweetAlert2",
      "REST API",
    ],
    accent: "teal",
  },
];
