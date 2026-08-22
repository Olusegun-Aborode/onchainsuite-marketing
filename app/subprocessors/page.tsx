import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Sub-processors",
  description:
    "The third-party sub-processors OnchainSuite uses to provide the service, their purpose, location, and transfer safeguards.",
  alternates: { canonical: "/subprocessors" },
};

// Current sub-processors, from the vendor register in the finance SSOT.
// Email runs on AWS SES only (Azure Communication Services was retired); the
// application moved from Vercel/Render/Neon/Upstash to DigitalOcean on 20 Aug 2026,
// while the marketing site still runs on Vercel. Keep in step with the register.
const SUBPROCESSORS = [
  { name: "DigitalOcean, LLC", purpose: "Application hosting, database and cache (Postgres, Redis, queues)", location: "United States", safeguard: "UK IDTA / SCCs" },
  { name: "Vercel Inc.", purpose: "Marketing website hosting and CDN", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
  { name: "Amazon Web Services, Inc. (SES)", purpose: "Transactional and campaign email delivery", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
  { name: "Kickbox (Cloud Manic, LLC)", purpose: "Email address verification and list hygiene", location: "United States", safeguard: "UK IDTA / SCCs" },
  { name: "GoldRush (Covalent)", purpose: "Blockchain and wallet data indexing", location: "United States", safeguard: "UK IDTA / SCCs" },
  { name: "OpenAI, L.L.C.", purpose: "Text embeddings for the Intelligence feature", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
  { name: "DeepSeek", purpose: "Natural-language querying (LLM) for the Intelligence feature", location: "China", safeguard: "UK IDTA / SCCs with supplementary measures" },
  { name: "Stripe, Inc.", purpose: "Billing and payment processing", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
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
        OnchainSuite engages the sub-processors below to deliver the service, as permitted under our{" "}
        <a href="/dpa">Data Processing Agreement</a>. Transfers outside the UK are safeguarded as described on our{" "}
        <a href="/data-transfers">International Data Transfers</a> page.
      </p>
      <table>
        <thead>
          <tr>
            <th>Sub-processor</th>
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
