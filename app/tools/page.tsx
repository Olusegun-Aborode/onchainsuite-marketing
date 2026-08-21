import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";

export const metadata: Metadata = {
  title: "Free tools",
  description: "Free, no-signup calculators for Web3 growth teams: cost per acquisition, dormant wallet reactivation, wallet reachability, and wallet churn rate.",
  alternates: { canonical: "/tools" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FBFBFC", overflowX: "clip", color: "#010F31" } as CSSProperties;
const wrap = { maxWidth: 1200, margin: "0 auto" };
const mono = "'JetBrains Mono',monospace";
const arrow = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
);

const FEATURED_INPUTS = [
  { label: "Dormant wallets", unit: "count" },
  { label: "Reachable share", unit: "%" },
  { label: "Reactivation rate", unit: "%" },
  { label: "Revenue per active wallet", unit: "$/mo" },
  { label: "Months retained", unit: "months" },
];
const TOOLS = [
  { name: "Cost per acquisition calculator", category: "Acquisition", status: "Live", blurb: "Spend by channel against wallets that actually transacted, so a connect stops counting as an acquisition.", href: "/tools/cost-per-acquisition" },
  { name: "Wallet reachability score", category: "Audience", status: "Live", blurb: "Score how much of your base you can message across email, wallet inbox, push and socials, deduplicated.", href: "/tools/wallet-reachability-score" },
  { name: "Wallet churn rate calculator", category: "Retention", status: "Live", blurb: "One cohort, one period, then the compounding annual rate and the wallet lifespan it implies.", href: "/tools/wallet-churn-rate" },
];

export default function ToolsHub() {
  return (
    <div style={themeVars}>
      <SiteHeader />

      <section style={{ ...wrap, padding: "76px 40px 44px" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83" }}>Free tools</div>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(40px,5.5vw,60px)", lineHeight: 1.02, letterSpacing: "-1px", fontWeight: 600, maxWidth: "17ch", color: "#010F31" }}>Calculators for teams who measure in wallets.</h1>
        <p style={{ margin: "22px 0 0", maxWidth: "56ch", fontSize: 17, lineHeight: 1.65, color: "#585D65" }}>No signup, no email gate, no export wall. Every tool runs in the browser and every formula is written out on the page.</p>
      </section>

      {/* Featured */}
      <section style={{ ...wrap, padding: "0 40px 20px" }} data-pad>
        <a href="/tools/dormant-wallet-reactivation" className="ocs-v2-card ocs-featured" style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 36, textDecoration: "none", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#FF6828" }}>Most used</span>
            <h2 style={{ margin: "14px 0 10px", fontSize: 34, letterSpacing: "-0.7px", fontWeight: 600, lineHeight: 1.12, color: "#010F31" }}>Dormant wallet reactivation calculator</h2>
            <p style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.65, color: "#585D65", maxWidth: "52ch" }}>Put a number on the revenue sitting in wallets that stopped showing up, and see how much of it reachability is costing you.</p>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14.5, fontWeight: 600, color: "#1727E0" }}>Open tool {arrow}</span>
          </div>
          <div style={{ border: "1px solid #DEE0E3", borderRadius: 6, padding: 24, background: "#FBFBFC" }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 14 }}>What it asks you for</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {FEATURED_INPUTS.map((i) => (
                <div key={i.label} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "9px 0", borderBottom: "1px dashed #ECEDEF", fontSize: 14, color: "#42464D" }}>
                  <span>{i.label}</span>
                  <span style={{ fontFamily: mono, color: "#767B83" }}>{i.unit}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: "14px 0 0", fontSize: 13, lineHeight: 1.55, color: "#767B83" }}>Six inputs, one worksheet, no email gate.</p>
          </div>
        </a>
      </section>

      {/* 3-up grid */}
      <section style={{ ...wrap, padding: "16px 40px 0" }} data-pad>
        <div className="ocs-tools-grid">
          {TOOLS.map((t) => (
            <a key={t.href} href={t.href} className="ocs-v2-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 24, minHeight: 216, textDecoration: "none" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#767B83", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.category}</span>
                  <span style={{ flex: "none", fontSize: 11, fontWeight: 500, color: "#128355", background: "#E7F4EE", border: "1px solid #C7E6D6", borderRadius: 2, padding: "2px 8px" }}>{t.status}</span>
                </div>
                <h3 style={{ margin: "16px 0 8px", fontSize: 20, fontWeight: 600, letterSpacing: "-0.3px", color: "#010F31" }}>{t.name}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#585D65" }}>{t.blurb}</p>
              </div>
              <span style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 600, color: "#1727E0" }}>Open tool {arrow}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Why band */}
      <section style={{ ...wrap, padding: "64px 40px 0" }} data-pad>
        <div className="ocs-why-grid" style={{ borderTop: "1px solid #DEE0E3", paddingTop: 36 }}>
          {[
            { h: "Why we publish the maths", p: "A calculator that hides its formula is a lead form. Every input, weight and benchmark on these pages is stated on the page so you can argue with it." },
            { h: "Where the benchmarks come from", p: "Aggregated, anonymised medians across protocols using OnchainSuite, refreshed quarterly. Directional guidance, never a projection of your results." },
            { h: "Nothing leaves your browser", p: "Inputs are calculated locally and never sent to us. Use real numbers." },
          ].map((c) => (
            <div key={c.h}>
              <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 600, color: "#010F31" }}>{c.h}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.68, color: "#585D65" }}>{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ ...wrap, padding: "56px 40px 88px" }} data-pad>
        <div style={{ background: "#F5F6F7", border: "1px solid #DEE0E3", borderRadius: 6, padding: 40, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: "0 0 8px", fontSize: 28, letterSpacing: "-0.6px", fontWeight: 600, color: "#010F31" }}>Want the same numbers on live data?</h2>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#585D65", maxWidth: "56ch" }}>Connect a contract and these calculators stop being estimates. Free to five thousand wallets.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/early-access" style={{ background: "#1727E0", color: "#FFFFFF", padding: "12px 20px", borderRadius: 4, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Start free</a>
            <a href="/compare" style={{ border: "1px solid #DEE0E3", background: "#FFFFFF", color: "#010F31", padding: "12px 20px", borderRadius: 4, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Compare us first</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <style>{`
        .ocs-featured { display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,1fr); gap:44px; }
        .ocs-tools-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
        .ocs-why-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:44px; }
        .ocs-v2-card { transition:border-color .12s ease; }
        .ocs-v2-card:hover { border-color:#C4C7CC; }
        @media (max-width:1024px){
          .ocs-featured, .ocs-tools-grid, .ocs-why-grid { grid-template-columns:1fr; gap:24px; }
        }
      `}</style>
    </div>
  );
}
