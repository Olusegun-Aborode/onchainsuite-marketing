import { ACCENT, AUTO_POINTS, DOCS, OK } from "@/lib/data";
import LearnMore from "./LearnMore";

export default function AutomationsSection() {
  return (
    <section id="automations" style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px" }} data-pad>
      <div style={{ display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 48, alignItems: "center" }} data-stack>
        <div>
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
            Automations
          </div>
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
            Automations that fire on real wallet and email behaviour.
          </h2>
          <p style={{ margin: "16px 0 0", fontSize: 17.5, lineHeight: 1.6, color: "#3D4A63", textWrap: "pretty" }}>
            Build a flow once. It runs on its own, firing the instant a wallet acts or a contact opens, clicks,
            or ignores your message, day or night, until you pause or edit it.
          </p>
          <ul style={{ margin: "22px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {AUTO_POINTS.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 11, fontSize: 15, color: "#3A3A34", lineHeight: 1.5 }}>
                <span
                  style={{
                    marginTop: 3,
                    width: 16,
                    height: 16,
                    borderRadius: 5,
                    background: `color-mix(in oklab,${ACCENT} 14%,transparent)`,
                    color: ACCENT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    flex: "none",
                  }}
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <LearnMore href={DOCS.automation} />

        </div>

        {/* flow visual */}
        <div
          className="ocs-card-hover ocs-spotlight"
          style={{
            borderRadius: 18,
            background: "#fff",
            border: "1px solid #DCE7F5",
            boxShadow: "0 1px 2px rgba(26,24,20,.05),0 8px 26px -20px rgba(26,24,20,.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "13px 16px",
              borderBottom: "1px solid #E3ECF8",
              background: "#FFFFFF",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: OK, animation: "ocsPulseDot 2s infinite" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A17" }}>Churn Win-Back</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10.5,
                color: "#16A34A",
                background: "#E8F6EE",
                padding: "3px 8px",
                borderRadius: 6,
              }}
            >
              LIVE
            </span>
            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#A6AFC0" }}>
              runs on its own
            </span>
          </div>
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column" }}>
            <div
              style={{
                border: `1px solid color-mix(in oklab,${ACCENT} 35%,#DCE7F5)`,
                borderRadius: 11,
                background: `color-mix(in oklab,${ACCENT} 6%,#fff)`,
                padding: "13px 15px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 10,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginBottom: 5,
                }}
              >
                Trigger
              </div>
              <div style={{ fontSize: 14, color: "#1A1A17", fontWeight: 600 }}>Stake dropped, and email ignored</div>
              <div style={{ fontSize: 12, color: "#8A93A6", marginTop: 2 }}>staked &lt; 0.5 × peak · no open in 7d</div>
            </div>
            <div style={{ position: "relative", height: 30, margin: "0 auto", width: 2, background: "#DCE7F5" }}>
              <span
                style={{
                  position: "absolute",
                  left: -3,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: ACCENT,
                  top: 0,
                  animation: "ocsDotV 2.8s linear infinite",
                }}
              />
            </div>
            <div
              style={{
                border: "1px solid #DCE7F5",
                borderRadius: 11,
                background: "#FFFFFF",
                padding: "12px 15px",
                textAlign: "center",
              }}
            >
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#51607A" }}>
                Fire instantly · then split by channel
              </span>
            </div>
            <div style={{ position: "relative", height: 26, margin: "0 auto", width: "60%", maxWidth: 240 }}>
              <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: 12, background: "#DCE7F5" }} />
              <div style={{ position: "absolute", top: 12, left: "25%", right: "25%", height: 1, background: "#DCE7F5" }} />
              <div style={{ position: "absolute", top: 12, left: "25%", width: 1, height: 14, background: "#DCE7F5" }} />
              <div style={{ position: "absolute", top: 12, right: "25%", width: 1, height: 14, background: "#DCE7F5" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div
                style={{
                  position: "relative",
                  border: "1px solid #DCE7F5",
                  borderRadius: 11,
                  background: "#fff",
                  padding: "12px 13px",
                  animation: "ocsFireL 2.8s ease-in-out infinite",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      background: `color-mix(in oklab,${ACCENT} 16%,#fff)`,
                      border: `1px solid color-mix(in oklab,${ACCENT} 40%,#fff)`,
                    }}
                  />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A17" }}>In-app push</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#8A93A6", marginTop: 6 }}>“Your stake dropped. Top up?”</div>
                <span
                  style={{
                    position: "absolute",
                    top: 9,
                    right: 10,
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 9.5,
                    color: "#16A34A",
                    background: "#E8F6EE",
                    padding: "2px 6px",
                    borderRadius: 5,
                    animation: "ocsBadge 2.8s ease-in-out infinite",
                  }}
                >
                  fired · 3
                </span>
              </div>
              <div
                style={{
                  position: "relative",
                  border: "1px solid #DCE7F5",
                  borderRadius: 11,
                  background: "#fff",
                  padding: "12px 13px",
                  animation: "ocsFireL 2.8s ease-in-out infinite",
                  animationDelay: "1.4s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      background: "color-mix(in oklab,#2F94FF 14%,#fff)",
                      border: "1px solid color-mix(in oklab,#2F94FF 36%,#fff)",
                    }}
                  />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A17" }}>Email</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#8A93A6", marginTop: 6 }}>Top-up incentive offer</div>
                <span
                  style={{
                    position: "absolute",
                    top: 9,
                    right: 10,
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 9.5,
                    color: "#16A34A",
                    background: "#E8F6EE",
                    padding: "2px 6px",
                    borderRadius: 5,
                    animation: "ocsBadge 2.8s ease-in-out infinite",
                    animationDelay: "1.4s",
                  }}
                >
                  fired · 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
