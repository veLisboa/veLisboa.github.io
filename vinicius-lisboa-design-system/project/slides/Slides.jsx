const { Wordmark, Monogram } = window.ViniciusLisboaDesignSystem_249f05;

const S = { width: 1920, height: 1080, boxSizing: "border-box", padding: 96, position: "relative", display: "flex", flexDirection: "column", background: "var(--paper)", overflow: "hidden" };

function CornerMark({ inverse }) {
  return (
    <div style={{ position: "absolute", right: 96, bottom: 72, display: "flex", alignItems: "center", gap: 20 }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 22, letterSpacing: "0.14em", textTransform: "uppercase", color: inverse ? "var(--ink-tertiary-inverse)" : "var(--ink-tertiary)" }}>viniciuslisboa</span>
      <Monogram size={48} variant={inverse ? "filled" : "boxed"} tone={inverse ? "inverse" : "ink"} />
    </div>
  );
}
function SlideNum({ n, inverse }) {
  return <span style={{ position: "absolute", left: 96, bottom: 72, fontFamily: "var(--font-mono)", fontSize: 22, color: inverse ? "var(--ink-tertiary-inverse)" : "var(--ink-tertiary)" }}>{n}</span>;
}

function TitleSlide() {
  return (
    <div style={S}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 14, background: "var(--rule-strong)" }} />
      <div style={{ marginTop: 64, fontFamily: "var(--font-body)", fontSize: 26, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-secondary)" }}>Microsoft Fabric Community Conference · 2026</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 132, lineHeight: 1.02, letterSpacing: "-0.024em", color: "var(--ink)", marginTop: 72, maxWidth: "13em" }}>Governance that survives the second year</h1>
      <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ width: 120, height: 2, background: "var(--accent)", marginBottom: 28 }} />
          <Wordmark size={52} block />
          <div style={{ fontFamily: "var(--font-body)", fontSize: 26, color: "var(--ink-secondary)", marginTop: 14 }}>Head of Operations · Data &amp; AI · Microsoft Certified Trainer</div>
        </div>
      </div>
      <CornerMark />
    </div>
  );
}

function DividerSlide({ n = "02", label = "Part two", title = "Ownership before tooling" }) {
  return (
    <div style={{ ...S, background: "var(--paper-inverse)", justifyContent: "center" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 28, color: "var(--ink-secondary-inverse)", letterSpacing: "0.08em" }}>{n} — {label}</div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 116, lineHeight: 1.06, letterSpacing: "-0.022em", color: "var(--ink-inverse)", marginTop: 40, maxWidth: "16em" }}>{title}</h2>
      <div style={{ width: 160, height: 6, background: "var(--accent)", marginTop: 56 }} />
      <CornerMark inverse />
    </div>
  );
}

function ContentSlide() {
  const rows = [["Domain", "Business responsibility. One named owner."], ["Workspace", "Delivery stage — dev, test, production."], ["Item", "Consumption contract, published with the model."]];
  return (
    <div style={S}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ width: 64, height: 2, background: "var(--accent)" }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-secondary)" }}>The three-level design</span>
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 82, lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--ink)", marginTop: 44, maxWidth: "18em" }}>Separate responsibility from delivery</h2>
      <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
        {rows.map(([k, v], i) => (
          <div key={i} style={{ borderTop: "2px solid var(--rule-strong)", paddingTop: 28 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 600, letterSpacing: "-0.016em", color: "var(--ink)" }}>{k}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 28, lineHeight: 1.5, color: "var(--ink-secondary)", marginTop: 18 }}>{v}</div>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 28, lineHeight: 1.5, color: "var(--ink-secondary)", marginTop: 72, maxWidth: "44em" }}>Most tenants collapse all three into folders. It holds for three months, then lineage stops closing and the conversation turns political.</p>
      <SlideNum n="14" /><CornerMark />
    </div>
  );
}

function ClosingSlide() {
  return (
    <div style={{ ...S, background: "var(--paper-inverse)" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 104, lineHeight: 1.06, letterSpacing: "-0.022em", color: "var(--ink-inverse)", marginTop: 48, maxWidth: "15em" }}>Governance you cannot operate is documentation.</h2>
      <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48, paddingBottom: 40 }}>
        {[["Newsletter", "viniciuslisboa.com/newsletter · PT-BR, weekly"], ["LinkedIn", "/in/viniciuslisboa"], ["Speaking", "vinicius@viniciuslisboa.com"]].map(([k, v], i) => (
          <div key={i} style={{ borderTop: "1px solid var(--rule-inverse)", paddingTop: 24 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-tertiary-inverse)" }}>{k}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 28, color: "var(--ink-inverse)", marginTop: 14 }}>{v}</div>
          </div>
        ))}
      </div>
      <CornerMark inverse />
    </div>
  );
}

function Fit({ children, w = 1280 }) {
  const s = w / 1920;
  return <div style={{ width: w, height: w * 1080 / 1920, overflow: "hidden" }}><div style={{ transform: `scale(${s})`, transformOrigin: "top left" }}>{children}</div></div>;
}
Object.assign(window, { TitleSlide, DividerSlide, ContentSlide, ClosingSlide, Fit });
