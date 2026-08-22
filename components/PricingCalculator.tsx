"use client";

import { useState } from "react";
import { ACCENT, estimateSend, SEND_BASE, SEND_PER_1K } from "@/lib/data";

const SUB_MAX = 100000;

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

// Send is email-only and priced on a single curve: $6 a month plus $2.60 per
// 1,000 subscribers. This estimator reads a monthly figure straight off that.
export default function SendCalculator() {
  const [subs, setSubs] = useState(10000);
  const price = estimateSend(subs);
  const pct = (subs / SUB_MAX) * 100;

  return (
    <div
      style={{
        margin: "28px auto 0",
        maxWidth: 720,
        border: "1px solid #DCE7F5",
        borderRadius: 18,
        background: "#fff",
        boxShadow: "0 1px 2px rgba(26,24,20,.05),0 18px 44px -26px rgba(26,24,20,.16)",
        padding: "28px 30px",
        textAlign: "left",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 30, alignItems: "center" }} data-stack>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A17" }}>Email subscribers</div>
              <div style={{ fontSize: 12, color: "#8A93A6" }}>Your list size</div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", color: "#1A1A17" }}>
              {fmt(subs)}
              {subs === SUB_MAX ? "+" : ""}
            </div>
          </div>
          <input
            type="range"
            min={1000}
            max={SUB_MAX}
            step={1000}
            value={subs}
            onChange={(e) => setSubs(Number(e.target.value))}
            aria-label="Email subscribers"
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

        <div className="ocs-calc-split" style={{ borderLeft: "1px solid #E3ECF8", paddingLeft: 28, textAlign: "center" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: ".06em", textTransform: "uppercase", color: "#A6AFC0" }}>
            Send · estimated
          </div>
          <div style={{ marginTop: 6, fontSize: 44, fontWeight: 700, letterSpacing: "-.03em", color: "#1A1A17", lineHeight: 1 }}>
            ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            <span style={{ fontSize: 16, fontWeight: 500, color: "#8A93A6" }}> /mo</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 12.5, color: "#8A93A6", lineHeight: 1.5 }}>
            ${SEND_BASE}/mo + ${SEND_PER_1K.toFixed(2)} per 1,000
          </div>
        </div>
      </div>

      <p style={{ margin: "22px 0 0", paddingTop: 18, borderTop: "1px solid #E3ECF8", fontSize: 13, color: "#51607A", lineHeight: 1.55 }}>
        Send is the email-only line for teams with no on-chain audience. One flat rate, no tiers, assuming around six
        sends per subscriber a month. Need the wallet channel too? See the Suite tiers above.
      </p>
    </div>
  );
}
