# Adapter: plain HTML/CSS (and the fallback for any tool without an adapter)

| Skill verb | In HTML |
|---|---|
| Read the design system | The project's CSS custom properties, component CSS and guide pages |
| Read exact values | From the CSS source, never from a screenshot |
| Write the report | `review.md` next to the screen (review mode); in refine mode, edit the screen file and list the fixes in the reply |
| Build a section | Semantic HTML; every colour, size and radius through `var(--token)` from one shared `tokens.css` |
| Reuse a piece | Shared CSS classes in one stylesheet; copy the markup of the existing piece |
| State sheet | One file that shows only the changed parts, each with a caption |
| Look at it | Render with a headless browser and look at the image, at a desktop and a phone width. Run it as **one plain command** (no `cd`, no `&&`) and **write the image inside the working folder**, which is what permission rules usually allow. For example: `"<chrome>" --headless=new --screenshot=board-1280.png --window-size=1280,900 file://$PWD/board.html`, or Playwright. Headless Chrome can't lay out narrower than 500px, so a 390px capture is cropped: check phone widths with Playwright's viewport (or a device emulator), or say the phone width wasn't checked. If you can't render, say which boards weren't checked |
| Re-check after fixes | Render again at the same sizes and compare with the first screenshots |
| Temporary exploration area | A folder `explorations/<topic>/` with its own `index.html`, deleted after the pick |

For tools without their own adapter (other canvases, screenshot-only workflows), follow these verbs and tell the person which ones you mapped by hand.
