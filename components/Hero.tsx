"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  ACCENT,
  COHORT_BARS,
  COHORT_ROWS,
  FEED_POOL,
  FeedEvent,
  HERO_TAB_LABELS,
  LEFT_DATA,
  OK,
  TONE_COLOR,
} from "@/lib/data";
import { AutomationView, SegmentsView } from "./IntelViews";

// Typewriter / step-reveal timing (ms), ported 1:1 from the prototype.
const CHAR = 27;
const GAP = 460;
const STEP = 660;
const INIT = 420;
const PRE = 360;
const TAB_DWELL = 9500;

type LeftComputed = { bubbles: string[]; caret: boolean; steps: number };

function computeLeft(tab: number, elapsed: number): LeftComputed {
  const data = LEFT_DATA[tab];
  let cursor = INIT;
  const bubbles: string[] = [];
  let caret = false;
  let bubblesDone = false;
  let lastEnd = INIT;

  for (let i = 0; i < data.bubbles.length; i++) {
    const full = data.bubbles[i];
    const start = cursor;
    const end = start + full.length * CHAR;
    if (elapsed <= start) {
      caret = true;
      break;
    }
    const chars = Math.min(full.length, Math.floor((elapsed - start) / CHAR));
    bubbles.push(full.slice(0, chars));
    if (elapsed < end) {
      caret = true;
      break;
    }
    lastEnd = end;
    cursor = end + GAP;
    if (i === data.bubbles.length - 1) bubblesDone = true;
  }

  let steps = 0;
  if (bubblesDone) {
    const sStart = lastEnd + PRE;
    if (elapsed > sStart)
      steps = Math.min(data.steps.length, 1 + Math.floor((elapsed - sStart) / STEP));
  }
  return { bubbles, caret, steps };
}

// Rotating headline keyword: act → respond → mail → incentivize.
const ROTATING_WORDS = ["act", "respond", "mail", "incentivize"];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setI((x) => (x + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span key={i} className="ocs-grad-text ocs-rot-word">
      {ROTATING_WORDS[i]}
    </span>
  );
}

export default function Hero() {
  const [heroTab, setHeroTab] = useState(0);
  const [laStart, setLaStart] = useState(0);
  const [feed, setFeed] = useState<(FeedEvent & { uid: number })[]>([]);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [, tick] = useReducer((x: number) => x + 1, 0);

  const pausedRef = useRef(false);
  const visibleRef = useRef(true);
  const reduceRef = useRef(false);
  const uidRef = useRef(100);
  const panelRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // Set true while a user is inside an Intelligence sub-view, to freeze the carousel.
  const lockRef = useRef(false);

  const startCycle = useCallback(() => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    cycleRef.current = setInterval(() => {
      if (pausedRef.current || !visibleRef.current || lockRef.current) return;
      setHeroTab((t) => (t + 1) % 3);
      setLaStart(Date.now());
    }, TAB_DWELL);
  }, []);

  const setTab = useCallback(
    (i: number) => {
      lockRef.current = false;
      setHeroTab(i);
      setLaStart(Date.now());
      startCycle();
    },
    [startCycle]
  );

  const lockIntel = useCallback((locked: boolean) => {
    lockRef.current = locked;
  }, []);

  useEffect(() => {
    reduceRef.current =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Seed the live feed.
    setFeed(FEED_POOL.slice(0, 5).map((e) => ({ ...e, uid: ++uidRef.current })));
    setLaStart(Date.now());

    if (reduceRef.current) return;

    const feedId = setInterval(() => {
      if (!visibleRef.current || pausedRef.current) return;
      setFeed((s) => {
        const e = FEED_POOL[Math.floor(Math.random() * FEED_POOL.length)];
        return [{ ...e, uid: ++uidRef.current }, ...s].slice(0, 6);
      });
    }, 2100);

    startCycle();

    const tickId = setInterval(() => {
      if (visibleRef.current && !pausedRef.current) tick();
    }, 90);

    let io: IntersectionObserver | null = null;
    if (panelRef.current && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (es) => {
          visibleRef.current = es[0].isIntersecting && es[0].intersectionRatio > 0.2;
        },
        { threshold: [0, 0.2, 0.6] }
      );
      io.observe(panelRef.current);
    }

    return () => {
      clearInterval(feedId);
      clearInterval(tickId);
      if (cycleRef.current) clearInterval(cycleRef.current);
      if (io) io.disconnect();
    };
  }, [startCycle]);

  const submitEmail = (e: FormEvent) => {
    e.preventDefault();
    const q = /.+@.+\..+/.test(email) ? `?email=${encodeURIComponent(email)}` : "";
    window.location.href = `/early-access${q}`;
  };

  const elapsed = reduceRef.current ? 1e9 : laStart ? Date.now() - laStart : -1;
  const cl = computeLeft(heroTab, elapsed);
  const ld = LEFT_DATA[heroTab];
  const leftSteps = ld.steps.slice(0, cl.steps);
  const intelReady = heroTab === 2 && cl.steps >= 3;
  const tabProgressPct = reduceRef.current
    ? 0
    : Math.max(0, Math.min(100, (laStart ? Date.now() - laStart : 0) / TAB_DWELL * 100));

  return (
    <>
      {/* HERO */}
      <section
        id="top"
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "88px 32px 40px",
          textAlign: "center",
        }}
        data-pad
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(680px 340px at 50% 12%, color-mix(in oklab,${ACCENT} 9%,transparent), transparent 70%), radial-gradient(520px 300px at 50% 0%, color-mix(in oklab,#2F94FF 5%,transparent), transparent 72%)`,
          }}
        />
        <div className="ocs-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <h1
            style={{
              margin: "0 auto",
              maxWidth: 1160,
              fontSize: "clamp(34px,5vw,66px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              fontWeight: 700,
            }}
          >
            <span style={{ display: "block" }}>
              When your users act <span style={{ whiteSpace: "nowrap" }}>on-chain.</span>
            </span>
            <span style={{ display: "block" }}>
              Now you can <RotatingWord /> <span className="ocs-grad-text">back.</span>
            </span>
          </h1>
          <p
            style={{
              margin: "22px auto 0",
              maxWidth: 600,
              fontSize: 19,
              lineHeight: 1.55,
              color: "#3D4A63",
              textWrap: "pretty",
            }}
          >
            OnchainSuite helps Web3 apps keep their users. We notice what people do in your app, a
            deposit, a big trade, or going quiet, and help you reach them by email or in-app message,
            so they come back.
          </p>
          <div
            style={{
              marginTop: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 13,
            }}
          >
            {sent ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  background: "#E8F6EE",
                  border: "1px solid #BFE6CF",
                  color: "#15803D",
                  padding: "13px 20px",
                  borderRadius: 11,
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#16A34A",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    flex: "none",
                  }}
                >
                  ✓
                </span>
                You&apos;re on the early-access list. We&apos;ll be in touch.
              </div>
            ) : (
              <form
                onSubmit={submitEmail}
                style={{
                  display: "flex",
                  gap: 8,
                  width: "100%",
                  maxWidth: 460,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@protocol.xyz"
                  className="ocs-input"
                  style={{
                    flex: 1,
                    minWidth: 210,
                    fontSize: 15,
                    fontFamily: "inherit",
                    color: "#1A1A17",
                    background: "#fff",
                    border: "1px solid #DCE7F5",
                    borderRadius: 11,
                    padding: "13px 16px",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="ocs-btn-primary"
                  style={{
                    fontSize: 15.5,
                    fontWeight: 600,
                    color: "#fff",
                    background: ACCENT,
                    border: "none",
                    cursor: "pointer",
                    padding: "13px 22px",
                    borderRadius: 11,
                    boxShadow: `0 1px 2px rgba(0,0,0,.08),0 2px 8px color-mix(in oklab,${ACCENT} 20%,transparent)`,
                  }}
                >
                  Get early access
                </button>
              </form>
            )}
          </div>
          {/* When this scrolls out of view, the nav reveals its own Get-early-access button. */}
          <div id="ocs-cta-sentinel" aria-hidden="true" style={{ height: 1 }} />
        </div>
      </section>

      {/* HERO VISUAL: cycling command center */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "8px 32px 0" }} data-pad>
        <div
          ref={panelRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          className="ocs-anim-border"
          style={{
            borderRadius: 18,
            boxShadow:
              "0 1px 2px rgba(26,24,20,.05),0 18px 50px -28px rgba(26,24,20,.18)",
            overflow: "hidden",
          }}
        >
          {/* tab bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: "9px 12px",
              borderBottom: "1px solid #E3ECF8",
              background: "#FFFFFF",
            }}
          >
            {HERO_TAB_LABELS.map(([label, idx]) => (
              <button
                key={label}
                onClick={() => setTab(idx as number)}
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: heroTab === idx ? "#1A1A17" : "#8A93A6",
                  padding: "8px 13px",
                  borderBottom: `2px solid ${heroTab === idx ? ACCENT : "transparent"}`,
                  transition: "color .2s",
                }}
              >
                {label}
              </button>
            ))}
            <span
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11,
                color: "#A6AFC0",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: OK,
                  animation: "ocsPulseDot 2s infinite",
                }}
              />
              app.onchainsuite.com
            </span>
          </div>
          <div style={{ height: 2, background: "#E3ECF8" }}>
            <div
              style={{
                height: 2,
                background: ACCENT,
                width: `${tabProgressPct}%`,
                transition: "width .1s linear",
              }}
            />
          </div>

          <div style={{ position: "relative", minHeight: 392, background: "#FFFFFF" }}>
            <div
              style={{
                padding: 16,
                display: "grid",
                gridTemplateColumns: "0.92fr 1.08fr",
                gap: 16,
                alignItems: "stretch",
              }}
              data-hero-grid
              data-pad
            >
              {/* LEFT: agent conversation */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  border: "1px solid #DCE7F5",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                    minHeight: 308,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 10,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#A6AFC0",
                    }}
                  >
                    You → agent
                  </div>
                  {cl.bubbles.map((text, i) => (
                    <div
                      key={i}
                      style={{
                        alignSelf: "flex-end",
                        maxWidth: "90%",
                        background: "#EAF1FB",
                        color: "#2A2A26",
                        fontSize: 13,
                        lineHeight: 1.5,
                        padding: "10px 13px",
                        borderRadius: "13px 13px 4px 13px",
                      }}
                    >
                      {text}
                      {cl.caret && i === cl.bubbles.length - 1 && (
                        <span
                          style={{
                            display: "inline-block",
                            width: 7,
                            height: 14,
                            background: "#8A93A6",
                            verticalAlign: -2,
                            marginLeft: 1,
                            animation: "ocsBlink 1s steps(1) infinite",
                          }}
                        />
                      )}
                    </div>
                  ))}
                  {leftSteps.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 6,
                        paddingTop: 11,
                        borderTop: "1px solid #EAF1FB",
                      }}
                    >
                      {leftSteps.map((st, i) => {
                        const active = st.kind === "active";
                        return (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 9,
                              fontSize: 12.5,
                              color: active ? "#1A1A17" : "#3A3A34",
                              fontWeight: active ? 600 : 400,
                              animation: "ocsRowIn .4s ease both",
                            }}
                          >
                            <span
                              style={{
                                width: 16,
                                height: 16,
                                borderRadius: 5,
                                background: active
                                  ? `color-mix(in oklab,${ACCENT} 14%,#fff)`
                                  : "#E8F6EE",
                                color: active ? ACCENT : "#16A34A",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 10,
                                fontWeight: 700,
                                flex: "none",
                              }}
                            >
                              {active ? "•" : "✓"}
                            </span>
                            {st.text}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    borderTop: "1px solid #E3ECF8",
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      fontSize: 12.5,
                      color: "#A6AFC0",
                      background: "#FFFFFF",
                      border: "1px solid #DCE7F5",
                      borderRadius: 9,
                      padding: "9px 12px",
                    }}
                  >
                    {ld.placeholder}
                  </div>
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: ACCENT,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 15,
                      flex: "none",
                      boxShadow: `0 1px 3px color-mix(in oklab,${ACCENT} 30%,transparent)`,
                    }}
                  >
                    ↑
                  </span>
                </div>
              </div>

              {/* RIGHT: canvas per tab */}
              <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
                {heroTab === 0 && <HeroActivity feed={feed} />}
                {heroTab === 1 && <HeroAutomations />}
                {heroTab === 2 && <HeroIntelligence ready={intelReady} onLock={lockIntel} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroActivity({ feed }: { feed: (FeedEvent & { uid: number })[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", flex: 1 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          padding: "11px 14px",
          borderRadius: 11,
          background: "#FEF4F5",
          border: "1px solid #F5D6DB",
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E0354F", flex: "none" }} />
        <span style={{ fontSize: 13, color: "#1A1A17", fontWeight: 600, whiteSpace: "nowrap" }}>
          Churn risk rising
        </span>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#9A5560", whiteSpace: "nowrap" }}>
          14 idle 14d+
        </span>
      </div>
      <div
        style={{
          flex: 1,
          border: "1px solid #DCE7F5",
          borderRadius: 11,
          background: "#fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 13px",
            borderBottom: "1px solid #E3ECF8",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: OK, animation: "ocsPulseDot 2s infinite" }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 11,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "#8A93A6",
            }}
          >
            Live on-chain activity
          </span>
          <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#A6AFC0" }}>
            4 chains
          </span>
        </div>
        <div style={{ padding: 6, flex: 1 }}>
          {feed.map((e, i) => (
            <div
              key={e.uid}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "8px 10px",
                borderRadius: 8,
                background: i === 0 ? "#F7F5F1" : "transparent",
                animation: i === 0 ? "ocsRowIn .5s ease both" : "none",
                fontSize: 12.5,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: TONE_COLOR[e.tone], flex: "none" }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", color: "#4A483F", flex: "none" }}>{e.w}</span>
              <span style={{ color: "#51607A", overflow: "hidden", textOverflow: "ellipsis" }}>{e.act}</span>
              <span style={{ color: "#1A1A17", fontWeight: 700, flex: "none" }}>{e.amt}</span>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 10.5,
                  color: "#8A93A6",
                  flex: "none",
                }}
              >
                {e.quiet ? "idle" : `${e.proto} · ${e.chain}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroAutomations() {
  return (
    <div
      style={{
        border: "1px solid #DCE7F5",
        borderRadius: 12,
        background: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          padding: "12px 15px",
          borderBottom: "1px solid #E3ECF8",
          background: "#FFFFFF",
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: OK, animation: "ocsPulseDot 2s infinite" }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A17" }}>Churn Win-Back</span>
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10.5,
            color: "#16A34A",
            background: "#E8F6EE",
            padding: "3px 8px",
            borderRadius: 6,
          }}
        >
          LIVE
        </span>
      </div>
      <div
        style={{
          padding: "18px 18px 22px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: `1px solid color-mix(in oklab,${ACCENT} 35%,#DCE7F5)`,
            borderRadius: 11,
            background: `color-mix(in oklab,${ACCENT} 6%,#fff)`,
            padding: "12px 14px",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: 4,
            }}
          >
            Trigger
          </div>
          <div style={{ fontSize: 13.5, color: "#1A1A17", fontWeight: 600 }}>
            Stake dropped, and email ignored
          </div>
          <div style={{ fontSize: 11.5, color: "#8A93A6", marginTop: 2 }}>staked &lt; 0.5 × peak · no open in 7d</div>
        </div>
        <div style={{ position: "relative", height: 24, margin: "0 auto", width: 2, background: "#DCE7F5" }}>
          <span
            style={{
              position: "absolute",
              left: -3,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: ACCENT,
              animation: "ocsDotV 3.4s linear infinite",
            }}
          />
        </div>
        <div style={{ position: "relative", height: 18, margin: "0 auto", width: "72%", maxWidth: 240 }}>
          <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: 9, background: "#DCE7F5" }} />
          <div style={{ position: "absolute", top: 9, left: "25%", right: "25%", height: 1, background: "#DCE7F5" }} />
          <div style={{ position: "absolute", top: 9, left: "25%", width: 1, height: 9, background: "#DCE7F5" }} />
          <div style={{ position: "absolute", top: 9, right: "25%", width: 1, height: 9, background: "#DCE7F5" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div
            style={{
              position: "relative",
              border: "1px solid #DCE7F5",
              borderRadius: 11,
              background: "#fff",
              padding: "11px 12px",
              animation: "ocsFireL 3.4s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 6,
                  background: `color-mix(in oklab,${ACCENT} 16%,#fff)`,
                  border: `1px solid color-mix(in oklab,${ACCENT} 40%,#fff)`,
                }}
              />
              <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1A1A17" }}>In-app push</span>
            </div>
            <span
              style={{
                position: "absolute",
                top: 8,
                right: 9,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 9,
                color: "#16A34A",
                background: "#E8F6EE",
                padding: "2px 6px",
                borderRadius: 5,
                animation: "ocsBadge 3.4s ease-in-out infinite",
              }}
            >
              fired · 3
            </span>
          </div>
          <div
            style={{
              position: "relative",
              border: "1px solid #DCE7F5",
              borderRadius: 11,
              background: "#fff",
              padding: "11px 12px",
              animation: "ocsFireL 3.4s ease-in-out infinite",
              animationDelay: "1.7s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 6,
                  background: "color-mix(in oklab,#2F94FF 14%,#fff)",
                  border: "1px solid color-mix(in oklab,#2F94FF 36%,#fff)",
                }}
              />
              <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1A1A17" }}>Email</span>
            </div>
            <span
              style={{
                position: "absolute",
                top: 8,
                right: 9,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 9,
                color: "#16A34A",
                background: "#E8F6EE",
                padding: "2px 6px",
                borderRadius: 5,
                animation: "ocsBadge 3.4s ease-in-out infinite",
                animationDelay: "1.7s",
              }}
            >
              fired · 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroIntelligence({ ready, onLock }: { ready: boolean; onLock: (locked: boolean) => void }) {
  const [view, setView] = useState<"result" | "automation" | "segments">("result");
  useEffect(() => {
    onLock(view !== "result");
    return () => onLock(false);
  }, [view, onLock]);
  return (
    <div
      style={{
        border: "1px solid #DCE7F5",
        borderRadius: 12,
        background: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          padding: "12px 15px",
          borderBottom: "1px solid #E3ECF8",
          background: "#FFFFFF",
        }}
      >
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: 6,
            background: `color-mix(in oklab,${ACCENT} 18%,#fff)`,
            border: `1px solid color-mix(in oklab,${ACCENT} 40%,#fff)`,
          }}
        />
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A17" }}>Intelligence</span>
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#A6AFC0" }}>
          MCP
        </span>
      </div>
      <div style={{ padding: 16, flex: 1 }}>
        {view === "automation" ? (
          <AutomationView onBack={() => setView("result")} />
        ) : view === "segments" ? (
          <SegmentsView onBack={() => setView("result")} />
        ) : (
          <>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, animation: "ocsPulseDot 1.8s infinite" }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10.5,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#A6AFC0",
            }}
          >
            Result · MCP over normalised on-chain data
          </span>
        </div>
        {!ready ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ height: 18, width: "55%", borderRadius: 5, background: "#E3ECF8", animation: "ocsBlink 1.4s infinite" }} />
            <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 38, marginTop: 4, opacity: 0.7 }}>
              {["40%", "62%", "54%", "80%", "48%", "66%"].map((h, i) => (
                <span key={i} style={{ flex: 1, height: h, borderRadius: 3, background: "#E3ECF8" }} />
              ))}
            </div>
            <div style={{ height: 13, width: "72%", borderRadius: 5, background: "#E3ECF8", animation: "ocsBlink 1.4s infinite" }} />
          </div>
        ) : (
          <div
            style={{
              border: `1px solid color-mix(in oklab,${ACCENT} 28%,#DCE7F5)`,
              borderRadius: 11,
              background: `color-mix(in oklab,${ACCENT} 4%,#fff)`,
              padding: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: "#1A1A17", letterSpacing: "-.02em" }}>87</span>
              <span style={{ fontSize: 12.5, color: "#51607A" }}>wallets matched · &gt;$10k, no return since</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 38, margin: "12px 0" }}>
              {COHORT_BARS.map((h, i) => (
                <span
                  key={i}
                  className="ocs-bar"
                  style={{
                    flex: 1,
                    height: h,
                    borderRadius: 3,
                    background: `color-mix(in oklab,${ACCENT} 75%,#E3ECF8)`,
                    animationDelay: `${i * 0.07}s`,
                  }}
                />
              ))}
            </div>
            {COHORT_ROWS.map((w) => (
              <div
                key={w.addr}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderTop: "1px solid #EDEBE3",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 11.5,
                }}
              >
                <span style={{ color: "#4A483F" }}>{w.addr}</span>
                <span style={{ color: "#8A93A6" }}>{w.amt}</span>
                <span style={{ marginLeft: "auto", color: "#A6AFC0" }}>{w.seen}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginTop: 12 }}>
              <button
                type="button"
                onClick={() => setView("automation")}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  background: ACCENT,
                  border: "none",
                  fontFamily: "inherit",
                  padding: "7px 12px",
                  borderRadius: 8,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                Create automation
              </button>
              <button
                type="button"
                onClick={() => setView("segments")}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  color: "#1A1A17",
                  background: "#fff",
                  border: "1px solid #DCE7F5",
                  padding: "7px 12px",
                  borderRadius: 8,
                  whiteSpace: "nowrap",
                }}
              >
                Save segment
              </button>
            </div>
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
}
