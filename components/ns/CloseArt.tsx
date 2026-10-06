/* Closing illustration: the walkthrough's story in one picture. Health scores flag a customer who is
   about to leave, and a Loop picks them up and stops when they deposit. Decorative, so hidden from
   screen readers; the animations wait until the art scrolls into view (.rv-pre pauses them). */

const B = "#1727E0", O = "#FF6828", N = "#010F31", L = "#DEE0E3", T = "#585D65", G = "#17A66B", R = "#E5484D";
const f = { fontFamily: "Instrument Sans, Inter, sans-serif" };
const mono = { fontFamily: "Geist Mono, JetBrains Mono, monospace" };

const WALLET_ROWS = [
  { name: "Josh Miller", ini: "JM", av: "#3B6BFF", score: 82, color: G, stage: "Active", bg: "#E9F7F0" },
  { name: "0x9a2e…e41", ini: "?", av: "#9DA1A8", score: 38, color: R, stage: "At risk", bg: "#FDECEC", wallet: true },
  { name: "Sarah Bennett", ini: "S", av: "#B54FD8", score: 61, color: O, stage: "Watch", bg: "#FFF1EA" },
];

/* Mainstream companies on Send have no wallets, so their version shows people and an upgrade. */
const PEOPLE_ROWS = [
  { name: "Olivia Hughes", ini: "OH", av: "#3B6BFF", score: 82, color: G, stage: "Active", bg: "#E9F7F0" },
  { name: "Daniel Price", ini: "DP", av: "#9DA1A8", score: 38, color: R, stage: "At risk", bg: "#FDECEC", wallet: true },
  { name: "Megan Ward", ini: "MW", av: "#B54FD8", score: 61, color: O, stage: "Watch", bg: "#FFF1EA" },
];

const STEPS = [
  { x: 28, w: 96, label: "Health below 40", fill: "#FFF1EA", stroke: "#FFD2BD", color: O },
  { x: 134, w: 90, label: "Email + in-app", fill: "#EEF0FF", stroke: "#C9D0FF", color: B },
  { x: 234, w: 174, label: "Stops when they deposit", fill: "#E9F7F0", stroke: "#BFE8D3", color: G },
];

export default function CloseArt({ mainstream = false }: { mainstream?: boolean }) {
  const ROWS = mainstream ? PEOPLE_ROWS : WALLET_ROWS;
  const steps = mainstream ? STEPS.map((x, i) => i === 1 ? { ...x, label: "Email" } : i === 2 ? { ...x, label: "Stops when they upgrade" } : x) : STEPS;
  return (
    <div className="tool-art close-art rv" aria-hidden="true">
      <svg viewBox="0 0 432 330" preserveAspectRatio="xMidYMid meet" style={f}>
        <rect x={16} y={18} width={400} height={180} rx={12} fill="#fff" stroke={L} />
        <text x={32} y={44} fontSize={13} fontWeight={600} fill={N}>Customers about to leave</text>
        <rect x={334} y={30} width={68} height={20} rx={10} fill="#F5F6F7" /><text x={368} y={44} fontSize={10.5} fill={T} textAnchor="middle">This week</text>
        <line x1={16} y1={60} x2={416} y2={60} stroke={L} />
        {ROWS.map((r, i) => {
          const y = 68 + i * 42;
          return (
            <g key={r.name} className="ta-pop" style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
              {r.wallet && <rect x={22} y={y} width={388} height={36} rx={8} fill="#FFF7F7" className="pa-pulse" />}
              <circle cx={44} cy={y + 18} r={11} fill={r.av} />
              <text x={44} y={y + 22} fontSize={9} fill="#fff" textAnchor="middle" fontWeight={600}>{r.ini}</text>
              <text x={62} y={y + 22} fontSize={12} fill={N} fontWeight={500} style={r.name.startsWith("0x") ? mono : f}>{r.name}</text>
              <text x={196} y={y + 22} fontSize={12} fill={r.color} fontWeight={600} textAnchor="end">{r.score}</text>
              <rect x={206} y={y + 14} width={96} height={7} rx={3.5} fill="#ECEDEF" />
              <rect x={206} y={y + 14} width={(96 * r.score) / 100} height={7} rx={3.5} fill={r.color} className="ta-grow" style={{ animationDelay: `${0.35 + i * 0.15}s` }} />
              <rect x={318} y={y + 7} width={78} height={22} rx={11} fill={r.bg} />
              <text x={357} y={y + 22} fontSize={11} fill={r.color} fontWeight={500} textAnchor="middle">{r.stage}</text>
            </g>
          );
        })}
        <path d="M216 198 V230" stroke="#C9D0FF" strokeWidth={1.5} className="ta-dash" />
        <path d="M211 225 L216 231 L221 225" fill="none" stroke="#C9D0FF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <g className="ta-pop" style={{ animationDelay: "0.8s" }}>
          <rect x={16} y={234} width={400} height={80} rx={12} fill="#fff" stroke={L} />
          <text x={28} y={256} fontSize={12} fontWeight={600} fill={N}>Loop: reach them before they leave</text>
          {steps.map((s, i) => (
            <g key={s.label} className="ta-pop" style={{ animationDelay: `${1 + i * 0.2}s` }}>
              <rect x={s.x} y={270} width={s.w} height={30} rx={8} fill={s.fill} stroke={s.stroke} />
              <text x={i === 2 ? s.x + 30 : s.x + s.w / 2} y={289} fontSize={11} fill={s.color} fontWeight={500} textAnchor={i === 2 ? "start" : "middle"}>{s.label}</text>
              {i === 2 && <path d={`M${s.x + 12} 284l3 3 6-7`} fill="none" stroke={G} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />}
              {i < 2 && <path d={`M${s.x + s.w + 2} 285 H${s.x + s.w + 10}`} stroke="#B3B5BA" strokeWidth={1.5} />}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
