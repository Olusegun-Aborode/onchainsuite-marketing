"use client";

import { useState } from "react";

const mono = "'JetBrains Mono',monospace";
const num = (n: number) => Math.round(n).toLocaleString("en-US");
const money = (n: number) => {
  const r = Math.round(n);
  if (r >= 1000000) return "$" + (r / 1000000).toFixed(2) + "M";
  if (r >= 1000) return "$" + (r / 1000).toFixed(1) + "k";
  return "$" + r;
};

const PERIODS = ["Weekly", "Monthly", "Quarterly"] as const;
type Period = (typeof PERIODS)[number];
const MONTHS_IN: Record<Period, number> = { Weekly: 0.25, Monthly: 1, Quarterly: 3 };

function Field({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 14.5, fontWeight: 500, marginBottom: 8, color: "#010F31" }}>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="ocs-v2-input"
        style={{ width: "100%", boxSizing: "border-box", border: "1px solid #DEE0E3", borderRadius: 4, padding: "11px 12px", fontFamily: mono, fontSize: 15, outline: "none", color: "#010F31" }}
      />
    </div>
  );
}

export default function WalletChurnRateCalc() {
  const [start, setStart] = useState(24000);
  const [lost, setLost] = useState(3120);
  const [gained, setGained] = useState(4100);
  const [arpw, setArpw] = useState(22);
  const [period, setPeriod] = useState<Period>("Monthly");

  const monthsIn = MONTHS_IN[period];
  const churn = start > 0 ? lost / start : 0;
  const monthly = 1 - Math.pow(1 - churn, 1 / monthsIn);
  const annual = 1 - Math.pow(1 - monthly, 12);
  const lifespan = monthly > 0 ? 1 / monthly : 0;
  const ltv = lifespan * arpw;
  const net = gained - lost;
  const netRate = start > 0 ? (net / start) * 100 : 0;

  const curve = Array.from({ length: 12 }, (_, i) => {
    const remain = Math.pow(1 - monthly, i + 1);
    return { m: i + 1, height: Math.max(remain * 100, 1.5).toFixed(1) + "%", color: remain >= 0.5 ? "#2F94FF" : remain >= 0.2 ? "#1727E0" : "#DEE0E3" };
  });

  const steps = [
    { label: "Active at start", value: num(start) },
    { label: "Went inactive", value: "(" + num(lost) + ")" },
    { label: "Still active at end", value: num(Math.max(start - lost, 0)) },
    { label: "New wallets acquired", value: "+" + num(gained) },
  ];
  const outputs = [
    { label: "Normalised monthly churn", value: (monthly * 100).toFixed(1) + "%", color: "#010F31" },
    { label: "Compounds to annually", value: (annual * 100).toFixed(1) + "%", color: "#B53C0B" },
    { label: "Average wallet lifespan", value: lifespan > 0 ? lifespan.toFixed(1) + " mo" : "—", color: "#010F31" },
    { label: "Lifetime value per wallet", value: money(ltv), color: "#010F31" },
    { label: "Revenue lost this period", value: money(lost * arpw * monthsIn), color: "#010F31" },
  ];
  const netNote = net >= 0
    ? `You added ${num(net)} wallets net this period, growth of ${netRate.toFixed(1)}% on the starting base. At this churn rate you must keep acquiring ${num(lost)} wallets a period just to stand still.`
    : `You lost ${num(Math.abs(net))} wallets net this period, a contraction of ${Math.abs(netRate).toFixed(1)}%. Acquisition is not covering churn; reactivation is cheaper than closing this gap with new wallets.`;
  const churnNote = period === "Monthly"
    ? "Of the wallets active at the start of the month, this share did not transact again."
    : `Measured over your ${period.toLowerCase()} period, then normalised to a monthly rate below.`;

  return (
    <div className="ocs-calc-grid" style={{ alignItems: "start" }}>
      {/* Input surface */}
      <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 28 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 600, color: "#010F31" }}>One cohort, one period</h2>
        <p style={{ margin: "0 0 22px", fontSize: 14, color: "#585D65" }}>Count a wallet as active if it transacted at least once in the period.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <Field label="Active wallets at start" value={start} onChange={setStart} />
          <Field label="Wallets that went inactive" value={lost} onChange={setLost} />
          <Field label="New wallets acquired" value={gained} onChange={setGained} />
          <Field label="Monthly revenue per active wallet" value={arpw} onChange={setArpw} />
        </div>

        <div style={{ marginTop: 22 }}>
          <label style={{ display: "block", fontSize: 14.5, fontWeight: 500, marginBottom: 10, color: "#010F31" }}>Period length</label>
          <div style={{ display: "flex", gap: 8 }}>
            {PERIODS.map((p) => {
              const on = p === period;
              return (
                <button key={p} type="button" onClick={() => setPeriod(p)} style={{ border: `1px solid ${on ? "#010F31" : "#DEE0E3"}`, background: on ? "#010F31" : "#FFFFFF", color: on ? "#FFFFFF" : "#42464D", fontFamily: "'Instrument Sans',sans-serif", fontSize: 13.5, fontWeight: 500, padding: "9px 16px", borderRadius: 2, cursor: "pointer" }}>
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 28, borderTop: "1px solid #ECEDEF", paddingTop: 24 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#010F31" }}>Retention curve at this rate</h3>
            <span style={{ fontFamily: mono, fontSize: 12, color: "#767B83" }}>12 months, no reactivation</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 130 }}>
            {curve.map((c) => (
              <div key={c.m} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: 6, height: "100%" }}>
                <span style={{ width: "100%", background: c.color, height: c.height, borderRadius: "2px 2px 0 0", display: "block" }} />
                <span style={{ fontFamily: mono, fontSize: 10, color: "#767B83" }}>{c.m}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: "12px 0 0", fontSize: 13, color: "#767B83" }}>Each bar is the share of today&apos;s active cohort still active in that month, if nothing changes.</p>
        </div>
      </div>

      {/* Worksheet + net movement */}
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
              <div style={{ fontSize: 15, fontWeight: 600, color: "#010F31" }}>{period} churn</div>
              <div style={{ fontSize: 13, color: "#767B83" }}>Wallets, not accounts</div>
            </div>
            <span style={{ marginLeft: "auto", flex: "none", fontFamily: mono, fontSize: 30, fontWeight: 500, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.5px", borderBottom: "2px solid #FF6828", paddingBottom: 2, color: "#010F31" }}>
              {(churn * 100).toFixed(1)}%
            </span>
          </div>

          <p style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.6, color: "#585D65" }}>{churnNote}</p>

          <div style={{ marginTop: 22, borderTop: "1px solid #ECEDEF", paddingTop: 18, display: "flex", flexDirection: "column", gap: 13 }}>
            {outputs.map((o) => (
              <div key={o.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
                <span style={{ fontSize: 14, color: "#585D65" }}>{o.label}</span>
                <span style={{ fontFamily: mono, fontSize: 14.5, fontVariantNumeric: "tabular-nums", color: o.color }}>{o.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderLeft: "2px solid #FF6828", borderRadius: 6, padding: 22 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 10 }}>Net movement</div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#42464D" }}>{netNote}</p>
        </div>
      </div>

      <style>{`
        .ocs-calc-grid { display:grid; grid-template-columns:minmax(0,1fr) 400px; gap:16px; }
        .ocs-calc-side { position:sticky; top:88px; }
        .ocs-v2-input:focus { border-color:#FF6828 !important; box-shadow:0 0 0 3px rgba(255,104,40,0.28); }
        @media (max-width:1024px){
          .ocs-calc-grid { grid-template-columns:1fr; }
          .ocs-calc-side { position:static; }
        }
      `}</style>
    </div>
  );
}
