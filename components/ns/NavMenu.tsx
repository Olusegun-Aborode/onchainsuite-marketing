"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DOCS_URL } from "@/lib/data";

/* Desktop nav: Resources opens a panel, Developers goes to the docs, Pricing is a page. */

export const RESOURCES = [
  { href: "/compare", title: "Compare", desc: "OnchainSuite next to the tools you already use, fairly.", icon: "cmp" },
  { href: "/tools", title: "Free tools", desc: "Calculators for churn, reachability and lifetime value.", icon: "tool" },
  { href: null, title: "Blog", desc: "Lifecycle marketing for blockchain companies.", icon: "blog", soon: true },
  { href: DOCS_URL, title: "Docs", desc: "Guides for setting up, sending and building on the API.", icon: "docs", external: true },
];

const ICONS: Record<string, React.ReactNode> = {
  cmp: <path d="M3 4h4v9H3zM9 7h4v6H9z" />,
  tool: <><rect x="3" y="2.5" width="10" height="11" rx="1.5" /><path d="M5.5 5.5h5M5.5 8h1M8 8h1M10.5 8h0M5.5 10.5h1M8 10.5h1" /></>,
  blog: <path d="M3.5 3.5h9M3.5 6.5h9M3.5 9.5h6M3.5 12.5h4" />,
  docs: <><path d="M4 2.5h6l2.5 2.5v8.5H4z" /><path d="M9.5 2.5V5H12" /></>,
};

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onDown = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false); };
    window.addEventListener("keydown", onKey); window.addEventListener("mousedown", onDown);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("mousedown", onDown); };
  }, [open]);
  const enter = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const leave = () => { timer.current = setTimeout(() => setOpen(false), 140); };

  return (
    <nav className="links" aria-label="Main">
      <div className="dd" ref={wrap} onMouseEnter={enter} onMouseLeave={leave}>
        <button type="button" className="dd-btn" aria-expanded={open} aria-controls="dd-res" onClick={() => setOpen((o) => !o)}>
          Resources<svg aria-hidden="true"><use href="#i-down" /></svg>
        </button>
        <div className={"dd-panel" + (open ? " open" : "")} id="dd-res" role="menu" hidden={!open}>
          {RESOURCES.map((r) => {
            const inner = (
              <>
                <span className="dd-ic"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{ICONS[r.icon]}</svg></span>
                <span><b>{r.title}{r.soon && <em>Soon</em>}</b><small>{r.desc}</small></span>
              </>
            );
            if (!r.href) return <div key={r.title} className="dd-item off" role="menuitem" aria-disabled="true">{inner}</div>;
            return r.external
              ? <a key={r.title} className="dd-item" role="menuitem" href={r.href} target="_blank" rel="noreferrer">{inner}</a>
              : <Link key={r.title} className="dd-item" role="menuitem" href={r.href}>{inner}</Link>;
          })}
        </div>
      </div>
      <a href={DOCS_URL} target="_blank" rel="noreferrer">Developers</a>
      <Link href="/pricing" aria-current={path === "/pricing" ? "page" : undefined}>Pricing</Link>
    </nav>
  );
}
