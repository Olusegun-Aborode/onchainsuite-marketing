import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How OnchainSuite collects, uses, and protects personal data under UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      summary="How we collect, use, share, and protect personal data, and the rights you have under UK GDPR and the Data Protection Act 2018."
      current="/privacy"
    >
      <h2>1. Who we are</h2>
      <p>
        This policy is issued by <strong>{COMPANY.legalName}</strong> (&ldquo;OnchainSuite&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;), a company registered in {COMPANY.jurisdiction} (company number {COMPANY.number}), with its
        registered office at {COMPANY.office}. We have applied to register with the UK Information
        Commissioner&rsquo;s Office (ICO) as a fee payer (application number {COMPANY.icoApplication}); this page
        will show our registration reference once the ICO confirms it.
      </p>
      <p>
        For questions about this policy or your personal data, contact{" "}
        <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>, or our data protection contact at{" "}
        <a href={`mailto:${COMPANY.dpoEmail}`}>{COMPANY.dpoEmail}</a>.
      </p>

      <h2>2. When we are a controller vs a processor</h2>
      <p>
        OnchainSuite plays two different roles, and which one applies determines whose privacy policy governs:
      </p>
      <ul>
        <li>
          <strong>As a controller</strong>, for personal data we decide the purposes of: website visitors, prospects
          who request early access, and the administrators of customer accounts. This policy covers that data.
        </li>
        <li>
          <strong>As a processor</strong>, for personal data we process on behalf of our customers (the protocols and
          teams who use the platform), including the on-chain and engagement data of their end users. There, the{" "}
          <strong>customer is the controller</strong>, their own privacy notice applies to their end users, and our{" "}
          <a href="/dpa">Data Processing Agreement</a> governs how we handle that data on their instructions.
        </li>
      </ul>

      <h2>3. Personal data we collect</h2>
      <h3>Website &amp; marketing</h3>
      <ul>
        <li>Contact details you submit (name, work email, protocol/company, role, and anything in free-text fields).</li>
        <li>Usage and device data (pages viewed, referrer, approximate location from IP, browser) via cookies and analytics, see our <a href="/cookies">Cookie Policy</a>.</li>
      </ul>
      <h3>Account &amp; billing (for customers)</h3>
      <ul>
        <li>Account administrator details, authentication data, and billing/contact information.</li>
      </ul>
      <h3>On-chain &amp; wallet data</h3>
      <p>
        The platform reads <strong>public blockchain data</strong> (wallet addresses and their on-chain activity). On
        its own a wallet address is pseudonymous, but it can become <strong>personal data under UK GDPR</strong> when
        it is, or can be, linked to an identifiable person. An email address or other contact identifier is linked to a
        wallet <strong>only where the wallet holder opts in</strong>. We do not custody assets and never initiate or
        sign transactions; on-chain access is read-only.
      </p>

      <h2>4. Our lawful bases (UK GDPR Article 6)</h2>
      <ul>
        <li><strong>Consent</strong>, for non-essential cookies/analytics and optional marketing communications. You may withdraw consent at any time.</li>
        <li><strong>Contract</strong>, to provide the service to customers and administer accounts.</li>
        <li><strong>Legitimate interests</strong>, to operate, secure, and improve the site and product, and to respond to enquiries, balanced against your rights.</li>
        <li><strong>Legal obligation</strong>, to comply with law (e.g. tax, accounting, and responding to lawful requests).</li>
      </ul>

      <h2>5. How we use personal data</h2>
      <ul>
        <li>To respond to early-access requests, schedule calls, and communicate about the product.</li>
        <li>To provide, maintain, secure, and improve the website and platform.</li>
        <li>To process payments and manage the customer relationship.</li>
        <li>To meet legal, regulatory, and security obligations and to detect and prevent abuse.</li>
      </ul>

      <h2>6. Sharing and sub-processors</h2>
      <p>
        We share personal data with vendors who help us run the service (hosting, email delivery, analytics,
        scheduling, payments). These act as our processors under contract and only on our instructions. A current list
        is on our <a href="/subprocessors">Sub-processors</a> page. We may also disclose data where required by law, to
        protect our rights, or as part of a corporate transaction. We do not sell personal data.
      </p>

      <h2>7. International transfers</h2>
      <p>
        Some vendors are located outside the UK (for example, in the United States). Where personal data is transferred
        outside the UK, we put in place an approved safeguard, the UK International Data Transfer Agreement (IDTA) or
        the UK Addendum to the EU SCCs, and/or reliance on the EU-US Data Privacy Framework (UK Extension) where the
        recipient is certified. Details are on our <a href="/data-transfers">International Data Transfers</a> page.
      </p>

      <h2>8. Retention</h2>
      <p>
        We keep personal data only as long as necessary for the purposes above, then delete or anonymise it. Prospect
        and enquiry data is retained for up to 24 months from last contact; customer account
        and billing records are kept for the life of the contract and for 6 years afterwards
        to meet legal and tax obligations. Data we process on behalf of customers is retained per the{" "}
        <a href="/dpa">DPA</a>.
      </p>

      <h2>9. Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>access a copy of your personal data;</li>
        <li>rectify inaccurate data and complete incomplete data;</li>
        <li>erase data (&ldquo;right to be forgotten&rdquo;) in certain circumstances;</li>
        <li>restrict or object to certain processing, including direct marketing;</li>
        <li>data portability; and</li>
        <li>withdraw consent at any time, without affecting prior lawful processing.</li>
      </ul>
      <p>
        To exercise any right, contact <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>. You also
        have the right to complain to the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>{" "}
        (or your local supervisory authority), though we&rsquo;d appreciate the chance to resolve it first. If your data
        is processed by a customer of ours (us acting as processor), please direct requests to that customer.
      </p>

      <h2>10. Security</h2>
      <p>
        We use technical and organisational measures appropriate to the risk, including encryption in transit and at
        rest, access controls and least-privilege, read-only and non-custodial on-chain access, logging, and vendor due
        diligence. Our detailed measures are described in the annex to the <a href="/dpa">DPA</a>. No system is
        perfectly secure, but we work to protect your data and to notify the relevant parties promptly if a reportable
        breach occurs.
      </p>

      <h2>11. Cookies</h2>
      <p>
        We use cookies and similar technologies as described in our <a href="/cookies">Cookie Policy</a>. Non-essential
        cookies are set only with your consent.
      </p>

      <h2>12. Children</h2>
      <p>
        The service is for business use and is not directed at children. We do not knowingly collect personal data from
        anyone under 18.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be posted here with a revised &ldquo;last
        updated&rdquo; date and, where appropriate, notified to you directly.
      </p>

      <h2>14. Contact</h2>
      <p>
        {COMPANY.legalName}, {COMPANY.office}. Privacy enquiries:{" "}
        <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>. Data protection contact:{" "}
        <a href={`mailto:${COMPANY.dpoEmail}`}>{COMPANY.dpoEmail}</a>.
      </p>
    </LegalShell>
  );
}
