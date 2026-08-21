# Collin title and memorial heading styling

## Goal

Make Collin’s long card-back title fit cleanly and refine the memorial heading’s visual hierarchy.

## Changes

- Add an optional card-title size override to `src/components/Card.astro`.
- Apply the smaller title size only to Collin’s `COLLINOSCOPIES ARE MY ANTI-DRUG` card-back title.
- Restyle the memorial heading in `src/pages/scrubs.astro` as small, uppercase, grey, and widely letter-spaced.
- Place one grey football icon on either side of the memorial heading text.

## Constraints

- Do not change the title sizing of other cards.
- Keep the existing card layout, flip behavior, and memorial card row unchanged.
- Use text glyphs or inline markup; do not add image assets or dependencies.

## Verification

- Build the Astro project successfully.
- Confirm Collin’s card title is visibly reduced on the card back.
- Confirm the memorial heading is grey, uppercase, letter-spaced, and framed by two grey football icons.
