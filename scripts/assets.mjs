#!/usr/bin/env node
/**
 * "Use all the assets": checked, not assumed.
 *
 * The owner dropped a folder of material in and asked for every piece of it to be used. That is
 * the kind of requirement that quietly rots, so it gets a script rather than a manual scan:
 * every file in the named folders must be referenced by at least one built page.
 *
 *   npm run assets      (run after npm run build)
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const bold = (s) => `\u001b[1m${s}\u001b[0m`;
const dim = (s) => `\u001b[2m${s}\u001b[0m`;

/** Folders the owner explicitly asked to have used in full. */
const REQUIRED = [
  "techs-logo",
  "data-architecture-diagrams",
  "powerbi-dev",
  "vinicius-lisboa",
];
/** Large vendor icon sets: a curated subset is expected, not the whole folder. */
const PARTIAL = ["fabric-items-logo", "Klarun logo"];

if (!existsSync(dist)) {
  console.error("No dist/. Run `npm run build` first.");
  process.exit(1);
}

const walk = async (dir, base = dir) => {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, base)));
    else out.push(path.relative(base, p).split(path.sep).join("/"));
  }
  return out;
};

// Everything the built site actually references.
let html = "";
for (const f of await walk(dist)) {
  if (f.endsWith(".html")) html += await readFile(path.join(dist, f), "utf8");
}

/** The HTML holds URL-encoded paths; compare against both spellings. */
const referenced = (rel) => html.includes(rel) || html.includes(encodeURI(rel));

let missing = 0;
for (const folder of REQUIRED) {
  const dirPath = path.join(root, "public", folder);
  if (!existsSync(dirPath)) continue;
  const files = await walk(dirPath);
  const unused = files.filter((f) => !referenced(`/${folder}/${f}`));
  const used = files.length - unused.length;
  const ok = unused.length === 0;
  console.log(`${ok ? "  ok  " : " FAIL "} ${folder.padEnd(28)} ${used}/${files.length} used`);
  for (const u of unused) console.log(`        ${dim("unused: " + u)}`);
  if (!ok) missing += unused.length;
}

for (const folder of PARTIAL) {
  const dirPath = path.join(root, "public", folder);
  if (!existsSync(dirPath)) continue;
  const files = await walk(dirPath);
  const used = files.filter((f) => referenced(`/${folder}/${f}`)).length;
  console.log(`  --   ${folder.padEnd(28)} ${used}/${files.length} used ${dim("(subset expected)")}`);
}

console.log();
if (missing) {
  console.log(bold(`${missing} asset${missing === 1 ? "" : "s"} in a must-use folder are unreferenced.`));
  process.exit(1);
}
console.log(bold("Every asset in the must-use folders is referenced by a built page."));
