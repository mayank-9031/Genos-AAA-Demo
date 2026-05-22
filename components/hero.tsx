"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reducedMotion) return;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, [reducedMotion]);

  return (
    <section
      id="top"
      className="relative w-full bg-terracotta overflow-hidden lg:h-screen"
      style={{ height: "100svh" }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-full h-full">
        {/* LEFT — terracotta content */}
        <div className="relative flex flex-col text-white lg:h-full">
          {/* Top spacer matching navbar height */}
          <div className="h-16 md:h-20 shrink-0" aria-hidden="true" />

          <div className="px-6 md:px-14 lg:px-16 xl:px-24 pt-8 md:pt-14 pb-10 flex-1 flex flex-col min-h-0 justify-center">
            <Reveal delay={150} y={12}>
              <p className="text-cream/90 text-[10.5px] md:text-[11px] tracking-[0.2em] uppercase">
                ISO 25553 · Published 2026 · 20 national standards bodies
              </p>
            </Reveal>

            <Reveal delay={250} y={20}>
              <h1
                className="font-serif font-medium text-white leading-[1.05] tracking-[-0.015em] mt-8"
                style={{ fontSize: "clamp(30px, 3.4vw, 52px)" }}
              >
                The world just agreed
                <br />
                on what a good place
                <br />
                to grow old looks like.
              </h1>
            </Reveal>

            <Reveal delay={400} y={8}>
              <div className="mt-7 h-[2px] w-12 bg-cream/80" aria-hidden="true" />
            </Reveal>

            <Reveal delay={500} y={12}>
              <p className="mt-7 max-w-[520px] font-serif italic text-white/90 text-[15px] md:text-[17px] leading-[1.45]">
                Now we&apos;re putting it into the ground — with the cities, councils
                and residents already building the alternative.
              </p>
            </Reveal>

            <Reveal delay={650} y={12}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="https://agileageing.org/standards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between gap-5 bg-cream text-ink rounded-[3px] pl-5 pr-4 py-3 text-[14px] font-medium hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-[1px] transition-all duration-200 min-w-[210px]"
                >
                  <span>Read ISO 25553</span>
                  <span
                    aria-hidden="true"
                    className="text-[16px] transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                <a
                  href="#demonstrator"
                  className="group text-white underline underline-offset-[5px] decoration-1 hover:decoration-2 text-[14px] font-medium inline-flex items-center gap-1.5"
                >
                  <span>Or work with us on a demonstrator</span>
                  <span aria-hidden="true" className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Marquee — bottom of left column */}
          <div className="border-t border-white/15 overflow-hidden">
            <div className="marquee-track flex w-max whitespace-nowrap py-3 md:py-3.5">
              {Array.from({ length: 2 }).map((_, dup) => (
                <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                  {[
                    "Convening organisation for ISO 25553.",
                    "Endorsed by 20 national standards bodies.",
                    "In partnership with UN-Habitat & Connected Places Catapult.",
                    "2,000+ experts across health, housing, planning, technology, policy.",
                    "Framework moving from paper into place.",
                  ].map((item, i) => (
                    <span
                      key={`${dup}-${i}`}
                      className="flex items-center text-white/85 text-[12.5px] md:text-[13px]"
                    >
                      <span className="px-6 md:px-8">{item}</span>
                      <span aria-hidden="true" className="text-white/35">•</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — full-bleed video (desktop only; hidden on mobile) */}
        <div className="hidden lg:block relative overflow-hidden bg-ink lg:h-full">
          {!reducedMotion && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/hero-care.mp4" type="video/mp4" />
            </video>
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(181,87,43,0.08) 0%, rgba(0,0,0,0) 25%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
