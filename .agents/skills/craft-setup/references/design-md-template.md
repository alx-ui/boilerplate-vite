# DESIGN.md template

Write this file at the project root. Keep each section short: it's read at the start of every design task. The example is an invented yoga studio.

```markdown
# DESIGN.md · <product name>

> If this file and the code disagree, the code wins until the person decides. Note the conflict under Open questions.

## Product
<What it is, who uses it, where (devices), and the one job of the most-used screen.>
Example: Booking web app for a small yoga studio. Members book classes and buy packs on their phones;
two instructors manage the schedule on a laptop at the front desk. Main job: book a class in under 30 seconds.

## Audience and voice
<How technical, how formal, language and local formats.>
Example: Members of all ages, many over 60. Warm, short, plain words. Portuguese (Brazil); dates 14/11, times 18h30, money R$ 450.

## Mood
Words: <2–3 words>. Never like: <what it must never look like>.
Example: Words: calm, warm, unhurried. Never like: a gym app, a generic SaaS dashboard, anything neon.

## Brand
<Logo, colours, fonts, existing files. Mark anything not confirmed by the person "(assumed)".>
Example: Logo: lotus line drawing (brand/lotus.svg). Primary: sage green (from tokens.css). Paper off-white surfaces.
Font: system sans (assumed).

## References
- <Reference> — take: <…>; avoid: <…>
Example:
- A neighbourhood café's printed menu — take: large type, prices aligned right; avoid: the crowded borders.
- A popular meditation app — take: calm spacing and one accent colour; avoid: the dark gradients.

## Constraints
<Platforms, accessibility, light/dark, icon set, motion.>
Example: Phone first (390 px) and laptop (1280 px). WCAG AA, 18 px body text, 48 px tap targets. Light theme only.
One outline icon set. Motion only for confirmations.

## Decisions log
- <YYYY-MM-DD> — <decision> — <why>
Example: - 2026-11-15 — No dark mode for now — members book in daylight; it halves the states to design.

## Open questions
- <Anything inferred and not confirmed, or still undecided>
Example: - Are cancellations free up to 3 hours before class? (assumed)
```

## Rules for keeping it alive

- `craft` appends to the **Decisions log** after each task, with a date and the why.
- When the code and the brief disagree, the code wins until the person decides. Note the conflict under Open questions.
- Move an Open question into its section once it's answered.
