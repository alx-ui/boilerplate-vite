# Adapter: Paper (Paper MCP)

| Skill verb | In Paper |
|---|---|
| Start | `get_guide({topic: "paper-mcp-instructions"})` once per session, then `get_basic_info` (pages, tokens, fonts) |
| Register tokens (import) | `get_tokens` first. A name that already exists **with a different value is a conflict** for the inventory stop, never a silent `set_tokens`. Then `create_tokens` with the code's names (`--color-accent`, `--sand-200`); after the person settles a conflict, `set_tokens` for it. Paper names must match `--[A-Za-z0-9_-]+`. Types Paper can't hold (shadows, durations, easings) go on the foundations board as text, marked "not registered in Paper" |
| Guide page | `create_page` "Guide"; artboards `Guide · Foundations · Colour`, `Guide · Foundations · Type & scales`, `Guide · Component index`, `Guide · <Component>`; content with `write_html` in small groups, every value through `var(--token)` |
| Component index | One bordered table artboard: name, variants, code path, status (`drawn` / `in code only`) |
| Draw a component | One artboard per component: a legend (its guideline text), examples, and a states matrix; "proposed" states labelled as such |
| Read guide values (export) | `get_tokens` for token values; `get_computed_styles` / `get_jsx` on component boards for sizes and colours; never `get_screenshot` for values |
| Look at it | `get_screenshot` after each section |
| Finish | `finish_working_on_nodes` |

Fonts: `get_font_family_info` before the first text. If the code's font isn't available in Paper, use the closest available family and note it in the legend.
