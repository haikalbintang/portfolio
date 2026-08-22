import { ExternalLink } from "lucide-react";
import Link from "next/link";

const vitals = [
  {
    channel: "FE",
    label: "Front-End",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "text-pulse-coral",
    bar: "bg-pulse-coral",
  },
  {
    channel: "BE",
    label: "Back-End",
    items: ["GO", "FastAPI", "Laravel", "REST APIs"],
    accent: "text-pulse-violet",
    bar: "bg-pulse-violet",
  },
  {
    channel: "CC",
    label: "Coding-Challenge",
    items: [
      { name: "LeetCode", url: "https://leetcode.com/u/haikalbintang/" },
      {
        name: "Codewars",
        url: "https://www.codewars.com/users/haikalbintang99",
      },
      {
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/haikalbintang",
      },
    ],
    accent: "text-pulse-teal",
    bar: "bg-pulse-teal",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-deep py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pulse-teal">
          Vitals
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Currently monitoring
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {vitals.map((v) => (
            <div
              key={v.channel}
              className="rounded-2xl border border-paper/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-baseline justify-between font-mono">
                <span className={`text-2xl font-semibold ${v.accent}`}>
                  {v.channel}
                </span>
                <span className="text-xs uppercase tracking-widest text-paper/40">
                  {v.label}
                </span>
              </div>
              <div
                className={`mt-4 h-1 w-full rounded-full ${v.bar} opacity-70`}
              />
              <ul className="mt-5 space-y-2 font-body text-sm text-paper/70">
                {v.items.map((item) => {
                  const isLink = typeof item !== "string";
                  const label = isLink ? item.name : item;
                  return (
                    <li key={label} className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${v.bar}`} />
                      {isLink ? (
                        <Link
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 hover:text-paper transition-colors"
                        >
                          {label}
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </Link>
                      ) : (
                        label
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
