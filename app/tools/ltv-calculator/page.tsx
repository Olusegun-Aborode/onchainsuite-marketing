import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import LtvCalculator from "@/components/LtvCalculator";

export const metadata: Metadata = {
  title: "Wallet LTV Calculator",
  description:
    "Estimate the lifetime value of a wallet from revenue, churn, and margin, and see how much lower churn raises it. Free, no signup.",
  alternates: { canonical: "/tools/ltv-calculator" },
  openGraph: { title: "Wallet LTV Calculator · OnchainSuite", description: "Estimate wallet lifetime value and how retention raises it.", url: "/tools/ltv-calculator", type: "website" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FAFAF8", overflowX: "clip" } as CSSProperties;
const h2 = { margin: "48px 0 0", fontSize: 23, fontWeight: 700, letterSpacing: "-.02em", color: "#1A1A17" } as CSSProperties;
const p = { margin: "14px 0 0", fontSize: 16, lineHeight: 1.7, color: "#3D4A63" } as CSSProperties;

const FAQ = [
  { q: "What is wallet lifetime value?", a: "Wallet LTV is the total revenue a wallet brings over its active life, from its first transaction to the point it churns." },
  { q: "How is wallet LTV calculated?", a: "LTV is monthly revenue per wallet times the average lifespan (1 divided by monthly churn) times gross margin." },
  { q: "How do you increase wallet LTV?", a: "Lower churn so wallets stay longer, grow revenue per wallet with usage-based incentives, and reactivate dormant wallets before they are gone." },
];

export default function LtvCalculatorPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <div style={themeVars}>
      <SiteHeader />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "76px 32px 8px" }} data-pad>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: ACCENT, fontWeight: 600 }}>Free tool</div>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(30px,4vw,46px)", lineHeight: 1.04, letterSpacing: "-.03em", fontWeight: 700, color: "#1A1A17" }}>
          Wallet LTV calculator
        </h1>
        <p style={{ margin: "18px 0 26px", fontSize: 18, lineHeight: 1.6, color: "#3D4A63" }}>
          A wallet is worth its revenue for as long as it stays active. Set your numbers to estimate lifetime value, and
          see how much lower churn is worth.
        </p>
        <LtvCalculator />

        <h2 style={h2}>What is wallet lifetime value?</h2>
        <p style={p}>
          Wallet LTV is the total revenue a wallet brings over its active life, from its first transaction to the point
          it stops coming back. It is the number that tells you how much you can afford to spend acquiring and keeping a
          wallet.
        </p>

        <h2 style={h2}>How is wallet LTV calculated?</h2>
        <p style={p}>Multiply what a wallet earns each month by how long it stays, then keep only the margin.</p>
        <p style={{ margin: "14px 0 0", padding: "14px 16px", background: "#fff", border: "1px solid #DCE7F5", borderRadius: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 14.5, color: "#1A1A17" }}>
          LTV = monthly revenue × lifespan × margin, where lifespan = 1 / monthly churn
        </p>
        <p style={p}>
          At $40 a month, 8% monthly churn (about a 12-month lifespan), and 80% margin, a wallet is worth roughly $400.
          Cut churn to 6% and the same wallet is worth about $530.
        </p>

        <h2 style={h2}>Why LTV matters for protocols</h2>
        <p style={p}>
          LTV sets your ceiling on acquisition and retention spend, and it shows what retention is really worth. Because
          lifespan is one over churn, small drops in churn compound into large gains in LTV. That is why keeping wallets
          usually beats chasing new ones.
        </p>

        <h2 style={h2}>How to raise wallet LTV</h2>
        <ol style={{ margin: "16px 0 0", paddingLeft: 20 }}>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Lower churn.</strong> Every point of churn you remove stretches the average lifespan and lifts LTV.</li>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Grow revenue per wallet.</strong> Usage-based incentives and well-timed nudges move wallets to higher-value actions.</li>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Reactivate dormant wallets.</strong> A win-back Play brings cold wallets back into their active life instead of losing them.</li>
        </ol>
        <p style={p}>
          OnchainSuite runs these as automated Plays, triggered by what wallets do on-chain.{" "}
          <a href="/early-access" style={{ color: ACCENT, fontWeight: 600 }}>Connect With Sales</a>.
        </p>

        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: ACCENT, fontWeight: 600, margin: "52px 0 0" }}>Related tools</div>
        <div style={{ marginTop: 14, borderTop: "1px solid #DCE7F5" }}>
          {[
            { href: "/tools/churn-calculator", title: "Wallet churn cost calculator", desc: "What churn costs per year, and what retention could win back." },
            { href: "/tools", title: "All tools", desc: "Every free calculator for Web3 growth teams." },
          ].map((t) => (
            <a key={t.href} href={t.href} className="ocs-idx-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px 14px", borderBottom: "1px solid #DCE7F5", textDecoration: "none" }}>
              <div>
                <div className="ocs-idx-title" style={{ fontSize: 16, fontWeight: 700, color: "#1A1A17" }}>{t.title}</div>
                <div style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.5, color: "#3D4A63" }}>{t.desc}</div>
              </div>
              <span style={{ fontSize: 18, color: ACCENT, flex: "none" }} aria-hidden="true">→</span>
            </a>
          ))}
        </div>
        <div style={{ height: 32 }} />
      </main>
      <SiteFooter />
      <style>{`.ocs-idx-row{transition:background .15s ease;border-radius:10px}.ocs-idx-row:hover{background:#F1F6FE}.ocs-idx-row:hover .ocs-idx-title{color:var(--acc)}`}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  );
}
