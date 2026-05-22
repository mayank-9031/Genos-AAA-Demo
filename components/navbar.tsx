"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SubItem = {
  label: string;
  href: string;
  external?: boolean;
};

type NavGroup = {
  label: string;
  items: SubItem[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: "About",
    items: [
      { label: "About the alliance", href: "https://agileageing.org/page/about/", external: true },
      { label: "ISO 25553", href: "https://agileageing.org/standards/", external: true },
    ],
  },
  {
    label: "Watch",
    items: [
      { label: "Watch the film", href: "#watch" },
      { label: "Demonstrators", href: "#demonstrator" },
    ],
  },
  {
    label: "Research",
    items: [
      { label: "Research", href: "https://agileageing.org/research/", external: true },
      { label: "Events", href: "https://agileageing.org/events/", external: true },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Contact us", href: "https://agileageing.org/page/contact/", external: true },
      { label: "Get involved", href: "https://agileageing.org/iso-discussion-contact-form/", external: true },
    ],
  },
];

const GET_INVOLVED_HREF = "https://agileageing.org/iso-discussion-contact-form/";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => cancelClose(), []);

  // Hide navbar once the hero section has scrolled out of the navbar's zone.
  // The hero <section> has id="top"; we treat the bar as "in hero" while the
  // hero's bottom edge is still below the navbar height (~80px).
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const NAV_HEIGHT_PX = 80;
    const compute = () => {
      const rect = hero.getBoundingClientRect();
      const pastHero = rect.bottom <= NAV_HEIGHT_PX;
      setHidden(pastHero);
      if (pastHero) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
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
        "fixed top-0 left-0 right-0 z-40 transition-[transform,opacity] duration-300 ease-out",
        hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      {/* Two-column band that mirrors the hero split: terracotta left, transparent right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — terracotta panel: logo, nav items, hamburger */}
        <div className="bg-terracotta">
          <div className="h-16 md:h-20 pl-6 md:pl-12 lg:pl-14 xl:pl-20 pr-6 md:pr-8 flex items-center justify-between">
            <a
              href="#top"
              aria-label="Agile Ageing Alliance — home"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[2px]"
            >
              <Image
                src="/aaa-mark.png"
                alt=""
                width={36}
                height={36}
                priority
                className="h-7 w-7 md:h-8 md:w-8 select-none"
              />
              <span className="hidden sm:inline font-serif text-[17px] md:text-[19px] tracking-tight leading-none text-white">
                Agile Ageing Alliance
              </span>
            </a>

            {/* Desktop nav items with dropdowns */}
            <nav
              className="hidden lg:flex items-center gap-7"
              onMouseLeave={scheduleClose}
            >
              {NAV_GROUPS.map((group) => {
                const isOpen = openMenu === group.label;
                return (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenMenu(group.label);
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMenu(isOpen ? null : group.label)}
                      onFocus={() => {
                        cancelClose();
                        setOpenMenu(group.label);
                      }}
                      className="flex items-center gap-1.5 text-white text-[15px] py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[2px]"
                    >
                      <span>{group.label}</span>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        aria-hidden="true"
                        className={[
                          "transition-transform duration-200",
                          isOpen ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                      >
                        <path d="M2 3.5 L5 6.5 L8 3.5" />
                      </svg>
                    </button>

                    {/* Dropdown panel */}
                    <div
                      role="menu"
                      className={[
                        "absolute left-0 top-full mt-2 min-w-[220px] bg-white text-ink rounded-[3px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] border border-ink/5 transition-[opacity,transform] duration-150",
                        isOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none",
                      ].join(" ")}
                    >
                      <ul className="py-2">
                        {group.items.map((sub) => (
                          <li key={sub.label}>
                            <a
                              role="menuitem"
                              href={sub.href}
                              target={sub.external ? "_blank" : undefined}
                              rel={sub.external ? "noopener noreferrer" : undefined}
                              className="block px-4 py-2.5 text-[14px] hover:bg-stone hover:text-terracotta transition-colors"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}

              {/* Decorative hamburger — matches reference image; opens full menu sheet */}
              <button
                type="button"
                aria-label="Open full menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex items-center justify-center w-10 h-10 text-white rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
                  <line x1="3" y1="7" x2="19" y2="7" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="15" x2="19" y2="15" />
                </svg>
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-white rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
        </div>

        {/* RIGHT — transparent over hero video; CTA pill on the right */}
        <div className="hidden lg:flex items-center justify-end h-20 pr-6 md:pr-12 lg:pr-14 xl:pr-20">
          <a
            href={GET_INVOLVED_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cream text-ink rounded-[3px] pl-5 pr-4 py-2.5 text-[14px] font-medium hover:bg-white transition-colors duration-200"
          >
            <span>Get involved</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Full menu sheet (mobile + desktop hamburger) — constrained to left half on lg+ so it never covers the video */}
      <div
        id="full-menu"
        className={[
          "overflow-hidden bg-terracotta border-t border-white/15 transition-[max-height] duration-300 ease-out",
          "w-full lg:w-1/2",
          mobileOpen ? "max-h-[800px]" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-6 md:px-12 lg:pl-14 xl:pl-20 lg:pr-8 py-4 flex flex-col">
          {NAV_GROUPS.map((group) => (
            <div
              key={group.label}
              className="py-3 border-b border-white/15 last:border-b-0"
            >
              <p className="text-white text-[11px] uppercase tracking-[0.18em]">
                {group.label}
              </p>
              <ul className="mt-2 flex flex-col">
                {group.items.map((sub) => (
                  <li key={sub.label}>
                    <a
                      href={sub.href}
                      target={sub.external ? "_blank" : undefined}
                      rel={sub.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-white/90 hover:text-white text-[15px]"
                    >
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4 pb-3">
            <a
              href={GET_INVOLVED_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-3 bg-cream text-ink rounded-[3px] pl-5 pr-4 py-3 text-[14px] font-medium hover:bg-white transition-colors duration-200"
            >
              <span>Get involved</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
