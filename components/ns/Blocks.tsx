import Link from "next/link";
import CloseArt from "./CloseArt";

/* Sections shared across the redesigned subpages, so every page closes the same way. */

const CUSTOMERS = [
  { name: "Predict Street", logo: "/logos/predict-street.png" },
  { name: "Yauga", logo: "/logos/yauga.jpg" },
  { name: "Rehitage", logo: "/logos/rehitage.svg" },
  { name: "Surgence Labs", logo: "/logos/surgence.jpg" },
];

export function LogoRow({ label }: { label?: string }) {
  return (
    <div className="logorow">
      {label && <p className="logorow-l">{label}</p>}
      <div className="logos" aria-label="Paying customers">
        {CUSTOMERS.map((c) => (
          <div key={c.name} className="rv">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.logo} alt="" width={28} height={28} />{c.name}
          </div>
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
          <h2 className="h2 rv" id="cta-h">Find out which of your customers are about to leave. <span>Book a thirty-minute walkthrough with our team.</span></h2>
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
