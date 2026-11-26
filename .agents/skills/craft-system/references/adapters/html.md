# Adapter: plain HTML/CSS (and the fallback for any tool without an adapter)

| Skill verb | In HTML |
|---|---|
| Read the design system | The project's CSS custom properties, component CSS and guide pages |
| Read exact values | From the CSS source, never from a screenshot |
| Create a board | One HTML file per guide section, named after it: `guide-foundations.html`, `guide-buttons.html` |
| Build a section | Semantic HTML; every colour, size and radius through `var(--token)` from one shared `tokens.css` |
| Reuse a piece | Shared CSS classes in one stylesheet; copy the markup of the existing piece |
| States matrix | A table in the component's page: variants as rows, states as columns, each cell a live example |
| Look at it | Render with a headless browser and look at the image, at a desktop and a phone width. Run it as **one plain command** (no `cd`, no `&&`) and **write the image inside the working folder**, which is what permission rules usually allow. For example: `"<chrome>" --headless=new --screenshot=board-1280.png --window-size=1280,900 file://$PWD/board.html`, or Playwright. Headless Chrome can't lay out narrower than 500px, so a 390px capture is cropped: check phone widths with Playwright's viewport (or a device emulator), or say the phone width wasn't checked. If you can't render, say which boards weren't checked |
| Component index | `index.html` with the table piece / where its states are drawn / code location / status, linking each guide page |
| Temporary exploration area | A folder `explorations/<topic>/` with its own `index.html`, deleted after the pick |

For tools without their own adapter (other canvases, screenshot-only workflows), follow these verbs and tell the person which ones you mapped by hand.
