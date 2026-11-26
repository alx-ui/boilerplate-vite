# Critique rules

**Calibration:** each rule is a default. When the project's design system says otherwise, the system wins: note the difference, don't flag it. A fix that changes a shared component goes through the craft-system process, so every screen that uses it changes together.

## Hierarchy and restraint

### One thing wins the first glance
**Check:** what do you see first, and is it the most important thing? **Why:** if everything shouts, nothing is heard. **Typical fix:** calm the secondary elements (lighter weight, muted colour, smaller), rather than enlarging the primary one.

### At most one primary action
**Check:** count the buttons styled as primary. **Why:** two primaries means the screen didn't decide what's next. **Typical fix:** keep the real next step primary and make the others secondary or text buttons; merge duplicates ("Save" and "Save changes").

### When in doubt, remove
**Check:** for each element, would anyone miss it? Is there more than one idea per block? **Why:** each extra element taxes every glance. **Typical fix:** delete it, merge two blocks, or move rare things behind "More".

### Shorter text
**Check:** sentences that can lose half their words; labels that explain the obvious. **Why:** people scan. **Typical fix:** one short sentence per block; cut the adjectives.

## Space

### No dead or oversized areas
**Check:** containers much bigger than their content; fixed heights around little content. **Why:** empty boxes look broken or unfinished. **Typical fix:** size the box to its content, or fill it on purpose.

### No cramped groups
**Check:** related items with no breathing room; unrelated items closer than related ones. **Why:** spacing is how people see grouping. **Typical fix:** tighter inside a group, wider between groups.

### Repeated rows align
**Check:** draw vertical lines through icons, titles and trailing actions across rows. **Why:** ragged columns read as messy data. **Typical fix:** fixed-width slots for icons and actions, even when a slot is empty.

## Stability (no layout shift)

### Loading keeps the size
**Check:** does a button, field or card change width or height while it loads? **Why:** things jump under the cursor and people click the wrong thing. **Typical fix:** keep the label in the layout but invisible, with a spinner centred on top.

### Label swaps keep the size
**Check:** Copy → Copied, Follow → Following. **Why:** same as above. **Typical fix:** size the element to its longest label.

### Selection and toggles keep the size
**Check:** does selecting make text bold, add a border that wasn't there, or insert an icon? **Why:** neighbours move. **Typical fix:** keep the weight; use a background or a border that is always present (transparent at rest).

### Content swaps keep the height
**Check:** tabs, steps, success messages replacing forms. **Why:** the page below jumps. **Typical fix:** reserve the height, or swap inside a fixed-height container.

## Interaction feel

### Hover is quieter than selected
**Check:** compare hover and selected side by side. **Why:** when they look alike, hovering looks like a second selection. **Typical fix:** bordered pieces darken only the border on hover; borderless ones get a softer tint than selected.

### Pressed is instant, hover-out is soft
**Check:** animated presses, slow hover-in. **Why:** feedback must feel immediate. **Typical fix:** no transition on press; hover-in fast (~150 ms) and hover-out a little slower (~250 ms).

### Focus only from the keyboard
**Check:** a focus ring after a mouse click; no ring at all with Tab. **Why:** a ring after a click looks like a bug, and no ring at all blocks keyboard users. **Typical fix:** `:focus-visible`-style rings, the same corner radius as the piece.

### Cursor
**Check:** a hand cursor on buttons and rows; a text cursor on menu items. **Why:** native apps use the arrow; the hand means "link". **Typical fix:** default arrow, hand only on links. (Web conventions may differ: follow the project.)

### Native controls where they exist
**Check:** custom context menus, pickers or scrollbars imitating the OS. **Why:** native ones work everywhere, with accessibility and shortcuts built in. **Typical fix:** use the platform's own.

## Contrast and colour

### Small text is readable on its ground
**Check:** text and status dots on tinted, grey or coloured grounds. **Why:** small text needs about 4.5:1, and tinted grounds eat contrast. **Typical fix:** darker text, or move the text onto the plain surface.

### The active item stands out from its container
**Check:** selected tabs or segments on a grey track. **Why:** if active and track are close, nobody knows what's selected. **Typical fix:** a darker track or a white active fill with a border.

### One strong colour moment
**Check:** count the saturated colours on the screen. **Why:** five accents compete; one draws the eye where you want it. **Typical fix:** neutralise the decorative ones; keep colour for status and the primary action.

## Text

### No orphans
**Check:** a one-word last line in a title or a short paragraph. **Why:** it looks accidental and breaks the shape. **Typical fix:** balanced wrapping (`text-wrap: balance` for titles, `pretty` for paragraphs) or a max width.

### Titles capped in lines
**Check:** a headline wrapping to 4+ lines on a phone. **Why:** it pushes the content off the first screen. **Typical fix:** a smaller size at narrow widths, so it fits in at most 3 lines.

### Row titles on one line
**Check:** list titles wrapping and breaking row heights. **Why:** rows of different heights are hard to scan. **Typical fix:** one line with an ellipsis; the detail goes on line 2.

### Plain words, and what happens next
**Check:** jargon; buttons like "Submit" or "OK"; errors without a next step. **Why:** people act on the words. **Typical fix:** a verb plus an object ("Book 9:30"), and errors that say what to do and who does it.

## Consistency

### The same piece looks the same everywhere
**Check:** the same card, button or row with different padding, radius or weight on different screens. **Why:** inconsistency reads as low quality and confuses meaning. **Typical fix:** use the system's piece; if a variation is real, make it a named variant.

### Banners only for whole-app problems
**Check:** a top banner about one item. **Why:** it shouts at everyone about one row. **Typical fix:** move the message inline, onto that item.

### Toasts match the system
**Check:** toasts with their own colours, sizes or positions. **Why:** a toast is the system's voice; a one-off one looks like an error. **Typical fix:** the system's toast piece, in its usual position.

### Actions in lists are real buttons
**Check:** bare text acting as an action inside rows and tables. **Why:** nobody can tell it's clickable. **Typical fix:** small secondary buttons.

## Motion

### Only where it helps
**Check:** animation on things that don't change meaning. **Why:** motion is attention; spend it on arrivals and changes. **Typical fix:** remove decorative motion.

### Opening is slower than closing
**Check:** menus and dialogs that close as slowly as they open. **Why:** people are waiting when they dismiss. **Typical fix:** close in roughly two thirds of the opening time.

### Respects reduced motion
**Check:** behaviour with the OS "reduce motion" setting. **Why:** for some people motion causes nausea. **Typical fix:** turn animations off or down under that setting.
