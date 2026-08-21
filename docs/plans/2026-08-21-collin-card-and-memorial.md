# Collin Card and Memorial Section Implementation Plan

> REQUIRED SUB-SKILL: Use superpowers:executing-plans skill to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Put Collin in the active roster and show Mickles in a centered memorial section below it.

**Architecture:** Keep the existing `Card` component unchanged. Update the roster page’s asset imports and card declarations, then add a second section that reuses Mickles’s existing card data. A small source-level regression check protects the required copy and placement structure because the project has no configured test runner.

**Tech Stack:** Astro 5, Tailwind CSS 3, Node.js source assertion, Astro build.

---

### Task 1: Add a regression check for the roster markup

**Files:**
- Create: `scripts/check-scrubs-page.mjs`
- Test: `scripts/check-scrubs-page.mjs`

- [x] **Step 1: Write the failing source assertion**

Create a Node script that reads `src/pages/scrubs.astro` and asserts the page contains `collinImage`, `collinTeam`, `SINCE '26`, `COLLINOSCOPIES ARE MY ANTI-DRUG`, an `In Loving Memory` heading, and a dedicated memorial card-grid section after the active grid.

- [x] **Step 2: Run the check to verify it fails**

Run: `node scripts/check-scrubs-page.mjs`

Expected: FAIL because Collin and the memorial section are not yet present in the page.

- [x] **Step 3: Commit the test**

```bash
git add scripts/check-scrubs-page.mjs
git commit -m "test: cover Collin roster replacement"
```

### Task 2: Replace the active Mickles card and add the memorial section

**Files:**
- Modify: `src/pages/scrubs.astro`
- Modify: `scripts/check-scrubs-page.mjs`

- [x] **Step 1: Import Collin’s images**

Add imports for `../assets/scrubs/scrub-collin.png` and `../assets/team/team-collin.jpg` as `collinImage` and `collinTeam`.

- [x] **Step 2: Replace Mickles’s active-grid card with Collin’s**

Use `collinImage` and `collinTeam`; set `sinceYear="SINCE '26"`, `title="COLLINOSCOPIES ARE MY ANTI-DRUG"`, and stats SQUEALER `0` and DONG `0`.

- [x] **Step 3: Add a centered memorial section below the active grid**

Create a sibling section after the active roster with a centered `In Loving Memory` heading and a one-column card row. Move Mickles’s current `Card` declaration into it unchanged. Use a dedicated `memorial-grid` class so another card can be added later without restructuring.

- [x] **Step 4: Run the regression check to verify it passes**

Run: `node scripts/check-scrubs-page.mjs`

Expected: PASS.

- [x] **Step 5: Build the site**

Run: `pnpm build`

Expected: exit code 0.

- [x] **Step 6: Verify the rendered page**

With the running Astro server, reload `http://127.0.0.1:4321/scrubs` and inspect the DOM or screenshot. Confirm Collin appears in the active card grid and Mickles is alone below the `In Loving Memory` heading.

- [x] **Step 7: Commit the implementation**

```bash
git add src/pages/scrubs.astro scripts/check-scrubs-page.mjs src/assets/scrubs/scrub-collin.png src/assets/team/team-collin.jpg
git commit -m "feat: add Collin and memorial row"
```
