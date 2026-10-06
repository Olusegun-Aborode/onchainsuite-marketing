import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/ns/SiteChrome";
import PricingPlans from "@/components/ns/PricingPlans";
import CompareTable from "@/components/ns/CompareTable";
import { PricingLineProvider } from "@/components/ns/PricingLine";
import { CloseCta, Faq, LogoRow } from "@/components/ns/Blocks";
import { PRICING_FAQ } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "OnchainSuite pricing. The Suite plan starts at $39 a month, priced by contacts. The Send plan is $6 a month plus $3.95 per 1,000 subscribers.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing · OnchainSuite", url: "/pricing", type: "website",
    description: "Suite plan from $39 a month, priced by the contacts you bring in. Send plan from $6 a month plus $3.95 per 1,000 subscribers." },
};

export default function PricingPage() {
  return (
    <SiteChrome>
      <PricingLineProvider>
      <div className="wrap">
        <section className="phero">
          <h1 className="h1 load" style={{ animationDelay: ".08s" }}>Pricing that grows with the customers you bring in.</h1>
          <p className="sub load" style={{ animationDelay: ".16s" }}>Set the contacts you plan to import and the seats your team needs, and the price follows.</p>
          <div className="load" style={{ animationDelay: ".24s" }}><PricingPlans /></div>
          <p className="bridge rv center"><a href="#cmp-h">Not sure which package fits? Every one reads both lanes, and here is how they differ.<span aria-hidden="true">↓</span></a></p>
        </section>

        <LogoRow label="Trusted by blockchain companies including" />

        <section className="cmp" aria-labelledby="cmp-h">
          <CompareTable />
          <p className="bridge rv" style={{ margin: "28px 18px 0" }}><a href="#faq-h">Still deciding? These are the questions buyers ask us most.<span aria-hidden="true">↓</span></a></p>
        </section>

        <Faq items={PRICING_FAQ} />
        <CloseCta />
      </div>
      </PricingLineProvider>
    </SiteChrome>
  );
}
