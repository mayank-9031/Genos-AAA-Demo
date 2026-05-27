"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"in" | "fading" | "gone">("in");

  useEffect(() => {
    let fadeTimer: number | undefined;
    let removeTimer: number | undefined;
    let safetyTimer: number | undefined;
    let onPageLoad: (() => void) | undefined;

    const startFade = () => {
      fadeTimer = window.setTimeout(() => setPhase("fading"), 150);
      removeTimer = window.setTimeout(() => setPhase("gone"), 150 + 600);
    };

    if (document.readyState === "complete") {
      startFade();
    } else {
      onPageLoad = () => startFade();
      window.addEventListener("load", onPageLoad, { once: true });
    }

    // Safety cap — never block the page beyond 8s.
    safetyTimer = window.setTimeout(() => {
      setPhase("fading");
      window.setTimeout(() => setPhase("gone"), 600);
    }, 8_000);

    return () => {
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
      if (safetyTimer) window.clearTimeout(safetyTimer);
      if (onPageLoad) window.removeEventListener("load", onPageLoad);
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
        "fixed inset-0 z-[100] bg-stone flex flex-col items-center justify-center transition-opacity duration-[600ms] ease-out",
        phase === "fading" ? "opacity-0" : "opacity-100",
      ].join(" ")}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/aaa-mark.png"
          alt=""
          width={64}
          height={64}
          priority
          className="h-12 w-12 md:h-14 md:w-14 select-none"
        />
        <p className="mt-5 font-serif text-ink text-[16px] md:text-[18px] tracking-tight leading-none">
          Agile Ageing Alliance
        </p>
        <div className="mt-5 h-px w-10 bg-ink/20" aria-hidden="true" />
      </div>
    </div>
  );
}
