import React from "react";

/** Display-serif pull quote with a medium rule above. No quotation-mark ornament. */
export function PullQuote({ children, attribution, style, ...rest }) {
  return (
    <blockquote {...rest} style={{ margin: 0, borderTop: "var(--rule-medium) solid var(--rule-strong)", paddingTop: "var(--space-5)", maxWidth: "var(--measure-narrow)", ...style }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--step-2)", lineHeight: 1.28, letterSpacing: "-0.01em", color: "var(--ink)", margin: 0 }}>{children}</p>
      {attribution && (
        <footer style={{ fontFamily: "var(--font-body)", fontSize: "var(--step--1)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--ink-tertiary)", marginTop: "var(--space-4)" }}>{attribution}</footer>
      )}
    </blockquote>
  );
}
