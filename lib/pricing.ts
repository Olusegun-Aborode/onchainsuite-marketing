/* Prices and allowances from business plan v13 (27 September 2026), section 4.1, and the
   Finance SSOT (section 03, catalogue and pricing).
   This is the only place the redesigned site reads prices from. */

export type Package = {
  id: string;
  name: string;
  usd: number;
  gbp: number;
  contacts: number;
  credits: number;
  emails: number;
  inapp: number;
  seats: number;
};

export const PACKAGES: Package[] = [
  { id: "launch", name: "Launch", usd: 39, gbp: 29, contacts: 2_500, credits: 10_000, emails: 50_000, inapp: 25_000, seats: 2 },
  { id: "launch-plus", name: "Launch+", usd: 118, gbp: 87, contacts: 10_000, credits: 40_000, emails: 100_000, inapp: 100_000, seats: 3 },
  { id: "growth", name: "Growth", usd: 349, gbp: 257, contacts: 25_000, credits: 100_000, emails: 250_000, inapp: 250_000, seats: 4 },
  { id: "growth-plus", name: "Growth+", usd: 681, gbp: 502, contacts: 50_000, credits: 200_000, emails: 500_000, inapp: 500_000, seats: 5 },
  { id: "pro", name: "Pro", usd: 1_622, gbp: 1_197, contacts: 75_000, credits: 300_000, emails: 750_000, inapp: 1_000_000, seats: 7 },
];

/* The three levels, used for the comparison table. Prices come from suitePrice() below. */
export const LEVELS = [
  {
    id: "launch",
    name: "Launch",
    pitch: "For a first customer group, with both lanes, Loops and the Intelligence MCP from day one.",
    options: ["launch", "launch-plus"],
  },
  {
    id: "growth",
    name: "Growth",
    pitch: "For a live audience, with deeper allowances and more seats.",
    options: ["growth", "growth-plus"],
    featured: true,
  },
  {
    id: "pro",
    name: "Pro",
    pitch: "For your whole audience, with the largest allowances and the most seats.",
    options: ["pro"],
  },
];

export const byId = (id: string) => PACKAGES.find((p) => p.id === id)!;

/* Finance SSOT: Suite is one price curve, $16 + $13.30 per 1,000 contacts, times a capability
   multiplier. The level follows from contact bands (Launch 0-24,999, Growth 25,000-74,999,
   Pro 75,000+), so a buyer only chooses how many contacts they need. Reproduces every
   reference price: $39, $118, $349, $681, $1,622. */
export const CURVE = { base: 16, per1k: 13.3 };
export const MULT = { launch: 0.79, growth: 1, pro: 1.6 } as const;
export const FX_GBP = 0.7377; // the SSOT's own USD-to-GBP conversions
export const EXTRA_SEAT_USD = 10; // per seat a month above the included count, capped at 50 a checkout
export type LevelId = keyof typeof MULT;
export const levelFor = (c: number): LevelId => (c >= 75_000 ? "pro" : c >= 25_000 ? "growth" : "launch");
export const suitePrice = (c: number) => Math.round(MULT[levelFor(c)] * (CURVE.base + (CURVE.per1k * c) / 1000));
export const seatsIncluded = (c: number) => (c >= 75_000 ? 7 : c >= 50_000 ? 5 : c >= 25_000 ? 4 : c >= 10_000 ? 3 : 2);
/* Allowances scale with contacts. Credits (a full enrichment pass, 4 per contact) and ONS+ (1:1)
   are SSOT rules; emails and in-app follow the reference packages (10 per contact, Launch at
   least 50,000 emails, Pro 1,000,000 in-app at 75,000). */
export const allowances = (c: number) => ({
  credits: c * 4,
  ons: c,
  emails: Math.max(50_000, c * 10),
  inapp: levelFor(c) === "pro" ? Math.round((c * 40) / 3) : c * 10,
  seats: seatsIncluded(c),
});
export const CONTACT_STEPS: number[] = [
  ...Array.from({ length: 10 }, (_, i) => 2_500 * (i + 1)),          // 2,500 to 25,000
  ...Array.from({ length: 10 }, (_, i) => 30_000 + 5_000 * i),        // 30,000 to 75,000
  ...Array.from({ length: 7 }, (_, i) => 100_000 + 25_000 * i),       // 100,000 to 250,000
  300_000, 400_000, 500_000,
];
export const LEVEL_INFO: { id: LevelId; name: string; band: string; ref: number }[] = [
  { id: "launch", name: "Launch", band: "2,500 to 24,999 contacts", ref: 2_500 },
  { id: "growth", name: "Growth", band: "25,000 to 74,999 contacts", ref: 25_000 },
  { id: "pro", name: "Pro", band: "75,000 contacts and up", ref: 75_000 },
];
/* What usage beyond the allowance costs, at list. */
export const METERS: { item: string; unit: string; price: string }[] = [
  { item: "Emails", unit: "per 1,000 sent", price: "$1.00" },
  { item: "In-app messages", unit: "per 1,000 delivered", price: "$1.00" },
  { item: "Wallet-data credits", unit: "per 10,000 (a full enrichment uses 4)", price: "$10.00" },
  { item: "ONS+ list checks", unit: "per 1,000 addresses", price: "$10.00" },
  { item: "AI actions", unit: "per 1,000", price: "$6.00" },
];

export const SEND_BASE = 6;
export const SEND_PER_1K = 3.95;
export const sendPrice = (subscribers: number) => SEND_BASE + (subscribers / 1000) * SEND_PER_1K;

export const EXTRA_CREDITS = { usd: 10, credits: 10_000, perEnrichment: 4 };

/* Add-ons from the Finance SSOT: seats $10 each above the included count, credits $10 per
   10,000, Concierge sold by the hour and never bundled. */
export const ADDONS: { item: string; detail: string; price: string }[] = [
  { item: "Extra team seats", detail: "Each seat above the ones your contact count includes, up to 50", price: "$10 a month" },
  { item: "+10,000 wallet-data credits", detail: "Enough to fully enrich 2,500 more wallets", price: "$10" },
  { item: "+100,000 wallet-data credits", detail: "Enough to fully enrich 25,000 more wallets", price: "$100" },
  { item: "Concierge", detail: "Our team plans and runs lifecycle work with you, scoped in advance", price: "$150 an hour" },
];

export const fmt = (n: number) => n.toLocaleString("en-US");
export const usd = (n: number) => "$" + (Number.isInteger(n) ? fmt(n) : n.toFixed(2));

/* Comparison table. A row is either a capacity number per package or a yes/no per level. */
type Cell = string | boolean;
export type Row = { label: string; note?: string; cells: Cell[]; span?: boolean }; // span: one value for every level
export type Group = { title: string; rows: Row[] };

const all = (v: Cell = true): Cell[] => [v, v, v];

export const COMPARE_GROUPS: Group[] = [
  {
    title: "Capacity",
    rows: [
      { label: "Contacts", note: "Your level follows from how many contacts you import.", cells: ["2,500 to 24,999", "25,000 to 74,999", "75,000 and up"] },
      { label: "Wallet-data credits", note: "A full enrichment pass of every contact, at 4 credits each.", cells: ["4 per contact", "4 per contact", "4 per contact"] },
      { label: "Emails a month", cells: ["10 per contact, at least 50,000", "10 per contact", "10 per contact"] },
      { label: "In-app messages a month", cells: ["10 per contact", "10 per contact", "About 13 per contact"] },
      { label: "ONS+ list checks", cells: ["1 per contact", "1 per contact", "1 per contact"] },
      { label: "Team seats included", note: "Extra seats are $10 a month each, up to 50.", cells: ["2, or 3 from 10,000 contacts", "4, or 5 from 50,000 contacts", "7"] },
    ],
  },
  {
    title: "Customer data",
    rows: [
      { label: "One record per customer across your app and your contracts", cells: all() },
      { label: "Contract events turned into actions such as deposits and withdrawals", cells: all() },
      { label: "Contract history back to the first block, from Atlas", cells: all() },
      { label: "Lifecycle stages and health scores", cells: all() },
      { label: "Contacts that exist with only a wallet", cells: all() },
    ],
  },
  {
    title: "Audiences and sending",
    rows: [
      { label: "Segments, including people who have not done something", cells: all() },
      { label: "Campaigns by email and in-app", cells: all() },
      { label: "Loops, started by on-chain and off-chain triggers", cells: all() },
      { label: "Holdouts on every campaign and Loop", cells: all() },
      { label: "Forms", cells: all() },
      { label: "Dedicated sending IP", note: "Provisioned once you send more than 100,000 emails a month.", cells: all() },
    ],
  },
  {
    title: "Intelligence and developers",
    rows: [
      { label: "Intelligence MCP, questions in plain English", cells: all() },
      { label: "In-app SDK", cells: all() },
      { label: "REST API and webhooks", cells: all() },
    ],
  },
  {
    title: "Add-ons, the same price at every level",
    rows: ADDONS.map((a) => ({ label: a.item, note: a.detail, cells: [a.price], span: true })),
  },
  {
    title: "Usage beyond your allowance",
    rows: METERS.map((m) => ({ label: m.item, note: m.unit, cells: [m.price], span: true })),
  },
];

export const PRICING_FAQ = [
  {
    q: "What is the difference between Suite and Send?",
    a: "Suite reads both lanes, what customers do in your app and what their wallets do on-chain, and sends by email and in-app. Send is campaigns and Loops by email without Suite's blockchain data features, priced on the size of your list.",
  },
  {
    q: "How do I choose a package?",
    a: "Set the number of contacts you plan to import and the price follows. Your level comes from that number: Launch up to 24,999 contacts, Growth from 25,000 and Pro from 75,000. Many companies start with one customer group rather than every wallet that has touched their contracts.",
  },
  {
    q: "What counts as a contact?",
    a: "One identifier. An email address, a wallet, a Telegram handle and an X handle each count as one, so a person with three wallets is three contacts.",
  },
  {
    q: "What are wallet-data credits?",
    a: "Credits pay for reading and enriching wallets on the chain. A full wallet enrichment uses four credits. Every package includes a monthly allowance, and you can buy another 10,000 credits for $10 whenever you need them.",
  },
  {
    q: "How is Send priced?",
    a: "Send is $6 a month plus $3.95 per 1,000 subscribers. That is $15.88 a month at 2,500 subscribers, $45.50 at 10,000 and $104.75 at 25,000.",
  },
  {
    q: "Can I pay in pounds?",
    a: "Yes. Suite is priced in both US dollars and pounds sterling, and the prices on this page show both.",
  },
  {
    q: "Is there a free plan?",
    a: "No. Book a walkthrough and we will look at the data you want to bring in, then recommend the package that fits it.",
  },
];
