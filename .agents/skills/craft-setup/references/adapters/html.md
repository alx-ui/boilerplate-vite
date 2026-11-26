# Adapter: plain HTML/CSS (and the fallback for any tool without an adapter)

| Skill verb | In HTML |
|---|---|
| Read what exists | README and docs, CSS custom properties, component CSS, any guide pages, brand folders |
| Write the brief | `DESIGN.md` at the project root (Markdown, every tool) |
| References board (optional) | `references.html`: one block per reference with its image or link and two lists, **Take** and **Avoid** |
| Look at it | Render with one plain command, writing the image inside the working folder, e.g. `"<chrome>" --headless=new --screenshot=references.png --window-size=1280,900 file://$PWD/references.html` (one plain command, image in the working folder) |

For tools without their own adapter, follow these verbs and tell the person which ones you mapped by hand.
