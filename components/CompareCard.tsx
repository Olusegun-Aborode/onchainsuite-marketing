import { Competitor } from "@/lib/compare";
import OnchainLogo from "./BrandIcon";

// Approximate brand accent per competitor for the monogram tile. Swap for
// official competitor logo SVGs here when you have them.
const BRAND: Record<string, string> = {
  klaviyo: "#0F1114",
  "customer-io": "#6C5CE7",
  braze: "#8236F5",
  dotdigital: "#00B2A9",
  emailoctopus: "#1E6FD9",
  sendgrid: "#1A82E2",
  brevo: "#0B996E",
  formo: "#7BB026",
  addressable: "#E5326E",
  galxe: "#16182B",
};

function mono(name: string) {
  return name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
}

export default function CompareCard({ c }: { c: Competitor }) {
  const b = BRAND[c.slug] || "#3D4A63";
  return (
    <a
      href={`/compare/${c.slug}`}
      className="ocs-card-hover"
      style={{ display: "block", border: "1px solid #DCE7F5", borderRadius: 18, background: "#fff", padding: 18, textDecoration: "none", boxShadow: "0 1px 2px rgba(26,24,20,.04)" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
        <div style={{ fontSize: 16.5, fontWeight: 700, color: "#1A1A17" }}>OnchainSuite vs {c.name}</div>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#8A93A6", whiteSpace: "nowrap" }}>{c.kind}</div>
      </div>
      <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", border: "1px solid #E3ECF8", height: 118 }}>
        <div style={{ flex: 1, background: "#0B1533", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <OnchainLogo size={44} gradientId={`ocsCmp-${c.slug}`} />
        </div>
        <div style={{ flex: 1, background: `color-mix(in oklab, ${b} 7%, #fff)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ width: 48, height: 48, borderRadius: 12, background: b, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, letterSpacing: "-.02em" }}>
            {mono(c.name)}
          </span>
        </div>
      </div>
    </a>
  );
}
