/* Shared SVG symbols for the redesigned site: the logo mark, product icons and UI glyphs.
   Rendered once per page by SiteChrome so any page can <use href="#…" />. */
export const MARK = "M1047.3 2518.32c483.09,-45.16 860.34,-436.64 860.34,-912.94 0,-478.08 -380.11,-870.73 -866.11,-913.4 -49.69,-7.76 -87.72,-50.73 -87.72,-102.61l0 -136.1c0,-60.31 48.9,-109.22 109.22,-109.22l181.92 0c29.12,0 52.92,-23.8 52.92,-52.92l0 -238.22c0,-29.12 -23.81,-52.92 -52.92,-52.92l-238.22 0c-29.12,0 -52.92,23.8 -52.92,52.92l0 187.39c0,54.97 -40.64,100.47 -93.48,108.09 -483.09,45.16 -860.33,436.64 -860.33,912.94 0,478.09 380.1,870.7 866.1,913.4 49.69,7.76 87.72,50.74 87.72,102.61l0 136.1c0,60.32 -48.9,109.22 -109.22,109.22l-181.92 0c-29.12,0 -52.92,23.81 -52.92,52.92l0 238.22c0,29.12 23.8,52.93 52.92,52.93l238.22 0c29.12,0 52.92,-23.81 52.92,-52.93l0 -187.39c0,-54.96 40.64,-100.46 93.48,-108.09zm1.24 -346.95c-50.78,4.64 -94.72,-34.55 -94.72,-85.85l0 -192.27c0,-37.58 -29.35,-58.33 -66.22,-62.21 -298.33,-31.36 -530.02,-274.63 -530.02,-569.7 0,-285.58 217.23,-522.31 501.69,-565.99 2.73,-0.25 5.48,-0.39 8.27,-0.39 47.66,0 86.28,38.61 86.28,86.26l0 192.27c0,37.57 29.36,58.33 66.23,62.2 298.32,31.36 530.02,274.63 530.02,569.7 0,285.59 -217.28,522.37 -501.52,565.98z";

export default function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false"><defs>
  <linearGradient id="mg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#1727E0" /><stop offset="1" stopColor="#4F8BFF" /></linearGradient>
  <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2F94FF" stopOpacity=".28" /><stop offset="1" stopColor="#2F94FF" stopOpacity="0" /></linearGradient>
  <symbol id="ocs-mark" viewBox="0 0 1908 2867"><path d={MARK} /></symbol>
  <symbol id="i-down" viewBox="0 0 10 10"><path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" /></symbol>
  <symbol id="i-lock" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
  <symbol id="i-return" viewBox="0 0 24 24"><path d="M9 14l-5-5 5-5M4 9h11a5 5 0 0 1 0 10h-3" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.8" /></symbol>
  <symbol id="i-text" viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h13" fill="none" stroke="currentColor" strokeWidth="1.8" /></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" fill="none" stroke="currentColor" strokeWidth="1.8" /></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" /></symbol>
  <symbol id="i-key" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M11 12l9-9M17 6l3 3" fill="none" stroke="currentColor" strokeWidth="1.8" /></symbol>
  <symbol id="a-home" viewBox="0 0 16 16"><rect x="2" y="2" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" /><rect x="9" y="2" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" /><rect x="2" y="9" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" /><rect x="9" y="9" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-camp" viewBox="0 0 16 16"><path d="M2.5 6v4h2l5 3V3l-5 3z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="M12 6.5c.7.8.7 2.2 0 3" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-aud" viewBox="0 0 16 16"><circle cx="6" cy="6" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M1.5 13.5c.6-2.4 2.3-3.6 4.5-3.6s3.9 1.2 4.5 3.6M10.8 3.6a2.4 2.4 0 1 1 0 4.8M12.2 10.2c1.2.5 1.9 1.6 2.2 3.3" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-brain" viewBox="0 0 16 16"><path d="M6 2.5a2 2 0 0 0-2 2 2 2 0 0 0-1.5 3.2A2.2 2.2 0 0 0 4 11.5a2 2 0 0 0 2 2V2.5zM10 2.5a2 2 0 0 1 2 2 2 2 0 0 1 1.5 3.2A2.2 2.2 0 0 1 12 11.5a2 2 0 0 1-2 2V2.5z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></symbol>
  <symbol id="a-dash" viewBox="0 0 16 16"><path d="M2 2v12h12M4.5 10.5l3-3 2 2 4-4.5" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-data" viewBox="0 0 16 16"><ellipse cx="8" cy="4" rx="5" ry="2" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4M3 8c0 1.1 2.2 2 5 2s5-.9 5-2" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-mail" viewBox="0 0 16 16"><rect x="2" y="3.5" width="12" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M2.5 4.5L8 9l5.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-phone" viewBox="0 0 16 16"><rect x="4.5" y="1.5" width="7" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M7 12.2h2" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-at" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M10.6 8v1a1.7 1.7 0 0 0 3.4 0V8a6 6 0 1 0-2.4 4.8" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-bolt" viewBox="0 0 16 16"><path d="M9 1.5L3.5 9H8l-1 5.5L12.5 7H8z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></symbol>
  <symbol id="a-wait" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M8 4.5V8l2.3 1.5" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
  <symbol id="a-check" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M5.2 8.2l1.9 1.9 3.7-3.9" fill="none" stroke="currentColor" strokeWidth="1.4" /></symbol>
  <symbol id="a-spark" viewBox="0 0 16 16"><path d="M8 1.5l1.3 3.6L13 6.5 9.3 7.8 8 11.5 6.7 7.8 3 6.5l3.7-1.4zM12.5 10.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></symbol>
  <symbol id="a-up" viewBox="0 0 16 16"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="1.6" /></symbol>
  <symbol id="a-seg" viewBox="0 0 16 16"><circle cx="6" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M1.5 13.5c.6-2.4 2.3-3.6 4.5-3.6s3.9 1.2 4.5 3.6M11 4v5M8.5 6.5h5" fill="none" stroke="currentColor" strokeWidth="1.3" /></symbol>
</defs></svg>
  );
}
