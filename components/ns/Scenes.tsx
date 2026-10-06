/* Live product scenes recreated from OnchainSuite v2.7 with its demo data. Shared by the homepage
   chapters and the product pages; SiteMotion plays them as they scroll into view. */

export function AudienceScene() {
  return (
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
  );
}

export function SegmentScene() {
  return (
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
  );
}

export function LoopScene() {
  return (
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
  );
}

export function McpScene() {
  return (
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
  );
}

export function LifeScene() {
  return (
    <div className="vis live short" data-scene="life"><div className="stagebox" style={{ height: "auto" }}><div className="u" style={{ display: "grid", gap: "12px" }} role="img" aria-label="The Dashboard: five headline numbers count up and the Lifecycle bar fills, showing 8 customers came back this week and 9 started slipping.">
          <div className="u-card u-kpis" style={{ boxShadow: "0 18px 40px -26px rgba(16,24,40,.3)" }}>
            <div><small>Wallets reached · 30d</small><b data-count="18204">18,204</b><span>↗ +12.4%</span></div><div><small>Email open rate · 30d</small><b data-count="42.3" data-dec="1" data-suf="%">42.3%</b><span>↗ +3.1pt</span></div><div><small>Push view rate · 30d</small><b data-count="90.6" data-dec="1" data-suf="%">90.6%</b><span>↗ +1.8pt</span></div><div><small>Active wallets · 30d</small><b data-count="9412">9,412</b><span>↗ +8.6%</span></div><div><small>On-chain conversions · 30d</small><b data-count="1164">1,164</b><span>↗ +22.8%</span></div></div>
          <div className="u-card u-life" style={{ boxShadow: "0 18px 40px -26px rgba(16,24,40,.3)" }}><div className="hd">Lifecycle<span>48 wallets, healthiest first</span></div>
            <div className="nums2"><div><b style={{ color: "#128355" }} data-count="8">8</b><small>came back this week</small></div><div><b style={{ color: "#E04E12" }} data-count="9">9</b><small>started slipping</small></div></div>
            <div className="u-lbar" data-lbar><span style={{ flex: "5", background: "#2F94FF" }}></span><span style={{ flex: "14", background: "#1727E0" }}></span><span style={{ flex: "12", background: "#17A66B" }}></span><span style={{ flex: "8", background: "#128355" }}></span><span style={{ flex: "1", background: "#FF8449" }}></span><span style={{ flex: "8", background: "#E5484D" }}></span></div>
            <div className="u-leg"><span><i style={{ background: "#2F94FF" }}></i>New<b>5</b></span><span><i style={{ background: "#1727E0" }}></i>Activated<b>14</b></span><span><i style={{ background: "#17A66B" }}></i>Engaged<b>12</b></span><span><i style={{ background: "#128355" }}></i>Reactivated<b>8</b></span><span><i style={{ background: "#FF8449" }}></i>At risk<b>1</b></span><span><i style={{ background: "#E5484D" }}></i>Dormant<b>8</b></span></div></div>
        </div></div></div>
  );
}

