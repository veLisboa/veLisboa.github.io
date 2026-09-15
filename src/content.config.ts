import { defineCollection } from "astro:content";
// `import { z } from "astro:content"` is deprecated and goes away in Astro 8.
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/**
 * Every collection carries `status`. It is the mechanism that makes an unfinished page
 * structurally impossible to mistake for a finished one:
 *
 *   real  — written, checked, and true. Renders as ordinary content.
 *   draft — drafted here from the owner's own source material; needs his review before it
 *           speaks in his name. Renders with a visible note.
 *   todo  — the content does not exist yet. Renders a <Todo> block saying so, never prose.
 *
 * `npm run todos` reads this field across all collections and prints the outstanding list.
 *
 * The `work` collection is gone: /work is merged into /labs and out of the nav. The case-study
 * skeleton survives at src/content/work/_template.md.txt for when a client clears one.
 */
const status = z.enum(["real", "draft", "todo"]);

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
    status,
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    /** The Portuguese title, when the edition ran in Portuguese first. */
    titlePt: z.string().optional(),
    abstract: z.string(),
    /** PT-BR editions live on LinkedIn, English editions on Medium. */
    linkedinUrl: z.string().optional(),
    mediumUrl: z.string().optional(),
    order: z.number().default(0),
    status,
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
    status,
  }),
});

const labs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/labs" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Public repo URL, or a TODO from src/config.ts while it is unpublished. */
    repo: z.string().optional(),
    order: z.number().default(0),
    status,
  }),
});

export const collections = { architecture, writing, talks, labs };
