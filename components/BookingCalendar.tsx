"use client";

import { useEffect, useState } from "react";
import { ACCENT } from "@/lib/data";

export type Booking = { date: string | null; time: string | null };

const TIME_SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30"];
const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function iso(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export default function BookingCalendar({
  value,
  onChange,
}: {
  value: Booking;
  onChange: (v: Booking) => void;
}) {
  // Compute "today" on the client only, to avoid SSR/CSR date mismatch.
  const [now, setNow] = useState<Date | null>(null);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);

  useEffect(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    setNow(t);
    setView({ y: t.getFullYear(), m: t.getMonth() });
  }, []);

  if (!now || !view) return <div style={{ minHeight: 300 }} aria-hidden="true" />;

  const todayKey = iso(now.getFullYear(), now.getMonth(), now.getDate());
  const monthLabel = new Date(view.y, view.m, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
  const firstDow = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const atCurrentMonth = view.y === now.getFullYear() && view.m === now.getMonth();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const stepMonth = (dir: number) => {
    setView((v) => {
      if (!v) return v;
      const nm = v.m + dir;
      return { y: v.y + Math.floor(nm / 12), m: ((nm % 12) + 12) % 12 };
    });
  };

  const selectDay = (d: number) => {
    const key = iso(view.y, view.m, d);
    onChange({ date: key, time: value.time });
  };

  return (
    <div style={{ border: "1px solid #DCE7F5", borderRadius: 12, background: "#fff", padding: 16 }}>
      {/* month header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#1A1A17" }}>{monthLabel}</span>
        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={() => stepMonth(-1)} disabled={atCurrentMonth} aria-label="Previous month" style={navBtn(atCurrentMonth)}>
            ‹
          </button>
          <button type="button" onClick={() => stepMonth(1)} aria-label="Next month" style={navBtn(false)}>
            ›
          </button>
        </div>
      </div>

      {/* weekday row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 4 }}>
        {DOW.map((d) => (
          <div key={d} style={{ textAlign: "center", fontSize: 10.5, fontFamily: "'JetBrains Mono',monospace", color: "#A6AFC0", padding: "2px 0" }}>
            {d}
          </div>
        ))}
      </div>

      {/* day grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
        {cells.map((d, i) => {
          if (d === null) return <div key={`b${i}`} />;
          const key = iso(view.y, view.m, d);
          const dow = new Date(view.y, view.m, d).getDay();
          const isPast = key < todayKey;
          const isWeekend = dow === 0 || dow === 6;
          const disabled = isPast || isWeekend;
          const selected = value.date === key;
          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => selectDay(d)}
              aria-pressed={selected}
              style={{
                aspectRatio: "1 / 1",
                borderRadius: 8,
                border: selected ? `1px solid ${ACCENT}` : "1px solid transparent",
                background: selected ? ACCENT : "transparent",
                color: selected ? "#fff" : disabled ? "#BFCBDF" : "#1A1A17",
                fontFamily: "inherit",
                fontSize: 13,
                fontWeight: selected ? 700 : 500,
                cursor: disabled ? "default" : "pointer",
                transition: "background .15s, color .15s, border-color .15s",
              }}
              className={disabled ? undefined : "ocs-cal-day"}
            >
              {d}
            </button>
          );
        })}
      </div>

      {/* time slots */}
      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #E3ECF8" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: value.date ? "#1A1A17" : "#A6AFC0", marginBottom: 9 }}>
          {value.date ? "Pick a time (your timezone)" : "Select a date first"}
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {TIME_SLOTS.map((t) => {
            const on = value.time === t;
            const disabled = !value.date;
            return (
              <button
                key={t}
                type="button"
                disabled={disabled}
                onClick={() => onChange({ date: value.date, time: t })}
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 12.5,
                  fontWeight: on ? 700 : 500,
                  padding: "7px 13px",
                  borderRadius: 999,
                  cursor: disabled ? "default" : "pointer",
                  border: `1px solid ${on ? ACCENT : "#DCE7F5"}`,
                  background: on ? ACCENT : "#fff",
                  color: on ? "#fff" : disabled ? "#BFCBDF" : "#3D4A63",
                  transition: "all .15s",
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function navBtn(disabled: boolean) {
  return {
    width: 28,
    height: 28,
    borderRadius: 8,
    border: "1px solid #DCE7F5",
    background: "#fff",
    color: disabled ? "#BFCBDF" : "#1A1A17",
    cursor: disabled ? "default" : "pointer",
    fontSize: 16,
    lineHeight: 1,
    fontFamily: "inherit",
  } as const;
}
