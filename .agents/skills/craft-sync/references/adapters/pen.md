# Adapter: pen.dev (pen.dev MCP)

Almost everything happens inside one tool, `execute`, which runs a short JavaScript snippet against the open `.pen` document. pen.dev has no pages, so the guide lives in top-level frames above the screens.

Needs the pen.dev app (or its editor extension) running with the document open, and its MCP server, `pencil`, turned on for your agent in pen.dev's Settings › MCP.

| Skill verb | In pen.dev |
|---|---|
| Start | Once per session: `read_skill()`, then `read_skill({path: "pen-schema.md"})` and `read_skill({path: "execute.md"})`. `get_app_state` shows the open document and the selection |
| Register tokens (import) | `Print(GetVariables())` first. A name that already exists **with a different value is a conflict** for the inventory stop, never a silent `SetVariables`. Then `SetVariables` with the code's names, kept exactly: pen.dev names may start with `--` (`--color-accent`, referenced as `"$--color-accent"`), but can't contain `:` or start with `$`. It merges by default; never pass `replace: true`. Types are `color`, `number` and `string` (the file format also has `boolean`) (a font family is a `string`); light and dark values go in one variable as `[{value, theme: {mode: "light"}}, {value, theme: {mode: "dark"}}]`. Types pen.dev can't hold (shadows, durations, easings) go on the foundations board as text, marked "not a pen.dev variable" |
| Guide area | Top-level frames above the screens (`FindEmptySpace({…, direction: "top", padding: 80})` the first time): `Guide · Foundations · Colour`, `Guide · Foundations · Type & scales`, `Guide · Component index`, `Guide · <Component>`. Content in small `execute` calls, every value a `"$name"` reference |
| Component index | One frame with a bordered table: name, variants, code path, status (`drawn` / `in code only`) |
| Draw a component | The component itself is a frame with `reusable: true`, named `<Component>/<Variant>` (pen.dev has no variant property). Next to it, a `Guide · <Component>` frame: a legend (its guideline text), examples as instances (`{type: "ref", ref: <component id>}`), and a states matrix; "proposed" states labelled as such |
| Read guide values (export) | `GetVariables()` for token values; `Get(id, {resolveVariables: true})` and the visitor's `ctx.bounds` on component frames for sizes and colours; never `TakeScreenshot` for values. A variable maps to the CSS custom property of the same name (`$--color-accent` → `var(--color-accent)`), which is why the names stay the code's |
| Look at it | `TakeScreenshot([<frame id>])` at the end of the `execute` that finishes a section |
| Finish | Set `placeholder: true` on each new frame while you build it and `Update(<frame>, {placeholder: false})` as soon as it's done. At the end, call `save` if your pen.dev has it, or ask the person to save (Cmd/Ctrl+S): pen.dev writes the `.pen` file only on save |

Notes:
- `execute` errors roll the whole call back. Fix a failed call with its `edits` and `editId`; never resend the snippet.
- Keep an id for later calls as a global without `const` or `let` (`indexId = Insert(…)`); each `execute` has its own scope.
- Every text needs a `fill`, or it's invisible. Wrapping text needs `textGrowth: "fixed-width"` with `width: "fill_container"`.
- pen.dev isn't CSS: no percentages, `margin`, or padding on text. The code's values still map one to one: sizes in px, `lineHeight` as a ratio of the font size, `cornerRadius`, `gap`, `padding`.
- Fonts: all Google Fonts are available. If the code's font isn't one, use the closest one and note it in the legend.
- Components can't be shared across `.pen` files; copy one over if another file needs it.
- pen.dev's skill files change with the app. When this adapter and `read_skill` disagree, `read_skill` wins.
- Read and change a `.pen` file only through the MCP tools, never by opening the file.
