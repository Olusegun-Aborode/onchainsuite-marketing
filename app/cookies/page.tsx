import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How OnchainSuite uses cookies and similar technologies under PECR and UK GDPR, and how to manage your preferences.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Cookie Policy"
      summary="How we use cookies and similar technologies, and how you can control them. Read alongside our Privacy Policy."
      current="/cookies"
    >
      <h2>1. What cookies are</h2>
      <p>
        Cookies are small files stored on your device. We also use similar technologies such as local storage and
        pixels. Under the Privacy and Electronic Communications Regulations (PECR) and UK GDPR, we set non-essential
        cookies only with your consent.
      </p>

      <h2>2. Categories we use</h2>
      <table>
        <tbody>
          <tr><th>Strictly necessary</th><td>Required for the site to function (security, load balancing, remembering your cookie choice). Always on; no consent required.</td></tr>
          <tr><th>Analytics / performance</th><td>Help us understand usage so we can improve the site. Set only with consent. [Name your provider, e.g. a privacy-friendly analytics tool, and whether it is cookieless.]</td></tr>
          <tr><th>Preferences</th><td>Remember choices such as display settings. Set only with consent where non-essential.</td></tr>
        </tbody>
      </table>
      <p>
        [Replace the rows above with the actual cookies you set once analytics is live, include name, provider,
        purpose, and duration. If you adopt a cookieless analytics tool, say so here.]
      </p>

      <h2>3. Managing your choices</h2>
      <p>
        Where we use non-essential cookies, we present a consent banner on your first visit and you can change your
        choice at any time via [your cookie settings link]. You can also block or delete cookies in your browser
        settings, though some features may not work as intended.
      </p>

      <h2>4. Third-party cookies</h2>
      <p>
        Some cookies may be set by third parties we use (for example, analytics or embedded scheduling). Their use is
        governed by their own policies; relevant vendors are listed on our <a href="/subprocessors">Sub-processors</a>{" "}
        page.
      </p>

      <h2>5. Contact</h2>
      <p>
        Questions about cookies: <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>. See our{" "}
        <a href="/privacy">Privacy Policy</a> for how we handle personal data more generally.
      </p>
    </LegalShell>
  );
}
