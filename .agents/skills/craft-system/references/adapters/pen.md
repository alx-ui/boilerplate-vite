# Adapter: pen.dev (pen.dev MCP)

How the skill's verbs map to pen.dev's MCP server. Almost everything happens inside one tool, `execute`, which runs a short JavaScript snippet against the open `.pen` document.

Needs the pen.dev app (or its editor extension) running with the document open, and its MCP server, `pencil`, turned on for your agent in pen.dev's Settings › MCP.

| Skill verb | In pen.dev |
|---|---|
| Start | Once per session: `read_skill()`, then `read_skill({path: "pen-schema.md"})` and `read_skill({path: "execute.md"})` (pen.dev marks both as required). `get_app_state` shows the open document and the selection |
| Register tokens | After the person approves the foundations: `Print(GetVariables())` first, then `SetVariables({name: {type, value}})`, which merges (never pass `replace: true`). Types are `color`, `number` and `string` (the file format also has `boolean`); light and dark values go in one variable as `[{value, theme: {mode: "light"}}, {value, theme: {mode: "dark"}}]`. Variables are document-wide, so registering them is part of that approval, not before it; then rebind the foundation boards to the `"$name"` references. Shadows, durations and easings can't be variables: write them on the foundations board as text, marked "not a pen.dev variable" |
| Read the design system | In one `execute`: `Print(GetVariables())` for tokens and themes; `Get(n => n.reusable && Print(n.id, n.name))` for components; find the guide frames by name (`Guide · …`) among the document's top-level frames; `Print(Get(id, {depth: 3}))` for a component's exact values |
| Read exact values | `Get(id, {resolveVariables: true})` for computed values, and the visitor's `ctx.bounds` for laid-out sizes. Never read sizes or colours from `TakeScreenshot` |
| Create a board | A top-level frame in `document`: `Insert(document, {type: "frame", name, x, y, width, layout: "vertical", clip: true, placeholder: true})`, at the spot `FindEmptySpace({width, height, padding: 80, nodeId: <previous board>})` returns. Named after what it shows (for example `Guide · Buttons`); guide boards and components sit above the screens, since pen.dev keeps components at the top of the canvas |
| Build a section | One `execute` per visual group. Every colour and size that has a token is a `"$token-name"` reference. Give every node a `name`, and every text a `fill` |
| Reuse a piece | A system component goes in as an instance: `Insert(parent, {type: "ref", ref: <component id>, descendants: {…}})`. Anything else: `Copy(id, parent, {…, descendants: {…}})`, with the overrides inside the `Copy` call. A `descendants` entry with a `type` replaces that child with a new node and a new id, so `<instance>/<child id>` stops working; find the new id with `Get(<instance>, {resolveInstances: true})` |
| Make a state variant of a board | `Copy(<main board>, document, {name, x, y, placeholder: true, descendants: {…}})` at `FindEmptySpace({…, nodeId: <main board>})`, changing only what the state changes |
| Look at it | End the `execute` that finishes a section with `TakeScreenshot([<section id>])`, the smallest node that shows it. For structure, prefer a visitor: `Get(board, (n, c) => c.problems && Print(n.name, c.problems))`, in a call after the one that changed the layout |
| Fix clipping | Give the board `height: "fit_content"` (it needs `layout`), then check `ctx.problems` again **in a new `execute`**: in the call that changed the layout it can report clipping that isn't there. Don't guess heights |
| Temporary exploration area | pen.dev has no pages: a top-level frame named `Exploration · <topic>` below the screens, with the options inside it. `Delete` works, but delete it only when the person says so |
| Finish | `Update(<board>, {placeholder: false})` on each board as soon as it's done, not at the end. `Get(n => n.placeholder && Print(n.name))` should list none of yours. At the end, call `save` if your pen.dev has it, or ask the person to save (Cmd/Ctrl+S): pen.dev writes the `.pen` file only on save |

Notes:
- Components are frames with `reusable: true`, named `<Component>/<Variant>` (`Button/Primary`). pen.dev has no variant property: a variant that changes structure is its own component; states that only change values (hover, pressed, disabled) are instances with overrides, laid out as the component's states matrix.
- `execute` errors roll the whole call back. Fix a failed call with its `edits` and `editId`; never resend the snippet. Fix returned warnings in the next call.
- Each `execute` has its own scope. Keep an id for later calls as a global without `const` or `let` (`heroId = Insert(…)`); store ids, never large `Get` results.
- pen.dev isn't CSS: no percentages, `margin`, `alignItems: "baseline"` or `"stretch"`, and no padding on text (wrap it in a frame). Size with `fill_container` and `fit_content`.
- Text: wrapping text needs `textGrowth: "fixed-width"` with `width: "fill_container"`; a label that sizes itself has no width at all. `lineHeight` is a ratio of the font size (1.4, not 20px).
- Text is invisible without `fill`; a text that seems missing is the first thing to check.
- All Google Fonts are available. If the brand font isn't one, use the closest one and say so.
- Icons: `icon` nodes from one library (`lucide`, `feather`, `phosphor` or a Material Symbols set), the same one everywhere.
- pen.dev text has no ellipsis or line limit. Where a rule asks for one line with an ellipsis, write the cut text yourself, ending in "…", at the length that fits, and note on the board that the code truncates. Never stretch the row to fit a wrapped title.
- Repeated rows: fixed-width slots (`width: <n>`) for icons and trailing actions, so columns line up; flex layout doesn't wrap, so a grid is a column of row frames.
- pen.dev is multiplayer: re-read a node before changing it, and never undo the person's edits.
- `get_style` offers ready-made visual styles. Use one only when the project has no design system and no `DESIGN.md` direction.
- Don't show node ids to the person; refer to boards by name.
- pen.dev's skill files change with the app. When this adapter and `read_skill` disagree, `read_skill` wins.
- Read and change a `.pen` file only through the MCP tools, never by opening the file.
