"use client";

import { useState } from "react";
import { ACCENT } from "@/lib/data";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.round(n));

function Row({ label, hint, value, min, max, step, onChange, fmt }: {
  label: string; hint: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; fmt: (v: number) => string;
}) {
  return (
    <div style={{ marginTop: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A17" }}>{label}</div>
          <div style={{ fontSize: 12.5, color: "#8A93A6", marginTop: 2 }}>{hint}</div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#1A1A17", whiteSpace: "nowrap" }}>{fmt(value)}</div>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} style={{ width: "100%", marginTop: 12, accentColor: ACCENT }} />
    </div>
  );
}

export default function LtvCalculator() {
  const [arpu, setArpu] = useState(40); // $ / wallet / month
  const [churn, setChurn] = useState(8); // % monthly
  const [margin, setMargin] = useState(80); // % gross margin
  const [improved, setImproved] = useState(6); // improved churn %

  const lifespan = 1 / (churn / 100); // months
  const ltv = arpu * lifespan * (margin / 100);
  const lifespan2 = 1 / (improved / 100);
  const ltv2 = arpu * lifespan2 * (margin / 100);
  const uplift = ltv2 - ltv;

  return (
    <div style={{ border: "1px solid #DCE7F5", borderRadius: 20, background: "#fff", padding: "28px 26px", boxShadow: "0 1px 2px rgba(26,24,20,.04)" }}>
      <Row label="Revenue per wallet / month" hint="Average monthly revenue per active wallet" value={arpu} min={1} max={500} step={1} onChange={setArpu} fmt={usd} />
      <Row label="Monthly churn rate" hint="Share of wallets that go inactive each month" value={churn} min={1} max={30} step={1} onChange={(v) => { setChurn(v); if (improved > v) setImproved(v); }} fmt={(v) => `${v}%`} />
      <Row label="Gross margin" hint="Share of revenue you keep" value={margin} min={20} max={100} step={1} onChange={setMargin} fmt={(v) => `${v}%`} />
      <Row label="Improved churn (with retention)" hint="Target churn after retention" value={improved} min={1} max={churn} step={1} onChange={setImproved} fmt={(v) => `${v}%`} />

      <div style={{ marginTop: 26, paddingTop: 22, borderTop: "1px solid #DCE7F5", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }} data-stats>
        <div>
          <div style={{ fontSize: 12, color: "#8A93A6", fontWeight: 600 }}>Avg wallet lifespan</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#1A1A17", marginTop: 4 }}>{Math.round(lifespan)} mo</div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#8A93A6", fontWeight: 600 }}>Wallet LTV</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#1A1A17", marginTop: 4 }}>{usd(ltv)}</div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#8A93A6", fontWeight: 600 }}>LTV at improved churn</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#15803D", marginTop: 4 }}>{usd(ltv2)}</div>
        </div>
      </div>

      <p style={{ margin: "18px 0 0", fontSize: 14, color: "#3D4A63", lineHeight: 1.6 }}>
        Cutting churn from <strong>{churn}%</strong> to <strong>{improved}%</strong> raises LTV per wallet by{" "}
        <strong style={{ color: "#15803D" }}>{usd(uplift)}</strong>.
      </p>

      <div style={{ marginTop: 18 }}>
        <a href="/early-access" className="ocs-btn-primary" style={{ display: "inline-block", fontSize: 14.5, fontWeight: 600, color: "#fff", background: ACCENT, padding: "11px 18px", borderRadius: 10, textDecoration: "none" }}>
          Raise wallet LTV with OnchainSuite →
        </a>
      </div>
      <p style={{ margin: "14px 0 0", fontSize: 12, color: "#8A93A6", lineHeight: 1.5 }}>
        Estimates only. LTV = monthly revenue × average lifespan (1 ÷ monthly churn) × gross margin.
      </p>
    </div>
  );
}
