/* Illustrations for the free tools, drawn in the brand kit palette (v2.7 tokens):
   blue #1727E0, dodger #2F94FF, orange #FF6828, navy #010F31, neutrals #DEE0E3 / #F5F6F7.
   Each one shows what its calculator measures. Decorative, so hidden from screen readers. */

export type ToolKind = "dormant" | "cpa" | "reach" | "churnrate" | "churncost" | "ltv";

const BLUE = "#1727E0", SKY = "#2F94FF", ORANGE = "#FF6828", NAVY = "#010F31", LINE = "#DEE0E3", MUTE = "#C4C7CC", TXT = "#585D65";
const font = { fontFamily: "Instrument Sans, Inter, sans-serif" };

function Dormant() {
  const cols = 9, rows = 4;
  const dormant = new Set([3, 7, 11, 14, 19, 22, 26, 30, 33]);
  const back = new Set([7, 19, 30]);
  return (
    <>
      {Array.from({ length: cols * rows }, (_, i) => {
        const x = 34 + (i % cols) * 30, y = 34 + Math.floor(i / cols) * 26;
        const d = dormant.has(i), b = back.has(i);
        return (
          <g key={i}>
            {b && <circle className="ta-ring" cx={x} cy={y} r={9} fill="none" stroke={SKY} strokeWidth={1.5} style={{ animationDelay: `${(i % 5) * 0.5}s` }} />}
            <circle cx={x} cy={y} r={7} fill={d ? (b ? SKY : "#E4E6EA") : BLUE} className={b ? "ta-wake" : undefined} style={b ? { animationDelay: `${(i % 5) * 0.5}s` } : undefined} />
          </g>
        );
      })}
      <g style={font}>
        <rect x={34} y={140} width={128} height={26} rx={7} fill="#fff" stroke={LINE} />
        <circle cx={48} cy={153} r={4} fill="#E4E6EA" /><text x={58} y={157} fontSize={11.5} fill={TXT}>Dormant</text>
        <circle cx={112} cy={153} r={4} fill={SKY} /><text x={122} y={157} fontSize={11.5} fill={TXT}>Back</text>
        <rect x={188} y={136} width={146} height={34} rx={8} fill={NAVY} />
        <text x={200} y={157} fontSize={12.5} fill="#fff" fontWeight={600}>+$157.7k recovered</text>
      </g>
    </>
  );
}

function Cpa() {
  return (
    <g style={font}>
      {[{ y: 30, w: 290, c: "#E4E6EA", l: "Spend", v: "$41,000", tc: TXT }, { y: 72, w: 220, c: "#D6DBF8", l: "Wallets connected", v: "4,200", tc: TXT }, { y: 114, w: 160, c: BLUE, l: "Transacted", v: "1,000", tc: "#fff" }].map((r, i) => (
        <g key={r.l}>
          <rect className="ta-grow" x={(360 - r.w) / 2} y={r.y} width={r.w} height={30} rx={8} fill={r.c} style={{ animationDelay: `${i * 0.25}s` }} />
          <text x={(360 - r.w) / 2 + 12} y={r.y + 19.5} fontSize={12} fill={r.tc} fontWeight={500}>{r.l}</text>
          <text x={(360 + r.w) / 2 - 12} y={r.y + 19.5} fontSize={12} fill={r.tc} textAnchor="end" fontWeight={600}>{r.v}</text>
        </g>
      ))}
      <rect x={250} y={152} width={92} height={24} rx={12} fill={ORANGE} />
      <text x={296} y={168} fontSize={12} fill="#fff" textAnchor="middle" fontWeight={600}>$41 each</text>
    </g>
  );
}

function Reach() {
  const r = 52, c = 2 * Math.PI * r;
  const segs = [{ p: 0.38, col: BLUE, l: "Email" }, { p: 0.22, col: SKY, l: "In-app" }, { p: 0.08, col: ORANGE, l: "Socials" }];
  let acc = 0;
  return (
    <g style={font}>
      <circle cx={110} cy={92} r={r} fill="none" stroke="#ECEDEF" strokeWidth={18} />
      {segs.map((s, i) => {
        const el = <circle key={s.l} className="ta-draw" cx={110} cy={92} r={r} fill="none" stroke={s.col} strokeWidth={18}
          strokeDasharray={`${s.p * c} ${c}`} strokeDashoffset={-acc * c} transform="rotate(-90 110 92)" style={{ animationDelay: `${i * 0.3}s` }} />;
        acc += s.p; return el;
      })}
      <text x={110} y={96} fontSize={26} fontWeight={600} fill={NAVY} textAnchor="middle">68</text>
      <text x={110} y={114} fontSize={10.5} fill={TXT} textAnchor="middle">of 100</text>
      {[...segs, { p: 0.32, col: "#ECEDEF", l: "Unreachable" }].map((s, i) => (
        <g key={s.l} transform={`translate(210 ${46 + i * 26})`}>
          <rect width={12} height={12} rx={3} fill={s.col} /><text x={20} y={10.5} fontSize={12} fill={TXT}>{s.l}</text>
          <text x={126} y={10.5} fontSize={12} fill={NAVY} textAnchor="end" fontWeight={600}>{Math.round(s.p * 100)}%</text>
        </g>
      ))}
    </g>
  );
}

function ChurnRate() {
  const pts = Array.from({ length: 13 }, (_, m) => ({ x: 34 + m * 24 }));
  const ys = Array.from({ length: 13 }, (_, m) => 34 + (1 - Math.pow(0.94, m)) * 190);
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p.x} ${ys[i].toFixed(1)}`).join(" ");
  return (
    <g style={font}>
      {[34, 82, 130].map((y) => <line key={y} x1={30} x2={330} y1={y} y2={y} stroke="#ECEDEF" />)}
      <path d={`${d} L322 150 L34 150 Z`} fill="url(#taFill)" />
      <path className="ta-line" d={d} fill="none" stroke={BLUE} strokeWidth={2} pathLength={1} />
      {ys.map((y, i) => (i % 3 === 0 ? <circle key={i} cx={pts[i].x} cy={y} r={3.5} fill="#fff" stroke={BLUE} strokeWidth={1.6} /> : null))}
      <circle cx={322} cy={ys[12]} r={5} fill={ORANGE} />
      <rect x={176} y={20} width={152} height={26} rx={7} fill="#fff" stroke={LINE} />
      <text x={188} y={37} fontSize={12} fill={NAVY} fontWeight={600}>6% a month</text>
      <text x={272} y={37} fontSize={12} fill={ORANGE} fontWeight={600}>52%/yr</text>
      <text x={34} y={170} fontSize={10.5} fill={TXT}>Month 1</text><text x={322} y={170} fontSize={10.5} fill={TXT} textAnchor="end">Month 12</text>
    </g>
  );
}

function ChurnCost() {
  return (
    <g style={font}>
      {Array.from({ length: 12 }, (_, m) => {
        const x = 34 + m * 25, lost = 8 + m * 6.2, kept = lost * 0.3, base = 150;
        return (
          <g key={m} className="ta-rise" style={{ animationDelay: `${m * 0.06}s` }}>
            <rect x={x} y={base - lost} width={16} height={lost - kept} rx={2} fill={ORANGE} opacity={0.85} />
            <rect x={x} y={base - kept} width={16} height={kept} rx={2} fill={BLUE} />
          </g>
        );
      })}
      <line x1={30} x2={330} y1={150} y2={150} stroke={LINE} />
      <g transform="translate(34 18)">
        <rect width={12} height={12} rx={3} fill={ORANGE} /><text x={18} y={10.5} fontSize={12} fill={TXT}>Lost to churn</text>
        <rect x={112} width={12} height={12} rx={3} fill={BLUE} /><text x={130} y={10.5} fontSize={12} fill={TXT}>Kept by acting earlier</text>
      </g>
      <text x={34} y={170} fontSize={10.5} fill={TXT}>Jan</text><text x={321} y={170} fontSize={10.5} fill={TXT} textAnchor="end">Dec</text>
    </g>
  );
}

function Ltv() {
  const curve = (life: number) => Array.from({ length: 31 }, (_, i) => { const t = i / 30; const v = 1 - Math.exp(-t * 3 * (12 / life)); return `${i ? "L" : "M"}${(34 + t * 290).toFixed(1)} ${(150 - v * (life / 16) * 110).toFixed(1)}`; }).join(" ");
  return (
    <g style={font}>
      {[40, 95, 150].map((y) => <line key={y} x1={30} x2={330} y1={y} y2={y} stroke="#ECEDEF" />)}
      <path d={curve(12)} fill="none" stroke={MUTE} strokeWidth={2} strokeDasharray="4 4" />
      <path className="ta-line" d={curve(16)} fill="none" stroke={BLUE} strokeWidth={2.2} pathLength={1} />
      <g transform="translate(34 18)"><rect width={18} height={3} y={5} fill={MUTE} /><text x={24} y={10.5} fontSize={12} fill={TXT}>8% churn</text>
        <rect x={98} width={18} height={3} y={5} fill={BLUE} /><text x={122} y={10.5} fontSize={12} fill={TXT}>6% churn</text></g>
      <rect x={262} y={44} width={64} height={26} rx={13} fill={NAVY} /><text x={294} y={61} fontSize={12} fill="#fff" textAnchor="middle" fontWeight={600}>+33%</text>
      <text x={34} y={170} fontSize={10.5} fill={TXT}>First transaction</text><text x={324} y={170} fontSize={10.5} fill={TXT} textAnchor="end">Lifetime value</text>
    </g>
  );
}

const ART: Record<ToolKind, () => React.ReactElement> = { dormant: Dormant, cpa: Cpa, reach: Reach, churnrate: ChurnRate, churncost: ChurnCost, ltv: Ltv };

export default function ToolArt({ kind, className = "" }: { kind: ToolKind; className?: string }) {
  const Art = ART[kind];
  return (
    <div className={"tool-art " + className} aria-hidden="true">
      <svg viewBox="0 0 360 184" preserveAspectRatio="xMidYMid meet">
        <defs><linearGradient id="taFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={SKY} stopOpacity={0.22} /><stop offset="1" stopColor={SKY} stopOpacity={0} /></linearGradient></defs>
        <Art />
      </svg>
    </div>
  );
}
