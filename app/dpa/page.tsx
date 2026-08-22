import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "OnchainSuite's Data Processing Agreement under Article 28 UK GDPR, including processing details, sub-processors, and technical and organisational measures.",
  alternates: { canonical: "/dpa" },
};

export default function DpaPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Data Processing Agreement"
      summary="The Article 28 terms governing personal data that OnchainSuite processes on behalf of customers, including the technical and organisational measures we apply."
      current="/dpa"
    >
      <h2>1. Parties and role</h2>
      <p>
        This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the <a href="/terms">Terms of Service</a>
        between the Customer (the &ldquo;Controller&rdquo;) and <strong>{COMPANY.legalName}</strong> (the
        &ldquo;Processor&rdquo;). It applies where OnchainSuite processes personal data on the Customer&rsquo;s behalf.
        Where there is a conflict on data protection matters, this DPA prevails.
      </p>

      <h2>2. Definitions</h2>
      <p>
        &ldquo;UK GDPR&rdquo;, &ldquo;controller&rdquo;, &ldquo;processor&rdquo;, &ldquo;personal data&rdquo;,
        &ldquo;processing&rdquo;, &ldquo;data subject&rdquo;, and &ldquo;personal data breach&rdquo; have the meanings
        in the UK GDPR and the Data Protection Act 2018. &ldquo;Applicable Data Protection Law&rdquo; means the UK GDPR,
        the DPA 2018, and, where relevant, the EU GDPR.
      </p>

      <h2>3. Processing on documented instructions</h2>
      <p>
        OnchainSuite processes personal data only on the Customer&rsquo;s documented instructions (including as set out
        in the Terms and this DPA), unless required by law, in which case we will inform the Customer unless legally
        prohibited. We will tell the Customer if, in our opinion, an instruction infringes Applicable Data Protection
        Law.
      </p>

      <h2>4. Details of processing (Annex 1)</h2>
      <table>
        <tbody>
          <tr><th>Subject matter</th><td>Provision of the OnchainSuite behaviour-triggered retention platform.</td></tr>
          <tr><th>Duration</th><td>For the term of the Terms, plus the deletion/return period in section 9.</td></tr>
          <tr><th>Nature &amp; purpose</th><td>Reading and normalising public on-chain activity; storing engagement events; triggering and delivering in-app and email messages on the Customer&rsquo;s behalf.</td></tr>
          <tr><th>Types of personal data</th><td>Wallet/public addresses and on-chain activity; opt-in contact identifiers (e.g. email); engagement events (opens, clicks, in-app interactions); segment membership. No special category data is required or intended.</td></tr>
          <tr><th>Categories of data subjects</th><td>The Customer&rsquo;s end users and wallet holders.</td></tr>
        </tbody>
      </table>

      <h2>5. Confidentiality</h2>
      <p>
        We ensure that personnel authorised to process personal data are bound by confidentiality and are trained on
        their obligations, on a need-to-know, least-privilege basis.
      </p>

      <h2>6. Security</h2>
      <p>
        Taking account of the state of the art and the risk, we implement the technical and organisational measures set
        out in <strong>Annex 2</strong> below, and may update them provided protection is not materially reduced.
      </p>

      <h2>7. Sub-processors</h2>
      <p>
        The Customer gives general authorisation for OnchainSuite to engage sub-processors to provide the service. A
        current list is maintained on our <a href="/subprocessors">Sub-processors</a> page. We impose data protection
        obligations on each sub-processor that are no less protective than this DPA and remain responsible for their
        performance. We will give at least 30 days&rsquo; notice of new sub-processors (via the Sub-processors page or
        email), during which the Customer may object on reasonable data protection grounds.
      </p>

      <h2>8. Assistance to the Controller</h2>
      <ul>
        <li>We assist the Customer, by appropriate measures, to respond to data subject requests (access, rectification, erasure, restriction, portability, objection).</li>
        <li>We assist with the Customer&rsquo;s obligations on security, breach notification, data protection impact assessments, and prior consultation (Articles 32–36), taking account of the information available to us.</li>
        <li>We notify the Customer <strong>without undue delay</strong> after becoming aware of a personal data breach affecting their data, with the information reasonably available to help them meet their notification duties.</li>
      </ul>

      <h2>9. Return or deletion</h2>
      <p>
        On termination, and at the Customer&rsquo;s choice, we delete or return the personal data and delete existing
        copies, unless retention is required by law. Routine deletion occurs within 90 days of termination.
      </p>

      <h2>10. Audits</h2>
      <p>
        We make available information necessary to demonstrate compliance with Article 28 and allow for and contribute
        to audits, including inspections, by the Customer or an auditor it mandates, subject to reasonable notice,
        confidentiality, and frequency. We may satisfy audit requests by providing third-party reports or certifications
        where available.
      </p>

      <h2>11. International transfers</h2>
      <p>
        Any transfer of personal data outside the UK is made under an approved transfer mechanism as described on our{" "}
        <a href="/data-transfers">International Data Transfers</a> page, which forms part of this DPA.
      </p>

      <h2>12. Liability &amp; governing law</h2>
      <p>
        Each party&rsquo;s liability under this DPA is subject to the limitations in the Terms. This DPA is governed by
        the laws of {COMPANY.jurisdiction}.
      </p>

      <h2>Annex 2, Technical and organisational measures</h2>
      <ul>
        <li><strong>Encryption</strong>, personal data encrypted in transit (TLS) and at rest.</li>
        <li><strong>Access control</strong>, role-based, least-privilege access; unique credentials; multi-factor authentication for administrative access; prompt revocation on role change.</li>
        <li><strong>Non-custodial, read-only chain access</strong>, we never custody assets and never initiate or sign transactions; on-chain access is read-only.</li>
        <li><strong>Pseudonymisation &amp; data minimisation</strong>, we collect and link contact identifiers only on opt-in and only what is needed for the service.</li>
        <li><strong>Network &amp; application security</strong>, segregation, hardened infrastructure, secrets management, dependency and vulnerability management.</li>
        <li><strong>Logging &amp; monitoring</strong>, audit logging of administrative access and security-relevant events.</li>
        <li><strong>Resilience</strong>, backups, recovery procedures, and tested business continuity.</li>
        <li><strong>Vendor management</strong>, due diligence and data protection terms with sub-processors.</li>
        <li><strong>Personnel</strong>, confidentiality undertakings and security awareness training.</li>
        <li><strong>Breach response</strong>, documented incident response and notification process.</li>
      </ul>
      <p>
        [Align this annex with your actual implemented controls and any certification you hold or are pursuing
        (e.g. ISO 27001 / SOC 2).]
      </p>
    </LegalShell>
  );
}
