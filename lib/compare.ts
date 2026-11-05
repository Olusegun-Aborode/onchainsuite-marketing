// Data for the /compare pages. One entry per competitor; the template in
// app/compare/[slug]/page.tsx renders from this. Positioning stays fair: each
// competitor is good at its job, and we win on the on-chain axis.

export type MRow = { cap: string; ocs: string; them: string };
export type QA = { q: string; a: string };

export const MATRIX_CAPS = [
  "Pricing",
  "Journeys started by on-chain activity",
  "Contacts with only a wallet, no email",
  "In-app messages to wallets",
  "Email campaigns",
  "Segment on on-chain activity",
  "Several chains read into one record",
  "Automated customer journeys",
  "Telegram / Discord",
  "SMS",
  "Ads / acquisition attribution",
  "Analytics / dashboards",
  "SDK / API",
  "Built for blockchain companies",
] as const;

export const OCS_MATRIX: string[] = [
  "From $39 a month, priced by contacts",
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
  "Lifecycle and retention",
  "Yes",
  "Yes",
];

// Constant across every comparison: the OnchainSuite pillars and switch steps.
export const OCS_HIGHLIGHTS = [
  { icon: "bolt", title: "Reads both lanes", desc: "What customers do in your app and what their wallets do on-chain go onto one record, with no export to prepare." },
  { icon: "send", title: "Reaches wallets with no email", desc: "An in-app message needs only the wallet, so customers who never gave you an address still hear from you." },
  { icon: "wand", title: "Loops that stop when the customer acts", desc: "A Loop waits, sends by email or in-app, and ends the moment the action is recorded on the contract." },
];

export const MIGRATION_STEPS = [
  { title: "Tell us where your community lives", desc: "A contract address, a project name or your website. We find the contracts and the holders." },
  { title: "Bring in the records you already hold", desc: "Email lists, app accounts and wallets. You give up nothing you have already set up." },
  { title: "Connect a channel and send", desc: "Verify a sending domain for email, or add the SDK for in-app, then start your first Loop." },
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
  /* Text that only makes sense for this tool (SEO doc, Fix 5): 300 to 500 unique words per page so
     Google stops treating the compare pages as one template. Customer.io first, then Addressable,
     EmailOctopus and Formo. */
  description?: string;
  deep?: {
    pickThem: string;
    switchingTitle?: string;
    switching: string[];
    switchingTime: string;
    cannot: string;
    example: { scenario: string; them: string[]; ocs: string[] };
  };
};

export const COMPETITORS: Competitor[] = [
  {
    slug: "klaviyo",
    name: "Klaviyo",
    kind: "Ecommerce marketing",
    intro:
      "Klaviyo runs email and SMS for ecommerce brands, keyed to store events like orders and carts. OnchainSuite does that same job for blockchain companies, only the triggers come from the chain and the audience is wallets. When one deposits, unstakes, or goes quiet, you reach it by in-app push or email, even if it never gave you an address.",
    whyChoose:
      "Klaviyo has no wallet identity and no blockchain data. It cannot see a deposit or a wallet going cold, and it cannot message a wallet that never shared an email. That gap is exactly what OnchainSuite was built to close.",
    theyLike: ["Deep ecommerce integrations like Shopify", "Mature email and SMS automation", "Predictive analytics for stores", "A big template and flow library"],
    whenThem: "You run a Web2 store and your customers are email addresses, not wallets.",
    together: "Keep Klaviyo for Web2 email and let OnchainSuite handle the on-chain triggers it cannot see.",
    them: ["Paid by contacts", "No", "No", "App push (Web2)", "Yes", "Web2 events", "No", "Yes", "No", "Yes", "Limited", "Yes", "Yes", "No"],
    faqs: [
      { q: "Can Klaviyo track on-chain activity?", a: "No. Klaviyo reads web and store events. It has no wallet or blockchain source, so it cannot start a journey from a deposit, swap, or stake." },
      { q: "Is OnchainSuite a Klaviyo replacement for blockchain companies?", a: "For on-chain retention, yes. You can also run both and let OnchainSuite own the wallet-native side." },
      { q: "Does OnchainSuite do SMS?", a: "No. We focus on in-app push and email." },
      { q: "Can it reach wallets with no email?", a: "Yes, through in-app push, which needs only the address. Email is for wallets that opt in." },
    ],
    description: "Klaviyo vs OnchainSuite, compared for blockchain companies. Which reads wallet activity, what switching takes, who should pick which.",
    deep: {
      pickThem: "If you run an online store and your customers are email addresses, Klaviyo is the stronger choice. Its flows start from orders, price drops, low inventory and birthdays, it connects to Shopify, WooCommerce and hundreds of other apps, and it is free up to 250 profiles and 500 emails a month.",
      switching: [
        "Export your lists and segments from Klaviyo as CSV files, with the profile properties you rely on.",
        "Import them into Audience. Emails link to wallets where you already hold the link, and the rest stay as email contacts.",
        "Rebuild the flows that matter as Loops, swapping store metrics such as placed order for on-chain triggers such as first deposit.",
      ],
      switchingTime: "Most teams move their main flows in a day.",
      cannot: "Klaviyo flows start from a list, a segment, a metric, a date property, a price drop or low inventory, and metrics arrive from your store integrations or from events your code sends through its API. Nothing in Klaviyo reads a deposit, a withdrawal or a token transfer from the chain, so a wallet's activity only reaches it if your engineers send it there.",
      example: {
        scenario: "A lending protocol wants to email depositors whose collateral ratio has dropped close to liquidation.",
        them: [
          "An engineer watches the lending contract and calculates each depositor's collateral ratio.",
          "A service sends a custom metric to Klaviyo for every depositor who crosses the threshold, matched to an email address.",
          "A metric-triggered flow sends the email, and the service keeps running for as long as the flow does.",
        ],
        ocs: [
          "One segment rule: collateral ratio within 10% of the liquidation level.",
          "One Loop that emails depositors who have an address, shows an in-app message to wallets that do not, and stops when they add collateral.",
        ],
      },
    },
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
      { q: "Does Customer.io read wallet data?", a: "No. It acts on events you send it. On-chain activity would be yours to capture and forward; OnchainSuite does that for you." },
      { q: "Is OnchainSuite as flexible?", a: "For on-chain retention, yes, with wallet identity and ready-made Loops. Customer.io stays broader for generic Web2 lifecycle messaging." },
      { q: "Can I message wallets with no email?", a: "Yes, by in-app push. Customer.io needs a known Web2 identifier and channel." },
      { q: "How long is setup?", a: "Point OnchainSuite at your contracts and bring in the records you already hold. We read the chain into actions for you, so there is no pipeline for your engineers to build." },
    ],
    description: "Customer.io vs OnchainSuite, compared for blockchain companies. Which reads wallet activity, what switching takes, who should pick which.",
    deep: {
      pickThem: "If your product has no wallets, no contracts and a working event pipeline, Customer.io is the better-known choice with a bigger integration list. It is built for teams whose customers live entirely inside the app, and for them it does the job well.",
      switching: [
        "Export your people from Customer.io as a CSV file.",
        "Import the file into Audience. Emails link to wallets where you already hold the link, so nobody is matched by guesswork.",
        "Rebuild the two or three campaigns that matter as Loops, starting from on-chain triggers instead of custom events.",
      ],
      switchingTime: "One afternoon for most teams.",
      cannot: "Customer.io triggers on events your app sends it. It has no way to read a deposit, withdrawal or token transfer from the chain unless your engineers build and maintain that feed.",
      example: {
        scenario: "A perp DEX wants to message traders whose open positions dropped to zero and who have not traded in 14 days.",
        them: [
          "An engineering ticket to watch position changes on the chain for every trader.",
          "A service that turns those changes into custom events and sends them to Customer.io by webhook.",
          "A segment on the custom event and a campaign on top of it, with the service kept running for as long as the campaign does.",
        ],
        ocs: [
          "One segment rule: no open positions, and no trade in the last 14 days.",
          "One Loop that sends an email, then an in-app message to traders who did not respond, and stops the moment someone opens a position.",
        ],
      },
    },
  },
  {
    slug: "braze",
    name: "Braze",
    kind: "Enterprise engagement",
    intro:
      "Braze runs cross-channel messaging for large consumer apps. OnchainSuite brings that always-on model to blockchain companies, built around wallets and on-chain behaviour instead of Web2 profiles, and it does not need a data engineering project to start.",
    whyChoose:
      "Braze is powerful, but it is organised around Web2 identity and app SDKs. It has no wallet identity and no chain triggers. OnchainSuite gives protocol teams the same orchestration on an on-chain foundation, at a fraction of the setup.",
    theyLike: ["Orchestration that scales to millions", "Rich cross-channel journeys", "Strong analytics and experimentation", "A mature integrations ecosystem"],
    whenThem: "You are a large consumer app with a Web2 identity graph that needs enterprise governance and scale.",
    together: "Big orgs can run Braze for Web2 channels and OnchainSuite for the wallet-native, on-chain-triggered layer.",
    them: ["Contact sales", "No", "No", "Yes", "Yes", "Web2 profiles", "No", "Yes", "Partial", "Yes", "No", "Yes", "Yes", "No"],
    faqs: [
      { q: "Can Braze message wallets?", a: "Not on its own. Braze targets known users on channels tied to Web2 identifiers. OnchainSuite reaches wallets directly with in-app push." },
      { q: "Is OnchainSuite cheaper?", a: "Usually. The Suite plan starts at $39 a month on Launch, with no enterprise minimum, against Braze's contact-sales model." },
      { q: "Does it scale for large protocols?", a: "Yes. Pricing scales with the contacts you bring in, from Launch to Enterprise." },
      { q: "How is on-chain data handled?", a: "We read cross-chain activity into clean events and segments, so you skip the data engineering." },
    ],
    description: "Braze vs OnchainSuite, compared for blockchain companies. Which reads wallet activity, what switching takes, who should pick which.",
    deep: {
      pickThem: "If you run a large consumer app with an engineering team that already sends clean events, Braze is the better-proven platform. It reaches people by email, push, SMS, WhatsApp, in-app messages and content cards, and it is priced by monthly active users on a contract, with no free plan.",
      switching: [
        "Export your users from Braze, either from a segment's CSV export or through its user export endpoints.",
        "Import them into Audience. External IDs and emails link to wallets where you already hold the link.",
        "Rebuild your Canvases as Loops. Custom events your app sends today can keep coming in, and on-chain events become triggers without any SDK work.",
      ],
      switchingTime: "A week for most teams, mostly spent deciding which Canvases are still worth keeping.",
      cannot: "A Braze Canvas starts on a schedule, from an action such as a custom event or a purchase, or from an API call, and every one of those events has to come from your app's SDK or your server. Braze has no way to read a deposit, a withdrawal or a staking change from the chain itself, so a wallet's on-chain activity reaches it only through a pipeline your engineers build and maintain.",
      example: {
        scenario: "A staking app wants to reach holders whose rewards are ready to claim but who have not opened the app in 21 days.",
        them: [
          "An engineer indexes the staking contract and works out each holder's unclaimed rewards.",
          "A service sends a custom event and attribute to Braze through /users/track for every holder past the threshold.",
          "An action-based Canvas sends a push and an email, with the indexer and the service kept running behind it.",
        ],
        ocs: [
          "One segment rule: unclaimed rewards above zero, and no app session in the last 21 days.",
          "One Loop that sends an in-app message and an email, and stops the moment the rewards are claimed.",
        ],
      },
    },
  },
  {
    slug: "dotdigital",
    name: "Dotdigital",
    kind: "Email marketing",
    intro:
      "Dotdigital is a cross-channel email and automation suite for ecommerce and B2B teams. OnchainSuite covers the same retention job for blockchain companies, driven by what wallets do on-chain and delivered to wallets rather than mailing-list contacts.",
    whyChoose:
      "Dotdigital is a capable marketing suite, but it is entirely Web2. There is no wallet identity and no on-chain trigger. OnchainSuite is built to act on wallet behaviour Dotdigital cannot see.",
    theyLike: ["Solid email and cross-channel automation", "Ecommerce and CRM integrations", "Good deliverability tooling", "Established support and services"],
    whenThem: "You need a mature email suite for a Web2 audience.",
    together: "Run Dotdigital for existing Web2 email and OnchainSuite for wallet-native, on-chain retention.",
    them: ["Contact sales", "No", "No", "Limited", "Yes", "Web2 lists", "No", "Yes", "No", "Yes", "No", "Yes", "Yes", "No"],
    faqs: [
      { q: "Does Dotdigital support wallets or crypto?", a: "No. It has no blockchain source and no wallet-native channel." },
      { q: "Why pick OnchainSuite?", a: "Because your key moments are on-chain and your audience is wallets, neither of which Dotdigital can reach." },
      { q: "Can OnchainSuite send email too?", a: "Yes, to wallets that opt in, alongside in-app push for those without one." },
      { q: "Is migration hard?", a: "No. You add an SDK and we read your chains. There is no pipeline to build." },
    ],
    description: "Dotdigital vs OnchainSuite, compared for blockchain companies. Which reads wallet activity, what switching takes, who should pick which.",
    deep: {
      pickThem: "If your customers shop with you online and you want one no-code suite for email, SMS, WhatsApp, push and chat, Dotdigital is the better fit. It has more than 200 integrations, including Shopify, Salesforce and Adobe Commerce, and it is sold through its sales team rather than a public price list.",
      switching: [
        "Export your contacts from Dotdigital (Audience, then Contacts, then Export all) as a CSV file, or export each list you use.",
        "Import the file into Audience. Emails link to wallets where you already hold the link.",
        "Rebuild your programs as Loops, replacing date and list-join start conditions with on-chain triggers where they fit.",
      ],
      switchingTime: "Most teams move their programs in a day or two.",
      cannot: "A Dotdigital program starts on a schedule, from a date field or a segment, or from an external trigger such as an API call, an integration, a list join or a form. Product events can be imported through its API, but nothing in Dotdigital reads a deposit, a withdrawal or a token transfer from the chain, so on-chain activity only arrives if your engineers send it.",
      example: {
        scenario: "A tokenised fund wants to email investors whose holdings have sat untouched for 90 days before the next subscription window.",
        them: [
          "An engineer reads the fund contract and lists the holders who have not moved in 90 days.",
          "A script imports those holders into Dotdigital as events or insight data, matched to email addresses.",
          "A segment-triggered program sends the email, and the script runs again before every window.",
        ],
        ocs: [
          "One segment rule: holds the fund token, and no transfer in the last 90 days.",
          "One Loop that emails investors before the window opens and stops for anyone who subscribes.",
        ],
      },
    },
  },
  {
    slug: "emailoctopus",
    name: "EmailOctopus",
    kind: "Simple email",
    intro:
      "EmailOctopus is a cheap, simple email tool, with a separate version called EmailOctopus Connect that sends through your own Amazon SES account. OnchainSuite sits in a different category, a retention platform for blockchain companies, but teams often weigh a basic email tool against doing retention properly.",
    whyChoose:
      "EmailOctopus sends broadcasts and light automations. There is no event pipeline, no wallet identity, and no sense of what happens on-chain. If retention past the newsletter matters, OnchainSuite is the better fit.",
    theyLike: ["Very affordable", "Simple and quick to use", "Good for newsletters", "A clean, no-frills UI"],
    whenThem: "You just need cheap newsletters to a list.",
    together: "Keep EmailOctopus for basic sends and add OnchainSuite when you want on-chain-triggered retention.",
    them: ["Free / from ~$9/mo", "No", "No", "No", "Yes", "List-based", "No", "Basic", "No", "No", "No", "Basic", "Limited", "No"],
    faqs: [
      { q: "Can EmailOctopus trigger on behaviour?", a: "Only basic list automations. There is no product-event or on-chain triggering." },
      { q: "Is OnchainSuite overkill next to it?", a: "If you only send newsletters, EmailOctopus is fine. If you want to retain wallets on on-chain behaviour, the two are not comparable." },
      { q: "Does it cost a lot more?", a: "The Suite plan starts at $39 a month, more than a newsletter tool because we read your contracts as well as your list. Without blockchain data, the Send plan is $6 a month plus $3.95 per 1,000 subscribers." },
    ],
    description: "EmailOctopus vs OnchainSuite, compared for blockchain companies. Which reads wallet activity, what switching takes, who should pick which.",
    deep: {
      pickThem: "If all you need is a newsletter to a list, EmailOctopus is one of the cheapest ways to send it, and it is free up to 2,500 subscribers and 10,000 emails a month. It describes itself as email marketing and nothing else, and for a team with no wallets to watch, that focus is a strength.",
      switching: [
        "Export each list from EmailOctopus (Actions, then Export) and choose All so every field comes with it. The file downloads as a ZIP.",
        "Import the contacts into Audience. Tags and custom fields come across, and emails link to wallets where you already hold the link.",
        "Rebuild your automations as Loops. Tag and date triggers become segment rules, and on-chain events become triggers you could not use before.",
      ],
      switchingTime: "Most teams finish in an afternoon, because there are no app events to rewire.",
      cannot: "EmailOctopus automations start when a contact joins a list, a field or tag changes, a date comes round, or your code enrols the contact through its API. It has no way to receive a product event or read a deposit, withdrawal or wallet balance, and it sends email only, with no in-app, SMS or push.",
      example: {
        scenario: "A staking protocol wants to email holders who unstaked more than half their position this week.",
        them: [
          "A developer watches the staking contract and works out which holders unstaked.",
          "A script matches those wallets to email addresses in EmailOctopus and adds a tag to each contact through the API.",
          "A tag-added automation sends the email, and the script has to run every week for the campaign to keep working.",
        ],
        ocs: [
          "One segment rule: unstaked more than half their position in the last 7 days.",
          "One Loop that emails holders who have an address, shows an in-app message to wallets that do not, and stops when they stake again.",
        ],
      },
    },
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
    them: ["From $15/mo", "No", "No", "No", "Delivery layer", "Limited", "No", "Basic", "No", "Via Twilio", "No", "Deliverability", "Yes", "No"],
    faqs: [
      { q: "Is SendGrid a competitor?", a: "Only on the delivery slice. OnchainSuite can sit on top of it and adds the triggers, segments, and in-app push SendGrid does not do." },
      { q: "Can I use SendGrid with OnchainSuite?", a: "Yes. SendGrid can be the delivery layer while OnchainSuite drives the logic." },
      { q: "Does OnchainSuite handle deliverability?", a: "We send to opted-in wallets. Teams with strict deliverability needs can pair us with their provider." },
    ],
    description: "SendGrid vs OnchainSuite, compared for blockchain companies. Which reads wallet activity, what each one is for, who should pick which.",
    deep: {
      pickThem: "If you want raw email delivery and your engineers will build the targeting themselves, SendGrid is the better tool. Its Email API sends transactional and marketing mail at scale, and Marketing Campaigns adds lists, segments and simple automations from $15 a month.",
      switchingTitle: "What adding OnchainSuite looks like",
      switching: [
        "Export your contacts from Marketing Campaigns (Contacts, then the list's Action menu, then Export). The CSV is ready to download for 12 hours.",
        "Import the file into Audience. Emails link to wallets where you already hold the link.",
        "Keep SendGrid for receipts and password resets if you like, and move the messages that depend on what customers do on-chain into Loops.",
      ],
      switchingTime: "There is nothing to rewire on the sending side, so most teams start the same day.",
      cannot: "SendGrid automations send when a contact is added to a linked list or segment, and they need the Advanced Marketing Campaigns plan. They do not start from your product's own events, and SendGrid sends email only. To react to something a wallet did on the chain, your engineers would have to watch the chain and add contacts to a list themselves.",
      example: {
        scenario: "A DEX wants to email traders whose first swap was more than 14 days ago and who have not swapped since.",
        them: [
          "An engineer watches the DEX contracts and finds the traders who match.",
          "A script adds those traders to a SendGrid list through the Contacts API, matched to email addresses.",
          "An automation on that list sends the email, and the script runs every day to keep the list current.",
        ],
        ocs: [
          "One segment rule: one swap, first seen more than 14 days ago, and no swap since.",
          "One Loop that sends an email and an in-app message, and stops when a trader makes a second swap.",
        ],
      },
    },
  },
  {
    slug: "brevo",
    name: "Brevo",
    kind: "SMB marketing CRM",
    intro:
      "Brevo, once Sendinblue, bundles email, SMS, and a light CRM for small businesses. OnchainSuite handles retention for blockchain companies whose customers are wallets and whose triggers live on-chain.",
    whyChoose:
      "Brevo is a generic Web2 email and SMS tool. It has no wallet identity and no on-chain events. OnchainSuite acts on wallet behaviour Brevo cannot see.",
    theyLike: ["An affordable all-in-one", "Email, SMS, and a basic CRM", "Easy for small teams", "A generous free tier"],
    whenThem: "You are an SMB wanting email, SMS, and a light CRM in one cheap tool.",
    together: "Use Brevo for generic email and SMS, and OnchainSuite for on-chain wallet retention.",
    them: ["Free / from ~$9/mo", "No", "No", "Limited", "Yes", "Web2 CRM", "No", "Yes", "No", "Yes", "No", "Basic", "Yes", "No"],
    faqs: [
      { q: "Does Brevo work for blockchain companies?", a: "Only as a generic email and SMS tool. It cannot see or act on on-chain behaviour." },
      { q: "Why choose OnchainSuite?", a: "Because your customers are wallets and your triggers are on-chain, neither of which Brevo supports." },
      { q: "Can it fully replace Brevo?", a: "For retention at a blockchain company, yes. If you also need generic SMS marketing, keep a tool like Brevo alongside." },
    ],
    description: "Brevo vs OnchainSuite, compared for blockchain companies. Which reads wallet activity, what switching takes, who should pick which.",
    deep: {
      pickThem: "If you are a small business that wants email, SMS, WhatsApp, live chat and a light CRM in one inexpensive tool, Brevo is the better fit. Its API also accepts custom events, so a developer can trigger automations from things your product does.",
      switching: [
        "Export your contacts from Brevo as a CSV file, filtered by list or segment.",
        "Import the file into Audience. Emails link to wallets where you already hold the link.",
        "Rebuild your automations as Loops. Custom events your product sends today can keep coming in, and on-chain events become triggers you do not have to build.",
      ],
      switchingTime: "Most teams finish in an afternoon.",
      cannot: "Every event sent to Brevo has to name a contact by email, phone, WhatsApp number, Brevo contact ID or your own external ID. There is no wallet identifier and no reading of the chain, so a wallet that never gave you an email cannot be messaged, and a deposit only reaches Brevo if your code sends it as an event.",
      example: {
        scenario: "A prediction market wants to message traders who deposited but never placed a position.",
        them: [
          "An engineer watches the deposit contract and finds wallets with a deposit and no position.",
          "A service sends a custom event to Brevo for each one, which only works for wallets already matched to an email.",
          "An automation on that event sends the email, and wallets without an email are left out.",
        ],
        ocs: [
          "One segment rule: deposited, and no position placed since.",
          "One Loop that emails traders who have an address, shows an in-app message to wallets that do not, and stops when they place a position.",
        ],
      },
    },
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
    them: ["From $199/mo", "Analytics", "Yes", "No", "No", "Yes", "Yes", "No", "No", "No", "Attribution", "Yes", "Yes", "Yes"],
    faqs: [
      { q: "Is Formo a direct competitor?", a: "They overlap on onchain data, but Formo leans analytics and OnchainSuite leans messaging. They fit together well." },
      { q: "Can Formo message wallets?", a: "No. Formo is analytics. OnchainSuite provides the in-app push and email that acts on the insight." },
      { q: "Should we run both?", a: "Often yes. Formo for insight, OnchainSuite to act on it." },
      { q: "Does OnchainSuite have analytics?", a: "Basic dashboards for retention and campaigns. Deep product analytics is Formo's strength." },
    ],
    description: "Formo vs OnchainSuite, compared for blockchain companies. Which one measures wallet activity, which one acts on it, and how teams run both.",
    deep: {
      pickThem: "If the question your team asks most is what wallets are doing, Formo is the better tool: funnels, retention cohorts, attribution and wallet profiles built for DeFi apps, with SQL and AI queries on top. It starts at $199 a month for up to 5,000 monthly active users.",
      switchingTitle: "What adding OnchainSuite looks like",
      switching: [
        "Keep the Formo SDK where it is. OnchainSuite reads your contracts directly, so nothing in your app changes.",
        "Export the wallets you care about from a Formo query as a CSV file and import them into Audience, so the people you have been studying are the people you can reach.",
        "Build a Loop for the moment Formo was alerting you about, so nobody has to chase it by hand.",
      ],
      switchingTime: "Nothing is removed, so there is no cut-over day.",
      cannot: "Formo does not send messages to your users. Its alerts go to your own team by webhook or Slack, and its docs point to Zapier for anything further. It can tell you that a high-value wallet just went quiet, but reaching that wallet is left to another tool.",
      example: {
        scenario: "A DEX can see in Formo that wallets which bridge in and make one swap rarely make a second.",
        them: [
          "Formo shows the drop-off in a funnel and can alert the team in Slack when a high-value wallet goes quiet.",
          "Someone exports those wallets from a query and hands the list to a messaging tool.",
          "The export is repeated every week, and wallets that swapped again in between still get the message.",
        ],
        ocs: [
          "One segment rule: one swap, first seen in the last 30 days, and no swap in the last 14.",
          "One Loop that sends an in-app message and an email, and stops as soon as a wallet makes its second swap.",
        ],
      },
    },
  },
  {
    slug: "addressable",
    name: "Addressable",
    kind: "On-chain growth and ads",
    intro:
      "Addressable helps blockchain companies target ads and attribute acquisition by matching wallets to Web2 identities. OnchainSuite works the other half of the funnel, keeping and re-activating the users you already have.",
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
    description: "Addressable vs OnchainSuite, compared for blockchain companies. Which one finds new wallets, which one keeps them, and how the two fit together.",
    deep: {
      pickThem: "If your priority is finding new users through paid ads, Addressable is built for that: it matches wallets to the people visiting your site, targets ads on X, Reddit and display networks, and ties deposits back to campaigns. It suits exchanges, trading platforms, prediction markets and iGaming operators with a paid acquisition budget.",
      switchingTitle: "What adding OnchainSuite looks like",
      switching: [
        "Keep the Addressable tag and your ad campaigns running. Nothing in your acquisition setup changes.",
        "Point OnchainSuite at your contracts and import the users you already hold, so every new depositor lands on one record.",
        "Build Loops for the first weeks after a deposit, when users from paid campaigns are most likely to drift.",
      ],
      switchingTime: "The two tools sit at different ends of the funnel, so there is nothing to migrate.",
      cannot: "Addressable does not message your existing users. Its retention product adds wallet tags to the CRM you already run, and its own page says it does not replace your existing systems, so the email or in-app message still has to come from another tool.",
      example: {
        scenario: "A prediction market runs an X campaign through Addressable and wants the traders it brings in to place a second position.",
        them: [
          "Addressable ties the first deposit to the campaign and can tag the high-value traders in your CRM.",
          "Your team builds the follow-up in whatever CRM or email tool you already use, keyed to the tags it receives.",
          "Nothing in that chain sees the trader's next market or second position unless the CRM is fed that data too.",
        ],
        ocs: [
          "One segment rule: deposited in the last 14 days, one position, and no trade in the last 7 days.",
          "One Loop that sends an email and an in-app message about the next market, and stops when a second position is placed.",
        ],
      },
    },
  },
  {
    slug: "galxe",
    name: "Galxe",
    kind: "Quests & credentials",
    intro:
      "Galxe runs quests, campaigns, loyalty, and on-chain credentials for blockchain communities. OnchainSuite is the always-on layer beneath the campaigns, reacting to real wallet behaviour between them.",
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
    description: "Galxe vs OnchainSuite, compared for blockchain companies. Which one runs quests, which one runs retention, and how the two fit together.",
    deep: {
      pickThem: "If you want to grow a community through quests, loyalty points and on-chain credentials, Galxe is built for that. Projects such as Optimism, Arbitrum and Base use it to reward people for completing tasks, and its contract-query credentials check what a wallet has done on the chain when it joins a quest.",
      switchingTitle: "What adding OnchainSuite looks like",
      switching: [
        "Keep running quests and loyalty campaigns on Galxe. Nothing in your campaign setup changes.",
        "Point OnchainSuite at your contracts and import the wallets you already know, including the ones your quests brought in.",
        "Build Loops for the weeks between campaigns, when wallets that joined for a reward are most likely to go quiet.",
      ],
      switchingTime: "The two tools do different jobs, so there is nothing to migrate.",
      cannot: "Galxe reaches people through quests and campaigns they choose to visit. We found no way in its docs for a project to email or message a wallet, or to start a journey when a wallet's on-chain activity changes. Its contract checks run when someone completes a quest, not continuously in the background.",
      example: {
        scenario: "A new chain ran a Galxe quest that brought in thousands of wallets, and it wants them to make a second transaction after the campaign ends.",
        them: [
          "Galxe records who completed the quest and can show them on a points leaderboard.",
          "Reaching those wallets afterwards means launching another quest and waiting for them to come back to it.",
          "Nothing reacts on its own when a wallet goes quiet between campaigns.",
        ],
        ocs: [
          "One segment rule: completed the quest, and no transaction in the 14 days since.",
          "One Loop that sends an in-app message and an email, and stops as soon as a wallet transacts again.",
        ],
      },
    },
  },
];

export function competitorBySlug(slug: string) {
  return COMPETITORS.find((c) => c.slug === slug);
}
