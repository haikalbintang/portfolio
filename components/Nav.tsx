"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const targetIds = ["#top", ...links.map((link) => link.href)];
    const sections = targetIds.map((id) => document.querySelector(id));

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    function observerCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = `#${entry.target.id}`;

          if (currentId === "#top") {
            setActiveHash("");
          } else {
            setActiveHash(currentId);
          }
        }
      });
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // useEffect(() => {
  //   setActiveHash(window.location.hash);

  //   function handleHashChange() {
  //     setActiveHash(window.location.hash);
  //   }

  //   window.addEventListener("hashchange", handleHashChange);
  //   return () => window.removeEventListener("hashchange", handleHashChange);
  // }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-deep/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-paper"
          onClick={() => setActiveHash("")}
        >
          haikal<span className="text-pulse-coral">.</span>bintang
        </Link>
        <ul className="hidden gap-8 font-mono text-sm text-paper/70 sm:flex">
          {links.map((link) => {
            const isActive = activeHash === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`transition-colors hover:text-pulse-teal ${isActive ? "text-pulse-teal" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="#contact"
          onClick={() => setActiveHash("#contact")}
          className="rounded-full bg-pulse-gradient px-4 py-2 font-display text-sm font-semibold text-deep transition-transform hover:scale-105"
        >
          Hire me
        </Link>
      </nav>
    </header>
  );
}
