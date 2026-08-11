import { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ACCENT, ACCENT_HOVER, OK } from "@/lib/data";
import { COMPETITORS, MATRIX_CAPS, MIGRATION_STEPS, OCS_HIGHLIGHTS, OCS_MATRIX, competitorBySlug } from "@/lib/compare";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import CompareCard from "@/components/CompareCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = competitorBySlug(slug);
  if (!c) return {};
  return {
    title: `OnchainSuite vs ${c.name}`,
    description: `${c.name} vs OnchainSuite for Web3 retention: a full feature comparison, when to pick which, and FAQs.`,
    alternates: { canonical: `/compare/${c.slug}` },
    openGraph: {
      title: `OnchainSuite vs ${c.name}`,
      description: `How OnchainSuite compares to ${c.name} for on-chain retention and messaging.`,
      url: `/compare/${c.slug}`,
      type: "website",
    },
  };
}

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FAFAF8", overflowX: "clip" } as CSSProperties;
const mono = { fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase" as const, color: ACCENT, fontWeight: 600 };
const h2 = { margin: "56px 0 0", fontSize: 25, fontWeight: 700, letterSpacing: "-.025em", color: "#1A1A17" } as CSSProperties;

const HL_ICONS: Record<string, ReactNode> = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" />,
  send: <path d="M21 3 10.5 13.5M21 3 14 21l-3.5-7.5L3 10z" />,
  wand: <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z" />,
};

function Val({ v, us }: { v: string; us?: boolean }) {
  if (v === "Yes")
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: us ? ACCENT : "#15803D", fontWeight: 600, fontSize: 13.5 }}>
        <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12.5 9.5 18 20 6.5" /></svg>
        Yes
      </span>
    );
  if (v === "No") return <span style={{ color: "#A6AFC0", fontSize: 13.5 }}>No</span>;
  if (v === "Roadmap") return <span style={{ color: ACCENT, fontWeight: 600, fontSize: 13.5 }}>Roadmap</span>;
  return <span style={{ fontSize: 13.5, color: us ? "#1A1A17" : "#3D4A63", fontWeight: us ? 600 : 400 }}>{v}</span>;
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = competitorBySlug(slug);
  if (!c) notFound();

  const others = COMPETITORS.filter((x) => x.slug !== c.slug);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div style={themeVars}>
      <SiteHeader />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "76px 32px 8px" }} data-pad>
        {/* Hero */}
        <div style={mono}>Compare · {c.kind}</div>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(32px,4.6vw,54px)", lineHeight: 1.03, letterSpacing: "-.03em", fontWeight: 700, color: "#1A1A17" }}>
          OnchainSuite vs <span className="ocs-grad-text">{c.name}</span>
        </h1>
        <p style={{ margin: "20px 0 0", fontSize: 18.5, lineHeight: 1.65, color: "#3D4A63", maxWidth: 700 }}>{c.intro}</p>
        <div style={{ marginTop: 24, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <a href="/early-access" className="ocs-btn-primary" style={{ fontSize: 15, fontWeight: 600, color: "#fff", background: ACCENT, padding: "12px 20px", borderRadius: 10, textDecoration: "none" }}>Get early access</a>
          <a href="/tools/churn-calculator" style={{ fontSize: 15, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>Size up churn cost →</a>
        </div>

        {/* Why choose */}
        <h2 style={h2}>Why teams pick OnchainSuite over {c.name}</h2>
        <p style={{ margin: "16px 0 0", fontSize: 16.5, lineHeight: 1.7, color: "#3D4A63" }}>{c.whyChoose}</p>

        {/* Highlights — open, no boxes */}
        <div style={{ marginTop: 34, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }} data-cards>
          {OCS_HIGHLIGHTS.map((hl) => (
            <div key={hl.title}>
              <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{HL_ICONS[hl.icon]}</svg>
              <div style={{ margin: "12px 0 0", fontSize: 15.5, fontWeight: 700, color: "#1A1A17" }}>{hl.title}</div>
              <div style={{ margin: "7px 0 0", fontSize: 14, lineHeight: 1.55, color: "#3D4A63" }}>{hl.desc}</div>
            </div>
          ))}
        </div>

        {/* Matrix — clean table, checkmarks not pills */}
        <h2 style={h2}>Feature by feature</h2>
        <div style={{ overflowX: "auto", marginTop: 18 }}>
          <table style={{ width: "100%", minWidth: 560, borderCollapse: "collapse", fontSize: 14.5 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "0 12px 12px 0", borderBottom: "1px solid #C9D6EA", color: "#8A93A6", fontWeight: 600, fontSize: 12.5, width: "44%" }}>Capability</th>
                <th style={{ textAlign: "left", padding: "0 12px 12px", borderBottom: "1px solid #C9D6EA", color: ACCENT, fontWeight: 700 }}>OnchainSuite</th>
                <th style={{ textAlign: "left", padding: "0 12px 12px", borderBottom: "1px solid #C9D6EA", color: "#1A1A17", fontWeight: 700 }}>{c.name}</th>
              </tr>
            </thead>
            <tbody>
              {MATRIX_CAPS.map((cap, i) => (
                <tr key={cap}>
                  <td style={{ padding: "13px 12px 13px 0", borderBottom: "1px solid #EAF1FB", color: "#3D4A63" }}>{cap}</td>
                  <td style={{ padding: "13px 12px", borderBottom: "1px solid #EAF1FB" }}><Val v={OCS_MATRIX[i]} us /></td>
                  <td style={{ padding: "13px 12px", borderBottom: "1px solid #EAF1FB" }}><Val v={c.them[i]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Where X is strong — editorial, no boxes */}
        <h2 style={h2}>Where {c.name} is strong</h2>
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 48px" }} data-stack>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A17", marginBottom: 10 }}>What teams like about {c.name}</div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {c.theyLike.map((t) => (
                <li key={t} style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.55, color: "#3D4A63" }}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A17", marginBottom: 10 }}>When {c.name} is the better call</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#3D4A63" }}>{c.whenThem}</p>
            <div style={{ height: 1, background: "#DCE7F5", margin: "18px 0" }} />
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A17", marginBottom: 10 }}>Running both</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#3D4A63" }}>{c.together}</p>
          </div>
        </div>

        {/* Switching — numbered, open */}
        <h2 style={h2}>Switching over</h2>
        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }} data-cards>
          {MIGRATION_STEPS.map((s, i) => (
            <div key={s.title}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: ACCENT }}>0{i + 1}</div>
              <div style={{ margin: "10px 0 0", fontSize: 15.5, fontWeight: 700, color: "#1A1A17" }}>{s.title}</div>
              <div style={{ margin: "7px 0 0", fontSize: 14, lineHeight: 1.55, color: "#3D4A63" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </main>

      <FaqSection items={c.faqs} eyebrow="FAQ" title={`OnchainSuite vs ${c.name}, answered`} />

      {/* Cross-links — vs cards */}
      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "8px 32px 8px" }} data-pad>
        <div style={mono}>More comparisons</div>
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
          {others.map((o) => (
            <CompareCard key={o.slug} c={o} />
          ))}
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  );
}
