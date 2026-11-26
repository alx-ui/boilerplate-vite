# Adapter: pen.dev (pen.dev MCP)

Setup writes `DESIGN.md` as a file in the repo. pen.dev is only used for the optional references board and, through `craft-system` (create) or `craft-sync` (import), the foundations. Almost everything happens inside one tool, `execute`, which runs a short JavaScript snippet against the open `.pen` document.

Needs the pen.dev app (or its editor extension) running with the document open, and its MCP server, `pencil`, turned on for your agent in pen.dev's Settings › MCP.

| Skill verb | In pen.dev |
|---|---|
| Start | Once per session: `read_skill()`, then `read_skill({path: "pen-schema.md"})` and `read_skill({path: "execute.md"})`. `get_app_state` shows the open document and the selection |
| Read what exists | In one `execute`: `Print(GetVariables())` for tokens; list the top-level frames by name with a `Get` visitor (`ctx.skipChildren()` keeps it short); `Get(n => n.reusable && Print(n.id, n.name))` for components; `Get(id, {resolveVariables: true})` for exact values |
| References board (optional) | A top-level frame `References` (at `FindEmptySpace`), holding one frame per reference named `Reference · <name>`: its image (if the person shared one) and two short lists, **Take** and **Avoid**. An image is an image fill, `fill: {type: "image", url: "./<file>"}`, with the file copied next to the `.pen` file; never make up an image URL |
| Look at it | `TakeScreenshot([<board id>])` after building the board |
| Finish | `Update(<board>, {placeholder: false})` if you set it while building. At the end, call `save` if your pen.dev has it, or ask the person to save (Cmd/Ctrl+S): pen.dev writes the `.pen` file only on save |

Notes:
- Every text needs a `fill`, or it's invisible. Give every node a `name`.
- Don't use `get_style`'s ready-made styles to decide the look: the brief comes from the interview.
- pen.dev's skill files change with the app. When this adapter and `read_skill` disagree, `read_skill` wins.
- Read and change a `.pen` file only through the MCP tools, never by opening the file.
