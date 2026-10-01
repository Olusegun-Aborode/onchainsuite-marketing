import type { Metadata } from "next";
import SiteChrome from "@/components/ns/SiteChrome";
import { CloseCta, LogoRow, PageHero } from "@/components/ns/Blocks";

export const metadata: Metadata = {
  title: "Team",
  description: "The people building OnchainSuite, the lifecycle and retention platform for blockchain companies, from Birmingham in the United Kingdom.",
  alternates: { canonical: "/team" },
};

/* Founders and accountabilities as set out in business plan v13, section 5.3.
   Replace the initials with photos by adding images to /public and swapping the avatar. */
const FOUNDERS = [
  { name: "Olusegun Isaac Aborode", role: "Founder and CEO", initials: "OA", color: "#1727E0",
    bio: "Leads product, customers, commercial execution and finance. His background combines blockchain data analysis with growth and customer lifecycle work, from data pipelines and wallet analysis to CRM, segmentation and email campaigns." },
  { name: "Joshua Obafemi", role: "Cofounder and CTO", initials: "JO", color: "#2F94FF",
    bio: "Leads architecture, infrastructure, engineering standards, deployment and security, including the indexing, identity and delivery work that makes on-chain activity something a team can message." },
  { name: "Joel Obafemi", role: "Cofounder and analytics lead", initials: "JO", color: "#7C5CF6",
    bio: "Leads how application data is interpreted, its quality, the analytical methods behind it and how customer results are measured." },
];

const FACTS = [
  ["Company", "OnchainSuite Ltd"],
  ["Registered", "England and Wales, 17370357"],
  ["Based", "Birmingham, United Kingdom"],
  ["Incorporated", "30 July 2026"],
];

export default function TeamPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <PageHero tag="Team" title="The people building OnchainSuite."
          sub="A small team of blockchain data and lifecycle people, building the tool we wanted when we were the ones sending the campaigns." />
        <section className="team">
          {FOUNDERS.map((f) => (
            <article key={f.name} className="person rv">
              <span className="ava" style={{ color: f.color, background: `color-mix(in oklab, ${f.color} 10%, #fff)`, borderColor: `color-mix(in oklab, ${f.color} 28%, #fff)` }}>{f.initials}</span>
              <h2>{f.name}</h2>
              <p className="role">{f.role}</p>
              <p>{f.bio}</p>
            </article>
          ))}
        </section>
        <LogoRow label="Trusted by blockchain companies including" />
        <section className="facts">
          {FACTS.map(([k, v]) => <div key={k} className="rv"><small>{k}</small><b>{v}</b></div>)}
        </section>
        <CloseCta />
      </div>
    </SiteChrome>
  );
}
