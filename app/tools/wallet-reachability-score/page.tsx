import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, SITE_URL } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import ReachabilityScoreCalc from "@/components/ReachabilityScoreCalc";

export const metadata: Metadata = {
  title: "Wallet reachability score",
  description:
    "Score how much of your wallet base you can actually message across verified email, wallet inbox, push, and socials, weighted by durability. Free, no signup.",
  alternates: { canonical: "/tools/wallet-reachability-score" },
  openGraph: { title: "Wallet reachability score · Onchain Suite", description: "What share of your holders you can actually reach today.", url: "/tools/wallet-reachability-score", type: "website" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FBFBFC", overflowX: "clip", color: "#010F31" } as CSSProperties;
const wrap = { maxWidth: 1200, margin: "0 auto" };
const mono = "'JetBrains Mono',monospace";

const NOTES = [
  { n: "01", h: "Ask at the moment of value, not the moment of exit", p: "Wallets that connect for the first time convert on a channel request two to three times better than wallets asked during an offboarding or win-back flow." },
  { n: "02", h: "Overlap is higher than teams assume", p: "The same engaged wallet tends to opt into everything. If you have not measured overlap, 25 to 35 percent is the usual range, and pretending it is zero inflates your score badly." },
  { n: "03", h: "Push decays without you noticing", p: "Push tokens go stale at roughly 4 percent a month through reinstalls and permission resets. Score push on tokens that delivered in the last 90 days, not on lifetime opt-ins." },
  { n: "04", h: "Reachability is per segment, not per base", p: "Your whales are almost always more reachable than your long tail. A base score of 40 can hide a top-decile score of 80, which changes what you should build first." },
];
const WEIGHTS = [
  { label: "Verified email", weight: "1.00", why: "Portable, durable, and the only channel that survives a wallet or device change." },
  { label: "Wallet inbox", weight: "0.80", why: "Native to the context, but depends on the user still opening that wallet." },
  { label: "Push token", weight: "0.65", why: "High intent when fresh, but tokens expire quietly and silently stop delivering." },
  { label: "Linked social", weight: "0.35", why: "Reachable in principle, rate-limited and unreliable in practice at any scale." },
];
const BANDS = [
  { range: "60-100", color: "#128355", text: "Strong. Collection is solved; spend your effort on segmentation." },
  { range: "40-59", color: "#B53C0B", text: "Workable. Half your base is dark and it is usually the older half." },
  { range: "20-39", color: "#B53C0B", text: "Thin. Campaign metrics describe a minority of your users." },
  { range: "0-19", color: "#9B2A2E", text: "Blind. Fix collection before spending anything on messaging." },
];
const RELATED = [
  { name: "Dormant wallet reactivation", blurb: "Revenue recoverable from wallets that stopped showing up.", href: "/tools/dormant-wallet-reactivation" },
  { name: "Wallet churn rate", blurb: "Monthly and compounding annual churn from active cohorts.", href: "/tools/wallet-churn-rate" },
  { name: "Cost per acquisition", blurb: "Blended and per-channel cost of one acquired wallet.", href: "/tools/cost-per-acquisition" },
];

export default function ReachabilityPage() {
  const ld = { "@context": "https://schema.org", "@type": "WebApplication", name: "Wallet reachability score", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${SITE_URL}/tools/wallet-reachability-score`, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return (
    <div style={themeVars}>
      <SiteHeader />
      <section style={{ ...wrap, padding: "56px 40px 0" }} data-pad>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13.5, color: "#767B83", display: "flex", gap: 8 }}>
          <a href="/tools" style={{ color: "#767B83", fontWeight: 500 }}>Tools</a>
          <span aria-hidden="true">/</span>
          <span style={{ color: "#42464D" }}>Wallet reachability</span>
        </nav>
        <h1 style={{ margin: "20px 0 0", fontSize: "clamp(38px,5vw,56px)", lineHeight: 1.04, letterSpacing: "-1px", fontWeight: 600, maxWidth: "18ch", color: "#010F31" }}>Wallet reachability score</h1>
        <p style={{ margin: "20px 0 0", maxWidth: "58ch", fontSize: 17, lineHeight: 1.65, color: "#585D65" }}>You cannot retain a wallet you cannot reach. Score how much of your base is addressable today, weighted by how durable each channel really is.</p>
      </section>

      <section style={{ ...wrap, padding: "36px 40px 0" }} data-pad>
        <ReachabilityScoreCalc />
      </section>

      <section style={{ ...wrap, padding: "64px 40px 0" }} data-pad>
        <div className="ocs-article-grid">
          <div>
            {NOTES.map((t) => (
              <div key={t.n} style={{ display: "flex", gap: 20, padding: "20px 0", borderTop: "1px solid #ECEDEF" }}>
                <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, color: "#1727E0", flex: "none", width: 28 }}>{t.n}</span>
                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 600, letterSpacing: "-0.2px", color: "#010F31" }}>{t.h}</h3>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "#42464D" }}>{t.p}</p>
                </div>
              </div>
            ))}
          </div>
          <aside className="ocs-article-side" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 22 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 14 }}>Channel weights</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {WEIGHTS.map((w) => (
                  <div key={w.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
                      <span style={{ color: "#010F31", fontWeight: 500 }}>{w.label}</span>
                      <span style={{ fontFamily: mono, fontVariantNumeric: "tabular-nums", color: "#010F31" }}>{w.weight}</span>
                    </div>
                    <p style={{ margin: "4px 0 0", fontSize: 12.5, lineHeight: 1.5, color: "#767B83" }}>{w.why}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 22 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 14 }}>Score bands</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {BANDS.map((b) => (
                  <div key={b.range} style={{ display: "flex", gap: 10 }}>
                    <span style={{ fontFamily: mono, fontSize: 12.5, color: b.color, flex: "none", width: 56 }}>{b.range}</span>
                    <span style={{ fontSize: 13, lineHeight: 1.5, color: "#42464D" }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ ...wrap, padding: "48px 40px 88px" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 16 }}>Related tools</div>
        <div className="ocs-related-grid">
          {RELATED.map((r) => (
            <a key={r.href} href={r.href} className="ocs-v2-card" style={{ display: "block", background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 22, textDecoration: "none" }}>
              <h3 style={{ margin: "0 0 7px", fontSize: 18, fontWeight: 600, letterSpacing: "-0.2px", color: "#010F31" }}>{r.name}</h3>
              <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.6, color: "#585D65" }}>{r.blurb}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 600, color: "#1727E0" }}>Open tool
                <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
      <style>{`
        .ocs-article-grid { display:grid; grid-template-columns:minmax(0,1fr) 320px; gap:56px; align-items:start; }
        .ocs-article-side { position:sticky; top:88px; }
        .ocs-related-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
        .ocs-v2-card { transition:border-color .12s ease; }
        .ocs-v2-card:hover { border-color:#C4C7CC; }
        @media (max-width:1024px){ .ocs-article-grid { grid-template-columns:1fr; gap:32px; } .ocs-article-side { position:static; } .ocs-related-grid { grid-template-columns:1fr; } }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}
