import type { Metadata } from "next";
import Link from "next/link";
import ForPage from "@/components/ns/ForPage";

export const metadata: Metadata = {
  title: "OnchainSuite for mainstream companies",
  description:
    "Send joins what your customers do in your product with how they respond to your emails, so your team can find who needs a message and send it. $6 a month plus $3.95 per 1,000 subscribers.",
  alternates: { canonical: "/for/mainstream-companies" },
};

/* Send: the product lane plus message data, and AI. Send is the same platform with the chain layer
   off (Finance SSOT, section 03), so there is no wallet channel, no ONS+ and no dedicated IP.
   Prices follow business plan v13, section 4.1. */

export default function MainstreamCompanies() {
  return (
    <ForPage
      mainstream
      title="OnchainSuite for mainstream companies."
      sub="Send joins what your customers do in your product with how they respond to your emails, so your team can see who needs a message and send it at the right moment."
      lanesTitle={<>Send reads the record your product already keeps. <span>It joins what customers do in your product with how they respond to every email you send.</span></>}
      lanes={[
        { k: "Product lane", d: "What a customer does inside your product, such as signing up, finishing setup or using a feature, from the records and events you bring in.", e: ["Signed up", "Finished setup", "Last opened the app"] },
        { k: "Messages you send", d: "Delivery and engagement from your emails, next to what each customer did in your product.", e: ["Opened 3 of 4 emails", "Clicked the upgrade link", "Has not opened in 30 days"] },
        { k: "Smart contract lane", off: "Part of Suite", d: "What customers' wallets do on the blockchain. Send leaves this lane switched off, and Suite turns it on when your product starts to use wallets.", e: ["Deposits and withdrawals", "Wallet activity", "In-app messages to wallets"] },
      ]}
      toPoints="With your product data and your email results on one record, here is what your team can do."
      pointsTitle={<>Find who needs a message and send it. <span>Segments, campaigns and Loops all read the same record.</span></>}
      points={[
        { title: "Bring in the records you already hold.", body: "Import a CSV or JSON file with automatic column mapping, send product events through the API, and capture new subscribers with forms.", art: "mImport" },
        { title: "Describe an audience in a sentence and get the rules back.", body: "Write who you want to reach in plain English, including people who have not done something yet, and Send builds the segment.", art: "mSentence" },
        { title: "Run Loops by email that stop when the customer acts.", body: "A Loop waits, checks what the customer did and sends the next email, and it stops as soon as they finish the step you care about.", art: "mLoop" },
        { title: "Ask your data a question in plain English.", body: "Ask who opened an email but never upgraded, and get the customers back as a list you can turn into a segment.", art: "mQuestion" },
      ]}
      toPlan="All of this comes with Send, priced on the size of your list."
      plan={{
        name: "Send",
        price: "$6",
        unit: "a month plus $3.95 per 1,000 subscribers",
        line: "That is $15.88 a month at 2,500 subscribers, $45.50 at 10,000 and $104.75 at 25,000.",
        items: ["Your product lane and email results on one record", "Email campaigns and Loops", "Segments, including people who have not done something", "AI that answers questions and builds segments in plain English"],
        other: <>Your product uses wallets? <Link href="/for/blockchain-companies">Suite adds the smart contract lane</Link> and in-app messages, from $39 a month.</>,
      }}
      faqs={[
        { q: "What is the difference between Send and Suite?", a: "Send is the same platform with the blockchain layer switched off. It reads your product data and email results. Suite adds the smart contract lane, in-app messages to wallets and list checks." },
        { q: "How is Send priced?", a: "Send is $6 a month plus $3.95 per 1,000 subscribers. That is $15.88 a month at 2,500 subscribers, $45.50 at 10,000 and $104.75 at 25,000." },
        { q: "Can I send in-app messages on Send?", a: "Not on Send. In-app messages reach a connected wallet, which is part of Suite." },
        { q: "Can I move to Suite later?", a: "Yes. Suite is the same platform with the blockchain layer switched on. Book a walkthrough and we will look at the contracts and wallet data you would add." },
      ]}
    />
  );
}
