# Token roles

Name tokens by the job they do. A component asks for `--color-text-muted`, never `#6b6b70` or `--gray-500`. A palette of raw values can exist underneath, but components only use roles.

## Colour

| Role | Job | Why it exists |
|---|---|---|
| `text` | Main text | One dark that every text uses |
| `text-muted` | Secondary text, captions | Hierarchy without a third grey |
| `text-placeholder` | Example text in an empty field | Lighter than muted, so it never reads as entered |
| `text-disabled` | Text on unavailable pieces | One way to say "can't use this now" |
| `on-dark` / `on-dark-muted` | Text on the primary or dark fills (toasts, tooltips) | Contrast on black is a different problem |
| `surface` | Cards, panels, the content area | The default ground |
| `fill-1`, `fill-2` | Grey grounds for secondary buttons, inputs, inset areas | Two steps are enough; a third is a smell |
| `border` | Card and field borders | One weight of line |
| `border-hover` | The border on hover | The quiet hover for bordered pieces |
| `divider` | Lines between rows | Lighter than `border`, so rows don't look boxed |
| `tint-hover`, `tint-hover-soft`, `tint-selected`, `tint-pressed` | Overlays for borderless pieces | Work on any ground, because they are translucent |
| `primary`, `primary-hover`, `primary-pressed` | The one primary action | Its own ladder of states |
| `focus` | The keyboard focus ring | Same everywhere |
| `overlay` | Behind dialogs | One dimming |
| `shadow`, `shadow-strong` | Floating pieces, dialogs and toasts | Only two strengths |
| `success`, `warn`, `danger` + `-bg`, `-text`, `-strong`, `-action` | Status | `-bg` for a tinted area, `-text` for readable text on it, `-strong` for emphasis, `-action` for a button inside an alert |

## Other scales

- **Type:** a handful of sizes with paired line heights (for example 12/16, 14/20, 15/22, 17/24, 22/28, 30/36). Name them by use (`body`, `small`, `title`), not only by size.
- **Spacing:** a 4px base. List the values actually used, not every multiple.
- **Radius:** 3–5 steps plus `full`.
- **Layout:** widths for the sidebar, the content column and side panels.
- **Motion:** durations (quick ~150, fast ~250, medium ~350 ms) and one easing for most things. Opening is slower than closing.

## Example: a dental clinic app (light theme)

An invented palette: warm sand neutrals and one plum accent.

```css
:root {
  --color-text: #2a2622;      --color-text-muted: #6e665e;   --color-text-placeholder: #9c948b;
  --color-surface: #fffdfa;   --color-fill-1: #f6f2ec;       --color-fill-2: #efe9e1;
  --color-border: #2a26221f;  --color-border-hover: #2a262238; --color-divider: #2a262214;
  --color-tint-hover-soft: #2a262208; --color-tint-selected: #2a262212; --color-tint-pressed: #2a26221c;
  --color-primary: #6b3e75;   --color-primary-hover: #5a3363; --color-primary-pressed: #4a2952;
  --color-focus: #6b3e75;
  --color-danger: #c2452f;    --color-danger-bg: #fbeae6;    --color-danger-text: #9e3523;
  --text-body: 15px; --leading-body: 22px; --radius-md: 12px; --space-4: 16px;
}
```
