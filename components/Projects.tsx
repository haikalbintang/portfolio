import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import PulseDivider from "./PulseDivider";

export default function Projects() {
  return (
    <section id="work" className="bg-paper2 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-pulse-violet">Case files</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Selected work
            </h2>
          </div>
          <PulseDivider className="hidden w-40 sm:block" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
