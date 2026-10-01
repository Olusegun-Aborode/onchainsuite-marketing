import type { Metadata } from "next";
import ProductPage from "@/components/ns/ProductPage";
import { SegmentScene } from "@/components/ns/Scenes";
import { DOCS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Segments",
  description: "Build OnchainSuite segments from what customers did and from what they have not done, by describing the audience in a sentence and seeing a live count.",
  alternates: { canonical: "/platform/segments" },
};

export default function SegmentsPage() {
  return (
    <ProductPage toPoints="Here is what you can build with it." toNext="A segment on its own sends nothing. Loops and campaigns are what put it to work." href="/platform/segments" docs={DOCS.audience}
      title="Describe an audience in a sentence and get the rules back."
      sub="Segments turn what customers did in your app and on-chain into an audience you can send to, with a live count while you edit."
      scene={<SegmentScene />}
      points={[
        { title: "Write it the way you would say it.", body: "Type who you want, such as Base wallets over 10 ETH that have not staked in 30 days, and OnchainSuite writes the rules for you to adjust by hand.", art: "sentence" },
        { title: "Rules that say has not.", body: "Find the people who stopped doing something, which is where retention starts and where an email tool sees nothing.", art: "hasNot" },
        { title: "A live count before you send.", body: "See how many wallets match, and who they are, while you are still editing the rules.", art: "liveCount" },
        { title: "Built from both lanes.", body: "Mix wallet balances and contract activity with app events, list membership and email engagement in the same segment.", art: "mixLanes" },
        { title: "One audience, every use.", body: "Use a segment for a one-off campaign, as the entry point of a Loop, or as the answer to a question you asked the Intelligence MCP.", art: "oneAudience" },
        { title: "Channel-aware by default.", body: "Reachable in-app is a different filter from has an email, so you always know which part of a segment a channel can reach.", art: "channelAware" },
      ]}
      faqs={[
        { q: "Can a segment use on-chain activity?", a: "Yes. A segment can include what a wallet did on your contracts, its balance and the chains it uses, alongside app and email activity." },
        { q: "What does has not mean in a rule?", a: "It finds customers who did not do something in a period, such as wallets that have not staked in the last 30 days. Those rules scan the whole event history, so the count is estimated from a sample while you edit." },
        { q: "Do segments update on their own?", a: "Yes. Saved segments refresh as new activity comes in, so a Loop or campaign that uses one always reaches the people who match today." },
      ]} />
  );
}
