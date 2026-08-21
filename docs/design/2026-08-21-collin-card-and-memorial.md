# Collin card and memorial section

## Goal

Replace Mickles in the active League of Scrubs roster with Collin while preserving Mickles in a dedicated memorial section.

## Page changes

- On `src/pages/scrubs.astro`, replace the active Mickles card with a Collin card.
- Import and use `src/assets/scrubs/scrub-collin.png` for the front and `src/assets/team/team-collin.jpg` for the back.
- Set Collin’s card-back content to `SINCE '26`, `COLLINOSCOPIES ARE MY ANTI-DRUG`, SQUEALER `0`, and DONG `0`.
- Add an `In Loving Memory` heading beneath the active roster. Center the heading and the memorial card row.
- Render Mickles’s existing card as the sole card in the memorial row. Keep the row extensible so a second memorial card can be added later without restructuring the section.

## Constraints

- Reuse the existing `Card` component and its flip behavior.
- Retain the existing responsive dimensions and main roster grid.
- Do not change other roster cards or global styles.

## Verification

- Build the Astro site successfully.
- Confirm the running page shows Collin in the active grid and the centered memorial section below it with Mickles’s card.
