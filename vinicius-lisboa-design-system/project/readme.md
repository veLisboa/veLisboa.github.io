# Vinicius Lisboa — Personal Brand Design System

A personal identity system for **Vinicius Lisboa** — Data & AI practitioner and leader, Curitiba, Brazil. This is the umbrella for everything published under his own name: the Portuguese newsletter on Microsoft Fabric and Power BI governance, LinkedIn, conference talks, training, and his professional profile. It is **a person, not a company**: no agency or studio signals, no tagline lock-ups, no product marks.

## Sources

Built from a written brief only — **no codebase, Figma file, deck or existing asset was provided**. Every value in this system was authored here and is therefore a proposal, not a record of prior usage. Nothing in it references or derives from Klarun (the author's separate B2B SaaS product), which is deliberately kept at arm's length: shared restraint, opposite colour temperature, no shared mark.

Substitutions to flag: **no font binaries were supplied.** The system specifies Source Serif 4, IBM Plex Sans and IBM Plex Mono — all OFL, all on Google Fonts, Canva and installable for PowerPoint — loaded from the Google Fonts CDN in `tokens/fonts.css`. If self-hosted binaries are wanted, drop the `.woff2` files in `assets/fonts/` and swap the `@import` for `@font-face` rules. **No logo was supplied**, and none was drawn: both marks are the name set in the display serif, which is the entire construction.

## The two directions

`guidelines/directions.html` shows Direction **A (pure monochrome)** and **B (monochrome + one accent)** on the same three artifacts — carousel cover, newsletter header, speaking title slide.

**Recommended: B**, with slate `#45617a` held under ~2% of any surface. Pure monochrome is indistinguishable at feed-thumbnail size and forces emphasis into type weight, which makes layouts louder over time. Slate is a grey with a light touch of blue — hue 210 at 27% saturation, the same neutral family as the ink pushed just far enough to read as a colour rather than a darker grey, so it belongs to the greyscale instead of interrupting it. 6.5:1 on white, 5.4:1 lifted to `#8fa7bd` on the graphite ground, predictable in CMYK and in PowerPoint, and cool where Klarun's amber is warm — opposite temperature, same restraint.

Direction A is not discarded: it is the co-branding mode. Set `data-direction="mono"` on any root and the accent collapses to ink with no other change — use it for client decks, Microsoft/Databricks event templates, or any slide that already carries Klarun.

---

## The mark

Two forms. The wordmark is typeset; the monogram is a cursive signature shorthand of the same name — the deliberate human note in an otherwise typographic system, and the one place a third family appears.

| | Form | Use when | Minimum |
|---|---|---|---|
| Default | **Vinicius Lisboa** — full wordmark, Source Serif 4 600, tracking −0.014em | the mark has **≥ 96px / 25mm** of width | 14px type (= 96px total width) |
| Fallback | **VL** monogram — *cursive*, Petit Formal Script, in a square | the mark has **< 96px / 25mm** of width | 20px square |

Nothing else. There is no third form, and the two never appear in the same block. Monogram surfaces: favicon, profile photo, slide corner, carousel stamp, email-signature avatar. Wordmark surfaces: LinkedIn banner, newsletter masthead, title slides, one-pager, site header and footer. `Lockup` (wordmark + hairline + uppercase **role** line) is the header and signature form — the role line is the only text ever locked to the mark, and it is a role, never a promise.

Assets: `assets/wordmark-light.svg`, `assets/wordmark-dark.svg`, `assets/monogram-light.svg`, `assets/monogram-dark.svg`, `assets/favicon.svg`.

---

## VISUAL FOUNDATIONS

**Register.** Serious editorial print — a well-set essay or a technical journal, not SaaS marketing. Structure comes from **rules and whitespace**, never from containers.

**Colour.** Greys with a very light blue cast (hue ~215 at 3–5% saturation) on true white `#ffffff`, with graphite ink `#21252b` — never pure black, which reads as harsh against this much whitespace. Cool, not warm: the deliberate distance from Klarun's paper. Secondary text `#5b626c`, tertiary `#8b929b`, hairlines `#dde0e4`. One accent, slate `#45617a`, under 2% coverage. Text and rules that sit on `--paper-inverse` use `--ink-on-inverse`, `--ink-secondary-inverse`, `--ink-tertiary-inverse` and `--rule-inverse` — never a raw `--grey-*`, which would not flip with the theme. Dark mode inverts the same semantics: paper `#17191d`, ink `#f2f4f6`, rule `#31353c`, accent lifted to `#8fa7bd`. **Maximum two ground colours in any one artifact** — paper and inverted paper; nothing else is ever a background.

**Type.** Two families plus a mono, plus one script reserved entirely for the monogram. Source Serif 4 (display, headings), IBM Plex Sans (body, labels, UI), IBM Plex Mono (code, slide numbers, token names only), Petit Formal Script (the VL monogram and nothing else — never a heading, never a pull quote, never a slide). A 1.28 scale from a 17px body: 12 · 13 · 17 · 21 · 26 · 34 · 46 · 64 · 88. Line heights 1.02 display / 1.14 heading / 1.62 body / 1.45 caption. Negative tracking on display (−0.022em) and headings (−0.014em); +0.16em only on uppercase eyebrows and tags. Measure capped at 34em (~66 characters). All three families cover Latin Extended, so **ã õ ç á é í ó ú â ê ô à ü render as true glyphs, never composites** — verified in `guidelines/type-accents.card.html`.

**Backgrounds.** Flat fills only. No images behind text, no full-bleed photography, no illustration, no pattern, no texture, no grain, no gradient — ever. Photography exists in exactly one place: the profile portrait, which is black-and-white, plain light ground, chest-up, eyes on the upper third. There are no protection gradients or capsules in this system because nothing is ever set over an image.

**Rules.** Three weights, each with one job: **1px** `--rule` between list items and table rows; **2px** ink at section breaks, pull quotes and callout tops; **6px** ink as a page or slide opener directly above a display heading (14px at slide scale). A 2px accent rule is the one structural appearance of vermilion.

**Whitespace.** Space is the layout device: 24px within a block, 48px between blocks, 96px to a new section, 64px page margins (96px on slides). A section that feels empty is a copy problem, not a space problem — never fill it with an ornament.

**Cards.** There are none. No rounded corners (`--radius: 0`, at every size), no shadows (`--shadow: none`, there is no elevation model), no tinted or bordered "callout boxes". A grouping is a 2px rule with an uppercase label above it — that is what `Callout` is. Where a boundary is genuinely needed, it is a 1px hairline box with no fill.

**Transparency and blur.** Not used. No frosted panels, no overlay scrims, no alpha-muted type — ink is full opacity against its ground so the 4.5:1 floor always holds. The only opacity in the system is `0.38` on a disabled button.

**Motion.** 140ms, `cubic-bezier(.2,0,.2,1)`, colour and border only. No transforms, no bounce, no spring, no scroll-triggered reveal, no page transition. Animation exists to acknowledge input, not to entertain.

**States.** Hover: ink → accent on links (with the underline following), and border → ink on secondary buttons. Press: no shrink, no shadow — the fill simply resolves to ink. Focus: 2px accent outline at 2px offset, never removed. Disabled: 0.38 opacity, no colour change.

**Iconography.** See below — there is effectively none.

---

## CONTENT FUNDAMENTALS

**Voice: practitioner-first and opinionated.** Someone who ships governance and architecture and then explains it plainly. Calm, confident, specific. No hype, no thought-leadership register, no "in today's fast-moving landscape".

**Person.** First person singular, and it earns its place by being experiential: "Quase todo tenant que eu audito trata domínio como organização de arquivos." Address the reader as "você" (PT) / "you" (EN) sparingly and only for instruction. Never "nós" for a single person — there is no team behind this name.

**Claim shape.** Lead with the counter-intuitive assertion, then the cost, then the fix. Titles are flat statements of fact, not questions or promises: *"Domínios no Fabric não são pastas"*, *"Governance that survives the second year"*. Not *"5 dicas para..."*, not *"Você está usando domínios errado?"*.

**Specificity over adjective.** "Capacity F2 não sustenta refresh incremental acima de ~50M linhas" beats "performance pode degradar". Numbers get a unit and a condition, or they don't get written.

**Casing.** Sentence case everywhere — titles, headings, buttons, tags. Uppercase only in eyebrows, tags and metadata labels, at 13px with 0.16em tracking. Never a title in caps: it wrecks Portuguese accent legibility.

**Punctuation.** Middle dot `·` as the metadata separator ("12 mar 2026 · 8 min de leitura · PT-BR"). Em dashes for the aside. No exclamation marks. No ALL-CAPS emphasis, no bold-for-shouting — bold marks a term, italic marks a title.

**Emoji: never.** Not in copy, not as bullets, not in slide titles, not in the LinkedIn hook. Bullets are rules or numbers.

**Portuguese vs English.** Portuguese is the newsletter and LinkedIn default and keeps Microsoft product names in English ("modelo semântico no Direct Lake", not a translation). English is the speaking, one-pager and US-audience default, written for a US reader directly — not translated from the Portuguese, and never with a "Brazilian consultant" framing. Both languages use the same layouts unchanged; Portuguese runs roughly 15–20% longer, so headline slots are sized against the Portuguese string.

**Examples.**
- Newsletter standfirst: "Quase todo tenant que eu audito trata domínio como organização de arquivos. Funciona por três meses — e o custo aparece no sexto."
- Pull quote: "Governança que ninguém consegue operar é documentação."
- Closing CTA: "Escrevo sobre Fabric, Power BI e governança toda semana. Newsletter no link do perfil." — not "Curtiu? Deixe seu like! 🚀"
- Speaker bio: "I speak about what actually holds up in production."

---

## ICONOGRAPHY

**There is deliberately no icon set, and none should be added.** No icon font, no sprite sheet, no SVG library, no CDN set (Lucide, Heroicons or otherwise) is referenced anywhere in this system, and the components contain zero drawn glyphs. In an editorial monochrome system an icon is decoration competing with the type, and at the sizes this brand is consumed at (a 200px feed thumbnail, a projected slide) a 1.5px-stroke icon is noise.

What does the work instead:
- **Rules** for grouping and separation, in the three weights above.
- **The mono family** for anything enumerable: slide numbers (`14`), carousel position (`1/7`), code, token names.
- **Typographic characters only**, from the body font, used sparingly: `·` as separator, `—` as aside, `←` `→` for deck navigation affordances in tooling (never in published artwork).
- **The monogram** as the only mark-like object, and only under the 96px threshold.
- **No emoji, in any surface, ever.**

If an external platform forces an icon (a social profile row, an email client), use that platform's own native glyph unstyled — do not commission a matching set.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` (this file), `SKILL.md`, `thumbnail.html`.

**`tokens/`** — `fonts.css` (Google Fonts import + family tokens) · `colors.css` (ramp, semantics, dark theme, `[data-direction="mono"]`) · `typography.css` (scale, line heights, tracking, measure) · `spacing.css` · `layout.css` (grid, slide geometry, radius/shadow zeroes, motion) · `base.css` (element resets, link states, `.eyebrow`, `.measure`).

**`assets/`** — wordmark and monogram SVGs (light/dark), favicon. No icons, no illustrations, no photography — by design.

**`components/`**
- `brand/` — `Wordmark` (typeset), `Monogram` (cursive), `Lockup`
- `core/` — `Button`, `Rule`, `Tag`, `Callout`
- `editorial/` — `ArticleHeader`, `PullQuote`, `StatBlock`, `Byline`

  *Intentional additions:* nothing was inherited, so this set was authored from the brand's actual surfaces rather than from a generic primitive checklist. There is no Input, Select, Checkbox, Switch, Dialog, Toast, Tooltip or Tabs, because this brand publishes and speaks — it has no application to build. Add them only when an app exists.

**`ui_kits/`**
- `newsletter/` — Portuguese masthead + article page, light and dark (`index.html`)
- `linkedin/` — 1584×396 banner, 400×400 profile treatment, 1080² carousel (cover / content / closing), tabbed viewer
- `speaker/` — English speaker one-pager, US Letter, print-ready

**`slides/`** — `Slides.jsx` (`TitleSlide`, `DividerSlide`, `ContentSlide`, `ClosingSlide` at 1920×1080) + `index.html` click-through deck. Body type never below 28px.

**`templates/`** — `linkedin-carousel/` — the three-slide 1080² carousel as a copyable template, with theme (light/dark) and direction (accent/mono) switches.

**`artifacts/`** — `email-signature.card.html` (HTML table, inline CSS, 480px max, web-safe fallbacks) · `favicon.card.html`.

**`guidelines/`** — `directions.html` (A vs B + recommendation) · `do-and-dont.html` (the wordmark/monogram rule stated plainly, plus eight correct/incorrect pairs) · 17 foundation specimen cards for the Design System tab.

## Reproducibility outside code

Every value here is available in PowerPoint and Canva: three OFL fonts, six flat colours (plus Petit Formal Script for the monogram), square corners, no effects. In PowerPoint use a 1920×1080 slide, 96px (2.54cm) margins, a 12-column guide at 24px gutters, and the three rule weights as plain rectangles. Nothing in this system requires a gradient mesh, a shadow, a blend mode or a licensed typeface.
