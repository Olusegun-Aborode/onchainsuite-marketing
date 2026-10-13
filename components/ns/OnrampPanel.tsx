"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { METERS, ONRAMP, ONRAMP_STEPS } from "@/lib/pricing";

/* Detail panels for the pricing page, so the page itself stays short. An InfoButton opens the panel on
   one topic (Onramp, or usage beyond the allowance); the panel is mounted once on the pricing page. */
type Kind = "onramp" | "usage";
const OPEN = "pricing-info:open";

export function InfoButton({ kind, children, className }: { kind: Kind; children: React.ReactNode; className?: string }) {
  return (
    <button type="button" className={"onr-link " + (className || "")} aria-haspopup="dialog"
      onClick={() => window.dispatchEvent(new CustomEvent<Kind>(OPEN, { detail: kind }))}>
      {children}
    </button>
  );
}

export function OnrampButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return <InfoButton kind="onramp" className={className}>{children}</InfoButton>;
}

const LEVELS = [
  { name: "Launch", value: "Not offered", tone: "off" },
  { name: "Growth", value: `$${ONRAMP.usdPerMonth} a month for ${ONRAMP.months} months`, tone: "on" },
  { name: "Enterprise", value: "Included", tone: "on" },
];

const Tick = () => <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>;

function OnrampBody() {
  return (
    <>
      <p className="onr-lead">90 days and {ONRAMP.hours} hours with our team, from your data to your first campaign.</p>
      <ul className="onr-levels">
        {LEVELS.map((l) => (
          <li key={l.name} className={l.tone}><span>{l.name}</span><b>{l.tone === "on" ? <Tick /> : null}{l.value}</b></li>
        ))}
      </ul>
      <ol className="onr-tl">
        {ONRAMP_STEPS.map((s) => <li key={s.when}><i>{s.when}</i><b>{s.what}</b></li>)}
      </ol>
    </>
  );
}

function UsageBody() {
  return (
    <>
      <p className="onr-lead">Every level includes a monthly allowance. Anything above it is charged at these list prices.</p>
      <ul className="onr-levels usage">
        {METERS.map((m) => (
          <li key={m.item}>
            <span><b>{m.item}</b><small>{m.unit}</small></span>
            <b>{m.price}</b>
          </li>
        ))}
      </ul>
      <p className="onr-note">On the Send plan, only emails and AI actions apply, because Send has no wallet data, in-app messages or list checks.</p>
    </>
  );
}

export default function OnrampPanel() {
  const [kind, setKind] = useState<Kind | null>(null);
  const [shown, setShown] = useState<Kind>("onramp");
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<Element | null>(null);
  const open = kind !== null;
  const close = () => setKind(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const k = (e as CustomEvent<Kind>).detail;
      lastFocus.current = document.activeElement;
      setShown(k);
      setKind(k);
    };
    window.addEventListener(OPEN, onOpen);
    return () => window.removeEventListener(OPEN, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
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
      <div className="onr-backdrop" onClick={close} />
      <aside className="onr-panel" role="dialog" aria-modal="true" aria-labelledby="onr-title" tabIndex={-1}>
        <header className="onr-head">
          {/* "shown" keeps the last topic on screen while the panel slides out. */}
          <h2 id="onr-title">{shown === "onramp" ? "Onramp" : "Usage beyond your allowance"}</h2>
          <button ref={closeRef} type="button" className="onr-close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </header>

        {shown === "onramp" ? <OnrampBody /> : <UsageBody />}

        <footer className="onr-foot2">
          {shown === "onramp" && <p>We start three a month.</p>}
          <Link className="btn solid lg" href="/early-access" onClick={close}>Book a walkthrough</Link>
        </footer>
      </aside>
    </div>
  );
}
