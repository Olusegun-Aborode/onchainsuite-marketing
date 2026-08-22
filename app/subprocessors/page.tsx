import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Sub-processors",
  description:
    "The categories of third-party sub-processor OnchainSuite uses to provide the service, their purpose, location, and transfer safeguards. Named vendors available on request.",
  alternates: { canonical: "/subprocessors" },
};

// Sub-processors listed by category rather than by named vendor. The specific
// vendors within each category are available to customers on request under NDA.
// Kept in step with the vendor register in the finance SSOT.
const SUBPROCESSORS = [
  { name: "Cloud infrastructure", purpose: "Application hosting, database and cache", location: "United States", safeguard: "UK IDTA / SCCs" },
  { name: "Website hosting", purpose: "Marketing website and CDN", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
  { name: "Email delivery", purpose: "Transactional and campaign email sending", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
  { name: "Email verification", purpose: "List hygiene and deliverability checks", location: "United States", safeguard: "UK IDTA / SCCs" },
  { name: "Blockchain data", purpose: "Wallet and on-chain data indexing", location: "United States", safeguard: "UK IDTA / SCCs" },
  { name: "AI / LLM providers", purpose: "Intelligence: embeddings and natural-language querying", location: "United States, China", safeguard: "UK IDTA / SCCs with supplementary measures" },
  { name: "Payments", purpose: "Billing and payment processing", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
];

export default function SubprocessorsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Sub-processors"
      summary="The third parties we engage to help provide the service. We impose data protection obligations on each and remain responsible for their performance."
      current="/subprocessors"
    >
      <h2>Current sub-processors</h2>
      <p>
        OnchainSuite engages the categories of sub-processor below to deliver the service, as permitted under our{" "}
        <a href="/dpa">Data Processing Agreement</a>. We list them by category; the specific vendors within each category
        are available to customers on request under NDA. Transfers outside the UK are safeguarded as described on our{" "}
        <a href="/data-transfers">International Data Transfers</a> page.
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Location</th>
            <th>Transfer safeguard</th>
          </tr>
        </thead>
        <tbody>
          {SUBPROCESSORS.map((s) => (
            <tr key={s.name}>
              <td>{s.name}</td>
              <td>{s.purpose}</td>
              <td>{s.location}</td>
              <td>{s.safeguard}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Changes &amp; notifications</h2>
      <p>
        We update this page when sub-processors change. As set out in the DPA, we give at least 30 days&rsquo; notice of
        new sub-processors, during which customers may object on reasonable data protection grounds. To be notified of
        changes, contact <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>.
      </p>
    </LegalShell>
  );
}
