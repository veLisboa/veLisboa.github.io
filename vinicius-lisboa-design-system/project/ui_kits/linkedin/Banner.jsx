const { Wordmark, Monogram, Tag } = window.ViniciusLisboaDesignSystem_249f05;

/** 1584 x 396 LinkedIn banner — full wordmark. Rendered at scale via transform. */
function Banner({ dark = false, mono = false }) {
  return (
    <div data-theme={dark ? "dark" : "light"} data-direction={mono ? "mono" : undefined}
      style={{ width: 1584, height: 396, background: "var(--paper)", position: "relative", padding: "0 96px", display: "flex", flexDirection: "column", justifyContent: "center", boxSizing: "border-box", border: "1px solid var(--rule)" }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 8, background: "var(--rule-strong)" }} />
      <div style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-secondary)", marginBottom: 28 }}>Data &amp; AI · Governança · Arquitetura</div>
      <Wordmark size={104} block />
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 32 }}>
        <div style={{ width: 64, height: 2, background: "var(--accent)" }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 24, color: "var(--ink-secondary)" }}>Microsoft Fabric · Power BI · SAP Analytics · Curitiba, BR</span>
      </div>
      <div style={{ position: "absolute", right: 96, top: 64 }}><Monogram size={72} variant="boxed" /></div>
    </div>
  );
}

/** Profile photo treatment: 400x400, monogram fallback or photo crop rules. */
function ProfileTreatment({ dark = false }) {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <div>
        <div data-theme={dark ? "dark" : "light"} style={{ width: 160, height: 160, background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--font-script)", fontWeight: 400, fontSize: 90, letterSpacing: "0", color: "var(--ink-inverse)", lineHeight: 1 }}>VL</span>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-secondary)", marginTop: 8 }}>400×400 · monogram</div>
      </div>
      <div>
        <div style={{ width: 160, height: 160, background: "var(--grey-100)", border: "1px solid var(--rule)", display: "flex", alignItems: "flex-end", padding: 12, boxSizing: "border-box" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-tertiary)", lineHeight: 1.4 }}>Foto: retrato B&amp;W, fundo claro liso, enquadramento peito-acima, olhos no terço superior.</span>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-secondary)", marginTop: 8 }}>400×400 · foto (preferida)</div>
      </div>
    </div>
  );
}
Object.assign(window, { Banner, ProfileTreatment });
