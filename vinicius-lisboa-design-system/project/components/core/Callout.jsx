import React from "react";

/** Sidenote / callout: a hairline top rule and a label, no box and no tint. */
export function Callout({ label = "Nota", children, tone = "default", style, ...rest }) {
  const accent = tone === "accent";
  return (
    <aside {...rest} style={{ borderTop: accent ? "var(--rule-medium) solid var(--accent)" : "var(--rule-medium) solid var(--rule-strong)", paddingTop: "var(--space-4)", ...style }}>
      <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--step--1)", fontWeight: 500, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: accent ? "var(--accent)" : "var(--ink-secondary)", marginBottom: "var(--space-3)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--step-0)", lineHeight: "var(--lh-body)", color: "var(--ink)", maxWidth: "var(--measure-narrow)" }}>{children}</div>
    </aside>
  );
}
