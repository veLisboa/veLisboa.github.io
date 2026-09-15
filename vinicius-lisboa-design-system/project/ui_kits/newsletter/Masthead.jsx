const { Wordmark, Lockup, Tag, Rule, Button } = window.ViniciusLisboaDesignSystem_249f05;

function Masthead({ edition = "041", date = "12 de março de 2026" }) {
  return (
    <header style={{ borderBottom: "var(--rule-heavy) solid var(--rule-strong)", paddingBottom: "var(--space-5)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--space-6)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <span className="eyebrow">Newsletter · Fabric, Power BI e governança</span>
          <Wordmark size={44} block />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <Tag>Edição {edition}</Tag>
          <span style={{ fontSize: "var(--step--1)", color: "var(--ink-secondary)" }}>{date}</span>
        </div>
      </div>
    </header>
  );
}
function MastheadFooter() {
  return (
    <footer style={{ marginTop: "var(--space-10)", borderTop: "var(--rule-medium) solid var(--rule-strong)", paddingTop: "var(--space-6)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap" }}>
      <Lockup align="column" size={20} role="Curitiba, BR · PT-BR e EN" />
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
        <span style={{ fontSize: "var(--step--1)", color: "var(--ink-secondary)", maxWidth: "18em" }}>Recebeu de alguém? Assine e receba as próximas edições.</span>
        <Button>Assinar</Button>
      </div>
    </footer>
  );
}
Object.assign(window, { Masthead, MastheadFooter });
