# Collin Title and Memorial Heading Implementation Plan

> REQUIRED SUB-SKILL: Use superpowers:executing-plans skill to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fit Collin’s team name on the card back and restyle the memorial heading as a compact grey football-framed label.

**Architecture:** Extend `Card.astro` with a narrowly scoped optional title-size prop and pass it only to Collin’s card. Keep the memorial change local to `scrubs.astro`; an inline football glyph on each side avoids new assets or dependencies.

**Tech Stack:** Astro 5, Tailwind CSS 3, Node.js source assertion, Astro build.

---

### Task 1: Add a failing source assertion

**Files:**
- Modify: `scripts/check-scrubs-page.mjs`
- Test: `scripts/check-scrubs-page.mjs`

- [x] **Step 1: Assert the new requirements**

Add assertions that require `titleSize="compact"` on Collin’s card and a memorial heading containing the uppercase text `IN LOVING MEMORY` with two football glyphs.

- [x] **Step 2: Run the check to verify it fails**

Run: `node scripts/check-scrubs-page.mjs`

Expected: FAIL because the compact override and revised heading are absent.

### Task 2: Apply the card and heading styling

**Files:**
- Modify: `src/components/Card.astro`
- Modify: `src/pages/scrubs.astro`
- Modify: `scripts/check-scrubs-page.mjs`

- [x] **Step 1: Add the optional title-size prop**

Add a `titleSize` prop to `Card.astro` and conditionally add a compact modifier class to the title. Define the modifier to reduce only that title’s font size.

- [x] **Step 2: Apply the compact title to Collin**

Pass `titleSize="compact"` to Collin’s card in `src/pages/scrubs.astro`.

- [x] **Step 3: Restyle the memorial heading**

Replace the current heading text with uppercase `IN LOVING MEMORY` and grey football glyphs on both sides. Use classes for small text, grey color, and wide tracking.

- [x] **Step 4: Run the source check to verify it passes**

Run: `node scripts/check-scrubs-page.mjs`

Expected: PASS.

- [x] **Step 5: Build and visually verify**

Run: `pnpm build`. Reload `http://127.0.0.1:4321/scrubs`, flip Collin’s card, and verify the compact title fits. Verify the memorial heading is grey, uppercase, wide-tracked, and has one football icon on each side.

- [x] **Step 6: Commit**

```bash
git add src/components/Card.astro src/pages/scrubs.astro scripts/check-scrubs-page.mjs docs/plans/2026-08-21-collin-title-and-memorial-heading.md
git commit -m "feat: refine Collin and memorial styling"
```
