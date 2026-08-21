import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, SITE_URL } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import DormantReactivationCalc from "@/components/DormantReactivationCalc";

export const metadata: Metadata = {
  title: "Dormant wallet reactivation calculator",
  description:
    "Put a number on the revenue recoverable from wallets that went quiet. Reachable share, reactivation rate, revenue per wallet, months retained, campaign cost. Free, no signup.",
  alternates: { canonical: "/tools/dormant-wallet-reactivation" },
  openGraph: { title: "Dormant wallet reactivation calculator · OnchainSuite", description: "Revenue recoverable from wallets that stopped showing up.", url: "/tools/dormant-wallet-reactivation", type: "website" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FBFBFC", overflowX: "clip", color: "#010F31" } as CSSProperties;
const wrap = { maxWidth: 1200, margin: "0 auto" };
const mono = "'JetBrains Mono',monospace";

const ARTICLE = [
  { h: "What counts as a dormant wallet?", p1: "A wallet is dormant when it has interacted with your contracts at least once and then gone quiet for longer than your natural usage cycle. For a perps venue that might be 14 days. For a staking protocol it might be a quarter. Ninety days is a reasonable default if you have no cycle in mind.", p2: "The distinction that matters is dormant versus lost. A lost wallet has withdrawn its balance and moved on. A dormant wallet often still holds a position, which is exactly why it is worth a message." },
  { h: "Why reachability decides the number", p1: "Teams tend to argue about reactivation rate. It is the wrong lever. Move the rate from 8% to 12% and the result shifts modestly; move reachability from 30% to 60% and it doubles.", p2: "Reachability is a collection problem, not a messaging problem. Every touchpoint where a wallet connects is an opportunity to ask for one durable channel, and the ones that ask early collect two to three times more than the ones that ask at churn." },
  { h: "Reactivation revenue is not one payment", p1: "The mistake in most back-of-envelope versions of this maths is treating a reactivated wallet as a single transaction. It is a cohort that resumes contributing at roughly the rate of your existing active base, then decays again.", p2: "That is why the months-retained input exists. Set it to what your data says rather than to the number you would like. A reactivated wallet that stays seven months is worth more than four times one that stays one month and leaves." },
];
const BENCHMARKS = [
  { label: "Reachable share", value: "31%", bar: "31%" },
  { label: "Reactivation rate", value: "8.4%", bar: "21%" },
  { label: "Retained 6 months on", value: "46%", bar: "46%" },
];
const TACTICS = [
  { n: "01", h: "Ask for a channel at connect, not at churn", p: "The cheapest reachability gain is a single optional field at wallet connect. Wallets that give you an address at their first session are the ones still interested enough to answer." },
  { n: "02", h: "Trigger on the drift, not the departure", p: "Dormancy is visible weeks before it is complete: fewer sessions, smaller positions, a bridge out. Fire on the leading signal and reactivation rates roughly double against a 90-day sweep." },
  { n: "03", h: "Say what happened while they were gone", p: "The highest-performing reactivation message is specific and unflattering to send: what changed, what their position did, what they missed. Generic we-miss-you sends underperform by a wide margin." },
  { n: "04", h: "Segment by why they left", p: "Wallets that left after a fee change need different copy from wallets that left after a failed transaction. One segment, one reason, one message." },
  { n: "05", h: "Price the incentive against retained months", p: "An incentive that buys one transaction is a cost. One that buys seven months of activity is an investment. Model the incentive against the months-retained figure above before you set it." },
];
const RELATED = [
  { name: "Wallet reachability score", blurb: "What share of your holders you can actually message today.", href: "/tools/wallet-reachability-score" },
  { name: "Wallet churn rate", blurb: "The rate that produced these dormant wallets in the first place.", href: "/tools/wallet-churn-rate" },
  { name: "Cost per acquisition", blurb: "What replacing a dormant wallet with a new one costs you.", href: "/tools/cost-per-acquisition" },
];

export default function DormantPage() {
  const ld = { "@context": "https://schema.org", "@type": "WebApplication", name: "Dormant wallet reactivation calculator", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${SITE_URL}/tools/dormant-wallet-reactivation`, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return (
    <div style={themeVars}>
      <SiteHeader />
      <section style={{ ...wrap, padding: "56px 40px 0" }} data-pad>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13.5, color: "#767B83", display: "flex", gap: 8 }}>
          <a href="/tools" style={{ color: "#767B83", fontWeight: 500 }}>Tools</a>
          <span aria-hidden="true">/</span>
          <span style={{ color: "#42464D" }}>Dormant wallet reactivation</span>
        </nav>
        <h1 style={{ margin: "20px 0 0", fontSize: "clamp(38px,5vw,56px)", lineHeight: 1.04, letterSpacing: "-1px", fontWeight: 600, maxWidth: "20ch", color: "#010F31" }}>Dormant wallet reactivation calculator</h1>
        <p style={{ margin: "20px 0 0", maxWidth: "58ch", fontSize: 17, lineHeight: 1.65, color: "#585D65" }}>Most protocols hold more value in the wallets that stopped showing up than in the ones they are still acquiring. This puts a number on that.</p>
      </section>

      <section style={{ ...wrap, padding: "36px 40px 0" }} data-pad>
        <DormantReactivationCalc />
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
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 14 }}>Reactivation benchmarks</div>
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
            <p style={{ margin: "16px 0 0", fontSize: 12.5, lineHeight: 1.55, color: "#767B83" }}>Median across protocols onboarded last quarter.</p>
          </aside>
        </div>
      </section>

      <section style={{ ...wrap, padding: "8px 40px 0" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 20 }}>Five ways to move the number</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {TACTICS.map((t) => (
            <div key={t.n} style={{ display: "flex", gap: 20, padding: "20px 0", borderTop: "1px solid #ECEDEF" }}>
              <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, color: "#1727E0", flex: "none", width: 28 }}>{t.n}</span>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 600, letterSpacing: "-0.2px", color: "#010F31" }}>{t.h}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "#42464D" }}>{t.p}</p>
              </div>
            </div>
          ))}
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
