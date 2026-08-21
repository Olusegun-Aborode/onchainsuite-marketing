"use client";

import { useEffect, useState } from "react";
import { ACCENT, CHAINS, DOCS, MON_TYPES, OK } from "@/lib/data";
import LearnMore from "./LearnMore";

export default function MonitorSection() {
  const [monType, setMonType] = useState(0);
  const [monIdx, setMonIdx] = useState(0);
  const [normCount, setNormCount] = useState(1204882);

  useEffect(() => {
    const reduce =
      !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const rotate = setInterval(() => {
      setMonIdx((i) => (i + 1) % MON_TYPES[monType].raw.length);
    }, 1900);
    const counter = setInterval(() => {
      setNormCount((n) => n + 1 + Math.floor(Math.random() * 4));
    }, 700);

    return () => {
      clearInterval(rotate);
      clearInterval(counter);
    };
  }, [monType]);

  const activeType = MON_TYPES[monType];
  const raw = activeType.raw;
  const mi = monIdx % raw.length;
  const ma = raw[mi];

  const selectType = (idx: number) => {
    setMonType(idx);
    setMonIdx(0);
  };

  const normRows = [
    { k: "wallet", v: ma.wallet },
    { k: "value_usd", v: ma.value },
    { k: "action", v: activeType.id },
    { k: "chain", v: ma.chain.toLowerCase() },
    { k: "ts", v: ma.ts },
  ];

  return (
    <section
      id="platform"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px", textAlign: "center" }}
      data-pad
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 11.5,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: ACCENT,
          fontWeight: 600,
        }}
      >
        Monitor &amp; normalise
      </div>
      <h2
        style={{
          margin: "14px auto 0",
          maxWidth: 680,
          fontSize: "clamp(26px,3.4vw,40px)",
          lineHeight: 1.1,
          letterSpacing: "-.025em",
          fontWeight: 700,
          textWrap: "balance",
        }}
      >
        Monitor on-chain behaviour. Act on it.
      </h2>
      <p
        style={{
          margin: "16px auto 0",
          maxWidth: 600,
          fontSize: 17.5,
          lineHeight: 1.55,
          color: "#3D4A63",
          textWrap: "pretty",
        }}
      >
        OnchainSuite normalises wallet activity across Ethereum, Solana, Base, and Polygon into clean
        triggers and segments any marketer can use.
      </p>

      <div
        style={{
          margin: "36px auto 0",
          borderRadius: 18,
          background: "#fff",
          border: "1px solid #DCE7F5",
          boxShadow: "0 1px 2px rgba(26,24,20,.05),0 8px 26px -20px rgba(26,24,20,.08)",
          padding: 24,
          textAlign: "left",
        }}
      >
        {/* header strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 18,
            paddingBottom: 16,
            borderBottom: "1px solid #E3ECF8",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 11,
              letterSpacing: ".03em",
              color: "#51607A",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: OK, animation: "ocsPulseDot 2.4s infinite" }} />
            Sample stream · how normalisation works
          </span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#A6AFC0" }}>
            <span style={{ color: "#1A1A17", fontWeight: 700 }}>{normCount.toLocaleString("en-US")}</span> events
            in this demo
          </span>
        </div>

        {/* event-type tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap", marginBottom: 20 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10.5,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#A6AFC0",
              marginRight: 2,
            }}
          >
            Event
          </span>
          {MON_TYPES.map((t, i) => {
            const on = i === monType;
            return (
              <button
                key={t.id}
                onClick={() => selectType(i)}
                style={{
                  appearance: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 12.5,
                  fontWeight: on ? 700 : 500,
                  whiteSpace: "nowrap",
                  padding: "7px 14px",
                  borderRadius: 999,
                  border: `1px solid ${on ? ACCENT : "#DCE7F5"}`,
                  background: on ? ACCENT : "#fff",
                  color: on ? "#fff" : "#3D4A63",
                  transition: "all .18s ease",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* 3-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 22, alignItems: "center" }} data-stack>
          {/* raw cards */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10.5,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#A6AFC0",
                marginBottom: 11,
              }}
            >
              Raw events · per protocol
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {raw.map((e, i) => {
                const on = i === mi;
                return (
                  <div
                    key={activeType.id + i}
                    style={{
                      border: `1px solid ${on ? ACCENT : "#DCE7F5"}`,
                      borderRadius: 10,
                      background: on ? `color-mix(in oklab,${ACCENT} 5%,#fff)` : "#FFFFFF",
                      padding: "11px 13px",
                      opacity: on ? 1 : 0.5,
                      transform: on ? "translateX(3px)" : "none",
                      boxShadow: on
                        ? `0 10px 24px -16px color-mix(in oklab,${ACCENT} 50%,transparent)`
                        : "none",
                      transition:
                        "border-color .45s ease, background .45s ease, opacity .45s ease, transform .45s ease, box-shadow .45s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: e.dot, flex: "none" }} />
                      <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1A1A17" }}>{e.proto}</span>
                      <span
                        style={{
                          marginLeft: "auto",
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: 10,
                          color: on ? ACCENT : "#A6AFC0",
                        }}
                      >
                        {e.chain}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: 11.5,
                        color: "#8A93A6",
                        lineHeight: 1.5,
                        wordBreak: "break-all",
                      }}
                    >
                      {e.sig}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* arrow */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 9.5,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "#A6AFC0",
                textAlign: "center",
                maxWidth: 88,
              }}
            >
              Protocol Normalisation
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `color-mix(in oklab,${ACCENT} 10%,#fff)`,
                border: `1px solid color-mix(in oklab,${ACCENT} 35%,#fff)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: ACCENT,
                fontSize: 20,
                animation: "ocsArrowPulse 2.8s ease-in-out infinite",
              }}
            >
              →
            </div>
          </div>

          {/* normalised */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10.5,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#A6AFC0",
                marginBottom: 11,
              }}
            >
              Normalised · one shape
            </div>
            <div
              style={{
                border: `1px solid color-mix(in oklab,${ACCENT} 32%,#DCE7F5)`,
                borderRadius: 10,
                background: `color-mix(in oklab,${ACCENT} 4%,#fff)`,
                padding: 14,
                boxShadow: `0 0 0 3px color-mix(in oklab,${ACCENT} 8%,transparent)`,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#E8F6EE",
                  color: "#15803D",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 9px",
                  borderRadius: 6,
                  marginBottom: 11,
                }}
              >
                event: {activeType.id}
              </div>
              {normRows.map((f) => (
                <div
                  key={f.k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "5px 0",
                    borderBottom: "1px solid #E3ECF8",
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: "#A6AFC0" }}>{f.k}</span>
                  <span style={{ color: "#1A1A17", fontWeight: 500 }}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* footer chains */}
        <div
          style={{
            marginTop: 20,
            paddingTop: 18,
            borderTop: "1px solid #E3ECF8",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#A6AFC0" }}>
            Same shape across
          </span>
          {CHAINS.map((c) => (
            <span
              key={c.name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 12.5,
                color: "#3A3A34",
                background: "#FFFFFF",
                border: "1px solid #DCE7F5",
                padding: "5px 11px",
                borderRadius: 999,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.color }} />
              {c.name}
            </span>
          ))}
        </div>
      </div>

      <LearnMore href={DOCS.walletData} align="center" />
    </section>
  );
}
