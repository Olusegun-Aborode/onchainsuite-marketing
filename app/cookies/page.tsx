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
      <p>
        Our website currently sets only strictly necessary cookies. We do not use analytics, advertising, or
        third-party tracking cookies.
      </p>
      <table>
        <tbody>
          <tr><th>Strictly necessary</th><td>Required for the site to function (security, load balancing, and remembering your cookie choice). Always on; no consent required under PECR.</td></tr>
          <tr><th>Analytics, advertising, tracking</th><td>Not used. If we introduce any non-essential cookies in future, we will update this policy and ask for your consent before setting them.</td></tr>
        </tbody>
      </table>

      <h2>3. Managing your choices</h2>
      <p>
        Because we currently set only strictly necessary cookies, we do not show a consent banner. If we introduce
        non-essential cookies, we will ask for your consent first and give you a way to change your choice at any time.
        You can also block or delete cookies in your browser settings, though some features may not work as intended.
      </p>

      <h2>4. Third-party cookies</h2>
      <p>
        We do not currently allow third parties to set cookies through our site. The vendors we use to run the service
        are listed on our <a href="/subprocessors">Sub-processors</a> page; if any begins setting cookies via our site,
        we will update this policy first.
      </p>

      <h2>5. Contact</h2>
      <p>
        Questions about cookies: <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>. See our{" "}
        <a href="/privacy">Privacy Policy</a> for how we handle personal data more generally.
      </p>
    </LegalShell>
  );
}
