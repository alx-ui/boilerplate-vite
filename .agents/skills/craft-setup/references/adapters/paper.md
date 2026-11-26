# Adapter: Paper (Paper MCP)

Setup writes `DESIGN.md` as a file in the repo. Paper is only used for the optional references board and, through `craft-system` (create) or `craft-sync` (import), the foundations.

| Skill verb | In Paper |
|---|---|
| Start | `get_guide({topic: "paper-mcp-instructions"})` once per session, then `get_basic_info` |
| Read what exists | `get_basic_info` (pages, fonts, tokens), `get_tokens`, `get_tree_summary` on any existing guide page; `get_jsx` for exact values |
| References board (optional) | A page "References"; one artboard per reference named `Reference · <name>`, with its image (if the person shared one) and two short lists, **Take** and **Avoid**, written with `write_html` |
| Look at it | `get_screenshot` after building the board |
| Finish | `finish_working_on_nodes` |
