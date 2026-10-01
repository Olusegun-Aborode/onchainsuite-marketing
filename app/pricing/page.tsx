import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/ns/SiteChrome";
import PricingPlans from "@/components/ns/PricingPlans";
import { CloseCta, Faq, LogoRow } from "@/components/ns/Blocks";
import { COMPARE_GROUPS, LEVELS, LEVEL_INFO, PRICING_FAQ, fmt, suitePrice } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "OnchainSuite pricing. Suite from $39 a month (Launch) to $1,622 a month (Pro), priced by the contacts you bring in. Send, email only, is $6 a month plus $3.95 per 1,000 subscribers.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing · OnchainSuite", url: "/pricing", type: "website",
    description: "Suite from $39 a month, priced by the contacts you bring in. Send from $6 a month plus $3.95 per 1,000 subscribers." },
};

export default function PricingPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="phero">
          <h1 className="h1 load" style={{ animationDelay: ".08s" }}>Pricing that grows with the customers you bring in.</h1>
          <p className="sub load" style={{ animationDelay: ".16s" }}>Set the contacts you plan to import and the seats your team needs, and the price follows.</p>
          <div className="load" style={{ animationDelay: ".24s" }}><PricingPlans /></div>
          <p className="bridge rv center"><a href="#cmp-h">Not sure which package fits? Every one reads both lanes, and here is how they differ.<span aria-hidden="true">↓</span></a></p>
        </section>

        <LogoRow label="Trusted by blockchain companies including" />

        <section className="cmp" aria-labelledby="cmp-h">
          <div className="cmp-intro">
            <h2 className="h2 rv" id="cmp-h">Every Suite package reads both lanes. <span>The levels differ in the contacts they cover, the allowances that come with them and the seats your team gets.</span></h2>
          </div>
          <div className="cmp-table" role="table" aria-label="Suite packages compared">
            <div className="cmp-head" role="row">
              <div role="columnheader"><span className="cmp-note">Prices are per month.</span></div>
              {LEVELS.map((lv) => (
                <div key={lv.id} role="columnheader">
                  <b>{lv.name}</b>
                  <span>from ${fmt(suitePrice(LEVEL_INFO.find((l) => l.id === lv.id)!.ref))} a month</span>
                  <Link className={"btn " + (lv.featured ? "solid" : "")} href="/early-access">Book a walkthrough</Link>
                </div>
              ))}
            </div>
            {COMPARE_GROUPS.map((g) => (
              <div key={g.title} role="rowgroup" className="cmp-group">
                <div className="cmp-gt" role="row"><div role="cell">{g.title}</div></div>
                {g.rows.map((r) => (
                  <div key={r.label} className="cmp-row" role="row">
                    <div role="rowheader">{r.label}{r.note && <small>{r.note}</small>}</div>
                    {r.span ? <div role="cell" className="val span">{r.cells[0]}</div> : r.cells.map((c, i) => (
                      <div key={i} role="cell" className={typeof c === "boolean" ? (c ? "yes" : "no") : "val"}>
                        {typeof c === "boolean" ? (c ? <><svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg><span className="sr-only">Included</span></> : <><span aria-hidden="true">—</span><span className="sr-only">Not included</span></>) : c}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="bridge rv" style={{ margin: "28px 18px 0" }}><a href="#faq-h">Still deciding? These are the questions buyers ask us most.<span aria-hidden="true">↓</span></a></p>
        </section>

        <Faq items={PRICING_FAQ} />
        <CloseCta />
      </div>
    </SiteChrome>
  );
}
