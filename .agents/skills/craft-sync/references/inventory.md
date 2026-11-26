# The inventory report

Show this before drawing anything, then ask for the pick. For big packages (more than about 15 components), group them and show counts; never list 80 rows.

```
Design system found: packages/ui (React)

Tokens · 22 in packages/ui/tokens.css
  Colour 12 (ink, ink-muted, paper, paper-sunk, line, accent, accent-hover, success, warn, danger,
             sand-200*, sand-400*)
  Type 4 (font-body, text-sm 13, text-md 15, text-lg 19) · Spacing 4 (4/8/12/16) · Radius 2 (6/10)
  * named by value, no role. I'll keep the names; the roles go to open questions.

Components · 3
  Button   packages/ui/Button.tsx   primary · secondary · ghost × sm · md, loading
  Input    packages/ui/Input.tsx    default · error · disabled
  Badge    packages/ui/Badge.tsx    neutral · success · warn

Guidelines · packages/ui/guidelines.md (5 rules) → the guide's legend text

Conflicts (settle before I build)
  - The tool already has --color-accent = #3a7a62 (code: #2e6b57). Keep the code's value, or the tool's?
  - --shadow-card: the tool can't hold shadows. It goes on the guide as text, "not registered".

Gaps
  - No hover, pressed or focus styles anywhere (accent-hover is defined but unused)
  - Badge success/warn backgrounds are hard-coded hex, not tokens
  - No shadow or motion tokens

Which components should I draw now? I suggest Button and Input: the settings page needs both.
The others get a row in the component index (name, path, "in code only"); their variants are read when they're drawn.
```

For a large package, group by kind (actions · inputs · feedback · layout · navigation · data display), show counts and five example names per group, and suggest 3–6 by the screens about to be designed.
