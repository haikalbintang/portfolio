import PulseDivider from "./PulseDivider";
import HeroSignature from "./HeroSignature";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient pb-24 pt-32 text-paper"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-pulse-violet/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-pulse-teal/20 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pulse-teal">
          Full Stack Engineer · Jakarta, Indonesia
        </p>

        <h1 className="col-span-2 mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          I traded a stethoscope
        </h1>
        <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              for a<span className="text-gradient"> terminal.</span>
            </h1>

            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-paper/70">
              Trained in medicine at Universitas Indonesia, now building full
              stack products with React, Next.js, TypeScript, Laravel, and
              FastAPI. I bring a clinician&apos;s eye for detail to interfaces
              and systems — currently open for freelance and full-time work.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-pulse-gradient px-6 py-3 font-display text-sm font-semibold text-deep transition-transform hover:scale-105"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-paper/20 px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:border-pulse-teal hover:text-pulse-teal"
              >
                Start a project
              </a>
            </div>
          </div>
          <div className="mt-10">
            <HeroSignature className="mt-12 aspect-[9/5] w-full lg:mt-0" />
          </div>{" "}
        </div>

        {/* signature pulse line: heartbeat resolving into a code bracket */}
        <div className="mt-16 w-full max-w-3xl animate-floaty mx-auto">
          <PulseDivider variant="hero" className="w-full" />
          <div className="mt-1 flex justify-between font-mono text-[11px] uppercase tracking-widest text-paper/40">
            <span>S.Ked — Universitas Indonesia</span>
            <span className="text-pulse-teal">{"</> Full Stack Engineer"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
