"use client";

import { useEffect } from "react";

/**
 * Feeds the cursor position into any `.ocs-spotlight` card as --mx/--my CSS vars,
 * so the card's ::before radial glow tracks the pointer. One delegated listener
 * for the whole page; renders nothing.
 */
export default function Spotlight() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const card = target?.closest<HTMLElement>(".ocs-spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
