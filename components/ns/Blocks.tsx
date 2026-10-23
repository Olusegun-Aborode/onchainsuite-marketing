import Link from "next/link";
import CloseArt from "./CloseArt";

/* Sections shared across the redesigned subpages, so every page closes the same way. */

/* Customers first, then the infrastructure OnchainSuite runs on, in one grid of five per row. */
/* A wordmark already spells the name, so it is shown on its own instead of icon plus name. */
const LOGOS: { name: string; logo: string; wordmark?: boolean }[] = [
  { name: "Predict Street", logo: "/logos/predict-street.png" },
  { name: "Yauga", logo: "/logos/yauga.jpg" },
  { name: "Rehitage", logo: "/logos/rehitage.svg" },
  { name: "Surgence Labs", logo: "/logos/surgence.jpg" },
  { name: "Sovren", logo: "/logos/sovren.png" },
  { name: "TraderComps", logo: "/logos/tradercomps.svg" },
  { name: "The Sweat Equity Club", logo: "/logos/sweat-equity-club.png", wordmark: true },
  { name: "Vault777", logo: "/logos/vault777.jpg" },
  { name: "DigitalOcean", logo: "/integrations/digitalocean.svg" },
  { name: "Amazon SES", logo: "/integrations/aws-ses.svg" },
  { name: "Azure ACS", logo: "/integrations/azure.svg" },
];

/* Blank cells close the last row: enough for five columns on desktop, and the mobile CSS hides any
   beyond what two columns need. */
const FILL = (5 - (LOGOS.length % 5)) % 5;
const FILL_MOBILE = LOGOS.length % 2;

/* Used on the homepage under the hero and on the pricing, team and early-access pages. */
export function LogoRow() {
  return (
    <div className="logorow">
      <p className="logorow-l">Trusted and supported by</p>
      <div className="logos" aria-label="Trusted and supported by">
        {LOGOS.map((c) => (
          <div key={c.name} className="rv">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {c.wordmark
              ? <img className="wm" src={c.logo} alt={c.name} width={459} height={66} />
              : <><img src={c.logo} alt="" width={28} height={28} /><span>{c.name}</span></>}
          </div>
        ))}
        {Array.from({ length: FILL }, (_, i) => (
          <div key={i} className={"fill" + (i < FILL_MOBILE ? "" : " desk")} aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}

export function Faq({ items, title = "Questions we get asked" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="faq" aria-labelledby="faq-h">
      <div><h2 className="h2 rv" id="faq-h">{title}</h2></div>
      <div className="faq-list">
        {items.map((f) => (
          <details key={f.q} className="rv">
            <summary>{f.q}<span aria-hidden="true">+</span></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CloseCta({ mainstream = false }: { mainstream?: boolean } = {}) {
  return (
    <section className="close" id="cta" aria-labelledby="cta-h">
      <div className="close-grid">
        <div>
          <h2 className="h2 rv" id="cta-h">Find out which of your customers are about to leave. <span>Book a fifteen-minute call with our team.</span></h2>
          <div className="ctas rv"><Link className="btn solid lg" href="/early-access">Book a walkthrough</Link><Link className="btn lg" href="/pricing">See pricing</Link></div>
        </div>
        <CloseArt mainstream={mainstream} />
      </div>
    </section>
  );
}

export function PageHero({ title, sub, children }: { tag?: string; title: React.ReactNode; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="phero">
      <h1 className="h1 load" style={{ animationDelay: ".08s" }}>{title}</h1>
      {sub && <p className="sub load" style={{ animationDelay: ".16s" }}>{sub}</p>}
      {children}
    </section>
  );
}
