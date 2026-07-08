"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type EnlargeableImageProps = {
  src: string;
  alt: string;
  /** Aspect ratio for the inline (unexpanded) figure, e.g. "4/3". */
  aspect?: string;
  caption?: string;
  sizes?: string;
  className?: string;
};

// A framed image that opens to full size in a dark overlay when clicked.
// Keyboard accessible (Enter/Space to open, Escape to close) and respects
// the page's calm visual language rather than a flashy gallery lightbox.
export function EnlargeableImage({
  src,
  alt,
  aspect = "4/3",
  caption,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: EnlargeableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
        className="group relative block w-full overflow-hidden rounded-[4px] border border-ink/15 bg-white shadow-[0_1px_2px_rgba(11,37,69,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-stone cursor-zoom-in"
        style={{ aspectRatio: aspect }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-contain p-2" />
      </button>

      {caption ? (
        <figcaption className="mt-3 text-charcoal/70 text-[12px] tracking-[0.06em]">
          {caption}
        </figcaption>
      ) : null}

      {open
        ? // Rendered into <body> via a portal so the overlay always covers the
          // full viewport — a transformed ancestor (e.g. a Reveal or Parallax
          // wrapper) would otherwise trap position:fixed inside the section.
          createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/95 p-4 md:p-10 animate-fadeIn"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone/10 text-stone hover:bg-stone/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
              <div
                className="relative h-full w-full max-w-[1280px]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
              </div>
            </div>,
            document.body
          )
        : null}
    </figure>
  );
}
