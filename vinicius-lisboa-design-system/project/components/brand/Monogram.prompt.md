One-line: the constrained fallback mark — use the VL monogram only where the full wordmark cannot render at 96px / 25mm wide (favicon, avatar, slide corner, carousel stamp).

```jsx
<Monogram size={96} variant="filled" />
<Monogram size={48} variant="boxed" />
```

Variants: `filled` solid ink square (avatar, favicon, profile photo), `boxed` hairline outline (slide corners over white), `plain` bare letters (inline in a footer rule). The letters are cursive (Petit Formal Script) — the one non-serif, non-sans element in the system — and the square is always square, never rounded. If the wordmark fits, the monogram is the wrong choice.
