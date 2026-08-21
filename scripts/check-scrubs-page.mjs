import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile("src/pages/scrubs.astro", "utf8");

assert.match(page, /import collinImage from .*scrub-collin\.png/);
assert.match(page, /import collinTeam from .*team-collin\.jpg/);
assert.match(page, /import \{ Icon \} from "astro-icon\/components"/);
assert.match(page, /sinceYear="SINCE '26"/);
assert.match(page, /title="COLLINOSCOPIES ARE MY ANTI-DRUG"/);
assert.match(page, /titleSize="compact"/);
assert.match(page, />\s*In Loving Memory\s*</);
assert.match(page, /uppercase tracking-\[0\.35em\] text-gray-400/);
assert.match(page, /class="memorial-grid/);

const footballIcons = page.match(/data-football-icon/g) ?? [];
assert.equal(footballIcons.length, 2, "memorial heading must have two football icons");
assert.doesNotMatch(page, /<svg\s+data-football-icon/);
const iconifyFootballs = page.match(/name="mdi:football"/g) ?? [];
assert.equal(iconifyFootballs.length, 2, "memorial heading must use two icon-set footballs");

const bradCard = page.match(/<Card\s+img=\{bradImage\}[\s\S]*?\/>/)?.[0] ?? "";
const mickleCard = page.match(/<Card\s+img=\{mickleImage\}[\s\S]*?\/>/)?.[0] ?? "";
assert.doesNotMatch(bradCard, /champion=/);
assert.match(mickleCard, /champion="CHAMPION"/);

const activeGrid = page.indexOf('class="cards-grid');
const memorialGrid = page.indexOf('class="memorial-grid');
assert.ok(memorialGrid > activeGrid, "memorial grid must follow active grid");

console.log("Scrubs page checks passed.");
