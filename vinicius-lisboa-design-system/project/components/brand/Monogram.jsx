import React from "react";

/** VL monogram — cursive, a signature shorthand of the name. Petit Formal Script 400. */
export function Monogram({ size = 64, variant = "filled", tone = "ink", style, ...rest }) {
  const inverse = tone === "inverse";
  const fg = inverse ? "var(--ink-inverse)" : "var(--ink)";
  const bg = inverse ? "var(--paper-inverse)" : "var(--paper)";
  const box = {
    filled: { background: inverse ? "var(--paper-inverse)" : "var(--ink)", color: inverse ? "var(--ink)" : "var(--ink-inverse)", border: "none" },
    boxed: { background: bg, color: fg, border: "1px solid var(--rule-strong)" },
    plain: { background: "transparent", color: fg, border: "none" },
  }[variant];
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        fontFamily: "var(--font-script)",
        fontWeight: 400,
        fontSize: size * 0.56,
        letterSpacing: "0.01em",
        lineHeight: 1,
        borderRadius: 0,
        ...box,
        ...style,
      }}
    >
      <span style={{ transform: "translateY(-4%)" }}>VL</span>
    </span>
  );
}
