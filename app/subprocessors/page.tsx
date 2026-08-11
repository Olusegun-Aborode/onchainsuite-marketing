import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { LegalShell } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Sub-processors",
  description:
    "The third-party sub-processors OnchainSuite uses to provide the service, their purpose, location, and transfer safeguards.",
  alternates: { canonical: "/subprocessors" },
};

// PLACEHOLDER list, confirm and complete each row with the vendors you actually
// use, their processing location, and the transfer safeguard in place.
const SUBPROCESSORS = [
  { name: "Vercel Inc.", purpose: "Website & application hosting / CDN", location: "United States", safeguard: "EU-US DPF (UK Extension) / SCCs" },
  { name: "[Email delivery provider]", purpose: "Transactional & campaign email delivery", location: "[Country]", safeguard: "[DPF / IDTA / SCCs]" },
  { name: "[Analytics provider]", purpose: "Website & product analytics", location: "[Country]", safeguard: "[DPF / IDTA / SCCs / cookieless]" },
  { name: "[Scheduling provider, e.g. Cal.com]", purpose: "Demo call scheduling", location: "[Country]", safeguard: "[DPF / IDTA / SCCs]" },
  { name: "[On-chain data provider]", purpose: "Blockchain data indexing / RPC", location: "[Country]", safeguard: "[DPF / IDTA / SCCs]" },
  { name: "[Payments provider]", purpose: "Billing & payment processing", location: "[Country]", safeguard: "[DPF / IDTA / SCCs]" },
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
      <p>[Confirm this list against the vendors you actually use, and keep it current.]</p>

      <h2>Changes &amp; notifications</h2>
      <p>
        We update this page when sub-processors change. As set out in the DPA, we give at least 30 days&rsquo; notice of
        new sub-processors, during which customers may object on reasonable data protection grounds. To be notified of
        changes, contact <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>.
      </p>
    </LegalShell>
  );
}
