# Divergence axes

An option is a direction when it changes one of these axes. Pick a **main axis** for each option; no two options share a main-axis value. The examples use an invented project tracker's settings page.

| Axis | What changes | Example values |
|---|---|---|
| **Structure / placement** | Where things live and how they're grouped | one long page · sub-navigation with one section at a time · settings inside each object ("project settings" on the project) |
| **Interaction model** | How people act | an explicit Save · autosave with an "All changes saved" line · each section edits in place with its own Save · a conversation ("tell me what to change") |
| **Density** | How much shows at once | a dense table of every option · comfortable cards · progressive disclosure (common options visible, the rest under "More") |
| **Emphasis** | What the eye meets first | the most-changed setting at the top · a summary of the current setup with "Change" links · status-first (what's misconfigured) |
| **Removal** | What disappears | merge "daily" and "weekly digest" into one choice · drop import/export from this page · smart defaults instead of options |

## Not axes

Colour scheme, light/dark theme, typeface, corner radius, illustration style. These are brand decisions that belong to the design system. Change them only when the person explicitly asks for visual directions ("three visual styles"), and then say that this is the axis.

## The check before drawing

Write the set as a table and check it:

| Option | Main axis | Value | Trade-off |
|---|---|---|---|
| A | Interaction | Autosave per field | Fast; no undo-all |
| B | Structure | Sub-navigation, one section at a time | Scales to more settings; one more click |
| C (bold) | Removal | 3 smart defaults + "Advanced" | Simplest; hides power-user options |

If two rows share an axis *and* a value, replace one.
