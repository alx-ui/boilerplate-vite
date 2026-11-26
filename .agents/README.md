# `.agents` — Universal AI Agent Setup

This directory follows the open **Agent Skills** standard (`agentskills.io`) so skills and workflows work seamlessly across multiple AI coding tools without vendor lock-in.

## Compatibility Matrix

| Tool | Project Instructions | Skills Directory |
| --- | --- | --- |
| **Antigravity** | `AGENTS.md` | `.agents/skills/` |
| **OpenCode** | `AGENTS.md` | `.agents/skills/` |
| **Cursor** | `AGENTS.md` + `.cursor/rules/project.mdc` | `.agents/skills/` |
| **Claude Code** | `CLAUDE.md` (imports `@AGENTS.md`) | `.agents/skills/` |
| **Codex / Grok / Windsurf / Zed** | `AGENTS.md` | `.agents/skills/` |
| **GitHub Copilot** | `.github/copilot-instructions.md` | `AGENTS.md` |

## Adding a Skill

Create a folder under `.agents/skills/<skill-name>/` containing a `SKILL.md` file with YAML frontmatter:

```markdown
---
name: my-skill
description: When and how an agent should use this skill.
---

# Instructions

Step-by-step guidance for the agent...
```

## Notes

- Keep `AGENTS.md` at the repo root as the **single source of truth** for stack, scripts, and coding conventions.
- `.agents/` is excluded from ESLint (`eslint.config.mjs`) and Prettier (`.prettierignore`) so skill assets never interfere with project linting or formatting.
