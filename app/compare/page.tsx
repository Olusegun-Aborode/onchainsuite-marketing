import type { Metadata } from "next";
import SiteChrome from "@/components/ns/SiteChrome";
import CompareGrid from "@/components/ns/CompareGrid";
import { CloseCta, PageHero } from "@/components/ns/Blocks";
import { COMPETITORS, MATRIX_CAPS, OCS_MATRIX } from "@/lib/compare";

export const metadata: Metadata = {
  title: "Compare OnchainSuite",
  description:
    "Fair, current comparisons between OnchainSuite and the email, lifecycle and on-chain tools blockchain companies weigh it against, with the cases where the other tool is the better call.",
  alternates: { canonical: "/compare" },
};

const GROUP: Record<string, string> = {
  klaviyo: "Email platforms", dotdigital: "Email platforms", emailoctopus: "Email platforms", brevo: "Email platforms", sendgrid: "Email platforms",
  "customer-io": "Lifecycle platforms", braze: "Lifecycle platforms",
  formo: "On-chain tools", addressable: "On-chain tools", galxe: "On-chain tools",
};
const ORDER = ["klaviyo", "customer-io", "braze", "brevo", "dotdigital", "emailoctopus", "sendgrid", "formo", "addressable", "galxe"];
/* The four capability rows that decide most evaluations, plus price. */
const ROWS = [1, 2, 3, 4, 0];

const firstSentence = (s: string) => s.split(/(?<=\.)\s/)[0];
const tone = (v: string) => (v === "Yes" ? "yes" : v === "No" ? "no" : "part");

export default function CompareHub() {
  const comps = ORDER.map((s) => COMPETITORS.find((c) => c.slug === s)!).filter(Boolean);
  const cards = comps.map((c) => ({ slug: c.slug, name: c.name, kind: c.kind, group: GROUP[c.slug] ?? "Email platforms", line: firstSentence(c.intro) }));
  return (
    <SiteChrome>
      <div className="wrap">
        <PageHero tag="Compare" title="Every tool your team has already looked at, compared fairly."
          sub="Each page says where the other tool is strong and when it is the better call, and where OnchainSuite does something it cannot." />
        <section className="cmp-hub"><CompareGrid cards={cards} /></section>

        <section className="glance" aria-labelledby="glance-h">
          <div className="cmp-intro"><h2 className="h2 rv" id="glance-h">The questions that decide most evaluations. <span>Can it start a journey from the chain, hold a contact with only a wallet, and reach that wallet in-app?</span></h2></div>
          <div className="glance-t">
            <table>
              <thead><tr><th>Platform</th>{ROWS.map((r) => <th key={r}>{MATRIX_CAPS[r]}</th>)}</tr></thead>
              <tbody>
                <tr className="us"><td>OnchainSuite</td>{ROWS.map((r) => <td key={r} className={tone(OCS_MATRIX[r])}>{OCS_MATRIX[r]}</td>)}</tr>
                {comps.map((c) => (
                  <tr key={c.slug}><td><a href={`/compare/${c.slug}`}>{c.name}</a></td>{ROWS.map((r) => <td key={r} className={tone(c.them[r])}>{c.them[r]}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cmp-foot">From each company&rsquo;s public pricing and documentation. If something here is out of date, tell us and we will correct it.</p>
        </section>

        <section className="band26" aria-labelledby="b26">
          <p className="rv" id="b26"><b>26</b>email and marketing platforms we mapped in August 2026, and none of them reads a smart contract or can message a wallet.</p>
        </section>
        <CloseCta />
      </div>
    </SiteChrome>
  );
}
