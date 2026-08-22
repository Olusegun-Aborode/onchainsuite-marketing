import { CSSProperties, ReactNode } from "react";
import { ACCENT, ACCENT_HOVER, OK, LEGAL_UPDATED } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import LegalDownload from "@/components/LegalDownload";
import { SiteFooter } from "@/components/StaticSections";

const themeVars = {
  "--acc": ACCENT,
  "--acc-h": ACCENT_HOVER,
  "--ok": OK,
  minHeight: "100vh",
  background: "#FAFAF8",
  overflowX: "clip",
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
    <div style={themeVars}>
      <SiteHeader />
      <main className="ocs-legal" style={{ maxWidth: 840, margin: "0 auto", padding: "72px 32px 8px" }} data-pad>
        <div className="ocs-legal-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="ocs-legal-summary">{summary}</p>
        <div className="ocs-legal-metarow">
          <p className="ocs-legal-meta">
            Last updated: {LEGAL_UPDATED} · <a href="/legal">All legal documents</a>
          </p>
          <LegalDownload />
        </div>

        <div className="ocs-legal-body">{children}</div>

        <nav className="ocs-legal-foot" aria-label="Other legal documents">
          <span className="ocs-legal-foot-label">Other documents</span>
          <div className="ocs-legal-foot-links">
            {LEGAL_NAV.filter((l) => l.href !== current).map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </main>

      <style>{`
        .ocs-legal h1 {
          margin: 14px 0 0; font-size: clamp(30px,4vw,46px); line-height: 1.05;
          letter-spacing: -.03em; font-weight: 700; color: #1A1A17;
        }
        .ocs-legal-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--acc); font-weight: 600;
        }
        .ocs-legal-summary { margin: 16px 0 0; font-size: 17px; line-height: 1.6; color: #3D4A63; }
        .ocs-legal-metarow {
          margin: 12px 0 0; display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .ocs-legal-meta { margin: 0; font-size: 13.5px; color: #5C677D; }
        .ocs-legal-meta a, .ocs-legal a { color: var(--acc); font-weight: 600; }
        .ocs-legal-download {
          display: inline-flex; align-items: center; gap: 7px; cursor: pointer;
          padding: 8px 14px; border-radius: 8px; border: 1px solid #DCE7F5; background: #fff;
          color: #1A1A17; font-size: 13.5px; font-weight: 600; font-family: inherit;
          transition: border-color .15s ease, background .15s ease;
        }
        .ocs-legal-download:hover { border-color: var(--acc); background: #F0F7FF; color: var(--acc); }
        .ocs-legal-download svg { color: var(--acc); }
        .ocs-legal-body { margin-top: 20px; }
        .ocs-legal-body h2 {
          margin: 40px 0 0; font-size: 22px; font-weight: 700; letter-spacing: -.02em;
          color: #1A1A17; scroll-margin-top: 88px;
        }
        .ocs-legal-body h3 { margin: 24px 0 0; font-size: 16.5px; font-weight: 700; color: #1A1A17; }
        .ocs-legal-body p { margin: 12px 0 0; font-size: 15px; line-height: 1.7; color: #3D4A63; }
        .ocs-legal-body ul, .ocs-legal-body ol { margin: 12px 0 0; padding-left: 22px; }
        .ocs-legal-body li { margin: 7px 0 0; font-size: 15px; line-height: 1.7; color: #3D4A63; }
        .ocs-legal-body strong { color: #1A1A17; font-weight: 700; }
        .ocs-legal-body table { width: 100%; border-collapse: collapse; margin: 16px 0 0; font-size: 13.5px; }
        .ocs-legal-body th, .ocs-legal-body td {
          border: 1px solid #DCE7F5; padding: 9px 12px; text-align: left; vertical-align: top;
          line-height: 1.55; color: #3D4A63;
        }
        .ocs-legal-body th { background: #F0F7FF; color: #1A1A17; font-weight: 700; }
        .ocs-legal-foot { margin: 56px 0 0; padding: 22px 0 40px; border-top: 1px solid #DCE7F5; }
        .ocs-legal-foot-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: #8A93A6;
        }
        .ocs-legal-foot-links { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px 18px; }
        .ocs-legal-foot-links a { font-size: 14px; color: var(--acc); font-weight: 600; }
        @media print {
          header, footer, .ocs-legal-download, .ocs-legal-foot { display: none !important; }
          .ocs-legal { max-width: 100% !important; padding: 0 24px !important; }
          .ocs-legal-body p, .ocs-legal-body li { color: #111 !important; }
          a { color: #111 !important; text-decoration: underline; }
          @page { margin: 18mm; }
        }
      `}</style>
      <SiteFooter />
    </div>
  );
}
