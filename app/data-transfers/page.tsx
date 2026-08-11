import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "International Data Transfers",
  description:
    "How OnchainSuite safeguards personal data transferred outside the UK, including the UK IDTA, SCCs, and the EU-US Data Privacy Framework (UK Extension).",
  alternates: { canonical: "/data-transfers" },
};

export default function DataTransfersPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="International Data Transfers"
      summary="How we safeguard personal data when it moves outside the UK, including the EU-US Data Privacy Framework (UK Extension), the UK IDTA, and Standard Contractual Clauses."
      current="/data-transfers"
    >
      <h2>1. Why transfers happen</h2>
      <p>
        To run the service, OnchainSuite uses infrastructure and vendors that may be located outside the United Kingdom,
        including in the United States and the European Economic Area (EEA). When personal data moves outside the UK, UK
        GDPR requires an approved safeguard. This page explains the mechanisms we rely on. A list of recipients and their
        locations is on our <a href="/subprocessors">Sub-processors</a> page.
      </p>

      <h2>2. Our role on transfers</h2>
      <p>
        Where we transfer personal data we process on behalf of customers, we act as exporter under the customer&rsquo;s
        instructions. Note that <strong>{COMPANY.legalName} is a UK company and does not itself self-certify under the
        EU-US Data Privacy Framework</strong>, DPF certification applies to organisations in the United States that{" "}
        <em>receive</em> personal data. We rely on our recipients&rsquo; certifications and on the mechanisms below.
      </p>

      <h2>3. Transfer mechanisms we rely on</h2>
      <ul>
        <li>
          <strong>Adequacy</strong>, where the destination has UK &ldquo;adequacy&rdquo; (for example, the EEA), no
          additional safeguard is required.
        </li>
        <li>
          <strong>EU-US Data Privacy Framework, UK Extension (the &ldquo;UK-US data bridge&rdquo;)</strong>, for
          transfers to US vendors that are <strong>self-certified</strong> under the EU-US DPF and its UK Extension, we
          rely on that certification as the safeguard. We check a recipient&rsquo;s active status on the official Data
          Privacy Framework list before relying on it.
        </li>
        <li>
          <strong>UK International Data Transfer Agreement (IDTA), or the UK Addendum to the EU SCCs</strong>, for
          transfers to recipients not covered by adequacy or the DPF, we put the IDTA (or the EU Standard Contractual
          Clauses with the UK Addendum) in place.
        </li>
        <li>
          <strong>EU Standard Contractual Clauses</strong>, for any EEA-origin personal data subject to the EU GDPR.
        </li>
      </ul>

      <h2>4. Transfer risk assessments &amp; supplementary measures</h2>
      <p>
        Where we rely on the IDTA or SCCs, we carry out a transfer risk assessment and, where needed, apply
        supplementary measures (such as encryption in transit and at rest, access controls, and data minimisation) to
        ensure protection essentially equivalent to that under UK law.
      </p>

      <h2>5. Onward transfers</h2>
      <p>
        We require sub-processors to apply equivalent safeguards to any onward transfer of personal data they make on
        our behalf.
      </p>

      <h2>6. Your rights and complaints</h2>
      <p>
        You may ask for information about the safeguards applied to a specific transfer by contacting{" "}
        <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>. You can also complain to the UK ICO at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>. Where a transfer relies on
        a recipient&rsquo;s DPF certification, that framework provides additional redress mechanisms in the United
        States.
      </p>

      <h2>7. Changes</h2>
      <p>
        We will update this page as our vendors, their certifications, or the applicable transfer rules change. See the
        &ldquo;last updated&rdquo; date above.
      </p>
    </LegalShell>
  );
}
