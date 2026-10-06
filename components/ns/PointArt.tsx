/* Small illustrations for the product pages, in the same brand-kit style as ToolArt.
   One per point; each draws the idea in that point. Decorative, so hidden from screen readers. */

const B = "#1727E0", S = "#2F94FF", O = "#FF6828", N = "#010F31", L = "#DEE0E3", P = "#F5F6F7", T = "#585D65", G = "#17A66B", R = "#E5484D";
const f = { fontFamily: "Instrument Sans, Inter, sans-serif" };
const mono = { fontFamily: "Geist Mono, JetBrains Mono, monospace" };

function Chip({ x, y, w, label, fill = "#fff", stroke = L, color = T, mono: m = false, cls, delay }: { x: number; y: number; w: number; label: string; fill?: string; stroke?: string; color?: string; mono?: boolean; cls?: string; delay?: number }) {
  return (
    <g className={cls} style={delay != null ? { animationDelay: `${delay}s` } : undefined}>
      <rect x={x} y={y} width={w} height={24} rx={6} fill={fill} stroke={stroke} />
      <text x={x + 9} y={y + 16} fontSize={11.5} fill={color} style={m ? mono : f}>{label}</text>
    </g>
  );
}
function Card({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children?: React.ReactNode }) {
  return <g><rect x={x} y={y} width={w} height={h} rx={10} fill="#fff" stroke={L} />{children}</g>;
}
function Avatar({ x, y, t = "JM", c = "#3B6BFF", r = 12 }: { x: number; y: number; t?: string; c?: string; r?: number }) {
  return <g><circle cx={x} cy={y} r={r} fill={c} /><text x={x} y={y + 4} fontSize={r * 0.8} fill="#fff" textAnchor="middle" fontWeight={600} style={f}>{t}</text></g>;
}
const Check = ({ x, y, c = G }: { x: number; y: number; c?: string }) => <path d={`M${x} ${y}l3 3 6-7`} fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />;
const Cross = ({ x, y, c = R }: { x: number; y: number; c?: string }) => <path d={`M${x} ${y}l7 7M${x + 7} ${y}l-7 7`} fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round" />;

const ART: Record<string, () => React.ReactElement> = {
  /* ---------------- Audience ---------------- */
  lanes: () => (<g style={f}>
    <Chip x={14} y={22} w={104} label="Signed up" cls="ta-pop" delay={0} /><Chip x={14} y={54} w={104} label="Finished setup" cls="ta-pop" delay={0.15} />
    <Chip x={14} y={94} w={104} label="Deposited" fill="#EEF0FF" stroke="#C9D0FF" color={B} cls="ta-pop" delay={0.3} /><Chip x={14} y={126} w={104} label="Withdrew" fill="#EEF0FF" stroke="#C9D0FF" color={B} cls="ta-pop" delay={0.45} />
    <path d="M118 46 C160 46 160 80 196 80 M118 106 C160 106 160 80 196 80" fill="none" stroke="#C9D0FF" strokeWidth={1.5} className="ta-dash" />
    <Card x={196} y={52} w={112} h={56}><Avatar x={218} y={80} /><text x={236} y={77} fontSize={12} fontWeight={600} fill={N}>Josh</text><text x={236} y={92} fontSize={10} fill={T} style={mono}>one record</text></Card>
  </g>),
  lanesYou: () => (<g style={f}>
    <Chip x={14} y={22} w={104} label="Signed up" cls="ta-pop" delay={0} /><Chip x={14} y={54} w={104} label="Finished setup" cls="ta-pop" delay={0.15} />
    <Chip x={14} y={94} w={104} label="Deposited" fill="#EEF0FF" stroke="#C9D0FF" color={B} cls="ta-pop" delay={0.3} /><Chip x={14} y={126} w={104} label="Withdrew" fill="#EEF0FF" stroke="#C9D0FF" color={B} cls="ta-pop" delay={0.45} />
    <path d="M118 46 C160 46 160 80 196 80 M118 106 C160 106 160 80 196 80" fill="none" stroke="#C9D0FF" strokeWidth={1.5} className="ta-dash" />
    <Card x={196} y={52} w={112} h={56}><Avatar x={218} y={80} t="U" c="#585D65" /><text x={236} y={77} fontSize={12} fontWeight={600} fill={N}>Your user</text><text x={236} y={92} fontSize={10} fill={T} style={mono}>one record</text></Card>
  </g>),
  walletOnly: () => (<g style={f}>
    <Card x={16} y={24} w={150} h={104}>
      <text x={30} y={46} fontSize={10} fill={T} style={mono}>0x9a2e…e41</text>
      <rect x={30} y={58} width={122} height={24} rx={6} fill={P} /><text x={40} y={74} fontSize={11.5} fill="#9DA1A8">No email</text><Cross x={136} y={66} />
      <rect x={30} y={90} width={122} height={24} rx={6} fill="#E9F7F0" /><text x={40} y={106} fontSize={11.5} fill={G}>In-app</text><Check x={134} y={100} />
    </Card>
    <path d="M166 76 H188" stroke={L} strokeWidth={1.5} strokeDasharray="3 3" />
    <g className="ta-float"><rect x={190} y={42} width={124} height={72} rx={12} fill={N} /><rect x={200} y={54} width={22} height={22} rx={6} fill={B} />
      <text x={230} y={63} fontSize={10.5} fill="#fff" fontWeight={600}>212 USDC</text><text x={230} y={76} fontSize={9.5} fill="#9DA1A8">rewards waiting</text>
      <rect x={200} y={88} width={64} height={16} rx={5} fill="#fff" /><text x={206} y={100} fontSize={9.5} fill={N} fontWeight={600}>Claim</text></g>
  </g>),
  reach: () => (<g style={f}>
    {[{ y: 22, n: "Josh", e: true, i: true }, { y: 64, n: "0x9a2e…", e: false, i: true }, { y: 106, n: "Sarah", e: true, i: false }].map((r, k) => (
      <g key={k} className="ta-pop" style={{ animationDelay: `${k * 0.15}s` }}>
        <rect x={16} y={r.y} width={292} height={32} rx={8} fill="#fff" stroke={L} />
        <Avatar x={34} y={r.y + 16} r={10} t={r.n.startsWith("0x") ? "?" : r.n[0]} c={r.n.startsWith("0x") ? "#9DA1A8" : k === 2 ? "#B54FD8" : "#3B6BFF"} />
        <text x={52} y={r.y + 20} fontSize={11.5} fill={N} fontWeight={500} style={r.n.startsWith("0x") ? mono : f}>{r.n}</text>
        <rect x={170} y={r.y + 7} width={56} height={18} rx={9} fill={r.e ? "#E9F7F0" : P} /><text x={198} y={r.y + 20} fontSize={10.5} fill={r.e ? G : "#B3B5BA"} textAnchor="middle" textDecoration={r.e ? undefined : "line-through"}>Email</text>
        <rect x={234} y={r.y + 7} width={62} height={18} rx={9} fill={r.i ? "#E9F7F0" : P} /><text x={265} y={r.y + 20} fontSize={10.5} fill={r.i ? G : "#B3B5BA"} textAnchor="middle" textDecoration={r.i ? undefined : "line-through"}>In-app</text>
      </g>))}
  </g>),
  health: () => (<g style={f}>
    <circle cx={84} cy={78} r={44} fill="none" stroke="#ECEDEF" strokeWidth={10} />
    <circle cx={84} cy={78} r={44} fill="none" stroke={O} strokeWidth={10} strokeDasharray={`${0.61 * 276} 276`} transform="rotate(-90 84 78)" className="ta-draw" strokeLinecap="round" />
    <text x={84} y={83} fontSize={24} fontWeight={600} fill={O} textAnchor="middle">61</text><text x={84} y={99} fontSize={10} fill={T} textAnchor="middle">Watch</text>
    {[["Active 6d ago", "+38"], ["2 channels", "+12"], ["4.1 ETH lifetime", "+11"]].map(([a, b], i) => (
      <g key={a} className="ta-pop" style={{ animationDelay: `${0.3 + i * 0.15}s` }}><text x={150} y={52 + i * 24} fontSize={11.5} fill={T}>{a}</text><text x={300} y={52 + i * 24} fontSize={11.5} fill={N} fontWeight={600} textAnchor="end">{b}</text></g>))}
    <g transform="translate(150 118)">{[["#2F94FF", 5], ["#1727E0", 14], ["#17A66B", 12], ["#128355", 8], ["#FF8449", 1], ["#E5484D", 8]].reduce<{ x: number; els: React.ReactElement[] }>((acc, [c, n], i) => { const w = (n as number) * 3.1; acc.els.push(<rect key={i} x={acc.x} y={0} width={w - 1.5} height={10} rx={2} fill={c as string} className="ta-grow" style={{ animationDelay: `${0.5 + i * 0.08}s` }} />); acc.x += w; return acc; }, { x: 0, els: [] }).els}</g>
  </g>),
  importIn: () => (<g style={f}>
    {[["/integrations/googlesheets.svg", "Sheets"], ["/integrations/segment.svg", "Segment"], ["/integrations/zapier.svg", "Zapier"], ["/integrations/privy.png", "Privy"]].map(([src, l], i) => (
      <g key={l} className="ta-pop" style={{ animationDelay: `${i * 0.12}s` }}>
        <rect x={14} y={14 + i * 32} width={96} height={26} rx={7} fill="#fff" stroke={L} />
        <image href={src} x={21} y={19 + i * 32} width={16} height={16} /><text x={43} y={31 + i * 32} fontSize={11.5} fill={N}>{l}</text>
        <path d={`M110 ${27 + i * 32} C150 ${27 + i * 32} 160 78 200 78`} fill="none" stroke="#C9D0FF" strokeWidth={1.4} className="ta-dash" />
      </g>))}
    <rect x={200} y={50} width={108} height={56} rx={12} fill="url(#paGrad)" className="ta-float" />
    <text x={254} y={75} fontSize={12} fill="#fff" fontWeight={600} textAnchor="middle">OnchainSuite</text><text x={254} y={92} fontSize={10.5} fill="#DCE3FF" textAnchor="middle">48,210 contacts</text>
  </g>),
  noGuess: () => (<g style={f}>
    <Card x={16} y={52} w={96} h={48}><text x={64} y={74} fontSize={10.5} fill={T} textAnchor="middle" style={mono}>0x667c…3fa1</text><text x={64} y={89} fontSize={10} fill="#9DA1A8" textAnchor="middle">public wallet</text></Card>
    <path d="M112 76 H208" stroke={R} strokeWidth={1.5} strokeDasharray="4 4" /><circle cx={160} cy={76} r={13} fill="#FDECEC" /><Cross x={156.5} y={72.5} />
    <Card x={208} y={52} w={100} h={48}><text x={258} y={74} fontSize={11} fill={T} textAnchor="middle">j•••@gmail.com</text><text x={258} y={89} fontSize={10} fill="#9DA1A8" textAnchor="middle">private email</text></Card>
    <rect x={72} y={118} width={176} height={24} rx={12} fill="#E9F7F0" /><text x={160} y={134} fontSize={11} fill={G} textAnchor="middle" fontWeight={500}>Linked only by data you hold</text>
  </g>),

  /* ---------------- Segments ---------------- */
  sentence: () => (<g style={f}>
    <rect x={14} y={16} width={296} height={30} rx={8} fill="#F0F4FF" stroke="#E4EAFF" />
    <text x={26} y={35} fontSize={11.5} fill={N} className="ta-type">Base wallets over 10 ETH, not staked in 30 days</text>
    <path d="M160 52 V66" stroke={L} strokeWidth={1.5} /><path d="M155 62 l5 5 5-5" fill="none" stroke={L} strokeWidth={1.5} />
    {[["Wallet balance", "> 10 ETH"], ["Staked", "has NOT · 30d"]].map(([a, b], i) => (
      <g key={a} className="ta-pop" style={{ animationDelay: `${1.2 + i * 0.25}s` }}>
        <rect x={14} y={74 + i * 34} width={296} height={28} rx={7} fill={P} />
        <rect x={22} y={79 + i * 34} width={110} height={18} rx={5} fill="#fff" stroke={L} /><text x={30} y={92 + i * 34} fontSize={10.5} fill={N}>{a}</text>
        <rect x={140} y={79 + i * 34} width={110} height={18} rx={5} fill="#fff" stroke={i ? B : L} /><text x={148} y={92 + i * 34} fontSize={10.5} fill={i ? B : N}>{b}</text>
      </g>))}
  </g>),
  hasNot: () => (<g style={f}>
    <line x1={20} x2={304} y1={84} y2={84} stroke={L} strokeWidth={2} />
    {[30, 62, 94].map((x, i) => <g key={x}><circle cx={x} cy={84} r={7} fill={B} /><text x={x} y={110} fontSize={10} fill={T} textAnchor="middle">Staked</text></g>)}
    <rect x={124} y={60} width={180} height={48} rx={8} fill="none" stroke={O} strokeDasharray="5 4" className="ta-blink" />
    <text x={214} y={52} fontSize={11.5} fill={O} textAnchor="middle" fontWeight={600}>30 days, nothing</text>
    {[156, 196, 236, 276].map((x) => <circle key={x} cx={x} cy={84} r={5} fill="none" stroke={L} strokeWidth={1.5} />)}
    <text x={20} y={134} fontSize={10} fill="#9DA1A8">Then</text><text x={304} y={134} fontSize={10} fill="#9DA1A8" textAnchor="end">Today</text>
  </g>),
  liveCount: () => (<g style={f}>
    <circle className="ta-ring" cx={86} cy={78} r={34} fill="none" stroke={B} strokeOpacity={0.35} /><circle className="ta-ring" style={{ animationDelay: "1.4s" }} cx={86} cy={78} r={34} fill="none" stroke={B} strokeOpacity={0.35} />
    <circle cx={86} cy={78} r={34} fill="#F0F4FF" /><text x={86} y={82} fontSize={18} fontWeight={600} fill={B} textAnchor="middle">1,204</text><text x={86} y={96} fontSize={9.5} fill={T} textAnchor="middle">match</text>
    {[["maya.eth", "#E5484D"], ["0x8Cc4…21aB", "#2F94FF"], ["leo.eth", "#E8A317"]].map(([n, c], i) => (
      <g key={n} className="ta-bob" style={{ animationDelay: `${i * 0.5}s` }}><rect x={160} y={36 + i * 32} width={146} height={24} rx={12} fill="#fff" stroke={L} /><circle cx={174} cy={48 + i * 32} r={6} fill={c} /><text x={186} y={52 + i * 32} fontSize={11} fill={N} style={n.startsWith("0x") ? mono : f}>{n}</text></g>))}
  </g>),
  mixLanes: () => (<g style={f}>
    <Chip x={14} y={24} w={130} label="Wallet > 10 ETH" fill="#EEF0FF" stroke="#C9D0FF" color={B} cls="ta-pop" />
    <Chip x={14} y={62} w={130} label="Opened last email" fill="#FFF3ED" stroke="#FFC5A8" color="#B53C0B" cls="ta-pop" delay={0.15} />
    <Chip x={14} y={100} w={130} label="Finished setup" cls="ta-pop" delay={0.3} />
    <path d="M144 36 C190 36 190 74 220 74 M144 74 H220 M144 112 C190 112 190 74 220 74" fill="none" stroke="#C9D0FF" strokeWidth={1.5} className="ta-dash" />
    <rect x={220} y={56} width={88} height={36} rx={18} fill={N} className="ta-float" /><text x={264} y={78} fontSize={12} fill="#fff" textAnchor="middle" fontWeight={600}>1 segment</text>
  </g>),
  oneAudience: () => (<g style={f}>
    <rect x={18} y={62} width={92} height={32} rx={16} fill="url(#paGrad)" /><text x={64} y={82} fontSize={12} fill="#fff" textAnchor="middle" fontWeight={600}>Segment</text>
    {[["Campaign", 26], ["Loop entry", 66], ["MCP answer", 106]].map(([l, y], i) => (
      <g key={l as string}><path d={`M110 78 C150 78 160 ${(y as number) + 12} 196 ${(y as number) + 12}`} fill="none" stroke="#C9D0FF" strokeWidth={1.5} className="ta-dash" />
        <circle r={3.5} fill={B}><animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.5}s`} path={`M110 78 C150 78 160 ${(y as number) + 12} 196 ${(y as number) + 12}`} /></circle>
        <Chip x={196} y={y as number} w={110} label={l as string} /></g>))}
  </g>),
  channelAware: () => (<g style={f}>
    <circle cx={126} cy={78} r={52} fill={B} fillOpacity={0.12} stroke={B} strokeOpacity={0.5} className="ta-breathe" />
    <circle cx={198} cy={78} r={52} fill={S} fillOpacity={0.14} stroke={S} strokeOpacity={0.6} className="ta-breathe" style={{ animationDelay: "1s" }} />
    <text x={100} y={82} fontSize={11.5} fill={B} textAnchor="middle" fontWeight={600}>Email</text><text x={226} y={82} fontSize={11.5} fill="#1D75D6" textAnchor="middle" fontWeight={600}>In-app</text>
    <text x={162} y={82} fontSize={10.5} fill={N} textAnchor="middle" fontWeight={600}>both</text>
    <text x={160} y={146} fontSize={10.5} fill={T} textAnchor="middle">Each channel reaches its own part of a segment</text>
  </g>),

  /* ---------------- Loops ---------------- */
  chainTrigger: () => (<g style={f}>
    {[0, 1, 2].map((i) => <g key={i}><rect x={16 + i * 46} y={58} width={38} height={38} rx={8} fill={i === 2 ? B : "#fff"} stroke={i === 2 ? B : L} /><text x={35 + i * 46} y={82} fontSize={9.5} fill={i === 2 ? "#fff" : T} textAnchor="middle" style={mono}>#{1024 + i}</text>{i < 2 && <line x1={54 + i * 46} x2={62 + i * 46} y1={77} y2={77} stroke={L} strokeWidth={2} />}</g>)}
    <path d="M150 77 H172" stroke={B} strokeWidth={1.5} className="ta-dash" /><path d="M165 72 l8 5 -8 5" fill="none" stroke={B} strokeWidth={1.5} />
    <rect x={176} y={52} width={132} height={50} rx={10} fill="#fff" stroke={B} className="ta-glow" />
    <rect x={188} y={66} width={22} height={22} rx={6} fill="#FFE4D6" /><path d="M201 69 l-6 9 h5 l-1 7 6-9 h-5z" fill={O} />
    <text x={220} y={73} fontSize={9.5} fill={T}>Trigger</text><text x={220} y={89} fontSize={11.5} fill={N} fontWeight={600}>Goes dormant</text>
  </g>),
  stopsWhenActs: () => (<g style={f}>
    <path d="M20 78 H300" stroke={L} strokeWidth={2} />
    <circle r={6} fill={B}><animateMotion dur="3.2s" repeatCount="indefinite" path="M20 78 H178" keyTimes="0;1" /></circle>
    {[["Email", 60], ["Wait 3d", 140], ["In-app", 220]].map(([l, x]) => <g key={l as string}><rect x={(x as number) - 28} y={66} width={56} height={24} rx={6} fill="#fff" stroke={L} /><text x={x as number} y={82} fontSize={10.5} fill={N} textAnchor="middle">{l as string}</text></g>)}
    <g className="ta-pop" style={{ animationDelay: ".6s" }}><rect x={134} y={104} width={164} height={28} rx={14} fill="#E9F7F0" /><Check x={146} y={114} /><text x={164} y={122} fontSize={11} fill={G} fontWeight={600}>Deposit recorded, stop</text></g>
    <line x1={180} x2={180} y1={92} y2={104} stroke={G} strokeWidth={1.5} strokeDasharray="2 2" />
  </g>),
  emailInapp: () => (<g style={f}>
    {[{ y: 14, l: "Send email", c: "#F0F4FF", ic: "✉" }, { y: 62, l: "Wait 3 days", c: P, ic: "◷" }, { y: 110, l: "In-app if no reply", c: "#F0F4FF", ic: "▢" }].map((n, i) => (
      <g key={n.l} className="ta-pop" style={{ animationDelay: `${i * 0.2}s` }}>
        <rect x={86} y={n.y} width={152} height={32} rx={8} fill="#fff" stroke={i === 0 ? B : L} /><rect x={94} y={n.y + 6} width={20} height={20} rx={5} fill={n.c} /><text x={104} y={n.y + 20} fontSize={11} fill={B} textAnchor="middle">{n.ic}</text>
        <text x={122} y={n.y + 20} fontSize={11.5} fill={N} fontWeight={500}>{n.l}</text>
        {i < 2 && <line x1={162} x2={162} y1={n.y + 32} y2={n.y + 48} stroke={L} strokeWidth={1.5} />}
      </g>))}
  </g>),
  holdout: () => (<g style={f}>
    <rect x={20} y={28} width={228} height={26} rx={6} fill={B} className="ta-grow" /><text x={30} y={45} fontSize={11} fill="#fff" fontWeight={600}>Messaged · 90%</text>
    <rect x={250} y={28} width={54} height={26} rx={6} fill="#D8DBE2" /><text x={277} y={45} fontSize={10.5} fill={T} textAnchor="middle">Held</text>
    {[[0.62, B, "Messaged"], [0.38, "#C4C7CC", "Held back"]].map(([h, c, l], i) => (
      <g key={l as string}><rect x={90 + i * 90} y={140 - (h as number) * 70} width={50} height={(h as number) * 70} rx={4} fill={c as string} className="ta-rise" style={{ animationDelay: `${0.3 + i * 0.2}s` }} /><text x={115 + i * 90} y={154} fontSize={10} fill={T} textAnchor="middle">{l as string}</text></g>))}
    <text x={232} y={86} fontSize={12.5} fill={G} fontWeight={600}>Measured lift</text>
  </g>),
  entries: () => (<g style={f}>
    {[["maya.eth", "Completed", G, "#E9F7F0"], ["0x3F4a…8a21", "In flow", B, "#F0F4FF"], ["leo.eth", "Completed", G, "#E9F7F0"], ["0x91Cb…4e07", "Exited", T, P]].map(([n, s, c, bg], i) => (
      <g key={n} className="ta-pop" style={{ animationDelay: `${i * 0.12}s` }}>
        <line x1={16} x2={308} y1={40 + i * 30} y2={40 + i * 30} stroke="#ECEDEF" />
        <text x={18} y={32 + i * 30} fontSize={11.5} fill={N} style={(n as string).startsWith("0x") ? mono : f}>{n}</text>
        <rect x={170} y={18 + i * 30} width={78} height={19} rx={4} fill={bg} /><circle cx={180} cy={27.5 + i * 30} r={3} fill={c} /><text x={188} y={31.5 + i * 30} fontSize={10.5} fill={c} fontWeight={500}>{s}</text>
        <text x={306} y={32 + i * 30} fontSize={10} fill="#9DA1A8" textAnchor="end">{["14m", "38m", "2h", "5h"][i]}</text>
      </g>))}
  </g>),
  templates: () => (<g style={f}>
    {[["Welcome new wallets", 0], ["Dormant win-back", 1], ["First-trade nudge", 2]].map(([l, i]) => (
      <g key={l as string} className="ta-bob" style={{ animationDelay: `${(i as number) * 0.6}s` }}>
        <rect x={30 + (i as number) * 16} y={20 + (i as number) * 34} width={210} height={44} rx={10} fill="#fff" stroke={i === 2 ? B : L} />
        <rect x={42 + (i as number) * 16} y={32 + (i as number) * 34} width={20} height={20} rx={5} fill={["#E9F7F0", "#FFE4D6", "#F0F4FF"][i as number]} />
        <text x={70 + (i as number) * 16} y={46 + (i as number) * 34} fontSize={12} fill={N} fontWeight={500}>{l as string}</text>
      </g>))}
  </g>),

  /* ---------------- Intelligence MCP ---------------- */
  question: () => (<g style={f}>
    <rect x={68} y={14} width={240} height={30} rx={10} fill={B} /><text x={80} y={33} fontSize={11} fill="#fff" className="ta-type">Who traded in the final, then stopped?</text>
    <g className="ta-pop" style={{ animationDelay: "1.3s" }}>
      <rect x={16} y={56} width={292} height={86} rx={10} fill="#fff" stroke={L} />
      <text x={28} y={76} fontSize={20} fontWeight={600} fill={N}>1,284</text><text x={92} y={76} fontSize={10.5} fill={T}>customers match</text>
      {[["Tomas Ruiz", "19 Jul"], ["0x2b8f…d10", "19 Jul"], ["Hannah Clarke", "18 Jul"]].map(([a, b], i) => <g key={a}><line x1={28} x2={296} y1={86 + i * 18} y2={86 + i * 18} stroke="#ECEDEF" /><text x={28} y={99 + i * 18} fontSize={10.5} fill={N} style={a.startsWith("0x") ? mono : f}>{a}</text><text x={296} y={99 + i * 18} fontSize={10.5} fill={T} textAnchor="end">{b}</text></g>)}
    </g>
  </g>),
  tableChartSql: () => (<g style={f}>
    <rect x={16} y={14} width={292} height={130} rx={10} fill="#fff" stroke={L} />
    <g className="pa-cycle pa-c1"><text x={30} y={50} fontSize={11} fill={N}>maya.eth</text><text x={250} y={50} fontSize={11} fill={T}>4 opens</text><line x1={30} x2={294} y1={58} y2={58} stroke="#ECEDEF" /><text x={30} y={76} fontSize={11} fill={N} style={mono}>0x50E8…F401</text><text x={250} y={76} fontSize={11} fill={T}>3 opens</text><line x1={30} x2={294} y1={84} y2={84} stroke="#ECEDEF" /><text x={30} y={102} fontSize={11} fill={N}>dami.eth</text><text x={250} y={102} fontSize={11} fill={T}>3 opens</text></g>
    <g className="pa-cycle pa-c2">{[70, 52, 52, 35, 60, 44].map((h, i) => <rect key={i} x={44 + i * 40} y={130 - h} width={24} height={h} rx={3} fill={i % 2 ? S : B} />)}</g>
    <g className="pa-cycle pa-c3" style={mono}><text x={30} y={54} fontSize={11} fill={B}>SELECT</text><text x={84} y={54} fontSize={11} fill={N}>wallet, opens, clicks</text><text x={30} y={74} fontSize={11} fill={B}>FROM</text><text x={72} y={74} fontSize={11} fill={N}>engagement</text><text x={30} y={94} fontSize={11} fill={B}>WHERE</text><text x={80} y={94} fontSize={11} fill={N}>opens &gt; 0 AND clicks = 0</text></g>
    <g fontSize={10.5}><rect x={16} y={14} width={292} height={22} rx={10} fill={P} />
      <text x={34} y={29} className="pa-tab pa-t1">Table</text><text x={84} y={29} className="pa-tab pa-t2">Chart</text><text x={134} y={29} className="pa-tab pa-t3">SQL</text></g>
  </g>),
  answerToSegment: () => (<g style={f}>
    <Card x={14} y={30} w={130} h={96}>{[0, 1, 2, 3].map((i) => <g key={i}><rect x={24} y={44 + i * 19} width={70} height={8} rx={3} fill="#ECEDEF" /><rect x={102} y={44 + i * 19} width={30} height={8} rx={3} fill="#E4EAFF" /></g>)}</Card>
    <rect x={160} y={64} width={64} height={26} rx={7} fill={N} className="ta-glow" /><text x={192} y={81} fontSize={10.5} fill="#fff" textAnchor="middle" fontWeight={600}>Save</text>
    <path d="M144 77 H160 M224 77 H244" stroke={L} strokeWidth={1.5} />
    <rect x={244} y={62} width={66} height={30} rx={15} fill="url(#paGrad)" className="ta-pop" style={{ animationDelay: ".6s" }} /><text x={277} y={81} fontSize={10.5} fill="#fff" textAnchor="middle" fontWeight={600}>Segment</text>
  </g>),
  approve: () => (<g style={f}>
    <Card x={30} y={18} w={264} h={120}>
      <text x={46} y={42} fontSize={10} fill={T}>PROPOSED BY THE INTELLIGENCE MCP</text>
      <text x={46} y={62} fontSize={13} fill={N} fontWeight={600}>Win-back for 1,284 traders</text>
      <text x={46} y={80} fontSize={11} fill={T}>Email, then in-app after 3 days</text>
      <rect x={46} y={96} width={90} height={28} rx={7} fill={N} className="pa-pulse" /><text x={91} y={114} fontSize={11.5} fill="#fff" textAnchor="middle" fontWeight={600}>Approve</text>
      <text x={150} y={114} fontSize={10.5} fill="#9DA1A8">Waiting for you</text>
    </Card>
  </g>),
  mcpTools: () => (<g style={f}>
    {[["AI assistant", 22, 22], ["Code editor", 22, 112], ["Team chat", 222, 22], ["Notebook", 222, 112]].map(([l, x, y], i) => (
      <g key={l as string}><path d={`M162 77 L${(x as number) + 40} ${(y as number) + 12}`} stroke="#C9D0FF" strokeWidth={1.4} className="ta-dash" />
        <circle r={3} fill={B}><animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} path={`M162 77 L${(x as number) + 40} ${(y as number) + 12}`} /></circle>
        <Chip x={x as number} y={y as number} w={80} label={l as string} /></g>))}
    <rect x={124} y={56} width={76} height={42} rx={12} fill="url(#paGrad)" /><text x={162} y={81} fontSize={11.5} fill="#fff" textAnchor="middle" fontWeight={600}>MCP</text>
  </g>),
  bothLanesQ: () => (<g style={f}>
    <Chip x={14} y={30} w={140} label="Contract: no deposit" fill="#EEF0FF" stroke="#C9D0FF" color={B} cls="ta-pop" />
    <Chip x={170} y={30} w={140} label="App: opened this week" cls="ta-pop" delay={0.15} />
    <path d="M84 54 C84 80 162 74 162 96 M240 54 C240 80 162 74 162 96" fill="none" stroke="#C9D0FF" strokeWidth={1.5} className="ta-dash" />
    <rect x={92} y={98} width={140} height={34} rx={17} fill={N} className="ta-float" /><text x={162} y={119} fontSize={11.5} fill="#fff" textAnchor="middle" fontWeight={600}>One answer</text>
  </g>),

  /* ---------------- Mainstream companies (Send): no wallets ---------------- */
  mImport: () => (<g style={f}>
    {[["CSV", "customers.csv"], ["API", "Product events"], ["FORM", "Newsletter form"]].map(([k, l], i) => (
      <g key={l} className="ta-pop" style={{ animationDelay: `${i * 0.15}s` }}>
        <rect x={14} y={18 + i * 40} width={170} height={30} rx={8} fill="#fff" stroke={L} />
        <rect x={21} y={25 + i * 40} width={30} height={16} rx={4} fill="#F0F4FF" /><text x={36} y={36.5 + i * 40} fontSize={8.5} fill={B} fontWeight={600} textAnchor="middle" style={mono}>{k}</text>
        <text x={58} y={37 + i * 40} fontSize={11} fill={N} style={i === 0 ? mono : f}>{l}</text>
        <path d={`M184 ${33 + i * 40} C205 ${33 + i * 40} 205 78 214 78`} fill="none" stroke="#C9D0FF" strokeWidth={1.4} className="ta-dash" />
      </g>))}
    <g className="ta-float"><rect x={214} y={50} width={96} height={56} rx={12} fill="url(#paGrad)" />
      <text x={262} y={74} fontSize={11.5} fill="#fff" fontWeight={600} textAnchor="middle">One record</text><text x={262} y={91} fontSize={10} fill="#DCE3FF" textAnchor="middle">per customer</text></g>
  </g>),
  mSentence: () => (<g style={f}>
    <rect x={14} y={16} width={296} height={30} rx={8} fill="#F0F4FF" stroke="#E4EAFF" />
    <text x={26} y={35} fontSize={11.5} fill={N} className="ta-type">Signed up in May and never finished setup</text>
    <path d="M160 52 V66" stroke={L} strokeWidth={1.5} /><path d="M155 62 l5 5 5-5" fill="none" stroke={L} strokeWidth={1.5} />
    {[["Signed up", "in May"], ["Finished setup", "has NOT"]].map(([a, b], i) => (
      <g key={a} className="ta-pop" style={{ animationDelay: `${1.2 + i * 0.25}s` }}>
        <rect x={14} y={74 + i * 34} width={296} height={28} rx={7} fill={P} />
        <rect x={22} y={79 + i * 34} width={110} height={18} rx={5} fill="#fff" stroke={L} /><text x={30} y={92 + i * 34} fontSize={10.5} fill={N}>{a}</text>
        <rect x={140} y={79 + i * 34} width={110} height={18} rx={5} fill="#fff" stroke={i ? B : L} /><text x={148} y={92 + i * 34} fontSize={10.5} fill={i ? B : N}>{b}</text>
      </g>))}
  </g>),
  mLoop: () => (<g style={f}>
    <path d="M20 78 H300" stroke={L} strokeWidth={2} />
    <circle r={6} fill={B}><animateMotion dur="3.2s" repeatCount="indefinite" path="M20 78 H178" keyTimes="0;1" /></circle>
    {[["Email", 60], ["Wait 3d", 140], ["Email", 220]].map(([l, x], i) => <g key={i}><rect x={(x as number) - 28} y={66} width={56} height={24} rx={6} fill="#fff" stroke={L} /><text x={x as number} y={82} fontSize={10.5} fill={N} textAnchor="middle">{l as string}</text></g>)}
    <g className="ta-pop" style={{ animationDelay: ".6s" }}><rect x={138} y={104} width={150} height={28} rx={14} fill="#E9F7F0" /><Check x={150} y={114} /><text x={168} y={122} fontSize={11} fill={G} fontWeight={600}>Finished setup, stop</text></g>
    <line x1={180} x2={180} y1={92} y2={104} stroke={G} strokeWidth={1.5} strokeDasharray="2 2" />
  </g>),
  mQuestion: () => (<g style={f}>
    <rect x={16} y={14} width={292} height={30} rx={10} fill={B} /><text x={28} y={33} fontSize={11} fill="#fff" className="ta-type">Who opened the launch email but never upgraded?</text>
    <g className="ta-pop" style={{ animationDelay: "1.3s" }}>
      <rect x={16} y={56} width={292} height={86} rx={10} fill="#fff" stroke={L} />
      <text x={28} y={76} fontSize={20} fontWeight={600} fill={N}>642</text><text x={74} y={76} fontSize={10.5} fill={T}>customers match</text>
      {[["Olivia Hughes", "Opened 2 Sep"], ["Daniel Price", "Opened 2 Sep"], ["Megan Ward", "Opened 1 Sep"]].map(([a, b], i) => <g key={a}><line x1={28} x2={296} y1={86 + i * 18} y2={86 + i * 18} stroke="#ECEDEF" /><text x={28} y={99 + i * 18} fontSize={10.5} fill={N}>{a}</text><text x={296} y={99 + i * 18} fontSize={10.5} fill={T} textAnchor="end">{b}</text></g>)}
    </g>
  </g>),

  /* ---------------- Our hypothesis: the four generations ---------------- */
  genEmail: () => (<g style={f}>
    <rect x={40} y={18} width={244} height={120} rx={12} fill="#fff" stroke={L} />
    <text x={56} y={42} fontSize={12} fontWeight={600} fill={N}>Spring newsletter</text>
    <text x={56} y={59} fontSize={10.5} fill={T}>To 12,480 subscribers</text>
    <line x1={56} x2={268} y1={70} y2={70} stroke="#ECEDEF" />
    {[["Opens", "24%", 56], ["Clicks", "3.1%", 166]].map(([a, b, x], i) => (
      <g key={a as string} className="ta-pop" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
        <rect x={x as number} y={80} width={102} height={46} rx={8} fill={P} />
        <text x={(x as number) + 10} y={97} fontSize={10} fill={T}>{a as string}</text>
        <text x={(x as number) + 10} y={117} fontSize={16} fontWeight={600} fill={N}>{b as string}</text>
      </g>))}
  </g>),
  genAuto: () => (<g style={f}>
    {[["Welcome email", 14, 96], ["Wait 3 days", 126, 82], ["No reply?", 224, 86]].map(([l, x, w], i) => (
      <g key={l as string} className="ta-pop" style={{ animationDelay: `${i * 0.15}s` }}>
        <rect x={x as number} y={40} width={w as number} height={28} rx={7} fill={i === 2 ? "#FFF1EA" : "#fff"} stroke={i === 2 ? "#FFD2BD" : L} />
        <text x={(x as number) + (w as number) / 2} y={58} fontSize={11} fill={i === 2 ? O : N} textAnchor="middle">{l as string}</text>
      </g>))}
    <path d="M110 54 H126 M208 54 H224" stroke={L} strokeWidth={1.5} />
    <path d="M267 68 V100" stroke="#C9D0FF" strokeWidth={1.5} className="ta-dash" /><path d="M262 94 l5 6 5-6" fill="none" stroke="#C9D0FF" strokeWidth={1.5} />
    <g className="ta-pop" style={{ animationDelay: ".55s" }}><rect x={196} y={104} width={114} height={28} rx={7} fill={B} /><text x={253} y={122} fontSize={11} fill="#fff" fontWeight={600} textAnchor="middle">Send follow-up</text></g>
  </g>),
  genEvents: () => (<g style={f}>
    {[["Viewed product", 26], ["Added to cart", 64], ["Purchased", 102]].map(([l, y], i) => (
      <g key={l as string} className="ta-pop" style={{ animationDelay: `${i * 0.15}s` }}>
        <rect x={14} y={y as number} width={120} height={28} rx={7} fill="#fff" stroke={L} />
        <circle cx={28} cy={(y as number) + 14} r={3.5} fill={i === 2 ? G : S} />
        <text x={38} y={(y as number) + 18} fontSize={11} fill={N}>{l as string}</text>
        <path d={`M134 ${(y as number) + 14} C162 ${(y as number) + 14} 164 78 186 78`} fill="none" stroke="#C9D0FF" strokeWidth={1.4} className="ta-dash" />
      </g>))}
    <g className="ta-float"><rect x={186} y={50} width={128} height={56} rx={12} fill={N} />
      <text x={200} y={74} fontSize={11} fill="#fff" fontWeight={600}>Thank-you email</text><text x={200} y={91} fontSize={9.5} fill="#9DA1A8">sent two minutes later</text></g>
  </g>),
  genChain: () => (<g style={f}>
    {[["Deposited 12,400 USDC", 22], ["Staked 2 ETH", 60], ["Voted on proposal 41", 98]].map(([l, y], i) => (
      <g key={l as string} className="ta-pop" style={{ animationDelay: `${i * 0.15}s` }}>
        <rect x={14} y={y as number} width={164} height={28} rx={7} fill="#EEF0FF" stroke="#C9D0FF" />
        <rect x={22} y={(y as number) + 8} width={12} height={12} rx={3} fill={B} />
        <text x={42} y={(y as number) + 18} fontSize={11} fill={B}>{l as string}</text>
        <path d={`M178 ${(y as number) + 14} C196 ${(y as number) + 14} 194 78 206 78`} fill="none" stroke="#C9D0FF" strokeWidth={1.4} className="ta-dash" />
      </g>))}
    <rect x={206} y={46} width={106} height={64} rx={12} fill="#F7F8FF" stroke={B} strokeDasharray="4 4" className="pa-pulse" />
    <text x={259} y={74} fontSize={11.5} fill={B} fontWeight={600} textAnchor="middle">Lifecycle layer</text>
    <text x={259} y={92} fontSize={10} fill={T} textAnchor="middle">still open</text>
  </g>),
};

export default function PointArt({ kind }: { kind: string }) {
  const Art = ART[kind];
  if (!Art) return null;
  return (
    <div className="tool-art point-art" aria-hidden="true">
      <svg viewBox="0 0 324 156" preserveAspectRatio="xMidYMid meet">
        <defs><linearGradient id="paGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#1727E0" /><stop offset="1" stopColor="#2F94FF" /></linearGradient></defs>
        <Art />
      </svg>
    </div>
  );
}
