import React from "react";
import { Wordmark } from "./Wordmark.jsx";

/** Horizontal lock-up: wordmark, hairline, role line. For headers and email signatures. */
export function Lockup({ role = "Data & AI — Governança, Arquitetura, Microsoft Fabric", size = 22, tone = "ink", align = "row", style, ...rest }) {
  const secondary = tone === "inverse" ? "var(--ink-secondary-inverse)" : "var(--ink-secondary)";
  const rule = tone === "inverse" ? "var(--rule-inverse)" : "var(--rule)";
  const row = align === "row";
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: row ? "row" : "column",
        alignItems: row ? "baseline" : "flex-start",
        gap: row ? "var(--space-5)" : "var(--space-3)",
        ...style,
      }}
    >
      <Wordmark size={size} tone={tone} />
      {row && <span style={{ alignSelf: "stretch", width: 1, background: rule, marginTop: 2 }} />}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: Math.max(11, Math.round(size * 0.5)),
          fontWeight: 500,
          letterSpacing: "var(--ls-eyebrow)",
          textTransform: "uppercase",
          color: secondary,
        }}
      >
        {role}
      </span>
    </div>
  );
}
