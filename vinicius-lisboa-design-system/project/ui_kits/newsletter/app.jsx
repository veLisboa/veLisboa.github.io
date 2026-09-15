const { Button } = window.ViniciusLisboaDesignSystem_249f05;

function App() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => { document.documentElement.setAttribute("data-theme", dark ? "dark" : "light"); }, [dark]);
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "var(--space-8) var(--space-8) var(--space-10)" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "var(--space-5)" }}>
          <Button variant="ghost" size="sm" onClick={() => setDark(d => !d)}>{dark ? "Modo claro" : "Modo escuro"}</Button>
        </div>
        <Masthead />
        <div style={{ marginTop: "var(--space-8)" }}><ArticlePage /></div>
        <MastheadFooter />
      </div>
    </div>
  );
}
Object.assign(window, { App });
