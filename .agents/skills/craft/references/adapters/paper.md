# Adapter: Paper (Paper MCP)

How the skill's verbs map to the Paper MCP tools.

| Skill verb | In Paper |
|---|---|
| Start | `get_guide({topic: "paper-mcp-instructions"})` once per session, then `get_basic_info` for pages, artboards and tokens |
| Read the design system | `get_tokens`; find the guide page in `get_basic_info.pages`; `get_tree_summary` on its artboards; `get_jsx` for a component's exact values |
| Read exact values | `get_jsx` / `get_computed_styles`. Never read sizes or colours from a screenshot |
| Create a board | `create_artboard` (one artboard per board), named `<n> · <page> · <state>`, one row per page on the canvas, in the order of the confirmed scope |
| Build a section | `write_html`, one visual group per call; use `var(--token)` for every colour and size that has a token |
| Reuse a piece | `duplicate_nodes`, or `<x-paper-clone node-id="…">` inside `write_html`, then `update_styles` / `set_text_content` |
| Make a state variant of a board | `duplicate_nodes` the main board, rename it, then change only what the state changes |
| Look at it | `get_screenshot` after each section (scale 2 only for small text) |
| Fix clipping | set the artboard's height to `fit-content` with `update_styles`; don't guess heights |
| Temporary exploration area | a separate page, or a clearly named row at the bottom; you can't delete pages, so empty it and rename it "Empty · can delete" |
| Finish | `finish_working_on_nodes` |

Notes:
- `get_font_family_info` before the first text you style in a session.
- Repeated rows: fixed-width slots (`width` + `flexShrink: 0`) for icons and trailing actions, so columns line up.
- Don't show node ids to the person; refer to boards by name.
