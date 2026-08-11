import { ACCENT } from "@/lib/data";

/** A single "Learn more →" link to the relevant docs page, opening in a new tab. */
export default function LearnMore({
  href,
  label = "Learn more",
  align = "left",
}: {
  href: string;
  label?: string;
  align?: "left" | "center";
}) {
  return (
    <div style={{ marginTop: 24, textAlign: align }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="ocs-learn-more"
        style={{ fontSize: 14, fontWeight: 600, color: ACCENT, display: "inline-flex", alignItems: "center", gap: 6 }}
      >
        {label} <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
