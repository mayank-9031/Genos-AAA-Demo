"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GET_INVOLVED_URL } from "@/lib/links";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "ISO 25553", href: "/iso-25553" },
  { label: "Research", href: "/research" },
  { label: "Events", href: "/events" },
  { label: "Videos", href: "/videos" },
  { label: "Partners", href: "/partners" },
  { label: "Team", href: "/team" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Adapt over a dark hero banner: a page can mark its opening section with
  // data-dark-hero. While that banner still sits behind the bar, the navbar is
  // transparent with light text; once scrolled past it, it turns solid.
  useEffect(() => {
    const banner = document.querySelector<HTMLElement>("[data-dark-hero]");
    if (!banner) {
      setOverDark(false);
      return;
    }
    const NAV_HEIGHT_PX = 80;
    const compute = () => {
      setOverDark(banner.getBoundingClientRect().bottom > NAV_HEIGHT_PX);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [pathname]);

  // The open mobile sheet is light, so force the solid treatment then.
  const dark = overDark && !mobileOpen;

  // Hide the bar once the hero has scrolled out of the navbar's zone.
  // Re-run on every route change: the Navbar stays mounted across client-side
  // navigation (it lives in the root layout), so a stale hero reference or a
  // page with no hero at all must not leave it stuck hidden.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      setHidden(false);
      return;
    }
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
  }, [pathname]);

  return (
    <header
      aria-hidden={hidden}
      className={[
        "fixed top-0 left-0 right-0 z-40 transition-[transform,opacity,background-color,border-color] duration-300 ease-out",
        dark
          ? "bg-transparent border-b border-transparent"
          : "bg-stone/95 backdrop-blur-sm border-b border-ink/10",
        hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      <div className="h-16 md:h-20 px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between">
        <Link
          href="/"
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
          <span
            className={[
              "hidden sm:inline font-serif text-[16px] md:text-[18px] tracking-tight leading-none transition-colors duration-300",
              dark ? "text-white" : "text-ink",
            ].join(" ")}
          >
            Agile Ageing Alliance
          </span>
        </Link>

        {/* Desktop nav — flat links + one CTA */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {NAV_LINKS.map((link) => {
            const linkClasses = dark
              ? "text-white/85 hover:text-white text-[14px] xl:text-[14.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[2px]"
              : "text-ink/75 hover:text-ink text-[14px] xl:text-[14.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone rounded-[2px]";
            return link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={linkClasses}>
                {link.label}
              </Link>
            );
          })}
          <Button
            href={GET_INVOLVED_URL}
            external
            variant={dark ? "cream" : "ink"}
            size="pill"
          >
            Get involved
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={[
            "lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-[4px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2",
            dark ? "text-white focus-visible:ring-white" : "text-ink focus-visible:ring-ink",
          ].join(" ")}
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
          {NAV_LINKS.map((link) => {
            const mobileClasses =
              "py-3 border-b border-ink/10 text-ink/80 hover:text-ink text-[15px]";
            return link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className={mobileClasses}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={mobileClasses}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 pb-2">
            <Button href={GET_INVOLVED_URL} external variant="ink" onClick={() => setMobileOpen(false)}>
              Get involved
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
