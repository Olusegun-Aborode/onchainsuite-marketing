import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/ns/SiteChrome";
import { CloseCta, PageHero } from "@/components/ns/Blocks";
import ToolArt, { type ToolKind } from "@/components/ns/ToolArt";

export const metadata: Metadata = {
  title: "Free tools",
  description:
    "Free calculators for growth teams at blockchain companies: dormant wallet reactivation, cost per acquisition, wallet reachability, churn rate, churn cost and lifetime value. No signup.",
  alternates: { canonical: "/tools" },
};

const TOOLS = [
  { group: "Acquisition", name: "Cost per acquisition calculator", blurb: "Spend by channel against wallets that actually transacted, so a connected wallet stops counting as an acquisition.", href: "/tools/cost-per-acquisition", art: "cpa" as ToolKind },
  { group: "Audience", name: "Wallet reachability score", blurb: "How much of your base you can message by email, in-app and socials, with each person counted once.", href: "/tools/wallet-reachability-score", art: "reach" as ToolKind },
  { group: "Retention", name: "Wallet churn rate calculator", blurb: "One cohort over one period, then the compounding annual rate and the wallet lifespan it implies.", href: "/tools/wallet-churn-rate", art: "churnrate" as ToolKind },
  { group: "Retention", name: "Wallet churn cost calculator", blurb: "What the wallets you lose each month cost you in revenue over a year.", href: "/tools/churn-calculator", art: "churncost" as ToolKind },
  { group: "Revenue", name: "Wallet lifetime value calculator", blurb: "Lifetime value per wallet, and how much it rises when retention improves.", href: "/tools/ltv-calculator", art: "ltv" as ToolKind },
];

export default function ToolsHub() {
  return (
    <SiteChrome>
      <div className="wrap">
        <PageHero tag="Free tools" title="Calculators for the numbers your growth team argues about."
          sub="No signup and no email gate. Every tool runs in your browser and explains how it works underneath." />

        <section className="feat">
          <Link href="/tools/dormant-wallet-reactivation" className="feat-card rv">
            <div>
              
              <h2 className="h2">Dormant wallet reactivation calculator. <span>Put a number on the revenue sitting in wallets that stopped showing up, and on what bringing a share of them back is worth.</span></h2>
              <em>Open the calculator →</em>
            </div>
            <ToolArt kind="dormant" className="feat-art" />
          </Link>
        </section>

        <section className="toolgrid">
          {TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="ccard rv">
              <ToolArt kind={t.art} className="card-art" />
              <b>{t.name}</b><span>{t.blurb}</span><em>Open the calculator →</em>
            </Link>
          ))}
          <div className="ccard soon rv"><b>Got a number you keep working out by hand?</b><span>Tell us on a walkthrough and we may build the calculator next.</span><em><Link href="/early-access">Book a walkthrough →</Link></em></div>
        </section>
        <CloseCta />
      </div>
    </SiteChrome>
  );
}
