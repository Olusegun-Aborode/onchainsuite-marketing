"use client";

import { CSSProperties, useEffect, useState } from "react";
import { ACCENT } from "@/lib/data";
import BookingCalendar, { Booking } from "./BookingCalendar";

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "ymail.com", "hotmail.com", "outlook.com",
  "live.com", "msn.com", "icloud.com", "me.com", "mac.com", "aol.com", "proton.me",
  "protonmail.com", "pm.me", "gmx.com", "mail.com", "zoho.com", "yandex.com", "hey.com",
]);

const USE_CASES = [
  "Churn win-back",
  "Lifecycle automations",
  "On-chain campaigns",
  "Audience & intelligence",
  "Email + on-chain combined",
  "Something else",
];

type Errors = Partial<Record<"name" | "protocol" | "email" | "useCase" | "booking", string>>;

const labelStyle: CSSProperties = { display: "block", fontSize: 13, fontWeight: 600, color: "#3A3A34", marginBottom: 6 };
const inputStyle: CSSProperties = {
  width: "100%",
  fontSize: 15,
  fontFamily: "inherit",
  color: "#1A1A17",
  background: "#fff",
  border: "1px solid #DCE7F5",
  borderRadius: 11,
  padding: "12px 14px",
  outline: "none",
};
const errStyle: CSSProperties = { fontSize: 12, color: "#C0405A", marginTop: 5 };

const STEPS = ["About you", "Your use case", "Book a call"];

export default function EarlyAccessForm() {
  const [name, setName] = useState("");
  const [protocol, setProtocol] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [notes, setNotes] = useState("");
  const [booking, setBooking] = useState<Booking>({ date: null, time: null });
  const [errors, setErrors] = useState<Errors>({});
  const [open, setOpen] = useState(0);
  const [done, setDone] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("email");
    if (q) setEmail(q);
  }, []);

  const markDone = (i: number, ok: boolean) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (ok) next.add(i);
      else next.delete(i);
      return next;
    });

  // Validate a single step; returns the errors for that step.
  const validateStep = (step: number): Errors => {
    const e: Errors = {};
    if (step === 0) {
      if (!name.trim()) e.name = "Please enter your name.";
      if (!protocol.trim()) e.protocol = "Please enter your protocol name.";
      const addr = email.trim().toLowerCase();
      if (!/.+@.+\..+/.test(addr)) e.email = "Enter a valid email address.";
      else if (FREE_EMAIL_DOMAINS.has(addr.split("@")[1])) e.email = "Please use your work email, not a personal one.";
    } else if (step === 1) {
      if (!useCase) e.useCase = "Pick what you want to use OnchainSuite for.";
    } else if (step === 2) {
      if (!booking.date || !booking.time) e.booking = "Choose a date and time for your call.";
    }
    return e;
  };

  const advance = (step: number) => {
    const e = validateStep(step);
    setErrors((prev) => ({ ...prev, ...e, ...clearKeys(step) }));
    const ok = Object.keys(e).length === 0;
    markDone(step, ok);
    if (ok) setOpen(step + 1);
  };

  const submit = () => {
    const e = validateStep(2);
    setErrors((prev) => ({ ...prev, ...e }));
    markDone(2, Object.keys(e).length === 0);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  if (submitted) return <Success name={name} protocol={protocol} email={email} booking={booking} />;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {STEPS.map((title, i) => {
        const isOpen = open === i;
        const isDone = done.has(i);
        return (
          <div key={title} className="ocs-faq-item" style={{ border: "1px solid #DCE7F5", borderRadius: 14, background: "#fff", overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "15px 16px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  flex: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  color: isDone || isOpen ? "#fff" : "#8A93A6",
                  background: isDone ? "#16A34A" : isOpen ? ACCENT : "#EAF1FB",
                }}
              >
                {isDone ? "✓" : i + 1}
              </span>
              <span style={{ flex: 1, fontSize: 15, fontWeight: 600, color: "#1A1A17" }}>{title}</span>
              <span className={`ocs-faq-chevron${isOpen ? " open" : ""}`} style={{ color: "#8A93A6", fontSize: 12 }}>
                ▾
              </span>
            </button>

            <div className={`ocs-faq-panel${isOpen ? " open" : ""}`}>
              <div>
                <div style={{ padding: "2px 16px 18px", display: "flex", flexDirection: "column", gap: 16 }}>
                  {i === 0 && (
                    <>
                      <Field label="Full name" id="ea-name" value={name} onChange={setName} placeholder="Ada Lovelace" error={errors.name} />
                      <Field label="Protocol name" id="ea-protocol" value={protocol} onChange={setProtocol} placeholder="Aave, Lido, your protocol…" error={errors.protocol} />
                      <Field label="Work email" id="ea-email" type="email" value={email} onChange={setEmail} placeholder="you@protocol.xyz" error={errors.email} />
                      <Continue onClick={() => advance(0)} />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <div>
                        <label style={labelStyle} htmlFor="ea-usecase">What do you want to use OnchainSuite for?</label>
                        <select
                          id="ea-usecase"
                          className="ocs-input"
                          style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: useCase ? "#1A1A17" : "#8A93A6" }}
                          value={useCase}
                          onChange={(e) => setUseCase(e.target.value)}
                        >
                          <option value="" disabled>Select a use case…</option>
                          {USE_CASES.map((u) => (
                            <option key={u} value={u} style={{ color: "#1A1A17" }}>{u}</option>
                          ))}
                        </select>
                        {errors.useCase && <div style={errStyle}>{errors.useCase}</div>}
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="ea-notes">Anything else? <span style={{ color: "#A6AFC0", fontWeight: 400 }}>(optional)</span></label>
                        <textarea
                          id="ea-notes"
                          className="ocs-input"
                          style={{ ...inputStyle, minHeight: 72, resize: "vertical", lineHeight: 1.5 }}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Chains you're on, rough wallet count, what you're trying to fix…"
                        />
                      </div>
                      <Continue onClick={() => advance(1)} />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <BookingCalendar value={booking} onChange={(b) => setBooking(b)} />
                      {errors.booking && <div style={errStyle}>{errors.booking}</div>}
                      <button
                        type="button"
                        onClick={submit}
                        className="ocs-btn-primary"
                        style={{ fontSize: 15.5, fontWeight: 600, color: "#fff", background: ACCENT, border: "none", cursor: "pointer", padding: "14px 22px", borderRadius: 11, boxShadow: `0 1px 2px rgba(0,0,0,.08),0 2px 8px color-mix(in oklab,${ACCENT} 20%,transparent)` }}
                      >
                        Submit & book my call
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#8A93A6" }}>
        We onboard a handful of teams each week. No spam, ever.
      </p>
    </div>
  );
}

// Only clear the keys that belong to the given step, so other steps' errors persist.
function clearKeys(step: number): Errors {
  if (step === 0) return { name: undefined, protocol: undefined, email: undefined };
  if (step === 1) return { useCase: undefined };
  return { booking: undefined };
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>{label}</label>
      <input id={id} type={type} className="ocs-input" style={inputStyle} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      {error && <div style={errStyle}>{error}</div>}
    </div>
  );
}

function Continue({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ocs-btn-primary"
      style={{ alignSelf: "flex-start", fontSize: 14.5, fontWeight: 600, color: "#fff", background: ACCENT, border: "none", cursor: "pointer", padding: "11px 20px", borderRadius: 10, boxShadow: `0 1px 2px rgba(0,0,0,.08),0 2px 8px color-mix(in oklab,${ACCENT} 20%,transparent)` }}
    >
      Continue →
    </button>
  );
}

function Success({ name, protocol, email, booking }: { name: string; protocol: string; email: string; booking: Booking }) {
  const when =
    booking.date &&
    new Date(`${booking.date}T00:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  return (
    <div style={{ border: `1px solid color-mix(in oklab,${ACCENT} 28%,#DCE7F5)`, borderRadius: 16, background: `color-mix(in oklab,${ACCENT} 4%,#fff)`, padding: 28 }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#16A34A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>✓</div>
      <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-.02em", color: "#1A1A17" }}>
        You&apos;re booked, {name.split(" ")[0]}.
      </h2>
      <p style={{ margin: "12px 0 0", fontSize: 15.5, lineHeight: 1.6, color: "#3D4A63" }}>
        Your call is set for <strong style={{ color: "#1A1A17" }}>{when}</strong> at{" "}
        <strong style={{ color: "#1A1A17" }}>{booking.time}</strong>. We&apos;ll email{" "}
        <strong style={{ color: "#1A1A17" }}>{email}</strong> with the invite and a short pre-read for {protocol}.
      </p>
      <a href="/" className="ocs-link-muted" style={{ display: "inline-block", marginTop: 20, fontSize: 14, fontWeight: 600, color: ACCENT }}>
        ← Back to site
      </a>
    </div>
  );
}
