const { Wordmark, Monogram, Tag, Rule } = window.ViniciusLisboaDesignSystem_249f05;

const SLIDE = { width: 1080, height: 1080, background: "var(--paper)", boxSizing: "border-box", padding: 88, position: "relative", display: "flex", flexDirection: "column", border: "1px solid var(--rule)" };
function Stamp({ n, total }) {
  return (
    <div style={{ position: "absolute", left: 88, right: 88, bottom: 64, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--rule)", paddingTop: 20 }}>
      <Monogram size={40} variant="plain" />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 22, color: "var(--ink-tertiary)" }}>{n}/{total}</span>
    </div>
  );
}

function CoverSlide({ dark }) {
  return (
    <div data-theme={dark ? "dark" : "light"} style={SLIDE}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 12, background: "var(--rule-strong)" }} />
      <div style={{ fontFamily: "var(--font-body)", fontSize: 26, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-secondary)" }}>Governança no Fabric</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 124, lineHeight: 1.0, letterSpacing: "-0.022em", marginTop: 56, color: "var(--ink)" }}>Domínios não são pastas</h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 34, lineHeight: 1.45, color: "var(--ink-secondary)", marginTop: 48, maxWidth: "22em" }}>Três níveis que sustentam operação — e o erro que aparece no sexto mês.</p>
      <div style={{ marginTop: "auto", paddingBottom: 96 }}><Wordmark size={44} block /></div>
      <Stamp n={1} total={7} />
    </div>
  );
}

function ContentSlide({ dark }) {
  return (
    <div data-theme={dark ? "dark" : "light"} style={SLIDE}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 56, height: 2, background: "var(--accent)" }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-secondary)" }}>O desenho que funciona</span>
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 78, lineHeight: 1.1, letterSpacing: "-0.018em", marginTop: 44, color: "var(--ink)" }}>Responsabilidade, entrega, consumo</h2>
      <div style={{ marginTop: 64, display: "grid", gap: 40 }}>
        {[["Domínio", "Área de responsabilidade do negócio. Um dono nomeado."], ["Workspace", "Estágio de entrega: dev, teste, produção."], ["Item", "Contrato de consumo publicado junto do modelo."]].map(([k, v], i) => (
          <div key={i} style={{ borderTop: "1px solid var(--rule)", paddingTop: 24 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 600, color: "var(--ink)" }}>{k}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 30, lineHeight: 1.45, color: "var(--ink-secondary)", marginTop: 12 }}>{v}</div>
          </div>
        ))}
      </div>
      <Stamp n={4} total={7} />
    </div>
  );
}

function ClosingSlide({ dark }) {
  return (
    <div data-theme={dark ? "dark" : "light"} style={{ ...SLIDE, background: "var(--paper-inverse)" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 96, lineHeight: 1.06, letterSpacing: "-0.022em", color: "var(--ink-inverse)", marginTop: 40, maxWidth: "13em" }}>Se a governança não é operável, é documentação.</h2>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ height: 2, background: "var(--accent)", width: 120 }} />
        <p style={{ fontFamily: "var(--font-body)", fontSize: 32, lineHeight: 1.4, color: "var(--ink-secondary-inverse)", maxWidth: "20em", margin: 0 }}>Escrevo sobre Fabric, Power BI e governança toda semana. Newsletter no link do perfil.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 12 }}>
          <span style={{ width: 88, height: 88, background: "var(--ink-inverse)", color: "var(--paper-inverse)", fontFamily: "var(--font-script)", fontWeight: 400, fontSize: 50, letterSpacing: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>VL</span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 46, letterSpacing: "-0.014em", color: "var(--ink-inverse)" }}>Vinicius Lisboa</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 24, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-tertiary-inverse)", marginTop: 8 }}>Data &amp; AI · Curitiba, BR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CoverSlide, ContentSlide, ClosingSlide });
