"use client";

import { useEffect } from "react";
import { CAL_LINK } from "@/lib/data";

/* Every "Book a walkthrough" and "Book a call" button links to /early-access. This loads Cal.com's
   element-click embed once and opens the booking popup for any of those links instead. If the embed
   has not loaded, the click falls through to /early-access, which links to the Cal.com page. */

const NS = "15min";
const CONFIG = { layout: "month_view", useSlotsViewOnSmallScreen: "true" };

type CalFn = ((...args: unknown[]) => void) & { loaded?: boolean; ns: Record<string, (...args: unknown[]) => void>; q?: unknown[]; config?: Record<string, unknown> };

function loadCal() {
  const w = window as unknown as { Cal?: CalFn };
  if (w.Cal) return;
  /* Cal.com's loader, from the embed snippet they provide. */
  (function (C: Window & { Cal?: CalFn }, A: string, L: string) {
    const p = (a: { q: unknown[] }, ar: unknown) => { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || (function (this: unknown, ...ar: unknown[]) {
      const cal = C.Cal!;
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; (d.head.appendChild(d.createElement("script")) as HTMLScriptElement).src = A; cal.loaded = true; }
      if (ar[0] === L) {
        const api = function (...a: unknown[]) { p(api as unknown as { q: unknown[] }, a); } as unknown as { q: unknown[] } & ((...a: unknown[]) => void);
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace] as unknown as { q: unknown[] }, ar); p(cal as unknown as { q: unknown[] }, ["initNamespace", namespace]); }
        else p(cal as unknown as { q: unknown[] }, ar);
        return;
      }
      p(cal as unknown as { q: unknown[] }, ar);
    } as CalFn);
  })(window as Window & { Cal?: CalFn }, "https://app.cal.com/embed/embed.js", "init");
  const Cal = w.Cal!;
  Cal("init", NS, { origin: "https://app.cal.com" });
  Cal.config = Cal.config || {};
  Cal.config.forwardQueryParams = true;
  Cal.ns[NS]("ui", { hideEventTypeDetails: false, layout: "month_view" });
}

export default function CalBooking() {
  useEffect(() => {
    loadCal();
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!(href === "/early-access" || href.startsWith("/early-access?") || a.hasAttribute("data-book"))) return;
      const Cal = (window as unknown as { Cal?: CalFn }).Cal;
      if (!Cal?.ns?.[NS]) return;
      e.preventDefault();
      Cal.ns[NS]("modal", { calLink: CAL_LINK, config: CONFIG });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
