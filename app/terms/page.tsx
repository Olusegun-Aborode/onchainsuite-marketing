import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing access to and use of the OnchainSuite platform and early-access programme, governed by the laws of England and Wales.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      summary="The agreement between you and OnchainSuite for access to and use of the platform and early-access programme."
      current="/terms"
    >
      <h2>1. Agreement</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are a binding agreement between you (or the organisation you
        represent, the &ldquo;Customer&rdquo;) and <strong>{COMPANY.legalName}</strong> (&ldquo;OnchainSuite&rdquo;),
        registered in {COMPANY.jurisdiction} (company number {COMPANY.number}). By accessing the website, requesting
        early access, or using the platform, you agree to these Terms. If you do not agree, do not use the service.
      </p>

      <h2>2. Eligibility &amp; authority</h2>
      <p>
        The service is for business use. You confirm that you are at least 18, that you have authority to bind the
        organisation you act for, and that your use complies with all laws applicable to you.
      </p>

      <h2>3. The service and early access</h2>
      <p>
        OnchainSuite provides behaviour-triggered retention tooling for Web3 teams: it reads public on-chain activity,
        normalises it, and lets you trigger in-app and email messaging. During the early-access period the service is
        provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, may change or be discontinued, and may
        contain features that are incomplete or evolving. Founding rates offered during early access apply on the terms
        communicated to you at sign-up.
      </p>

      <h2>4. Accounts &amp; acceptable use</h2>
      <p>You are responsible for your account, credentials, and the activity under it. You agree not to:</p>
      <ul>
        <li>use the service unlawfully, or to send unlawful, deceptive, or unsolicited messages (you are responsible for your own compliance with PECR/UK GDPR and equivalent marketing and anti-spam laws);</li>
        <li>infringe others&rsquo; rights, or upload data you have no lawful basis or consent to process;</li>
        <li>attempt to breach security, reverse engineer, scrape, overload, or disrupt the service; or</li>
        <li>resell or provide the service to third parties except as expressly permitted.</li>
      </ul>

      <h2>5. Customer data, privacy, and data protection</h2>
      <p>
        For personal data you process through the platform, <strong>you are the controller and OnchainSuite is your
        processor</strong>. Our <a href="/dpa">Data Processing Agreement</a> forms part of these Terms and applies to
        that processing. You warrant that you have a valid lawful basis and have given all required notices for the
        wallet, contact, and engagement data you bring to the platform, including for any opt-in linking of wallets to
        contact identifiers. Our handling of your own data is described in the <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>6. Fees</h2>
      <p>
        Paid plans are usage-based (a base fee plus tracked wallets and email subscribers), billed as described at
        sign-up or in an order. Fees are exclusive of VAT and other taxes, which you are responsible for. During early
        access, pricing may be discounted or waived and is subject to the founding-rate terms provided to you.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        OnchainSuite and its licensors own all rights in the service, software, and brand. We grant you a limited,
        non-exclusive, non-transferable right to use the service during your subscription. You retain all rights in your
        data; you grant us the rights needed to provide the service. Feedback you give may be used without obligation.
      </p>

      <h2>8. Third-party services and on-chain data</h2>
      <p>
        The service reads public blockchain data and may integrate third-party services that have their own terms. We
        are <strong>non-custodial</strong>: we never hold assets and never initiate or sign transactions. Nothing in
        the service is financial, investment, legal, or tax advice.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        To the fullest extent permitted by law, the service is provided &ldquo;as is&rdquo; without warranties of any
        kind, express or implied, including fitness for a particular purpose, accuracy, and non-infringement. We do not
        warrant that the service will be uninterrupted or error-free, or that on-chain data will be complete or
        accurate.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        Nothing in these Terms limits liability that cannot be limited by law (including for death or personal injury
        caused by negligence, or for fraud). Subject to that, OnchainSuite is not liable for indirect, incidental, or
        consequential loss, or loss of profits, revenue, data, or goodwill; and our total aggregate liability is limited
        to the greater of the fees you paid in the [12] months before the claim or £[100]. [Liability caps must be set
        with legal advice.]
      </p>

      <h2>11. Indemnity</h2>
      <p>
        You will indemnify OnchainSuite against claims arising from your data, your use of the service in breach of
        these Terms, or your breach of applicable law.
      </p>

      <h2>12. Term &amp; termination</h2>
      <p>
        These Terms apply while you use the service. Either party may terminate as set out in an order or, for
        early-access use, on notice. We may suspend or terminate access for breach or risk to the service. On
        termination, your right to use the service ends and data is handled per the <a href="/dpa">DPA</a> and{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>13. Governing law &amp; jurisdiction</h2>
      <p>
        These Terms and any dispute arising from them are governed by the laws of {COMPANY.jurisdiction}, and the courts
        of {COMPANY.jurisdiction} have exclusive jurisdiction.
      </p>

      <h2>14. Changes &amp; contact</h2>
      <p>
        We may update these Terms; material changes will be posted here with a revised date. Questions:{" "}
        <a href={`mailto:${COMPANY.legalEmail}`}>{COMPANY.legalEmail}</a>.
      </p>
    </LegalShell>
  );
}
