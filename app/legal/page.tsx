import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, COMPANY, LEGAL_UPDATED } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";

export const metadata: Metadata = {
  title: "Legal",
  description: "OnchainSuite legal documents: privacy, terms, data processing, international transfers, cookies, and sub-processors.",
  alternates: { canonical: "/legal" },
};

const themeVars = {
  "--acc": ACCENT,
  "--acc-h": ACCENT_HOVER,
  "--ok": OK,
  minHeight: "100vh",
  background: "#FAFAF8",
  overflowX: "clip",
} as CSSProperties;

const DOCS = [
  { href: "/privacy", title: "Privacy Policy", desc: "How we collect, use, and protect personal data under UK GDPR." },
  { href: "/terms", title: "Terms of Service", desc: "The agreement for access to and use of the platform." },
  { href: "/dpa", title: "Data Processing Agreement", desc: "Article 28 terms for data we process on your behalf, plus security measures." },
  { href: "/data-transfers", title: "International Data Transfers", desc: "Safeguards for data leaving the UK, including the EU-US DPF (UK Extension)." },
  { href: "/cookies", title: "Cookie Policy", desc: "How we use cookies and similar technologies under PECR." },
  { href: "/subprocessors", title: "Sub-processors", desc: "The third parties we engage to provide the service." },
];

export default function LegalPage() {
  return (
    <div style={themeVars}>
      <SiteHeader />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "76px 32px 8px" }} data-pad>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: ACCENT, fontWeight: 600 }}>
          Legal
        </div>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(32px,4.4vw,50px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, color: "#1A1A17" }}>
          Legal &amp; compliance
        </h1>
        <p style={{ margin: "18px 0 0", fontSize: 17, lineHeight: 1.6, color: "#3D4A63", maxWidth: 600 }}>
          {COMPANY.legalName} is registered in {COMPANY.jurisdiction}. The documents below set out how we handle personal
          data and the terms of using OnchainSuite. Last updated {LEGAL_UPDATED}.
        </p>

        <div style={{ margin: "26px 0 0", borderTop: "1px solid #DCE7F5" }}>
          {DOCS.map((d) => (
            <a key={d.href} href={d.href} className="ocs-idx-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 14px", borderBottom: "1px solid #DCE7F5", textDecoration: "none" }}>
              <div>
                <div className="ocs-idx-title" style={{ fontSize: 16.5, fontWeight: 700, color: "#1A1A17" }}>{d.title}</div>
                <div style={{ margin: "5px 0 0", fontSize: 14, lineHeight: 1.5, color: "#3D4A63" }}>{d.desc}</div>
              </div>
              <span style={{ fontSize: 19, color: ACCENT, flex: "none" }} aria-hidden="true">→</span>
            </a>
          ))}
        </div>

        <p style={{ margin: "28px 0 40px", fontSize: 14.5, lineHeight: 1.6, color: "#3D4A63" }}>
          Questions? Email{" "}
          <a href={`mailto:${COMPANY.legalEmail}`} style={{ color: ACCENT, fontWeight: 600 }}>{COMPANY.legalEmail}</a>{" "}
          for legal, or{" "}
          <a href={`mailto:${COMPANY.privacyEmail}`} style={{ color: ACCENT, fontWeight: 600 }}>{COMPANY.privacyEmail}</a>{" "}
          for privacy and data requests.
        </p>
      </main>
      <SiteFooter />
      <style>{`.ocs-idx-row{transition:background .15s ease;border-radius:10px}.ocs-idx-row:hover{background:#F1F6FE}.ocs-idx-row:hover .ocs-idx-title{color:var(--acc)}`}</style>
    </div>
  );
}
