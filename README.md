# Personal Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design concept

The signature visual is a single line that opens as an EKG heartbeat trace and
resolves into a `</>` code bracket — a nod to a medicine background (S.Ked,
Universitas Indonesia) that pivoted into full stack engineering. It reappears
as a hero centerpiece and a small section divider throughout the page.

Palette: deep indigo (`#120E24`) hero/dark sections, soft lavender-white
(`#FAF8FF`) content sections, and a three-stop accent gradient — coral
(`#FF4D6D`) → violet (`#7C5CFF`) → teal (`#2DD4BF`) — plus amber (`#FFD166`)
as a playful highlight.

Type: Space Grotesk (display), Inter (body), JetBrains Mono (labels, stats,
and the "vitals" readout in the Skills section).

## What to personalize before deploying

- `app/layout.tsx` — replace the placeholder name in `metadata`
- `components/Nav.tsx` — replace `your.name`
- `components/Contact.tsx` — replace email, GitHub, and LinkedIn links
- `data/projects.ts` — add project links once repos/live URLs are public
- Swap in a real headshot or illustration if you want one in the hero

## Deploying

The fastest path is [Vercel](https://vercel.com): push this to a GitHub repo,
import it in Vercel, and it deploys on every push with zero config.
