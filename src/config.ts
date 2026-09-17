/**
 * Every external fact the site depends on, in one place.
 *
 * Nothing here is a guess. Delivery figures are UPBI's and are labelled as UPBI's wherever they
 * render; teaching figures are the owner's own. A number without a stated scope is a claim the
 * reader will scope for you, usually generously.
 */

export const site = {
  url: "https://velisboa.github.io",
  title: "Vinicius Lisboa",
  /** The <meta name="description"> default and the / positioning line. */
  description:
    "Data architecture and governance for Fabric and Databricks estates. Microsoft Certified Trainer. ~5,000 students.",
  locale: "en",
  author: "Vinicius Lisboa",
  /** The role line locked to the wordmark in the Lockup. A role, never a promise. */
  role: "Data architecture · governance · Microsoft Fabric",
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
 * Swap this one string for a real scheduling URL when there is one — no markup changes.
 */
export const booking = `mailto:${contact.email}?subject=Meeting%20request`;

/**
 * Delivery figures from UPBI's customer database, read 17 Sep 2026.
 *
 * Scope matters and is rendered alongside these everywhere they appear: they describe UPBI's
 * book, the consultancy where the owner leads operations — not work personally delivered by one
 * person. The database records 53 client accounts, of which 12 are prospects rather than
 * engagements, so the published figure is deliberately "50+" rather than the raw row count.
 *
 * `industries` is "20+" rather than an exact integer because the database has no industry field —
 * the sectors below are a normalisation of 46 free-text descriptors, and a different grouping
 * would give a different integer. The names are the proof; the count is just the headline.
 */
export const delivery = {
  projects: "60+",
  clients: "50+",
  industries: "20+",
  scope: "UPBI, the consultancy where I lead operations",
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
 * active — some are lapsed. Breadth is the point; a renewal calendar is not the reader's problem.
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
  { vendor: "Education", items: ["UNINTER — Data Science (2021–2025)"] },
] as const;

/**
 * Cloudflare Web Analytics or GoatCounter — neither sets cookies, so no banner is needed.
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
 * The newsletter's thematic structure, consolidated from six threads to four. One line each.
 */
export const writingThemes = [
  {
    num: "01",
    title: "Why Fabric",
    line: "Why the platform grew the way it did, and what moving from Power BI to Fabric actually costs.",
  },
  {
    num: "02",
    title: "Architecture and fundamentals",
    line: "Capacity and licensing, data mesh on Fabric, pipelines and connection modes, application lifecycle.",
  },
  {
    num: "03",
    title: "Governance",
    line: "Domain-driven workspaces, access and distribution, documentation — the parts a team can actually operate.",
  },
  {
    num: "04",
    title: "AI and agents",
    line: "Data Agent integrations across AI Search, user-defined functions, Copilot and Foundry.",
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

/* Folder name contains a space, so the path is URL-encoded. Files are left as placed. */
export const klarunWordmark = "/Klarun%20logo/exports/png/wordmark-light.png";

export const portrait = "/vinicius-lisboa/vini.PNG";

/**
 * The slot for the architecture overview diagram on /work. The file does not exist yet — the page
 * checks for it and renders nothing until it does, so no broken image or placeholder ever ships.
 *
 * Wanted: SVG, viewBox 0 0 1600 960 (5:3, matching the existing set). PNG fallback at 2400×1440.
 */
export const architectureOverview = {
  src: "/data-architecture-diagrams/00-overview.svg",
  width: 1600,
  height: 960,
};
