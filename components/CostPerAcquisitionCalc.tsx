"use client";

import { useState } from "react";

const mono = "'JetBrains Mono',monospace";
const money = (n: number) => (!isFinite(n) || n <= 0 ? "—" : n >= 1000 ? "$" + (n / 1000).toFixed(1) + "k" : "$" + n.toFixed(n < 100 ? 2 : 0));
const loc = (n: number) => Math.round(n).toLocaleString("en-US");

type Row = { name: string; spend: number; connected: number; activated: number };
const th = { textAlign: "left" as const, padding: "0 8px 10px", fontSize: 11, fontFamily: mono, letterSpacing: ".04em", textTransform: "uppercase" as const, color: "#767B83", fontWeight: 500 };
const cellInput = { width: "100%", boxSizing: "border-box" as const, border: "1px solid transparent", borderRadius: 4, padding: "7px 8px", fontFamily: mono, fontSize: 13.5, background: "transparent", outline: "none", color: "#010F31" };

export default function CostPerAcquisitionCalc() {
  const [ltv, setLtv] = useState(210);
  const [rows, setRows] = useState<Row[]>([
    { name: "Paid social", spend: 18000, connected: 4200, activated: 610 },
    { name: "Quests and campaigns", spend: 26000, connected: 11500, activated: 1340 },
    { name: "KOL and partnerships", spend: 12000, connected: 1900, activated: 470 },
    { name: "Organic and referral", spend: 3500, connected: 2600, activated: 820 },
  ]);
  const upd = (i: number, k: keyof Row, v: string | number) => setRows((s) => s.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  const num = (v: string) => Math.max(0, Number(v) || 0);

  const cpas = rows.map((r) => (r.activated > 0 ? r.spend / r.activated : Infinity));
  const finite = cpas.filter((c) => isFinite(c));
  const worst = finite.length ? Math.max(...finite) : 1;
  const best = finite.length ? Math.min(...finite) : 0;
  const totalSpend = rows.reduce((a, r) => a + r.spend, 0);
  const totalAct = rows.reduce((a, r) => a + r.activated, 0);
  const totalConn = rows.reduce((a, r) => a + r.connected, 0);
  const blended = totalAct > 0 ? totalSpend / totalAct : 0;
  const ratio = blended > 0 ? ltv / blended : 0;
  const bestRow = rows[cpas.indexOf(best)];
  const worstRow = rows[cpas.indexOf(worst)];

  const ranked = rows.slice().sort((a, b) => (a.activated ? a.spend / a.activated : Infinity) - (b.activated ? b.spend / b.activated : Infinity)).map((r) => {
    const cpa = r.activated > 0 ? r.spend / r.activated : Infinity;
    return { name: r.name, cpa: money(cpa), bar: isFinite(cpa) ? Math.max((cpa / worst) * 100, 3).toFixed(1) + "%" : "3%", color: isFinite(cpa) && cpa <= blended ? "#2F94FF" : "#FF6828" };
  });
  const steps = [
    { label: "Total spend across channels", value: money(totalSpend) },
    { label: "Wallets connected", value: loc(totalConn) },
    { label: "Made a first transaction", value: loc(totalAct) },
    { label: "Activation rate", value: totalConn > 0 ? ((totalAct / totalConn) * 100).toFixed(1) + "%" : "—" },
  ];
  const payback = [
    { label: "LTV to CPA ratio", value: ratio > 0 ? ratio.toFixed(1) + ":1" : "—", color: ratio >= 3 ? "#128355" : ratio >= 1 ? "#B53C0B" : "#9B2A2E" },
    { label: "Gross margin per wallet", value: money(ltv - blended), color: "#010F31" },
    { label: "Wallets acquired", value: loc(totalAct), color: "#010F31" },
    { label: "Total spend", value: money(totalSpend), color: "#010F31" },
  ];
  const verdict = !bestRow || !worstRow
    ? "Add at least one channel with spend and a first-transaction count to see a read."
    : `${bestRow.name} acquires a transacting wallet for ${money(best)}, against ${money(worst)} on ${worstRow.name}. At an LTV of ${money(ltv)} your blended ratio is ${ratio ? ratio.toFixed(1) : "0"} to 1${ratio >= 3 ? ", which leaves room to spend harder on the cheap end." : ratio >= 1 ? ", which is thin. Activation, not spend, is the lever." : ", which means you are buying wallets that do not pay you back."}`;

  return (
    <div className="ocs-cpa-grid" style={{ alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 20, overflowX: "auto" }}>
          <table style={{ width: "100%", minWidth: 620, borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...th, width: "26%" }}>Channel</th>
                <th style={{ ...th, textAlign: "right" }}>Spend</th>
                <th style={{ ...th, textAlign: "right" }}>Connected</th>
                <th style={{ ...th, textAlign: "right" }}>First tx</th>
                <th style={{ ...th, textAlign: "right" }}>CPA</th>
                <th style={{ ...th, textAlign: "right" }}>Activation</th>
                <th style={{ ...th, width: 28 }}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const cpa = r.activated > 0 ? r.spend / r.activated : Infinity;
                const cpaColor = !isFinite(cpa) ? "#9DA1A8" : cpa <= blended ? "#128355" : "#42464D";
                return (
                  <tr key={i} style={{ borderTop: "1px solid #ECEDEF" }}>
                    <td style={{ padding: "4px 0" }}><input value={r.name} onChange={(e) => upd(i, "name", e.target.value)} className="ocs-cpa-input" style={{ ...cellInput, fontFamily: "'Instrument Sans',sans-serif", fontWeight: 500 }} /></td>
                    <td><input type="number" value={r.spend} onChange={(e) => upd(i, "spend", num(e.target.value))} className="ocs-cpa-input" style={{ ...cellInput, textAlign: "right" }} /></td>
                    <td><input type="number" value={r.connected} onChange={(e) => upd(i, "connected", num(e.target.value))} className="ocs-cpa-input" style={{ ...cellInput, textAlign: "right" }} /></td>
                    <td><input type="number" value={r.activated} onChange={(e) => upd(i, "activated", num(e.target.value))} className="ocs-cpa-input" style={{ ...cellInput, textAlign: "right" }} /></td>
                    <td style={{ textAlign: "right", padding: "0 8px", fontFamily: mono, fontSize: 13.5, fontVariantNumeric: "tabular-nums", color: cpaColor, whiteSpace: "nowrap" }}>{money(cpa)}</td>
                    <td style={{ textAlign: "right", padding: "0 8px", fontFamily: mono, fontSize: 13.5, color: "#585D65", whiteSpace: "nowrap" }}>{r.connected > 0 ? ((r.activated / r.connected) * 100).toFixed(1) + "%" : "—"}</td>
                    <td style={{ textAlign: "center" }}>
                      <button type="button" onClick={() => setRows((s) => s.filter((_, j) => j !== i))} aria-label="Remove channel" style={{ border: 0, background: "transparent", color: "#9DA1A8", cursor: "pointer", padding: 4, lineHeight: 0 }}>
                        <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="button" onClick={() => setRows((s) => s.concat({ name: "New channel", spend: 0, connected: 0, activated: 0 }))} style={{ marginTop: 12, display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #DEE0E3", background: "#FBFBFC", color: "#42464D", fontSize: 13.5, fontWeight: 500, padding: "8px 12px", borderRadius: 4, cursor: "pointer" }}>
            <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            Add channel
          </button>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 24 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 16 }}>Cost per acquisition by channel</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ranked.map((r, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13.5, marginBottom: 6 }}>
                  <span style={{ color: "#42464D" }}>{r.name}</span>
                  <span style={{ fontFamily: mono, fontVariantNumeric: "tabular-nums", color: "#010F31" }}>{r.cpa}</span>
                </div>
                <div style={{ height: 6, background: "#ECEDEF", borderRadius: 2 }}><span style={{ display: "block", height: 6, width: r.bar, background: r.color, borderRadius: 2 }} /></div>
              </div>
            ))}
          </div>
          <p style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.6, color: "#42464D" }}>{verdict}</p>
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
              <div style={{ fontSize: 15, fontWeight: 600, color: "#010F31" }}>Blended CPA</div>
              <div style={{ fontSize: 13, color: "#767B83" }}>{money(totalConn > 0 ? totalSpend / totalConn : 0)} per connect</div>
            </div>
            <span style={{ marginLeft: "auto", flex: "none", fontFamily: mono, fontSize: 30, fontWeight: 500, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.5px", borderBottom: "2px solid #FF6828", paddingBottom: 2, color: "#010F31" }}>{money(blended)}</span>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderLeft: "2px solid #FF6828", borderRadius: 6, padding: 24 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 16 }}>Payback check</div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 8, color: "#010F31" }}>Lifetime value per wallet</label>
            <input type="number" value={ltv} onChange={(e) => setLtv(num(e.target.value))} className="ocs-v2-input" style={{ width: "100%", boxSizing: "border-box", border: "1px solid #DEE0E3", borderRadius: 4, padding: "10px 12px", fontFamily: mono, fontSize: 15, outline: "none", color: "#010F31" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {payback.map((p) => (
              <div key={p.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
                <span style={{ fontSize: 14, color: "#585D65" }}>{p.label}</span>
                <span style={{ fontFamily: mono, fontSize: 14.5, fontVariantNumeric: "tabular-nums", color: p.color }}>{p.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ocs-cpa-grid { display:grid; grid-template-columns:minmax(0,1fr) 360px; gap:16px; }
        .ocs-calc-side { position:sticky; top:88px; }
        .ocs-cpa-input:focus { border-color:#FF6828 !important; box-shadow:0 0 0 3px rgba(255,104,40,0.28); }
        .ocs-v2-input:focus { border-color:#FF6828 !important; box-shadow:0 0 0 3px rgba(255,104,40,0.28); }
        @media (max-width:1024px){ .ocs-cpa-grid { grid-template-columns:1fr; } .ocs-calc-side { position:static; } }
      `}</style>
    </div>
  );
}
