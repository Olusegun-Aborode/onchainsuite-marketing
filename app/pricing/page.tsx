import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, PRICING_FAQ } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { IncludedFeatures, SiteFooter } from "@/components/StaticSections";
import PricingExplorer from "@/components/PricingExplorer";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "OnchainSuite pricing: Suite in four tiers (PAYG $0, Launch $27, Growth $349, Pro $1,622) for teams with an on-chain audience, and Send, email-only from $6/mo plus $2.60 per 1,000 subscribers.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing · OnchainSuite",
    description:
      "Two lines: Suite (wallet + email) in four tiers from $0, and Send (email only) at $6/mo plus $2.60 per 1,000 subscribers.",
    url: "/pricing",
    type: "website",
  },
};

const themeVars = {
  "--acc": ACCENT,
  "--acc-h": ACCENT_HOVER,
  "--ok": OK,
  minHeight: "100vh",
  background: "#FAFAF8",
  overflowX: "clip",
} as CSSProperties;

export default function PricingPage() {
  return (
    <div style={themeVars}>
      <SiteHeader />

      {/* hero */}
      <section
        style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "84px 32px 8px", textAlign: "center" }}
        data-pad
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(620px 300px at 50% 8%, color-mix(in oklab,${ACCENT} 8%,transparent), transparent 70%)`,
          }}
        />
        <div className="ocs-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <span className="ocs-badge-pill">
              <span className="ocs-badge-dot" />
              Founding rates for early teams
            </span>
          </div>
          <h1
            style={{
              margin: "0 auto",
              maxWidth: 780,
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              fontWeight: 700,
              textWrap: "balance",
            }}
          >
            Simple pricing, <span className="ocs-grad-text">two ways to buy.</span>
          </h1>
          <p
            style={{
              margin: "20px auto 0",
              maxWidth: 620,
              fontSize: 18,
              lineHeight: 1.55,
              color: "#3D4A63",
              textWrap: "pretty",
            }}
          >
            <strong style={{ color: "#1A1A17" }}>Suite</strong> pairs the wallet channel with email for teams acting on
            on-chain behaviour, four tiers from $0. <strong style={{ color: "#1A1A17" }}>Send</strong> is email only, for
            teams with no on-chain audience. Monthly billing, no annual lock-in.
          </p>
        </div>
      </section>

      {/* Suite / Send explorer */}
      <div style={{ padding: "36px 32px 8px" }} data-pad>
        <PricingExplorer />
      </div>

      {/* everything included */}
      <IncludedFeatures />

      {/* pricing FAQ */}
      <FaqSection items={PRICING_FAQ} eyebrow="Pricing FAQ" title="Pricing, explained." />

      <SiteFooter />
    </div>
  );
}
