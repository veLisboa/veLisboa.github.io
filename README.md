# veLisboa.github.io

Personal site for Vinicius Lisboa. Astro, static output, deployed to GitHub Pages.

Built to the plan in Notion → Personal → Portfolio, using the design system in
[`vinicius-lisboa-design-system/`](vinicius-lisboa-design-system/).

```
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
npm run assets    # checks every asset in public/ is actually used (run after build)
```

## The rule this site is built on

The primary audience is conference organizers and MVP nominators. That makes it a credibility
artifact, so **an invented statistic or a plausible-sounding case study is a worse failure than
a page that does not exist.** Nothing unfinished is published. There is no mechanism for shipping
a page with a note explaining what is missing, because that mechanism is how internal review
notes ended up in production.

Every number on the site carries its scope. Delivery figures are UPBI's and say so; teaching
figures are the owner's own. A figure with no stated scope gets scoped by the reader.

## What's on it

Three destinations. Nav is **Work · Writing & speaking**, plus the wordmark.

| Route | What it holds |
|---|---|
| `/` | Hero, proof row, what I do, work teaser, writing teaser, platform logos, contact |
| `/work` | Background and credentials, delivery record by industry, Klarun, the seven architectures, the AI lab |
| `/work/architecture/<slug>` | **Seven reference architectures** — three foundations, four hybrids — each a full diagram plus its written rationale |
| `/writing` | Four subjects, the LinkedIn and Medium buttons, speaking |
| `/speaking/one-pager` | Print-to-PDF US Letter sheet. Linked from `/writing`, kept out of the sitemap |

`/about`, `/architecture`, `/labs` and `/speaking` are gone. All of their old URLs, including the
seven `/architecture/<slug>` ones, are redirected in `astro.config.mjs` — see *Redirects* below.

## Content

Markdown in `src/content/`, one folder per collection. Two collections:

- **`architecture`** — the seven detail pages under `/work/architecture/`.
- **`talks`** — feeds the speaker one-pager and nothing else.

`src/content/work/_template.md.txt` is a five-part case-study skeleton, kept for when a client
clears one. It is not a collection and does not render.

There is no `status` field. It existed to mark entries as `draft` or `todo` and render a visible
note in their place; that note was public copy, which is exactly what it should never have been.

### House rules for any copy you add

Banned words: *passionate, journey, leverage, cutting-edge, transform, seasoned, enthusiast*.
No emoji anywhere. Sentence case; uppercase only in 13px eyebrows and tags. `·` separates
metadata, em dash marks an aside. Bold marks a term, italic marks a title. Numbers carry a unit
and a condition or they don't get written.

## Why there are no client case studies

No client is named without written permission, so the delivery record on `/work` is industries
and counts only. The Power BI work shown in the AI lab section is not client work at all — both
reports run on synthetic or public data, and the page says so.

A real case study waits for client work cleared in writing: no client named, numbers rounded,
visuals rebuilt with synthetic data rather than blurred.
`src/content/work/_template.md.txt` is the five-part skeleton.

## Redirects

The site went from five destinations to three. GitHub Pages serves static files and cannot issue
a real 301, so the `redirects` map in [`astro.config.mjs`](astro.config.mjs) has Astro emit an
HTML stub per old URL carrying a meta refresh and a `<link rel="canonical">` at the new one. That
is the only mechanism available at zero cost.

Thirteen entries. If a route moves again, add it there — nothing else knows about old URLs.

## Design system

`vinicius-lisboa-design-system/` is the source of truth and is not edited here.

**Read [DESIGN-DECISIONS.md](DESIGN-DECISIONS.md) before changing anything visual.** The site
deliberately breaks three of the system's written rules — it uses vendor logos, a third ground
colour for tinted bands, and photography in more than one place. Those are recorded so a
re-export does not silently undo them.

Layout composition lives in [`src/styles/patterns.css`](src/styles/patterns.css): bands,
section-header triads, framed panels, spec rows, the hero, logo walls, stat strips, thumbnail
grids and prev/next. The devices are borrowed from the Klarun design system, whose own pages
carry zero photographs and still read as designed — the richness is structural, not decorative.

The 11 React components are ported to `.astro` in `src/components/ds/`, one file each, markup
and inline styles preserved verbatim. This ships zero JavaScript, which the React renderer
cannot promise and which the plan requires.

Two things to know if you re-port after a design-system re-export:

- **React appends `px` to numeric style values; Astro does not.** `fontSize: size` emits
  `font-size:32`, which is invalid and silently dropped. Every numeric prop is templated as
  `` `${size}px` ``. This affects `size` on Wordmark/Monogram/Lockup and `inset` on Rule.
- **`style` must stay spread last** so callers can still override, matching React.

### Deliberate deviations from the design system

| Deviation | Why |
|---|---|
| Fonts self-hosted via Fontsource, not the Google CDN `@import` in `tokens/fonts.css` | §3 requires no third-party request. The `--font-*` tokens are byte-identical; only the `@import` is gone. Re-copy the `:root` block only if the system is re-exported. |
| Weight-level Fontsource imports, not subset-level | `latin-ext-400.css` declares a face with no `unicode-range` pointing at a latin-ext-only file, so ordinary text finds no glyphs and falls back. Portuguese accents are U+00C0–U+00FF, inside `latin`. |
| Favicon is `favicon-512.png`, not `assets/favicon.svg` | That SVG sets "VL" as live `<text>` in Petit Formal Script. SVG favicons cannot load webfonts, so it renders as Segoe Script on Windows and Apple Chancery on macOS. |
| Nav and footer links drop the accent underline `base.css` gives every `<a>` | Five accent underlines in the header blows the one-accent-per-view budget. Prose links keep it. |
| Syntax highlighting off | Shiki's themes are polychrome; this system is monochrome with one accent. |
| No dark-mode toggle | Rejected in §4 and §11. The `[data-theme="dark"]` tokens stay in the sheet, unused. |

## Deploy

Push to `main` → GitHub Actions builds and deploys. `gh` is not installed here, so the repo
setup is manual:

1. Create a **public** repo named exactly **`veLisboa.github.io`** — no README, no `.gitignore`,
   no licence.
2. ```
   git init && git branch -M main
   git add -A && git commit -m "Initial site"
   git remote add origin https://github.com/veLisboa/veLisboa.github.io.git
   git push -u origin main
   ```
3. Settings → Pages → Source: **GitHub Actions** (not "Deploy from a branch"). The first deploy
   fails until this is set — that is expected.
4. Re-run the workflow from the Actions tab.

If your GitHub username is not `veLisboa`, the repo name and `site:` in
[`astro.config.mjs`](astro.config.mjs) must change together.

A custom domain later needs `public/CNAME` and `site:` updated in the same commit. Because this
is a user site the base path is `/`, so nothing else moves.

### Analytics

Off. `analytics.goatCounterCode` in `src/config.ts` is empty and no third-party script is
injected until it is filled in. GoatCounter and Cloudflare Web Analytics are both cookieless, so
neither needs a consent banner.

## Assets

`npm run assets` fails the check if anything in `public/techs-logo`,
`public/data-architecture-diagrams`, `public/powerbi-dev` or `public/vinicius-lisboa` is not
referenced by a built page. It runs in CI after the build. `fabric-items-logo` and `Klarun logo`
are treated as sets where a curated subset is expected.

`public/fabric-items-logo/` is currently referenced by nothing — the Fabric item vocabulary row
lived on the deleted `/architecture` index. The 66 files are kept, not deleted, and the folder is
in the partial list so the check passes.

### The architecture overview diagram

`/work` has a slot for an overview diagram at **`public/data-architecture-diagrams/00-overview.svg`**
— SVG, `viewBox="0 0 1600 960"` (5:3, matching the existing set). PNG fallback at 2400×1440.

The page checks whether the file exists and renders nothing until it does, so there is no broken
image and no placeholder in the meantime. Drop the file in and it appears; the path and
dimensions live in `architectureOverview` in [`src/config.ts`](src/config.ts).

The seven existing diagrams are PNG exports totalling 3.8 MB. Re-exporting them as SVG would cut
page weight and keep them crisp at any zoom. They are shown full size only on their own page,
which scrolls the diagram inside its frame rather than widening the document.
