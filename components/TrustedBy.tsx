import { PARTNERS } from "@/lib/data";

const mono = "'JetBrains Mono',monospace";

// Trusted-by logo strip. Logos are square app-icon style marks with solid
// backgrounds, so we present them as uniform rounded tiles rather than a
// bare wordmark row. Shared by the home page and the team page.
export default function TrustedBy({
  align = "center",
  label = "Trusted by teams building on-chain",
  size = 48,
}: {
  align?: "center" | "left";
  label?: string;
  size?: number;
}) {
  return (
    <div style={{ textAlign: align }}>
      <div
        style={{
          fontFamily: mono,
          fontSize: 11.5,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "#8A93A6",
          marginBottom: 20,
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "18px 22px",
          justifyContent: align === "center" ? "center" : "flex-start",
          alignItems: "center",
        }}
      >
        {PARTNERS.trusted.map((p) => {
          const tile = (
            <>
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                width={size}
                height={size}
                loading="lazy"
                style={{ width: size, height: size, borderRadius: size * 0.24, display: "block", border: "1px solid rgba(1,15,49,.08)" }}
              />
              <span style={{ fontSize: 13.5, fontWeight: 500, color: "#585D65", letterSpacing: "-0.1px" }}>{p.name}</span>
            </>
          );
          const inner = { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" } as const;
          return p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ocs-trust-item"
              style={inner}
            >
              {tile}
            </a>
          ) : (
            <span key={p.name} className="ocs-trust-item" style={inner}>
              {tile}
            </span>
          );
        })}
      </div>
      <style>{`
        .ocs-trust-item{transition:transform .15s ease,opacity .15s ease;opacity:.94}
        .ocs-trust-item:hover{opacity:1;transform:translateY(-1px)}
        .ocs-trust-item span{transition:color .15s ease}
        a.ocs-trust-item:hover span{color:#010F31}
      `}</style>
    </div>
  );
}
