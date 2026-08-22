"use client";

import { useState } from "react";
import { ACCENT, SEND_BASE, SEND_PER_1K } from "@/lib/data";
import { SuiteTiers } from "./StaticSections";
import SendCalculator from "./PricingCalculator";

type View = "suite" | "send";

const NAV: { id: View; name: string; sub: string }[] = [
  { id: "suite", name: "Suite", sub: "Wallet + email · 4 tiers" },
  { id: "send", name: "Send", sub: "Email only · one plan" },
];

export default function PricingExplorer() {
  const [view, setView] = useState<View>("suite");

  return (
    <div className="ocs-pex">
      {/* sticky sidebar */}
      <aside className="ocs-pex-nav" aria-label="Pricing lines">
        <div className="ocs-pex-navlabel">Choose a plan</div>
        {NAV.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setView(n.id)}
            aria-pressed={view === n.id}
            className={`ocs-pex-item${view === n.id ? " active" : ""}`}
          >
            <span className="ocs-pex-item-name">{n.name}</span>
            <span className="ocs-pex-item-sub">{n.sub}</span>
          </button>
        ))}
      </aside>

      {/* panel */}
      <div className="ocs-pex-main">
        {view === "suite" ? (
          <>
            <h2 className="ocs-pex-h">Suite, wallet + email.</h2>
            <p className="ocs-pex-p">
              For teams acting on on-chain behaviour. Every paid tier includes the platform; Forms and a dedicated IP
              start on Growth. Usage above an allowance bills at list price.
            </p>
            <SuiteTiers />
          </>
        ) : (
          <>
            <h2 className="ocs-pex-h">Send, email only.</h2>
            <p className="ocs-pex-p">
              For teams with no on-chain audience, the same email engine with the wallet channel switched off. One plan,
              no tiers: ${SEND_BASE} a month plus ${SEND_PER_1K.toFixed(2)} per 1,000 subscribers.
            </p>
            <SendCalculator />
          </>
        )}
      </div>

      <style>{`
        .ocs-pex {
          display: grid; grid-template-columns: 236px 1fr; gap: 30px;
          max-width: 1200px; margin: 8px auto 0; text-align: left; align-items: start;
        }
        .ocs-pex-nav { position: sticky; top: 92px; margin-top: 52px; display: flex; flex-direction: column; gap: 8px; }
        .ocs-pex-navlabel {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: #8A93A6; margin-bottom: 4px;
        }
        .ocs-pex-item {
          display: flex; flex-direction: column; gap: 2px; text-align: left; cursor: pointer;
          border: 1px solid #DCE7F5; background: #fff; border-radius: 12px; padding: 14px 16px;
          font-family: inherit; transition: border-color .15s ease, background .15s ease, box-shadow .15s ease;
        }
        .ocs-pex-item:hover { border-color: color-mix(in oklab, ${ACCENT} 40%, #DCE7F5); }
        .ocs-pex-item.active {
          border-color: ${ACCENT}; background: color-mix(in oklab, ${ACCENT} 6%, #fff);
          box-shadow: 0 1px 2px rgba(26,24,20,.05);
        }
        .ocs-pex-item-name { font-size: 16px; font-weight: 700; color: #1A1A17; letter-spacing: -.01em; }
        .ocs-pex-item.active .ocs-pex-item-name { color: ${ACCENT}; }
        .ocs-pex-item-sub { font-size: 12.5px; color: #8A93A6; }
        .ocs-pex-h { margin: 0; font-size: clamp(22px,2.6vw,30px); line-height: 1.1; letter-spacing: -.025em; font-weight: 700; color: #1A1A17; }
        .ocs-pex-p { margin: 12px 0 0; max-width: 640px; font-size: 15.5px; line-height: 1.6; color: #3D4A63; }
        @media (max-width: 860px) {
          .ocs-pex { grid-template-columns: 1fr; gap: 20px; }
          .ocs-pex-nav { position: static; top: auto; margin-top: 0; flex-direction: row; flex-wrap: wrap; }
          .ocs-pex-navlabel { display: none; }
          .ocs-pex-item { flex: 1; min-width: 140px; }
        }
      `}</style>
    </div>
  );
}
