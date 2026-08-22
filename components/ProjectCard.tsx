import type { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const accentMap = {
  coral: {
    text: "text-pulse-coral",
    bg: "bg-pulse-coral",
    bgSoft: "bg-pulse-coral/10",
    border: "hover:border-pulse-coral/50",
  },
  violet: {
    text: "text-pulse-violet",
    bg: "bg-pulse-violet",
    bgSoft: "bg-pulse-violet/10",
    border: "hover:border-pulse-violet/50",
  },
  teal: {
    text: "text-pulse-teal",
    bg: "bg-pulse-teal",
    bgSoft: "bg-pulse-teal/10",
    border: "hover:border-pulse-teal/50",
  },
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const accent = accentMap[project.accent];

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 transition-colors ${accent.border}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full ${accent.bgSoft} px-3 py-1 font-mono text-sm font-semibold ${accent.text}`}
        >
          {project.name}
        </span>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/40">
          {project.role}
        </p>
        {/* <span className="font-mono text-xs text-ink/40">{project.period}</span> */}
      </div>

      <p className="mt-4 font-body text-sm leading-relaxed text-ink/65">
        {project.summary}
      </p>

      <ul className="mt-5 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 font-body text-sm text-ink/70">
            <span className={accent.text}>+</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-ink/10 px-3 py-1 font-mono text-[11px] text-ink/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 flex items-center gap-1.5 font-display text-sm font-semibold ${accent.text} transition-transform group-hover:translate-x-0.5`}
        >
          View live
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      )}
    </article>
  );
}
