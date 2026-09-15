import React from "react";

/** Uppercase metadata tag — hairline box, no fill, no radius. */
export function Tag({ children, tone = "default", style, ...rest }) {
  const tones = {
    default: { color: "var(--ink-secondary)", border: "1px solid var(--rule)" },
    strong: { color: "var(--ink)", border: "1px solid var(--rule-strong)" },
    accent: { color: "var(--accent)", border: "1px solid var(--accent)" },
  };
  return (
    <span
      {...rest}
      style={{
        display: "inline-block",
        fontFamily: "var(--font-body)",
        fontSize: "var(--step--2)",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "4px 8px",
        borderRadius: 0,
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
