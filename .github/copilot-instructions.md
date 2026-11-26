# GitHub Copilot Instructions

Follow [`AGENTS.md`](../AGENTS.md) at the repository root as the single source of truth for this project.

## Summary

- **Stack:** Vite 8, React 19, React Router v7, TypeScript 6, Tailwind CSS v4, ESLint 10 (Flat Config), Prettier 3.
- **Lint & Format:** Both ESLint and Prettier are powered by `@ialexanderbrito/eslint-config` (`eslint.config.mjs` and `prettier.config.mjs`). Follow import ordering and 80-char single-quote Prettier formatting.
- **Skills:** Domain skills are located in `.agents/skills/<name>/SKILL.md`.
- **Checks:** Run `yarn validate` and `yarn build` before opening or updating a pull request.
- **Commits:** Use Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `ci:`).
