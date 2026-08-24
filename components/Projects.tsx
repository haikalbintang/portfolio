"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import PulseDivider from "./PulseDivider";

const INITIAL_COUNT = 3;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="bg-paper2 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-pulse-violet">
              Case files
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Selected work
            </h2>
          </div>
          <PulseDivider className="hidden w-40 sm:block" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border border-ink/15 px-6 py-3 font-display text-sm font-semibold text-ink transition-colors hover:border-pulse-violet hover:text-pulse-violet"
            >
              {showAll
                ? "Show less"
                : `Show ${projects.length - INITIAL_COUNT} more projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
