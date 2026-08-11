"use client";

import { useEffect, useRef, useState } from "react";
import {
  ACCENT,
  COHORT_BARS,
  COHORT_ROWS,
  DOCS,
  INTEL_POINTS,
  INTEL_QUERY,
} from "@/lib/data";
import LearnMore from "./LearnMore";
import { AutomationView, SegmentsView } from "./IntelViews";

type View = "result" | "automation" | "segments";

const monoLabel = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 10,
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
  color: "#A6AFC0",
};

export default function IntelligenceSection() {
  const [typed, setTyped] = useState("");
  const [showCohort, setShowCohort] = useState(false);
  const [view, setView] = useState<View>("result");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // The typing + cohort loop runs only in the default "result" view; opening an
  // action view pauses it, and returning restarts it.
  useEffect(() => {
    if (view !== "result") return;

    const reduce =
      !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(INTEL_QUERY);
      setShowCohort(true);
      return;
    }

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timers.current.push(id);
    };

    const run = () => {
      setTyped("");
      setShowCohort(false);
      let i = 0;
      const type = () => {
        if (i <= INTEL_QUERY.length) {
          setTyped(INTEL_QUERY.slice(0, i));
          i++;
          schedule(type, 42);
        } else {
          schedule(() => {
            setShowCohort(true);
            schedule(run, 6500);
          }, 480);
        }
      };
      type();
    };

    schedule(run, 1400);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [view]);

  const openView = (v: View) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setTyped(INTEL_QUERY);
    setShowCohort(true);
    setView(v);
  };
  const back = () => setView("result");

  return (
    <section id="intelligence" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px" }} data-pad>
      <div style={{ display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: 48, alignItems: "center" }} data-stack>
        {/* visual (order 1) */}
        <div
          className="ocs-card-hover ocs-spotlight"
          style={{
            borderRadius: 18,
            background: "#fff",
            border: "1px solid #DCE7F5",
            boxShadow: "0 1px 2px rgba(26,24,20,.05),0 8px 26px -20px rgba(26,24,20,.08)",
            overflow: "hidden",
            order: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "13px 16px",
              borderBottom: "1px solid #E3ECF8",
              background: "#FFFFFF",
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: 6,
                background: `color-mix(in oklab,${ACCENT} 18%,#fff)`,
                border: `1px solid color-mix(in oklab,${ACCENT} 40%,#fff)`,
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A17" }}>Intelligence</span>
            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#A6AFC0" }}>
              MCP · natural language
            </span>
          </div>

          <div style={{ padding: 18, minHeight: 392 }}>
            {/* query box (always shown, ties every view back to the question) */}
            <div style={{ border: "1px solid #DCE7F5", borderRadius: 11, background: "#FFFFFF", padding: "14px 15px", minHeight: 58 }}>
              <div style={{ ...monoLabel, marginBottom: 7 }}>Ask your on-chain data</div>
              <div style={{ fontSize: 14.5, color: "#1A1A17", lineHeight: 1.5, fontWeight: 500 }}>
                {typed}
                {view === "result" && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 17,
                      background: ACCENT,
                      verticalAlign: -3,
                      marginLeft: 1,
                      animation: "ocsBlink 1s steps(1) infinite",
                    }}
                  />
                )}
              </div>
            </div>

            {/* RESULT: cohort */}
            {view === "result" && showCohort && (
              <div
                style={{
                  marginTop: 14,
                  border: `1px solid color-mix(in oklab,${ACCENT} 28%,#DCE7F5)`,
                  borderRadius: 11,
                  background: `color-mix(in oklab,${ACCENT} 4%,#fff)`,
                  padding: 15,
                  animation: "ocsFadeIn .4s ease both",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontSize: 26, fontWeight: 700, color: "#1A1A17", letterSpacing: "-.02em" }}>87</span>
                  <span style={{ fontSize: 13, color: "#51607A" }}>
                    wallets · deposited &gt;$10k last month, no return tx since
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 46, margin: "14px 0 12px" }}>
                  {COHORT_BARS.map((b, i) => (
                    <span
                      key={i}
                      className="ocs-bar"
                      style={{
                        flex: 1,
                        height: b,
                        borderRadius: 3,
                        background: `color-mix(in oklab,${ACCENT} 75%,#E3ECF8)`,
                        animationDelay: `${i * 0.07}s`,
                      }}
                    />
                  ))}
                </div>
                {COHORT_ROWS.map((w) => (
                  <div
                    key={w.addr}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "6px 0",
                      borderTop: "1px solid #E3ECF8",
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 11.5,
                    }}
                  >
                    <span style={{ color: "#4A483F" }}>{w.addr}</span>
                    <span style={{ color: "#8A93A6" }}>{w.amt}</span>
                    <span style={{ marginLeft: "auto", color: "#A6AFC0" }}>{w.seen}</span>
                  </div>
                ))}
                <div style={{ marginTop: 13, display: "flex", gap: 9, flexWrap: "wrap", alignItems: "center" }}>
                  <button
                    type="button"
                    onClick={() => openView("automation")}
                    className="ocs-btn-primary"
                    style={{ fontSize: 12.5, fontWeight: 600, color: "#fff", background: ACCENT, border: "none", cursor: "pointer", fontFamily: "inherit", padding: "8px 13px", borderRadius: 8 }}
                  >
                    Create Win-Back automation
                  </button>
                  <button
                    type="button"
                    onClick={() => openView("segments")}
                    className="ocs-btn-outline"
                    style={{ fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", color: "#1A1A17", background: "#fff", border: "1px solid #DCE7F5", padding: "8px 13px", borderRadius: 8 }}
                  >
                    Save as segment
                  </button>
                  <span style={{ marginLeft: "auto", fontSize: 11, color: "#A6AFC0" }}>No SQL written</span>
                </div>
              </div>
            )}

            {view === "automation" && <AutomationView onBack={back} />}
            {view === "segments" && <SegmentsView onBack={back} />}
          </div>
        </div>

        {/* copy (order 2) */}
        <div style={{ order: 2 }}>
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
            Intelligence
          </div>
          <h2
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(26px,3.2vw,38px)",
              lineHeight: 1.1,
              letterSpacing: "-.025em",
              fontWeight: 700,
              textWrap: "balance",
            }}
          >
            Ask your on-chain data anything.
          </h2>
          <p style={{ margin: "16px 0 0", fontSize: 17.5, lineHeight: 1.6, color: "#3D4A63", textWrap: "pretty" }}>
            The Intelligence layer pairs a SQL engine with an MCP integration, so you can query on-chain
            actions and email engagement in plain language and get cohorts back. No SQL required.
          </p>
          <ul style={{ margin: "22px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {INTEL_POINTS.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 11, fontSize: 15, color: "#3A3A34", lineHeight: 1.5 }}>
                <span
                  style={{
                    marginTop: 3,
                    width: 16,
                    height: 16,
                    borderRadius: 5,
                    background: `color-mix(in oklab,${ACCENT} 14%,transparent)`,
                    color: ACCENT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    flex: "none",
                  }}
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <LearnMore href={DOCS.intelligence} />
        </div>
      </div>
    </section>
  );
}
