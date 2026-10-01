import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, LEGAL_UPDATED } from "@/lib/data";
import SiteChrome from "@/components/ns/SiteChrome";
import { PageHero } from "@/components/ns/Blocks";

export const metadata: Metadata = {
  title: "Legal",
  description: "OnchainSuite legal documents: privacy, terms, data processing, international transfers, cookies, and sub-processors.",
  alternates: { canonical: "/legal" },
};

const DOCS = [
  { href: "/privacy", title: "Privacy Policy", desc: "How we collect, use and protect personal data under UK GDPR." },
  { href: "/terms", title: "Terms of Service", desc: "The agreement for access to and use of the platform." },
  { href: "/dpa", title: "Data Processing Agreement", desc: "Article 28 terms for data we process on your behalf, plus our security measures." },
  { href: "/data-transfers", title: "International Data Transfers", desc: "Safeguards for data leaving the UK, including the UK Extension to the EU-US Data Privacy Framework." },
  { href: "/cookies", title: "Cookie Policy", desc: "How we use cookies and similar technologies under PECR." },
  { href: "/subprocessors", title: "Sub-processors", desc: "The third parties we engage to provide the service." },
];

export default function LegalPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <PageHero tag="Legal" title="Legal and compliance"
          sub={`${COMPANY.legalName} is registered in ${COMPANY.jurisdiction}. These documents set out how we handle personal data and the terms of using OnchainSuite. Last updated ${LEGAL_UPDATED}.`} />
        <section className="docs">
          {DOCS.map((d) => (
            <Link key={d.href} href={d.href} className="doc rv"><div><b>{d.title}</b><span>{d.desc}</span></div><em aria-hidden="true">→</em></Link>
          ))}
          <p className="docs-q">Questions? Email <a href={`mailto:${COMPANY.legalEmail}`}>{COMPANY.legalEmail}</a> for legal matters, or <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a> for privacy and data requests.</p>
        </section>
      </div>
    </SiteChrome>
  );
}
