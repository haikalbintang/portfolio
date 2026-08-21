"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "work", label: "Work" },
  { href: "contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-deep/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <ScrollLink
          to="top"
          smooth={true}
          duration={300}
          className="cursor-pointer font-display text-lg font-semibold tracking-tight text-paper"
        >
          haikal<span className="text-pulse-coral">.</span>bintang
        </ScrollLink>
        <ul className="hidden gap-8 font-mono text-sm text-paper/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <ScrollLink
                to={link.href}
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
                activeClass="text-pulse-teal"
                className={`cursor-pointer transition-colors hover:text-pulse-teal `}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={300}
          className="cursor-pointer rounded-full bg-pulse-gradient px-4 py-2 font-display text-sm font-semibold text-deep transition-transform hover:scale-105"
        >
          Hire me
        </ScrollLink>
      </nav>
    </header>
  );
}
