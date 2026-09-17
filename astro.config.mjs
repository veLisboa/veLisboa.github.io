// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // GitHub *user* site (repo named veLisboa.github.io), so the site is served from the domain
  // root and there is no `base` to unwind when a custom domain is added later (D2).
  site: "https://velisboa.github.io",
  output: "static",
  trailingSlash: "always",
  // The site dropped from five destinations to three. GitHub Pages serves static files and cannot
  // issue a real 301, so in `output: "static"` Astro emits an HTML stub per entry carrying a
  // meta refresh and a <link rel="canonical"> at the new URL. That is the only mechanism
  // available at zero cost, and it is what keeps the old links working.
  redirects: {
    "/about/": "/",
    "/architecture/": "/work/",
    "/architecture/data-lakehouse/": "/work/architecture/data-lakehouse/",
    "/architecture/microsoft-fabric/": "/work/architecture/microsoft-fabric/",
    "/architecture/databricks/": "/work/architecture/databricks/",
    "/architecture/databricks-fabric-serving/": "/work/architecture/databricks-fabric-serving/",
    "/architecture/bigquery-fabric-serving/": "/work/architecture/bigquery-fabric-serving/",
    "/architecture/snowflake-fabric-serving/": "/work/architecture/snowflake-fabric-serving/",
    "/architecture/redshift-fabric-serving/": "/work/architecture/redshift-fabric-serving/",
    "/labs/": "/work/",
    "/labs/pbip-generated-reports/": "/work/",
    "/speaking/": "/writing/",
    "/writing/fabric-maturity-model/": "/writing/",
  },
  // Prefetch injects a client-side script. The site ships no JS.
  prefetch: false,
  integrations: [
    mdx(),
    // The one-pager is a print artifact, not a page to be found in search.
    sitemap({ filter: (page) => !page.includes("/speaking/one-pager") }),
  ],
  markdown: {
    // GFM and smart punctuation are on by default in Astro 7's processor, so they are not set
    // here — the top-level `gfm`/`smartypants` options are deprecated.
    //
    // Shiki's themes are polychrome, which contradicts a monochrome system with a single accent
    // held under 2% of any surface. Code renders as plain <pre><code> in IBM Plex Mono inside a
    // hairline box, styled in site.css.
    syntaxHighlight: false,
  },
  build: {
    // One stylesheet rather than per-page <style> blocks — the token cascade is global and the
    // import order in src/styles/ds/styles.css is load-bearing.
    inlineStylesheets: "never",
  },
});
