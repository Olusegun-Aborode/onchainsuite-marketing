import { ReactNode } from "react";

/* Brand "app-icon" tiles for the integrations grid: a brand-colour rounded
   tile with a white glyph or monogram. Recognisable and consistent. */

function Tile({ bg, children }: { bg: string; children: ReactNode }) {
  return (
    <span
      style={{
        width: 24,
        height: 24,
        borderRadius: 7,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
      }}
    >
      {children}
    </span>
  );
}

function Mono({ children }: { children: ReactNode }) {
  return <span style={{ color: "#fff", fontWeight: 800, fontSize: 12, lineHeight: 1 }}>{children}</span>;
}

const G = ({ d, o = 1 }: { d: string; o?: number }) => <path d={d} fill="#fff" fillOpacity={o} />;
const Svg = ({ children }: { children: ReactNode }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

const ACCENT = "#1727E0";

export default function BrandMark({ name }: { name: string }) {
  switch (name) {
    case "MetaMask":
      return (
        <Tile bg="#F6851B">
          <Svg>
            <G d="M5 6.5l4.3 2.8h5.4L19 6.5l-1.3 5 .9 2.7-2.2 1.7-1.7-1.3H9.3l-1.7 1.3-2.2-1.7.9-2.7z" />
          </Svg>
        </Tile>
      );
    case "Phantom":
      return (
        <Tile bg="#AB9FF2">
          <Svg>
            <path d="M6 14a6 6 0 0 1 12 0v3.2l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3z" fill="#fff" />
            <circle cx="10" cy="12.2" r="1" fill="#AB9FF2" />
            <circle cx="14" cy="12.2" r="1" fill="#AB9FF2" />
          </Svg>
        </Tile>
      );
    case "WalletConnect":
      return (
        <Tile bg="#3B99FC">
          <Svg>
            <path
              d="M7 10.4c2.8-2.7 7.2-2.7 10 0l.4.4-1.4 1.4-.5-.5c-1.9-1.9-5.1-1.9-7 0l-.5.5L6.6 10.8zM5.3 12.6l1.5 1.5 1.5-1.5L6.8 11zm10.4 0 1.5 1.5 1.5-1.5L17.2 11z"
              fill="#fff"
            />
          </Svg>
        </Tile>
      );
    case "Rabby":
      return (
        <Tile bg="#7084FF">
          <Mono>R</Mono>
        </Tile>
      );
    case "Ethereum":
      return (
        <Tile bg="#627EEA">
          <Svg>
            <G d="M12 3 6.5 12.2 12 9.4z" />
            <G d="M12 3 17.5 12.2 12 9.4z" o={0.7} />
            <G d="M12 15.6 6.5 12.8 12 10z" o={0.7} />
            <G d="M12 15.6 17.5 12.8 12 10z" o={0.45} />
            <G d="M12 16.8 6.5 14 12 21z" />
            <G d="M12 16.8 17.5 14 12 21z" o={0.7} />
          </Svg>
        </Tile>
      );
    case "Solana":
      return (
        <Tile bg="#16132E">
          <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="ocsSolTile" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#9945FF" />
                <stop offset="1" stopColor="#14F195" />
              </linearGradient>
            </defs>
            <g fill="url(#ocsSolTile)">
              <path d="M7 6.5h11l-1.7 2.2H5.3Z" />
              <path d="M5.3 10.4h11L18 12.6H7Z" />
              <path d="M7 14.3h11l-1.7 2.2H5.3Z" />
            </g>
          </svg>
        </Tile>
      );
    case "Base":
      return (
        <Tile bg="#0052FF">
          <Svg>
            <circle cx="12" cy="12" r="8" fill="#fff" />
            <rect x="4" y="10.4" width="6.4" height="3.2" rx="0.4" fill="#0052FF" />
          </Svg>
        </Tile>
      );
    case "Polygon":
      return (
        <Tile bg="#8247E5">
          <Svg>
            <G d="M12 5 18 8.4V15.4L12 19 6 15.4V8.4z" />
            <path d="M12 8.4 15.4 10.4V14.2L12 16.2 8.6 14.2V10.4z" fill="#8247E5" />
          </Svg>
        </Tile>
      );
    case "Optimism":
      return (
        <Tile bg="#FF0420">
          <Mono>OP</Mono>
        </Tile>
      );
    case "Arbitrum":
      return (
        <Tile bg="#213147">
          <Svg>
            <path d="M11.2 7.6a0.9 0.9 0 0 1 1.6 0L16 16h-2l-2-5-2 5H8Z" fill="#28A0F0" />
          </Svg>
        </Tile>
      );
    case "Discord":
      return (
        <Tile bg="#5865F2">
          <Svg>
            <path
              d="M7 8c3-1.3 7-1.3 10 0 1.7 3 1.7 6.3.5 9-1-.7-2.1-1.2-2.1-1.2l.6-1.3c-2.6 1.3-5.4 1.3-8 0l.6 1.3s-1.1.5-2.1 1.2C5.3 14.3 5.3 11 7 8z"
              fill="#fff"
            />
            <circle cx="9.7" cy="12.4" r="1.1" fill="#5865F2" />
            <circle cx="14.3" cy="12.4" r="1.1" fill="#5865F2" />
          </Svg>
        </Tile>
      );
    case "Telegram":
      return (
        <Tile bg="#229ED9">
          <Svg>
            <path d="M5 12l13-5.2-2.2 11.3-3.9-2.9-2 1.9-.5-3.6 7-6.3-8.6 5.4z" fill="#fff" />
          </Svg>
        </Tile>
      );
    case "Dune":
      return (
        <Tile bg="#EE5E36">
          <Mono>D</Mono>
        </Tile>
      );
    case "Privy":
      return (
        <Tile bg="#1F1F23">
          <Mono>P</Mono>
        </Tile>
      );
    case "Dynamic":
      return (
        <Tile bg="#2563EB">
          <Mono>D</Mono>
        </Tile>
      );
    case "SDK":
      return (
        <Tile bg={ACCENT}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M9 10l-2 2 2 2M15 10l2 2-2 2" />
          </svg>
        </Tile>
      );
    case "API":
      return (
        <Tile bg={ACCENT}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
          </svg>
        </Tile>
      );
    case "Webhooks":
      return (
        <Tile bg={ACCENT}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="6.5" cy="7" r="2" />
            <circle cx="17.5" cy="9" r="2" />
            <circle cx="10" cy="18" r="2" />
            <path d="M8.2 8.2 9.4 16M16 10.6 11.6 17M8.5 7h7" />
          </svg>
        </Tile>
      );
    default:
      return (
        <Tile bg="#E3ECF8">
          <Mono>{name.slice(0, 1)}</Mono>
        </Tile>
      );
  }
}
