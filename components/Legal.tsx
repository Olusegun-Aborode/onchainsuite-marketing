import { CSSProperties, ReactNode } from "react";
import { ACCENT, ACCENT_HOVER, OK, LEGAL_UPDATED } from "@/lib/data";
import Link from "next/link";
import LegalDownload from "@/components/LegalDownload";
import SiteChrome from "@/components/ns/SiteChrome";

const themeVars = {
  "--acc": ACCENT,
  "--acc-h": ACCENT_HOVER,
  "--ok": OK,
} as CSSProperties;

// Other policy pages, for the cross-links shown at the foot of each page.
export const LEGAL_NAV = [
  { href: "/legal", label: "Overview" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/dpa", label: "Data Processing Agreement" },
  { href: "/data-transfers", label: "International Data Transfers" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/subprocessors", label: "Sub-processors" },
];

export function LegalShell({
  eyebrow = "Legal",
  title,
  summary,
  current,
  children,
}: {
  eyebrow?: string;
  title: string;
  summary: string;
  current: string; // href of the page being rendered, to omit from cross-links
  children: ReactNode;
}) {
  return (
    <SiteChrome>
    <div className="wrap" style={themeVars}>
      <div className="legal-grid">
        <aside className="legal-rail" aria-label="Legal documents">
          <nav>
            {LEGAL_NAV.map((l) => (
              <Link key={l.href} href={l.href} className={l.href === current ? "on" : undefined} aria-current={l.href === current ? "page" : undefined}>{l.label}</Link>
            ))}
          </nav>
        </aside>
        <main className="ocs-legal">
          <h1>{title}</h1>
          <p className="ocs-legal-summary">{summary}</p>
          <div className="ocs-legal-metarow">
            <p className="ocs-legal-meta">Last updated: {LEGAL_UPDATED}</p>
            <LegalDownload />
          </div>
          <div className="ocs-legal-body">{children}</div>
        </main>
      </div>
      <style>{`
        .ocs-legal h1 {
          margin: 18px 0 0; font-size: clamp(32px,4vw,48px); line-height: 1.04;
          letter-spacing: -.02em; font-weight: 600; color: #1C1D1F;
        }
        .ocs-legal-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--acc); font-weight: 600;
        }
        .ocs-legal-summary { margin: 16px 0 0; font-size: 17px; line-height: 1.6; color: #3B3D42; }
        .ocs-legal-metarow {
          margin: 12px 0 0; display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .ocs-legal-meta { margin: 0; font-size: 13.5px; color: #75777C; }
        .ocs-legal-meta a, .ocs-legal a { color: var(--acc); font-weight: 600; }
        .ocs-legal-download {
          display: inline-flex; align-items: center; gap: 7px; cursor: pointer;
          padding: 8px 14px; border-radius: 8px; border: 1px solid #E9E9EC; background: #fff;
          color: #1C1D1F; font-size: 13.5px; font-weight: 600; font-family: inherit;
          transition: border-color .15s ease, background .15s ease;
        }
        .ocs-legal-download:hover { border-color: var(--acc); background: #F8F8F9; color: var(--acc); }
        .ocs-legal-download svg { color: var(--acc); }
        .ocs-legal-body { margin-top: 20px; }
        .ocs-legal-body h2 {
          margin: 40px 0 0; font-size: 22px; font-weight: 700; letter-spacing: -.02em;
          color: #1C1D1F; scroll-margin-top: 88px;
        }
        .ocs-legal-body h3 { margin: 24px 0 0; font-size: 16.5px; font-weight: 700; color: #1C1D1F; }
        .ocs-legal-body p { margin: 12px 0 0; font-size: 15px; line-height: 1.7; color: #3B3D42; }
        .ocs-legal-body ul, .ocs-legal-body ol { margin: 12px 0 0; padding-left: 22px; }
        .ocs-legal-body li { margin: 7px 0 0; font-size: 15px; line-height: 1.7; color: #3B3D42; }
        .ocs-legal-body strong { color: #1C1D1F; font-weight: 700; }
        .ocs-legal-body table { width: 100%; border-collapse: collapse; margin: 16px 0 0; font-size: 13.5px; }
        .ocs-legal-body th, .ocs-legal-body td {
          border: 1px solid #E9E9EC; padding: 9px 12px; text-align: left; vertical-align: top;
          line-height: 1.55; color: #3B3D42;
        }
        .ocs-legal-body th { background: #F8F8F9; color: #1C1D1F; font-weight: 700; }
        .ocs-legal-foot { margin: 56px 0 0; padding: 22px 0 40px; border-top: 1px solid #E9E9EC; }
        .ocs-legal-foot-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: #8A93A6;
        }
        .ocs-legal-foot-links { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px 18px; }
        .ocs-legal-foot-links a { font-size: 14px; color: var(--acc); font-weight: 600; }
        @media print {
          .bar, .nav, footer, .legal-rail, .ocs-legal-download { display: none !important; } .legal-grid { display: block !important; } .wrap { border: 0 !important; }
          .ocs-legal { max-width: 100% !important; padding: 0 24px !important; }
          .ocs-legal-body p, .ocs-legal-body li { color: #111 !important; }
          a { color: #111 !important; text-decoration: underline; }
          @page { margin: 18mm; }
        }
      `}</style>
    </div>
    </SiteChrome>
  );
}
