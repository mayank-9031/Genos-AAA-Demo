"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  amount?: number;
  /** Vertical entrance offset in px. */
  y?: number;
  /** Horizontal entrance offset in px — negative slides in from the left. */
  x?: number;
  /** Entrance scale — e.g. 0.97 settles into place. */
  scale?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  amount = 0.15,
  y = 16,
  x = 0,
  scale = 1,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: amount }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  const Tag = as as any;
  // Once revealed, transform resolves to `none` (not an identity transform) so
  // this wrapper never becomes a containing block for fixed-position children
  // such as full-screen image overlays.
  const style: CSSProperties = {
    transform: visible
      ? "none"
      : `translate3d(${x}px,${y}px,0) scale(${scale})`,
    opacity: visible ? 1 : 0,
    transition: `transform 700ms cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, opacity 700ms ease-out ${delay}ms`,
    // will-change:transform would itself create a containing block for fixed
    // children, so it is only hinted while the entrance is still pending.
    willChange: visible ? "auto" : "transform, opacity",
  };

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  );
}
