import type { Metadata } from "next";
import SiteChrome from "@/components/ns/SiteChrome";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { LogoRow } from "@/components/ns/Blocks";

export const metadata: Metadata = {
  title: "Book a walkthrough",
  description: "Book a thirty-minute walkthrough of OnchainSuite. Bring a problem your team already has and we will show you how that journey would run on your own data.",
  alternates: { canonical: "/early-access" },
  openGraph: { title: "Book a walkthrough · OnchainSuite", url: "/early-access", type: "website",
    description: "A thirty-minute walkthrough of OnchainSuite, on a problem your team already has." },
};

export default function EarlyAccessPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="book">
          <div className="book-l">
            <h1 className="h1 load" style={{ animationDelay: ".08s" }}>See OnchainSuite on a problem your team already has.</h1>
            <p className="sub load" style={{ animationDelay: ".16s" }}>Tell us a little about your company and pick a time. The walkthrough takes thirty minutes.</p>
            <ol className="book-steps load" style={{ animationDelay: ".24s" }}>
              <li><b>Bring the problem</b><span>Such as customers who signed up and never made a first deposit.</span></li>
              <li><b>We check the data</b><span>Which contracts and records we support for it, and what we would read.</span></li>
              <li><b>You see the journey</b><span>How that Loop or campaign would run in OnchainSuite, and which package fits.</span></li>
            </ol>
          </div>
          <div className="book-r load" style={{ animationDelay: ".2s" }}>
            <EarlyAccessForm />
          </div>
        </section>
        <LogoRow label="Trusted by blockchain companies including" />
      </div>
    </SiteChrome>
  );
}
