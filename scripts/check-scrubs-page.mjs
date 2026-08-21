import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile("src/pages/scrubs.astro", "utf8");

assert.match(page, /import collinImage from .*scrub-collin\.png/);
assert.match(page, /import collinTeam from .*team-collin\.jpg/);
assert.match(page, /sinceYear="SINCE '26"/);
assert.match(page, /title="COLLINOSCOPIES ARE MY ANTI-DRUG"/);
assert.match(page, />\s*In Loving Memory\s*</);
assert.match(page, /class="memorial-grid/);

const activeGrid = page.indexOf('class="cards-grid');
const memorialGrid = page.indexOf('class="memorial-grid');
assert.ok(memorialGrid > activeGrid, "memorial grid must follow active grid");

console.log("Scrubs page checks passed.");
