One-line: the default brand mark — the full name "Vinicius Lisboa" set in Source Serif 4 semibold; use it any time the space allows at least 96px / 25mm of width.

```jsx
<Wordmark size={40} />
<Wordmark size={20} tone="inverse" />
```

Variants: `tone` ink (default) / inverse (on black) / accent (reserve for a single stamp, never body). `weight` 400 is only permitted above 56px, where the serif gets airier — below that always 600. Never letterspace it positive, never all-caps it, never pair it with a tagline.
