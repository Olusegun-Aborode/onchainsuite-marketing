import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import DemoVideo from "@/components/DemoVideo";

export const metadata: Metadata = {
  title: "Get early access",
  description:
    "Tell us about your protocol and book a call. OnchainSuite onboards a handful of Web3 teams each week.",
  alternates: { canonical: "/early-access" },
  openGraph: {
    title: "Get early access · OnchainSuite",
    description:
      "Tell us about your protocol and book a 20-minute call. We onboard a handful of Web3 teams each week.",
    url: "/early-access",
    type: "website",
  },
};

const themeVars = {
  "--acc": ACCENT,
  "--acc-h": ACCENT_HOVER,
  "--ok": OK,
  background: "#FAFAF8",
} as CSSProperties;

export default function EarlyAccessPage() {
  return (
    <div className="ocs-fixed-page" style={themeVars}>
      <SiteHeader />

      <main className="ocs-ea-main" style={{ flex: 1, minHeight: 0 }}>
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            height: "100%",
            padding: "28px 32px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "stretch",
          }}
          data-stack
          data-pad
        >
          {/* Left: heading + accordion (scrolls internally; page stays fixed) */}
          <div className="ocs-ea-col" style={{ minHeight: 0 }}>
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
              Early access
            </div>
            <h1
              style={{
                margin: "10px 0 0",
                fontSize: "clamp(26px,3.4vw,38px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                fontWeight: 700,
                textWrap: "balance",
              }}
            >
              Get early access to <span className="ocs-grad-text">OnchainSuite.</span>
            </h1>
            <p style={{ margin: "12px 0 22px", maxWidth: 460, fontSize: 15.5, lineHeight: 1.55, color: "#3D4A63", textWrap: "pretty" }}>
              Tell us about your protocol and book a 20-minute call. We&apos;ll show you the platform on your own
              on-chain data.
            </p>
            <EarlyAccessForm />
          </div>

          {/* Right: demo video, centered and fixed */}
          <div className="ocs-ea-demo" style={{ display: "flex", alignItems: "center", minHeight: 0 }}>
            <div style={{ width: "100%" }}>
              <DemoVideo />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
