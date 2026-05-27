"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "https://agileageing.org/page/about/", external: true },
  { label: "ISO 25553", href: "https://agileageing.org/standards/", external: true },
  { label: "NOHA", href: "https://agileageing.org/nof/", external: true },
  { label: "Demonstrators", href: "#demonstrator" },
  { label: "Research", href: "https://agileageing.org/research/", external: true },
];

const CONTACT_HREF = "https://agileageing.org/page/contact/";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hide the bar once the hero has scrolled out of the navbar's zone.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const NAV_HEIGHT_PX = 80;
    const compute = () => {
      const pastHero = hero.getBoundingClientRect().bottom <= NAV_HEIGHT_PX;
      setHidden(pastHero);
      if (pastHero) setMobileOpen(false);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <header
      aria-hidden={hidden}
      className={[
        "fixed top-0 left-0 right-0 z-40 bg-stone/95 backdrop-blur-sm border-b border-ink/10 transition-[transform,opacity] duration-300 ease-out",
        hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      <div className="h-16 md:h-20 px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between">
        <a
          href="#top"
          aria-label="Agile Ageing Alliance — home"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
        >
          <Image
            src="/aaa-mark.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-7 w-7 md:h-8 md:w-8 select-none"
          />
          <span className="hidden sm:inline font-serif text-[16px] md:text-[18px] tracking-tight leading-none text-ink">
            Agile Ageing Alliance
          </span>
        </a>

        {/* Desktop nav — flat links + one CTA */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-ink/75 hover:text-ink text-[14.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
            >
              {link.label}
            </a>
          ))}
          <Button href={CONTACT_HREF} external variant="ink" size="pill">
            Contact
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-ink rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="15" x2="19" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu sheet */}
      <div
        className={[
          "lg:hidden overflow-hidden bg-stone border-t border-ink/10 transition-[max-height] duration-300 ease-out",
          mobileOpen ? "max-h-[480px]" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-6 md:px-12 py-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-ink/10 text-ink/80 hover:text-ink text-[15px]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pb-2">
            <Button href={CONTACT_HREF} external variant="ink" onClick={() => setMobileOpen(false)}>
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
