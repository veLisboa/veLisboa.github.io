import React from "react";

/** Square-cornered editorial button. No shadow, no radius, no gradient. */
export function Button({ variant = "primary", size = "md", disabled = false, children, style, ...rest }) {
  const pad = size === "sm" ? "8px 14px" : "12px 22px";
  const fs = size === "sm" ? "var(--step--1)" : "var(--step-0)";
  const base = {
    fontFamily: "var(--font-body)",
    fontSize: fs,
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0.01em",
    padding: pad,
    borderRadius: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.38 : 1,
    transition: "background var(--dur) var(--ease),color var(--dur) var(--ease),border-color var(--dur) var(--ease)",
  };
  const variants = {
    primary: { background: "var(--ink)", color: "var(--ink-inverse)", border: "1px solid var(--ink)" },
    secondary: { background: "transparent", color: "var(--ink)", border: "1px solid var(--rule-strong)" },
    ghost: { background: "transparent", color: "var(--ink-secondary)", border: "1px solid transparent", padding: size === "sm" ? "8px 4px" : "12px 4px" },
    accent: { background: "var(--accent)", color: "var(--accent-ink)", border: "1px solid var(--accent)" },
  };
  return (
    <button {...rest} disabled={disabled} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
}
