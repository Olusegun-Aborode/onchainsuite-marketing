import { MARK } from "./Sprite";

/* OnchainSuite's mark beside a competitor's logo. Logos live in /public/compare; a brand
   without a file yet falls back to a lettered tile until its official logo is added. */
const LOGOS: Record<string, string> = {
  "customer-io": "/compare/customer-io.svg", braze: "/compare/braze.svg", sendgrid: "/compare/sendgrid.svg",
  brevo: "/compare/brevo.svg", galxe: "/compare/galxe.svg", klaviyo: "/compare/klaviyo.png",
  dotdigital: "/compare/dotdigital.png", emailoctopus: "/compare/emailoctopus.svg", formo: "/compare/formo.png",
  addressable: "/compare/addressable.png",
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
          ? <img src={logo} alt="" />
          : <b>{name.replace(/^Customer\.io$/, "C").charAt(0)}</b>}
      </span>
    </div>
  );
}
