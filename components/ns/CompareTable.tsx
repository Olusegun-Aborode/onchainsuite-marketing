"use client";

import Link from "next/link";
import { COMPARE_GROUPS, LEVELS, LEVEL_INFO, SEND_BASE, fmt, suitePrice, type Cell } from "@/lib/pricing";
import { usePricingLine } from "./PricingLine";

/* Suite levels compared, with a Send column in front when the Send switch is on. */
function CellView({ c }: { c: Cell }) {
  if (typeof c !== "boolean") return <div role="cell" className="val">{c}</div>;
  return c
    ? <div role="cell" className="yes"><svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg><span className="sr-only">Included</span></div>
    : <div role="cell" className="no"><span aria-hidden="true">—</span><span className="sr-only">Not included</span></div>;
}

export default function CompareTable() {
  const { line } = usePricingLine();
  const send = line === "send";
  return (
    <>
      <div className="cmp-intro">
        {send
          ? <h2 className="h2 rv" id="cmp-h">The Send plan next to every Suite level. <span>On the Send plan we read your product data and email results. The Suite plan adds the smart contract lane, in-app messages to wallets and list checks.</span></h2>
          : <h2 className="h2 rv" id="cmp-h">On every Suite level, we read both lanes. <span>The levels differ in the contacts they cover, the allowances that come with them and the seats your team gets.</span></h2>}
      </div>
      <div className={"cmp-table" + (send ? " four" : "")} role="table" aria-label={send ? "Send and Suite plans compared" : "Suite plan levels compared"}>
        <div className="cmp-head" role="row">
          <div role="columnheader"><span className="cmp-note">Prices are per month.</span></div>
          {send && (
            <div role="columnheader" className="cmp-send">
              <b>Send</b>
              <span>from ${SEND_BASE} a month</span>
              <Link className="btn" href="/early-access">Book a walkthrough</Link>
            </div>
          )}
          {LEVELS.map((lv) => (
            <div key={lv.id} role="columnheader">
              <b>{lv.name}</b>
              <span>{lv.id === "pro" ? "Custom pricing" : <>from ${fmt(suitePrice(LEVEL_INFO.find((l) => l.id === lv.id)!.ref))} a month</>}</span>
              <Link className={"btn " + (lv.featured && !send ? "solid" : "")} href="/early-access">{lv.id === "pro" ? "Talk to sales" : "Book a walkthrough"}</Link>
            </div>
          ))}
        </div>
        {COMPARE_GROUPS.map((g) => (
          <div key={g.title} role="rowgroup" className="cmp-group">
            <div className="cmp-gt" role="row"><div role="cell">{g.title}</div></div>
            {g.rows.map((r) => (
              <div key={r.label} className="cmp-row" role="row">
                <div role="rowheader">{r.label}{r.note && <small>{r.note}</small>}</div>
                {send && <CellView c={r.send} />}
                {r.span
                  ? <div role="cell" className="val span">{r.cells[0]}</div>
                  : r.cells.map((c, i) => <CellView key={i} c={c} />)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
