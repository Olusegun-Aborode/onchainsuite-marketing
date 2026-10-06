"use client";

import { createContext, useContext, useState } from "react";

/* The Suite / Send switch at the top of the pricing page. The plans and the comparison table below
   both read it, so switching to Send adds a Send column to the table. */
export type Line = "suite" | "send";

const Ctx = createContext<{ line: Line; setLine: (l: Line) => void }>({ line: "suite", setLine: () => {} });

export function PricingLineProvider({ children }: { children: React.ReactNode }) {
  const [line, setLine] = useState<Line>("suite");
  return <Ctx.Provider value={{ line, setLine }}>{children}</Ctx.Provider>;
}

export const usePricingLine = () => useContext(Ctx);
