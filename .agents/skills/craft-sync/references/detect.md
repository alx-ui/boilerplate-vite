# Detecting a design system in code

Look in this order. Stop guessing once you've found the source; ask when there are two.

## Tokens

| Signal | Where | How to read it |
|---|---|---|
| CSS custom properties | `tokens.css`, `variables.css`, `theme.css`, a `:root { --… }` block | Name and value; group by prefix (`--color-`, `--text-`, `--space-`, `--radius-`, `--shadow-`, `--duration-`) |
| Tailwind theme | `tailwind.config.*` › `theme` / `theme.extend`, or Tailwind v4 `@theme { … }` | Each key path is a token. Tailwind v4 emits its own CSS names (`--color-accent`, `--radius-md`): use those. A v3 config emits none, so it follows the naming rule below |
| Design-token JSON | `tokens.json`, `*.tokens.json` (W3C format), Style Dictionary sources | `$value` / `value` plus `$type` |
| Theme objects | `theme.ts`, `theme.js`, `theme.rs`, `Theme.swift`, `colors.xml` | Exported constants and nested objects |
| CSS-in-JS | `createTheme`, `styled-system`, `vanilla-extract` `createTheme` | The theme argument |

## The naming rule (decide once, write it in `design-sync.json` › `naming`)

- **CSS custom properties:** the names exactly as written.
- **Anything else:** the CSS variable name the system already emits, if it emits one (Tailwind v4, Style Dictionary's CSS output). Otherwise the full key path joined with `-` and prefixed `--` (`colors.accent.DEFAULT` → `--colors-accent`, `space.4` → `--space-4`). Never drop the category, or `borderRadius.md` and `boxShadow.md` both become `md`.
- If the tool can't hold a name or a type (some tools only take colours and numbers), keep it in the guide as text, mark it "not registered in <tool>", and keep it in `design-sync.json`.

## Generated files

If token files are built (Style Dictionary, a theme compiler, `tokens.json` → `tokens.css`), the **source** is the input, not the output. Export edits the source and says the build must run. Import may read the output for the final values, but `design-sync.json` › `source` names the input.

## Components

| Signal | Where |
|---|---|
| A UI package | `packages/ui`, `packages/design-system`, `libs/ui`, a workspace named `*ui*` |
| A component folder | `src/components/ui`, `components/`, shadcn's `components.json` (its `aliases.ui`) |
| Stories | `*.stories.(tsx|jsx|mdx)`: each story is a state or variant worth drawing |

**Reading variants:** variant maps (`const variants = { primary: …, ghost: … }`), `cva(…, { variants: { … } })`, `tailwind-variants` `tv(…)`, prop unions (`variant?: 'primary' | 'ghost'`), boolean props that change the look (`loading`, `disabled`, `error`).

## Docs

`guidelines.md`, `DESIGN_GUIDELINES.md`, `docs/design/**`, Storybook `*.mdx`, a README section on usage. These become the legend text in the guide.

## Ambiguity

- **Two UI packages** (an old and a new one, or web and mobile): list both with counts and ask which is the source.
- **Tokens and components disagree** (a component hard-codes a colour that has a token): import the token and note the component's hard-coded value as a gap.
- **Nothing found:** this isn't a sync; use `craft-system` create.
