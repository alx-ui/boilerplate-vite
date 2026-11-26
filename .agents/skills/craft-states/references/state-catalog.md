# State catalogue

Walk every group. For each item, write **applies** (and what the screen shows), **doesn't apply** (and why), or **open question**. The examples use an invented bakery's orders screen.

## Data

| State | When it applies | Example |
|---|---|---|
| Default | Always | Today's 14 orders, mixed statuses |
| Empty · first time | The person has never had data here | "No orders yet. Share your order link" + Copy link |
| Empty · filtered to nothing | A search or filter hides everything | "No orders match 'croissant'" + Clear filter |
| One item | Lists, tables, grids | A single order: does the layout still look intentional? |
| Few | Lists | 3 orders, so there's space left below |
| Many / overflow | Any list that can grow | 60 orders: scrolling, a fixed header, "Show all (60)" |
| Very long text | Names, titles, notes, numbers | "Maria Fernanda de Albuquerque Santos", R$ 1.234.567,89, a 400-character note |
| Missing optional fields | Anything with optional data | An order with no phone and no note |

## System

| State | When it applies | Example |
|---|---|---|
| First load | Data comes from somewhere | Skeleton in the final layout, so nothing jumps |
| Refresh | Data updates while visible | The list stays and a small "Updating…" appears; no full skeleton |
| Couldn't load | Any fetch | "Couldn't load today's orders." + Try again |
| Offline | Online apps | Keep the last data, "Offline since 10:31", queue actions |
| Partly failed | Several sources or items | 13 orders loaded, 1 failed inline with Retry |
| Slow | Operations that can take seconds | After ~2 s: "Still working…", never a frozen screen |
| Changed while viewing | Shared or live data | "This order changed. Review again." |
| Already done by someone else | More than one person acts on the same thing | "Ana already marked this ready at 9:12" |
| Expired | Links, approvals, sessions, offers | "This link expired. Ask for a new one." |

## Activity

| State | When it applies | Example |
|---|---|---|
| In progress | Long or background work | A step list: done ✓, now (spinner), next ○ |
| Waiting on someone else | Approvals, replies | "Waiting for the customer" |
| Finished just now | After an action | "Marked ready" with Undo · 8s |
| Undo window | Reversible actions | The toast with a countdown; what happens when the undo fails |
| Paused (by choice) vs failed | Anything that can stop | "Paused" (grey, Resume) vs "Couldn't print the label" (red, Try again) |

## People

| State | When it applies | Example |
|---|---|---|
| Role / permission | More than one kind of user | A cashier sees orders but not totals |
| First time vs returning | Onboarding, empty accounts | A first-day checklist vs the daily view |
| Pending approval | Anything a person must confirm | "Waiting for the owner's OK" |

## Interaction (per interactive piece)

Normal · hover · pressed · focus (keyboard only) · disabled · loading · selected.

These come from the design system's states matrix. Don't redraw them on every screen. If the project has no states matrix, draw the interaction states that change layout or content on a state sheet, and suggest the craft-system process to make the matrix. Only draw an interaction state on a screen when it changes the layout or content: a loading button that swaps its label, or a selected row that opens details.
