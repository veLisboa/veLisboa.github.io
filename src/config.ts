/**
 * Every external fact the site depends on, in one place.
 *
 * Anything not yet known is `TODO(...)` rather than a plausible-looking guess. `npm run todos`
 * reports each one. A wrong-but-believable URL on a credibility site is worse than a visible gap.
 */

/** Marks a value the owner still has to supply. Rendered visibly, reported by `npm run todos`. */
export const TODO = (what: string) => `TODO: ${what}` as const;

export const isTodo = (v: string) => v.startsWith("TODO:");

export const site = {
  url: "https://velisboa.github.io",
  title: "Vinicius Lisboa",
  /** Used as the <meta name="description"> default and the / positioning line (§6.1). */
  description:
    "Data architecture and governance for Fabric and Databricks estates. Microsoft Certified Trainer. ~5,000 students.",
  locale: "en",
  author: "Vinicius Lisboa",
  location: "Curitiba, Brazil",
  /** The role line locked to the wordmark in the Lockup. A role, never a promise. */
  role: "Data architecture · governance · Microsoft Fabric",
};

export const contact = {
  /**
   * From the owner's own published CV. That CV is from 2023 — confirm this is still the address
   * he wants a conference organizer to write to before the site goes public.
   */
  email: "ve.lisboa@icloud.com",
  emailNeedsConfirming: true,
  linkedin: "https://www.linkedin.com/in/vini-lisboa",
  github: "https://github.com/veLisboa",
};

export const writing = {
  /** PT-BR editions live on LinkedIn; English editions live on Medium. */
  linkedinNewsletter: TODO("LinkedIn newsletter URL (PT-BR editions)"),
  medium: TODO("Medium profile URL (English editions)"),
};

export const labs = {
  /**
   * The .pbip-authored-as-text portfolio. The repo exists locally but has not been published,
   * and it needs sanitising first — see the handover notes.
   */
  pbipPortfolioRepo: TODO("public GitHub URL for the .pbip generator portfolio, once published"),
};

/**
 * Cloudflare Web Analytics or GoatCounter (§3) — neither sets cookies, so no banner is needed.
 * Left empty deliberately: no third-party script is injected until a token is filled in.
 */
export const analytics = {
  goatCounterCode: "",
};

/**
 * /work is merged into /labs and out of the nav — one combined proof page rather than an
 * empty index. Bringing it back is: re-add the route and put an entry here.
 */
export const nav = [
  { href: "/architecture/", label: "Architecture" },
  { href: "/writing/", label: "Writing" },
  { href: "/speaking/", label: "Speaking" },
  { href: "/labs/", label: "Labs" },
  { href: "/about/", label: "About" },
] as const;

/**
 * The newsletter's own thematic structure, taken from its index in Notion. This is the general
 * answer to "what does he write and talk about" — it feeds both /writing and /speaking.
 */
export const writingThemes = [
  {
    num: "01",
    title: "Why Fabric",
    line: "Why the platform grew the way it did, and what the Power BI to Fabric transition actually costs.",
  },
  {
    num: "02",
    title: "Fundamentals",
    line: "Data engineering and analytics: pipelines, connection modes, mirroring and shortcuts, report design.",
  },
  {
    num: "03",
    title: "Architecture",
    line: "Capacity and licensing, data mesh on Fabric, and application lifecycle management.",
  },
  {
    num: "04",
    title: "Governance",
    line: "Domain-driven workspaces, access and distribution, documentation — the parts people can actually operate.",
  },
  {
    num: "05",
    title: "AI and agents",
    line: "Data Agent integrations across AI Search, user-defined functions, Copilot and Foundry.",
  },
  {
    num: "06",
    title: "For consultants",
    line: "The maturity model, a self-assessment, and the road from where an estate is to where it should be.",
  },
] as const;

/** Vendor marks, used unstyled at their own proportions. `shape` drives optical sizing. */
export const platformLogos = [
  { src: "/techs-logo/microsoft-logo.png", alt: "Microsoft", shape: "word" },
  { src: "/techs-logo/fabric-logo.png", alt: "Microsoft Fabric", shape: "mark" },
  { src: "/techs-logo/powerbi-logo.png", alt: "Power BI", shape: "mark" },
  { src: "/techs-logo/databricks-logo.png", alt: "Databricks", shape: "mark" },
  { src: "/techs-logo/azure-logo.png", alt: "Microsoft Azure", shape: "mark" },
  { src: "/techs-logo/copilot-logo.png", alt: "Microsoft Copilot", shape: "mark" },
  { src: "/techs-logo/foundry-logo.png", alt: "Azure AI Foundry", shape: "mark" },
  { src: "/techs-logo/bigquery-logo.png", alt: "Google BigQuery", shape: "mark" },
  /* Tableau's PNG is palette-indexed with no alpha, so it only sits on a light ground. */
  { src: "/techs-logo/tableau-logo.png", alt: "Tableau", shape: "mark" },
] as const;

/** Programmes he mentors on, and the company he is building. */
export const affiliations = [
  { src: "/vinicius-lisboa/Great-Learning-Logo-e1724927369271-768x300.jpg", alt: "Great Learning" },
  { src: "/vinicius-lisboa/McCombs.jpg", alt: "UT Austin McCombs School of Business" },
  /* Folder name contains a space, so the path is URL-encoded. Files are left as placed. */
  { src: "/Klarun%20logo/exports/png/wordmark-light.png", alt: "Klarun" },
] as const;

export const portrait = "/vinicius-lisboa/vini.PNG";

/**
 * A curated handful of the official Fabric item icons — the vocabulary the diagrams are drawn
 * in. The folder holds ~70; a wall of seventy icons would be noise rather than richness, and
 * the design system's "no icon set" rule is only relaxed far enough to name real products.
 */
export const fabricItems = [
  { src: "/fabric-items-logo/lakehouse_40_item.png", label: "Lakehouse" },
  { src: "/fabric-items-logo/data_warehouse_40_item.png", label: "Warehouse" },
  { src: "/fabric-items-logo/semantic_model_40_item.png", label: "Semantic model" },
  { src: "/fabric-items-logo/notebook_40_item.png", label: "Notebook" },
  { src: "/fabric-items-logo/pipeline_40_item.png", label: "Pipeline" },
  { src: "/fabric-items-logo/eventstream_40_item.png", label: "Eventstream" },
  { src: "/fabric-items-logo/event_house_40_item.png", label: "Eventhouse" },
  { src: "/fabric-items-logo/report_40_item.png", label: "Report" },
  { src: "/fabric-items-logo/sql_database_40_item.png", label: "SQL database" },
  { src: "/fabric-items-logo/reflex_40_item.png", label: "Data Activator" },
] as const;
