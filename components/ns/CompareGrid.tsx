"use client";

import Link from "next/link";
import { useState } from "react";
import VsLockup from "./VsLockup";

type Card = { slug: string; name: string; kind: string; group: string; line: string };
const GROUPS = ["All", "Email platforms", "Lifecycle platforms", "On-chain tools"];

export default function CompareGrid({ cards }: { cards: Card[] }) {
  const [g, setG] = useState("All");
  const shown = cards.filter((c) => g === "All" || c.group === g);
  return (
    <div className="cgrid-wrap">
      <div className="chips-f" role="group" aria-label="Filter comparisons">
        {GROUPS.map((x) => (
          <button key={x} type="button" aria-pressed={g === x} onClick={() => setG(x)}>
            {x}<span>{x === "All" ? cards.length : cards.filter((c) => c.group === x).length}</span>
          </button>
        ))}
      </div>
      <div className="cgrid">
        {shown.map((c) => (
          <Link key={c.slug} href={`/compare/${c.slug}`} className="ccard">
            <VsLockup slug={c.slug} name={c.name} />
            
            <b>OnchainSuite and {c.name}</b>
            <span>{c.line}</span>
            <em>Read the comparison →</em>
          </Link>
        ))}
      </div>
    </div>
  );
}
