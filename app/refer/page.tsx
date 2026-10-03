import type { Metadata } from "next";
import SiteChrome from "@/components/ns/SiteChrome";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refer a team or become an agency partner",
  description: "Introduce a team that should be using OnchainSuite, or become an agency partner and run OnchainSuite for the companies you work with.",
  alternates: { canonical: "/refer" },
};

/* Explains how referrals and agency partnerships work. By the founders' decision there is no reward
   or revenue-share figure on this page; both routes start with a call. */

const REFER_STEPS = [
  { t: "Tell us who you are introducing.", d: "Book a call and tell us about the company, the person to speak to and what you think they need help with." },
  { t: "We book a walkthrough with them.", d: "We look at the data they already hold and show them how their first journey would run." },
  { t: "We keep you posted.", d: "You hear from us when the conversation moves on, so you are never left wondering." },
];

const PARTNER_STEPS = [
  { t: "Tell us about your agency.", d: "Book a call and tell us who you work with, the growth, lifecycle or community work you run for them, and where you are based." },
  { t: "We walk you through it on a client's data.", d: "We take one of your clients from imported records to a first campaign or Loop, with your team alongside." },
  { t: "We agree how we work together.", d: "We set partner terms with each agency directly, then support you as you bring OnchainSuite to more clients." },
];

export default function ReferPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="prod-hero">
          <h1 className="h1 load">Refer a team, or bring OnchainSuite to your clients.</h1>
          <p className="sub load" style={{ animationDelay: ".1s" }}>Introduce a company that needs to know its customers better, or become an agency partner and run OnchainSuite for the companies you work with.</p>
        </section>

        <section className="dl-sec" aria-labelledby="ways-h">
          <h2 className="h2 rv" id="ways-h">Two ways to work with us. <span>One introduction, or an ongoing partnership.</span></h2>
          <div className="cgrid refer-grid">
            <a className="ccard rv" href="#refer-h"><b>Refer a team</b><span>You know a blockchain company or a product team that should be using OnchainSuite, and you would like to introduce us.</span><em>How referrals work ↓</em></a>
            <a className="ccard rv" href="#partner-h"><b>Become an agency partner</b><span>You run growth, lifecycle or community work for clients, and you want to run OnchainSuite for them.</span><em>How partnerships work ↓</em></a>
          </div>
          <p className="bridge rv"><a href="#refer-h">Most partnerships start with a single introduction, so here is how that works.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec" aria-labelledby="refer-h">
          <h2 className="h2 rv" id="refer-h">Refer a team. <span>Introduce us on a call and we will look after them from there.</span></h2>
          <ol className="steps3n" style={{ margin: "40px 0 0" }}>
            {REFER_STEPS.map((s, i) => <li key={s.t} className="rv"><i>{String(i + 1).padStart(2, "0")}</i><b>{s.t}</b><span>{s.d}</span></li>)}
          </ol>
          <div className="ctas rv" style={{ justifyContent: "flex-start", marginTop: 32 }}><Link className="btn solid lg" href="/early-access">Book a call</Link></div>
          <p className="bridge rv"><a href="#partner-h">If you introduce teams often, an agency partnership may suit you better.<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec" aria-labelledby="partner-h">
          <h2 className="h2 rv" id="partner-h">Become an agency partner. <span>Run OnchainSuite for the companies you already work with.</span></h2>
          <ol className="steps3n" style={{ margin: "40px 0 0" }}>
            {PARTNER_STEPS.map((s, i) => <li key={s.t} className="rv"><i>{String(i + 1).padStart(2, "0")}</i><b>{s.t}</b><span>{s.d}</span></li>)}
          </ol>
          <div className="ctas rv" style={{ justifyContent: "flex-start", marginTop: 32 }}><Link className="btn solid lg" href="/early-access">Book a call</Link></div>
        </section>
      </div>
    </SiteChrome>
  );
}
