import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, PRICING_FAQ } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { IncludedFeatures, PricingProfiles, SiteFooter } from "@/components/StaticSections";
import PricingCalculator from "@/components/PricingCalculator";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Usage-based pricing for OnchainSuite. A small base fee plus the wallets you track and the email subscribers you reach. In-app push included, no SMS.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing · OnchainSuite",
    description:
      "Usage-based pricing: a small base fee plus the wallets you track and the email subscribers you reach. No rigid tiers, no SMS.",
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

const monoLabel = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 11.5,
  letterSpacing: ".12em",
  textTransform: "uppercase" as const,
  color: ACCENT,
  fontWeight: 600,
};

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
              maxWidth: 760,
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              fontWeight: 700,
              textWrap: "balance",
            }}
          >
            Usage-based pricing, priced by{" "}
            <span className="ocs-grad-text">wallets and reach.</span>
          </h1>
          <p
            style={{
              margin: "20px auto 0",
              maxWidth: 580,
              fontSize: 18,
              lineHeight: 1.55,
              color: "#3D4A63",
              textWrap: "pretty",
            }}
          >
            A small base fee plus two usage drivers: the on-chain wallets you track and the email subscribers you
            reach. No rigid tiers, no SMS, no per-message fees on in-app push.
          </p>
        </div>
      </section>

      {/* estimate calculator */}
      <div style={{ padding: "0 32px" }} data-pad>
        <PricingCalculator />
      </div>

      {/* reference profiles */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 32px 8px", textAlign: "center" }} data-pad>
        <div style={monoLabel}>Reference profiles</div>
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
          Where teams typically land.
        </h2>
        <p style={{ margin: "14px auto 0", maxWidth: 520, fontSize: 16.5, lineHeight: 1.55, color: "#3D4A63", textWrap: "pretty" }}>
          Illustrative points on a continuous curve, not fixed packages. Your exact price comes from your own wallet
          and subscriber counts.
        </p>
        <PricingProfiles />
      </section>

      {/* everything included */}
      <IncludedFeatures />

      {/* pricing FAQ */}
      <FaqSection items={PRICING_FAQ} eyebrow="Pricing FAQ" title="Pricing, explained." />

      {/* closing CTA */}
      <CtaSection />

      <SiteFooter />
    </div>
  );
}
