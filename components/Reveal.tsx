"use client";

import { CSSProperties, ElementType, ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  id?: string;
  /** Adds data-stack so the grid collapses to one column at <=880px. */
  stack?: boolean;
  /** Multi-card grid: 2 columns at <=880px, 1 column at <=560px. */
  cards?: boolean;
  /** Stat band: stays multi-column on tablet, 1 column at <=560px. */
  stats?: boolean;
  /** Stagger direct children in as the container enters view (instead of fading as one block). */
  stagger?: boolean;
};

/**
 * Subtle on-scroll reveal (fade + translateY) via IntersectionObserver,
 * matching the prototype's intent. Falls back to revealed-on-mount if the
 * observer is unavailable or the element is already in view.
 */
export default function Reveal({
  children,
  as,
  style,
  className,
  id,
  stack,
  cards,
  stats,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("is-revealed");

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            io.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Safety: reveal anything still hidden after 5s (matches prototype fallback).
    const t = window.setTimeout(reveal, 5000);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal
      data-stack={stack ? "" : undefined}
      data-cards={cards ? "" : undefined}
      data-stats={stats ? "" : undefined}
      data-reveal-stagger={stagger ? "" : undefined}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
