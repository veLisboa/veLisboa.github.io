/**
 * Every external fact the site depends on, in one place.
 *
 * Nothing here is a guess. The delivery figures come from UPBI's customer database and the
 * teaching figures are the owner's own; the site names neither employer, at his request, so the
 * provenance lives here rather than on the page.
 */

export const site = {
  url: "https://velisboa.github.io",
  title: "Vinicius Lisboa",
  /** The <meta name="description"> default and the / positioning line. */
  description:
    "Architecture, governance and delivery for AI-ready data platforms. Microsoft Certified Trainer. ~5,000 students.",
  locale: "en",
  author: "Vinicius Lisboa",
  /** The role line locked to the wordmark in the Lockup. A role, never a promise. */
  role: "Data architecture · governance · training",
};

export const contact = {
  email: "ve.lisboa@icloud.com",
  linkedin: "https://www.linkedin.com/in/vini-lisboa/",
  github: "https://github.com/veLisboa",
};

/**
 * Everywhere the site points outward. One object, so the CTA block and the footer cannot drift
 * apart.
 */
export const social = {
  instagram: "https://www.instagram.com/vini.elisboa",
  linkedin: contact.linkedin,
  newsletter:
    "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429275004166361088",
  medium: "https://medium.com/@velisboa",
  klarun: "https://klarun.app/",
  github: contact.github,
};

/**
 * The "Book a meeting" destination. There is no scheduling tool yet, so it is a prefilled mailto.
 * Swap this one string for a real scheduling URL when there is one, with no markup changes.
 */
export const booking = `mailto:${contact.email}?subject=Meeting%20request`;

/**
 * Delivery figures from UPBI's customer database, read 17 Sep 2026.
 *
 * Scope matters and is rendered alongside these everywhere they appear: they describe UPBI's
 * book, the consultancy where the owner leads operations, not work personally delivered by one
 * person. The database records 53 client accounts, of which 12 are prospects rather than
 * engagements, so the published figure is deliberately "50+" rather than the raw row count.
 *
 * `industries` is "20+" rather than an exact integer because the database has no industry field.
 * The sectors below are a normalization of 46 free-text descriptors, and a different grouping
 * would give a different integer. The names are the proof; the count is just the headline.
 */
export const delivery = {
  projects: "60+",
  clients: "50+",
  industries: "20+",
};

export const industries = [
  "Public sector and government",
  "Banking and financial services",
  "Healthcare cooperatives",
  "Retail",
  "Pharmaceutical",
  "Technology and IT services",
  "Education",
  "Food and agribusiness",
  "Logistics and distribution",
  "Steel and mining",
  "Pulp, paper and packaging",
  "Consumer goods",
  "Footwear manufacturing",
  "Industrial manufacturing",
  "Industrial automation",
  "Engineering and construction",
  "Road infrastructure",
  "Gas distribution and energy",
  "Legal services",
  "Trading and conglomerates",
  "Animal health and nutrition",
  "Automotive distribution",
] as const;

/**
 * Certifications, grouped by vendor and ordered by relevance rather than by expiry.
 *
 * No dates beyond the MCT start year, and no claim anywhere that the full set is currently
 * active, because some are lapsed. Breadth is the point; a renewal calendar is not the reader's problem.
 */
export const credentials = [
  {
    vendor: "Microsoft",
    items: [
      "Certified Trainer (since 2022)",
      "Azure Solutions Architect Expert",
      "Azure Administrator Associate",
      "Azure AI Engineer Associate",
      "Fabric Analytics Engineer Associate",
      "Azure Data Engineer Associate",
      "Azure Data Scientist Associate",
      "Power BI Data Analyst Associate",
      "Fundamentals: Azure, Azure AI, Azure Data, Power Platform",
    ],
  },
  {
    vendor: "Databricks",
    items: [
      "Certified Data Analyst Associate",
      "Platform Administrator",
      "Generative AI Fundamentals",
      "Lakehouse Fundamentals",
    ],
  },
  { vendor: "AWS", items: ["Certified Cloud Practitioner"] },
  { vendor: "Education", items: ["UNINTER, Data Science (2021–2025)"] },
] as const;

/**
 * Cloudflare Web Analytics or GoatCounter. Neither sets cookies, so no banner is needed.
 * Left empty deliberately: no third-party script is injected until a token is filled in.
 */
export const analytics = {
  goatCounterCode: "",
};

/** Two destinations. Architecture and the AI lab are sections inside /work, not nav items. */
export const nav = [
  { href: "/work/", label: "Work" },
  { href: "/writing/", label: "Writing & speaking" },
] as const;

/**
 * The five subjects, in the order they build on each other: the platform, how it is governed,
 * what AI does on top of it, how to read someone else's estate, and where the market is going.
 *
 * One source for all three places they appear: /writing, the home teaser, and the speaker
 * one-pager. `icon` names a glyph in Icon.astro.
 */
export const writingThemes = [
  {
    num: "01",
    icon: "layers",
    title: "Architecture and fundamentals",
    line: "Data platform architecture from the ground up: capacity and licensing, warehouse and lakehouse, data mesh, pipeline orchestration, and application lifecycle.",
  },
  {
    num: "02",
    icon: "shield",
    title: "Governance",
    line: "Domain-driven workspaces, access and distribution, documentation, catalog and ownership, and the maturity levels an estate climbs through.",
  },
  {
    num: "03",
    icon: "chip",
    title: "AI and agents",
    line: "Data Agent integrations across AI Search, user-defined functions, Copilot and Foundry, plus LLMs, RAG, and where agentic AI holds up in production.",
  },
  {
    num: "04",
    icon: "briefcase",
    title: "Consulting",
    line: "How to read someone else's data environment. Assessment, maturity and cost, and how to get from what they run today to what they should be running.",
  },
  {
    num: "05",
    icon: "trend",
    title: "Data and AI strategy",
    line: "Where the market is moving, on the vendor side and on the adoption side, and what it takes to get an organization ready for it.",
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

/** Programs he mentors on. */
export const affiliations = [
  { src: "/vinicius-lisboa/Great-Learning-Logo-e1724927369271-768x300.jpg", alt: "Great Learning" },
  { src: "/vinicius-lisboa/McCombs.jpg", alt: "UT Austin McCombs School of Business" },
] as const;

/**
 * The Klarun lockup: the mark and the wordmark together. The earlier `wordmark-light.png` was
 * the wordmark alone, so the logo itself was missing.
 *
 * Both exports ship with a baked-in ground rather than transparency: `light` is cream with dark
 * type, `dark` is graphite with light type. Pick by the ground it is being placed on.
 * Folder name contains a space, so the path is URL-encoded.
 */
export const klarunLogo = {
  onLight: "/Klarun%20logo/exports/png/lockup-horizontal-point-light.png",
  onDark: "/Klarun%20logo/exports/png/lockup-horizontal-point-dark.png",
};

export const portrait = "/vinicius-lisboa/vini.PNG";

/**
 * The slot for the architecture overview diagram on /work. The file does not exist yet, so the page
 * checks for it and renders nothing until it does, so no broken image or placeholder ever ships.
 *
 * Wanted: SVG, viewBox 0 0 1600 960 (5:3, matching the existing set). PNG fallback at 2400×1440.
 */
export const architectureOverview = {
  src: "/data-architecture-diagrams/00-overview.svg",
  width: 1600,
  height: 960,
};
