const { Button, Rule } = window.ViniciusLisboaDesignSystem_249f05;

function Frame({ w, h, scale, label, children }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ width: w * scale, height: h * scale, overflow: "hidden" }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: w, height: h }}>{children}</div>
      </div>
      <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-secondary)", marginTop: 8 }}>{label}</figcaption>
    </figure>
  );
}

function App() {
  const [tab, setTab] = React.useState("banner");
  const [dark, setDark] = React.useState(false);
  const tabs = [["banner", "Banner + foto"], ["carousel", "Carrossel"]];
  return (
    <div style={{ background: "var(--paper-sunken)", minHeight: "100vh", padding: "32px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid var(--rule-strong)", paddingBottom: 12, marginBottom: 28 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {tabs.map(([k, l]) => (
              <Button key={k} size="sm" variant={tab === k ? "primary" : "ghost"} onClick={() => setTab(k)}>{l}</Button>
            ))}
          </div>
          <Button size="sm" variant="ghost" onClick={() => setDark(d => !d)}>{dark ? "Claro" : "Escuro"}</Button>
        </div>
        {tab === "banner" ? (
          <div style={{ display: "grid", gap: 36 }}>
            <Frame w={1584} h={396} scale={0.49} label="1584 × 396 — banner LinkedIn (wordmark completo)"><Banner dark={dark} /></Frame>
            <div><div className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Foto de perfil</div><ProfileTreatment dark={dark} /></div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 24 }}>
            <Frame w={1080} h={1080} scale={0.23} label="Capa"><CoverSlide dark={dark} /></Frame>
            <Frame w={1080} h={1080} scale={0.23} label="Conteúdo"><ContentSlide dark={dark} /></Frame>
            <Frame w={1080} h={1080} scale={0.23} label="Fechamento"><ClosingSlide dark={dark} /></Frame>
          </div>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { App });
