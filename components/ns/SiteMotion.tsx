"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initHome, initSite } from "./motion";

/* Entrance reveals, counters and the dark-nav switch for every redesigned page. Re-runs per route. */
export default function SiteMotion() {
  const path = usePathname();
  useEffect(() => initSite(), [path]);
  return null;
}

/* The homepage's live product scenes, pinned hero and scroll-linked graphics. */
export function HomeMotion() {
  useEffect(() => initHome(), []);
  return null;
}
