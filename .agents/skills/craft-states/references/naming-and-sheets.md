# Naming, boards and state sheets

## Full board or state sheet?

- **Full board:** the state changes the whole screen, or most of it. Examples: empty, couldn't load, offline, first time, a different role.
- **State sheet:** the state changes one part. Show only that part, several per sheet, each with a small caption. Examples: a row that failed, a button saving, a stale-data banner, a long name truncating.

## Naming

`<number> · <screen> · <state>`

- `3.1 · Orders · default`
- `3.1 · Orders · empty first time`
- `3.1 · Orders · offline`
- `3.1 · Orders · states (rows, buttons, banners)` (a sheet)

Number screens by section (3 = Orders section, 3.1 = the list, 3.2 = order detail). Keep a number when a screen changes, so references in tickets and chats stay valid.

## Order on the canvas

One row per section:

1. **A cover note** listing what the row holds and any decision behind it.
2. The **main state** of each screen.
3. Its **other states**, in catalogue order.
4. **State sheets** last.

## The "How to read this page" board

Put one at the top of every page with more than one row:

- what the page is (final screens, exploration, archive);
- the reading order;
- the key decisions, one line each with its reason;
- **open questions for the person**, so nothing waits silently inside a board.

## Previous versions

Keep a superseded screen only while it helps comparison, labelled `(previous)`. Remove it once the new one is approved.
