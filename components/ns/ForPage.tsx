import Link from "next/link";
import SiteChrome from "./SiteChrome";
import { CloseCta, Faq } from "./Blocks";
import PointArt from "./PointArt";

/* Layout for the "OnchainSuite for…" pages: who it is for, the data lanes they get, what they can do,
   the plan that fits and its price. Every section ends with a bridge the next headline answers. */

type Lane = { k: string; d: string; e: string[]; off?: string };
type Point = { title: string; body: string; art: string };

export default function ForPage({ title, sub, lanesTitle, lanes, toPoints, pointsTitle, points, toPlan, plan, faqs, mainstream }: {
  title: string; sub: string; lanesTitle: React.ReactNode; lanes: Lane[]; toPoints: string; pointsTitle: React.ReactNode; points: Point[]; toPlan: string;
  plan: { name: string; price: string; unit: string; line: string; items: string[]; other: React.ReactNode };
  faqs: { q: string; a: string }[]; mainstream?: boolean;
}) {
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="prod-hero">
          <h1 className="h1 load">{title}</h1>
          <p className="sub load" style={{ animationDelay: ".1s" }}>{sub}</p>
          <div className="ctas load" style={{ animationDelay: ".18s" }}>
            <Link className="btn solid lg" href="/early-access">Book a walkthrough</Link>
            <Link className="btn lg" href="/pricing">See pricing</Link>
          </div>
        </section>

        <section className="dl-sec" aria-labelledby="lanes-h">
          <h2 className="h2 rv" id="lanes-h">{lanesTitle}</h2>
          <div className="dl-lanes">
            {lanes.map((l, i) => (
              <div key={l.k} className={"dl-lane rv" + (l.off ? " off" : "")}>
                <div className="dl-lane-h"><i className={`dot d${i}`} /><b>{l.k}</b>{l.off && <span className="tag">{l.off}</span>}</div>
                <p>{l.d}</p>
                <ul>{l.e.map((e) => <li key={e}>{e}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="bridge rv"><a href="#points-h">{toPoints}<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec" aria-labelledby="points-h">
          <h2 className="h2 rv" id="points-h">{pointsTitle}</h2>
          <div className="prod-points for-points">
            {points.map((p) => (
              <div key={p.title} className="rv"><PointArt kind={p.art} /><p className="h4">{p.title} <span>{p.body}</span></p></div>
            ))}
          </div>
          <p className="bridge rv"><a href="#plan-h">{toPlan}<span aria-hidden="true">↓</span></a></p>
        </section>

        <section className="dl-sec" aria-labelledby="plan-h">
          <div className="sendcard rv">
            <div>
              <h2 className="h3" id="plan-h" style={{ margin: 0 }}>{plan.name}</h2>
              <p className="price"><b>{plan.price}</b><span>{plan.unit}</span></p>
              <p className="formula" style={{ marginTop: 0 }}>{plan.line}</p>
            </div>
            <div>
              <ul className="checks">{plan.items.map((x) => <li key={x}>{x}</li>)}</ul>
              <p className="upsell">{plan.other}</p>
              <Link className="btn solid lg" href="/early-access">Book a walkthrough</Link>
            </div>
          </div>
          <p className="bridge rv"><a href="#faq-h">Still deciding? These are the questions teams like yours ask us.<span aria-hidden="true">↓</span></a></p>
        </section>

        <Faq items={faqs} />
        <CloseCta mainstream={mainstream} />
      </div>
    </SiteChrome>
  );
}
