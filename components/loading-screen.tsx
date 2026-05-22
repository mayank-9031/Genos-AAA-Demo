"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"in" | "fading" | "gone">("in");

  useEffect(() => {
    let fadeTimer: number | undefined;
    let removeTimer: number | undefined;

    const startFade = () => {
      fadeTimer = window.setTimeout(() => setPhase("fading"), 350);
      removeTimer = window.setTimeout(() => setPhase("gone"), 350 + 650);
    };

    if (document.readyState === "complete") {
      startFade();
    } else {
      window.addEventListener("load", startFade, { once: true });
      // Safety net — never block the page beyond 2.5s
      const cap = window.setTimeout(startFade, 2500);
      return () => {
        window.clearTimeout(cap);
        window.removeEventListener("load", startFade);
        if (fadeTimer) window.clearTimeout(fadeTimer);
        if (removeTimer) window.clearTimeout(removeTimer);
      };
    }

    return () => {
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === "in" || phase === "fading") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={[
        "fixed inset-0 z-[100] bg-terracotta flex flex-col items-center justify-center transition-opacity duration-[600ms] ease-out",
        phase === "fading" ? "opacity-0" : "opacity-100",
      ].join(" ")}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image
            src="/aaa-mark.png"
            alt=""
            width={72}
            height={72}
            priority
            className="h-14 w-14 md:h-16 md:w-16 select-none animate-[pulse_1.6s_ease-in-out_infinite]"
          />
        </div>
        <p className="mt-6 font-serif text-white text-[18px] md:text-[20px] tracking-tight leading-none">
          Agile Ageing Alliance
        </p>
        <div className="mt-7 h-[2px] w-24 bg-cream/30 overflow-hidden rounded-full">
          <div className="h-full w-full bg-cream origin-left animate-[loading-bar_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes loading-bar {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
