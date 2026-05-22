"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"in" | "fading" | "gone">("in");

  useEffect(() => {
    let fadeTimer: number | undefined;
    let removeTimer: number | undefined;
    let safetyTimer: number | undefined;
    let videoEl: HTMLVideoElement | null = null;
    let onVideoReady: (() => void) | undefined;
    let pageLoaded = document.readyState === "complete";
    let videoReady = false;
    let onPageLoad: (() => void) | undefined;

    const tryStartFade = () => {
      if (!pageLoaded || !videoReady) return;
      fadeTimer = window.setTimeout(() => setPhase("fading"), 200);
      removeTimer = window.setTimeout(() => setPhase("gone"), 200 + 650);
    };

    // 1. Wait for window.load (covers fonts, images, css, scripts)
    if (pageLoaded) {
      pageLoaded = true;
    } else {
      onPageLoad = () => {
        pageLoaded = true;
        tryStartFade();
      };
      window.addEventListener("load", onPageLoad, { once: true });
    }

    // 2. Wait for the hero video to be ready to play through (desktop only;
    //    on mobile the <video> isn't rendered, so we don't gate on it).
    const checkVideo = () => {
      videoEl = document.querySelector<HTMLVideoElement>("video[data-hero-video]");

      if (!videoEl) {
        // No hero video on the page (mobile, reduced-motion, or another route).
        videoReady = true;
        tryStartFade();
        return;
      }

      // readyState 4 = HAVE_ENOUGH_DATA (can play through to end without stalling)
      if (videoEl.readyState >= 4) {
        videoReady = true;
        tryStartFade();
        return;
      }

      onVideoReady = () => {
        videoReady = true;
        tryStartFade();
      };
      videoEl.addEventListener("canplaythrough", onVideoReady, { once: true });
      // Some browsers fire `loadeddata` reliably even when canplaythrough is slow
      // for muted autoplay; accept either as "ready".
      videoEl.addEventListener("loadeddata", () => {
        if (videoEl && videoEl.readyState >= 3) {
          videoReady = true;
          tryStartFade();
        }
      }, { once: true });
    };

    // The hero mounts on the client too — wait one tick so the <video> exists in the DOM.
    const rafId = window.requestAnimationFrame(checkVideo);

    // 3. Safety cap — never block the page beyond 10s, even on a flaky connection.
    safetyTimer = window.setTimeout(() => {
      pageLoaded = true;
      videoReady = true;
      tryStartFade();
    }, 10_000);

    // Kick off in case both conditions are already met (very fast loads)
    tryStartFade();

    return () => {
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
      if (safetyTimer) window.clearTimeout(safetyTimer);
      window.cancelAnimationFrame(rafId);
      if (onPageLoad) window.removeEventListener("load", onPageLoad);
      if (videoEl && onVideoReady) {
        videoEl.removeEventListener("canplaythrough", onVideoReady);
      }
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
