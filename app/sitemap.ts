import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";
import { COMPETITORS } from "@/lib/compare";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/early-access", priority: 0.8, changeFrequency: "monthly" },
    { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
    { path: "/tools", priority: 0.6, changeFrequency: "monthly" },
    { path: "/tools/churn-calculator", priority: 0.6, changeFrequency: "monthly" },
    { path: "/tools/ltv-calculator", priority: 0.6, changeFrequency: "monthly" },
    ...COMPETITORS.map((c) => ({ path: `/compare/${c.slug}`, priority: 0.6, changeFrequency: "monthly" as const })),
    { path: "/legal", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/dpa", priority: 0.3, changeFrequency: "yearly" },
    { path: "/data-transfers", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
    { path: "/subprocessors", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
