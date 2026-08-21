import { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import CompareHubFilter from "@/components/CompareHubFilter";

export const metadata: Metadata = {
  title: "Compare OnchainSuite",
  description:
    "Honest, current comparisons between OnchainSuite and the email platforms, web3 CRMs and airdrop tools teams evaluate alongside us, with an at-a-glance feature matrix.",
  alternates: { canonical: "/compare" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FBFBFC", overflowX: "clip", color: "#010F31" } as CSSProperties;
const wrap = { maxWidth: 1200, margin: "0 auto" };
const mono = "'JetBrains Mono',monospace";

const ICONS: Record<string, ReactNode> = {
  yes: <><circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5 5-6" /></>,
  part: <><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></>,
  no: <><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></>,
};
const COL: Record<string, string> = { yes: "#128355", part: "#42464D", no: "#9B2A2E" };

type Kind = "yes" | "part" | "no";
const MATRIX: { name: string; weight: number; price: string; cells: [string, Kind][] }[] = [
  { name: "OnchainSuite", weight: 600, price: "$0 to 5k wallets", cells: [["Native", "yes"], ["Wallet + email + push", "yes"], ["Both", "yes"]] },
  { name: "Customer.io", weight: 400, price: "$100/mo", cells: [["Via custom events", "part"], ["Email only", "part"], ["Both", "yes"]] },
  { name: "Braze", weight: 400, price: "Quote only", cells: [["Via data team", "part"], ["Email only", "part"], ["Both", "yes"]] },
  { name: "Dotdigital", weight: 400, price: "$150/mo", cells: [["None", "no"], ["Email only", "part"], ["Email", "part"]] },
  { name: "Formo", weight: 400, price: "$0 to 10k events", cells: [["Read-only", "part"], ["Wallet only", "part"], ["Neither", "no"]] },
  { name: "Galxe", weight: 400, price: "Rev share", cells: [["Quest-based", "part"], ["Wallet only", "part"], ["Neither", "no"]] },
];
const HEADS = ["Platform", "Wallet triggers", "Identity resolution", "Email + push", "Entry price"];
const headCell = { padding: "12px 16px", fontFamily: mono, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "#767B83" };

function Icon({ kind }: { kind: Kind }) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke={COL[kind]} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[kind]}</svg>
  );
}

export default function CompareHub() {
  return (
    <div style={themeVars}>
      <SiteHeader />

      <section style={{ ...wrap, padding: "76px 40px 44px" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83" }}>Compare</div>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(40px,5.5vw,60px)", lineHeight: 1.02, letterSpacing: "-1px", fontWeight: 600, maxWidth: "16ch", color: "#010F31" }}>Every tool your team already considered.</h1>
        <p style={{ margin: "22px 0 0", maxWidth: "58ch", fontSize: 17, lineHeight: 1.65, color: "#585D65" }}>Honest, current comparisons between OnchainSuite and the email platforms, web3 CRMs and airdrop tools teams evaluate alongside us. We name the cases where the other one wins.</p>
        <div style={{ display: "flex", gap: 28, marginTop: 34, flexWrap: "wrap", fontFamily: mono, fontSize: 12.5, color: "#585D65" }}>
          <span>9 comparisons</span><span style={{ color: "#DEE0E3" }}>/</span>
          <span>Updated April 2026</span><span style={{ color: "#DEE0E3" }}>/</span>
          <span>Pricing verified from public pages</span>
        </div>
      </section>

      <section style={{ ...wrap, padding: "0 40px 20px" }} data-pad>
        <CompareHubFilter />
      </section>

      {/* At a glance */}
      <section style={{ ...wrap, padding: "56px 40px 8px" }} data-pad>
        <h2 style={{ margin: "0 0 6px", fontSize: 30, letterSpacing: "-0.6px", fontWeight: 600, color: "#010F31" }}>At a glance</h2>
        <p style={{ margin: "0 0 22px", fontSize: 15, color: "#585D65" }}>The four questions that decide most evaluations.</p>
        <div style={{ border: "1px solid #DEE0E3", borderRadius: 6, overflow: "hidden", background: "#FFFFFF" }}>
          <div style={{ overflowX: "auto" }}>
            <div style={{ minWidth: 720 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(4,minmax(0,1fr))", background: "#F5F6F7", borderBottom: "1px solid #DEE0E3" }}>
                {HEADS.map((h) => (<div key={h} style={headCell}>{h}</div>))}
              </div>
              {MATRIX.map((row) => (
                <div key={row.name} style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(4,minmax(0,1fr))", borderBottom: "1px solid #ECEDEF" }}>
                  <div style={{ padding: "15px 20px", fontSize: 14.5, fontWeight: row.weight, color: "#010F31" }}>{row.name}</div>
                  {row.cells.map((c, i) => (
                    <div key={i} style={{ padding: "15px 16px", fontSize: 14, color: COL[c[1]], display: "flex", alignItems: "flex-start", gap: 7 }}>
                      <span style={{ flex: "none", display: "flex", paddingTop: 2 }}><Icon kind={c[1]} /></span>{c[0]}
                    </div>
                  ))}
                  <div style={{ padding: "15px 16px", fontSize: 14, fontFamily: mono, color: "#42464D" }}>{row.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={{ margin: "14px 0 0", fontSize: 12.5, color: "#767B83" }}>Sourced from public pricing and documentation, April 2026. Tell us if something here is out of date and we will correct it.</p>
      </section>

      {/* Closing CTA */}
      <section style={{ ...wrap, padding: "64px 40px 88px" }} data-pad>
        <div className="ocs-cmp-cta" style={{ background: "#010F31", borderRadius: 10, padding: "52px 48px", color: "#FFFFFF" }}>
          <div>
            <h2 style={{ margin: "0 0 12px", fontSize: 36, letterSpacing: "-0.8px", fontWeight: 600, lineHeight: 1.1, color: "#fff" }}>Still comparing? Bring your stack.</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#C4C7CC", maxWidth: "46ch" }}>Send us the tools you run today. We will map what stays, what OnchainSuite replaces, and what migration actually costs you in a 30-minute session.</p>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <a href="/early-access" style={{ background: "#1727E0", color: "#fff", height: 40, display: "inline-flex", alignItems: "center", padding: "0 20px", borderRadius: 4, fontWeight: 600, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>Book a walkthrough</a>
            <a href="/tools" style={{ border: "1px solid #42464D", color: "#fff", height: 40, display: "inline-flex", alignItems: "center", padding: "0 20px", borderRadius: 4, fontWeight: 600, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>Try a calculator</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <style>{`
        .ocs-cmp-cta { display:grid; grid-template-columns:1.3fr 1fr; gap:40px; align-items:center; }
        @media (max-width:900px){ .ocs-cmp-cta { grid-template-columns:1fr; } }
      `}</style>
    </div>
  );
}
