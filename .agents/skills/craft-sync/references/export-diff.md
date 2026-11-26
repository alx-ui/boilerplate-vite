# The export proposal

Compare three values for every name: the **last agreed** value in `design-sync.json`, the **guide** now, and the **code** now.

| Last agreed | Guide now | Code now | Means | Action |
|---|---|---|---|---|
| any | B | B | In sync | Nothing; record B as agreed if it wasn't |
| A | B | A | Guide changed | Propose A → B in code |
| A | A | B | Code changed | Nothing to export; offer to refresh the guide |
| A | B | C | Both changed | Show A, B, C and **ask which wins** |
| — | B | — | New in guide | Propose adding it (only if the person approved it in the tool) |
| no file | B | C | No record | List it and **ask the direction** |

## Proposal format

```
Sync guide → code (last agreed: design-sync.json, 2026-11-10)

Guide changed
  --color-accent   #2e6b57 → #3d7f69   packages/ui/tokens.css:8
     affects: Button primary (Button.tsx:4) → Home "New entry"
     check: paper text on the new accent ≈ 4.5:1, just AA for 15px text

Both changed: which wins?
  --radius-md      agreed 10px · guide 8px · code 12px
     affects: every Button (Button.tsx:14)

Code changed (guide is behind): none

Nothing has been edited. Approve the accent, and tell me which radius wins.
```

## Components

When a drawn component's values differ from the code (its padding, height, variant colours), list them in the same shape, with the component file and line. "Proposed" states and fonts substituted because the tool lacked them are not changes.

## After approval

1. Edit the **source** files only. If tokens are generated (Style Dictionary, a build step), edit the source and say the build must run.
2. Update the guide for anything decided in the code's favour.
3. Run the project's checks.
4. Write the agreed values into `design-sync.json`.
