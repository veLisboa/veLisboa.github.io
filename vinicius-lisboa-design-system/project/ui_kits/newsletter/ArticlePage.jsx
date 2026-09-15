const { ArticleHeader, PullQuote, Callout, Rule, Tag, Byline } = window.ViniciusLisboaDesignSystem_249f05;

function P({ children }) {
  return <p style={{ fontSize: "var(--step-0)", lineHeight: "var(--lh-body)", color: "var(--ink)", maxWidth: "var(--measure)", marginBottom: "var(--space-6)" }}>{children}</p>;
}
function H2({ children }) {
  return <h2 style={{ fontSize: "var(--step-3)", marginTop: "var(--space-9)", marginBottom: "var(--space-5)" }}>{children}</h2>;
}

function ArticlePage() {
  return (
    <article>
      <ArticleHeader
        eyebrow="Governança · Microsoft Fabric"
        title="Domínios no Fabric não são pastas"
        standfirst="Quase todo tenant que eu audito trata domínio como organização de arquivos. Funciona por três meses — e o custo aparece no sexto."
        meta={["12 mar 2026", "8 min de leitura", "PT-BR"]}
      />
      <div style={{ marginTop: "var(--space-8)", display: "grid", gridTemplateColumns: "minmax(0,1fr) 260px", gap: "var(--space-9)", alignItems: "start" }}>
        <div>
          <P>Um domínio representa responsabilidade sobre um conjunto de dados: quem aprova mudança de modelo, quem responde quando o número do relatório não fecha, quem decide o que entra em produção. Pasta representa onde o arquivo está. São coisas diferentes, e a confusão entre as duas é a causa mais comum de reestruturação de tenant que eu vejo.</P>
          <P>Na prática, o desenho que sustenta operação é simples: domínio por área de responsabilidade do negócio, workspace por estágio de entrega, item por contrato de consumo. Três níveis, cada um com um dono nomeado.</P>
          <PullQuote attribution="Edição 038">Governança que ninguém consegue operar é documentação.</PullQuote>
          <H2>O que muda na operação</H2>
          <P>Quando o domínio carrega responsabilidade, a revisão de acesso deixa de ser um exercício de listar pessoas e passa a ser uma pergunta de negócio. A diferença é medida em tempo de resposta a incidente, não em número de páginas de política.</P>
          <ol style={{ paddingLeft: "1.2em", margin: "0 0 var(--space-6)", maxWidth: "var(--measure)" }}>
            {["Nomeie um dono por domínio antes de criar qualquer workspace.","Separe entrega (dev, teste, produção) de responsabilidade (domínio).","Publique o contrato de consumo junto do modelo semântico, não num Confluence separado."].map((t, i) => (
              <li key={i} style={{ fontSize: "var(--step-0)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-4)" }}>{t}</li>
            ))}
          </ol>
          <Callout label="Na prática">Capacity F2 não sustenta refresh incremental acima de ~50M linhas com modelo em Direct Lake mal particionado. Teste antes de prometer SLA.</Callout>
        </div>
        <aside style={{ display: "grid", gap: "var(--space-6)" }}>
          <div>
            <Rule weight="medium" tone="strong" />
            <div className="eyebrow" style={{ display: "block", margin: "var(--space-4) 0 var(--space-4)" }}>Nesta edição</div>
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              {["Domínios não são pastas","Direct Lake e o custo do fallback","Uma checagem de acesso por trimestre"].map((t, i) => (
                <div key={i} style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--space-3)", fontSize: "var(--step--1)", color: "var(--ink-secondary)" }}>{t}</div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <Tag>Fabric</Tag><Tag>Governança</Tag><Tag>Power BI</Tag>
          </div>
          <Byline date="12 mar 2026" />
        </aside>
      </div>
    </article>
  );
}
Object.assign(window, { ArticlePage });
