import type { Metadata } from "next";
import SiteChrome from "@/components/ns/SiteChrome";
import { LogoRow } from "@/components/ns/Blocks";
import { CAL_URL } from "@/lib/data";
import CloseArt from "@/components/ns/CloseArt";

export const metadata: Metadata = {
  title: "Book a walkthrough",
  description: "Book a fifteen-minute call with OnchainSuite. Bring a problem your team already has and we will show you how that journey would run on your own data.",
  alternates: { canonical: "/early-access" },
  openGraph: { title: "Book a walkthrough · OnchainSuite", url: "/early-access", type: "website",
    description: "A fifteen-minute call with OnchainSuite, on a problem your team already has." },
};

/* Booking runs on Cal.com. The button opens the Cal.com popup (CalBooking catches it); without
   JavaScript it is an ordinary link to the Cal.com page. */
export default function EarlyAccessPage() {
  return (
    <SiteChrome>
      <div className="wrap">
        <section className="book">
          <div className="book-l">
            <h1 className="h1 load" style={{ animationDelay: ".08s" }}>See OnchainSuite on a problem your team already has.</h1>
            <p className="sub load" style={{ animationDelay: ".16s" }}>Pick a time for a fifteen-minute call with our team, and bring the problem you want to solve.</p>
            <ol className="book-steps load" style={{ animationDelay: ".24s" }}>
              <li><b>Bring the problem</b><span>Such as customers who signed up and never made a first deposit.</span></li>
              <li><b>We check the data</b><span>Which records, and on the Suite plan which contracts, we support for it.</span></li>
              <li><b>You see the journey</b><span>How that Loop or campaign would run in OnchainSuite, and which plan fits.</span></li>
            </ol>
            <div className="ctas load" style={{ animationDelay: ".32s", justifyContent: "flex-start" }}>
              <a className="btn solid lg" href={CAL_URL} data-book target="_blank" rel="noreferrer">Choose a time</a>
            </div>
          </div>
          <div className="book-r load" style={{ animationDelay: ".2s" }}><CloseArt /></div>
        </section>
        <LogoRow label="Trusted by blockchain companies including" />
      </div>
    </SiteChrome>
  );
}
