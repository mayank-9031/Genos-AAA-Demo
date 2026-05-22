"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  amount?: number;
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  amount = 0.15,
  y = 16,
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
  const style: CSSProperties = {
    transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    opacity: visible ? 1 : 0,
    transition: `transform 700ms cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, opacity 700ms ease-out ${delay}ms`,
    willChange: "transform, opacity",
  };

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  );
}
