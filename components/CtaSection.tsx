"use client";

import { FormEvent, useState } from "react";
import { ACCENT } from "@/lib/data";

export default function CtaSection() {
  const [email, setEmail] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = /.+@.+\..+/.test(email) ? `?email=${encodeURIComponent(email)}` : "";
    window.location.href = `/early-access${q}`;
  };

  return (
    <section id="cta" style={{ maxWidth: 1320, margin: "0 auto", padding: "40px 32px 16px" }} data-pad>
      <div
        className="ocs-anim-border"
        style={{
          position: "relative",
          borderRadius: 24,
          padding: "56px 32px",
          textAlign: "center",
          overflow: "hidden",
          boxShadow: "0 1px 2px rgba(26,24,20,.05),0 30px 60px -34px rgba(26,24,20,.22)",
        }}
      >
        {/* layered accent wash + dot grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(560px 280px at 50% 0%, color-mix(in oklab,${ACCENT} 10%,transparent), transparent 70%), radial-gradient(420px 240px at 50% 100%, color-mix(in oklab,#2F94FF 6%,transparent), transparent 72%)`,
          }}
        />
        <div className="ocs-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          <h2
            style={{
              margin: "0 auto",
              maxWidth: 720,
              fontSize: "clamp(28px,3.8vw,46px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              fontWeight: 700,
              textWrap: "balance",
            }}
          >
            Start acting on what your users do{" "}
            <span className="ocs-grad-text">on-chain.</span>
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: 540,
              fontSize: 18,
              lineHeight: 1.55,
              color: "#3D4A63",
              textWrap: "pretty",
            }}
          >
            Write your first rule today. It fires the moment a wallet acts, day or night, until you pause it.
          </p>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 13,
            }}
          >
            <form
              onSubmit={submit}
              style={{ display: "flex", gap: 8, width: "100%", maxWidth: 460, flexWrap: "wrap", justifyContent: "center" }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@protocol.xyz"
                className="ocs-input"
                style={{
                  flex: 1,
                  minWidth: 210,
                  fontSize: 15,
                  fontFamily: "inherit",
                  color: "#1A1A17",
                  background: "#fff",
                  border: "1px solid #DCE7F5",
                  borderRadius: 11,
                  padding: "13px 16px",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                className="ocs-btn-primary"
                style={{
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: "#fff",
                  background: ACCENT,
                  border: "none",
                  cursor: "pointer",
                  padding: "13px 22px",
                  borderRadius: 11,
                  boxShadow: `0 1px 2px rgba(0,0,0,.08),0 2px 8px color-mix(in oklab,${ACCENT} 20%,transparent)`,
                }}
              >
                Get early access
              </button>
            </form>
            <div style={{ fontSize: 13.5, color: "#8A93A6" }}>
              Usage-based pricing · in-app push + email · founding rates for early teams
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
