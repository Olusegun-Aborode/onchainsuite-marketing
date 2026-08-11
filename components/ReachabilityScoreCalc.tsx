"use client";

import { ReactNode, useState } from "react";

const mono = "'JetBrains Mono',monospace";
const num = (n: number) => Math.round(n).toLocaleString("en-US");

const ICONS: Record<string, ReactNode> = {
  send: <path d="M21 3 10.5 13.5M21 3 14 21l-3.5-7.5L3 10z" />,
  wallet: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 9.5h18M16 12.5h2" /></>,
  bell: <><path d="M6 9a6 6 0 0112 0c0 4.5 1.5 5.5 2 6H4c.5-.5 2-1.5 2-6z" /><path d="M10 20a2 2 0 004 0" /></>,
  network: <><circle cx="6.5" cy="7" r="2" /><circle cx="17.5" cy="9" r="2" /><circle cx="10" cy="18" r="2" /><path d="M8.2 8 9.2 16M16 10.5 11.4 17M8.5 7h7" /></>,
};

const DEFS = [
  { key: "email", label: "Verified email addresses", icon: "send", weight: 1.0, hint: "Confirmed, not bounced. The only channel that survives a device change." },
  { key: "inbox", label: "Wallet inbox enabled", icon: "wallet", weight: 0.8, hint: "Wallets that can receive an onchain-native message today." },
  { key: "push", label: "Push tokens", icon: "bell", weight: 0.65, hint: "App or browser push, live in the last 90 days." },
  { key: "socials", label: "Linked socials", icon: "network", weight: 0.35, hint: "Farcaster, Telegram or Discord handles you can DM." },
] as const;
const COLORS: Record<string, string> = { email: "#2F94FF", inbox: "#1727E0", push: "#FF6828", socials: "#8B7CF6" };

export default function ReachabilityScoreCalc() {
  const [total, setTotal] = useState(60000);
  const [vals, setVals] = useState<Record<string, number>>({ email: 14000, inbox: 21000, push: 9000, socials: 4000 });
  const [overlap, setOverlap] = useState(26);
  const set = (k: string, v: number) => setVals((p) => ({ ...p, [k]: Math.max(0, v) }));

  const weightedRaw = DEFS.reduce((sum, d) => sum + Math.min(vals[d.key], total) * d.weight, 0);
  const deduped = weightedRaw * (1 - overlap / 100);
  const reachable = Math.min(deduped, total);
  const score = total > 0 ? Math.round((reachable / total) * 100) : 0;
  const band =
    score >= 60 ? { grade: "Strong", color: "#128355", verdict: "Most of your base is addressable. Segmentation, not collection, is your constraint." } :
    score >= 40 ? { grade: "Workable", color: "#B53C0B", verdict: "You can run real campaigns, but roughly half your value is sitting in wallets you cannot speak to." } :
    score >= 20 ? { grade: "Thin", color: "#B53C0B", verdict: "Every campaign result you read is a minority sample of your actual audience." } :
    { grade: "Blind", color: "#9B2A2E", verdict: "You are measuring a base you cannot reach. Collection comes before any messaging spend." };

  const bars = DEFS.map((d) => ({ color: COLORS[d.key], width: ((Math.min(vals[d.key], total) * d.weight * (1 - overlap / 100)) / Math.max(total, 1) * 100).toFixed(1) + "%" }));
  const gap = DEFS.map((d) => ({ d, headroom: (total - Math.min(vals[d.key], total)) * d.weight })).sort((a, b) => b.headroom - a.headroom)[0];
  const lift = total > 0 ? Math.round((gap.headroom * 0.25 * (1 - overlap / 100) / total) * 100) : 0;

  const steps = DEFS.map((d) => ({ label: `${d.label} × ${d.weight.toFixed(2)}`, value: num(Math.min(vals[d.key], total) * d.weight) }))
    .concat([
      { label: `− overlap ${overlap}%`, value: "(" + num(weightedRaw * (overlap / 100)) + ")" },
      { label: `Reachable wallets of ${num(total)}`, value: num(reachable) },
    ]);

  return (
    <div className="ocs-calc-grid" style={{ alignItems: "start" }}>
      <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 28 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 600, letterSpacing: "-0.2px", color: "#010F31" }}>Your channels</h2>
        <p style={{ margin: "0 0 22px", fontSize: 14, color: "#585D65" }}>Enter how many wallets you can reach on each channel. Weights reflect how durable each one is.</p>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: 14.5, fontWeight: 500, marginBottom: 8, color: "#010F31" }}>Total wallets</label>
          <input type="number" value={total} onChange={(e) => setTotal(Math.max(0, Number(e.target.value) || 0))} className="ocs-v2-input" style={{ width: "100%", boxSizing: "border-box", border: "1px solid #DEE0E3", borderRadius: 4, padding: "11px 12px", fontFamily: mono, fontSize: 15, outline: "none", color: "#010F31" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {DEFS.map((d) => (
            <div key={d.key}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke={COLORS[d.key]} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[d.icon]}</svg>
                <label style={{ fontSize: 14.5, fontWeight: 500, color: "#010F31" }}>{d.label}</label>
                <span style={{ marginLeft: "auto", fontFamily: mono, fontSize: 12, color: "#767B83" }}>×{d.weight.toFixed(2)}</span>
              </div>
              <input type="number" value={vals[d.key]} onChange={(e) => set(d.key, Number(e.target.value) || 0)} className="ocs-v2-input" style={{ width: "100%", boxSizing: "border-box", border: "1px solid #DEE0E3", borderRadius: 4, padding: "11px 12px", fontFamily: mono, fontSize: 15, outline: "none", color: "#010F31" }} />
              <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.55, color: "#767B83" }}>{d.hint}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <label style={{ fontSize: 14.5, fontWeight: 500, color: "#010F31" }}>Channel overlap</label>
            <span style={{ fontFamily: mono, fontSize: 14, color: "#010F31" }}>{overlap}%</span>
          </div>
          <input type="range" min={0} max={80} step={1} value={overlap} onChange={(e) => setOverlap(Number(e.target.value))} style={{ width: "100%", accentColor: "#1727E0" }} />
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#767B83" }}>Share of reachable wallets addressable on more than one channel.</p>
        </div>

        <div style={{ marginTop: 26, borderTop: "1px solid #ECEDEF", paddingTop: 22 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 12 }}>Coverage of total base</div>
          <div style={{ display: "flex", height: 10, borderRadius: 2, overflow: "hidden", background: "#ECEDEF" }}>
            {bars.map((b, i) => (<span key={i} style={{ width: b.width, background: b.color, display: "block" }} />))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", marginTop: 12 }}>
            {DEFS.map((d) => (
              <span key={d.key} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "#585D65" }}>
                <span style={{ width: 9, height: 9, borderRadius: 2, background: COLORS[d.key] }} />
                {d.label.split(" ")[0]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="ocs-calc-side" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 28 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83" }}>Worksheet</div>
          <div style={{ marginTop: 18, display: "flex", flexDirection: "column" }}>
            {steps.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "9px 0", borderBottom: "1px dashed #ECEDEF" }}>
                <span style={{ fontSize: 14, color: "#585D65" }}>{s.label}</span>
                <span style={{ fontFamily: mono, fontSize: 14.5, fontVariantNumeric: "tabular-nums", color: "#010F31", whiteSpace: "nowrap" }}>{s.value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "16px 0 0", borderTop: "2px solid #010F31", marginTop: 10 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#010F31" }}>Reachability score</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: band.color }}>{band.grade}</div>
            </div>
            <span style={{ marginLeft: "auto", flex: "none", fontFamily: mono, fontSize: 30, fontWeight: 500, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.5px", borderBottom: "2px solid #FF6828", paddingBottom: 2, color: "#010F31" }}>{score}</span>
          </div>
          <p style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.6, color: "#585D65" }}>{band.verdict}</p>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderLeft: "2px solid #FF6828", borderRadius: 6, padding: 22 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 10 }}>Biggest single gain</div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#42464D" }}>Closing a quarter of the gap on {gap.d.label.toLowerCase()} would lift your score by roughly {lift} points. It is the largest weighted headroom in your base right now.</p>
        </div>
      </div>

      <style>{`
        .ocs-calc-grid { display:grid; grid-template-columns:minmax(0,1fr) 400px; gap:16px; }
        .ocs-calc-side { position:sticky; top:88px; }
        .ocs-v2-input:focus { border-color:#FF6828 !important; box-shadow:0 0 0 3px rgba(255,104,40,0.28); }
        @media (max-width:1024px){ .ocs-calc-grid { grid-template-columns:1fr; } .ocs-calc-side { position:static; } }
      `}</style>
    </div>
  );
}
