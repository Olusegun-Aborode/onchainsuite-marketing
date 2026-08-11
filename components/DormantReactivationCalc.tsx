"use client";

import { useState } from "react";

const mono = "'JetBrains Mono',monospace";
const num = (n: number) => Math.round(n).toLocaleString("en-US");
const fmt = (n: number) => {
  const r = Math.round(n);
  if (r >= 1000000) return "$" + (r / 1000000).toFixed(2) + "M";
  if (r >= 1000) return "$" + (r / 1000).toFixed(1) + "k";
  return "$" + r;
};

type Unit = "wallets" | "%" | "USD" | "months";
const display = (v: number, unit: Unit) =>
  unit === "%" ? v + "%" : unit === "USD" ? "$" + num(v) : unit === "months" ? v + " mo" : num(v);

function Slider({ label, min, max, step, value, unit, hint, onChange }: {
  label: string; min: number; max: number; step: number; value: number; unit: Unit; hint: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, gap: 12 }}>
        <label style={{ fontSize: 14.5, fontWeight: 500, color: "#010F31" }}>{label}</label>
        <span style={{ fontFamily: mono, fontSize: 14, color: "#010F31", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{display(value, unit)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} style={{ width: "100%", accentColor: "#1727E0" }} />
      <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.55, color: "#767B83" }}>{hint}</p>
    </div>
  );
}

export default function DormantReactivationCalc() {
  const [dormant, setDormant] = useState(42000);
  const [reach, setReach] = useState(34);
  const [react, setReact] = useState(9);
  const [arpw, setArpw] = useState(18);
  const [months, setMonths] = useState(7);
  const [cost, setCost] = useState(4200);

  const reached = dormant * (reach / 100);
  const reactivated = reached * (react / 100);
  const gross = reactivated * arpw * months;
  const net = gross - cost;

  const fields = [
    { label: "Dormant wallets", min: 500, max: 500000, step: 500, value: dormant, unit: "wallets" as Unit, hint: "Wallets that transacted with you once but not in the last 90 days.", set: setDormant },
    { label: "Reachable share", min: 1, max: 100, step: 1, value: reach, unit: "%" as Unit, hint: "Share you hold an email, push token or wallet inbox for. This is usually the binding constraint.", set: setReach },
    { label: "Reactivation rate", min: 1, max: 40, step: 1, value: react, unit: "%" as Unit, hint: "Of those reached, the share that transacts again within 30 days of the campaign.", set: setReact },
    { label: "Monthly revenue per active wallet", min: 1, max: 400, step: 1, value: arpw, unit: "USD" as Unit, hint: "Fees, spread or subscription attributable to one active wallet per month.", set: setArpw },
    { label: "Months retained after reactivation", min: 1, max: 24, step: 1, value: months, unit: "months" as Unit, hint: "How long a reactivated wallet stays active before going quiet again.", set: setMonths },
    { label: "Campaign cost", min: 0, max: 50000, step: 100, value: cost, unit: "USD" as Unit, hint: "Incentives, creative and sending cost for the whole reactivation programme.", set: setCost },
  ];

  const steps = [
    { label: "Dormant wallets", value: num(dormant) },
    { label: `× reachable ${reach}%`, value: num(reached) },
    { label: `× reactivated ${react}%`, value: num(reactivated) },
    { label: `× $${arpw} × ${months} months`, value: fmt(gross) },
    { label: "− campaign cost", value: "(" + fmt(cost) + ")" },
  ];
  const barReach = 100 - reach + "%";
  const barConvert = (reach * (1 - react / 100)).toFixed(1) + "%";

  return (
    <div className="ocs-calc-grid" style={{ alignItems: "start" }}>
      <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 28 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 600, letterSpacing: "-0.2px", color: "#010F31" }}>Your numbers</h2>
        <p style={{ margin: "0 0 24px", fontSize: 14, color: "#585D65" }}>Defaults are the median across the protocols we onboarded last quarter. Overwrite anything you know.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {fields.map((f) => (
            <Slider key={f.label} label={f.label} min={f.min} max={f.max} step={f.step} value={f.value} unit={f.unit} hint={f.hint} onChange={f.set} />
          ))}
        </div>
      </div>

      <div className="ocs-calc-side" style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 28 }}>
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
            <div style={{ fontSize: 15, fontWeight: 600, color: "#010F31" }}>Recoverable, net</div>
            <div style={{ fontSize: 13, color: "#767B83" }}>Over 12 months</div>
          </div>
          <span style={{ marginLeft: "auto", flex: "none", fontFamily: mono, fontSize: 30, fontWeight: 500, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.5px", borderBottom: "2px solid #FF6828", paddingBottom: 2, color: "#010F31" }}>{fmt(net)}</span>
        </div>

        <div style={{ marginTop: 24, borderTop: "1px solid #ECEDEF", paddingTop: 20 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 12 }}>Where it leaks</div>
          <div style={{ display: "flex", height: 8, borderRadius: 2, overflow: "hidden", background: "#ECEDEF" }}>
            <span style={{ width: barReach, background: "#C4C7CC", display: "block" }} />
            <span style={{ width: barConvert, background: "#FF6828", display: "block" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 12.5, color: "#767B83" }}>
            <span>Unreachable</span>
            <span>Reached, not reactivated</span>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <a href="/early-access" style={{ display: "block", textAlign: "center", height: 40, lineHeight: "40px", background: "#1727E0", color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 4, textDecoration: "none" }}>Build this segment</a>
        </div>
      </div>

      <style>{`
        .ocs-calc-grid { display:grid; grid-template-columns:minmax(0,1fr) 420px; gap:16px; }
        .ocs-calc-side { position:sticky; top:88px; }
        @media (max-width:1024px){ .ocs-calc-grid { grid-template-columns:1fr; } .ocs-calc-side { position:static; } }
      `}</style>
    </div>
  );
}
