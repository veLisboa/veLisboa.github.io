import React from "react";

/** Figure + label, separated by a hairline. Used on the speaker one-pager and slides. */
export function StatBlock({ value, label, tone = "ink", size = "md", style, ...rest }) {
  const fs = size === "lg" ? "var(--step-4)" : "var(--step-3)";
  return (
    <div {...rest} style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--space-4)", ...style }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: fs, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em", color: tone === "accent" ? "var(--accent)" : "var(--ink)" }}>{value}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--step--1)", lineHeight: "var(--lh-caption)", color: "var(--ink-secondary)", marginTop: "var(--space-3)", maxWidth: "16em" }}>{label}</div>
    </div>
  );
}
