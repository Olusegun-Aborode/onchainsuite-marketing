/* Homepage content. The live product scenes are recreated from OnchainSuite v2.7 with its demo
   data; HomeMotion plays them as they scroll into view. Converted from the approved preview. */
import CloseArt from "./CloseArt";

export default function HomeBody() {
  return (
    <>

<div className="wrap">
  
  <section className="hero" id="hero">
    <div className="hero-copy" id="heroCopy">
      <a className="pill load" style={{ animationDelay: ".05s" }} href="#concept">Meet the Lifecycle Intelligence Engine <span>›</span></a>
      <h1 className="h1 load" style={{ animationDelay: ".12s" }}>Retention built on what your users do.</h1>
      <p className="sub load" style={{ animationDelay: ".22s" }}>On-chain for blockchain companies.<br />In your product for everyone else.</p>
      <div className="ctas load" style={{ animationDelay: ".32s" }}><a className="btn lg" href="/pricing">See pricing</a><a className="btn solid lg" href="/early-access">Book a walkthrough</a></div>
    </div>
    <div className="hero-stage" id="heroStage">
      <div className="sat s1" data-sx="160" data-sy="40"><div className="u u-card" style={{ padding: "12px 14px", boxShadow: "0 18px 40px -20px rgba(16,24,40,.3)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "13px" }}><svg width="14" height="14" style={{ color: "#1727E0" }}><use href="#a-bolt" /></svg>Dormant 30d win-back<span className="u-chip g" style={{ marginLeft: "auto" }}><i></i>Live</span></div>
        <div style={{ display: "flex", gap: "16px", marginTop: "10px", fontSize: "12px", color: "#585D65" }}><span><b style={{ color: "#010F31", fontSize: "16px", display: "block" }}>978</b>entries · 30d</span><span><b style={{ color: "#010F31", fontSize: "16px", display: "block" }}>74</b>converted on-chain</span></div></div></div>
      <div className="sat s2" data-sx="140" data-sy="-60"><div className="u u-card" style={{ padding: "12px 14px", boxShadow: "0 18px 40px -20px rgba(16,24,40,.3)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "13px" }}><svg width="14" height="14" style={{ color: "#1727E0" }}><use href="#a-dash" /></svg>Dashboard<span className="u-chip" style={{ marginLeft: "auto", background: "#F5F6F7", color: "#585D65" }}>30d</span></div>
        <div style={{ display: "grid", gap: "8px", marginTop: "10px", fontSize: "11.5px", color: "#585D65" }}>
          <span>Wallets reached<span style={{ display: "flex", alignItems: "baseline", gap: "6px" }}><b style={{ color: "#010F31", fontSize: "16px" }}>18,204</b><span style={{ color: "#1727E0" }}>↗ 12.4%</span></span></span>
          <span>On-chain conversions<span style={{ display: "flex", alignItems: "baseline", gap: "6px" }}><b style={{ color: "#010F31", fontSize: "16px" }}>1,164</b><span style={{ color: "#1727E0" }}>↗ 22.8%</span></span></span></div>
        <svg className="u-spark" viewBox="0 0 100 34" preserveAspectRatio="none"><path className="a" d="M0 28 L12 27 L25 24 L37 25 L50 19 L62 17 L75 13 L87 11 L100 5 L100 34 L0 34Z" /><path className="l" d="M0 28 L12 27 L25 24 L37 25 L50 19 L62 17 L75 13 L87 11 L100 5" /></svg></div></div>
      <div className="sat s3" data-sx="-170" data-sy="60"><div className="u u-card" style={{ padding: "12px", boxShadow: "0 18px 40px -20px rgba(16,24,40,.3)" }}>
        <div style={{ font: "500 10.5px 'Geist Mono',monospace", color: "#1727E0", letterSpacing: ".04em" }}>IN-APP MESSAGE · 0x9a2e…e41</div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "9px" }}><span style={{ width: "30px", height: "30px", borderRadius: "7px", background: "#1727E0", display: "grid", placeItems: "center", flex: "none" }}><svg className="mark" style={{ width: "9px", height: "14px" }}><use href="#ocs-mark" fill="#fff" /></svg></span><div><b style={{ fontSize: "13px", display: "block" }}>212 USDC in rewards is waiting</b><span style={{ fontSize: "12px", color: "#585D65" }}>Claim it in one step.</span></div></div></div></div>

      <div className="hero-win"><div className="winbar" aria-hidden="true"><i></i><i></i><i></i></div>
        <div className="u u-app" style={{ height: "calc(100% - 32px)" }} role="img" aria-label="OnchainSuite Home: a greeting, a question typed to the Intelligence MCP, four headline numbers and recent on-chain activity arriving.">
          <aside className="u-side"><div className="lg"><svg className="mark"><use href="#ocs-mark" fill="url(#mg)" /></svg></div><div className="u-nav on"><svg><use href="#a-home" /></svg>Home</div><div className="u-nav"><svg><use href="#a-camp" /></svg>Campaigns</div><div className="u-nav"><svg><use href="#a-aud" /></svg>Audience</div><div className="u-nav"><svg><use href="#a-brain" /></svg>Intelligence MCP</div><div className="u-nav"><svg><use href="#a-dash" /></svg>Dashboard</div><div className="u-nav"><svg><use href="#a-data" /></svg>Data</div><div className="u-user"><span className="u-av" style={{ background: "#E04E12" }}>EC</span><div><b>Emma Carter</b><small>Acme</small></div><span className="u-ver">v2.7</span></div></aside>
          <div className="u-main">
            <div className="u-top">Home / <b>Home</b><span className="u-search"><svg width="13" height="13"><circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.3" /></svg>Search…<kbd>⌘K</kbd></span></div>
            <div className="u-body">
              <div className="u-card" style={{ padding: "16px 18px" }}><div className="u-h" style={{ fontSize: "19px" }}>Good afternoon, Emma.</div><p className="u-p">Here is what moved across your workspace today.</p></div>
              <div className="u-ask"><svg><use href="#a-brain" /></svg><span className="t" id="hAsk" data-ph="Ask the Intelligence MCP anything, or describe a campaign to build…"></span><span className="u-go" id="hGo"><svg width="14" height="14"><use href="#a-up" /></svg></span></div>
              <div className="u-stats" id="hKpis">
                <div className="u-card u-stat"><small>Active wallets</small><b data-count="128540">128,540</b><span>vs last 30d <span className="u-delta">▲ 12.4%</span></span><svg className="u-spark" viewBox="0 0 100 34" preserveAspectRatio="none"><path className="a" d="M0 26 L14 24 L28 27 L42 21 L57 18 L71 15 L85 12 L100 6 L100 34 L0 34Z" /><path className="l" d="M0 26 L14 24 L28 27 L42 21 L57 18 L71 15 L85 12 L100 6" /></svg></div>
                <div className="u-card u-stat"><small>Messages sent</small><b data-count="12480">12,480</b><span>vs last 30d <span className="u-delta">▲ 4.1%</span></span><svg className="u-spark" viewBox="0 0 100 34" preserveAspectRatio="none"><path className="a" d="M0 22 L14 20 L28 23 L42 18 L57 20 L71 15 L85 14 L100 13 L100 34 L0 34Z" /><path className="l" d="M0 22 L14 20 L28 23 L42 18 L57 20 L71 15 L85 14 L100 13" /></svg></div>
                <div className="u-card u-stat"><small>Open rate</small><b data-count="42.3" data-dec="1" data-suf="%">42.3%</b><span>vs last 30d <span className="u-delta">▲ 2.7%</span></span><svg className="u-spark" viewBox="0 0 100 34" preserveAspectRatio="none"><path className="a" d="M0 21 L14 19 L28 22 L42 18 L57 21 L71 17 L85 18 L100 14 L100 34 L0 34Z" /><path className="l" d="M0 21 L14 19 L28 22 L42 18 L57 21 L71 17 L85 18 L100 14" /></svg></div>
                <div className="u-card u-stat"><small>Converted on-chain</small><b data-count="3921">3,921</b><span>vs last 30d <span className="u-delta">▲ 22.7%</span></span><svg className="u-spark" viewBox="0 0 100 34" preserveAspectRatio="none"><path className="a" d="M0 26 L14 25 L28 27 L42 22 L57 21 L71 18 L85 15 L100 9 L100 34 L0 34Z" /><path className="l" d="M0 26 L14 25 L28 27 L42 22 L57 21 L71 18 L85 15 L100 9" /></svg></div>
              </div>
              <div style={{ fontWeight: "600", fontSize: "14px", marginTop: "2px" }}>Recent on-chain activity</div>
              <div className="u-card u-feed" id="hFeed">
                <div><i style={{ background: "#17A66B" }}></i><b>Swap</b><span className="u-addr">0x24e6…2dae</span><span>swapped 4.2 ETH → USDC</span><span className="ch">Base</span><time>14:36 UTC</time></div>
                <div><i style={{ background: "#E8A317" }}></i><b>Unstake</b><span className="u-addr">0x9352…a881</span><span>unstaked 12 ETH from the vault</span><span className="ch">Ethereum</span><time>14:12 UTC</time></div>
                <div><i style={{ background: "#2F94FF" }}></i><b>Mint</b><span className="u-addr">0x5a8e…82d0</span><span>minted 3 items from Zora drop</span><span className="ch">Base</span><time>13:58 UTC</time></div>
                <div><i style={{ background: "#17A66B" }}></i><b>Deposit</b><span className="u-addr">0x48cc…ef8d</span><span>first deposit of $1,840 USDC</span><span className="ch">Base</span><time>13:30 UTC</time></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="logos" aria-label="Paying customers">
    <div className="rv"><img src="/logos/predict-street.png" alt="" />Predict Street</div><div className="rv"><img src="/logos/yauga.jpg" alt="" />Yauga</div><div className="rv"><img src="/logos/rehitage.svg" alt="" />Rehitage</div><div className="rv"><img src="/logos/surgence.jpg" alt="" />Surgence Labs</div>
  </div>

  <section className="state" id="platform" aria-labelledby="platform-h">
    <h2 className="h2 rv" id="platform-h">The customer record your email tool never had. <span>OnchainSuite reads your app and your contracts, places every customer in a lifecycle stage, and shows you who needs a message before they leave.</span></h2>
  </section>
  <div className="plat">
    <div className="rail"><nav aria-label="Platform" id="rail">
      <a href="#c1" className="on">Know every customer</a><a href="#c2">Build audiences</a><a href="#c3">Run Loops</a><a href="#c4">Ask in plain English</a><a href="#c5">Retain and win back</a>
    </nav></div>
    <div>
      
      <article className="chap" id="c1">
        <div className="chap-h"><h3 className="h3 rv">Every customer sits on one record, with wallets, emails and app accounts side by side, <span>so you can see who each person is and how to reach them.</span></h3><a className="chap-more" href="/platform/audience">More on Audience →</a></div>
        <div className="vis live" data-scene="audience"><div className="stagebox"><div className="ui-pane u" role="img" aria-label="The Audience screen: contacts arrive one by one, then one wallet's record opens with its health score and reachable channels.">
          <div className="u-body" style={{ padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}><div><div className="u-h">Audience</div><p className="u-p">Wallet-first identity. Segments are channel-aware, so reachable in-app is a different filter from has email.</p></div></div>
            <div className="u-stats"><div className="u-card u-stat"><small>Total contacts</small><b>48</b><span>40 with a wallet · 8 email-only</span></div><div className="u-card u-stat"><small>Email-reachable</small><b>40</b><span>have a linked email</span></div><div className="u-card u-stat"><small>Push-reachable</small><b>32</b><span>signed-in devices</span></div><div className="u-card u-stat"><small>Suppressed</small><b>3</b><span>unsubscribed or bounced</span></div></div>
            <div><span className="u-tabs"><span className="on">Contacts <i>48</i></span><span>Lists <i>4</i></span><span>Tags <i>5</i></span><span>Segments <i>7</i></span><span>Suppressed <i>3</i></span></span></div>
            <div className="u-card"><table className="u-tbl" data-rows><thead><tr><th>Contact</th><th>Reachable via</th><th>Email</th><th className="num">Lifetime</th><th>Last active</th></tr></thead><tbody>
              <tr><td>maya.eth <span className="u-addr">0x24e6…2dae</span></td><td><span className="u-ch"><span><svg><use href="#a-mail" /></svg></span><span><svg><use href="#a-phone" /></svg></span><span><svg><use href="#a-at" /></svg></span></span></td><td className="u-muted">Hidden from your team</td><td className="num">0.4 ETH</td><td>2h ago</td></tr>
              <tr data-pick><td><span className="u-addr">0x48cc…ef8d</span></td><td><span className="u-ch"><span><svg><use href="#a-mail" /></svg></span><span><svg><use href="#a-phone" /></svg></span></span></td><td className="u-addr">wallet1@gmail.com</td><td className="num">4.1 ETH</td><td>6d ago</td></tr>
              <tr><td><span className="u-addr">0x9352…a881</span></td><td><span className="u-ch"><span><svg><use href="#a-mail" /></svg></span><span><svg><use href="#a-phone" /></svg></span></span></td><td className="u-muted">Hidden from your team</td><td className="num">7.8 ETH</td><td>1d ago</td></tr>
              <tr><td>sora.eth <span className="u-addr">0x9188…b68d</span></td><td><span className="u-ch"><span><svg><use href="#a-phone" /></svg></span></span></td><td className="u-muted">—</td><td className="num">11.5 ETH</td><td>12d ago</td></tr>
              <tr><td><span className="u-addr">0x5a8e…82d0</span></td><td><span className="u-ch"><span><svg><use href="#a-mail" /></svg></span></span></td><td className="u-addr">wallet4@gmail.com</td><td className="num">15.2 ETH</td><td>48d ago</td></tr>
              <tr><td className="u-muted">No wallet <span className="u-chip n" style={{ height: "18px" }}>Email only</span></td><td><span className="u-ch"><span><svg><use href="#a-mail" /></svg></span></span></td><td className="u-addr">subscriber5@example.com</td><td className="num u-muted">—</td><td>5h ago</td></tr>
              <tr><td>tunde.eth <span className="u-addr">0x0dda…08b3</span></td><td><span className="u-ch"><span><svg><use href="#a-mail" /></svg></span><span><svg><use href="#a-phone" /></svg></span></span></td><td className="u-muted">Hidden from your team</td><td className="num">22.6 ETH</td><td>2h ago</td></tr>
            </tbody></table></div>
          </div>
          <div className="u-drawer" data-drawer>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "14px" }}><svg width="15" height="15" style={{ color: "#1727E0" }}><use href="#a-at" /></svg>Wallet<span style={{ marginLeft: "auto", color: "#767B83" }}>✕</span></div>
            <span className="u-addr">0x48cc…ef8d</span>
            <div className="u-kv2"><div className="u-card"><small>Lifetime value</small><b>4.1 ETH</b></div><div className="u-card"><small>Home chain</small><b>Ethereum</b></div></div>
            <h6>Health</h6>
            <div className="u-card u-health"><div className="sc"><b data-health>61</b><span>Watch</span><em>Activated</em></div><ul><li><span>Active 6d ago</span><span>+38</span></li><li><span>Reachable on 2 channels</span><span>+12</span></li><li><span>4.1 ETH lifetime</span><span>+11</span></li></ul></div>
            <h6>Linked channels</h6>
            <div className="u-link"><span className="ic"><svg><use href="#a-mail" /></svg></span>Email<em className="u-addr">wallet1@gmail.com</em><svg className="ok"><use href="#a-check" /></svg></div>
            <div className="u-link"><span className="ic"><svg><use href="#a-phone" /></svg></span>In-app push<em>device signed in</em><svg className="ok"><use href="#a-check" /></svg></div>
            <div className="u-link"><span className="ic"><svg><use href="#a-at" /></svg></span>X<em>not linked</em></div>
          </div>
        </div></div></div>
        <div className="pair">
          <div><p className="h4 rv">What someone did in your app and on the chain is read together, <span>instead of being pieced together from two tools.</span></p>
            <div className="lanes" data-scene="lanes"><div className="lane"><h5>In your app</h5><div data-ev><span>Completed setup</span><em>3 July</em></div><div data-ev><span>Last opened the app</span><em>58 days ago</em></div></div>
              <div className="join">same customer</div>
              <div className="lane"><h5>On the chain</h5><div data-ev><span>Deposited 12,400 USDC</span><em>66 days ago</em></div><div data-ev><span className="warn">Withdrew 9,800 USDC</span><em>61 days ago</em></div></div></div></div>
          <div><p className="h4 rv">Each record shows which channels reach that person <span>and how healthy their relationship with you is.</span></p>
            <div className="mini pad u" data-scene="health" style={{ display: "grid", gap: "10px" }}>
              <div className="u-health" style={{ padding: "0" }}><div className="sc"><b data-health>61</b><span>Watch</span><em>Activated</em></div><ul><li><span>Active 6d ago</span><span>+38</span></li><li><span>Reachable on 2 channels</span><span>+12</span></li><li><span>4.1 ETH lifetime</span><span>+11</span></li></ul></div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}><span className="u-chip g"><i></i>Email</span><span className="u-chip g"><i></i>In-app push</span><span className="u-chip n">X not linked</span></div></div></div>
        </div>
      <div className="chap-bridge"><p className="bridge rv"><a href="#c2">Once everyone is on one record, you can choose who to talk to.<span aria-hidden="true">↓</span></a></p></div></article>

      
      <article className="chap" id="c2">
        <div className="chap-h"><h3 className="h3 rv">Describe an audience in a sentence and OnchainSuite writes the rules, <span>then shows a live count while you edit.</span></h3><a className="chap-more" href="/platform/segments">More on Segments →</a></div>
        <div className="vis live" data-scene="segment"><div className="stagebox"><div className="ui-pane u" style={{ background: "#FBFBFC" }} role="img" aria-label="The segment builder: a sentence is typed, rules for wallet balance over 10 and has not staked in 30 days appear, and a live preview counts up to 1,204 wallets.">
          <div className="u-body" style={{ padding: "18px 20px" }}><div className="u-seg">
            <div className="u-card" style={{ display: "grid", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600", fontSize: "14px" }}>New segment<span className="u-chip n">Draft</span></div>
              <div><p className="u-label">Describe your audience</p><div className="u-desc"><svg><use href="#a-spark" /></svg><span className="t" data-type="Base wallets over 10 ETH that have not staked in 30 days"></span><span className="u-btn p" data-gen><svg><use href="#a-spark" /></svg>Generate</span></div>
                <p style={{ margin: "6px 0 0", fontSize: "11.5px", color: "#767B83" }}>The prompt becomes editable rules below, so you can tweak anything by hand.</p></div>
              <div className="u-rule" data-rule><span>Where</span><span className="u-sel">Wallet balance</span><span className="u-sel">is greater than</span><span className="u-sel v">10</span><span style={{ color: "#767B83" }}>✕</span></div>
              <div className="u-rule" data-rule><span>And</span><span className="u-sel">Staked</span><span className="u-sel hot">has NOT done</span><span className="u-sel">last 30 days</span><span style={{ color: "#767B83" }}>✕</span></div>
              <div style={{ display: "flex", gap: "14px", fontSize: "12px", color: "#585D65" }}><span>+ Add rule</span><span>+ Add group</span></div>
            </div>
            <div className="u-card"><div style={{ fontWeight: "600", fontSize: "14px" }}>Live preview</div>
              <div className="u-big" style={{ marginTop: "12px" }} data-seg-count>1,204</div><div style={{ fontSize: "11.5px", color: "#767B83" }}>matching wallets · updates as you edit</div>
              <div className="u-wl" data-wl><div><span className="ens-ic" style={{ background: "#E5484D" }}></span>maya.eth <span className="u-addr">0x1A2b…9F3e</span></div><div><span className="ens-ic" style={{ background: "#2F94FF" }}></span><span className="u-addr">0x8Cc4…21aB</span></div><div><span className="ens-ic" style={{ background: "#E8A317" }}></span>leo.eth <span className="u-addr">0xF31d…77c0</span></div></div>
              <div style={{ marginTop: "14px" }}><span className="u-btn"><svg><use href="#a-camp" /></svg>Create campaign from segment</span></div></div>
          </div></div>
        </div></div></div>
        <div className="pair">
          <div><p className="h4 rv">You can find the people who stopped doing something, <span>which is where retention starts and where email tools see nothing.</span></p>
            <div className="rule">Wallet balance <b>&gt; 10 ETH</b><br />and has <b>not staked</b> in the last <b>30 days</b></div></div>
          <div><p className="h4 rv">You see how many wallets match and who they are <span>before you send anything.</span></p>
            <div className="mini pad u" data-scene="avatars" style={{ display: "flex", alignItems: "center", gap: "14px" }}><svg width="86" height="86" viewBox="0 0 86 86" aria-hidden="true"><circle className="ring" cx="43" cy="43" r="22" fill="none" stroke="#1727E0" strokeOpacity=".35" /><circle className="ring r2" cx="43" cy="43" r="22" fill="none" stroke="#1727E0" strokeOpacity=".35" /><circle cx="43" cy="43" r="18" fill="#F0F4FF" /><text x="43" y="47" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1727E0" fontFamily="Instrument Sans">1,204</text></svg>
              <div style={{ display: "grid", gap: "6px" }}><span className="u-chip b bob">maya.eth</span><span className="u-chip b bob d2">0x8Cc4…21aB</span><span className="u-chip b bob d3">leo.eth</span></div></div></div>
        </div>
      <div className="chap-bridge"><p className="bridge rv"><a href="#c3">An audience does nothing until something sends to it, and that is what Loops are for.<span aria-hidden="true">↓</span></a></p></div></article>

      
      <article className="chap" id="c3">
        <div className="chap-h"><h3 className="h3 rv">Loops start from something on the chain and stop the moment the customer acts. <span>A Loop is an automated customer journey that waits, sends by email or in-app, and ends when the action is recorded.</span></h3><a className="chap-more" href="/platform/loops">More on Loops →</a></div>
        <div className="vis live" data-scene="loop"><div className="stagebox"><div className="ui-pane u" style={{ background: "#FBFBFC" }} role="img" aria-label="The Loop builder for a dormant 30-day win-back: a goes dormant trigger, an email, a three-day wait and an in-app message draw in, and a customer moves through them.">
          <div className="u-top" style={{ gap: "12px" }}><span>← Loops</span><b style={{ fontSize: "14px" }}>Dormant 30d win-back</b><span className="u-chip g"><i></i>Ready</span><span>4 nodes · 0 issues</span></div>
          <div className="u-body" style={{ padding: "12px", height: "calc(100% - 44px)" }}><div className="u-flow">
            <div className="u-card u-pal"><h6>On-chain triggers · 6</h6>
              <div className="u-trig"><i>⚡</i><div><b>On-chain event</b><small>Wallet interacts with a contract</small></div></div>
              <div className="u-trig"><i>◇</i><div><b>Holder acquired</b><small>New wallet mints or buys in</small></div></div>
              <div className="u-trig"><i>⇄</i><div><b>Swap completed</b><small>DEX trade or token exchange</small></div></div>
              <div className="u-trig"><i>💧</i><div><b>Liquidity added</b><small>Deposits into your pools</small></div></div>
              <div className="u-trig"><i>⇣</i><div><b>Capital withdrawn</b><small>Burns, unstakes or withdraws</small></div></div></div>
            <div className="u-cv" data-cv><span className="u-token" data-token></span>
              <div className="u-node trig" data-n><span className="ic" style={{ background: "#FFE4D6", color: "#E04E12" }}><svg><use href="#a-bolt" /></svg></span><div><small>Trigger</small><b>Goes dormant</b></div></div>
              <div className="u-conn" data-c></div>
              <div className="u-node" data-n><span className="ic" style={{ background: "#F0F4FF", color: "#1727E0" }}><svg><use href="#a-mail" /></svg></span><div><small>Send email</small><b>Email · "We miss you"</b><div className="d">Email or reusable template</div></div></div>
              <div className="u-conn" data-c></div>
              <div className="u-node" data-n><span className="ic" style={{ background: "#F0F4FF", color: "#1727E0" }}><svg><use href="#a-wait" /></svg></span><div><small>Wait</small><b>Wait 3 days</b><div className="d">Pause before the next step</div></div></div>
              <div className="u-conn" data-c></div>
              <div className="u-node" data-n><span className="ic" style={{ background: "#F0F4FF", color: "#1727E0" }}><svg><use href="#a-phone" /></svg></span><div><small>Send in-app</small><b>Push · "Your Hammers are waiting"</b><div className="d">Notification in your app</div></div></div>
              <div className="u-conn" data-c></div>
              <span className="u-exit" data-n>Exit flow</span>
            </div>
          </div></div>
        </div></div></div>
        <div className="pair">
          <div><p className="h4 rv">Six on-chain triggers sit next to the usual form, list and email ones, <span>so a Loop can start from a withdrawal as easily as a sign-up.</span></p>
            <div className="chips"><span className="bob"><i>⚡</i>Goes dormant</span><span className="bob d2"><i>⇣</i>Capital withdrawn</span><span className="bob d3"><i>◇</i>Holder acquired</span><span className="bob d4"><i>⇄</i>Swap completed</span><span className="bob d5"><i>💧</i>Liquidity added</span></div></div>
          <div><p className="h4 rv">Every entry is accounted for, <span>so you can see who completed, who is still waiting and who left.</span></p>
            <div className="mini u" data-scene="entries"><table className="u-tbl"><tbody>
              <tr><td>maya.eth</td><td><span className="u-chip g" data-st><i></i>Completed</span></td><td className="u-muted">Email → bought a pack</td><td className="u-muted">14 min ago</td></tr>
              <tr><td className="u-addr">0x3F4a…8a21</td><td><span className="u-chip b" data-flip><i></i>In flow</span></td><td className="u-muted" data-flipnote>Waiting · 1 hour</td><td className="u-muted">38 min ago</td></tr>
              <tr><td>leo.eth</td><td><span className="u-chip g"><i></i>Completed</span></td><td className="u-muted">Email → bought a pack</td><td className="u-muted">2h ago</td></tr>
              <tr><td className="u-addr">0x91Cb…4e07</td><td><span className="u-chip n"><i></i>Exited</span></td><td className="u-muted">Unsubscribed</td><td className="u-muted">5h ago</td></tr>
            </tbody></table></div></div>
        </div>
      <div className="chap-bridge"><p className="bridge rv"><a href="#c4">When you are not sure who needs a Loop, you can ask.<span aria-hidden="true">↓</span></a></p></div></article>

      
      <article className="chap" id="c4">
        <div className="chap-h"><h3 className="h3 rv">Ask your data a question in plain English, <span>and the Intelligence MCP turns it into a query across your app and your contracts, so nobody has to write SQL.</span></h3><a className="chap-more" href="/platform/intelligence-mcp">More on the Intelligence MCP →</a></div>
        <div className="vis live" data-scene="mcp"><div className="stagebox"><div className="ui-pane u" role="img" aria-label="The Intelligence MCP answering wallets that opened but never clicked: the question is sent, the answer streams in and a table of four wallets appears.">
          <div className="u-body" style={{ padding: "18px 20px", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><div className="u-h">Intelligence MCP</div><span style={{ marginLeft: "auto", fontSize: "11.5px", color: "#767B83" }}>Last synced 1m ago · 746 wallets</span><span className="u-btn">Sync wallets</span></div>
            <div><span className="u-tabs" style={{ background: "none", padding: "0" }}><span style={{ boxShadow: "inset 0 -2px 0 #1727E0", borderRadius: "0", color: "#010F31" }}>Chat</span><span>Segments <i>7</i></span></span></div>
            <div className="u-card" style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "420px" }}>
              <div className="u-bub" data-bub>Wallets that opened but never clicked</div>
              <div className="u-msg" data-msg><span className="bot"><svg><use href="#a-brain" /></svg></span><div>
                <div className="u-steps" data-steps><span><svg><use href="#a-check" /></svg>Read email and push engagement</span><span><svg><use href="#a-check" /></svg>Joined 746 wallets across both lanes</span></div>
                <div data-stream>Here&rsquo;s what I found for <b>&ldquo;Wallets that opened but never clicked&rdquo;</b>: the wallets that engaged, and how that engagement trends week over week.</div>
                <div className="u-ans" data-ans><div className="bar"><span className="on">Table</span><span>Chart</span><span>SQL</span></div>
                  <table className="u-tbl"><thead><tr><th>Wallet</th><th className="num">Opens</th><th className="num">Clicks</th><th className="num">Last seen</th></tr></thead><tbody data-rows2>
                    <tr><td><span className="ens-ic" style={{ background: "#E5484D" }}></span>maya.eth <span className="u-addr">0x1A2b…9F3e</span></td><td className="num">4</td><td className="num">0</td><td className="num">Jul 22</td></tr>
                    <tr><td><span className="ens-ic" style={{ background: "#8E4FD8" }}></span><span className="u-addr">0x50E8…F401</span></td><td className="num">3</td><td className="num">0</td><td className="num">Jul 21</td></tr>
                    <tr><td><span className="ens-ic" style={{ background: "#D84FB5" }}></span>dami.eth <span className="u-addr">0xDD02…B2Cd</span></td><td className="num">3</td><td className="num">0</td><td className="num">Jul 21</td></tr>
                    <tr><td><span className="ens-ic" style={{ background: "#17A66B" }}></span><span className="u-addr">0xA27d…1e2F</span></td><td className="num">2</td><td className="num">0</td><td className="num">Jul 19</td></tr>
                  </tbody></table>
                  <div className="acts"><span className="u-btn"><svg><use href="#a-seg" /></svg>Save as segment</span><span className="u-btn"><svg><use href="#a-camp" /></svg>Create campaign</span><span className="u-btn" style={{ borderColor: "transparent" }}>Export CSV</span></div></div>
              </div></div>
            </div>
          </div>
        </div></div></div>
        <div className="pair">
          <div><p className="h4 rv">Every answer comes as a table, a chart and the SQL behind it, <span>so you can check the working.</span></p>
            <div data-scene="cycle"><div className="split3" aria-hidden="true"><span className="on">Table</span><span>Chart</span><span>SQL</span></div>
              <div className="cyc u" aria-hidden="true">
                <div className="on"><table className="u-tbl" style={{ fontSize: "12px" }}><tbody><tr><td>maya.eth</td><td className="num">4 opens</td><td className="num">0 clicks</td></tr><tr><td className="u-addr">0x50E8…F401</td><td className="num">3 opens</td><td className="num">0 clicks</td></tr></tbody></table></div>
                <div><div className="u-bars" style={{ height: "72px", padding: "6px 10px" }}><span style={{ height: "100%" }}></span><span style={{ height: "75%" }}></span><span style={{ height: "75%" }}></span><span style={{ height: "50%" }}></span></div></div>
                <div><pre className="u-sql" style={{ padding: "0" }}>SELECT wallet, opens, clicks{"\n"}FROM engagement WHERE opens &gt; 0{"\n"}AND clicks = 0</pre></div>
              </div></div></div>
          <div><p className="h4 rv">You can save an answer as a segment or turn it into a campaign, <span>and nothing runs until you approve it.</span></p>
            <div className="appr"><span className="btn">Save as segment</span><span className="btn approve-pulse">Create campaign</span><span>Waiting for your approval</span></div></div>
        </div>
      <div className="chap-bridge"><p className="bridge rv"><a href="#c5">A question tells you who is slipping today. Lifecycle stages show you every week.<span aria-hidden="true">↓</span></a></p></div></article>

      
      <article className="chap" id="c5">
        <div className="chap-h"><h3 className="h3 rv">See who is slipping before they leave, <span>because every customer sits in a lifecycle stage worked out from what they actually did.</span></h3></div>
        <div className="vis live short" data-scene="life"><div className="stagebox" style={{ height: "auto" }}><div className="u" style={{ display: "grid", gap: "12px" }} role="img" aria-label="The Dashboard: five headline numbers count up and the Lifecycle bar fills, showing 8 customers came back this week and 9 started slipping.">
          <div className="u-card u-kpis" style={{ boxShadow: "0 18px 40px -26px rgba(16,24,40,.3)" }}>
            <div><small>Wallets reached · 30d</small><b data-count="18204">18,204</b><span>↗ +12.4%</span></div><div><small>Email open rate · 30d</small><b data-count="42.3" data-dec="1" data-suf="%">42.3%</b><span>↗ +3.1pt</span></div><div><small>Push view rate · 30d</small><b data-count="90.6" data-dec="1" data-suf="%">90.6%</b><span>↗ +1.8pt</span></div><div><small>Active wallets · 30d</small><b data-count="9412">9,412</b><span>↗ +8.6%</span></div><div><small>On-chain conversions · 30d</small><b data-count="1164">1,164</b><span>↗ +22.8%</span></div></div>
          <div className="u-card u-life" style={{ boxShadow: "0 18px 40px -26px rgba(16,24,40,.3)" }}><div className="hd">Lifecycle<span>48 wallets, healthiest first</span></div>
            <div className="nums2"><div><b style={{ color: "#128355" }} data-count="8">8</b><small>came back this week</small></div><div><b style={{ color: "#E04E12" }} data-count="9">9</b><small>started slipping</small></div></div>
            <div className="u-lbar" data-lbar><span style={{ flex: "5", background: "#2F94FF" }}></span><span style={{ flex: "14", background: "#1727E0" }}></span><span style={{ flex: "12", background: "#17A66B" }}></span><span style={{ flex: "8", background: "#128355" }}></span><span style={{ flex: "1", background: "#FF8449" }}></span><span style={{ flex: "8", background: "#E5484D" }}></span></div>
            <div className="u-leg"><span><i style={{ background: "#2F94FF" }}></i>New<b>5</b></span><span><i style={{ background: "#1727E0" }}></i>Activated<b>14</b></span><span><i style={{ background: "#17A66B" }}></i>Engaged<b>12</b></span><span><i style={{ background: "#128355" }}></i>Reactivated<b>8</b></span><span><i style={{ background: "#FF8449" }}></i>At risk<b>1</b></span><span><i style={{ background: "#E5484D" }}></i>Dormant<b>8</b></span></div></div>
        </div></div></div>
        <div className="pair">
          <div><p className="h4 rv">You see who came back this week and who started slipping, <span>from the same records your Loops use.</span></p>
            <div className="nums"><div><b style={{ color: "var(--g)" }} data-count="8">8</b><span>came back</span></div><div><b style={{ color: "#C2410C" }} data-count="9">9</b><span>started slipping</span></div></div></div>
          <div><p className="h4 rv">You can hold a share of customers back from every campaign and Loop, <span>so the lift you report is real.</span></p>
            <div className="hold" data-scene="hold" aria-hidden="true"><span>Messaged</span><span>Held back</span></div></div>
        </div>
      <div className="chap-bridge"><p className="bridge rv"><a href="#onb-h">All of this starts from data you already hold.<span aria-hidden="true">↓</span></a></p></div></article>
    </div>
  </div>

  <section className="onb" aria-labelledby="onb-h">
    <div><h2 className="h2 rv" id="onb-h">You can be up and running without a data team, <span>because OnchainSuite finds your contracts and holders from your project&rsquo;s address.</span></h2>
      <ol className="steps onb-steps">
        <li className="rv"><button type="button" className="onb-step on" data-onb-step="0" aria-pressed="true"><i>01</i><b>Tell us where your community lives</b><span>A contract address, a project name or your website.</span></button></li>
        <li className="rv"><button type="button" className="onb-step" data-onb-step="1" aria-pressed="false"><i>02</i><b>Bring in the records you already hold</b><span>Email lists, app accounts and wallets, in whatever shape they are in.</span></button></li>
        <li className="rv"><button type="button" className="onb-step" data-onb-step="2" aria-pressed="false"><i>03</i><b>Connect a channel and send</b><span>Verify a sending domain for email, or add the SDK for in-app.</span></button></li>
      </ol>
      <div className="ctas" style={{ justifyContent: "flex-start", marginTop: "32px" }}><a className="btn solid" href="/early-access">Book a walkthrough</a></div><p className="bridge rv"><a href="#concept-h">Underneath every step sits one engine.<span aria-hidden="true">↓</span></a></p></div>
    <div className="onb-col"><div className="onb-stage"><div className="shot u onb-card" data-scene="onb" role="img" aria-label="Onboarding in three steps: point OnchainSuite at your contract, bring in the records you already hold, then connect email and in-app.">
      <div className="onb-pane on" data-pane="0">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><svg className="mark" style={{ width: "12px", height: "18px" }}><use href="#ocs-mark" fill="url(#mg)" /></svg><span style={{ display: "flex", gap: "4px" }}><i style={{ width: "14px", height: "4px", borderRadius: "2px", background: "#1727E0" }}></i><i style={{ width: "6px", height: "4px", borderRadius: "2px", background: "#DEE0E3" }}></i><i style={{ width: "6px", height: "4px", borderRadius: "2px", background: "#DEE0E3" }}></i><i style={{ width: "6px", height: "4px", borderRadius: "2px", background: "#DEE0E3" }}></i></span></div>
      <div style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.01em", marginTop: "18px" }}>Where does your community live?</div>
      <div style={{ color: "#585D65", fontSize: "13px" }}>Give us anything that points at your project. We&rsquo;ll find the contract, the holders and the rest ourselves.</div>
      <div><p className="u-label" style={{ marginTop: "6px" }}>Contract address, project name or website</p><div className="u-sel v" style={{ height: "36px", borderColor: "#1727E0", boxShadow: "0 0 0 2px #E4EAFF" }}><span className="u-addr" data-type="0x3F4a…8a21"></span></div>
        <p style={{ fontSize: "11.5px", color: "#767B83", margin: "6px 0 0" }}>We read the holder list and the contracts deployed alongside it. Nothing is sent anywhere.</p></div>
      <div data-found style={{ display: "grid", gap: "8px" }}>
        <div className="u-link"><span className="ic" style={{ background: "#F0F4FF", color: "#1727E0" }}><svg><use href="#a-data" /></svg></span>Acme Packs<em className="u-addr">ERC-721 · Base</em><svg className="ok"><use href="#a-check" /></svg></div>
        <div className="u-link"><span className="ic" style={{ background: "#F0F4FF", color: "#1727E0" }}><svg><use href="#a-data" /></svg></span>Acme Staking<em className="u-addr">Vault · Base</em><svg className="ok"><use href="#a-check" /></svg></div>
        <div className="u-link"><span className="ic" style={{ background: "#F0F4FF", color: "#1727E0" }}><svg><use href="#a-aud" /></svg></span>Holders found<em data-holders>746</em></div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}><span className="u-btn p">Continue</span></div>
</div>
      <div className="onb-pane" data-pane="1">
        <div className="onb-top"><svg className="mark" style={{ width: "12px", height: "18px" }}><use href="#ocs-mark" fill="url(#mg)" /></svg><span className="onb-dots"><i /><i className="on" /><i /></span></div>
        <div className="onb-h">Bring in the records you already hold</div>
        <div className="onb-p">Upload a file or connect a source. We link a row to a wallet only where you already hold that link.</div>
        <div className="onb-rows">
          <div className="u-link"><span className="ic"><svg><use href="#a-data" /></svg></span>subscribers.csv<em className="u-addr">4,812 rows</em><svg className="ok"><use href="#a-check" /></svg></div>
          <div className="u-link"><span className="ic"><img src="/integrations/googlesheets.svg" alt="" width={16} height={16} /></span>Season 2 waitlist<em>Google Sheets</em><svg className="ok"><use href="#a-check" /></svg></div>
          <div className="u-link"><span className="ic"><img src="/integrations/segment.svg" alt="" width={16} height={16} /></span>Product events<em>Segment</em><svg className="ok"><use href="#a-check" /></svg></div>
          <div className="u-link"><span className="ic"><img src="/integrations/privy.png" alt="" width={16} height={16} /></span>Wallet logins<em>Privy</em><svg className="ok"><use href="#a-check" /></svg></div>
        </div>
        <div className="onb-meter"><div><b>4,812</b> contacts imported, <b>3,104</b> linked to a wallet</div><span><i /></span></div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><span className="u-btn p">Continue</span></div>
      </div>
      <div className="onb-pane" data-pane="2">
        <div className="onb-top"><svg className="mark" style={{ width: "12px", height: "18px" }}><use href="#ocs-mark" fill="url(#mg)" /></svg><span className="onb-dots"><i /><i /><i className="on" /></span></div>
        <div className="onb-h">Connect a channel and send</div>
        <div className="onb-p">Verify a sending domain for email, add the SDK for in-app, or do both.</div>
        <div className="onb-ch">
          <div className="onb-chh"><span className="ic"><svg><use href="#a-mail" /></svg></span><b>Email</b><span className="u-chip g"><i />Verified</span></div>
          <div className="onb-dns"><span>SPF</span><svg className="ok"><use href="#a-check" /></svg><span>DKIM</span><svg className="ok"><use href="#a-check" /></svg><span>DMARC</span><svg className="ok"><use href="#a-check" /></svg><em className="u-addr">acme.xyz</em></div>
        </div>
        <div className="onb-ch">
          <div className="onb-chh"><span className="ic"><svg><use href="#a-phone" /></svg></span><b>In-app</b><span className="u-chip g"><i />Connected</span></div>
          <div className="onb-dns"><em className="u-addr">app.acme.xyz</em><span>First wallet seen 2 minutes ago</span></div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><span className="u-btn p">Send your first campaign</span></div>
      </div>
    </div></div></div>
  </section>
</div>

<div className="dark" data-dark>
  <div className="wrap">
    <section className="concept" id="concept" aria-labelledby="concept-h"><div className="pin" id="conceptPin"><div className="pin-in" style={{ textAlign: "center" }}>
      
      <h2 className="giant" id="concept-h">Lifecycle Intelligence</h2>
      <p className="lede">The engine underneath OnchainSuite reads both lanes of your customer data and turns them into one record per person.</p>
      <svg className="lanesvg" viewBox="0 0 1200 300" role="img" aria-label="As you scroll, events from your app and from your contracts travel along two lanes and merge into one customer record that fills in and turns to at risk.">
        <defs>
          <linearGradient id="lA" x1="0" x2="1"><stop offset="0" stopColor="#3A3D45" stopOpacity="0" /><stop offset=".5" stopColor="#7C88FF" /><stop offset="1" stopColor="#C9CFFF" /></linearGradient>
          <linearGradient id="lB" x1="0" x2="1"><stop offset="0" stopColor="#3A3D45" stopOpacity="0" /><stop offset=".5" stopColor="#4F8BFF" /><stop offset="1" stopColor="#C9CFFF" /></linearGradient>
          <radialGradient id="glow"><stop offset="0" stopColor="#5865FF" stopOpacity=".55" /><stop offset="1" stopColor="#5865FF" stopOpacity="0" /></radialGradient>
        </defs>
        <circle id="cGlow" cx="900" cy="150" r="190" fill="url(#glow)" opacity=".4" />
        <path id="laneA" d="M0 60 H500 C640 60 690 150 800 150" fill="none" stroke="url(#lA)" strokeWidth="1.5" />
        <path id="laneB" d="M0 240 H500 C640 240 690 150 800 150" fill="none" stroke="url(#lB)" strokeWidth="1.5" />
        <g fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#8C8F96"><text x="40" y="40">YOUR APP</text><text x="40" y="282">YOUR CONTRACTS</text></g>
        <g id="pills" fontFamily="Inter, sans-serif" fontSize="12.5" textAnchor="middle"></g>
        <g transform="translate(800 80)">
          <rect width="260" height="140" rx="14" fill="#FFFFFF" />
          <circle cx="34" cy="34" r="16" fill="#3B6BFF" /><text x="34" y="38.5" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#fff">JM</text>
          <text x="60" y="30" fontFamily="Inter, sans-serif" fontSize="14.5" fontWeight="600" fill="#1C1D1F">Josh Miller</text>
          <text x="60" y="48" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#75777C">0x667c…3fa1</text>
          <g fontFamily="Inter, sans-serif" fontSize="12" fill="#3B3D42">
            <text className="rec-line" data-rl="0" x="20" y="76">✓ Signed up · finished setup</text>
            <text className="rec-line" data-rl="1" x="20" y="96">✓ Deposited 12,400 USDC</text>
            <text className="rec-line" data-rl="2" x="20" y="116" fill="#B42318">✓ Withdrew 9,800 USDC</text>
          </g>
          <g className="rec-line" data-rl="3"><rect x="176" y="18" width="68" height="22" rx="6" fill="#FDEAEA" /><text x="210" y="33" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11.5" fontWeight="600" fill="#B42318">At risk</text></g>
        </g>
      </svg>
    </div></div>
      <div className="five">
        <div className="rv"><svg aria-hidden="true"><use href="#i-layers" /></svg><p className="h4">Reads both lanes <span>at source, from your app and from your contracts.</span></p></div>
        <div className="rv"><svg aria-hidden="true"><use href="#i-text" /></svg><p className="h4">Speaks your language, <span>turning contract events into deposits, withdrawals and activations.</span></p></div>
        <div className="rv"><svg aria-hidden="true"><use href="#i-user" /></svg><p className="h4">Finds the customer <span>behind each action, by email, app account or wallet.</span></p></div>
        <div className="rv"><svg aria-hidden="true"><use href="#i-clock" /></svg><p className="h4">Starts from history, <span>with lending, perpetuals and real-world-asset records back to the first block.</span></p></div>
        <div className="rv"><svg aria-hidden="true"><use href="#i-key" /></svg><p className="h4">Never holds keys, <span>because our access to the chain is read-only.</span></p></div>
      </div><div className="concept-bridge"><p className="bridge rv dk"><a href="#nomail-h">Because a record can start from the wallet, even a customer with no email can be reached.<span aria-hidden="true">↓</span></a></p></div>
    </section>

    <section className="nomail dk-sec" aria-labelledby="nomail-h">
      <div className="nomail-bg" aria-hidden="true"></div>
      <div><h2 className="h2 rv" id="nomail-h">A wallet with no email address is still a customer you can reach.</h2>
        <div className="duo" data-scene="nomail">
          <div className="side esp"><h3>An email platform</h3><div className="to">To: 0x9a2e…e41</div><span className="tapsend">Send</span><div className="verd"><i>×</i>No address, so nothing is sent</div></div>
          <div className="vs" aria-hidden="true">VS</div>
          <div className="side ocs"><h3>OnchainSuite <span>in-app</span></h3><div className="to">To: 0x9a2e…e41</div><span className="tapsend">Send</span>
            <div className="push"><span className="ic"><svg className="mark" aria-hidden="true"><use href="#ocs-mark" fill="#FFFFFF" /></svg></span><b>212 USDC in rewards is waiting</b><span>Claim it in one step.</span><em>Claim rewards</em></div>
            <div className="verd"><i>✓</i>Shows the next time they open your app</div></div>
        </div>
        <p className="fine"><span><svg aria-hidden="true"><use href="#i-return" /></svg>Reaches customers who come back, not those who have gone for good.</span><span><svg aria-hidden="true"><use href="#i-lock" /></svg>A contact can exist with only a wallet.</span></p><p className="bridge rv dk"><a href="#stack-h">In-app and email are two ways in. Here is everything else that connects.<span aria-hidden="true">↓</span></a></p>
      </div>
    </section>

    <section className="stack dk-sec" aria-labelledby="stack-h">
      <h2 className="h2 rv" id="stack-h">Your chains, your lists and your sending all connect to OnchainSuite.</h2>
      <p className="rv">Bring the records you already hold, read the chains your product runs on, and send through infrastructure you can trust. Segment and Zapier open up the rest of your stack.</p>
      <div className="mq" aria-label="Connects directly to Ethereum, Base, Arbitrum, Optimism, Polygon, WalletConnect, Privy, Dynamic, Web3Auth, Segment, Zapier, Google Sheets, CSV import, Webhooks, AWS SES, Azure Communication Services, and through Segment or Zapier: Amplitude, Mixpanel, Firebase, Attio, HubSpot, Salesforce, PostHog, Intercom, Slack, Notion, Airtable, Stripe, Shopify">
        <div className="mq-row" aria-hidden="true"><span className="lg"><img src="/integrations/ethereum.svg" alt="" width={22} height={22} />Ethereum</span><span className="lg"><img src="/integrations/base.svg" alt="" width={22} height={22} />Base</span><span className="lg"><img src="/integrations/arbitrum.svg" alt="" width={22} height={22} />Arbitrum</span><span className="lg"><img src="/integrations/optimism.svg" alt="" width={22} height={22} />Optimism</span><span className="lg"><img src="/integrations/polygon.svg" alt="" width={22} height={22} />Polygon</span><span className="lg"><img src="/integrations/walletconnect.svg" alt="" width={22} height={22} />WalletConnect</span><span className="lg"><img src="/integrations/privy.png" alt="" width={22} height={22} />Privy</span><span className="lg"><img src="/integrations/dynamic.jpg" alt="" width={22} height={22} />Dynamic</span><span className="lg"><img src="/integrations/web3auth.png" alt="" width={22} height={22} />Web3Auth</span><span className="lg"><img src="/integrations/segment.svg" alt="" width={22} height={22} />Segment</span><span className="lg"><img src="/integrations/zapier.svg" alt="" width={22} height={22} />Zapier</span><span className="lg"><img src="/integrations/googlesheets.svg" alt="" width={22} height={22} />Google Sheets</span><span className="lg"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 1.5h5.5L13 5v9.5H4z M9.5 1.5V5H13" fill="none" stroke="#C9CCD3" strokeWidth="1.3" strokeLinejoin="round" /></svg>CSV import</span><span className="lg"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="4" cy="11.5" r="2" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /><circle cx="12" cy="11.5" r="2" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /><circle cx="8" cy="4" r="2" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /><path d="M7 5.8L4.9 9.7M9 5.8l2.1 3.9M6 11.5h4" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /></svg>Webhooks</span><span className="lg"><img src="/integrations/aws-ses.svg" alt="" width={22} height={22} />AWS SES</span><span className="lg"><img src="/integrations/azure.svg" alt="" width={22} height={22} />Azure Communication Services</span><span className="lg"><img src="/integrations/ethereum.svg" alt="" width={22} height={22} />Ethereum</span><span className="lg"><img src="/integrations/base.svg" alt="" width={22} height={22} />Base</span><span className="lg"><img src="/integrations/arbitrum.svg" alt="" width={22} height={22} />Arbitrum</span><span className="lg"><img src="/integrations/optimism.svg" alt="" width={22} height={22} />Optimism</span><span className="lg"><img src="/integrations/polygon.svg" alt="" width={22} height={22} />Polygon</span><span className="lg"><img src="/integrations/walletconnect.svg" alt="" width={22} height={22} />WalletConnect</span><span className="lg"><img src="/integrations/privy.png" alt="" width={22} height={22} />Privy</span><span className="lg"><img src="/integrations/dynamic.jpg" alt="" width={22} height={22} />Dynamic</span><span className="lg"><img src="/integrations/web3auth.png" alt="" width={22} height={22} />Web3Auth</span><span className="lg"><img src="/integrations/segment.svg" alt="" width={22} height={22} />Segment</span><span className="lg"><img src="/integrations/zapier.svg" alt="" width={22} height={22} />Zapier</span><span className="lg"><img src="/integrations/googlesheets.svg" alt="" width={22} height={22} />Google Sheets</span><span className="lg"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 1.5h5.5L13 5v9.5H4z M9.5 1.5V5H13" fill="none" stroke="#C9CCD3" strokeWidth="1.3" strokeLinejoin="round" /></svg>CSV import</span><span className="lg"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="4" cy="11.5" r="2" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /><circle cx="12" cy="11.5" r="2" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /><circle cx="8" cy="4" r="2" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /><path d="M7 5.8L4.9 9.7M9 5.8l2.1 3.9M6 11.5h4" fill="none" stroke="#C9CCD3" strokeWidth="1.3" /></svg>Webhooks</span><span className="lg"><img src="/integrations/aws-ses.svg" alt="" width={22} height={22} />AWS SES</span><span className="lg"><img src="/integrations/azure.svg" alt="" width={22} height={22} />Azure Communication Services</span></div>
        <div className="mq-row rev" aria-hidden="true"><span className="lg"><img src="/integrations/amplitude.svg" alt="" width={22} height={22} />Amplitude</span><span className="lg"><img src="/integrations/mixpanel.svg" alt="" width={22} height={22} />Mixpanel</span><span className="lg"><img src="/integrations/firebase.svg" alt="" width={22} height={22} />Firebase</span><span className="lg"><img src="/integrations/attio.svg" alt="" width={22} height={22} />Attio</span><span className="lg"><img src="/integrations/hubspot.svg" alt="" width={22} height={22} />HubSpot</span><span className="lg"><img src="/integrations/salesforce.svg" alt="" width={22} height={22} />Salesforce</span><span className="lg"><img src="/integrations/posthog.svg" alt="" width={22} height={22} />PostHog</span><span className="lg"><img src="/integrations/intercom.svg" alt="" width={22} height={22} />Intercom</span><span className="lg"><img src="/integrations/slack.svg" alt="" width={22} height={22} />Slack</span><span className="lg"><img src="/integrations/notion.svg" alt="" width={22} height={22} />Notion</span><span className="lg"><img src="/integrations/airtable.svg" alt="" width={22} height={22} />Airtable</span><span className="lg"><img src="/integrations/stripe.svg" alt="" width={22} height={22} />Stripe</span><span className="lg"><img src="/integrations/shopify.svg" alt="" width={22} height={22} />Shopify</span><span className="lg"><img src="/integrations/amplitude.svg" alt="" width={22} height={22} />Amplitude</span><span className="lg"><img src="/integrations/mixpanel.svg" alt="" width={22} height={22} />Mixpanel</span><span className="lg"><img src="/integrations/firebase.svg" alt="" width={22} height={22} />Firebase</span><span className="lg"><img src="/integrations/attio.svg" alt="" width={22} height={22} />Attio</span><span className="lg"><img src="/integrations/hubspot.svg" alt="" width={22} height={22} />HubSpot</span><span className="lg"><img src="/integrations/salesforce.svg" alt="" width={22} height={22} />Salesforce</span><span className="lg"><img src="/integrations/posthog.svg" alt="" width={22} height={22} />PostHog</span><span className="lg"><img src="/integrations/intercom.svg" alt="" width={22} height={22} />Intercom</span><span className="lg"><img src="/integrations/slack.svg" alt="" width={22} height={22} />Slack</span><span className="lg"><img src="/integrations/notion.svg" alt="" width={22} height={22} />Notion</span><span className="lg"><img src="/integrations/airtable.svg" alt="" width={22} height={22} />Airtable</span><span className="lg"><img src="/integrations/stripe.svg" alt="" width={22} height={22} />Stripe</span><span className="lg"><img src="/integrations/shopify.svg" alt="" width={22} height={22} />Shopify</span></div>
      </div>
      <p className="mq-cap rv">The second row connects through Segment or Zapier.</p><p className="bridge rv dk"><a href="#dev-h">If your engineers want to go further, they can build on it directly.<span aria-hidden="true">↓</span></a></p>
    </section>

    <section className="dev dk-sec" id="dev" aria-labelledby="dev-h">
      <div><h2 className="h2 rv" id="dev-h">An SDK, an API and an MCP, <span>so your engineers can build on OnchainSuite as much or as little as they like.</span></h2>
        <ul>
          <li className="rv"><b>In-app SDK</b><span>Add one script and call identify() when a wallet connects.</span></li>
          <li className="rv"><b>REST API</b><span>Send custom events to start Loops and read results back.</span></li>
          <li className="rv"><b>Intelligence MCP</b><span>Question your app and contract data from the tools your team already uses.</span></li>
        </ul><p className="bridge rv dk"><a href="#stmt-h">We built it this way for one reason.<span aria-hidden="true">↓</span></a></p></div>
      <div><div className="code" data-scene="code"><div className="code-h"><b>app.ts</b><span>npm i @onchainsuite/web</span></div>
<pre><span className="ln"><span className="k">import</span> {"{"} OnchainSuite {"}"} <span className="k">from</span> <span className="s">'@onchainsuite/web'</span>;</span><span className="ln">&nbsp;</span><span className="ln"><span className="k">const</span> os = OnchainSuite.init({"{"} key: <span className="s">'pk_live_…'</span> {"}"});</span><span className="ln">&nbsp;</span><span className="ln"><span className="c">// Tell us which wallet is connected.</span></span><span className="ln">os.identify({"{"} wallet: address {"}"});</span><span className="ln">&nbsp;</span><span className="ln"><span className="c">// Wallet addresses only. identify() rejects email,</span></span><span className="ln"><span className="c">// so you never hold the wallet-to-person mapping.</span></span></pre></div></div>
    </section>
  </div>
</div>

<div className="wrap">
  <section className="stmt" aria-labelledby="stmt-h"><div className="pin" id="stmtPin"><div className="pin-in">
    <h2 className="sr" id="stmt-h" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>Why we built OnchainSuite</h2>
    <blockquote className="f-serif" id="stmtQ">&ldquo;<span>We</span> <span>want</span> <span>every</span> <span>growth</span> <span>and</span> <span>CRM</span> <span>manager</span> <span>to</span> <span>see</span> <span>what</span> <span>their</span> <span>customers</span> <span>do</span> <span>on-chain,</span> <span>know</span> <span>where</span> <span>each</span> <span>one</span> <span>is</span> <span>in</span> <span>their</span> <span>lifecycle,</span> <span>and</span> <span>send</span> <span>the</span> <span>right</span> <span>message</span> <span>without</span> <span>asking</span> <span>a</span> <span>developer</span> <span>for</span> <span>a</span> <span>new</span> <span>dataset.</span>&rdquo;</blockquote>
    <cite><b>Olusegun Isaac Aborode</b><span>Founder and CEO, OnchainSuite</span></cite>
  </div></div></section>

  <section className="scale" aria-labelledby="scale-h">
    <div><h2 className="h2 rv" id="scale-h">Lending, perpetuals and real-world-asset products start from their history, <span>not an empty table.</span></h2>
      <p className="atlas-def rv">Atlas is the blockchain data warehouse OnchainSuite reads from, built with Datum Labs. It holds decoded records for those applications across EVM chains, going back to the first block.</p>
      <div className="stats">
        <div className="rv"><b><span data-count="5">5</span> TB+</b><span>of decoded contract data</span></div>
        <div className="rv"><b>Genesis</b><span>backfilled to the first block</span></div>
        <div className="rv"><b data-count="26">26</b><span>platforms compared, none reads a contract</span></div>
        <div className="rv"><b>0</b><span>keys or funds held</span></div>
      </div><p className="bridge rv"><a href="#cta-h">From the first day, that history shows you who is drifting.<span aria-hidden="true">↓</span></a></p></div>
    <div className="tlwrap" data-scene="tl"><div className="tl-bar" aria-hidden="true"></div><div className="tl-lab"><span>First block</span><span>Today</span></div>
      <p className="tl-note">Lending, perpetuals and real-world-asset records across EVM chains, decoded and kept current.</p></div>
  </section>

  

  

  <section className="close" id="cta" aria-labelledby="cta-h"><div className="close-grid">
    <div><h2 className="h2 rv" id="cta-h">Find out which of your customers are about to leave. <span>Book a fifteen-minute call with our team.</span></h2>
      <div className="ctas rv"><a className="btn solid lg" href="/early-access">Book a walkthrough</a><a className="btn lg" href="/pricing">See pricing</a></div></div>
    <CloseArt /></div></section>
</div>

    </>
  );
}
