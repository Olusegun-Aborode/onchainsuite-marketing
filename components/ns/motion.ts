// @ts-nocheck
/* Scroll motion for the redesigned site. initSite runs on every page (entrance reveals, counters,
   the nav turning dark over dark sections); initHome adds the homepage's live product scenes.
   Both return a cleanup so client-side navigation leaves no listeners behind. */

function kit(){
  var off = [];
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HAS_IO = 'IntersectionObserver' in window;
  var ANIM = !RM && HAS_IO;
  function listen(t, type, fn, opt){ t.addEventListener(type, fn, opt); off.push(function(){ t.removeEventListener(type, fn, opt); }); }
  function every(fn, ms){ var id = setInterval(fn, ms); off.push(function(){ clearInterval(id); }); return id; }
  function observe(cb, opt){ var o = new IntersectionObserver(cb, opt); off.push(function(){ o.disconnect(); }); return o; }
  var vh = window.innerHeight;
  function $(s,r){ return (r||document).querySelector(s); }
  function $$(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); }
  function sleep(ms){ return new Promise(function(r){ setTimeout(r, ANIM ? ms : 0); }); }
  function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
  function ease(t){ return 1 - Math.pow(1 - t, 3); }
  function fmt(v, dec){ return dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-US'); }
  function countUp(el, dur){
    var to = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suf || '';
    if(!ANIM){ el.textContent = fmt(to, dec) + suf; return; }
    var t0 = performance.now(); dur = dur || 1100;
    (function f(t){ var p = Math.min(1, (t - t0) / dur); el.textContent = fmt(to * ease(p), dec) + suf; if(p < 1) requestAnimationFrame(f); })(t0);
  }
  function hide(el, y){ el.style.opacity = 0; el.style.transform = 'translateY(' + (y == null ? 6 : y) + 'px)'; }
  function show(el, ms){ ms = ms || 380; el.style.transition = 'opacity ' + ms + 'ms, transform ' + ms + 'ms cubic-bezier(.2,.8,.2,1)'; el.style.opacity = 1; el.style.transform = 'none'; }
  function type(el, text, speed){
    return new Promise(function(done){
      if(!ANIM){ el.textContent = text; return done(); }
      el.textContent = ''; el.classList.add('caret'); var i = 0;
      (function step(){ if(i < text.length){ el.textContent += text[i++]; setTimeout(step, speed || 32); } else { setTimeout(function(){ el.classList.remove('caret'); done(); }, 260); } })();
    });
  }
  function onView(el, fn, thr){
    if(!ANIM){ fn(); return; }
    var io = observe(function(es){ es.forEach(function(e){ if(e.isIntersecting){ io.disconnect(); fn(); } }); }, { threshold: thr == null ? 0.35 : thr });
    io.observe(el);
  }
  return { off: off, ANIM: ANIM, listen: listen, every: every, observe: observe, $: $, $$: $$, sleep: sleep, clamp: clamp, ease: ease, fmt: fmt, countUp: countUp, hide: hide, show: show, type: type, onView: onView, vh: vh };
}

function runScenes(K){
  var off = K.off, ANIM = K.ANIM, listen = K.listen, every = K.every, observe = K.observe, $ = K.$, $$ = K.$$, sleep = K.sleep, clamp = K.clamp, ease = K.ease, fmt = K.fmt, countUp = K.countUp, hide = K.hide, show = K.show, type = K.type, onView = K.onView, vh = K.vh;
  /* ---------- chapter scenes ---------- */
  var scenes = {
    audience: function(root){
      var rows = $$('[data-rows] tbody tr', root), drawer = $('[data-drawer]', root), pick = $('[data-pick]', root), h = $('[data-health]', drawer);
      if(ANIM){ rows.forEach(function(r){ hide(r, 6); }); h.dataset.count = '61'; h.textContent = '0'; }
      else { drawer.classList.add('open'); pick.classList.add('hl'); }
      return async function(){
        for(var i = 0; i < rows.length; i++){ show(rows[i], 320); await sleep(85); }
        await sleep(500); pick.classList.add('hl'); await sleep(450);
        drawer.classList.add('open'); await sleep(350); h.dataset.count = '61'; countUp(h, 900);
      };
    },
    lanes: function(root){
      var ev = $$('[data-ev]', root); if(ANIM) ev.forEach(function(e){ hide(e, 4); });
      return async function(){ for(var i = 0; i < ev.length; i++){ show(ev[i]); await sleep(260); } };
    },
    health: function(root){
      var h = $('[data-health]', root); h.dataset.count = '61'; if(ANIM) h.textContent = '0';
      return function(){ countUp(h, 1000); };
    },
    segment: function(root){
      var t = $('[data-type]', root), gen = $('[data-gen]', root), rules = $$('[data-rule]', root), c = $('[data-seg-count]', root), wl = $$('[data-wl] > div', root);
      var text = t.dataset.type; c.dataset.count = '1204';
      if(ANIM){ t.textContent = ''; rules.forEach(function(r){ hide(r, 6); }); wl.forEach(function(w){ hide(w, 4); }); c.textContent = '0'; }
      else { t.textContent = text; }
      return async function(){
        await type(t, text, 28);
        gen.style.transition = 'transform .12s'; gen.style.transform = 'scale(.94)'; await sleep(140); gen.style.transform = 'none';
        await sleep(250);
        for(var i = 0; i < rules.length; i++){ show(rules[i]); await sleep(260); }
        countUp(c, 1200); await sleep(500);
        for(var j = 0; j < wl.length; j++){ show(wl[j]); await sleep(160); }
      };
    },
    avatars: function(){ return function(){}; },
    loop: function(root){
      var nodes = $$('[data-n]', root), conns = $$('[data-c]', root), tok = $('[data-token]', root), cv = $('[data-cv]', root);
      if(ANIM){ nodes.forEach(function(n){ hide(n, 8); }); conns.forEach(function(c){ c.style.transform = 'scaleY(0)'; }); }
      return async function(){
        for(var i = 0; i < nodes.length; i++){
          show(nodes[i], 360); await sleep(260);
          if(conns[i]){ conns[i].style.transition = 'transform .3s ease'; conns[i].style.transform = 'scaleY(1)'; await sleep(200); }
        }
        if(!ANIM || !tok.animate) return;
        var cr = cv.getBoundingClientRect();
        var stops = nodes.slice(0, 4).map(function(n){ var r = n.getBoundingClientRect(); return r.top - cr.top + r.height / 2 - 5; });
        var exitR = nodes[4].getBoundingClientRect(); stops.push(exitR.top - cr.top + exitR.height / 2 - 5);
        var kf = []; var n = stops.length;
        stops.forEach(function(y, i){ var o = i / (n - 1); kf.push({ top: y + 'px', opacity: i === 0 ? 0 : 1, offset: Math.max(0, o - 0.06) }); kf.push({ top: y + 'px', opacity: i === n - 1 ? 0 : 1, offset: o }); });
        kf[0].offset = 0; kf[kf.length - 1].offset = 1;
        tok.animate(kf, { duration: 6000, iterations: Infinity, easing: 'ease-in-out' });
      };
    },
    entries: function(root){
      var chip = $('[data-flip]', root), note = $('[data-flipnote]', root);
      return async function(){ await sleep(1800); chip.className = 'u-chip g'; chip.innerHTML = '<i></i>Completed'; note.textContent = 'Push → bought a pack'; chip.animate && chip.animate([{ transform: 'scale(.9)' }, { transform: 'scale(1)' }], 260); };
    },
    mcp: function(root){
      var bub = $('[data-bub]', root), msg = $('[data-msg]', root), steps = $$('[data-steps] span', root), stream = $('[data-stream]', root), ans = $('[data-ans]', root), rows = $$('[data-rows2] tr', root);
      if(ANIM){ hide(bub, 8); hide(msg, 6); steps.forEach(function(s){ hide(s, 4); }); stream.style.clipPath = 'inset(0 100% 0 0)'; hide(ans, 8); rows.forEach(function(r){ hide(r, 4); }); }
      return async function(){
        show(bub); await sleep(500); show(msg); await sleep(250);
        for(var i = 0; i < steps.length; i++){ show(steps[i]); await sleep(420); }
        stream.style.transition = 'clip-path 1.1s linear'; stream.style.clipPath = 'inset(0 0 0 0)'; await sleep(1100);
        show(ans, 420); await sleep(250);
        for(var j = 0; j < rows.length; j++){ show(rows[j], 280); await sleep(120); }
      };
    },
    cycle: function(root){
      var tabs = $$('.split3 span', root), panes = $$('.cyc > div', root), k = 0;
      return function(){ if(!ANIM) return; every(function(){ k = (k + 1) % 3; tabs.forEach(function(t, i){ t.classList.toggle('on', i === k); }); panes.forEach(function(p, i){ p.classList.toggle('on', i === k); }); }, 2600); };
    },
    life: function(root){
      var counts = $$('[data-count]', root), segs = $$('[data-lbar] span', root);
      if(ANIM){ counts.forEach(function(c){ c.textContent = '0'; }); segs.forEach(function(s){ s.style.transform = 'scaleX(0)'; }); }
      return async function(){
        counts.forEach(function(c){ countUp(c, 1300); });
        for(var i = 0; i < segs.length; i++){ segs[i].style.transition = 'transform .45s cubic-bezier(.2,.8,.2,1)'; segs[i].style.transform = 'scaleX(1)'; await sleep(140); }
      };
    },
    hold: function(root){
      var s = root.querySelector('span'); if(ANIM) s.style.transform = 'scaleX(0)';
      return function(){ s.style.transition = 'transform 1s cubic-bezier(.2,.8,.2,1)'; s.style.transform = 'scaleX(1)'; };
    },
    onb: function(root){
      var t = $('[data-type]', root), found = $$('[data-found] > div', root), hold = $('[data-holders]', root);
      var text = t.dataset.type; hold.dataset.count = '746';
      if(ANIM){ t.textContent = ''; found.forEach(function(f){ hide(f, 6); }); hold.textContent = '0'; } else { t.textContent = text; }
      return async function(){ await type(t, text, 55); await sleep(300); for(var i = 0; i < found.length; i++){ show(found[i]); await sleep(320); } countUp(hold, 900); };
    },
    nomail: function(root){
      var esp = $('.side.esp', root), ocs = $('.side.ocs', root), sends = $$('.tapsend', root);
      return function(){
        if(!ANIM) return;
        (async function run(){
          esp.classList.add('off'); ocs.classList.add('off'); esp.classList.remove('err');
          await sleep(900); sends[0].classList.add('press'); await sleep(140); sends[0].classList.remove('press');
          esp.classList.remove('off'); esp.classList.add('err'); esp.classList.remove('shake'); void esp.offsetWidth; esp.classList.add('shake');
          await sleep(1100); sends[1].classList.add('press'); await sleep(140); sends[1].classList.remove('press');
          ocs.classList.remove('off');
          await sleep(4200); run();
        })();
      };
    },
    code: function(root){
      var lines = $$('.ln', root); if(ANIM) root.classList.add('prep');
      return async function(){ for(var i = 0; i < lines.length; i++){ lines[i].classList.add('on'); await sleep(lines[i].textContent.trim() ? 170 : 60); } };
    },
    tl: function(root){
      var bar = $('.tl-bar', root); if(ANIM) bar.style.setProperty('--p', 0);
      return function(){ var t0 = performance.now(); (function f(t){ var p = Math.min(1, (t - t0) / 1600); bar.style.setProperty('--p', ease(p)); if(p < 1) requestAnimationFrame(f); })(t0); };
    }
  };
  $$('[data-scene]').forEach(function(el){
    var make = scenes[el.dataset.scene]; if(!make) return;
    var play = make(el);
    onView(el, play, el.classList.contains('vis') ? 0.3 : 0.5);
  });
}

export function initSite(){
  var K = kit(), off = K.off, ANIM = K.ANIM, listen = K.listen, every = K.every, observe = K.observe, $ = K.$, $$ = K.$$, sleep = K.sleep, clamp = K.clamp, ease = K.ease, fmt = K.fmt, countUp = K.countUp, hide = K.hide, show = K.show, type = K.type, onView = K.onView, vh = K.vh;
  /* ---------- entrance reveals (only for things below the first screen) ---------- */
  if(ANIM){
    var io = observe(function(es){ es.forEach(function(e){
      if(!e.isIntersecting) return; var el = e.target;
      var sibs = Array.prototype.filter.call(el.parentElement.children, function(x){ return x.classList.contains('rv'); });
      el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) * 70) + 'ms';
      el.classList.add('rv-in'); el.classList.remove('rv-pre'); io.unobserve(el);
    }); }, { rootMargin: '0px 0px -8% 0px' });
    $$('.rv').forEach(function(el){ if(el.getBoundingClientRect().top > vh * 0.92){ el.classList.add('rv-pre'); io.observe(el); } });
  }

  /* generic counters outside scenes */
  $$('[data-count]').forEach(function(el){
    if(el.closest('[data-scene]') || el.closest('#hKpis') || el.closest('[data-nocount]')) return;
    if(ANIM) el.textContent = '0';
    onView(el, function(){ countUp(el, 1200); }, 0.6);
  });

  if(!document.getElementById('hero')) runScenes(K);
  var nav = document.getElementById('nav'), darks = $$('[data-dark]'), tk = false;
  function navFrame(){ tk = false; var dark = darks.some(function(d){ var r = d.getBoundingClientRect(); return r.top <= 30 && r.bottom >= 30; }); if(nav) nav.classList.toggle('is-dark', dark); }
  listen(window, 'scroll', function(){ if(!tk){ tk = true; requestAnimationFrame(navFrame); } }, { passive: true });
  navFrame();
  return function(){ off.forEach(function(f){ f(); }); };
}

export function initHome(){
  var K = kit(), off = K.off, ANIM = K.ANIM, listen = K.listen, every = K.every, observe = K.observe, $ = K.$, $$ = K.$$, sleep = K.sleep, clamp = K.clamp, ease = K.ease, fmt = K.fmt, countUp = K.countUp, hide = K.hide, show = K.show, type = K.type, onView = K.onView, vh = K.vh;
  /* ---------- hero: live Home ---------- */
  (function(){
    var ask = $('#hAsk'), go = $('#hGo');
    var kpis = $$('#hKpis b[data-count]'), sparks = $$('#hKpis .u-spark path.l'), feed = $$('#hFeed > div');
    if(ANIM){
      feed.forEach(function(r){ hide(r, 8); });
      sparks.forEach(function(p){ var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
      kpis.forEach(function(b){ b.textContent = '0'; });
    }
    /* The window starts low in the first screen, so the scene waits until its top edge passes the
       middle of the viewport, which takes a short scroll, and then plays once. */
    function whenRisen(el, fn){
      if(!ANIM){ fn(); return; }
      var io = observe(function(es){ es.forEach(function(e){ if(e.isIntersecting){ io.disconnect(); fn(); } }); }, { rootMargin: '0px 0px -50% 0px', threshold: 0 });
      io.observe(el);
    }
    whenRisen($('.hero-win'), async function(){
      await sleep(250);
      kpis.forEach(function(b){ countUp(b, 1400); });
      sparks.forEach(function(p){ p.style.transition = 'stroke-dashoffset 1.4s ease'; p.style.strokeDashoffset = 0; });
      await sleep(450);
      for(var i = 0; i < feed.length; i++){ show(feed[i]); await sleep(200); }
      await sleep(300);
      await type(ask, 'Wallets that opened but never clicked', 38);
      go.classList.add('press'); await sleep(160); go.classList.remove('press');
    });
  })();

  runScenes(K);

  /* ---------- onboarding: the pinned card follows the step you are reading ---------- */
  (function(){
    var steps = $$('[data-onb-step]'), panes = $$('.onb-pane');
    if(!steps.length || !panes.length) return;
    var cur = 0, locked = 0;
    function setStep(k){
      if(k === cur) return; cur = k;
      steps.forEach(function(b, i){ b.classList.toggle('on', i === k); b.setAttribute('aria-pressed', i === k ? 'true' : 'false'); });
      panes.forEach(function(p, i){ p.classList.toggle('on', i === k); });
      var pane = panes[k];
      if(pane && !pane.dataset.played){ pane.dataset.played = '1';
        $$('.u-link, .onb-ch', pane).forEach(function(r, i){ if(ANIM){ hide(r, 6); setTimeout(function(){ show(r, 360); }, 120 + i * 160); } });
        var m = $('.onb-meter i', pane); if(m){ m.style.transform = 'scaleX(0)'; setTimeout(function(){ m.style.transition = 'transform 1s cubic-bezier(.2,.8,.2,1)'; m.style.transform = 'scaleX(.645)'; }, 500); }
      }
    }
    steps.forEach(function(b, i){ listen(b, 'click', function(){ locked = Date.now(); setStep(i); }); });
    function onScroll(){
      if(Date.now() - locked < 900) return;
      var line = window.innerHeight * 0.55, k = 0;
      steps.forEach(function(b, i){ if(b.getBoundingClientRect().top < line) k = i; });
      setStep(k);
    }
    listen(window, 'scroll', onScroll, { passive: true });
  })();

  /* ---------- concept: lanes merge as you scroll ---------- */
  var laneA = $('#laneA'), laneB = $('#laneB'), pillsG = $('#pills'), glow = $('#cGlow');
  var LA = laneA.getTotalLength(), LB = laneB.getTotalLength();
  var NS = 'http://www.w3.org/2000/svg';
  var pills = [ { t:'Signed up', l:laneA, L:LA, f0:.44, s:0 }, { t:'Finished setup', l:laneA, L:LA, f0:.22, s:.1 }, { t:'Deposited 12,400', l:laneB, L:LB, f0:.44, s:.05 }, { t:'Withdrew 9,800', l:laneB, L:LB, f0:.22, s:.15 } ];
  pills.forEach(function(p){
    var g = document.createElementNS(NS, 'g'), w = p.t.length * 7 + 26;
    var r = document.createElementNS(NS, 'rect'); r.setAttribute('x', -w / 2); r.setAttribute('y', -14); r.setAttribute('width', w); r.setAttribute('height', 28); r.setAttribute('rx', 7); r.setAttribute('fill', '#14161B'); r.setAttribute('stroke', '#2C2F35');
    var tx = document.createElementNS(NS, 'text'); tx.setAttribute('y', 4.5); tx.setAttribute('fill', '#D8DAE0'); tx.textContent = p.t;
    g.appendChild(r); g.appendChild(tx); pillsG.appendChild(g); p.g = g;
  });
  var recLines = $$('.rec-line');
  function concept(p){
    pills.forEach(function(x){
      var e = ease(clamp((p - x.s) / 0.45, 0, 1)), f = x.f0 + (1 - x.f0) * e, pt = x.l.getPointAtLength(f * x.L);
      x.g.setAttribute('transform', 'translate(' + pt.x.toFixed(1) + ' ' + pt.y.toFixed(1) + ')');
      x.g.setAttribute('opacity', f > 0.97 ? 0 : (f > 0.9 ? (0.97 - f) / 0.07 : 1));
    });
    var TH = { '0': 0.52, '1': 0.48, '2': 0.58, '3': 0.66 };
    recLines.forEach(function(el){ el.classList.toggle('on', p >= TH[el.dataset.rl]); });
    glow.setAttribute('opacity', (0.35 + 0.65 * p).toFixed(2));
  }

  /* ---------- statement: words darken as you scroll ---------- */
  var words = $$('#stmtQ span');

  var heroCopy = $('#heroCopy'), heroWin = $('.hero-win'), sats = $$('.sat');
  var rail = $$('#rail a'), chaps = ['c1','c2','c3','c4','c5'].map(function(id){ return document.getElementById(id); }).filter(Boolean);
  var cPin = $('#conceptPin'), sPin = $('#stmtPin');
  function pinProgress(el){ var r = el.getBoundingClientRect(), span = r.height - window.innerHeight; return span > 0 ? clamp(-r.top / span, 0, 1) : (r.top < 0 ? 1 : 0); }
  var ticking = false;
  function frame(){
    ticking = false; vh = window.innerHeight;
    var line = vh * 0.4, cur = 'c1'; chaps.forEach(function(el){ if(el.getBoundingClientRect().top < line) cur = el.id; });
    rail.forEach(function(a){ a.classList.toggle('on', a.getAttribute('href') === '#' + cur); });
    if(!ANIM){ concept(1); words.forEach(function(w){ w.classList.add('on'); }); return; }
    var wr = heroWin.getBoundingClientRect(), cr = heroCopy.getBoundingClientRect();
    var cover = clamp((cr.bottom - wr.top) / Math.max(1, cr.height), 0, 1);
    heroCopy.style.opacity = (1 - cover * 0.85).toFixed(3); heroCopy.style.filter = cover > 0.02 ? 'blur(' + (cover * 6).toFixed(1) + 'px)' : 'none';
    var sp = clamp((vh - wr.top) / (vh * 0.85), 0, 1), q = ease(clamp((sp - 0.2) / 0.55, 0, 1));
    sats.forEach(function(s){ s.style.opacity = q.toFixed(3); s.style.transform = 'translate(' + ((+s.dataset.sx) * (1 - q)).toFixed(1) + 'px,' + ((+s.dataset.sy) * (1 - q)).toFixed(1) + 'px) scale(' + (0.92 + 0.08 * q).toFixed(3) + ')'; });
    concept(pinProgress(cPin));
    var sp2 = pinProgress(sPin), lit = Math.round(clamp((sp2 - 0.05) / 0.75, 0, 1) * words.length);
    words.forEach(function(w, i){ w.classList.toggle('on', i < lit); });
  }
  listen(window, 'scroll', function(){ if(!ticking){ ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  listen(window, 'resize', function(){ if(!ticking){ ticking = true; requestAnimationFrame(frame); } });
  frame();
  return function(){ off.forEach(function(f){ f(); }); };
}
