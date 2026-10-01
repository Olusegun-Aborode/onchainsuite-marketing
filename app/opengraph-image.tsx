import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "OnchainSuite · Every wallet is a customer record";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #010F31 0%, #1727E0 62%, #2F94FF 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>
            OnchainSuite
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            Every wallet is a customer record.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 880,
            }}
          >
            Lifecycle and retention marketing that reads your app and your contracts.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          onchainsuite.com
        </div>
      </div>
    ),
    size
  );
}
