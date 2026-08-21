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
