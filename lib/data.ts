// All static content + mock data for the OnchainSuite home page.
// Ported verbatim from the design handoff (OnchainSuite Home.dc.html).

export const ACCENT = "#1727E0";
export const ACCENT_HOVER = "#1320B8";
export const OK = "#2BC48A";

// Canonical marketing-site origin (used for SEO: metadataBase, OG, sitemap, robots).
// www-primary: the apex onchainsuite.com 307-redirects to www on Vercel.
export const SITE_URL = "https://www.onchainsuite.com";

// External destinations
export const DOCS_URL = "https://onchainsuite-9506e41f.mintlify.app";
export const APP_URL = "https://app.onchainsuite.com";
export const CONTACT_EMAIL = "info@onchainsuite.com";

// Company + legal facts. Verified against Companies House (company 17370357).
// ICO registration applied for; swap icoApplication for the final ZA/ZB
// reference once the ICO confirms it (expected within a few working days).
export const COMPANY = {
  legalName: "OnchainSuite Ltd",
  shortName: "OnchainSuite",
  number: "17370357",
  office: "31 Nash Square, Birmingham, United Kingdom, B42 2EX",
  incorporated: "30 July 2026",
  icoApplication: "C2013999",
  jurisdiction: "England and Wales",
  privacyEmail: "privacy@onchainsuite.com",
  dpoEmail: "dpo@onchainsuite.com",
  legalEmail: "legal@onchainsuite.com",
  securityEmail: "security@onchainsuite.com",
} as const;

// Single source of truth for the "last updated" stamp on every policy page.
export const LEGAL_UPDATED = "11 August 2026";

// Credibility layer. `trusted` = teams working with OnchainSuite; `builtOn` =
// infrastructure we deliver on. Swap the text wordmarks for real logo SVGs when
// you have them (drop files in /public and render <img> instead of the name).
export const PARTNERS = {
  trusted: [
    { name: "Yaugahaus", href: "https://www.yaugahaus.com", logo: "/logos/yauga.jpg" },
    { name: "Vault777", href: "https://app.vault777.com", logo: "/logos/vault777.jpg" },
    { name: "W3GM", href: "", logo: "/logos/w3gm.jpg" },
    { name: "Surgence", href: "https://www.surgence.io", logo: "/logos/surgence.jpg" },
  ],
  builtOn: [
    { name: "AWS SES", href: "https://aws.amazon.com/ses/" },
    { name: "Azure Communication Services", href: "https://azure.microsoft.com/en-us/products/communication-services" },
  ],
};

export const DOCS = {
  home: DOCS_URL,
  gettingStarted: `${DOCS_URL}/getting-started/overview`,
  firstCampaign: `${DOCS_URL}/getting-started/send-your-first-campaign`,
  audience: `${DOCS_URL}/audience/overview`,
  campaigns: `${DOCS_URL}/campaigns/overview`,
  automation: `${DOCS_URL}/automation/overview`,
  intelligence: `${DOCS_URL}/intelligence/overview`,
  api: `${DOCS_URL}/api/overview`,
  webhooks: `${DOCS_URL}/api/webhooks`,
  integrations: `${DOCS_URL}/integrations/overview`,
  inAppPush: `${DOCS_URL}/integrations/in-app-notifications`,
  walletData: `${DOCS_URL}/integrations/wallet-and-contract-data`,
  thirdParty: `${DOCS_URL}/integrations/third-party-connections`,
  webhookEvents: `${DOCS_URL}/integrations/webhook-events`,
};

export type Tone = "pos" | "warn" | "danger" | "neutral";

export type FeedEvent = {
  w: string;
  act: string;
  amt: string;
  proto: string;
  chain: string;
  tone: Tone;
  quiet?: boolean;
};

// Hero live-activity feed pool
export const FEED_POOL: FeedEvent[] = [
  { w: "0x7f3a…c21", act: "deposited", amt: "$52,000", proto: "Aave", chain: "Ethereum", tone: "pos" },
  { w: "0x91cc…0fa", act: "added liquidity", amt: "$4,300", proto: "Aerodrome", chain: "Base", tone: "pos" },
  { w: "0x3de1…77b", act: "unstaked", amt: "1,200 ETH", proto: "Lido", chain: "Ethereum", tone: "warn" },
  { w: "8sJk…9QzP", act: "swapped", amt: "$18,900", proto: "Jupiter", chain: "Solana", tone: "pos" },
  { w: "0x44ab…e90", act: "withdrew", amt: "$96,000", proto: "Uniswap", chain: "Polygon", tone: "warn" },
  { w: "0x0c2f…113", act: "went quiet", amt: "14 days", proto: "·", chain: "·", tone: "danger", quiet: true },
  { w: "0xa17d…5ce", act: "minted", amt: "1 position", proto: "Aerodrome", chain: "Base", tone: "pos" },
  { w: "0xbe90…2a1", act: "voted", amt: "Proposal 42", proto: "Governance", chain: "Ethereum", tone: "neutral" },
];

export const TONE_COLOR: Record<Tone, string> = {
  pos: "#16A34A",
  warn: "#D6850A",
  danger: "#E0354F",
  neutral: "#9A988F",
};

// Hero command-center left pane: per-tab conversation + agent steps
export type LeftStep = { text: string; kind: "done" | "active" };
export type LeftTab = { bubbles: string[]; steps: LeftStep[]; placeholder: string };

export const LEFT_DATA: Record<number, LeftTab> = {
  0: {
    bubbles: [
      "Send an email campaign to the segment with churn risk rising over 8%.",
      "Only include users from the last campaign who opened and clicked our email, and who made a deposit on-chain.",
    ],
    steps: [
      { text: "Segment built · churn ↑ >8% · 1,240", kind: "done" },
      { text: "Filtered to openers + clickers · 312", kind: "done" },
      { text: "Matched on-chain action: deposited · 142", kind: "done" },
      { text: "Campaign drafted · ready to review", kind: "active" },
    ],
    placeholder: "Refine the audience…",
  },
  1: {
    bubbles: [
      "When a wallet's stake falls below half its peak, win it back.",
      "Send an in-app push right away, then an email with a top-up incentive.",
    ],
    steps: [
      { text: "Trigger set · stake < 0.5 × peak", kind: "done" },
      { text: "Channels · in-app push + email", kind: "done" },
      { text: "Copy drafted for both", kind: "done" },
      { text: "Automation live · runs on its own", kind: "active" },
    ],
    placeholder: "Add a delay or branch…",
  },
  2: {
    bubbles: ["Which wallets deposited over $10k last month but haven't returned?"],
    steps: [
      { text: "Parsed your question via MCP", kind: "done" },
      { text: "Queried normalised on-chain data", kind: "done" },
      { text: "Cohort built · 87 wallets", kind: "done" },
      { text: "Ready to message or save as segment", kind: "active" },
    ],
    placeholder: "Ask a follow-up…",
  },
};

export const HERO_TAB_LABELS: [string, number][] = [
  ["Activity", 0],
  ["Automations", 1],
  ["Intelligence", 2],
];

// Monitor & normalise: event type -> 4 raw protocol events
export type RawEvent = {
  proto: string;
  chain: string;
  dot: string;
  sig: string;
  wallet: string;
  value: string;
  ts: string;
};
export type MonType = { id: string; label: string; raw: RawEvent[] };

export const MON_TYPES: MonType[] = [
  {
    id: "add_liquidity",
    label: "Add Liquidity",
    raw: [
      { proto: "Uniswap v3", chain: "Ethereum", dot: "#627EEA", sig: "Mint(sender, owner, tickLower, tickUpper, amount…)", wallet: "0x7f3a…c21", value: "52,000", ts: "03:14:08" },
      { proto: "Aerodrome", chain: "Base", dot: "#2C6BED", sig: "AddLiquidity(tokenA, tokenB, amountADesired…)", wallet: "0xbe90…2a1", value: "31,250", ts: "03:14:16" },
      { proto: "Orca", chain: "Solana", dot: "#9A6BFF", sig: "increaseLiquidity(liquidityAmount, tokenMaxA…)", wallet: "8sJk…9QzP", value: "12,400", ts: "03:14:19" },
      { proto: "Curve", chain: "Polygon", dot: "#8247E5", sig: "add_liquidity(amounts[2], min_mint_amount)", wallet: "0x44c1…f08", value: "9,800", ts: "03:14:22" },
    ],
  },
  {
    id: "mint",
    label: "Mint",
    raw: [
      { proto: "Zora", chain: "Base", dot: "#2C6BED", sig: "mint(recipient, tokenId, quantity)", wallet: "0x21aa…9d3", value: "280", ts: "03:18:02" },
      { proto: "Sky", chain: "Ethereum", dot: "#627EEA", sig: "Mint(usr, wad)", wallet: "0x9b0e…7c4", value: "40,000", ts: "03:18:05" },
      { proto: "Metaplex", chain: "Solana", dot: "#9A6BFF", sig: "mintNft(metadata, masterEdition…)", wallet: "5fQ2…Lk7", value: "150", ts: "03:18:07" },
      { proto: "Manifold", chain: "Polygon", dot: "#8247E5", sig: "mintBatch(to, tokenIds, amounts)", wallet: "0x3ce8…b12", value: "95", ts: "03:18:10" },
    ],
  },
  {
    id: "borrow",
    label: "Borrow",
    raw: [
      { proto: "Aave v3", chain: "Ethereum", dot: "#627EEA", sig: "Borrow(reserve, user, onBehalfOf, amount…)", wallet: "0x9d4e…88a", value: "18,400", ts: "03:21:41" },
      { proto: "Compound v3", chain: "Polygon", dot: "#8247E5", sig: "Borrow(borrower, borrowAmount)", wallet: "0x55fa…0c9", value: "7,200", ts: "03:21:44" },
      { proto: "Moonwell", chain: "Base", dot: "#2C6BED", sig: "Borrow(borrower, amount, account…)", wallet: "0x18bd…4e6", value: "5,600", ts: "03:21:47" },
      { proto: "Solend", chain: "Solana", dot: "#9A6BFF", sig: "borrowObligationLiquidity(amount)", wallet: "7nQm…Rt2", value: "3,900", ts: "03:21:50" },
    ],
  },
  {
    id: "stake",
    label: "Stake",
    raw: [
      { proto: "Lido", chain: "Ethereum", dot: "#627EEA", sig: "Submitted(sender, amount, referral)", wallet: "0xa2d9…77f", value: "24,000", ts: "03:25:12" },
      { proto: "Marinade", chain: "Solana", dot: "#9A6BFF", sig: "deposit(lamports)", wallet: "9xRt…Vb3", value: "11,500", ts: "03:25:15" },
      { proto: "Stader", chain: "Polygon", dot: "#8247E5", sig: "submit(_amount, _referral)", wallet: "0x6b1c…e54", value: "4,100", ts: "03:25:18" },
      { proto: "Convex", chain: "Base", dot: "#2C6BED", sig: "Staked(user, amount)", wallet: "0x0f73…aa1", value: "8,300", ts: "03:25:21" },
    ],
  },
];

export const CHAINS = [
  { name: "Ethereum", color: "#627EEA" },
  { name: "Solana", color: "#9A6BFF" },
  { name: "Base", color: "#2C6BED" },
  { name: "Polygon", color: "#8247E5" },
];

export const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
];

export const LOGOS = ["Northwind", "Aperture", "Helios", "Meridian", "Volans"];

// Real chains + protocols OnchainSuite normalises, for the "works with" marquee.
export const ECOSYSTEM_LOGOS: { name: string; color: string }[] = [
  { name: "Ethereum", color: "#627EEA" },
  { name: "Solana", color: "#9A6BFF" },
  { name: "Base", color: "#2C6BED" },
  { name: "Polygon", color: "#8247E5" },
  { name: "Optimism", color: "#FF0420" },
  { name: "Arbitrum", color: "#28A0F0" },
  { name: "Uniswap", color: "#FF007A" },
  { name: "Aave", color: "#B6509E" },
  { name: "Lido", color: "#00A3FF" },
  { name: "Aerodrome", color: "#2C6BED" },
  { name: "Curve", color: "#3465A4" },
  { name: "Compound", color: "#00D395" },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Which chains do you support?",
    a: "Ethereum, Solana, Base, and Polygon today, with more on the way. Every chain is normalised into one event shape, so a stake on Lido and a stake on Marinade look identical to your rules and segments.",
  },
  {
    q: "How can you message a wallet with no personal data?",
    a: "In-app push needs only the wallet address, so it reaches connected wallets through a drop-in SDK, no email or extra identifier required. Email becomes available only when a wallet owner opts in and privately links an address, which stays under their control.",
  },
  {
    q: "How does identity resolution work?",
    a: "Wallet-to-channel mapping is automatic for in-app push. A personal channel like email is added only when the wallet owner opts in and privately links it, so you never stitch CSVs by hand and you never hold data a wallet hasn't chosen to share.",
  },
  {
    q: "Do you ever move funds or write to the chain?",
    a: "No. OnchainSuite monitors on-chain activity read-only and is fully non-custodial. We normalise events and fire your messages; we never sign transactions or touch a wallet's assets.",
  },
  {
    q: "How fast can we go live?",
    a: "Drop the SDK into your dApp in minutes and in-app push is live. From there it is about ten minutes to your first real cohort insight, and you can build an automation that runs on its own right after.",
  },
  {
    q: "What does it cost?",
    a: "Two lines. Suite (wallet plus email) comes in four tiers: PAYG at $0 plus usage, then Launch $27, Growth $349 and Pro $1,622 a month. Send (email only) is $6 a month plus $2.60 per 1,000 subscribers. Forms and a dedicated IP start on Growth; tiers otherwise differ on allowances and seats.",
  },
];

export const AUTO_POINTS = [
  "Set it up once. It runs on its own until you pause it.",
  "Trigger on on-chain actions and email behaviour: opens, clicks, even non-opens.",
  "One trigger sends to both in-app push and email.",
];

export const INTEL_POINTS = [
  "The MCP runs the analysis over your normalised on-chain data.",
  "Get cohorts and segments back, ready to message.",
  "A SQL engine underneath for when your team wants the raw query.",
];

export const COHORT_BARS = ["40%", "62%", "54%", "80%", "100%", "48%"];

export const COHORT_ROWS = [
  { addr: "0x7f3a…c21", amt: "$52,000", seen: "31d ago" },
  { addr: "0x44ab…e90", amt: "$96,000", seen: "28d ago" },
  { addr: "8sJk…9QzP", amt: "$18,900", seen: "34d ago" },
];

export const INTEL_QUERY =
  "Which wallets deposited over $10k last month but haven't returned?";

export type FooterLink = { label: string; href: string; external?: boolean; accent?: boolean };

// Footer link columns, per the v2 design handoff (Platform / Developers / Free
// tools). Compare is rendered separately from COMPETITORS, legal from FOOTER_LEGAL.
export const FOOTER_COLS: { title: string; items: FooterLink[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "Segments", href: DOCS.audience, external: true },
      { label: "Campaigns", href: DOCS.campaigns, external: true },
      { label: "Automations", href: "/#automations" },
      { label: "Onchain analytics", href: "/#intelligence" },
      { label: "Identity resolution", href: "/#platform" },
      { label: "Deliverability", href: "/#channels" },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "Documentation", href: DOCS.home, external: true },
      { label: "API reference", href: DOCS.api, external: true },
      { label: "Webhooks", href: DOCS.webhooks, external: true },
      { label: "SDKs", href: DOCS.gettingStarted, external: true },
      { label: "Changelog", href: DOCS.home, external: true },
      { label: "Status", href: DOCS.home, external: true },
    ],
  },
  {
    title: "Free tools",
    items: [
      { label: "Cost per acquisition", href: "/tools/cost-per-acquisition" },
      { label: "Dormant wallet reactivation", href: "/tools/dormant-wallet-reactivation" },
      { label: "Wallet reachability score", href: "/tools/wallet-reachability-score" },
      { label: "Wallet churn rate", href: "/tools/wallet-churn-rate" },
      { label: "All tools", href: "/tools", accent: true },
    ],
  },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "DPA", href: "/dpa" },
  { label: "Security", href: "/security" },
  { label: "Subprocessors", href: "/subprocessors" },
];

export const INTEGRATIONS = [
  "MetaMask", "Phantom", "WalletConnect", "Rabby", "Ethereum", "Solana",
  "Base", "Polygon", "Discord", "Telegram", "SDK", "API", "Webhooks",
  "Dune", "Privy", "Dynamic",
];

export const CHANNELS = [
  { name: "In-app push", badge: "SHIPS FIRST", badgeColor: "#15803D", badgeBg: "#E8F6EE", accentIcon: true, desc: "Wallet address only. Reaches 100% of connected wallets via a drop-in SDK." },
  { name: "Email", badge: "OPT-IN", badgeColor: "#15803D", badgeBg: "#E8F6EE", accentIcon: false, desc: "For wallets whose owners have opted in and privately linked an address." },
  { name: "Telegram", badge: "ROADMAP", badgeColor: "#9A6B12", badgeBg: "#FBF1DD", accentIcon: false, desc: "A bot that posts to the protocol's group, on the roadmap." },
  { name: "Discord", badge: "ROADMAP", badgeColor: "#9A6B12", badgeBg: "#FBF1DD", accentIcon: false, desc: "Channel posts and DMs to members, on the roadmap." },
];

export const COMPARISON_ROWS = [
  { cap: "Identity resolution", old: "Manual wallet-to-email mapping", neu: "Automatic, privacy-first opt-in" },
  { cap: "On-chain analytics", old: "Dune queries + CSV export", neu: "Real-time normalised events" },
  { cap: "Activation", old: "Generic, no on-chain triggers", neu: "Behaviour-triggered, multi-channel" },
  { cap: "Data flow", old: "Manual CSV stitching", neu: "Unified real-time pipeline" },
  { cap: "Time to first campaign", old: "Hours to days", neu: "Minutes" },
];

// Honest audience framing for a pre-launch product: who this is for and the
// pain it removes, stated in our own voice. No fabricated customer quotes.
export const AUDIENCES = [
  { who: "Growth leads at DeFi protocols", pain: "You can watch a wallet go quiet but have no way to act on it. OnchainSuite turns that signal into a win-back flow that runs on its own." },
  { who: "Founders of early protocols", pain: "Get the retention loop Web2 always had, without building identity, analytics, and messaging infrastructure yourself first." },
  { who: "Heads of growth at consumer and NFT apps", pain: "Reach wallets by what they actually do on-chain, across chains, without stitching CSVs or mapping addresses by hand." },
];

// Pricing (frozen per the finance SSOT, 20 Aug 2026). Two lines:
//   Suite — four tiers for teams with an on-chain audience (wallet + email).
//   Send  — an email-only curve for teams with no on-chain audience.
// Capabilities are ungated at every Suite tier; tiers differ on allowance
// depth, seats and dedicated IP only. Monthly billing, no annual discount.
export type SuiteTier = {
  name: string;
  price: string; // display, e.g. "$27"
  period: string; // e.g. "/mo" or "+ usage"
  tagline: string;
  featured?: boolean;
  cta: string;
  href: string;
  external?: boolean;
  allowances: { label: string; value: string }[];
};

export const SUITE_TIERS: SuiteTier[] = [
  {
    name: "PAYG", price: "$0", period: "+ usage",
    tagline: "Every capability, no discount. Prepaid wallet, $10 minimum top-up. Hard caps stop it substituting for a plan; everything is metered at full list price.",
    cta: "Get early access", href: "/early-access",
    allowances: [
      { label: "Contacts", value: "1,000" },
      { label: "Automations", value: "3 max" },
      { label: "Team seats", value: "2" },
      { label: "Metered at", value: "list price" },
    ],
  },
  {
    name: "Launch", price: "$27", period: "/mo",
    tagline: "Email and the wallet channel. Campaigns, automations, audience and Intelligence at sample size. No Forms or dedicated IP.",
    cta: "Get early access", href: "/early-access",
    allowances: [
      { label: "Contacts", value: "2,500" },
      { label: "Emails", value: "50,000" },
      { label: "In-app push", value: "25,000" },
      { label: "On-chain", value: "1,000" },
      { label: "AI credits", value: "500" },
      { label: "ONS+", value: "250" },
      { label: "Team seats", value: "2" },
    ],
  },
  {
    name: "Growth", price: "$349", period: "/mo", featured: true,
    tagline: "Adds Forms and a dedicated IP, and takes the wallet channel from sample size to campaign size.",
    cta: "Get early access", href: "/early-access",
    allowances: [
      { label: "Contacts", value: "25,000" },
      { label: "Emails", value: "250,000" },
      { label: "In-app push", value: "250,000" },
      { label: "On-chain", value: "10,000" },
      { label: "AI credits", value: "8,000" },
      { label: "ONS+", value: "2,500" },
      { label: "Dedicated IP", value: "1" },
      { label: "Team seats", value: "4" },
    ],
  },
  {
    name: "Pro", price: "$1,622", period: "/mo",
    tagline: "Intelligence at working scale. Enrichment, segmentation and on-chain triggers run continuously across a large list.",
    cta: "Get early access", href: "/early-access",
    allowances: [
      { label: "Contacts", value: "75,000" },
      { label: "Emails", value: "750,000" },
      { label: "In-app push", value: "1,000,000" },
      { label: "On-chain", value: "25,000" },
      { label: "AI credits", value: "16,000" },
      { label: "ONS+", value: "7,500" },
      { label: "Dedicated IP", value: "1" },
      { label: "Team seats", value: "7" },
    ],
  },
];

// Send: email-only line, one plan, no tiers. $6 a month base plus $2.60 per
// 1,000 subscribers (assumes ~6 sends each). Billed on list size.
export const SEND_BASE = 6; // flat base, $/mo
export const SEND_PER_1K = 2.6; // per 1,000 subscribers, $/mo

export const SEND_POINTS: { subs: number; price: string }[] = [
  { subs: 1000, price: "$8.60" },
  { subs: 5000, price: "$19.00" },
  { subs: 10000, price: "$32.00" },
  { subs: 25000, price: "$71.00" },
  { subs: 50000, price: "$136.00" },
  { subs: 100000, price: "$266.00" },
];

export function estimateSend(subscribers: number): number {
  return Math.round((SEND_BASE + (subscribers / 1000) * SEND_PER_1K) * 100) / 100;
}

// On every paid Suite tier (Forms and a dedicated IP start on Growth).
export const INCLUDED_FEATURES: string[] = [
  "In-app push via a drop-in SDK, wallet address only",
  "Email campaigns and behaviour-triggered automations",
  "Audience segmentation and ONS+ list protection",
  "Intelligence: ask your on-chain data in plain language, SQL underneath",
  "Protocol Normalisation across the chains you use",
  "Wallet-first identity with privacy-first, opt-in channel linking",
];

export const PRICING_FAQ: { q: string; a: string }[] = [
  {
    q: "What is the difference between Suite and Send?",
    a: "Suite is for teams with an on-chain audience: it pairs the wallet channel (in-app push) with email and comes in four tiers. Send is email only, for teams with no on-chain audience, the same email engine with the wallet channel switched off, priced as a simple per-subscriber curve.",
  },
  {
    q: "How do the Suite tiers work?",
    a: "Four tiers: PAYG ($0 plus usage), Launch ($27), Growth ($349) and Pro ($1,622) a month. Every paid tier includes campaigns, automations, audience, ONS+ and Intelligence; Forms and a dedicated IP start on Growth. Tiers otherwise differ on allowance depth and team seats.",
  },
  {
    q: "How is Send priced?",
    a: "One plan, no tiers: $6 a month plus $2.60 per 1,000 subscribers, billed on your list size and assuming around six sends per subscriber. A 10,000-contact list is $32 a month, a 50,000-contact list is $136.",
  },
  {
    q: "What is PAYG?",
    a: "Pay as you go: every capability, metered at list price, with a prepaid wallet ($10 minimum top-up) and hard caps. It is the way to try the platform before committing to a monthly tier.",
  },
  {
    q: "What happens if I exceed an allowance?",
    a: "Usage above a tier's allowance bills at list price. Allowances are sized to cover normal use, so overage is the exception rather than the plan. Move up a tier whenever it is cheaper than running over.",
  },
  {
    q: "Is there a free plan, and is there SMS?",
    a: "No free tier: PAYG starts at $0 plus usage, so you only pay for what you send and track. In-app push and email are the channels today, with Telegram and Discord on the roadmap. There is no SMS; in-app push is the lowest-cost, highest-reach channel.",
  },
];

