import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPETITORS, MATRIX_CAPS, MIGRATION_STEPS, OCS_HIGHLIGHTS, OCS_MATRIX, competitorBySlug } from "@/lib/compare";
import SiteChrome from "@/components/ns/SiteChrome";
import { CloseCta, Faq } from "@/components/ns/Blocks";
import VsLockup from "@/components/ns/VsLockup";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = competitorBySlug(slug);
  if (!c) return {};
  return {
    title: `OnchainSuite and ${c.name} compared`,
    description: `${c.name} and OnchainSuite for blockchain companies: feature by feature, when ${c.name} is the better call, and how to run both.`,
    alternates: { canonical: `/compare/${c.slug}` },
    openGraph: { title: `OnchainSuite and ${c.name} compared`, url: `/compare/${c.slug}`, type: "website",
      description: `How OnchainSuite compares with ${c.name} for lifecycle and retention marketing at blockchain companies.` },
  };
}

function Val({ v }: { v: string }) {
  if (v === "Yes") return <span className="v yes"><svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>Yes</span>;
  if (v === "No") return <span className="v no">No</span>;
  return <span className="v">{v}</span>;
}

const ICON: Record<string, string> = { bolt: "#i-layers", send: "#a-phone", wand: "#a-bolt" };

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = competitorBySlug(slug);
  if (!c) notFound();
  const others = COMPETITORS.filter((x) => x.slug !== c.slug).slice(0, 3);
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="vs-hero">
          <Link className="crumb load" href="/compare">← All comparisons</Link>
          <div className="load" style={{ animationDelay: ".05s" }}><VsLockup slug={c.slug} name={c.name} size="lg" /></div>
          <h1 className="h1 load" style={{ animationDelay: ".1s" }}>OnchainSuite and {c.name}</h1>
          <p className="sub load" style={{ animationDelay: ".18s" }}>{c.intro}</p>
          <div className="ctas load" style={{ animationDelay: ".26s" }}><Link className="btn solid lg" href="/early-access">Book a walkthrough</Link><Link className="btn lg" href="/pricing">See pricing</Link></div>
        </section>

        <section className="vs-why">
          <div><h2 className="h2 rv">Why blockchain companies choose OnchainSuite over {c.name}. <span>{c.whyChoose}</span></h2></div>
          <div className="vs-hl">
            {OCS_HIGHLIGHTS.map((h) => (
              <div key={h.title} className="rv"><svg aria-hidden="true"><use href={ICON[h.icon] ?? "#i-layers"} /></svg><p className="h4">{h.title}. <span>{h.desc}</span></p></div>
            ))}
          </div>
        </section>

        <section className="cmp" aria-labelledby="fbf">
          <div className="cmp-intro"><h2 className="h2 rv" id="fbf">OnchainSuite and {c.name}, side by side.</h2></div>
          <div className="cmp-table two">
            <div className="cmp-head" role="row"><div role="columnheader"></div><div role="columnheader"><b>OnchainSuite</b><span>From $39 a month</span></div><div role="columnheader"><b>{c.name}</b><span>{c.them[0]}</span></div></div>
            {MATRIX_CAPS.map((cap, i) => i === 0 ? null : (
              <div key={cap} className="cmp-row" role="row">
                <div role="rowheader">{cap}</div>
                <div role="cell"><Val v={OCS_MATRIX[i]} /></div>
                <div role="cell"><Val v={c.them[i]} /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="vs-fair">
          <div><h2 className="h2 rv">What teams like about {c.name}.</h2>
            <ul className="checks rv">{c.theyLike.map((t) => <li key={t}>{t}</li>)}</ul></div>
          <div className="vs-side">
            <div className="rv"><p className="h4">{c.name} is the better call when <span>{c.whenThem.charAt(0).toLowerCase() + c.whenThem.slice(1)}</span></p></div>
            <div className="rv"><p className="h4">Running both. <span>{c.together}</span></p></div>
          </div>
        </section>

        <section className="vs-steps">
          <div className="cmp-intro" style={{ paddingBottom: 0 }}><h2 className="h2 rv">You give up nothing you have already set up.</h2></div>
          <ol className="steps3n">
            {MIGRATION_STEPS.map((s, i) => <li key={s.title} className="rv"><i>0{i + 1}</i><b>{s.title}</b><span>{s.desc}</span></li>)}
          </ol>
        </section>

        <Faq items={c.faqs} title={`OnchainSuite and ${c.name}, answered`} />

        <section className="vs-more">
          <div className="cmp-intro" style={{ paddingBottom: 28 }}></div>
          <div className="cgrid">
            {others.map((o) => (
              <Link key={o.slug} href={`/compare/${o.slug}`} className="ccard rv"><VsLockup slug={o.slug} name={o.name} /><b>OnchainSuite and {o.name}</b><span>{o.intro.split(/(?<=\.)\s/)[0]}</span><em>Read the comparison →</em></Link>
            ))}
          </div>
        </section>
        <CloseCta />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </SiteChrome>
  );
}
