import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, SITE_URL } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import WalletChurnRateCalc from "@/components/WalletChurnRateCalc";

export const metadata: Metadata = {
  title: "Wallet churn rate calculator",
  description:
    "Churn measured on wallets, not accounts. Enter one period and see what it compounds to over a year, the average wallet lifespan, and lifetime value. Free, no signup.",
  alternates: { canonical: "/tools/wallet-churn-rate" },
  openGraph: { title: "Wallet churn rate calculator · OnchainSuite", description: "See what a period's wallet churn compounds to over a year.", url: "/tools/wallet-churn-rate", type: "website" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FBFBFC", overflowX: "clip", color: "#010F31" } as CSSProperties;
const wrap = { maxWidth: 1200, margin: "0 auto" };

const ARTICLE = [
  { h: "Why wallet churn is not customer churn", p1: "A customer cancels; a wallet just stops. There is no cancellation event to count, so churn has to be defined as an absence of activity over a window you choose, and that choice changes the number more than anything else on this page.", p2: "Pick the window from your natural usage cycle. If a healthy wallet transacts weekly, a 30-day silence is churn. If it stakes and waits, 30 days is nothing and you will scare yourself with a number that means very little." },
  { h: "The compounding is what hurts", p1: "A 6 percent monthly churn rate sounds survivable. Compounded, it means half your active base is gone in eleven months and 53 percent is gone within a year.", p2: "That is why the annual figure sits next to the monthly one above. Teams that only look at the monthly rate consistently underestimate how much acquisition they need to hold flat." },
  { h: "Churn and value are not evenly distributed", p1: "Wallet churn is usually worst in the long tail and mildest among your largest holders, which means a blended rate can look alarming while revenue barely moves, or look calm while your best cohort quietly leaves.", p2: "Run this per cohort: by size, by acquisition channel, by first action. The cohort with the worst churn and the highest revenue per wallet is where retention work pays for itself first." },
];
const BENCHMARKS = [
  { label: "DeFi, lending", value: "5.2%", bar: "26%" },
  { label: "Perps, trading", value: "9.8%", bar: "49%" },
  { label: "NFT, collectibles", value: "14.1%", bar: "70%" },
  { label: "Airdrop-acquired", value: "19.4%", bar: "97%" },
];
const RELATED = [
  { name: "Dormant wallet reactivation", blurb: "Revenue recoverable from the wallets this churn produced.", href: "/tools/dormant-wallet-reactivation" },
  { name: "Wallet reachability score", blurb: "How much of your churned base you can still message.", href: "/tools/wallet-reachability-score" },
  { name: "Cost per acquisition", blurb: "What replacing a churned wallet actually costs you.", href: "/tools/cost-per-acquisition" },
];
const mono = "'JetBrains Mono',monospace";

export default function WalletChurnRatePage() {
  const ld = { "@context": "https://schema.org", "@type": "WebApplication", name: "Wallet churn rate calculator", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${SITE_URL}/tools/wallet-churn-rate`, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return (
    <div style={themeVars}>
      <SiteHeader />

      <section style={{ ...wrap, padding: "56px 40px 0" }} data-pad>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13.5, color: "#767B83", display: "flex", gap: 8 }}>
          <a href="/tools" style={{ color: "#767B83", fontWeight: 500 }}>Tools</a>
          <span aria-hidden="true">/</span>
          <span style={{ color: "#42464D" }}>Wallet churn rate</span>
        </nav>
        <h1 style={{ margin: "20px 0 0", fontSize: "clamp(38px,5vw,56px)", lineHeight: 1.04, letterSpacing: "-1px", fontWeight: 600, maxWidth: "16ch", color: "#010F31" }}>Wallet churn rate calculator</h1>
        <p style={{ margin: "20px 0 0", maxWidth: "56ch", fontSize: 17, lineHeight: 1.65, color: "#585D65" }}>Churn measured on wallets, not accounts. Enter one period and see what it compounds to over a year, and how long a wallet lasts at that rate.</p>
      </section>

      <section style={{ ...wrap, padding: "36px 40px 0" }} data-pad>
        <WalletChurnRateCalc />
      </section>

      {/* Article + benchmarks */}
      <section style={{ ...wrap, padding: "64px 40px 0" }} data-pad>
        <div className="ocs-article-grid">
          <div>
            {ARTICLE.map((a) => (
              <div key={a.h} style={{ paddingBottom: 32 }}>
                <h2 style={{ margin: "0 0 12px", fontSize: 26, letterSpacing: "-0.5px", fontWeight: 600, color: "#010F31" }}>{a.h}</h2>
                <p style={{ margin: "0 0 12px", fontSize: 16.5, lineHeight: 1.72, color: "#42464D" }}>{a.p1}</p>
                <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.72, color: "#42464D" }}>{a.p2}</p>
              </div>
            ))}
            <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderLeft: "2px solid #FF6828", borderRadius: 6, padding: 24 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 10 }}>The formula</div>
              <p style={{ margin: "0 0 8px", fontFamily: mono, fontSize: 15, lineHeight: 1.7, color: "#010F31" }}>Churn = Wallets inactive ÷ Active wallets at start × 100</p>
              <p style={{ margin: 0, fontFamily: mono, fontSize: 15, lineHeight: 1.7, color: "#010F31" }}>Annual = (1 − (1 − monthly churn)^12) × 100</p>
            </div>
          </div>

          <aside className="ocs-article-side" style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 22 }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 14 }}>Monthly churn benchmarks</div>
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
            <p style={{ margin: "16px 0 0", fontSize: 12.5, lineHeight: 1.55, color: "#767B83" }}>Median monthly wallet churn by category, rolling 90 days.</p>
          </aside>
        </div>
      </section>

      {/* Related tools */}
      <section style={{ ...wrap, padding: "48px 40px 88px" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 16 }}>Related tools</div>
        <div className="ocs-related-grid">
          {RELATED.map((r) => (
            <a key={r.href} href={r.href} className="ocs-v2-card" style={{ display: "block", background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 22, textDecoration: "none" }}>
              <h3 style={{ margin: "0 0 7px", fontSize: 18, fontWeight: 600, letterSpacing: "-0.2px", color: "#010F31" }}>{r.name}</h3>
              <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.6, color: "#585D65" }}>{r.blurb}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 600, color: "#1727E0" }}>
                Open tool
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
        @media (max-width:1024px){
          .ocs-article-grid { grid-template-columns:1fr; gap:32px; }
          .ocs-article-side { position:static; }
          .ocs-related-grid { grid-template-columns:1fr; }
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}
