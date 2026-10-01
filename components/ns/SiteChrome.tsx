import Link from "next/link";
import { APP_URL, COMPANY, DOCS_URL } from "@/lib/data";
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

const FOOT = [
  { title: "Platform", items: [["Audience", "/platform/audience"], ["Segments", "/platform/segments"], ["Loops", "/platform/loops"], ["Intelligence MCP", "/platform/intelligence-mcp"], ["How we use data", "/platform/data"], ["Pricing", "/pricing"]] },
  { title: "Resources", items: [["Compare", "/compare"], ["Free tools", "/tools"], ["Docs", DOCS_URL]] },
  { title: "Company", items: [["Team", "/team"], ["Book a walkthrough", "/early-access"]] },
  { title: "Legal", items: [["Terms", "/terms"], ["Privacy", "/privacy"], ["Data processing agreement", "/dpa"], ["Sub-processors", "/subprocessors"], ["Cookies", "/cookies"]] },
];

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
            {FOOT.map((c) => (
              <div key={c.title}>
                <h6>{c.title}</h6>
                {c.items.map(([label, href]) => href.startsWith("http") ? <a key={href + label} href={href} target="_blank" rel="noreferrer">{label}</a> : <Link key={href + label} href={href}>{label}</Link>)}
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
    </div>
  );
}
