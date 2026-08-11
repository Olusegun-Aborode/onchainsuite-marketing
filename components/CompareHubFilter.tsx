"use client";

import { useState } from "react";

const mono = "'JetBrains Mono',monospace";

const DATA = [
  { name: "Customer.io", slug: "customer-io", category: "Lifecycle messaging", status: "Head to head", blurb: "Strong event-driven messaging for web2 apps. We compare its event pipeline against native wallet triggers." },
  { name: "Braze", slug: "braze", category: "Enterprise CRM", status: "Enterprise", blurb: "Enterprise scale and price. Where Braze needs a data team to see onchain behaviour, we index it for you." },
  { name: "Dotdigital", slug: "dotdigital", category: "Email marketing", status: "Head to head", blurb: "Mature ecommerce email suite. The gap shows the moment your audience is a wallet, not a customer record." },
  { name: "EmailOctopus", slug: "emailoctopus", category: "Email marketing", status: "Budget", blurb: "Cheap broadcast email. Fine for a newsletter, no segmentation on anything that happens onchain." },
  { name: "SendGrid", slug: "sendgrid", category: "Email infrastructure", status: "Infrastructure", blurb: "A delivery API, not a marketing platform. Many teams keep it underneath us rather than instead of us." },
  { name: "Brevo", slug: "brevo", category: "SMB suite", status: "Budget", blurb: "Email, SMS and chat in one SMB bundle. We compare its automation ceiling with onchain automations." },
  { name: "Formo", slug: "formo", category: "Web3 analytics", status: "Web3 native", blurb: "Onchain product analytics with forms. Strong at measurement, thinner once you need to act on a segment." },
  { name: "Addressable", slug: "addressable", category: "Web3 growth", status: "Web3 native", blurb: "Wallet-to-social targeting for paid acquisition. Different job: they buy attention, we own the relationship." },
  { name: "Galxe", slug: "galxe", category: "Quests and rewards", status: "Web3 native", blurb: "Quests, credentials and campaigns. We compare one-off incentive spikes against retained, messaged users." },
];
const GROUPS = ["All", "Email marketing", "Web3 native", "Enterprise"];
const arrow = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
);

export default function CompareHubFilter() {
  const [filter, setFilter] = useState("All");
  const inGroup = (c: (typeof DATA)[number]) =>
    filter === "All" || c.category === filter || (filter === "Web3 native" && c.status === "Web3 native") || (filter === "Enterprise" && c.status === "Enterprise");
  const cards = DATA.filter(inGroup);

  return (
    <>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "0 0 24px" }}>
        {GROUPS.map((g) => {
          const on = g === filter;
          return (
            <button key={g} type="button" onClick={() => setFilter(g)} style={{ border: `1px solid ${on ? "#010F31" : "#DEE0E3"}`, background: on ? "#010F31" : "#FFFFFF", color: on ? "#FFFFFF" : "#42464D", fontFamily: "'Instrument Sans',sans-serif", fontSize: 13, fontWeight: 500, padding: "8px 14px", borderRadius: 2, cursor: "pointer" }}>
              {g}
            </button>
          );
        })}
      </div>

      <div className="ocs-cmp-grid">
        {cards.map((c) => (
          <a key={c.slug} href={`/compare/${c.slug}`} className="ocs-v2-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 24, minHeight: 236, textDecoration: "none" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, minHeight: 22 }}>
                <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#767B83", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.category}</span>
                <span style={{ flex: "none", fontSize: 11, color: "#585D65", background: "#F5F6F7", border: "1px solid #DEE0E3", borderRadius: 2, padding: "3px 8px", whiteSpace: "nowrap" }}>{c.status}</span>
              </div>
              <h3 style={{ margin: "16px 0 8px", fontSize: 22, fontWeight: 600, letterSpacing: "-0.3px", color: "#010F31" }}>Onchain Suite vs {c.name}</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#585D65" }}>{c.blurb}</p>
            </div>
            <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 600, color: "#1727E0" }}>Read the comparison {arrow}</div>
          </a>
        ))}
      </div>

      <style>{`
        .ocs-cmp-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
        .ocs-v2-card { transition:border-color .12s ease, box-shadow .12s ease; }
        .ocs-v2-card:hover { border-color:#C4C7CC; box-shadow:0 1px 2px rgba(1,15,49,0.06); }
        @media (max-width:1024px){ .ocs-cmp-grid { grid-template-columns:1fr 1fr; } }
        @media (max-width:680px){ .ocs-cmp-grid { grid-template-columns:1fr; } }
      `}</style>
    </>
  );
}
