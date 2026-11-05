import { MARK } from "./Sprite";

/* OnchainSuite's mark beside a competitor's logo. Logos live in /public/compare; a brand
   without a file yet falls back to a lettered tile until its official logo is added. */
const LOGOS: Record<string, { src: string; w: number; h: number }> = {
  "customer-io": { src: "/compare/customer-io.svg", w: 256, h: 180 }, braze: { src: "/compare/braze.svg", w: 256, h: 256 },
  sendgrid: { src: "/compare/sendgrid.svg", w: 256, h: 256 }, brevo: { src: "/compare/brevo.svg", w: 24, h: 24 },
  galxe: { src: "/compare/galxe.svg", w: 24, h: 24 }, klaviyo: { src: "/compare/klaviyo.png", w: 128, h: 128 },
  dotdigital: { src: "/compare/dotdigital.png", w: 128, h: 128 }, emailoctopus: { src: "/compare/emailoctopus.svg", w: 467, h: 467 },
  formo: { src: "/compare/formo.png", w: 128, h: 128 }, addressable: { src: "/compare/addressable.png", w: 128, h: 128 },
};

export default function VsLockup({ slug, name, size = "sm" }: { slug: string; name: string; size?: "sm" | "lg" }) {
  const logo = LOGOS[slug];
  return (
    <div className={`vsl vsl-${size}`} aria-hidden="true">
      <span className="vsl-t ocs"><svg viewBox="0 0 1908 2867"><path d={MARK} fill="#FFFFFF" /></svg></span>
      <span className="vsl-link"><i /><i /><i /></span>
      <span className="vsl-t them">
        {logo
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={logo.src} alt={`${name} logo`} width={logo.w} height={logo.h} loading={size === "lg" ? "eager" : "lazy"} />
          : <b>{name.replace(/^Customer\.io$/, "C").charAt(0)}</b>}
      </span>
    </div>
  );
}
