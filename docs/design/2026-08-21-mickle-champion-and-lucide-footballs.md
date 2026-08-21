# Mickle champion badge and Lucide football icons

## Goal

Show Mickle as champion in the memorial card and use a consistent football icon set in the memorial heading.

## Changes

- Remove the `CHAMPION` badge from Brad’s active-roster card.
- Add the `CHAMPION` badge to Mickle’s memorial card.
- Add `lucide-astro` to project dependencies.
- Replace the inline football SVG markup in the memorial heading with Lucide Football icon components, preserving their grey styling.

## Constraints

- Do not modify other card stats, titles, images, or roster positions.
- Retain the compact Collin title and existing memorial typography.
- Use only the new package needed for the football icons.

## Verification

- Run the source regression check and Astro production build successfully.
- Confirm Brad has no champion badge, Mickle has one, and exactly two Lucide football icons appear beside the memorial heading.
