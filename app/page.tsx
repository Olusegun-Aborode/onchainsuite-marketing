import { CSSProperties } from "react";
import { ACCENT, ACCENT_HOVER, OK } from "@/lib/data";
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
