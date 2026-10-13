"use client";

import Link from "next/link";
import { useState } from "react";
import { usePricingLine } from "./PricingLine";
import { OnrampButton } from "./OnrampPanel";
import {
  CONTACT_STEPS, EXTRA_SEAT_USD, ONRAMP, PRO_TERMS, FX_GBP, LEVEL_INFO, allowances, byId, fmt, levelFor, sendPrice, suitePrice, usd, SEND_BASE, SEND_PER_1K,
} from "@/lib/pricing";

type Cur = "usd" | "gbp";

const SEND_STOPS = [500, 1_000, 2_500, 5_000, 10_000, 25_000, 50_000, 100_000, 250_000];

export default function PricingPlans() {
  const { line, setLine } = usePricingLine();
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
          ? "On the Suite plan, we read what customers do in your app and on-chain, and you send by email and in-app."
          : "On the Send plan, you get campaigns, Loops and AI over your product and email data, without blockchain data, priced on your list size."}
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
            <p className="upsell">Need to see what your customers do on-chain or reach a wallet in-app? That is the Suite plan, from {usd(byId("launch").usd)} a month.</p>
            <Link className="btn solid lg" href="/early-access">Book a walkthrough</Link>
          </div>
        </div>
      )}
    </div>
  );
}

/* One short line per level block; seats and allowances live in the price card and the table. */
const LEVEL_LINE: Record<string, string> = {
  launch: "Set up yourself",
  growth: "Onramp, $500 a month for 3 months",
  pro: "Onramp included",
};
const MAX_C = CONTACT_STEPS[CONTACT_STEPS.length - 1];
const MAX_EXTRA_SEATS = 50;

/* Suite is priced by contacts on the Finance SSOT curve, plus any seats above the included count.
   The level is not chosen; it follows from the contact band. */
function SuiteConfigurator({ cur }: { cur: Cur }) {
  const [contacts, setContacts] = useState(5_000);
  const [extra, setExtra] = useState(0);
  const [onramp, setOnramp] = useState(false);

  const level = levelFor(contacts);
  const custom = level === "pro"; // Enterprise (id "pro") is sold as a custom deal
  const al = allowances(contacts);
  const suiteUsd = suitePrice(contacts);
  const seatsUsd = extra * EXTRA_SEAT_USD;
  const money = (u: number) => (cur === "usd" ? "$" + fmt(u) : "£" + fmt(Math.round(u * FX_GBP)));
  const total = cur === "usd" ? "$" + fmt(suiteUsd + seatsUsd) : "£" + fmt(Math.round(suiteUsd * FX_GBP) + Math.round(seatsUsd * FX_GBP));
  /* Onramp is offered on Growth only (included on Enterprise, not on Launch). */
  const withOnramp = level === "growth" && onramp;
  const firstMonths = cur === "usd" ? "$" + fmt(suiteUsd + seatsUsd + ONRAMP.usdPerMonth) : "£" + fmt(Math.round(suiteUsd * FX_GBP) + Math.round(seatsUsd * FX_GBP) + Math.round(ONRAMP.usdPerMonth * FX_GBP));
  const seatPrice = cur === "usd" ? "$" + EXTRA_SEAT_USD : "£" + (EXTRA_SEAT_USD * FX_GBP).toFixed(2);

  const idx = Math.max(0, CONTACT_STEPS.indexOf(contacts));
  const last = CONTACT_STEPS.length - 1;
  const pct = (c: number) => (CONTACT_STEPS.indexOf(c) / last) * 100;
  const gStart = pct(25_000), eStart = pct(75_000);

  return (
    <div className="cfg">
      <div className="cfg-set">
        <div className="cfg-slider">
          <div className="cfg-slider-h">
            <label htmlFor="cfgContacts">How many contacts do you have?</label>
            <output htmlFor="cfgContacts">{fmt(contacts)}{contacts >= MAX_C ? "+" : ""}</output>
          </div>
          <div className="cfg-track" style={{ ["--fill" as string]: `${(idx / last) * 100}%`, ["--g" as string]: `${gStart}%`, ["--e" as string]: `${eStart}%` }}>
            <input id="cfgContacts" type="range" min={0} max={last} step={1} value={idx}
              onChange={(e) => setContacts(CONTACT_STEPS[+e.target.value])}
              aria-valuetext={`${fmt(contacts)} contacts, ${LEVEL_INFO.find((l) => l.id === level)!.name}`} />
          </div>
          <div className="cfg-bands" aria-hidden="true">
            <span style={{ left: 0, width: `${gStart}%` }} className={level === "launch" ? "on" : ""}>Launch</span>
            <span style={{ left: `${gStart}%`, width: `${eStart - gStart}%` }} className={level === "growth" ? "on" : ""}>Growth</span>
            <span style={{ left: `${eStart}%`, width: `${100 - eStart}%` }} className={level === "pro" ? "on" : ""}>Enterprise</span>
          </div>
          <p className="cfg-note">Your level follows your list size. Pick <OnrampButton>Onramp</OnrampButton> if you want us to build it with you.</p>
        </div>
        <div className="cfg-row">
          <div>
            <label htmlFor="cfgSeats"><b>Team seats</b></label>
            <span>{custom ? "Seats on Enterprise are agreed with you as part of the deal." : <>{al.seats} are included at this size, and each extra seat is {seatPrice} a month.</>}</span>
          </div>
          {!custom && <div className="step">
            <button type="button" onClick={() => setExtra(Math.max(0, extra - 1))} disabled={extra === 0} aria-label="Fewer seats">−</button>
            <output id="cfgSeats" aria-live="polite">{al.seats + extra}</output>
            <button type="button" onClick={() => setExtra(Math.min(MAX_EXTRA_SEATS, extra + 1))} disabled={extra >= MAX_EXTRA_SEATS} aria-label="More seats">+</button>
          </div>}
        </div>
        <div className="cfg-levels" role="group" aria-label="Levels">
          {LEVEL_INFO.map((l) => (
            <button key={l.id} type="button" aria-pressed={level === l.id} onClick={() => setContacts(l.ref)}>
              <b>{l.name}</b>
              <span>{LEVEL_LINE[l.id].replace("$500", money(ONRAMP.usdPerMonth))}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="cfg-sum">
        <p className="cfg-lv">{LEVEL_INFO.find((l) => l.id === level)!.name}</p>
        {custom ? (
          <>
            <p className="price"><b>Custom</b><span>pricing</span></p>
            <p className="cfg-h">For teams at global scale</p>
            <ul className="checks cfg-pro">{PRO_TERMS.map((t) => <li key={t}>{t}</li>)}</ul>
            <Link className="btn solid lg" href="/early-access">Talk to sales</Link>
          </>
        ) : (
          <>
            {withOnramp
              ? <p className="price"><b>{firstMonths}</b><span>a month for months one to three, then {total}</span></p>
              : <p className="price"><b>{total}</b><span>a month</span></p>}
            <ul className="cfg-break">
              <li><span>Suite plan for {fmt(contacts)} contacts</span><b>{money(suiteUsd)}</b></li>
              {extra > 0 && <li><span>{extra} extra {extra === 1 ? "seat" : "seats"}</span><b>{money(seatsUsd)}</b></li>}
              {withOnramp && <li><span>Onramp, months one to three</span><b>{money(ONRAMP.usdPerMonth)}</b></li>}
            </ul>
            {level === "growth" ? (
              <label className="cfg-onramp">
                <input type="checkbox" checked={onramp} onChange={(e) => setOnramp(e.target.checked)} />
                <span><b>Add Onramp</b>{money(ONRAMP.usdPerMonth)} a month for three months. <OnrampButton>What&rsquo;s included</OnrampButton></span>
              </label>
            ) : (
              <p className="cfg-onramp-note">On Launch you set it up yourself, with the Intelligence MCP and a walkthrough call. <OnrampButton>Onramp</OnrampButton> starts on Growth.</p>
            )}
            <p className="cfg-h">Included every month</p>
            <ul className="cfg-al">
              <li><span>Wallet-data credits</span><b>{fmt(al.credits)}</b></li>
              <li><span>ONS+ list checks</span><b>{fmt(al.ons)}</b></li>
              <li><span>Emails</span><b>{fmt(al.emails)}</b></li>
              <li><span>In-app messages</span><b>{fmt(al.inapp)}</b></li>
            </ul>
            <Link className="btn solid lg" href="/early-access">Book a walkthrough</Link>
          </>
        )}
      </div>
    </div>
  );
}
