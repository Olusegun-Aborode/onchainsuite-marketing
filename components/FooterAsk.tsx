"use client";

import { KeyboardEvent, useState } from "react";

// "Ask the docs" panel from the v2 design handoff. This is a MOCKUP: it reveals a
// hard-coded, cited answer on submit. Wire the input to a real docs-search
// endpoint before launch; keep the cited-sources pattern.
const ANSWER =
  "Create an automation with the trigger Onchain event → Swap, scope it to the pools you care about, then attach a message step. The wallet is resolved to an email or push token at send time, so the same automation reaches whichever channel that wallet is reachable on.";
const SOURCES = ["docs/automations#triggers", "docs/identity/resolution", "changelog 2026-04-11"];
const SUGGESTIONS = ["Which chains do you index?", "How is identity resolved?", "Do you replace my ESP?"];

const mono = { fontFamily: "'JetBrains Mono',monospace" };

export default function FooterAsk() {
  const [ask, setAsk] = useState("");
  const [answered, setAnswered] = useState(false);
  const [focused, setFocused] = useState(false);

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setAnswered(true);
  };

  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          border: `1px solid ${focused ? "#FF6828" : "#DEE0E3"}`,
          borderRadius: 4,
          padding: "0 12px",
          background: "#FFFFFF",
          boxShadow: focused ? "0 0 0 3px rgba(255,104,40,0.28)" : "none",
          transition: "border-color .12s ease, box-shadow .12s ease",
        }}
      >
        <span style={{ flex: "none", display: "flex", color: "#767B83" }} aria-hidden="true">
          <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </span>
        <input
          value={ask}
          onChange={(e) => { setAsk(e.target.value); setAnswered(false); }}
          onKeyDown={onKey}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label="Ask the docs"
          placeholder="How do I trigger a message on a swap?"
          style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", padding: "12px 0", fontFamily: "'Instrument Sans',sans-serif", fontSize: 15, color: "#010F31" }}
        />
        <button
          type="button"
          onClick={() => setAnswered(true)}
          style={{ flex: "none", height: 32, padding: "0 16px", border: 0, borderRadius: 4, background: "#1727E0", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
        >
          Ask
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => { setAsk(s); setAnswered(false); }}
            className="ocs-ask-chip"
            style={{ border: "1px solid #DEE0E3", background: "#FBFBFC", color: "#42464D", fontFamily: "'Instrument Sans',sans-serif", fontSize: 12.5, padding: "6px 10px", borderRadius: 2, cursor: "pointer" }}
          >
            {s}
          </button>
        ))}
      </div>

      {answered && (
        <div style={{ marginTop: 16, borderTop: "1px solid #ECEDEF", paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 24, height: 24, borderRadius: 999, background: "#ECEDEF", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", color: "#585D65" }} aria-hidden="true">
              <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: "0 0 10px", fontSize: 14.5, lineHeight: 1.65, color: "#42464D" }}>{ANSWER}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {SOURCES.map((src) => (
                  <span key={src} style={{ ...mono, fontSize: 11, color: "#585D65", background: "#F5F6F7", border: "1px solid #ECEDEF", borderRadius: 2, padding: "3px 7px" }}>
                    {src}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`.ocs-ask-chip:hover{border-color:#C4C7CC !important;color:#010F31 !important}`}</style>
    </div>
  );
}
