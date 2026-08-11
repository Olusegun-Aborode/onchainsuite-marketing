"use client";

import { ReactNode, useState } from "react";
import { ACCENT } from "@/lib/data";

type Tab = { key: string; label: string; file: string; raw: string; render: ReactNode };

const TABS: Tab[] = [
  {
    key: "install",
    label: "Install",
    file: "terminal",
    raw: "npm i @onchainsuite/sdk",
    render: (
      <div>
        <span style={{ color: "#8A93A6" }}>$ </span>
        npm i <span style={{ color: "#16A34A" }}>@onchainsuite/sdk</span>
      </div>
    ),
  },
  {
    key: "init",
    label: "Initialize",
    file: "app.tsx",
    raw: `import { OnchainSuite } from '@onchainsuite/sdk'

const ocs = OnchainSuite.init({ project: 'pk_live_…' })

// renders to 100% of connected wallets
ocs.connect(wallet.address)`,
    render: (
      <>
        <div>
          <span style={{ color: "#5BA6FF" }}>import</span> {"{ OnchainSuite }"}{" "}
          <span style={{ color: "#5BA6FF" }}>from</span>{" "}
          <span style={{ color: "#16A34A" }}>&apos;@onchainsuite/sdk&apos;</span>
        </div>
        <div style={{ height: 13 }} />
        <div>
          <span style={{ color: "#5BA6FF" }}>const</span> ocs = OnchainSuite.
          <span style={{ color: "#1727E0" }}>init</span>({"{ project: "}
          <span style={{ color: "#16A34A" }}>&apos;pk_live_…&apos;</span>
          {" }"})
        </div>
        <div style={{ height: 13 }} />
        <div>
          <span style={{ color: "#8A93A6" }}>{"// renders to 100% of connected wallets"}</span>
        </div>
        <div>
          ocs.<span style={{ color: "#1727E0" }}>connect</span>(wallet.address)
        </div>
      </>
    ),
  },
  {
    key: "send",
    label: "Send",
    file: "server.ts",
    raw: `// fire an in-app push the moment a wallet acts
await ocs.push({
  wallet: '0x7f3a…c21',
  title: 'Your stake dropped',
  body: 'Top up to keep your rewards rate.',
})`,
    render: (
      <>
        <div>
          <span style={{ color: "#8A93A6" }}>{"// fire an in-app push the moment a wallet acts"}</span>
        </div>
        <div>
          <span style={{ color: "#5BA6FF" }}>await</span> ocs.<span style={{ color: "#1727E0" }}>push</span>({"{"}
        </div>
        <div>
          {"  "}wallet: <span style={{ color: "#16A34A" }}>&apos;0x7f3a…c21&apos;</span>,
        </div>
        <div>
          {"  "}title: <span style={{ color: "#16A34A" }}>&apos;Your stake dropped&apos;</span>,
        </div>
        <div>
          {"  "}body: <span style={{ color: "#16A34A" }}>&apos;Top up to keep your rewards rate.&apos;</span>,
        </div>
        <div>{"})"}</div>
      </>
    ),
  },
];

export default function SdkCard() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const tab = TABS[active];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(tab.raw);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked — no-op */
    }
  };

  return (
    <div
      className="ocs-card-hover ocs-spotlight"
      style={{
        border: "1px solid #DCE7F5",
        borderRadius: 14,
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 1px 2px rgba(26,24,20,.05),0 8px 26px -20px rgba(26,24,20,.08)",
      }}
    >
      {/* title bar: traffic lights + tabs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 12px 10px 14px",
          borderBottom: "1px solid #E3ECF8",
          background: "#FFFFFF",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7, flex: "none" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#DCE7F5" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#DCE7F5" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#DCE7F5" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {TABS.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(i)}
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: on ? "#fff" : "transparent",
                  color: on ? "#1A1A17" : "#8A93A6",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 11.5,
                  fontWeight: on ? 600 : 500,
                  padding: "5px 11px",
                  borderRadius: 7,
                  boxShadow: on ? "0 1px 2px rgba(26,24,20,.06)" : "none",
                  transition: "color .15s, background .15s",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#A6AFC0" }}>
          {tab.file}
        </span>
      </div>

      {/* code body */}
      <div style={{ position: "relative" }}>
        <button
          onClick={copy}
          aria-label="Copy code"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            cursor: "pointer",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10.5,
            fontWeight: 600,
            color: copied ? "#16A34A" : "#51607A",
            background: copied ? "#E8F6EE" : "#fff",
            border: `1px solid ${copied ? "#BFE6CF" : "#DCE7F5"}`,
            padding: "5px 10px",
            borderRadius: 7,
            transition: "all .15s",
          }}
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
        <div
          style={{
            padding: "18px",
            paddingRight: 78,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 13,
            lineHeight: 1.9,
            color: "#3A3A34",
            overflowX: "auto",
            whiteSpace: "pre",
            minHeight: 150,
          }}
        >
          {tab.render}
        </div>
      </div>

      {/* npm footer badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 14px",
          borderTop: "1px solid #E3ECF8",
          background: "#FFFFFF",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10,
            fontWeight: 700,
            color: "#fff",
            background: "#C53635",
            padding: "3px 7px",
            borderRadius: 5,
            letterSpacing: ".02em",
          }}
        >
          npm
        </span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#3A3A34" }}>
          @onchainsuite/sdk
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10.5,
            color: ACCENT,
            background: `color-mix(in oklab,${ACCENT} 8%,#fff)`,
            border: `1px solid color-mix(in oklab,${ACCENT} 22%,#fff)`,
            padding: "2px 8px",
            borderRadius: 999,
          }}
        >
          early access
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#A6AFC0" }}>
          ESM · ~14 kB · MIT
        </span>
      </div>
    </div>
  );
}
