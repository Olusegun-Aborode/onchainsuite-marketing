import { CSSProperties } from "react";
import type { Metadata } from "next";
import { ACCENT, ACCENT_HOVER, OK, PARTNERS } from "@/lib/data";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/StaticSections";

export const metadata: Metadata = {
  title: "Team",
  description: "The people building OnchainSuite, the retention layer for Web3, and the advisors backing it.",
  alternates: { canonical: "/team" },
};

const themeVars = { "--acc": ACCENT, "--acc-h": ACCENT_HOVER, "--ok": OK, minHeight: "100vh", background: "#FBFBFC", overflowX: "clip", color: "#010F31" } as CSSProperties;
const wrap = { maxWidth: 1080, margin: "0 auto" };
const mono = "'JetBrains Mono',monospace";

// Founders per the company plan. Swap the initials avatars for real photos:
// drop the images in /public and replace the avatar block.
const FOUNDERS = [
  { name: "Olusegun Aborode", role: "Co-founder & CEO", initials: "OA", color: "#1727E0", bio: "Leads product and company direction. Blockchain data engineer by background, focused on turning on-chain behaviour into something teams can act on." },
  { name: "Joshua Obafemi", role: "Co-founder & CTO", initials: "JB", color: "#2F94FF", bio: "Leads engineering and the platform. Builds the indexing, identity and delivery layer that makes on-chain activity messageable." },
  { name: "Joel Obafemi", role: "Co-founder & Head of Analytics", initials: "JE", color: "#8B7CF6", bio: "Leads analytics and go-to-market. Turns wallet data into the segments and benchmarks that drive retention." },
];

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div style={{ width: 72, height: 72, borderRadius: 999, background: `color-mix(in oklab, ${color} 12%, #fff)`, border: `1px solid color-mix(in oklab, ${color} 30%, #fff)`, display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", flex: "none" }}>
      {initials}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div style={themeVars}>
      <SiteHeader />

      <section style={{ ...wrap, padding: "76px 40px 44px" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83" }}>Team</div>
        <h1 style={{ margin: "16px 0 0", fontSize: "clamp(38px,5vw,56px)", lineHeight: 1.03, letterSpacing: "-1px", fontWeight: 600, maxWidth: "18ch", color: "#010F31" }}>The people building OnchainSuite.</h1>
        <p style={{ margin: "20px 0 0", maxWidth: "56ch", fontSize: 17, lineHeight: 1.65, color: "#585D65" }}>A small team of blockchain data and growth people building the retention layer Web3 never had, so protocols can keep the users they work so hard to win.</p>
      </section>

      {/* Founders */}
      <section style={{ ...wrap, padding: "8px 40px 0" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 20 }}>Founders</div>
        <div className="ocs-team-grid">
          {FOUNDERS.map((f) => (
            <div key={f.name} style={{ background: "#FFFFFF", border: "1px solid #DEE0E3", borderRadius: 6, padding: 26 }}>
              <Avatar initials={f.initials} color={f.color} />
              <div style={{ margin: "16px 0 2px", fontSize: 19, fontWeight: 600, letterSpacing: "-0.2px", color: "#010F31" }}>{f.name}</div>
              <div style={{ fontFamily: mono, fontSize: 12.5, color: "#1727E0" }}>{f.role}</div>
              <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#585D65" }}>{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section style={{ ...wrap, padding: "56px 40px 0" }} data-pad>
        <div style={{ background: "#F5F6F7", border: "1px solid #DEE0E3", borderRadius: 6, padding: 36 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 12 }}>Advisors</div>
          <h2 style={{ margin: "0 0 10px", fontSize: 26, letterSpacing: "-0.5px", fontWeight: 600, color: "#010F31" }}>We are assembling our advisory board.</h2>
          <p style={{ margin: 0, maxWidth: "60ch", fontSize: 15.5, lineHeight: 1.65, color: "#585D65" }}>We are bringing on advisors across DeFi, growth and security to sharpen the product and open doors. Announcements soon. If you have built or scaled a Web3 protocol and want to help,{" "}
            <a href="mailto:info@onchainsuite.com" style={{ color: "#1727E0", fontWeight: 600 }}>get in touch</a>.
          </p>
        </div>
      </section>

      {/* Credibility */}
      <section style={{ ...wrap, padding: "56px 40px 0" }} data-pad>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", marginBottom: 20 }}>Trusted by teams building on-chain</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 40px", alignItems: "center" }}>
          {PARTNERS.trusted.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="ocs-wordmark" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.3px", color: "#767B83", textDecoration: "none" }}>{p.name}</a>
          ))}
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#767B83", margin: "40px 0 18px" }}>Built on</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 32px", alignItems: "center" }}>
          {PARTNERS.builtOn.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="ocs-wordmark" style={{ fontSize: 16, fontWeight: 500, color: "#767B83", textDecoration: "none" }}>{p.name}</a>
          ))}
        </div>
      </section>

      {/* Company facts */}
      <section style={{ ...wrap, padding: "56px 40px 88px" }} data-pad>
        <div className="ocs-team-facts">
          {[
            { k: "Company", v: "OnchainSuite Ltd" },
            { k: "Registered", v: "England & Wales · 17370357" },
            { k: "Based", v: "Birmingham, United Kingdom" },
            { k: "Stage", v: "Early access" },
          ].map((f) => (
            <div key={f.k}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#767B83", marginBottom: 6 }}>{f.k}</div>
              <div style={{ fontSize: 15.5, fontWeight: 500, color: "#010F31" }}>{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
      <style>{`
        .ocs-team-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
        .ocs-team-facts { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; border-top:1px solid #DEE0E3; padding-top:28px; }
        .ocs-wordmark { transition:color .12s ease; }
        .ocs-wordmark:hover { color:#010F31; }
        @media (max-width:900px){ .ocs-team-grid { grid-template-columns:1fr; } .ocs-team-facts { grid-template-columns:1fr 1fr; gap:20px; } }
      `}</style>
    </div>
  );
}
