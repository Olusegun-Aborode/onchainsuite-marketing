import Link from "next/link";
import { APP_URL, COMPANY, DOCS_URL } from "@/lib/data";
import CalBooking from "./CalBooking";
import Sprite from "./Sprite";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import SiteMotion from "./SiteMotion";

/* The redesigned site's frame: announcement bar, sticky nav, footer and the shared SVG sprite.
   Every page in the new design renders inside this, so the nav, footer and scroll motion match. */

export const NAV_LINKS = [
  { href: "/compare", label: "Compare" },
  { href: "/tools", label: "Free tools" },
  { href: DOCS_URL, label: "Developers" },
  { href: "/pricing", label: "Pricing" },
];

/* Footer, laid out like Attio's: grouped columns, a "New" tag, an arrow on links that leave the site,
   and a source tag on every link so analytics show which footer link people used. Integrations are
   only the ones the docs describe; "Switching from" goes to each comparison page. */
type FootLink = { label: string; href: string; tag?: string };
const DOC = "https://docs.onchainsuite.com";
const FOOT: { title: string; items: FootLink[] }[][] = [
  [
    { title: "Platform", items: [
      { label: "Audience", href: "/platform/audience" }, { label: "Segments", href: "/platform/segments" }, { label: "Loops", href: "/platform/loops" },
      { label: "Intelligence MCP", href: "/platform/intelligence-mcp", tag: "New" }, { label: "How we use data", href: "/platform/data" }, { label: "Pricing", href: "/pricing" },
    ] },
    { title: "Company", items: [
      { label: "Team", href: "/team" }, { label: "Our hypothesis", href: "/hypothesis" }, { label: "Refer a team", href: "/refer", tag: "New" },
    ] },
  ],
  [
    { title: "OnchainSuite for", items: [
      { label: "Blockchain companies", href: "/for/blockchain-companies" }, { label: "Mainstream companies", href: "/for/mainstream-companies" },
    ] },
    { title: "Switching from", items: [
      { label: "Klaviyo", href: "/compare/klaviyo" }, { label: "Customer.io", href: "/compare/customer-io" }, { label: "Braze", href: "/compare/braze" },
      { label: "Brevo", href: "/compare/brevo" }, { label: "SendGrid", href: "/compare/sendgrid" }, { label: "Dotdigital", href: "/compare/dotdigital" }, { label: "EmailOctopus", href: "/compare/emailoctopus" },
    ] },
  ],
  [
    { title: "Integrations", items: [
      { label: "In-app SDK", href: `${DOC}/integrations/in-app-notifications` }, { label: "Mobile push", href: `${DOC}/integrations/in-app-notifications` },
      { label: "Server API", href: `${DOC}/integrations/server-api` }, { label: "Webhooks", href: `${DOC}/api/webhooks` }, { label: "Custom events", href: `${DOC}/integrations/custom-events` },
      { label: "Forms", href: `${DOC}/integrations/forms` }, { label: "Wallet and contract data", href: `${DOC}/integrations/wallet-and-contract-data` },
      { label: "CSV and JSON import", href: `${DOC}/audience/imports-and-exports` },
    ] },
  ],
  [
    { title: "Resources", items: [
      { label: "Compare", href: "/compare" }, { label: "Free tools", href: "/tools" }, { label: "Docs", href: DOC }, { label: "Help centre", href: `${DOC}/help/faq` },
      { label: "Troubleshooting", href: `${DOC}/help/troubleshooting` }, { label: "Hire an expert", href: "/pricing#cmp-h" }, { label: "Trust centre", href: "/platform/data" },
    ] },
    { title: "Legal", items: [
      { label: "Terms", href: "/terms" }, { label: "Privacy", href: "/privacy" }, { label: "Data processing agreement", href: "/dpa" }, { label: "Sub-processors", href: "/subprocessors" }, { label: "Cookies", href: "/cookies" },
    ] },
  ],
];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
const tagged = (href: string, label: string) => { const [path, hash] = href.split("#"); return `${path}${path.includes("?") ? "&" : "?"}source=footer_${slug(label)}${hash ? "#" + hash : ""}`; };

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link className="logo" href="/" aria-label="OnchainSuite home">
      <svg className="mark" aria-hidden="true"><use href="#ocs-mark" fill={dark ? "#FFFFFF" : "url(#mg)"} /></svg>
      OnchainSuite
    </Link>
  );
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="ns">
      <Sprite />
      <div className="bar"><Link href="/#platform"><b>OnchainSuite v2.7</b> adds lifecycle stages, health scores and holdouts<span>→</span></Link></div>
      <header className="nav" id="nav">
        <div className="nav-in">
          <Logo />
          <NavMenu />
          <div className="acts">
            <a className="btn" href={APP_URL}>Sign in</a>
            <Link className="btn solid" href="/early-access">Book a walkthrough</Link>
            <MobileMenu links={NAV_LINKS} />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="dark" data-dark>
        <div className="wrap" style={{ border: 0 }}>
          <div className="foot">
            <div><Logo dark /></div>
            {FOOT.map((col, ci) => (
              <div key={ci} className="foot-col">
                {col.map((g) => (
                  <div key={g.title} className="foot-g">
                    <h6>{g.title}</h6>
                    {g.items.map((l) => {
                      const inner = <>{l.label}{l.tag && <em className="foot-tag">{l.tag}</em>}</>;
                      return l.href.startsWith("http")
                        ? <a key={l.label} href={tagged(l.href, l.label)} target="_blank" rel="noreferrer">{inner}<span className="foot-ext" aria-hidden="true">↗</span></a>
                        : <Link key={l.label} href={tagged(l.href, l.label)}>{inner}</Link>;
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="trust-row">
            <span className="trust-b"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5l5.5 2v4c0 3.4-2.3 6-5.5 7-3.2-1-5.5-3.6-5.5-7v-4z" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M5.5 8.2l1.7 1.7 3.3-3.6" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>UK GDPR compliant</span>
            <span className="trust-b"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.5" y="3" width="11" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M5 6.5h6M5 9.5h4" stroke="currentColor" strokeWidth="1.3" /></svg>Registered with the ICO</span>
          </div>
          <div className="legal">
            <span>{COMPANY.legalName}, company number 17370357, registered in {COMPANY.jurisdiction}.</span>
            <span>We read public blockchain data and never hold funds or private keys.</span>
          </div>
        </div>
      </footer>
      <SiteMotion />
      <CalBooking />
    </div>
  );
}
