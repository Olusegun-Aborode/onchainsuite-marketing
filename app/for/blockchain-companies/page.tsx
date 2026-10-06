import type { Metadata } from "next";
import Link from "next/link";
import ForPage from "@/components/ns/ForPage";

export const metadata: Metadata = {
  title: "OnchainSuite for blockchain companies",
  description:
    "OnchainSuite reads what customers do in your app and what their wallets do on-chain, adds how they respond to your messages, and answers in plain English.",
  alternates: { canonical: "/for/blockchain-companies" },
};

/* Suite: both lanes plus message data, and the Intelligence MCP. Statements follow business plan v13
   (sections 1 and 3.1) and the Finance SSOT (section 03). */

export default function BlockchainCompanies() {
  return (
    <ForPage
      title="OnchainSuite for blockchain companies."
      sub="Our software reads what your customers do in your app and what their wallets do on-chain, adds how they respond to what you send, and puts it on one record your growth team can act on."
      lanesTitle={<>Your customers leave a record in two places. <span>We read both, add the results of every message you send, and join them into one record per customer.</span></>}
      lanes={[
        { k: "Product lane", d: "What a customer does inside your application, such as registering, completing setup or using a feature.", e: ["Signed up", "Finished setup", "Last opened the app"] },
        { k: "Smart contract lane", d: "What the same customer's wallet does on the blockchain, read from Atlas and turned into actions your team recognises.", e: ["Deposited 12,400 USDC", "Withdrew 9,800 USDC", "No activity for 60 days"] },
        { k: "Messages you send", d: "Delivery and engagement from your emails and in-app messages, next to what each customer did in both lanes.", e: ["Opened 3 of 4 emails", "Viewed an in-app message", "Clicked through"] },
      ]}
      toPoints="With both lanes on one record, here is what your team can do."
      pointsTitle={<>Act on what customers do, on-chain and off. <span>Segments, campaigns and Loops all read the same record.</span></>}
      points={[
        { title: "Reach customers who only gave you a wallet.", body: "In-app messages reach a connected wallet, so a holder with no email address is still someone you can talk to.", art: "walletOnly" },
        { title: "Start a Loop from something that happened on-chain.", body: "A deposit, a withdrawal or a wallet going quiet can start a Loop, and the Loop stops as soon as the customer acts.", art: "chainTrigger" },
        { title: "See who is slipping before they leave.", body: "Every customer has a lifecycle stage and a health score worked out from what they did in both lanes.", art: "health" },
        { title: "Ask both lanes a question in plain English.", body: "The Intelligence MCP answers from your app and contract data together, and turns the answer into a segment you can message.", art: "bothLanesQ" },
      ]}
      toPlan="All of this comes with the Suite plan, priced by the contacts you bring in."
      plan={{
        name: "Suite plan",
        price: "From $39",
        unit: "a month",
        line: "Priced by the contacts you import, from Launch at 2,500 contacts. From 75,000 contacts, Enterprise is a custom deal.",
        items: ["The product lane and the smart contract lane on one record", "Email and in-app messages to connected wallets", "Segments, campaigns and Loops with on-chain triggers", "The Intelligence MCP"],
        other: <>Your product does not use wallets? <Link href="/for/mainstream-companies">The Send plan is built for mainstream companies</Link>, from $6 a month.</>,
      }}
      faqs={[
        { q: "Which chains and applications do you support?", a: "CNS and PNS cover the chains and applications we support, and Atlas holds history for lending, perpetuals and real-world-asset applications on EVM chains. Before you sign up, we check which of your contracts and records we support." },
        { q: "What if most of my customers only have a wallet?", a: "That is what in-app messages are for. The in-app SDK authenticates a connected EVM or Solana wallet, so you can reach a customer who never gave you an email address." },
        { q: "Do you hold funds or private keys?", a: "No. Our access to the chain is read-only. We never hold funds, sign transactions or link a wallet to a person unless you already hold that link or the customer makes it." },
        { q: "How is the Suite plan priced?", a: "By the number of contacts you import. Your level follows from that number: Launch up to 24,999 contacts and Growth from 25,000, with extra seats at $10 a month each. From 75,000 contacts, Enterprise is priced as a custom deal." },
      ]}
    />
  );
}
