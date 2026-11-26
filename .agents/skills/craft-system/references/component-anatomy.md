# Component anatomy

Every guide section has the same three parts, so anyone can find the rule, the look and the states in the same place.

## 1. Legend (a narrow left column)

- The piece's name.
- The rule in prose: when to use it, when not to, and **why**. For example: "One primary button per screen, always with an icon on the left: it's the next thing the person should do."

## 2. Examples

The piece in realistic use, with real-looking content, not "Lorem ipsum" or "Button". Show each size and variant once.

## 3. States matrix (for anything interactive)

Rows are variants and columns are states:

| Variant | Normal | Hover | Pressed | Focus | Disabled | Loading | Selected |
|---|---|---|---|---|---|---|---|
| Primary | … | … | … | … | … | … | n/a |
| Secondary | … | … | … | … | … | … | n/a |
| Text | … | … | … | … | … | … | n/a |
| Danger | … | … | … | … | … | … | n/a |

- Draw every cell, or write "n/a" with a reason.
- Loading keeps the exact width: the label stays in the layout but invisible, with a spinner centred on top.
- A label that changes (Copy → Copied) is sized to its longest label.

Pieces that only show information (a status pill, a stat tile) have **data states** instead: success, warning, error, paused, empty. Draw those.

## Component index

One table for the whole system, kept in the guide or the repo:

| Piece | Where its states are drawn | Code location | Status |
|---|---|---|---|
| Button | Guide › Content › Buttons › States | `ui/button.tsx` | built |
| Toast | Guide › Content › Toast › States | `ui/toast.tsx` | built, loading state missing |
| Date picker | Guide › Fields › Date | not yet | design only |

Update it in the same change as the piece.
