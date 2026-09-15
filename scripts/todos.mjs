#!/usr/bin/env node
/**
 * The handover list.
 *
 * Reads every content collection's `status`, every TODO constant in src/config.ts, and every
 * <Todo> rendered into the built site, and prints what is still owed. One command, one list.
 *
 *   npm run todos
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const bold = (s) => `[1m${s}[0m`;
const dim = (s) => `[2m${s}[0m`;

/** Pull one scalar field out of a YAML frontmatter block. Enough for `status:` and `title:`. */
const field = (src, name) => {
  const m = src.match(new RegExp(`^${name}:\\s*(.*)$`, "m"));
  return m ? m[1].trim().replace(/^["']|["']$/g, "") : undefined;
};

async function collections() {
  const base = path.join(root, "src", "content");
  if (!existsSync(base)) return [];
  const out = [];
  for (const dir of await readdir(base, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    for (const f of await readdir(path.join(base, dir.name))) {
      if (!/\.mdx?$/.test(f)) continue;
      const src = await readFile(path.join(base, dir.name, f), "utf8");
      const status = field(src, "status") ?? "real";
      if (status !== "real") {
        out.push({ status, collection: dir.name, file: `${dir.name}/${f}`, title: field(src, "title") });
      }
    }
  }
  return out;
}

async function configTodos() {
  const src = await readFile(path.join(root, "src", "config.ts"), "utf8");
  return [...src.matchAll(/TODO\("([^"]+)"\)/g)].map((m) => m[1]);
}

async function builtTodos() {
  const dist = path.join(root, "dist");
  if (!existsSync(dist)) return null;
  const found = [];
  const walk = async (dir) => {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name.endsWith(".html")) {
        const html = await readFile(p, "utf8");
        const n = (html.match(/data-todo=/g) ?? []).length;
        if (n) found.push({ route: "/" + path.relative(dist, p).replace(/\\/g, "/"), n });
      }
    }
  };
  await walk(dist);
  return found;
}

const entries = await collections();
const cfg = await configTodos();
const built = await builtTodos();

console.log(`\n${bold("Outstanding — Vinicius Lisboa portfolio")}\n`);

const todo = entries.filter((e) => e.status === "todo");
const draft = entries.filter((e) => e.status === "draft");

if (todo.length) {
  console.log(bold("Not written yet"));
  for (const e of todo) console.log(`  ${e.title ?? e.file}\n    ${dim(e.file)}`);
  console.log();
}

if (draft.length) {
  console.log(bold("Drafted by Claude — needs your review before it speaks in your name"));
  for (const e of draft) console.log(`  ${e.title ?? e.file}\n    ${dim(e.file)}`);
  console.log();
}

if (cfg.length) {
  console.log(bold("Unknown values in src/config.ts"));
  for (const c of cfg) console.log(`  ${c}`);
  console.log();
}

if (built === null) {
  console.log(dim("Run `npm run build` to also list the TODO blocks rendered into each page.\n"));
} else if (built.length) {
  console.log(bold("Pages rendering a visible TODO block"));
  for (const b of built) console.log(`  ${b.route} ${dim(`(${b.n})`)}`);
  console.log();
}

const total = todo.length + draft.length + cfg.length;
console.log(`${total} item${total === 1 ? "" : "s"} outstanding.\n`);
