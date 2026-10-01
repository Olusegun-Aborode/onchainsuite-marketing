import type { Metadata } from "next";
import ProductPage from "@/components/ns/ProductPage";
import { AudienceScene } from "@/components/ns/Scenes";
import { DOCS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Audience",
  description: "OnchainSuite Audience puts every wallet, email and app account on one customer record, with the channels that reach each person and their lifecycle stage.",
  alternates: { canonical: "/platform/audience" },
};

export default function AudiencePage() {
  return (
    <ProductPage toPoints="Here is what one record changes for your growth team." toNext="Once everyone is on one record, the next step is choosing who to talk to." href="/platform/audience" docs={DOCS.audience}
      title="Every wallet, email and app account on one customer record."
      sub="Audience brings your lists, your product and your contracts together, so each person has one record that shows what they did and how you can reach them."
      scene={<AudienceScene />}
      points={[
        { title: "Two lanes on one record.", body: "What someone did in your app and what their wallet did on-chain are read together, instead of being pieced together from two tools.", art: "lanes" },
        { title: "Contacts with only a wallet.", body: "A customer who never gave you an email still has a record, and you can still reach them in-app.", art: "walletOnly" },
        { title: "Reachable at a glance.", body: "Every record shows which channels work for that person, by email, in-app or both, before you build a campaign.", art: "reach" },
        { title: "Lifecycle stage and health on every record.", body: "Each customer sits in a stage from new to dormant, with a health score and the reasons behind it underneath.", art: "health" },
        { title: "Bring in what you already hold.", body: "Import a CSV or a Google Sheet, connect Segment or Zapier, or link the wallet logins your product already uses, such as Privy, Dynamic and Web3Auth.", art: "importIn" },
        { title: "No guessing who someone is.", body: "We never find someone's email by looking at their wallet. Links come from data you already hold or a connection the customer makes themselves.", art: "noGuess" },
      ]}
      faqs={[
        { q: "What makes a record in OnchainSuite?", a: "A wallet, an email address or an app account can each start a record. When the same person shows up through more than one, the activity goes onto one record rather than three." },
        { q: "Do you find email addresses from wallets?", a: "No. A wallet is only linked to an email or an account when you already hold that link, or when the customer connects them themselves." },
        { q: "How do I reach a wallet with no email?", a: "By in-app message. It appears the next time that wallet opens your product, so it reaches customers who come back rather than people who have gone for good." },
        { q: "Which chains can Audience read?", a: "Ethereum, Base, Arbitrum, Optimism and Polygon, read into one record per customer." },
      ]} />
  );
}
