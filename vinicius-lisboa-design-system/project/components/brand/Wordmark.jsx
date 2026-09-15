import React from "react";

/** Full-name wordmark. The default mark. Set in the display serif, never redrawn. */
export function Wordmark({ size = 32, tone = "ink", weight = 600, block = false, style, ...rest }) {
  const color = tone === "inverse" ? "var(--ink-inverse)" : tone === "accent" ? "var(--accent)" : "var(--ink)";
  return (
    <span
      {...rest}
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: weight,
        fontSize: size,
        lineHeight: 1,
        letterSpacing: "-0.014em",
        color,
        display: block ? "block" : "inline-block",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      Vinicius Lisboa
    </span>
  );
}
