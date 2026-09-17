import { defineCollection } from "astro:content";
// `import { z } from "astro:content"` is deprecated and goes away in Astro 8.
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/**
 * Two collections.
 *
 * `architecture` renders the seven detail pages under /work/architecture/. `talks` feeds the
 * speaker one-pager and nothing else.
 *
 * There is no `status` field any more. It existed to mark unfinished entries and render a visible
 * note in their place, which meant internal review notes shipped to production. Nothing on this
 * site is published unfinished instead.
 */

/** Sorts a collection by its `order` field, lowest first. */
export const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

const architecture = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/architecture" }),
  schema: z.object({
    title: z.string(),
    /** The diagram's own two-digit number, so the site and the artwork agree. */
    num: z.string(),
    /** The subtitle printed on the diagram itself. */
    subtitle: z.string(),
    summary: z.string(),
    /** Which half of the set: the three foundations, or the four hybrids. */
    group: z.enum(["foundations", "hybrids"]),
    /** Path under /public. PNG exports for now — see README. */
    diagram: z.string(),
    order: z.number().default(0),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    /** Introductory | Intermediate | Advanced. */
    level: z.string().optional(),
    /** e.g. "45 min session" or "3 h workshop". */
    duration: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { architecture, talks };
