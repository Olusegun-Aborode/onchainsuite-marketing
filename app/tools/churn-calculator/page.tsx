import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import ChurnCalculator from "@/components/ChurnCalculator";

export const metadata: Metadata = {
  title: "Wallet Churn Cost Calculator",
  description:
    "Estimate what wallet churn costs your protocol each year, and how much revenue behaviour-triggered retention could win back. Free, no signup.",
  alternates: { canonical: "/tools/churn-calculator" },
  openGraph: { title: "Wallet Churn Cost Calculator · OnchainSuite", description: "See the annual cost of wallet churn and what retention could recover.", url: "/tools/churn-calculator", type: "website" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FAFAF8", overflowX: "clip" } as CSSProperties;
const h2 = { margin: "48px 0 0", fontSize: 23, fontWeight: 700, letterSpacing: "-.02em", color: "#1A1A17" } as CSSProperties;
const p = { margin: "14px 0 0", fontSize: 16, lineHeight: 1.7, color: "#3D4A63" } as CSSProperties;

const FAQ = [
  { q: "What is wallet churn?", a: "Wallet churn is the share of active wallets that stop coming back over a period. Measured against your active base, it shows how much of your traction you give back each month." },
  { q: "How is churn rate calculated?", a: "Churn rate is the wallets lost in a period divided by the wallets active at the start, times 100. Start a month with 5,000 active wallets and lose 400, and monthly churn is 8%." },
  { q: "What is a good churn rate?", a: "It depends on your model and the value of a wallet. Crypto swings harder than SaaS, so churn runs higher, and 8% a month compounds to about 63% a year. Read it next to lifetime value." },
];

export default function ChurnCalculatorPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <div style={themeVars}>
      <SiteHeader />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "76px 32px 8px" }} data-pad>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: ACCENT, fontWeight: 600 }}>Free tool</div>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(30px,4vw,46px)", lineHeight: 1.04, letterSpacing: "-.03em", fontWeight: 700, color: "#1A1A17" }}>
          Wallet churn cost calculator
        </h1>
        <p style={{ margin: "18px 0 26px", fontSize: 18, lineHeight: 1.6, color: "#3D4A63" }}>
          Churn is quiet. Wallets stop coming back and nothing flags it. Set your numbers to see what that costs in a
          year, and how much a retention layer could win back.
        </p>
        <ChurnCalculator />

        <h2 style={h2}>What is wallet churn?</h2>
        <p style={p}>
          Wallet churn is the share of active wallets that stop coming back over a period. For a protocol it is the
          quiet loss: a wallet deposits, then goes cold, and nothing flags it. Measured against your active base, it
          tells you how much of your traction you give back each month.
        </p>

        <h2 style={h2}>How is churn rate calculated?</h2>
        <p style={p}>
          Churn rate is the wallets you lost in a period divided by the wallets active at the start, times 100.
        </p>
        <p style={{ margin: "14px 0 0", padding: "14px 16px", background: "#fff", border: "1px solid #DCE7F5", borderRadius: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 14.5, color: "#1A1A17" }}>
          churn rate = wallets lost / wallets at start × 100
        </p>
        <p style={p}>
          Start the month with 5,000 active wallets and lose 400, and your monthly churn is 8%. Most teams track it
          monthly, then keep an eye on the annual figure.
        </p>

        <h2 style={h2}>What counts as a good churn rate?</h2>
        <p style={p}>
          It depends on your model and the value of a wallet. Crypto swings harder than SaaS, so wallet churn tends to
          run higher. The trap is compounding: 8% a month feels small, but works out near 63% over a year. Read churn
          next to lifetime value, not on its own.
        </p>

        <h2 style={h2}>How to reduce wallet churn</h2>
        <ol style={{ margin: "16px 0 0", paddingLeft: 20 }}>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Act on the moment, not the report.</strong> Trigger a message the second a wallet unstakes or goes quiet, not a week later in a dashboard.</li>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Win wallets back before they are gone.</strong> A dormant-wallet Play nudges wallets going cold and recovers a share you would otherwise write off.</li>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Reward the wallets that stay.</strong> Usage-based incentives and loyalty keep power wallets active and pull lifetime value up.</li>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Reach wallets you have no email for.</strong> In-app push needs only the address, so you can still reach wallets no email tool can.</li>
          <li style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.65, color: "#3D4A63" }}><strong style={{ color: "#1A1A17" }}>Learn why they leave.</strong> Segment churned wallets by what they did last and fix the drop-off.</li>
        </ol>
        <p style={p}>
          OnchainSuite runs each of these as an automated Play, triggered by real on-chain behaviour.{" "}
          <a href="/early-access" style={{ color: ACCENT, fontWeight: 600 }}>Connect With Sales</a>.
        </p>

        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: ACCENT, fontWeight: 600, margin: "52px 0 0" }}>Related tools</div>
        <div style={{ marginTop: 14, borderTop: "1px solid #DCE7F5" }}>
          {[
            { href: "/tools/ltv-calculator", title: "Wallet LTV calculator", desc: "Lifetime value per wallet, and what lower churn is worth." },
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
