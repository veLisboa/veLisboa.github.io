import React from "react";
import { Monogram } from "../brand/Monogram.jsx";

/** Author byline: monogram avatar, name, role, optional date. */
export function Byline({ name = "Vinicius Lisboa", role = "Data & AI · Curitiba, BR", date, tone = "ink", style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <div {...rest} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", ...style }}>
      <Monogram size={40} variant="filled" tone={inverse ? "inverse" : "ink"} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--step-0)", fontWeight: 500, color: inverse ? "var(--ink-inverse)" : "var(--ink)" }}>{name}</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--step--1)", color: inverse ? "var(--ink-secondary-inverse)" : "var(--ink-secondary)" }}>
          {role}{date ? " · " + date : ""}
        </span>
      </div>
    </div>
  );
}
