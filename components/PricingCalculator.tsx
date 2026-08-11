"use client";

import { useState } from "react";
import { ACCENT, estimatePrice } from "@/lib/data";

const WALLET_MAX = 100000;
const SUB_MAX = 50000;

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function Slider({
  label,
  hint,
  value,
  max,
  step,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const pct = (value / max) * 100;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A17" }}>{label}</div>
          <div style={{ fontSize: 12, color: "#8A93A6" }}>{hint}</div>
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", color: "#1A1A17" }}>
          {fmt(value)}
          {value === max ? "+" : ""}
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        style={{
          marginTop: 12,
          width: "100%",
          accentColor: ACCENT,
          cursor: "pointer",
          background: `linear-gradient(90deg, color-mix(in oklab,${ACCENT} 22%,#fff) ${pct}%, #E3ECF8 ${pct}%)`,
          height: 6,
          borderRadius: 999,
          appearance: "none",
          WebkitAppearance: "none",
        }}
      />
    </div>
  );
}

export default function PricingCalculator() {
  const [wallets, setWallets] = useState(10000);
  const [subs, setSubs] = useState(2000);

  const atCustom = wallets >= WALLET_MAX || subs >= SUB_MAX;
  const price = estimatePrice(wallets, subs);

  return (
    <div
      style={{
        margin: "36px auto 0",
        maxWidth: 820,
        border: "1px solid #DCE7F5",
        borderRadius: 18,
        background: "#fff",
        boxShadow: "0 1px 2px rgba(26,24,20,.05),0 18px 44px -26px rgba(26,24,20,.16)",
        padding: "28px 30px",
        textAlign: "left",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 30, alignItems: "center" }} data-stack>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Slider
            label="Tracked wallets"
            hint="On-chain wallets you monitor"
            value={wallets}
            max={WALLET_MAX}
            step={500}
            onChange={setWallets}
          />
          <Slider
            label="Email subscribers"
            hint="10 monthly sends bundled each"
            value={subs}
            max={SUB_MAX}
            step={250}
            onChange={setSubs}
          />
        </div>

        <div
          className="ocs-calc-split"
          style={{
            borderLeft: "1px solid #E3ECF8",
            paddingLeft: 28,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10.5,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#A6AFC0",
            }}
          >
            Estimated
          </div>
          <div style={{ marginTop: 6, fontSize: atCustom ? 30 : 44, fontWeight: 700, letterSpacing: "-.03em", color: "#1A1A17", lineHeight: 1 }}>
            {atCustom ? "Custom" : `$${fmt(price)}`}
            {!atCustom && <span style={{ fontSize: 16, fontWeight: 500, color: "#8A93A6" }}> /mo</span>}
          </div>
          <div style={{ marginTop: 8, fontSize: 12.5, color: "#8A93A6", lineHeight: 1.5 }}>
            {atCustom ? "Larger protocol, let's talk" : "indicative, usage-based"}
          </div>
        </div>
      </div>

      <p style={{ margin: "22px 0 0", paddingTop: 18, borderTop: "1px solid #E3ECF8", fontSize: 13, color: "#51607A", lineHeight: 1.55 }}>
        A small base fee plus your tracked wallets and email subscribers. In-app push to every connected wallet is
        included, and email is optional, so wallets with no linked email still cost nothing extra. Estimates are
        indicative; founding rates are locked in for early-access teams.
      </p>
    </div>
  );
}
