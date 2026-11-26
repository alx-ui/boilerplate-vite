# Adapter: plain HTML/CSS (and the fallback for any tool without an adapter)

| Skill verb | In HTML |
|---|---|
| Register tokens (import) | `guide/tokens.css` = the code's tokens as CSS custom properties under the naming rule (copied from a CSS source, or written out from Tailwind, JSON or theme objects). Changes made "in the guide" are edits to `guide/tokens.css`; never `@import` the code's file, or the guide can't hold a change of its own |
| Guide page | `guide/index.html` (component index and links), `guide/foundations.html`, `guide/<component>.html` |
| Draw a component | Its page: a legend from the guidelines, examples, and a states matrix built with the code's own styles; "proposed" states labelled |
| Read guide values (export) | `guide/tokens.css` and the component pages' CSS, by name |
| Look at it | Render with one plain command, writing the image inside the working folder, e.g. `"<chrome>" --headless=new --screenshot=guide-1280.png --window-size=1280,900 file://$PWD/guide/index.html` |

For tools without their own adapter, follow these verbs and tell the person which ones you mapped by hand.
