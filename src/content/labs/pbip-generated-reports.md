---
title: "Power BI projects authored as text"
summary: "Three .pbip projects — report JSON and TMDL — emitted by committed Python generators. Nothing in them was drawn in Power BI Desktop."
order: 1
status: draft
---

A PBIP project is not a binary. It is report JSON plus a TMDL semantic model, which means the
whole thing can be generated, reviewed in a diff, and linted. This is three reports built that
way, from one generator: a shared module holding every visual structure, a second holding three
`Style` objects, so re-skinning a report touches no visual code at all.

None of it is client work. One report runs on a seeded synthetic generator, one on the public
Olist e-commerce dataset, one on Our World in Data — chosen so the projects could be published
without an anonymisation question.

## What it turned out to be about

Four of the more useful findings were about language boundaries rather than about Power BI.

**Published schemas describe what is allowed, not what is honoured.** The PBIR schemas validate
structure, but they do not tell you which `objects` property names a given visual actually reads.
An unrecognised name is discarded silently — nothing warns, nothing fails, the property simply
has no effect. Every JSON shape here was transcribed from real Desktop output instead.

**A locale can change what a number means.** Under `sourceQueryCulture: pt-BR`, a bare
`type number` conversion reads `1.5` as fifteen. Every generated `Table.TransformColumnTypes`
passes `"en-US"` explicitly. Left alone it would have been a silent, catastrophic error in all
three models, and nothing about it would have looked wrong on screen.

**Backslash is not an escape character in M.** Finding that took a Python operator-precedence
bug to surface first — and underneath it sat a second, latent one. Three of the four defects in
the build were escaping defects at a language boundary. None was a logic error.

**Report what you did not check.** The validation ladder has layers that cannot run without
Desktop. Those are reported as NOT RUN. They are never reported as passed.

## What is not here

No visual has been rendered. Accessibility is unverified — no alt text, no contrast check — and
on one of the three designs that is the weakest point of the whole thing rather than a detail.
