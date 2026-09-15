# Newsletter kit

Portuguese-language newsletter masthead and article page. Two surfaces:

- `Masthead.jsx` — masthead (eyebrow, wordmark, edition tag, date) closed by a 6px rule, plus the footer lock-up + subscribe row.
- `ArticlePage.jsx` — article body on a 1fr/260px grid: measure-limited text, pull quote, ordered list, callout, sidebar (contents, tags, byline).

`index.html` renders both with a light/dark toggle. Composed entirely from the system's components — no local primitives.
