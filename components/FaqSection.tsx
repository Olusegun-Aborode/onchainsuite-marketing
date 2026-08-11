"use client";

import { useState } from "react";
import { ACCENT, FAQ_ITEMS } from "@/lib/data";

type FaqItem = { q: string; a: string };

export default function FaqSection({
  items = FAQ_ITEMS,
  eyebrow = "FAQ",
  title = "Questions, answered.",
}: {
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section style={{ maxWidth: 820, margin: "0 auto", padding: "56px 32px", textAlign: "center" }} data-pad>
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
        {eyebrow}
      </div>
      <h2
        style={{
          margin: "14px auto 0",
          maxWidth: 600,
          fontSize: "clamp(26px,3.2vw,38px)",
          lineHeight: 1.1,
          letterSpacing: "-.025em",
          fontWeight: 700,
          textWrap: "balance",
        }}
      >
        {title}
      </h2>

      <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
        {items.map((item, i) => {
          const isOpen = open.has(i);
          return (
            <div
              key={item.q}
              className="ocs-faq-item"
              style={{
                border: "1px solid #DCE7F5",
                borderRadius: 14,
                background: "#fff",
                boxShadow: "0 1px 2px rgba(26,24,20,.04)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 20px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#1A1A17",
                  fontFamily: "inherit",
                }}
              >
                <span style={{ flex: 1, lineHeight: 1.4 }}>{item.q}</span>
                <span
                  className={`ocs-faq-chevron${isOpen ? " open" : ""}`}
                  style={{
                    flex: "none",
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    background: isOpen ? `color-mix(in oklab,${ACCENT} 14%,#fff)` : "#FFFFFF",
                    border: `1px solid ${isOpen ? `color-mix(in oklab,${ACCENT} 35%,#fff)` : "#DCE7F5"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isOpen ? ACCENT : "#8A93A6",
                    fontSize: 12,
                  }}
                >
                  ▾
                </span>
              </button>
              <div className={`ocs-faq-panel${isOpen ? " open" : ""}`}>
                <div>
                  <p
                    style={{
                      margin: 0,
                      padding: "0 20px 20px",
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "#3D4A63",
                      textWrap: "pretty",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
