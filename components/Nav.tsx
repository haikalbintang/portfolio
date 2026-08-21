const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-deep/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-paper">
          your<span className="text-pulse-coral">.</span>name
        </a>
        <ul className="hidden gap-8 font-mono text-sm text-paper/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-pulse-teal">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-pulse-gradient px-4 py-2 font-display text-sm font-semibold text-deep transition-transform hover:scale-105"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
