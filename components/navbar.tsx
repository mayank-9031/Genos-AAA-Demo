"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

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

  // Hide the bar once the hero has scrolled out of the navbar's zone.
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
          <span className="hidden sm:inline font-serif text-[17px] md:text-[19px] tracking-tight leading-none text-ink">
            Agile Ageing Alliance
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" onMouseLeave={scheduleClose}>
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
                  className="flex items-center gap-1.5 text-ink/80 hover:text-ink text-[15px] py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]"
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
                    className={["transition-transform duration-200", isOpen ? "rotate-180" : "rotate-0"].join(" ")}
                  >
                    <path d="M2 3.5 L5 6.5 L8 3.5" />
                  </svg>
                </button>

                <div
                  role="menu"
                  className={[
                    "absolute left-0 top-full mt-2 min-w-[220px] bg-white text-ink rounded-[3px] shadow-[0_8px_24px_rgba(11,37,69,0.12)] border border-ink/5 transition-[opacity,transform] duration-150",
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
                          className="block px-4 py-2.5 text-[14px] hover:bg-stone hover:text-amber transition-colors"
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

          <Button href={GET_INVOLVED_HREF} external variant="ink" size="pill">
            <span>Get involved</span>
            <span aria-hidden="true">→</span>
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
        id="full-menu"
        className={[
          "lg:hidden overflow-hidden bg-stone border-t border-ink/10 transition-[max-height] duration-300 ease-out",
          mobileOpen ? "max-h-[800px]" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-6 md:px-12 py-4 flex flex-col">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="py-3 border-b border-ink/10 last:border-b-0">
              <p className="text-sage text-[11px] uppercase tracking-[0.18em]">{group.label}</p>
              <ul className="mt-2 flex flex-col">
                {group.items.map((sub) => (
                  <li key={sub.label}>
                    <a
                      href={sub.href}
                      target={sub.external ? "_blank" : undefined}
                      rel={sub.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-ink/80 hover:text-ink text-[15px]"
                    >
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4 pb-3">
            <Button
              href={GET_INVOLVED_HREF}
              external
              variant="ink"
              onClick={() => setMobileOpen(false)}
            >
              <span>Get involved</span>
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
