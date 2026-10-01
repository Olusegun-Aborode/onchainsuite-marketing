"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/* Phone-width menu. The desktop links hide below 1000px, so this is the only way to reach them there. */
export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button type="button" className="btn menu-btn" aria-expanded={open} aria-controls="mmenu" onClick={() => setOpen((o) => !o)}>
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="mmenu" id="mmenu">
          {links.map((l) => l.href.startsWith("http") ? <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a> : <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
          <Link className="btn solid lg" href="/early-access" onClick={() => setOpen(false)}>Book a walkthrough</Link>
        </div>
      )}
    </>
  );
}
