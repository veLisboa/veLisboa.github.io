# Design decisions

Where this site deliberately departs from
[`vinicius-lisboa-design-system`](vinicius-lisboa-design-system/), and why.

These are recorded rather than left as drift. A re-export from Claude Design will restore the
original rules, and without this file the next person to touch the site — including a future
agent — will "fix" these back and quietly undo them.

## The departures

### 1. There is an icon set now

**The system says:** *"There is deliberately no icon set, and none should be added. No icon font,
no sprite sheet, no SVG library, no CDN set."*

**The site does:** uses nine vendor logos and ten official Microsoft Fabric item icons.

**Why:** the system's own escape hatch covers most of this — *"If an external platform forces an
icon, use that platform's own native glyph unstyled — do not commission a matching set."* These
are exactly that: Microsoft's, Databricks', Google's and Snowflake's own marks, unstyled, at
their own proportions. Nothing was drawn to match them.

The Fabric item icons stretch further, and are deliberately limited to ten of the ~70 available,
used once, as the vocabulary the architecture diagrams are drawn in. A wall of seventy icons is
noise, not richness.

### 2. There are three ground colours, not two

**The system says:** *"Maximum two ground colours in any one artifact — paper and inverted paper;
nothing else is ever a background."* And *"flat fills only."*

**The site does:** adds `--paper-sunken` as a third ground for tinted section bands.

**Why:** the pages needed rhythm. Alternating paper / sunken / inverted bands is what stops a long
page reading as one undifferentiated column — the problem the owner described as "way too plain."
The fills are still flat; no gradients, no texture, no images behind text.

### 3. Photography appears in more than one place

**The system says:** photography exists in exactly one place, the profile portrait, *"which is
black-and-white."*

**The site does:** uses the portrait in colour, on the home page and the speaker one-pager, and
shows dashboard screenshots and architecture diagrams as figures.

**Why:** the owner's call, made explicitly. The portrait's ground is muted concrete, so it does
not fight the palette. The dashboards and diagrams are work products, not decoration — they are
the proof the site exists to show.

### 4. The accent is used more freely

**The system says:** one accent, slate, *"held under ~2% of any surface."*

**The site does:** keeps roughly that budget per view, but spends it deliberately — one inverted
band per page, at most one accent figure in a stat row.

**Why:** unchanged in spirit. The rule is still one accent element per view; the site just uses
inversion as the rhythm device rather than avoiding emphasis altogether.

## The floor that still holds

Not negotiable, because these are what make it read as considered rather than generic:

- `--radius: 0` and `--shadow: none`. No rounded corners, no elevation, anywhere.
- No gradients, no blur, no transparency, no texture.
- **No emoji**, in any surface, ever.
- Sentence case. Uppercase only in 13px eyebrows and tags at `0.16em`.
- The type scale, the 34em measure, and the two families plus mono.
- Grouping is a rule with a label above it, never a card.
- `·` as the metadata separator, em dash for the aside, no exclamation marks.
- Motion is 140ms on colour and border only, and is disabled under `prefers-reduced-motion`.
- The wordmark where the mark has ≥96px of width, the monogram below that, never both in one
  block.

## Other deviations worth knowing

| Deviation | Why |
|---|---|
| Fonts self-hosted via Fontsource rather than the CDN `@import` in `tokens/fonts.css` | §3 of the plan requires no third-party request. The `--font-*` tokens are byte-identical; only the `@import` is gone. |
| Weight-level Fontsource imports, not subset-level | `latin-ext-400.css` declares a face with no `unicode-range` pointing at a latin-ext-only file, so ordinary text finds no glyphs and falls back to Segoe UI. Portuguese accents are U+00C0–U+00FF, inside `latin`. |
| Favicon is `favicon-512.png`, not `assets/favicon.svg` | That SVG sets "VL" as live `<text>` in Petit Formal Script. SVG favicons cannot load webfonts, so it renders as Segoe Script on Windows and Apple Chancery on macOS. |
| Nav and footer links drop the accent underline `base.css` gives every `<a>` | A row of accent underlines in the header blows the one-accent-per-view budget on every page. Prose links keep it. |
| A composite `--hairline` token was added | Borrowed from the Klarun system. `border: var(--hairline)` at thirty call sites beats three properties each time. |
| Syntax highlighting off | Shiki's themes are polychrome; this system is monochrome with one accent. |
| No dark-mode toggle | Rejected in §4 and §11 of the plan. The `[data-theme="dark"]` tokens stay in the sheet, unused. |

## If the design system is re-exported

1. Copy `tokens/*.css` **except** `fonts.css`, where only the `:root` block should be taken — the
   Google Fonts `@import` must not come back.
2. Re-port any changed component in `src/components/ds/`, remembering that React appends `px` to
   numeric style values and Astro does not.
3. Re-read this file before "fixing" anything above back to the written rule.
