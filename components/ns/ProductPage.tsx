import Link from "next/link";
import SiteChrome from "./SiteChrome";
import { CloseCta, Faq } from "./Blocks";
import PointArt from "./PointArt";

/* Shared layout for the platform pages: hero, live product scene, what it does, how it fits, FAQ. */

export const PRODUCTS = [
  { href: "/platform/audience", name: "Audience", line: "Every wallet, email and app account on one customer record." },
  { href: "/platform/segments", name: "Segments", line: "Describe an audience in a sentence and get the rules back." },
  { href: "/platform/loops", name: "Loops", line: "Journeys that start on-chain and stop when the customer acts." },
  { href: "/platform/intelligence-mcp", name: "Intelligence MCP", line: "Ask your app and contract data a question in plain English." },
];

type Point = { title: string; body: string; art?: string };

export default function ProductPage({ href, title, sub, scene, points, faqs, docs, toPoints, toNext }: {
  href: string; title: string; sub: string; scene: React.ReactNode; points: Point[]; faqs: { q: string; a: string }[]; docs?: string; toPoints: string; toNext: string;
}) {
  const others = PRODUCTS.filter((p) => p.href !== href);
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="prod-hero">
          <h1 className="h1 load">{title}</h1>
          <p className="sub load" style={{ animationDelay: ".1s" }}>{sub}</p>
          <div className="ctas load" style={{ animationDelay: ".18s" }}>
            <Link className="btn solid lg" href="/early-access">Book a walkthrough</Link>
            {docs ? <a className="btn lg" href={docs} target="_blank" rel="noreferrer">Read the docs</a> : <Link className="btn lg" href="/pricing">See pricing</Link>}
          </div>
        </section>
        <div className="prod-scene">{scene}</div>
        <div className="prod-bridge"><p className="bridge rv"><a href="#points">{toPoints}<span aria-hidden="true">↓</span></a></p></div>
        <section className="prod-points" id="points">
          {points.map((p) => (
            <div key={p.title} className="rv">{p.art && <PointArt kind={p.art} />}<p className="h4">{p.title} <span>{p.body}</span></p></div>
          ))}
        </section>
        <div className="prod-bridge"><p className="bridge rv"><a href="#more-h">{toNext}<span aria-hidden="true">↓</span></a></p></div>
        <section className="prod-more" aria-labelledby="more-h">
          <h2 className="h2 rv" id="more-h">The rest of the platform.</h2>
          <div className="cgrid">
            {others.map((o) => (
              <Link key={o.href} href={o.href} className="ccard rv"><b>{o.name}</b><span>{o.line}</span><em>Explore {o.name} →</em></Link>
            ))}
          </div>
        </section>
        <Faq items={faqs} />
        <CloseCta />
      </div>
    </SiteChrome>
  );
}
