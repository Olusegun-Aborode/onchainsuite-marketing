import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/ns/SiteChrome";
import { CloseCta, Faq } from "@/components/ns/Blocks";

export const metadata: Metadata = {
  title: "How we use data",
  description:
    "How OnchainSuite reads the product and smart contract lanes, joins them into one customer record, starts from Atlas history and protects addresses.",
  alternates: { canonical: "/platform/data" },
};

/* Every statement here follows business plan v13, sections 1, 2.6, 3.1 to 3.3 and 3.8.
   ZK Shield is described as built and awaiting integration, as the plan requires. */

const LANES = [
  { k: "Product lane", d: "What a customer does inside your application, such as registering, completing setup or using a feature.", e: ["Signed up", "Finished setup", "Last opened the app"] },
  { k: "Smart contract lane", d: "What the same customer's wallet does on the blockchain, such as depositing, withdrawing or transferring.", e: ["Deposited 12,400 USDC", "Withdrew 9,800 USDC", "No activity for 60 days"] },
  { k: "Messages you send", d: "Delivery and engagement from the emails and in-app messages you send, next to what each customer did in both lanes.", e: ["Opened 3 of 4 emails", "Viewed an in-app message", "Clicked through"] },
];

const ENGINE = [
  { n: "01", t: "Chain Normalisation System", d: "Turns the strings of numbers on each supported blockchain into consistent records, keeping the network, the application, the time and the units each one came from." },
  { n: "02", t: "Protocol Normalisation System", d: "Reads those records as business actions your team recognises, such as a deposit, a withdrawal or a membership activation, tied to the right contract version." },
  { n: "03", t: "Identity matching", d: "Attaches each action to the right customer, whether they first arrived through an email address, an application account or a wallet." },
];

const ZK_STEPS = [
  { t: "The customer submits their email through an OnchainSuite form.", d: "ZK Shield works with OnchainSuite forms only for now, so data captured in your own forms is not covered." },
  { t: "They prove they belong to your audience without revealing who they are.", d: "A zero-knowledge proof, built on the open-source Semaphore library, confirms the fact without exposing the data behind it." },
  { t: "They prove they control the wallet and the email address.", d: "The wallet by signing with it, and the address by entering a one-time code sent to it." },
  { t: "The address is stored encrypted, and your team never sees it.", d: "When a campaign or a Loop sends, the delivery step resolves the address. Your team sees a wallet record and a delivered message." },
];

const NEVER = [
  "Hold your funds or your customers' funds, or any private keys.",
  "Sign or initiate a transaction. Our access to the chain is read-only.",
  "Find someone's email address by looking at their public wallet.",
  "Link a wallet to a person unless you already hold that link, or the customer makes it themselves.",
];

const FAQS = [
  { q: "Where does the on-chain data come from?", a: "From Atlas, the blockchain data warehouse OnchainSuite reads from, which we built with Datum Labs. CNS and PNS then turn those records into actions on your customer records." },
  { q: "Do you support every application and chain?", a: "No. CNS and PNS cover the chains and applications we support, and Atlas holds history for lending, perpetuals and real-world-asset applications on EVM chains. Before you sign up, we check which of your contracts and records we support." },
  { q: "Is ZK Shield live?", a: "It is built and is being brought into the released product. Today it protects addresses from your own team; our backend can still decrypt an address in order to send. A later phase moves that step into a sealed processing area so our own staff cannot read it either." },
  { q: "Who controls the data in my workspace?", a: "You do. You decide what to bring in and who to message, and we process it on your behalf under our Data Processing Agreement." },
];

export default function DataPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="prod-hero">
          <h1 className="h1 load">How OnchainSuite uses your data.</h1>
          <p className="sub load" style={{ animationDelay: ".1s" }}>We read the two lanes your customers leave a record in, join them into one record per person, and never hold funds or keys.</p>
        </section>

        <section className="dl-sec" aria-labelledby="lanes-h">
          <h2 className="h2 rv" id="lanes-h">Your customers leave a record in two places. <span>OnchainSuite reads both at source, adds the results of what you send, and puts them on one record.</span></h2>
          <div className="dl-lanes">
            {LANES.map((l, i) => (
              <div key={l.k} className="dl-lane rv">
                <div className="dl-lane-h"><i className={`dot d${i}`} /><b>{l.k}</b></div>
                <p>{l.d}</p>
                <ul>{l.e.map((e) => <li key={e}>{e}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="dl-join rv" aria-hidden="true">
            <svg viewBox="0 0 900 90" preserveAspectRatio="none"><path d="M150 0 C150 50 450 40 450 88 M450 0 L450 88 M750 0 C750 50 450 40 450 88" fill="none" stroke="#C9D0FF" strokeWidth="1.5" /></svg>
          </div>
          <div className="dl-record rv">
            <span className="ava">JM</span>
            <div><b>Josh Miller</b><small>0x667c…3fa1 · one record</small></div>
            <span className="chip-s">Completed setup</span><span className="chip-s">Deposited, then withdrew</span><span className="chip-s">Opens emails</span><span className="chip-s warn">At risk</span>
          </div>
        
          <p className="bridge rv"><a href="#engine-h">This is possible with our Lifecycle Intelligence Engine.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec" aria-labelledby="engine-h">
          <h2 className="h2 rv" id="engine-h">Inside the Lifecycle Intelligence Engine. <span>Three systems turn raw records into customers your growth team can understand.</span></h2>
          <div className="dl-eng">
            {ENGINE.map((s) => <div key={s.n} className="rv"><i>{s.n}</i><b>{s.t}</b><span>{s.d}</span></div>)}
          </div>
          <div className="dl-tx rv" aria-label="Example: a contract event becomes an action">
            <div><small>Raw contract event</small><code>Deposit(0x667c…3fa1, 12400000000)</code></div>
            <span aria-hidden="true">→</span>
            <div><small>Consistent record</small><code>Base · USDC · 12,400.00 · 14:02 UTC</code></div>
            <span aria-hidden="true">→</span>
            <div><small>Business action</small><b>Josh deposited 12,400 USDC into the vault</b></div>
          </div>
        
          <p className="bridge rv"><a href="#atlas-h">The engine reads the chain from Atlas, which is why you start with history.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec dl-atlas" aria-labelledby="atlas-h">
          <div>
            <h2 className="h2 rv" id="atlas-h">Atlas means you start from history. <span>Not from an empty table.</span></h2>
            <p className="atlas-def rv">Atlas is the blockchain data warehouse OnchainSuite reads from, built with Datum Labs. It holds backfilled, decoded records for lending, perpetuals and real-world-asset applications across EVM chains, going back to the first block. If your product is one of those, your customers arrive with their history already attached.</p>
          <p className="bridge rv"><a href="#zk-h">Once the history is in place, the next question is who on your team can see a customer's address.<span aria-hidden="true">↓</span></a></p>
          </div>
          <div className="stats">
            <div className="rv"><b>5 TB+</b><span>of decoded contract data</span></div>
            <div className="rv"><b>Genesis</b><span>backfilled to the first block</span></div>
            <div className="rv"><b>60 days</b><span>of recent activity in a fast query store</span></div>
            <div className="rv"><b>Data lake</b><span>for everything older</span></div>
          </div>
        </section>

        <section className="dl-sec" aria-labelledby="zk-h">
          <h2 className="h2 rv" id="zk-h">ZK Shield lets your team message a customer without seeing their address.</h2>
          <ol className="dl-zk">
            {ZK_STEPS.map((s, i) => <li key={s.t} className="rv"><i>{String(i + 1).padStart(2, "0")}</i><b>{s.t}</b><span>{s.d}</span></li>)}
          </ol>
        
          <p className="bridge rv"><a href="#never-h">There are also things we never do with any of it.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec dl-never" aria-labelledby="never-h">
          <h2 className="h2 rv" id="never-h">What we never do.</h2>
          <ul>{NEVER.map((n) => <li key={n} className="rv">{n}</li>)}</ul>
          <p className="dl-links rv">The details are in our <Link href="/dpa">Data Processing Agreement</Link>, <Link href="/privacy">Privacy Policy</Link> and <Link href="/subprocessors">list of sub-processors</Link>.</p>
        </section>

        <Faq items={FAQS} />
        <CloseCta />
      </div>
    </SiteChrome>
  );
}
