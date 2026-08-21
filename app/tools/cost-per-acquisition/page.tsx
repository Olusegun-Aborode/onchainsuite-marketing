import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, SITE_URL } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import CostPerAcquisitionCalc from "@/components/CostPerAcquisitionCalc";

export const metadata: Metadata = {
  title: "Cost per acquisition calculator",
  description:
    "Compare blended and per-channel cost of acquiring a transacting wallet, activation rate, and LTV-to-CPA payback across your channels. Free, no signup.",
  alternates: { canonical: "/tools/cost-per-acquisition" },
  openGraph: { title: "Cost per acquisition calculator · OnchainSuite", description: "Blended and per-channel cost of one acquired wallet.", url: "/tools/cost-per-acquisition", type: "website" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FBFBFC", overflowX: "clip", color: "#010F31" } as CSSProperties;
const wrap = { maxWidth: 1200, margin: "0 auto" };
const mono = "'JetBrains Mono',monospace";

const ARTICLE = [
  { h: "A connected wallet is not an acquisition", p1: "Most dashboards divide spend by wallets connected, which is why reported CPA in web3 looks impossibly good. Connecting is free, reversible and often incentivised; it tells you almost nothing about whether you bought a user.", p2: "This tool asks for both numbers so you can see the two side by side. The gap between cost per connect and cost per acquisition is your activation problem stated in currency." },
  { h: "Cheap channels are usually cheap for a reason", p1: "Quest platforms and airdrop campaigns reliably produce the lowest cost per connect and, very often, the highest cost per retained wallet. The spend buys attention that leaves the moment the incentive stops.", p2: "Compare CPA against a cohort's actual churn before you shift budget. A channel with double the CPA and half the churn is the cheaper channel, and the blended number will never show you that." },
  { h: "What to do with a bad ratio", p1: "If your LTV to CPA ratio is under three, the instinct is to cut spend. Look at activation first: a channel converting 14 percent of connects into transactions has more headroom in onboarding than in bidding.", p2: "Reactivation is the other lever. A dormant wallet you already paid for costs a fraction of a new one, which is usually the fastest way to move a blended CPA that will not budge." },
];
const BENCHMARKS = [
  { label: "Organic and referral", value: "$4.20", bar: "8%" },
  { label: "Quests and campaigns", value: "$19.40", bar: "35%" },
  { label: "Paid social", value: "$29.50", bar: "54%" },
  { label: "KOL and partnerships", value: "$54.90", bar: "100%" },
];
const RELATED = [
  { name: "Wallet churn rate", blurb: "How long the wallets you just bought actually last.", href: "/tools/wallet-churn-rate" },
  { name: "Dormant wallet reactivation", blurb: "The cheaper alternative to buying a replacement wallet.", href: "/tools/dormant-wallet-reactivation" },
  { name: "Wallet reachability score", blurb: "Whether you can message the wallets you paid for.", href: "/tools/wallet-reachability-score" },
];

export default function CpaPage() {
  const ld = { "@context": "https://schema.org", "@type": "WebApplication", name: "Cost per acquisition calculator", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${SITE_URL}/tools/cost-per-acquisition`, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return (
    <div style={themeVars}>
      <SiteHeader />
      <section style={{ ...wrap, padding: "56px 40px 0" }} data-pad>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13.5, color: "#767B83", display: "flex", gap: 8 }}>
          <a href="/tools" style={{ color: "#767B83", fontWeight: 500 }}>Tools</a>
          <span aria-hidden="true">/</span>
          <span style={{ color: "#42464D" }}>Cost per acquisition</span>
        </nav>
        <h1 style={{ margin: "20px 0 0", fontSize: "clamp(38px,5vw,56px)", lineHeight: 1.04, letterSpacing: "-1px", fontWeight: 600, maxWidth: "18ch", color: "#010F31" }}>Cost per acquisition calculator</h1>
        <p style={{ margin: "20px 0 0", maxWidth: "58ch", fontSize: 17, lineHeight: 1.65, color: "#585D65" }}>Cost per connect flatters every channel. Enter spend, connects and first transactions to see what a transacting wallet actually costs, per channel and blended.</p>
      </section>

      <section style={{ ...wrap, padding: "36px 40px 0" }} data-pad>
        <CostPerAcquisitionCalc />
      </section>

      <section style={{ ...wrap, padding: "64px 40px 0" }} data-pad>
        <div className="ocs-article-grid">
          <div>
            {ARTICLE.map((a) => (
              <div key={a.h} style={{ paddingBottom: 34 }}>
                <h2 style={{ margin: "0 0 12px", fontSize: 26, letterSpacing: "-0.5px", fontWeight: 600, color: "#010F31" }}>{a.h}</h2>
                <p style={{ margin: "0 0 12px", fontSize: 16.5, lineHeight: 1.72, color: "#42464D" }}>{a.p1}</p>
                <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.72, color: "#42464D" }}>{a.p2}</p>
              </div>
            ))}
          </div>
          <aside className="ocs-article-side" style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 22 }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 14 }}>CPA benchmarks</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {BENCHMARKS.map((b) => (
                <div key={b.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
                    <span style={{ color: "#42464D" }}>{b.label}</span>
                    <span style={{ fontFamily: mono, fontVariantNumeric: "tabular-nums", color: "#010F31" }}>{b.value}</span>
                  </div>
                  <div style={{ height: 3, background: "#ECEDEF", marginTop: 7 }}>
                    <span style={{ display: "block", height: 3, width: b.bar, background: "#2F94FF" }} />
                  </div>
                </div>
              ))}
            </div>
            <p style={{ margin: "16px 0 0", fontSize: 12.5, lineHeight: 1.55, color: "#767B83" }}>Median cost per transacting wallet by channel.</p>
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
