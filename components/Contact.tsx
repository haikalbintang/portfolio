import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-hero-gradient py-28 text-paper"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-pulse-violet/20 blur-[110px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pulse-teal">
          Open for work
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Have a project in mind? Let&apos;s build it.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-paper/70">
          Available for freelance engagements and full stack roles. I usually
          reply within a day.
        </p>

        <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-paper/15 px-4 py-1.5 font-mono text-xs text-paper/60">
          <span className="flex h-3 w-4 flex-col overflow-hidden rounded-[2px]">
            <span className="h-1/2 w-full bg-pulse-coral" />
            <span className="h-1/2 w-full bg-paper" />
          </span>
          Jakarta, Indonesia · UTC+7
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="mailto:mhaikalbintang.work@gmail.com"
            className="rounded-full bg-pulse-gradient px-6 py-3 font-display text-sm font-semibold text-deep transition-transform hover:scale-105"
          >
            mhaikalbintang.work@gmail.com
          </Link>
          <Link
            href="https://github.com/haikalbintang"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/20 px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:border-pulse-teal hover:text-pulse-teal"
          >
            GitHub
          </Link>
          <Link
            href="https://www.instagram.com/haikalbintang"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/20 px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:border-pulse-teal hover:text-pulse-teal"
          >
            Instagram
          </Link>
          <Link
            href="https://linkedin.com/in/muhammad-haikal-bintang"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/20 px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:border-pulse-teal hover:text-pulse-teal"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
