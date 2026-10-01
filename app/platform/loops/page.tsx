import type { Metadata } from "next";
import ProductPage from "@/components/ns/ProductPage";
import { LoopScene } from "@/components/ns/Scenes";
import { DOCS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Loops",
  description: "OnchainSuite Loops are automated customer journeys that start from on-chain and off-chain activity, send by email or in-app, and stop when the customer acts.",
  alternates: { canonical: "/platform/loops" },
};

export default function LoopsPage() {
  return (
    <ProductPage toPoints="Here is what a Loop does once it is running." toNext="When you are not sure who needs a Loop, you can ask the Intelligence MCP." href="/platform/loops" docs={DOCS.automation}
      title="Journeys that start on-chain and stop the moment the customer acts."
      sub="A Loop is an automated customer journey. It waits, checks a condition, sends by email or in-app, and ends when the action is recorded on your contract."
      scene={<LoopScene />}
      points={[
        { title: "Starts from the chain.", body: "Six on-chain triggers, including a wallet going dormant, capital withdrawn and a holder acquired, sit next to form submissions, list joins and email opens.", art: "chainTrigger" },
        { title: "Stops when the customer acts.", body: "A Loop reads the contract, so the moment someone makes the deposit you were waiting for, they leave the journey and stop getting nudges.", art: "stopsWhenActs" },
        { title: "Email and in-app in one journey.", body: "Send an email, wait three days, then show an in-app message to the wallets that did not respond.", art: "emailInapp" },
        { title: "Holdouts on every Loop.", body: "Hold a share of customers back so the lift you report is measured against people who got nothing.", art: "holdout" },
        { title: "Every entry accounted for.", body: "See who completed, who is still waiting and who left, and why, from the Loop's own stats.", art: "entries" },
        { title: "Templates to start from.", body: "Begin with a welcome, a dormant win-back or a first-trade nudge, and change it to fit your product.", art: "templates" },
      ]}
      faqs={[
        { q: "What is a Loop?", a: "One automated customer journey, started by one behaviour. It can wait, branch on a condition, send by email or in-app, and it ends when the customer does what it was waiting for." },
        { q: "Can a Loop start from something that happens off-chain?", a: "Yes. As well as the on-chain triggers, a Loop can start when someone submits a form, joins a list, enters a segment or opens an email." },
        { q: "How do I know a Loop worked?", a: "Every Loop can hold a share of customers back, so you compare people who went through it with people who did not, and the conversion counts what happened on-chain." },
      ]} />
  );
}
