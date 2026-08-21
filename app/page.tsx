import { CSSProperties } from "react";
import { ACCENT, ACCENT_HOVER, OK, PARTNERS } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import MonitorSection from "@/components/MonitorSection";
import AutomationsSection from "@/components/AutomationsSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import LogoMarquee from "@/components/LogoMarquee";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import {
  Channels,
  Comparison,
  Integrations,
  Problem,
  SdkSection,
  SiteFooter,
  StatsBand,
  Testimonials,
} from "@/components/StaticSections";

const themeVars = {
  "--acc": ACCENT,
  "--acc-h": ACCENT_HOVER,
  "--ok": OK,
  minHeight: "100vh",
  background: "#FAFAF8",
  overflowX: "clip",
} as CSSProperties;

export default function Home() {
  return (
    <div style={themeVars}>
      <SiteHeader />
      <Hero />
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "8px 32px 8px", textAlign: "center" }} data-pad>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#8A93A6", marginBottom: 18 }}>
          Trusted by teams building on-chain
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", justifyContent: "center", alignItems: "center" }}>
          {PARTNERS.trusted.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="ocs-home-wordmark" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.3px", color: "#8A93A6", textDecoration: "none" }}>
              {p.name}
            </a>
          ))}
        </div>
        <style>{`.ocs-home-wordmark{transition:color .15s ease}.ocs-home-wordmark:hover{color:#1727E0}`}</style>
      </section>
      <LogoMarquee />
      <Problem />
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 32px 8px", textAlign: "center" }} data-pad>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: ACCENT, fontWeight: 600 }}>How it works</div>
        <h2 style={{ margin: "16px auto 0", maxWidth: 640, fontSize: "clamp(28px,3.6vw,42px)", lineHeight: 1.1, letterSpacing: "-.025em", fontWeight: 700, color: "#1A1A17", textWrap: "balance" }}>
          Keep your users, in three steps.
        </h2>
        <div style={{ margin: "40px auto 0", maxWidth: 980, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, textAlign: "left" }} data-cards>
          {[
            { n: "1", h: "Connect your app", p: "Add a few lines of code. OnchainSuite starts seeing what wallets do across the chains you use." },
            { n: "2", h: "Choose the moments that matter", p: "A deposit, a big trade, or a wallet going quiet. You pick what is worth acting on." },
            { n: "3", h: "Reach them, automatically", p: "The right message goes out by in-app notification or email, so users come back. No wallet-to-email work needed." },
          ].map((s) => (
            <div key={s.n} style={{ border: "1px solid #DCE7F5", borderRadius: 16, background: "#fff", padding: 24, boxShadow: "0 1px 2px rgba(26,24,20,.04)" }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: "#E6ECFF", color: ACCENT, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</div>
              <div style={{ margin: "14px 0 0", fontSize: 17, fontWeight: 700, color: "#1A1A17", letterSpacing: "-.01em" }}>{s.h}</div>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#3D4A63" }}>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
      <MonitorSection />
      <AutomationsSection />
      <IntelligenceSection />
      <StatsBand />
      <Channels />
      <Comparison />
      <SdkSection />
      <Integrations />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
