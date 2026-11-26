# Audit checklist

Check every item, then write the report. **Change no file during an audit.**

## What to look for

1. **Loose values:** hex colours, sizes, radii and spacing written directly in screens or code instead of tokens.
2. **Near-duplicates:** values within a hair of an existing token (`#f3f3f6` vs `#f2f2f5`, 22px padding vs a 16/24 scale). These are almost always the token, written by hand.
3. **Missing roles:** a value the screens need that has no token (status colours, a pressed colour, a focus colour).
4. **Missing states:** interactive pieces without a full states matrix (focus and disabled are the usual gaps).
5. **Drift:** the same piece looking different on different screens (padding, radius, weight, icon set).
6. **One-offs:** pieces used once that could be a variant of an existing one.
7. **Contrast:** text on its ground. Small text needs about 4.5:1; check text on tinted and grey grounds especially.
8. **Rule breaks:** mixed icon sets, loose colours, interactive pieces without a states matrix.
9. **Differences from the defaults:** two primary actions on one screen, shadows on non-floating things, hover that fills bordered pieces. If the project's guide chose these on purpose, list them as differences, not as breaks.

## Severity

1. **High:** breaks use or accessibility (contrast failures, missing focus, broken states).
2. **Medium:** visible inconsistency people notice (drift, near-duplicates in visible places).
3. **Low:** hygiene (unused tokens, a one-off that works).

## Report format

```
## Audit · <guide or screens audited>

### High
1. <finding> — <where: file/board and line or element> — why it matters — proposed fix

### Medium
…

### Low
…

### Questions for you
- <decisions the audit can't make alone>

Nothing has been changed. Tell me which fixes to apply.
```
