import {
  ACCENT,
  CHANNELS,
  COMPARISON_ROWS,
  DOCS,
  FOOTER_COLS,
  INCLUDED_FEATURES,
  INTEGRATIONS,
  OK,
  PRICING_PROFILES,
  FOOTER_LEGAL,
  COMPANY,
  AUDIENCES,
} from "@/lib/data";
import { COMPETITORS } from "@/lib/compare";
import Reveal from "./Reveal";
import SdkCard from "./SdkCard";
import BrandMark from "./BrandMark";
import OnchainLogo from "./BrandIcon";
import FooterAsk from "./FooterAsk";
import LearnMore from "./LearnMore";

const monoLabel = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 11.5,
  letterSpacing: ".12em",
  textTransform: "uppercase" as const,
  color: ACCENT,
  fontWeight: 600,
};

/* ---- Problem ---- */
export function Problem() {
  return (
    <section id="how" style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 32px 48px", textAlign: "center" }} data-pad>
      <div style={monoLabel}>The problem</div>
      <h2
        style={{
          margin: "16px auto 0",
          maxWidth: 800,
          fontSize: "clamp(28px,3.6vw,42px)",
          lineHeight: 1.1,
          letterSpacing: "-.025em",
          fontWeight: 700,
          textWrap: "balance",
        }}
      >
        Every day, protocols watch their best users churn, and can&apos;t execute a retention campaign.
      </h2>
      <p style={{ margin: "20px auto 0", maxWidth: 660, fontSize: 18, lineHeight: 1.6, color: "#3D4A63", textWrap: "pretty" }}>
        A wallet deposits $50,000. Another pulls its liquidity at 3am. A third stakes once, then suddenly
        unstakes. Protocols can see all of it on-chain, in real time. But today&apos;s marketing tools have no way
        to reach users based on what their wallets actually do on-chain.
      </p>

      <Reveal
        stack
        style={{
          margin: "40px auto 0",
          maxWidth: 900,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 18,
          alignItems: "stretch",
          textAlign: "left",
        }}
      >
        {/* LEFT: what you can see */}
        <div style={{ border: "1px solid #DCE7F5", borderRadius: 16, background: "#fff", overflow: "hidden", boxShadow: "0 1px 2px rgba(26,24,20,.04)", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", borderBottom: "1px solid #E3ECF8", background: "#FFFFFF" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: OK, animation: "ocsPulseDot 2s infinite" }} />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#1A1A17" }}>What you can see</span>
            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#16A34A", background: "#E8F6EE", padding: "2px 7px", borderRadius: 5 }}>
              on-chain · live
            </span>
          </div>
          <div style={{ padding: 6 }}>
            {[
              { dot: "#16A34A", action: "Deposited", meta: "0x7f3a…c21 · Aave", amt: "$50,000" },
              { dot: "#D6850A", action: "Pulled liquidity", meta: "0x44ab…e90 · 3:00am", amt: "$96,000" },
              { dot: "#E0354F", action: "Staked, then unstaked", meta: "0x3de1…77b · Lido", amt: "1,200 ETH" },
            ].map((e, i) => (
              <div
                key={e.meta}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "11px 10px",
                  borderTop: i === 0 ? "none" : "1px solid #EAF1FB",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: e.dot, flex: "none" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: "#1A1A17", fontWeight: 600 }}>{e.action}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#8A93A6", marginTop: 1 }}>{e.meta}</div>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1A17", flex: "none" }}>{e.amt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE: the broken link */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 9, minWidth: 92 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9.5, letterSpacing: ".06em", textTransform: "uppercase", color: "#A6AFC0", textAlign: "center" }}>
            then what?
          </span>
          <div style={{ width: 46, height: 46, borderRadius: 13, background: "#FEF4F5", border: "1px solid #F5D6DB", display: "flex", alignItems: "center", justifyContent: "center", color: "#E0354F", fontSize: 20, fontWeight: 700 }}>
            ✕
          </div>
          <span style={{ fontSize: 11, color: "#C0405A", fontWeight: 600, textAlign: "center", maxWidth: 96, lineHeight: 1.35 }}>
            no channel to reach them
          </span>
        </div>

        {/* RIGHT: what you can do today */}
        <div style={{ border: "1px dashed #CDD9EC", borderRadius: 16, background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", borderBottom: "1px solid #E3ECF8" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#BFCBDF", flex: "none" }} />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#51607A" }}>What you can do today</span>
            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#9A5560", background: "#FEF4F5", padding: "2px 7px", borderRadius: 5 }}>
              email tool
            </span>
          </div>
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", color: "#A6AFC0" }}>New campaign</div>
            <div style={{ border: "1px solid #DCE7F5", borderRadius: 9, background: "#fff", padding: "10px 12px", fontSize: 13, color: "#8A93A6" }}>
              To: <span style={{ color: "#C0405A", fontWeight: 600 }}>wallet has no email on file</span>
            </div>
            <div style={{ border: "1px solid #DCE7F5", borderRadius: 9, background: "#fff", padding: "10px 12px", fontSize: 13, color: "#BFCBDF" }}>Subject…</div>
            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", background: "#BFCBDF", padding: "9px 16px", borderRadius: 9, cursor: "not-allowed" }}>Send</span>
              <span style={{ fontSize: 11.5, color: "#C0405A" }}>✕ no way to reach this wallet</span>
            </div>
          </div>
        </div>
      </Reveal>

      <p style={{ margin: "36px auto 0", maxWidth: 680, fontSize: 17.5, lineHeight: 1.6, color: "#1A1A17", fontWeight: 500, textWrap: "pretty" }}>
        Retention won&apos;t keep every user. That&apos;s a fact. But Web3 has never even had the chance to run a
        complete retention funnel. It never had the channel, and that&apos;s what{" "}
        <span style={{ color: ACCENT, fontWeight: 700 }}>OnchainSuite solves</span>.{" "}
        <span style={{ color: "#3D4A63", fontWeight: 400 }}>The retention edge Web2 companies have always had, finally on-chain.</span>
      </p>
    </section>
  );
}

/* ---- Stats band ---- */
export function StatsBand() {
  const stats = [
    { v: "100%", l: "of connected wallets reached by in-app push" },
    { v: "10", l: "minutes to your first real cohort insight" },
    { v: "4", l: "chains, normalised to one event shape" },
  ];
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 32px" }} data-pad>
      <Reveal
        stats
        stagger
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
          borderTop: "1px solid #DCE7F5",
          borderBottom: "1px solid #DCE7F5",
          padding: "34px 0",
          textAlign: "center",
        }}
      >
        {stats.map((s) => (
          <div key={s.v}>
            <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-.03em", color: "#1A1A17", lineHeight: 1 }}>{s.v}</div>
            <div style={{ marginTop: 8, fontSize: 14, color: "#51607A" }}>{s.l}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ---- Channels ---- */
export function Channels() {
  return (
    <section id="channels" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px", textAlign: "center" }} data-pad>
      <Reveal>
        <div style={monoLabel}>Channels</div>
        <h2
          style={{
            margin: "14px auto 0",
            maxWidth: 640,
            fontSize: "clamp(26px,3.2vw,38px)",
            lineHeight: 1.1,
            letterSpacing: "-.025em",
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          One trigger. Every channel it can reach.
        </h2>
        <p style={{ margin: "16px auto 0", maxWidth: 560, fontSize: 17, lineHeight: 1.55, color: "#3D4A63", textWrap: "pretty" }}>
          A single behaviour reaches whichever channels are set up for each wallet. In-app push leads:
          no DNS, no warm-up, no extra identifier.
        </p>
      </Reveal>
      <Reveal cards stagger style={{ marginTop: 34, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14, textAlign: "left" }}>
        <ChannelsGrid />
      </Reveal>
    </section>
  );
}

function ChannelsGrid() {
  return (
    <>
      {CHANNELS.map((c) => (
        <div
          key={c.name}
          className="ocs-card-hover ocs-spotlight"
          style={{
            border: "1px solid #DCE7F5",
            borderRadius: 14,
            background: "#fff",
            padding: 18,
            boxShadow: "0 1px 2px rgba(26,24,20,.04)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: c.accentIcon ? `color-mix(in oklab,${ACCENT} 16%,#fff)` : "#EAF1FB",
                border: c.accentIcon ? `1px solid color-mix(in oklab,${ACCENT} 36%,#fff)` : "1px solid #DCE7F5",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: c.badgeColor,
                background: c.badgeBg,
                padding: "3px 8px",
                borderRadius: 6,
                fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              {c.badge}
            </span>
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A17" }}>{c.name}</div>
          <div style={{ marginTop: 5, fontSize: 13, color: "#51607A", lineHeight: 1.5 }}>{c.desc}</div>
        </div>
      ))}
    </>
  );
}

/* ---- Comparison ---- */
export function Comparison() {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 32px", textAlign: "center" }} data-pad>
      <Reveal>
        <div style={monoLabel}>Why OnchainSuite</div>
        <h2
          style={{
            margin: "14px auto 0",
            maxWidth: 620,
            fontSize: "clamp(26px,3.2vw,38px)",
            lineHeight: 1.1,
            letterSpacing: "-.025em",
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          Replace the patchwork stack with one loop.
        </h2>
        <p style={{ margin: "16px auto 0", maxWidth: 560, fontSize: 17, lineHeight: 1.55, color: "#3D4A63", textWrap: "pretty" }}>
          Most Web3 teams stitch together email, auth, analytics, and CSV exports. It&apos;s slow and can&apos;t
          automate in real time. OnchainSuite replaces all of it.
        </p>
      </Reveal>
      <Reveal
        style={{
          marginTop: 34,
          border: "1px solid #DCE7F5",
          borderRadius: 18,
          background: "#fff",
          overflow: "hidden",
          boxShadow: "0 1px 2px rgba(26,24,20,.05),0 8px 26px -20px rgba(26,24,20,.08)",
          textAlign: "left",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, background: "#FFFFFF" }} data-cmp>
          <div style={cmpHead}>Capability</div>
          <div style={cmpHead}>Patchwork stack</div>
          <div style={{ ...cmpHead, color: ACCENT, background: `color-mix(in oklab,${ACCENT} 5%,#fff)` }}>OnchainSuite</div>
        </div>
        {COMPARISON_ROWS.map((r) => (
          <div key={r.cap} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderTop: "1px solid #DCE7F5" }} data-cmp>
            <div style={{ padding: "15px 18px", fontSize: 14, fontWeight: 600, color: "#1A1A17" }}>{r.cap}</div>
            <div style={{ padding: "15px 18px", fontSize: 14, color: "#8A93A6" }}>{r.old}</div>
            <div
              style={{
                padding: "15px 18px",
                fontSize: 14,
                color: "#1A1A17",
                fontWeight: 500,
                background: `color-mix(in oklab,${ACCENT} 4%,#fff)`,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 5,
                  background: `color-mix(in oklab,${ACCENT} 16%,#fff)`,
                  color: ACCENT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 9,
                  fontWeight: 700,
                  flex: "none",
                }}
              >
                ✓
              </span>
              {r.neu}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

const cmpHead = {
  padding: "14px 18px",
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 10.5,
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
  color: "#A6AFC0",
};

/* ---- SDK ---- */
export function SdkSection() {
  return (
    <section id="developers" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px" }} data-pad>
      <div style={{ display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 48, alignItems: "center" }} data-stack>
        <Reveal>
          <div style={monoLabel}>Developer experience</div>
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
            Drop in in-app push in minutes.
          </h2>
          <p style={{ margin: "16px 0 0", fontSize: 17, lineHeight: 1.6, color: "#3D4A63", textWrap: "pretty" }}>
            A lightweight SDK your team adds to the dApp. It opens a socket, OnchainSuite pushes the payload,
            the SDK renders the toast, banner, or modal. No extra identifier needed.
          </p>
          <LearnMore href={DOCS.inAppPush} />
        </Reveal>
        <Reveal>
          <SdkCard />
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Integrations ---- */
export function Integrations() {
  return (
    <section id="integrations" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px", textAlign: "center" }} data-pad>
      <Reveal>
        <div style={monoLabel}>Integrations</div>
        <h2
          style={{
            margin: "14px auto 0",
            maxWidth: 620,
            fontSize: "clamp(26px,3.2vw,38px)",
            lineHeight: 1.1,
            letterSpacing: "-.025em",
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          Plug into the stack you already run.
        </h2>
        <p style={{ margin: "16px auto 0", maxWidth: 540, fontSize: 17, lineHeight: 1.55, color: "#3D4A63", textWrap: "pretty" }}>
          Wallets, chains, chat, and developer tools, all connected into one real-time pipeline.
        </p>
      </Reveal>
      <Reveal
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
          gap: 12,
          textAlign: "left",
        }}
      >
        {INTEGRATIONS.map((name) => (
          <div
            key={name}
            className="ocs-chip-hover"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #DCE7F5",
              borderRadius: 11,
              background: "#fff",
              padding: "13px 15px",
              boxShadow: "0 1px 2px rgba(26,24,20,.03)",
            }}
          >
            <BrandMark name={name} />
            <span style={{ fontSize: 14, fontWeight: 600, color: "#3A3A34" }}>{name}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ---- Testimonials ---- */
export function Testimonials() {
  return (
    <section style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px", textAlign: "center" }} data-pad>
      <Reveal>
        <div style={monoLabel}>Who it&apos;s for</div>
        <h2
          style={{
            margin: "14px auto 0",
            maxWidth: 620,
            fontSize: "clamp(26px,3.2vw,38px)",
            lineHeight: 1.1,
            letterSpacing: "-.025em",
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          Built for teams who feel the pain.
        </h2>
      </Reveal>
      <Reveal cards stagger style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, textAlign: "left" }}>
        {AUDIENCES.map((a) => (
          <div key={a.who} className="ocs-card-hover ocs-spotlight" style={{ border: "1px solid #DCE7F5", borderRadius: 18, background: "#fff", padding: 24, boxShadow: "0 1px 2px rgba(26,24,20,.04)" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A17", letterSpacing: "-.01em" }}>{a.who}</div>
            <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "#3D4A63", textWrap: "pretty" }}>{a.pain}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ---- Pricing (usage-based reference profiles) ---- */
export function PricingProfiles() {
  return (
    <Reveal cards stagger style={{ marginTop: 34, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, textAlign: "left", alignItems: "stretch" }}>
      {PRICING_PROFILES.map((p) => (
        <div
          key={p.name}
          className={p.featured ? "ocs-anim-border ocs-card-hover ocs-spotlight" : "ocs-card-hover ocs-spotlight"}
          style={{
            ...(p.featured ? {} : { border: "1px solid #DCE7F5", background: "#fff" }),
            borderRadius: 18,
            padding: 24,
            boxShadow: p.featured
              ? `0 1px 2px rgba(26,24,20,.05),0 22px 50px -26px color-mix(in oklab,${ACCENT} 30%,transparent)`
              : "0 1px 2px rgba(26,24,20,.04)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#1A1A17" }}>{p.name}</span>
            {p.featured && (
              <span style={{ fontSize: 10.5, fontWeight: 600, color: "#fff", background: ACCENT, padding: "2px 8px", borderRadius: 999, fontFamily: "monospace" }}>
                POPULAR
              </span>
            )}
          </div>
          <div style={{ marginTop: 12, fontSize: 28, fontWeight: 700, letterSpacing: "-.02em", color: "#1A1A17" }}>
            {p.price}
            <span style={{ fontSize: 14, fontWeight: 500, color: "#8A93A6" }}> /mo</span>
          </div>
          <div style={{ marginTop: 4, fontSize: 13, color: "#8A93A6" }}>{p.desc}</div>
          <div
            style={{
              margin: "16px 0",
              padding: "12px 0",
              borderTop: "1px solid #E3ECF8",
              borderBottom: "1px solid #E3ECF8",
              display: "flex",
              flexDirection: "column",
              gap: 7,
              flex: 1,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5 }}>
              <span style={{ color: "#8A93A6" }}>tracked wallets</span>
              <span style={{ color: "#1A1A17", fontWeight: 600 }}>{p.wallets.toLocaleString("en-US")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5 }}>
              <span style={{ color: "#8A93A6" }}>subscribers</span>
              <span style={{ color: "#1A1A17", fontWeight: 600 }}>{p.subscribers.toLocaleString("en-US")}</span>
            </div>
          </div>
          <a
            href={p.href}
            {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={p.featured ? "ocs-btn-primary" : "ocs-btn-outline"}
            style={{
              display: "block",
              textAlign: "center",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 11,
              padding: 10,
              color: p.featured ? "#fff" : "#1A1A17",
              background: p.featured ? ACCENT : "#fff",
              border: p.featured ? "none" : "1px solid #DCE7F5",
            }}
          >
            {p.cta}
          </a>
        </div>
      ))}
    </Reveal>
  );
}

export function IncludedFeatures() {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 32px 40px", textAlign: "center" }} data-pad>
      <Reveal>
        <div style={monoLabel}>Every plan</div>
        <h2
          style={{
            margin: "14px auto 0",
            maxWidth: 600,
            fontSize: "clamp(24px,3vw,34px)",
            lineHeight: 1.12,
            letterSpacing: "-.025em",
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          Everything included, whatever your size.
        </h2>
        <p style={{ margin: "14px auto 0", maxWidth: 540, fontSize: 16.5, lineHeight: 1.55, color: "#3D4A63", textWrap: "pretty" }}>
          Pricing scales with usage, not features. Every protocol gets the full platform from day one.
        </p>
      </Reveal>
      <Reveal style={{ marginTop: 30, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 28px", textAlign: "left", maxWidth: 820, marginLeft: "auto", marginRight: "auto" }} cards stagger>
        {INCLUDED_FEATURES.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 11, fontSize: 14.5, color: "#3A3A34", lineHeight: 1.5 }}>
            <span
              style={{
                marginTop: 2,
                width: 18,
                height: 18,
                borderRadius: 6,
                background: `color-mix(in oklab,${ACCENT} 14%,#fff)`,
                color: ACCENT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                flex: "none",
              }}
            >
              ✓
            </span>
            {f}
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px", textAlign: "center" }} data-pad>
      <Reveal>
        <div style={monoLabel}>Pricing</div>
        <h2
          style={{
            margin: "14px auto 0",
            maxWidth: 620,
            fontSize: "clamp(26px,3.2vw,38px)",
            lineHeight: 1.1,
            letterSpacing: "-.025em",
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          Usage-based pricing. Pay for what you use.
        </h2>
        <p style={{ margin: "16px auto 0", maxWidth: 540, fontSize: 17, lineHeight: 1.55, color: "#3D4A63", textWrap: "pretty" }}>
          A small base fee plus the wallets you track and the subscribers you reach. In-app push to every connected
          wallet is included, no rigid tiers and no SMS. Early-access teams lock in founding rates.
        </p>
      </Reveal>
      <PricingProfiles />
      <div style={{ marginTop: 24 }}>
        <a href="/pricing" className="ocs-link-muted" style={{ fontSize: 14, fontWeight: 600, color: ACCENT }}>
          See full pricing &amp; estimate calculator →
        </a>
      </div>
    </section>
  );
}

/* ---- Footer (v2 design handoff) ---- */
const footColHead = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 11,
  letterSpacing: ".1em",
  textTransform: "uppercase" as const,
  color: "#767B83",
  marginBottom: 16,
};

export function SiteFooter() {
  return (
    <footer style={{ background: "#F5F6F7", borderTop: "1px solid #DEE0E3", color: "#010F31" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }} data-pad>

        {/* Ask the docs band */}
        <div className="ocs-foot-ask" style={{ padding: "56px 0 44px", borderBottom: "1px solid #DEE0E3", alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "#767B83" }}>Ask the docs</div>
            <h3 style={{ margin: "14px 0 10px", fontSize: 32, lineHeight: 1.1, letterSpacing: "-1px", fontWeight: 600, color: "#010F31" }}>Ask anything about OnchainSuite</h3>
            <p style={{ margin: 0, maxWidth: "44ch", fontSize: 15, lineHeight: 1.6, color: "#585D65" }}>Answers drawn from our docs, changelog and comparison pages. Cited, never invented.</p>
          </div>
          <FooterAsk />
        </div>

        {/* Link columns */}
        <div className="ocs-foot-grid" style={{ padding: "44px 0 40px", borderBottom: "1px solid #DEE0E3" }}>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div style={footColHead}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.items.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="ocs-foot-link"
                    style={{ fontSize: 14.5, color: it.accent ? "#1727E0" : "#42464D", fontWeight: it.accent ? 500 : 400 }}
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          {/* Compare column */}
          <div>
            <div style={footColHead}>Compare</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 28px", fontSize: 14.5, whiteSpace: "nowrap" }}>
              {COMPETITORS.filter((c) => c.slug !== "klaviyo").map((c) => (
                <a key={c.slug} href={`/compare/${c.slug}`} className="ocs-foot-link" style={{ color: "#42464D" }}>vs {c.name}</a>
              ))}
              <a href="/compare" className="ocs-foot-link" style={{ color: "#1727E0", fontWeight: 500 }}>All comparisons</a>
            </div>
          </div>
        </div>

        {/* Legal row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, paddingTop: 26, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <a href="/#top" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <OnchainLogo size={22} gradientId="ocsLogoFooter" />
              <span style={{ fontWeight: 700, fontSize: 15.5, color: "#010F31" }}>OnchainSuite</span>
            </a>
            {FOOTER_LEGAL.map((l) => (
              <a key={l.label} href={l.href} className="ocs-foot-link" style={{ fontSize: 13, color: "#767B83" }}>{l.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#585D65" }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "#17A66B", display: "block" }} />
            All systems operational
          </div>
        </div>

        <p style={{ margin: "22px 0 0", maxWidth: "88ch", fontSize: 13, lineHeight: 1.6, color: "#767B83" }}>
          {COMPANY.legalName} is registered in {COMPANY.jurisdiction}, company number {COMPANY.number}, registered
          office {COMPANY.office}. OnchainSuite reads public blockchain data; it never holds custody of funds or
          private keys.
        </p>
      </div>

      {/* Oversized cropped wordmark floor */}
      <div style={{ overflow: "hidden", marginTop: 34, lineHeight: 0.78 }} aria-hidden="true">
        <div style={{ fontSize: "15.6vw", fontWeight: 600, letterSpacing: "-0.055em", color: "#E4E7EA", whiteSpace: "nowrap", textAlign: "center", marginBottom: "-0.26em", userSelect: "none" }}>
          OnchainSuite
        </div>
      </div>

      <style>{`
        .ocs-foot-ask { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.05fr); gap:56px; }
        .ocs-foot-grid { display:grid; grid-template-columns:1fr 0.9fr 1.2fr 1.6fr; gap:40px; }
        footer .ocs-foot-link { text-decoration:none; transition:color .12s ease; }
        footer .ocs-foot-link:hover { color:#E04E12 !important; }
        @media (max-width:900px){
          .ocs-foot-ask { grid-template-columns:1fr; gap:28px; }
          .ocs-foot-grid { grid-template-columns:1fr 1fr; gap:32px; }
        }
        @media (max-width:600px){ .ocs-foot-grid { grid-template-columns:1fr; } }
      `}</style>
    </footer>
  );
}
