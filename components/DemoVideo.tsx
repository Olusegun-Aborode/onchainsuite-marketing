import { ACCENT } from "@/lib/data";
import OnchainLogo from "./BrandIcon";

// Paste a Loom / YouTube / Vimeo embed URL here to show the real demo.
// e.g. "https://www.youtube.com/embed/XXXXXXXX" or a Loom share/embed URL.
const DEMO_EMBED_URL = "";

export default function DemoVideo() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid #DCE7F5",
          boxShadow: "0 1px 2px rgba(26,24,20,.05),0 24px 50px -28px rgba(26,24,20,.25)",
          background: "linear-gradient(155deg, #2F94FF 0%, #1727E0 45%, #010F31 100%)",
        }}
      >
        {DEMO_EMBED_URL ? (
          <iframe
            src={DEMO_EMBED_URL}
            title="OnchainSuite product demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <>
            {/* faint dot-grid texture */}
            <div
              className="ocs-grid-bg"
              style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                color: "#fff",
                textAlign: "center",
                padding: 24,
              }}
            >
              <span style={{ display: "flex", filter: "drop-shadow(0 6px 18px rgba(0,0,0,.35))" }}>
                <OnchainLogo size={48} gradientId="ocsDemoLogo" />
              </span>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.16)",
                  border: "1px solid rgba(255,255,255,.4)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "11px solid transparent",
                    borderBottom: "11px solid transparent",
                    borderLeft: "18px solid #fff",
                    marginLeft: 4,
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.01em" }}>Watch the product demo</div>
                <div style={{ marginTop: 4, fontSize: 13.5, color: "rgba(255,255,255,.75)" }}>
                  A 2-minute tour of OnchainSuite
                </div>
              </div>
            </div>
            <span
              style={{
                position: "absolute",
                bottom: 12,
                right: 14,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10,
                color: "rgba(255,255,255,.65)",
                background: "rgba(1,15,49,.4)",
                padding: "3px 8px",
                borderRadius: 999,
              }}
            >
              demo coming soon
            </span>
          </>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 16, color: "#3D4A63" }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, flex: "none" }} />
        <span style={{ fontSize: 14, lineHeight: 1.5 }}>
          See live on-chain triggers, the Plays library, and the Intelligence layer in action.
        </span>
      </div>
    </div>
  );
}
