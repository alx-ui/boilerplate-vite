# Adapter: Figma

Tool names vary by Figma MCP server; check your server's tool list.

| Skill verb | In Figma |
|---|---|
| Register tokens (import) | Variables in a collection named after the package, with the code's names (`color/accent` ↔ `--color-accent`; keep a one-to-one path) |
| Guide page | A page "Guide" with foundation frames, a component index frame and one frame per drawn component |
| Draw a component | A component set with variants matching the code's variant map; states as variant properties; "proposed" states labelled |
| Read guide values (export) | Variable values, plus node properties of the component variants |
| Look at it | Export or screenshot the frame |

This adapter has not been tested against a live Figma MCP yet. Reports are welcome.
