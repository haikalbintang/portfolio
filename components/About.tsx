import PulseDivider from "./PulseDivider";

const stops = [
  {
    label: "Diagnosis",
    title: "Medicine (S.Ked), Universitas Indonesia",
    body: "Trained to read systems under pressure — take a history, isolate the signal, act on it. That discipline didn't disappear when the systems became codebases.",
  },
  {
    label: "Treatment plan",
    title: "RevoU Full Stack Software Engineering",
    body: "Rebuilt the fundamentals from the ground up: JavaScript/TypeScript, React, back-end fundamentals, and how to ship, not just how to build.",
  },
  {
    label: "Practice",
    title: "Front-End Engineer, React · Next.js · TypeScript",
    body: "Now building production interfaces and full stack features, pairing Laravel and FastAPI on the back end with React-based front ends.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From bedside to codebase
          </h2>
          <PulseDivider className="hidden w-40 sm:block" />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {stops.map((stop, i) => (
            <div key={stop.title} className="relative rounded-2xl bg-white p-6 shadow-[0_1px_0_0_rgba(18,14,36,0.06)]">
              <span className="font-mono text-xs uppercase tracking-widest text-pulse-violet">
                0{i + 1} · {stop.label}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{stop.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">{stop.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
