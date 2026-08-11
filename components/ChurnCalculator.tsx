"use client";

import { useState } from "react";
import { ACCENT } from "@/lib/data";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.round(n));
const num = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));

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

export default function ChurnCalculator() {
  const [wallets, setWallets] = useState(10000);
  const [churn, setChurn] = useState(8); // % monthly
  const [arpu, setArpu] = useState(40); // $ / wallet / month
  const [lift, setLift] = useState(25); // % of churn recovered with retention

  const m = churn / 100;
  const walletsLostYr = wallets * (1 - Math.pow(1 - m, 12));
  const revLostYr = walletsLostYr * arpu * 12;
  const recoveredWallets = walletsLostYr * (lift / 100);
  const recoveredRev = recoveredWallets * arpu * 12;

  return (
    <div style={{ border: "1px solid #DCE7F5", borderRadius: 20, background: "#fff", padding: "28px 26px", boxShadow: "0 1px 2px rgba(26,24,20,.04)" }}>
      <Row label="Active wallets" hint="Wallets currently active" value={wallets} min={500} max={200000} step={500} onChange={setWallets} fmt={num} />
      <Row label="Monthly churn rate" hint="Share of wallets that go inactive each month" value={churn} min={1} max={30} step={1} onChange={setChurn} fmt={(v) => `${v}%`} />
      <Row label="Revenue per wallet / month" hint="Average monthly revenue per active wallet" value={arpu} min={1} max={500} step={1} onChange={setArpu} fmt={usd} />
      <Row label="Churn recovered with retention" hint="Share of churn win-back triggers reclaim" value={lift} min={5} max={50} step={1} onChange={setLift} fmt={(v) => `${v}%`} />

      <div style={{ marginTop: 26, paddingTop: 22, borderTop: "1px solid #DCE7F5", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }} data-stats>
        <div>
          <div style={{ fontSize: 12, color: "#8A93A6", fontWeight: 600 }}>Wallets lost / year</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#1A1A17", marginTop: 4 }}>{num(walletsLostYr)}</div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#8A93A6", fontWeight: 600 }}>Revenue lost to churn / year</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#E0354F", marginTop: 4 }}>{usd(revLostYr)}</div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#8A93A6", fontWeight: 600 }}>Recoverable with retention</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#15803D", marginTop: 4 }}>{usd(recoveredRev)}</div>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <a href="/early-access" className="ocs-btn-primary" style={{ display: "inline-block", fontSize: 14.5, fontWeight: 600, color: "#fff", background: ACCENT, padding: "11px 18px", borderRadius: 10, textDecoration: "none" }}>
          Recover this with OnchainSuite →
        </a>
      </div>
      <p style={{ margin: "14px 0 0", fontSize: 12, color: "#8A93A6", lineHeight: 1.5 }}>
        Estimates only. Revenue lost assumes a churned wallet forgoes ~12 months of its average revenue; recovery assumes retention triggers win back the share you set.
      </p>
    </div>
  );
}
