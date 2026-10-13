"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ONRAMP, ONRAMP_STEPS } from "@/lib/pricing";

/* Onramp details live in a slide-in panel so the pricing page stays short. Any OnrampButton on the
   page opens it; the panel is mounted once on the pricing page. */
const OPEN = "onramp:open";

export function OnrampButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" className={"onr-link " + (className || "")} onClick={() => window.dispatchEvent(new Event(OPEN))} aria-haspopup="dialog">
      {children}
    </button>
  );
}

const LEVELS = [
  { name: "Launch", value: "Not offered", tone: "off" },
  { name: "Growth", value: `$${ONRAMP.usdPerMonth} a month for ${ONRAMP.months} months`, tone: "on" },
  { name: "Enterprise", value: "Included", tone: "on" },
];

export default function OnrampPanel() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<Element | null>(null);

  useEffect(() => {
    const onOpen = () => { lastFocus.current = document.activeElement; setOpen(true); };
    window.addEventListener(OPEN, onOpen);
    return () => window.removeEventListener(OPEN, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      (lastFocus.current as HTMLElement | null)?.focus?.();
    };
  }, [open]);

  return (
    <div className={"onr-layer" + (open ? " open" : "")} aria-hidden={!open}>
      <div className="onr-backdrop" onClick={() => setOpen(false)} />
      <aside className="onr-panel" role="dialog" aria-modal="true" aria-labelledby="onr-title" tabIndex={-1}>
        <header className="onr-head">
          <h2 id="onr-title">Onramp</h2>
          <button ref={closeRef} type="button" className="onr-close" onClick={() => setOpen(false)} aria-label="Close">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </header>

        <p className="onr-lead">90 days and {ONRAMP.hours} hours with our team, from your data to your first campaign.</p>

        <ul className="onr-levels">
          {LEVELS.map((l) => (
            <li key={l.name} className={l.tone}>
              <span>{l.name}</span>
              <b>{l.tone === "on" ? <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg> : null}{l.value}</b>
            </li>
          ))}
        </ul>

        <ol className="onr-tl">
          {ONRAMP_STEPS.map((s) => (
            <li key={s.when}><i>{s.when}</i><b>{s.what}</b></li>
          ))}
        </ol>

        <footer className="onr-foot2">
          <p>We start three a month. Time beyond {ONRAMP.hours} hours is Concierge, at $150 an hour.</p>
          <Link className="btn solid lg" href="/early-access" onClick={() => setOpen(false)}>Book a call</Link>
        </footer>
      </aside>
    </div>
  );
}
