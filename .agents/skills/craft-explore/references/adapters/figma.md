# Adapter: Figma

How the skill's verbs map to Figma. The tool names vary by Figma MCP server and version, so check your server's tool list.

| Skill verb | In Figma |
|---|---|
| Read the design system | Variables (colour, number) and the component library; read a component's variants and properties |
| Read exact values | Read node properties and variables through the MCP; never measure a screenshot |
| Create a board | A top-level frame per board, named `Exploration · <topic> · A` etc. |
| Build a section | Auto-layout frames; bind fills, strokes, radius and spacing to variables |
| Reuse a piece | Instances of library components; component properties and variants for states |
| Make a state variant | Duplicate the main frame and change only what the state changes; for components, add a variant |
| Look at it | Export or screenshot the frame and look at it |
| Temporary exploration area | A separate page named "Exploration · <topic> (temporary)" |

This adapter has not been tested against a live Figma MCP yet. Reports are welcome.
