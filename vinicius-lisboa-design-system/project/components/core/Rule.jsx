import React from "react";

/** Horizontal rule at one of three system weights. */
export function Rule({ weight = "hairline", tone = "rule", inset = 0, style, ...rest }) {
  const h = { hairline: "var(--rule-hairline)", medium: "var(--rule-medium)", heavy: "var(--rule-heavy)" }[weight];
  const bg = tone === "strong" ? "var(--rule-strong)" : tone === "accent" ? "var(--accent)" : "var(--rule)";
  return <div {...rest} role="separator" style={{ height: h, background: bg, marginLeft: inset, marginRight: inset, ...style }} />;
}
