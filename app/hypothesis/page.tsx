import type { Metadata } from "next";
import SiteChrome from "@/components/ns/SiteChrome";
import { CloseCta } from "@/components/ns/Blocks";
import PointArt from "@/components/ns/PointArt";

export const metadata: Metadata = {
  title: "Our hypothesis",
  description:
    "The most important things your users do happen on-chain, and the tools you use to talk to them cannot see it. This is our case for changing that.",
  alternates: { canonical: "/hypothesis" },
};

/* The company's manifesto, written to the reader about "your user": four beliefs, one user followed from
   scattered records to one record, and a close about blockchain data. Signed as the company. The user is
   "at risk", never "churned", because churn means gone for good on this site. */

const DASHBOARD = [
  { k: "Email open rate", v: "42%" },
  { k: "Impressions", v: "18,000" },
  { k: "Signups this week", v: "320" },
];

const USER = [
  { t: "Completed setup", where: "Your app" },
  { t: "Deposited 12,400 USDC", where: "The chain" },
  { t: "Opened your last three emails", where: "Your email tool" },
  { t: "Withdrew 9,800 USDC last week", where: "The chain", tone: "bad" },
];

const GENERATIONS = [
  { n: "01", art: "genEmail", era: "From 1999", t: "Email delivery", d: "Software that could reach a whole list at once, and saw little more than opens and clicks." },
  { n: "02", art: "genAuto", era: "From 2007", t: "Marketing automation", d: "Sequences that followed up on their own: welcome, wait, and try again if there was no reply." },
  { n: "03", art: "genEvents", era: "From 2012", t: "Behavioural lifecycle", d: "Messages sent from what people did in a store, such as browsing, adding to a cart and buying." },
  { n: "04", art: "genChain", era: "Now", t: "Blockchain activity", d: "Deposits, stakes and votes, recorded in public as they happen, and no software yet built natively on them.", now: true },
];

export default function HypothesisPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="prod-hero">
          <h1 className="h1 load">Your user withdrew $9,800 last week. Your marketing tools probably still count them as engaged.</h1>
          <p className="sub load" style={{ animationDelay: ".1s" }}>The most important things your users do happen on-chain, and the tools you use to talk to them can&rsquo;t see any of it. This page is our case for changing that.</p>
        </section>

        <section className="dl-sec mf" aria-labelledby="mf-1">
          <h2 className="h2 rv" id="mf-1">Your dashboard says your user is engaged. Their wallet says they&rsquo;re leaving. <span>Open rates and impressions measure your messages. Deposits and withdrawals measure your users.</span></h2>
          <div className="mf-split rv">
            <div className="mf-dash">
              <p className="mf-cap">What the dashboard says</p>
              {DASHBOARD.map((d) => <div key={d.k} className="mf-kpi"><span>{d.k}</span><b>{d.v}</b></div>)}
            </div>
            <div className="mf-josh">
              <p className="mf-cap">What your user actually did</p>
              <ol>{USER.map((j) => <li key={j.t} className={j.tone || ""}><b>{j.t}</b><span>{j.where}</span></li>)}</ol>
            </div>
          </div>
          <p className="bridge rv"><a href="#mf-2">So why can&rsquo;t your tools see the wallet? The answer is in how they were built.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec mf" aria-labelledby="mf-2">
          <h2 className="h2 rv" id="mf-2">Each era of marketing software was won by whoever read the new data first. <span>Email read opens. Automation read replies. Ecommerce tools read carts.</span></h2>
          <div className="mf-zig">
            {GENERATIONS.map((g, i) => (
              <div key={g.n} className={"mf-zig-row rv" + (i % 2 ? " flip" : "") + (g.now ? " now" : "")}>
                <div className="mf-zig-t"><i>{g.n} · {g.era}</i><h3>{g.t}</h3><p>{g.d}</p></div>
                <PointArt kind={g.art} />
              </div>
            ))}
          </div>
          <p className="bridge rv"><a href="#mf-3">The fourth kind of data is the one your user left behind.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec mf" aria-labelledby="mf-3">
          <div className="mf-side">
            <h2 className="h2 rv" id="mf-3">Blockchain data is the most honest record of customer behaviour ever created, and almost no growth team can use it. <span>People click on anything. They only move money when they mean it.</span></h2>
            <div className="rv"><PointArt kind="lanesYou" /></div>
          </div>
          <p className="bridge rv"><a href="#mf-4">Someone had to build the software that reads it.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec mf" aria-labelledby="mf-4">
          <h2 className="h2 rv" id="mf-4">OnchainSuite puts your user&rsquo;s app activity and their wallet on one record, so your team can reach them before they&rsquo;re gone. <span>We read both lanes at source, turn chain records into actions your team recognises, and add the email and app data you already hold.</span></h2>
          <div className="dl-record rv mf-record">
            <span className="ava mf-ava">U</span>
            <div><b>Your user</b><small>0x667c…3fa1 · one record</small></div>
            <span className="chip-s">Completed setup</span><span className="chip-s">Opens your emails</span><span className="chip-s">Withdrew 9,800 USDC</span><span className="chip-s warn">At risk</span>
          </div>
          <div className="mf-seg rv" aria-label="What the team does next">
            <span className="mf-seg-k">Next</span><b>Your user joins &ldquo;Withdrew most of their deposit&rdquo;</b>
            <span className="mf-arrow" aria-hidden="true">→</span><span className="mf-rule ok">A message by email and in-app, the same week</span>
          </div>
          <p className="bridge rv"><a href="#mf-end">No exports, and no developer in the loop. Which brings us to what we believe comes next.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec mf mf-end" aria-labelledby="mf-end">
          <p className="mf-end-line rv" id="mf-end">Email marketing was built on opens. Automation was built on sequences. Ecommerce marketing was built on carts. <span>The next generation will be built on what customers do on-chain, and we&rsquo;re building it.</span></p>
          <p className="mf-sign rv">OnchainSuite</p>
          <p className="bridge rv"><a href="#cta-h">If your team has a live product and customers to keep, here is where to start.<span aria-hidden="true">↓</span></a></p>
        </section>

        <CloseCta />
      </div>
    </SiteChrome>
  );
}
