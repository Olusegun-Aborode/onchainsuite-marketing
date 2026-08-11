"use client";

import { ACCENT } from "@/lib/data";

/* Shared Intelligence sub-views, used by both the standalone Intelligence
   section and the hero command center, so the two stay identical. */

// Win-back automation steps, built from the cohort query.
const WINBACK_STEPS = [
  { text: "Segment locked · 87 wallets", active: false },
  { text: "Trigger set · deposited >$10k, no return", active: false },
  { text: "In-app push drafted · “We saved your spot”", active: false },
  { text: "Email drafted · win-back incentive", active: false },
  { text: "Automation live · runs on its own", active: true },
];

// Saved segments shown after "Save as segment".
const SAVED_SEGMENTS = [
  { name: "Whales · >$10k, no return", count: "87", seen: "just now", color: ACCENT, isNew: true },
  { name: "Churn risk · idle 14d+", count: "1,240", seen: "2h ago", color: "#E0354F" },
  { name: "Active LPs · added liquidity 7d", count: "312", seen: "yesterday", color: "#16A34A" },
  { name: "Stakers · stake < 0.5× peak", count: "540", seen: "3d ago", color: "#D6850A" },
  { name: "First deposits · this week", count: "96", seen: "5d ago", color: "#5BA6FF" },
];

const monoLabel = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 10,
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
  color: "#A6AFC0",
};

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ocs-link-muted"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 12.5,
        fontWeight: 600,
        padding: 0,
      }}
    >
      ← Back
    </button>
  );
}

export function AutomationView({ onBack }: { onBack: () => void }) {
  return (
    <div
      style={{
        marginTop: 14,
        border: `1px solid color-mix(in oklab,${ACCENT} 28%,#DCE7F5)`,
        borderRadius: 11,
        background: `color-mix(in oklab,${ACCENT} 4%,#fff)`,
        padding: 15,
        animation: "ocsFadeIn .35s ease both",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 13 }}>
        <BackButton onClick={onBack} />
        <span style={{ fontSize: 13.5, fontWeight: 700, color: "#1A1A17" }}>Win-Back automation</span>
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#16A34A", background: "#E8F6EE", padding: "2px 8px", borderRadius: 6 }}>
          LIVE
        </span>
      </div>

      <div
        style={{
          border: `1px solid color-mix(in oklab,${ACCENT} 35%,#DCE7F5)`,
          borderRadius: 10,
          background: "#fff",
          padding: "11px 13px",
          marginBottom: 12,
        }}
      >
        <div style={{ ...monoLabel, color: ACCENT, marginBottom: 4 }}>Trigger · from your query</div>
        <div style={{ fontSize: 13, color: "#1A1A17", fontWeight: 600 }}>Deposited &gt;$10k last month, no return tx since</div>
        <div style={{ fontSize: 11.5, color: "#8A93A6", marginTop: 2 }}>Audience · 87 wallets</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {WINBACK_STEPS.map((s, i) => (
          <div
            key={s.text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              fontSize: 12.5,
              color: s.active ? "#1A1A17" : "#3A3A34",
              fontWeight: s.active ? 600 : 400,
              animation: "ocsRowIn .4s ease both",
              animationDelay: `${i * 0.16}s`,
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 5,
                background: s.active ? `color-mix(in oklab,${ACCENT} 14%,#fff)` : "#E8F6EE",
                color: s.active ? ACCENT : "#16A34A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                flex: "none",
              }}
            >
              {s.active ? "•" : "✓"}
            </span>
            {s.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 13, fontSize: 11, color: "#A6AFC0" }}>Built from your query, no SQL.</div>
    </div>
  );
}

export function SegmentsView({ onBack }: { onBack: () => void }) {
  return (
    <div
      style={{
        marginTop: 14,
        border: "1px solid #DCE7F5",
        borderRadius: 11,
        background: "#fff",
        padding: 15,
        animation: "ocsFadeIn .35s ease both",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
        <BackButton onClick={onBack} />
        <span style={{ fontSize: 13.5, fontWeight: 700, color: "#1A1A17" }}>Saved segments</span>
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#A6AFC0" }}>
          {SAVED_SEGMENTS.length} total
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {SAVED_SEGMENTS.map((seg, i) => (
          <div
            key={seg.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 11px",
              borderRadius: 9,
              border: seg.isNew ? `1px solid color-mix(in oklab,${ACCENT} 30%,#DCE7F5)` : "1px solid #E3ECF8",
              background: seg.isNew ? `color-mix(in oklab,${ACCENT} 5%,#fff)` : "#FFFFFF",
              animation: "ocsRowIn .35s ease both",
              animationDelay: `${i * 0.05}s`,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: seg.color, flex: "none" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A17", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {seg.name}
            </span>
            {seg.isNew && (
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 700, color: "#fff", background: ACCENT, padding: "1px 6px", borderRadius: 999, flex: "none" }}>
                NEW
              </span>
            )}
            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#1A1A17", fontWeight: 600, flex: "none" }}>
              {seg.count}
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#A6AFC0", flex: "none", width: 64, textAlign: "right" }}>
              {seg.seen}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: "#A6AFC0" }}>Use any segment in a campaign or automation.</div>
    </div>
  );
}
