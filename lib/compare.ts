// Data for the /compare pages. One entry per competitor; the template in
// app/compare/[slug]/page.tsx renders from this. Positioning stays fair: each
// competitor is good at its job, and we win on the on-chain axis.

export type MRow = { cap: string; ocs: string; them: string };
export type QA = { q: string; a: string };

export const MATRIX_CAPS = [
  "Pricing",
  "On-chain behaviour triggers",
  "Wallet-native identity (no email)",
  "In-app push to wallets",
  "Email campaigns",
  "Segment on on-chain activity",
  "Cross-chain (ETH / SOL / Base / Polygon)",
  "Retention automations & journeys",
  "Telegram / Discord",
  "SMS",
  "Ads / acquisition attribution",
  "Analytics / dashboards",
  "SDK / API",
  "Built for Web3",
] as const;

export const OCS_MATRIX: string[] = [
  "4 tiers, $0–$799/mo",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Roadmap",
  "No",
  "No",
  "Basic",
  "Yes",
  "Yes",
];

// Constant across every comparison: the OnchainSuite pillars and switch steps.
export const OCS_HIGHLIGHTS = [
  { icon: "bolt", title: "Triggers on-chain", desc: "A rule fires the moment a wallet deposits, unstakes, or goes quiet. No manual event wiring." },
  { icon: "send", title: "Reaches wallets", desc: "In-app push needs only the address, so wallets with no email still hear from you. Email covers the rest." },
  { icon: "wand", title: "Plays, not projects", desc: "Fork a win-back, onboarding, or whale-watch flow and ship it the same afternoon." },
];

export const MIGRATION_STEPS = [
  { title: "Drop in the SDK", desc: "Create a workspace and add the SDK. You are live in minutes." },
  { title: "We read the chains", desc: "Activity across Ethereum, Solana, Base, and Polygon comes back as clean triggers and segments." },
  { title: "Turn on a Play", desc: "Fork a flow or write a rule. It runs on its own, across in-app push and email." },
];

export type Competitor = {
  slug: string;
  name: string;
  kind: string;
  intro: string;
  whyChoose: string;
  theyLike: string[];
  whenThem: string;
  together: string;
  them: string[]; // aligned to MATRIX_CAPS
  faqs: QA[];
};

export const COMPETITORS: Competitor[] = [
  {
    slug: "klaviyo",
    name: "Klaviyo",
    kind: "Ecommerce marketing",
    intro:
      "Klaviyo runs email and SMS for ecommerce brands, keyed to store events like orders and carts. OnchainSuite does that same job for Web3, only the triggers come from the chain and the audience is wallets. When one deposits, unstakes, or goes quiet, you reach it by in-app push or email, even if it never gave you an address.",
    whyChoose:
      "Klaviyo has no wallet identity and no blockchain data. It cannot see a deposit or a wallet going cold, and it cannot message a wallet that never shared an email. That gap is exactly what OnchainSuite was built to close.",
    theyLike: ["Deep ecommerce integrations like Shopify", "Mature email and SMS automation", "Predictive analytics for stores", "A big template and flow library"],
    whenThem: "You run a Web2 store and your customers are email addresses, not wallets.",
    together: "Keep Klaviyo for Web2 email and let OnchainSuite handle the on-chain triggers it cannot see. Segments sync between the two.",
    them: ["Paid by contacts", "No", "No", "App push (Web2)", "Yes", "Web2 events", "No", "Yes", "No", "Yes", "Limited", "Yes", "Yes", "No"],
    faqs: [
      { q: "Can Klaviyo track on-chain activity?", a: "No. Klaviyo reads web and store events. It has no wallet or blockchain source, so it cannot fire on a deposit, swap, or stake." },
      { q: "Is OnchainSuite a Klaviyo replacement for Web3?", a: "For on-chain retention, yes. You can also run both and let OnchainSuite own the wallet-native side." },
      { q: "Does OnchainSuite do SMS?", a: "No. We focus on in-app push and email." },
      { q: "Can it reach wallets with no email?", a: "Yes, through in-app push, which needs only the address. Email is for wallets that opt in." },
    ],
  },
  {
    slug: "customer-io",
    name: "Customer.io",
    kind: "Messaging automation",
    intro:
      "Customer.io automates email, push, and in-app messages off product events your app sends it. OnchainSuite works the same way for wallets, but it reads the events straight from the chain, so nobody has to build a pipeline first.",
    whyChoose:
      "Customer.io is strong at event-driven messaging, but the events come from your app through its SDK. There is no wallet identity and no chain data underneath. OnchainSuite captures on-chain activity for you and lets you message wallets directly.",
    theyLike: ["Flexible visual workflows", "A first-class developer and API experience", "Email, push, in-app, and SMS in one place", "Solid data and deliverability controls"],
    whenThem: "You run a Web2 app and already pipe first-party product events into a messaging tool.",
    together: "If you are standardised on Customer.io, forward on-chain events into it. Or let OnchainSuite own the wallet-native side end to end.",
    them: ["From ~$100/mo", "No", "No", "Yes", "Yes", "Web2 events", "No", "Yes", "No", "Yes", "No", "Basic", "Yes", "No"],
    faqs: [
      { q: "Does Customer.io read wallet data?", a: "No. It fires on events you send it. On-chain activity would be yours to capture and forward; OnchainSuite does that for you." },
      { q: "Is OnchainSuite as flexible?", a: "For on-chain retention, yes, with wallet identity and prebuilt Plays. Customer.io stays broader for generic Web2 lifecycle messaging." },
      { q: "Can I message wallets with no email?", a: "Yes, by in-app push. Customer.io needs a known Web2 identifier and channel." },
      { q: "How long is setup?", a: "Add the SDK and you are live in minutes. Chains are read into triggers automatically." },
    ],
  },
  {
    slug: "braze",
    name: "Braze",
    kind: "Enterprise engagement",
    intro:
      "Braze runs cross-channel messaging for large consumer apps. OnchainSuite brings that always-on model to Web3, built around wallets and on-chain behaviour instead of Web2 profiles, and it stands up in an afternoon rather than a quarter.",
    whyChoose:
      "Braze is powerful, but it is organised around Web2 identity and app SDKs. It has no wallet identity and no chain triggers. OnchainSuite gives protocol teams the same orchestration on an on-chain foundation, at a fraction of the setup.",
    theyLike: ["Orchestration that scales to millions", "Rich cross-channel journeys", "Strong analytics and experimentation", "A mature integrations ecosystem"],
    whenThem: "You are a large consumer app with a Web2 identity graph that needs enterprise governance and scale.",
    together: "Big orgs can run Braze for Web2 channels and OnchainSuite for the wallet-native, on-chain-triggered layer.",
    them: ["Contact sales", "No", "No", "Yes", "Yes", "Web2 profiles", "No", "Yes", "Partial", "Yes", "No", "Yes", "Yes", "No"],
    faqs: [
      { q: "Can Braze message wallets?", a: "Not on its own. Braze targets known users on channels tied to Web2 identifiers. OnchainSuite reaches wallets directly with in-app push." },
      { q: "Is OnchainSuite cheaper?", a: "Usually. Suite starts at $0 (PAYG) or $49 a month on Launch, with no enterprise minimum, versus Braze's contact-sales model." },
      { q: "Does it scale for large protocols?", a: "Yes. Pricing scales with tracked wallets and subscribers, and the largest volumes move to custom." },
      { q: "How is on-chain data handled?", a: "We read cross-chain activity into clean events and segments, so you skip the data engineering." },
    ],
  },
  {
    slug: "dotdigital",
    name: "Dotdigital",
    kind: "Email marketing",
    intro:
      "Dotdigital is a cross-channel email and automation suite for ecommerce and B2B teams. OnchainSuite covers the same retention job for Web3, driven by what wallets do on-chain and delivered to wallets rather than mailing-list contacts.",
    whyChoose:
      "Dotdigital is a capable marketing suite, but it is entirely Web2. There is no wallet identity and no on-chain trigger. OnchainSuite is built to act on wallet behaviour Dotdigital cannot see.",
    theyLike: ["Solid email and cross-channel automation", "Ecommerce and CRM integrations", "Good deliverability tooling", "Established support and services"],
    whenThem: "You need a mature email suite for a Web2 audience.",
    together: "Run Dotdigital for existing Web2 email and OnchainSuite for wallet-native, on-chain retention.",
    them: ["From ~£150/mo", "No", "No", "Limited", "Yes", "Web2 lists", "No", "Yes", "No", "Yes", "No", "Yes", "Yes", "No"],
    faqs: [
      { q: "Does Dotdigital support wallets or crypto?", a: "No. It has no blockchain source and no wallet-native channel." },
      { q: "Why pick OnchainSuite?", a: "Because your key moments are on-chain and your audience is wallets, neither of which Dotdigital can reach." },
      { q: "Can OnchainSuite send email too?", a: "Yes, to wallets that opt in, alongside in-app push for those without one." },
      { q: "Is migration hard?", a: "No. You add an SDK and we read your chains. There is no pipeline to build." },
    ],
  },
  {
    slug: "emailoctopus",
    name: "EmailOctopus",
    kind: "Simple email",
    intro:
      "EmailOctopus is a cheap, simple email tool built on Amazon SES. OnchainSuite sits in a different category, a retention platform for Web3, but teams often weigh a basic email tool against doing retention properly.",
    whyChoose:
      "EmailOctopus sends broadcasts and light automations. There is no event pipeline, no wallet identity, and no sense of what happens on-chain. If retention past the newsletter matters, OnchainSuite is the better fit.",
    theyLike: ["Very affordable", "Simple and quick to use", "Good for newsletters", "A clean, no-frills UI"],
    whenThem: "You just need cheap newsletters to a list.",
    together: "Keep EmailOctopus for basic sends and add OnchainSuite when you want on-chain-triggered retention.",
    them: ["Free / from ~$9/mo", "No", "No", "No", "Yes", "List-based", "No", "Basic", "No", "No", "No", "Basic", "Limited", "No"],
    faqs: [
      { q: "Can EmailOctopus trigger on behaviour?", a: "Only basic list automations. There is no product-event or on-chain triggering." },
      { q: "Is OnchainSuite overkill next to it?", a: "If you only send newsletters, EmailOctopus is fine. If you want to retain wallets on on-chain behaviour, the two are not comparable." },
      { q: "Does it cost a lot more?", a: "Suite starts at $0 (PAYG) or $49 a month, more than a newsletter tool because it does far more. For email only, Send starts at $4.50 per 1,000 subscribers." },
    ],
  },
  {
    slug: "sendgrid",
    name: "SendGrid",
    kind: "Email API / delivery",
    intro:
      "Twilio SendGrid is email infrastructure: an API that delivers transactional and marketing mail. OnchainSuite decides who to message and when based on on-chain behaviour, and SendGrid can even be the layer that delivers it.",
    whyChoose:
      "SendGrid delivers the emails you hand it. It is not a retention engine and has no wallet or chain layer. OnchainSuite supplies the triggers, segments, and in-app push it does not.",
    theyLike: ["Reliable delivery at scale", "A strong developer API", "Good deliverability tooling", "Transactional and marketing email"],
    whenThem: "You want raw sending infrastructure and will build the retention logic yourself.",
    together: "A good pairing. OnchainSuite owns the on-chain triggers, segments, and in-app push; SendGrid handles delivery.",
    them: ["Free / usage-based", "No", "No", "No", "Delivery layer", "Limited", "No", "Basic", "No", "Via Twilio", "No", "Deliverability", "Yes", "No"],
    faqs: [
      { q: "Is SendGrid a competitor?", a: "Only on the delivery slice. OnchainSuite can sit on top of it and adds the triggers, segments, and in-app push SendGrid does not do." },
      { q: "Can I use SendGrid with OnchainSuite?", a: "Yes. SendGrid can be the delivery layer while OnchainSuite drives the logic." },
      { q: "Does OnchainSuite handle deliverability?", a: "We send to opted-in wallets. Teams with strict deliverability needs can pair us with their provider." },
    ],
  },
  {
    slug: "brevo",
    name: "Brevo",
    kind: "SMB marketing CRM",
    intro:
      "Brevo, once Sendinblue, bundles email, SMS, and a light CRM for small businesses. OnchainSuite handles retention for Web3 teams whose customers are wallets and whose triggers live on-chain.",
    whyChoose:
      "Brevo is a generic Web2 email and SMS tool. It has no wallet identity and no on-chain events. OnchainSuite acts on wallet behaviour Brevo cannot see.",
    theyLike: ["An affordable all-in-one", "Email, SMS, and a basic CRM", "Easy for small teams", "A generous free tier"],
    whenThem: "You are an SMB wanting email, SMS, and a light CRM in one cheap tool.",
    together: "Use Brevo for generic email and SMS, and OnchainSuite for on-chain wallet retention.",
    them: ["Free / from ~$9/mo", "No", "No", "Limited", "Yes", "Web2 CRM", "No", "Yes", "No", "Yes", "No", "Basic", "Yes", "No"],
    faqs: [
      { q: "Does Brevo work for Web3?", a: "Only as a generic email and SMS tool. It cannot see or act on on-chain behaviour." },
      { q: "Why choose OnchainSuite?", a: "Because your customers are wallets and your triggers are on-chain, neither of which Brevo supports." },
      { q: "Can it fully replace Brevo?", a: "For Web3 retention, yes. If you also need generic SMS marketing, keep a tool like Brevo alongside." },
    ],
  },
  {
    slug: "formo",
    name: "Formo",
    kind: "Onchain analytics",
    intro:
      "Formo is crypto-native product analytics: funnels, cohort retention, and wallet-level profiling for onchain apps. OnchainSuite is the layer that acts on all of it, turning the same behaviour into automated in-app and email campaigns.",
    whyChoose:
      "Formo is excellent at telling you what wallets did. It is measurement, though, not messaging. OnchainSuite detects the behaviour and does something about it, automatically.",
    theyLike: ["Excellent onchain product analytics", "Wallet intelligence and profiles", "Offchain to onchain funnels", "SQL and natural-language querying"],
    whenThem: "Your main need is onchain analytics, funnels, and wallet intelligence.",
    together: "A natural pair. Use Formo to understand behaviour and OnchainSuite to act on it. Plenty of teams run both.",
    them: ["Free / $199 / $499", "Analytics", "Yes", "No", "No", "Yes", "Yes", "No", "No", "No", "Attribution", "Yes", "Yes", "Yes"],
    faqs: [
      { q: "Is Formo a direct competitor?", a: "They overlap on onchain data, but Formo leans analytics and OnchainSuite leans messaging. They fit together well." },
      { q: "Can Formo message wallets?", a: "No. Formo is analytics. OnchainSuite provides the in-app push and email that acts on the insight." },
      { q: "Should we run both?", a: "Often yes. Formo for insight, OnchainSuite to act on it." },
      { q: "Does OnchainSuite have analytics?", a: "Basic dashboards for retention and campaigns. Deep product analytics is Formo's strength." },
    ],
  },
  {
    slug: "addressable",
    name: "Addressable",
    kind: "Web3 growth / ads",
    intro:
      "Addressable helps Web3 teams target ads and attribute acquisition by matching wallets to Web2 identities. OnchainSuite works the other half of the funnel, keeping and re-activating the users you already have.",
    whyChoose:
      "Addressable is about finding and targeting new wallets through ads. OnchainSuite is about retaining and re-engaging existing ones through owned in-app and email channels triggered by on-chain behaviour.",
    theyLike: ["Wallet-based ad targeting", "Cross-channel acquisition attribution", "Campaign measurement for crypto", "A good fit for paid growth teams"],
    whenThem: "Your priority is paid acquisition and tying ad spend to on-chain outcomes.",
    together: "Acquire wallets with Addressable, then retain and re-engage them with OnchainSuite. Two halves of one funnel.",
    them: ["Contact sales", "Ads / signals", "Yes", "No", "No", "Audiences", "Yes", "No", "No", "No", "Yes", "Attribution", "Yes", "Yes"],
    faqs: [
      { q: "Which do I need?", a: "Different halves of the funnel. Addressable acquires wallets through ads; OnchainSuite retains and re-engages them." },
      { q: "Does Addressable send retention messages?", a: "No. It handles acquisition and attribution. OnchainSuite owns owned-channel retention." },
      { q: "Can they work together?", a: "Yes. Acquire with Addressable, retain with OnchainSuite." },
    ],
  },
  {
    slug: "galxe",
    name: "Galxe",
    kind: "Quests & credentials",
    intro:
      "Galxe runs quests, campaigns, loyalty, and on-chain credentials for Web3 communities. OnchainSuite is the always-on layer beneath the campaigns, reacting to real wallet behaviour between them.",
    whyChoose:
      "Galxe drives engagement through quests, which are moments. OnchainSuite runs continuously in the background, reacting to what wallets actually do and keeping them warm between campaigns.",
    theyLike: ["A large quest and campaign ecosystem", "On-chain credentials and loyalty", "Strong distribution and reach", "A good fit for token and community launches"],
    whenThem: "You want to run quests, airdrops, and credential-based loyalty.",
    together: "Run quests on Galxe, then let OnchainSuite retain and re-engage those wallets based on what they do next.",
    them: ["Free / campaign-based", "Quests", "Yes", "No", "No", "Credentials", "Yes", "Campaigns", "Limited", "No", "No", "Campaign", "Yes", "Yes"],
    faqs: [
      { q: "Can I use both?", a: "Yes. Run quests on Galxe and let OnchainSuite retain those wallets automatically." },
      { q: "Is Galxe a retention tool?", a: "It drives campaign engagement. OnchainSuite provides the always-on retention between campaigns." },
      { q: "Does OnchainSuite run quests?", a: "No. It focuses on behaviour-triggered messaging. Pair it with a quest platform like Galxe." },
    ],
  },
];

export function competitorBySlug(slug: string) {
  return COMPETITORS.find((c) => c.slug === slug);
}
