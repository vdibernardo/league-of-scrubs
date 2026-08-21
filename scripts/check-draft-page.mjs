import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile("src/pages/draft.astro", "utf8");
const card = await readFile("src/components/DraftCard.astro", "utf8");

assert.match(page, /import board2025 from "\.\.\/assets\/boards\/2025\.png"/);
assert.match(page, /year: "2025",\s*boardImage: board2025\.src/);
assert.match(card, /draft-card[^\"]*h-full/);
assert.match(card, /draft-card-inner[^\"]*h-full/);

console.log("Draft page checks passed.");
