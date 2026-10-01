import type { Metadata } from "next";
import ProductPage from "@/components/ns/ProductPage";
import { McpScene } from "@/components/ns/Scenes";
import { DOCS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Intelligence MCP",
  description: "Ask OnchainSuite's Intelligence MCP a question in plain English and get a table, a chart and the SQL behind it, across your app and your contracts.",
  alternates: { canonical: "/platform/intelligence-mcp" },
};

export default function McpPage() {
  return (
    <ProductPage toPoints="Here is what you can do with an answer." toNext="Every answer comes from the same record, the same segments and the same Loops." href="/platform/intelligence-mcp" docs={DOCS.intelligence}
      title="Ask your app and contract data a question in plain English."
      sub="The Intelligence MCP turns your question into a query across both lanes, so nobody on your team has to write SQL to find out who to talk to."
      scene={<McpScene />}
      points={[
        { title: "Questions, not queries.", body: "Ask who traded during the final and has not placed a position since, or which wallets opened but never clicked, and get the answer back as data.", art: "question" },
        { title: "Table, chart and SQL.", body: "Every answer comes in all three, so you can read it quickly and still check the working.", art: "tableChartSql" },
        { title: "From answer to audience.", body: "Save an answer as a segment, or turn it into a campaign, without exporting anything.", art: "answerToSegment" },
        { title: "Nothing runs until you approve it.", body: "The Intelligence MCP can propose a campaign or a Loop, and it waits for you to review it before anything is sent.", art: "approve" },
        { title: "In the tools you already use.", body: "Because it is an MCP, your team can ask the same questions from the AI tools they already work in.", art: "mcpTools" },
        { title: "Both lanes in one question.", body: "Combine what customers did on your contracts with their app and email activity in a single question.", art: "bothLanesQ" },
      ]}
      faqs={[
        { q: "Do I need to know SQL?", a: "No. You ask in plain English. The SQL is shown alongside every answer for anyone who wants to check it." },
        { q: "Can it send messages on its own?", a: "No. It can propose a campaign or a Loop, and nothing runs until someone on your team approves it." },
        { q: "What is an MCP?", a: "The Model Context Protocol is an open standard that lets AI tools connect to a data source. It means your team can ask OnchainSuite questions from the assistants they already use." },
      ]} />
  );
}
