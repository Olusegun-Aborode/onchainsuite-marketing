import Link from "next/link";
import { COMPANY, DOCS_URL } from "@/lib/data";
import CalBooking from "./CalBooking";
import Sprite, { WORDMARK_BOX } from "./Sprite";
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

/* Footer: four short link columns, one bottom line with the copyright, legal links and trust badges,
   then the wordmark set edge to edge and cropped by the page bottom. Company registration details live
   on the Terms and Privacy pages, the comparison pages on /compare and the integration guides in the docs.
   Every link carries a source tag so analytics show which footer link people used. */
type FootLink = { label: string; href: string; tag?: string };
const DOC = "https://docs.onchainsuite.com";
const FOOT: { title: string; items: FootLink[] }[] = [
  { title: "Platform", items: [
    { label: "Audience", href: "/platform/audience" }, { label: "Segments", href: "/platform/segments" }, { label: "Loops", href: "/platform/loops" },
    { label: "Intelligence MCP", href: "/platform/intelligence-mcp", tag: "New" }, { label: "Pricing", href: "/pricing" },
  ] },
  { title: "OnchainSuite for", items: [
    { label: "Blockchain companies", href: "/for/blockchain-companies" }, { label: "Mainstream companies", href: "/for/mainstream-companies" }, { label: "Compare", href: "/compare" },
  ] },
  { title: "Company", items: [
    { label: "Team", href: "/team" }, { label: "Our hypothesis", href: "/hypothesis" }, { label: "Refer a team", href: "/refer", tag: "New" }, { label: "Trust centre", href: "/platform/data" },
  ] },
  { title: "Resources", items: [
    { label: "Docs", href: DOC }, { label: "Help centre", href: `${DOC}/help/faq` }, { label: "Free tools", href: "/tools" },
  ] },
];
const LEGAL: FootLink[] = [
  { label: "Terms", href: "/terms" }, { label: "Privacy", href: "/privacy" }, { label: "DPA", href: "/dpa" }, { label: "Cookies", href: "/cookies" },
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
      <header className="nav" id="nav">
        <div className="nav-in">
          <Logo />
          <NavMenu />
          <div className="acts">
            <Link className="btn solid" href="/early-access">Book a walkthrough</Link>
            <MobileMenu links={NAV_LINKS} />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="ft">
        <div className="wrap ft-in">
          <nav className="ft-cols" aria-label="Footer">
            {FOOT.map((g) => (
              <div key={g.title}>
                <p className="ft-h">{g.title}</p>
                {g.items.map((l) => {
                  const inner = <>{l.label}{l.tag && <em className="foot-tag">{l.tag}</em>}</>;
                  return l.href.startsWith("http")
                    ? <a key={l.label} href={tagged(l.href, l.label)} target="_blank" rel="noreferrer">{inner}<span className="foot-ext" aria-hidden="true">↗</span></a>
                    : <Link key={l.label} href={tagged(l.href, l.label)}>{inner}</Link>;
                })}
              </div>
            ))}
          </nav>
          <div className="ft-bar">
            <div className="ft-legal">
              <span>&copy; {new Date().getFullYear()} {COMPANY.legalName}</span>
              {LEGAL.map((l) => <Link key={l.label} href={tagged(l.href, l.label)}>{l.label}</Link>)}
            </div>
            <div className="ft-badges">
              <span className="trust-b"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5l5.5 2v4c0 3.4-2.3 6-5.5 7-3.2-1-5.5-3.6-5.5-7v-4z" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M5.5 8.2l1.7 1.7 3.3-3.6" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>UK GDPR compliant</span>
              <span className="trust-b"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.5" y="3" width="11" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M5 6.5h6M5 9.5h4" stroke="currentColor" strokeWidth="1.3" /></svg>Registered with the ICO</span>
            </div>
          </div>
        </div>
        <div className="ft-word" aria-hidden="true"><svg viewBox={`0 0 ${WORDMARK_BOX.split(" ").slice(2).join(" ")}`}><use href="#ocs-word" /></svg></div>
      </footer>
      <SiteMotion />
      <CalBooking />
    </div>
  );
}
