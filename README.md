# veLisboa.github.io

Personal site for Vinicius Lisboa. Astro, static output, deployed to GitHub Pages.

Built to the plan in Notion → Personal → Portfolio, using the design system in
[`vinicius-lisboa-design-system/`](vinicius-lisboa-design-system/).

```
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
npm run todos     # what is still outstanding
npm run assets    # checks every asset in public/ is actually used (run after build)
```

## The rule this site is built on

The primary audience is conference organizers and MVP nominators. That makes it a credibility
artifact, so **an invented statistic or a plausible-sounding case study is a worse failure than
an empty page.** Anything not yet written renders a visible "Not written yet" block; anything
drafted from your material but not yet reviewed by you says so on the page.

`npm run todos` lists all of it. Nothing ships silently.

## Start here

Run `npm run todos`, then work down it. The highest-value items, in order:

1. **`/writing/fabric-maturity-model`** is empty. It is named as the site's strongest structural
   asset and its five levels have never been written down. Write the five level names and the
   one-line symptom for each; everything else on the page follows.
2. **Review the talk abstracts** in `src/content/talks/`. I drafted them from your six titles.
   They speak in your name and you have not read them yet. Set `status: real` once they do.
3. **Newsletter URLs** — `writing.linkedinNewsletter` and `writing.medium` in
   [`src/config.ts`](src/config.ts), then `linkedinUrl` / `mediumUrl` per edition. Right now the
   index says plainly that it links nowhere.
4. **Confirm the contact address.** `contact.email` comes from your 2023 CV. Check it is still
   where you want an organizer to write.
5. **The 8-minute English proof video.** Still the one asset that cannot be substituted —
   organizers want to see whether you can hold a room in English before they commit a slot.

## What's on it

| Route | What it holds |
|---|---|
| `/` | Portrait hero, platform logo wall, track-record stat band, three featured diagrams, the six writing themes, affiliations |
| `/architecture` | **Seven reference architectures** in two groups — three foundations, four hybrids — each a full diagram plus its written rationale |
| `/writing` | The six newsletter themes, the maturity-model page, and four editions with English abstracts |
| `/speaking` | Portrait, track record, teaching logos, the six subjects, six talks, booking |
| `/labs` | The agentic PBIP workflow diagram, two dashboard renders, and the write-up. `/work` is merged in here |
| `/about` | Portrait, bio, platform logos, credentials, teaching and Klarun, short bio, contact |
| `/speaking/one-pager` | Print-to-PDF US Letter sheet with the portrait |

`/work` was merged into `/labs` and dropped from the nav — one combined proof page rather than an
empty index. The case-study skeleton survives at `src/content/work/_template.md.txt`; bringing the
route back means re-adding the collection in `src/content.config.ts`, a page under
`src/pages/work/`, and an entry in `nav` in `src/config.ts`.

## Content

Markdown in `src/content/`, one folder per collection. Every entry carries `status`:

| `status` | Means | Renders |
|---|---|---|
| `real` | Written, checked, true | Ordinary content |
| `draft` | Drafted from your material, unreviewed | Content plus a "needs your review" note |
| `todo` | Does not exist yet | A "Not written yet" block, never prose |

There is no `work` collection — see below. `src/content/work/_template.md.txt` is the five-part
case-study skeleton, kept for when a client clears one.

### House rules for any copy you add

Banned words: *passionate, journey, leverage, cutting-edge, transform, seasoned, enthusiast*.
No emoji anywhere. Sentence case; uppercase only in 13px eyebrows and tags. `·` separates
metadata, em dash marks an aside. Bold marks a term, italic marks a title. Numbers carry a unit
and a condition or they don't get written.

## Why there are no client case studies

The plan assumed a `/work` page holding three Power BI reports written up as client case
studies. The source repo is not that: all three projects run on synthetic or public data and
carry no client context. Writing them up as delivery evidence would misrepresent them, so they
live on `/labs` described as what they actually are — a generator and the reports it produced.

Real case studies wait for client work cleared in writing under the confidentiality rule (D4):
no client named without permission, numbers rounded, visuals rebuilt with synthetic data rather
than blurred. `src/content/work/_template.md.txt` is the five-part skeleton.

**Before publishing the generator repo** it needs a sanitising pass: it references two other
local Power BI projects that read as real internal work, bakes absolute Windows user paths into
every model, carries a DPAPI signature and a 30 MB cache of its source data, and never
attributes the Olist dataset (CC BY-NC-SA — check whether a portfolio counts as commercial
use).

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
referenced by a built page. `fabric-items-logo` and `Klarun logo` are treated as sets where a
curated subset is expected.

The seven architecture diagrams are PNG exports totalling 3.8 MB. The plan's §3 stack table asks
for SVG — re-exporting them would cut the page weight and keep them crisp at any zoom. They are
lazy-loaded as thumbnails on the index and shown full size only on their own page, which scrolls
the diagram inside its frame rather than widening the document.
