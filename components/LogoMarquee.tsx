import { ReactNode } from "react";

// Recognizable inline-SVG brand marks for the supported chains.
const Ethereum = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path d="M12 2 5.6 12.1 12 9.2Z" fill="#8A92B2" />
    <path d="M12 2 18.4 12.1 12 9.2Z" fill="#62688F" />
    <path d="M12 16.1 5.6 13.3 12 9.7Z" fill="#62688F" />
    <path d="M12 16.1 18.4 13.3 12 9.7Z" fill="#454A75" />
    <path d="M12 17.3 5.6 14.5 12 22Z" fill="#8A92B2" />
    <path d="M12 17.3 18.4 14.5 12 22Z" fill="#62688F" />
  </svg>
);

const Solana = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <defs>
      <linearGradient id="ocsSol" x1="3" y1="20" x2="21" y2="4" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#9945FF" />
        <stop offset="1" stopColor="#14F195" />
      </linearGradient>
    </defs>
    <g fill="url(#ocsSol)">
      <path d="M6.6 6.2H19l-1.6 2.3H5Z" />
      <path d="M5 10.9h12.4L19 13.2H6.6Z" />
      <path d="M6.6 15.6H19l-1.6 2.3H5Z" />
    </g>
  </svg>
);

const Base = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#0052FF" />
    <rect x="3.4" y="9.4" width="6.4" height="5.2" rx="0.6" fill="#fff" />
  </svg>
);

const Polygon = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path d="M12 2.6 20.1 7.3V16.7L12 21.4 3.9 16.7V7.3Z" fill="#8247E5" />
    <path d="M12 7.2 16.1 9.6V14.4L12 16.8 7.9 14.4V9.6Z" fill="#fff" opacity="0.28" />
  </svg>
);

const Optimism = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#FF0420" />
    <text x="12" y="15.4" textAnchor="middle" fontFamily="Instrument Sans, sans-serif" fontSize="8.5" fontWeight="700" fill="#fff">
      OP
    </text>
  </svg>
);

const Arbitrum = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#213147" />
    <path d="M11.2 7.6a0.9 0.9 0 0 1 1.6 0L16 16h-2.1l-1.9-5-1.9 5H8Z" fill="#28A0F0" />
    <path d="M13.4 12.6 15 16h-1.9Z" fill="#9DCCED" />
  </svg>
);

const CHAIN_LOGOS: { name: string; logo: ReactNode }[] = [
  { name: "Ethereum", logo: Ethereum },
  { name: "Solana", logo: Solana },
  { name: "Base", logo: Base },
  { name: "Polygon", logo: Polygon },
  { name: "Optimism", logo: Optimism },
  { name: "Arbitrum", logo: Arbitrum },
];

function LogoItem({ name, logo }: { name: string; logo: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "0 28px", flex: "none" }}>
      <span style={{ display: "flex", flex: "none" }}>{logo}</span>
      <span style={{ fontWeight: 700, fontSize: 16.5, letterSpacing: "-.01em", color: "#3A3A34" }}>{name}</span>
    </div>
  );
}

export default function LogoMarquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const track = [...CHAIN_LOGOS, ...CHAIN_LOGOS];

  return (
    <section style={{ maxWidth: 1320, margin: "0 auto", padding: "54px 32px 18px", textAlign: "center" }} data-pad>
      <p
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 11.5,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: "#9A9A93",
        }}
      >
        Normalising activity across the chains and protocols your users already use
      </p>
      <div className="ocs-marquee" style={{ marginTop: 24 }}>
        <div className="ocs-marquee-track">
          {track.map((c, i) => (
            <LogoItem key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>
      <p style={{ marginTop: 18, fontSize: 12, color: "#A6AFC0" }}>
        Supported networks · more added every release
      </p>
    </section>
  );
}
