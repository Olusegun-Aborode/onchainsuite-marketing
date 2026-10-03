"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CONTACT_STEPS, EXTRA_SEAT_USD, FX_GBP, LEVEL_INFO, allowances, byId, fmt, levelFor, sendPrice, suitePrice, usd, SEND_BASE, SEND_PER_1K,
} from "@/lib/pricing";

type Line = "suite" | "send";
type Cur = "usd" | "gbp";

const SEND_STOPS = [500, 1_000, 2_500, 5_000, 10_000, 25_000, 50_000, 100_000, 250_000];

export default function PricingPlans() {
  const [line, setLine] = useState<Line>("suite");
  const [cur, setCur] = useState<Cur>("usd");
  const [stop, setStop] = useState(4);
  const subs = SEND_STOPS[stop];

  return (
    <div className="pp">
      <div className="pp-toggles">
        <div className="seg" role="group" aria-label="Product line">
          <button type="button" aria-pressed={line === "suite"} onClick={() => setLine("suite")}>Suite</button>
          <button type="button" aria-pressed={line === "send"} onClick={() => setLine("send")}>Send</button>
        </div>
        {line === "suite" && (
          <div className="seg sm" role="group" aria-label="Currency">
            <button type="button" aria-pressed={cur === "usd"} onClick={() => setCur("usd")}>USD</button>
            <button type="button" aria-pressed={cur === "gbp"} onClick={() => setCur("gbp")}>GBP</button>
          </div>
        )}
      </div>
      <p className="pp-line">
        {line === "suite"
          ? "Suite reads what customers do in your app and on-chain, and sends by email and in-app."
          : "Send is campaigns, Loops and AI over your product and email data, without Suite's blockchain data, priced on your list size."}
      </p>

      {line === "suite" ? (
        <SuiteConfigurator cur={cur} />
      ) : (
        <div className="sendcard">
          <div>
            <h3>Send</h3>
            <p className="price"><b>{usd(Math.round(sendPrice(subs) * 100) / 100)}</b><span>a month for {fmt(subs)} subscribers</span></p>
            <label className="slider" htmlFor="sendSubs">
              <span>Subscribers on your list</span>
              <input id="sendSubs" type="range" min={0} max={SEND_STOPS.length - 1} step={1} value={stop}
                onChange={(e) => setStop(+e.target.value)} aria-valuetext={`${fmt(subs)} subscribers`} />
              <span className="ticks" aria-hidden="true">{SEND_STOPS.map((s, i) => <i key={s} className={i === stop ? "on" : ""}>{s >= 1000 ? fmt(s / 1000) + "k" : s}</i>)}</span>
            </label>
            <p className="formula">${SEND_BASE} a month plus ${SEND_PER_1K.toFixed(2)} per 1,000 subscribers.</p>
          </div>
          <div>
            <ul className="checks">
              <li>Email campaigns to the list you already hold</li>
              <li>Loops that run by email on their own</li>
              <li>Segments of your list</li>
              <li>AI that answers questions and builds segments in plain English</li>
            </ul>
            <p className="upsell">Need to see what your customers do on-chain or reach a wallet in-app? That is Suite, from {usd(byId("launch").usd)} a month.</p>
            <Link className="btn solid lg" href="/early-access">Book a walkthrough</Link>
          </div>
        </div>
      )}
    </div>
  );
}

const MIN_C = CONTACT_STEPS[0];
const MAX_C = CONTACT_STEPS[CONTACT_STEPS.length - 1];
const MAX_EXTRA_SEATS = 50;

/* Suite is priced by contacts on the Finance SSOT curve, plus any seats above the included count.
   The level is not chosen; it follows from the contact band. */
function SuiteConfigurator({ cur }: { cur: Cur }) {
  const [contacts, setContacts] = useState(25_000);
  const [draft, setDraft] = useState<string | null>(null);
  const [extra, setExtra] = useState(0);

  const level = levelFor(contacts);
  const al = allowances(contacts);
  const suiteUsd = suitePrice(contacts);
  const seatsUsd = extra * EXTRA_SEAT_USD;
  const money = (u: number) => (cur === "usd" ? "$" + fmt(u) : "£" + fmt(Math.round(u * FX_GBP)));
  const total = cur === "usd" ? "$" + fmt(suiteUsd + seatsUsd) : "£" + fmt(Math.round(suiteUsd * FX_GBP) + Math.round(seatsUsd * FX_GBP));
  const seatPrice = cur === "usd" ? "$" + EXTRA_SEAT_USD : "£" + (EXTRA_SEAT_USD * FX_GBP).toFixed(2);

  const down = () => setContacts([...CONTACT_STEPS].reverse().find((s) => s < contacts) ?? MIN_C);
  const up = () => setContacts(CONTACT_STEPS.find((s) => s > contacts) ?? MAX_C);
  const commit = () => {
    if (draft === null) return;
    const n = parseInt(draft.replace(/[^0-9]/g, ""), 10);
    if (!Number.isNaN(n)) setContacts(Math.min(MAX_C, Math.max(MIN_C, n)));
    setDraft(null);
  };

  return (
    <div className="cfg">
      <div className="cfg-set">
        <div className="cfg-row">
          <div>
            <label htmlFor="cfgContacts"><b>Contacts</b></label>
            <span>Each email address, wallet or social handle you import counts as one.</span>
          </div>
          <div className="step">
            <button type="button" onClick={down} disabled={contacts <= MIN_C} aria-label="Fewer contacts">−</button>
            <input id="cfgContacts" inputMode="numeric" value={draft ?? fmt(contacts)}
              onChange={(e) => setDraft(e.target.value)} onBlur={commit}
              onKeyDown={(e) => e.key === "Enter" && (e.currentTarget as HTMLInputElement).blur()} />
            <button type="button" onClick={up} disabled={contacts >= MAX_C} aria-label="More contacts">+</button>
          </div>
        </div>
        <div className="cfg-row">
          <div>
            <label htmlFor="cfgSeats"><b>Team seats</b></label>
            <span>{al.seats} are included at this size, and each extra seat is {seatPrice} a month.</span>
          </div>
          <div className="step">
            <button type="button" onClick={() => setExtra(Math.max(0, extra - 1))} disabled={extra === 0} aria-label="Fewer seats">−</button>
            <output id="cfgSeats" aria-live="polite">{al.seats + extra}</output>
            <button type="button" onClick={() => setExtra(Math.min(MAX_EXTRA_SEATS, extra + 1))} disabled={extra >= MAX_EXTRA_SEATS} aria-label="More seats">+</button>
          </div>
        </div>
        <div className="cfg-levels" role="group" aria-label="Level, set by your contacts">
          {LEVEL_INFO.map((l) => (
            <button key={l.id} type="button" aria-pressed={level === l.id} onClick={() => setContacts(l.ref)}>
              <b>{l.name}</b><span>{l.band}</span><em>from {money(suitePrice(l.ref))} a month</em>
            </button>
          ))}
        </div>
        <p className="cfg-note">Your level follows from your contacts, and every level includes the whole platform. More than {fmt(MAX_C)} contacts? Book a walkthrough and we will price it with you.</p>
      </div>

      <div className="cfg-sum">
        <p className="cfg-lv">{LEVEL_INFO.find((l) => l.id === level)!.name}</p>
        <p className="price"><b>{total}</b><span>a month</span></p>
        <ul className="cfg-break">
          <li><span>Suite for {fmt(contacts)} contacts</span><b>{money(suiteUsd)}</b></li>
          {extra > 0 && <li><span>{extra} extra {extra === 1 ? "seat" : "seats"}</span><b>{money(seatsUsd)}</b></li>}
        </ul>
        <p className="cfg-h">Included every month</p>
        <ul className="cfg-al">
          <li><span>Wallet-data credits</span><b>{fmt(al.credits)}</b></li>
          <li><span>ONS+ list checks</span><b>{fmt(al.ons)}</b></li>
          <li><span>Emails</span><b>{fmt(al.emails)}</b></li>
          <li><span>In-app messages</span><b>{fmt(al.inapp)}</b></li>
        </ul>
        <Link className="btn solid lg" href="/early-access">Book a walkthrough</Link>
      </div>
    </div>
  );
}
