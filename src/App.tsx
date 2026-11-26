import type { CSSProperties } from 'react';

const stackItems = [
  {
    name: 'Vite',
    version: '8.4',
    detail: 'Rolldown bundler, instant HMR & native tsconfigPaths.',
    accent: '#41d1ff',
  },
  {
    name: 'React',
    version: '19.3',
    detail: 'React 19 + React Router v7 ready for client apps.',
    accent: '#9499ff',
  },
  {
    name: 'TypeScript',
    version: '6.0',
    detail: 'Strict compiler config with @/* path aliases.',
    accent: '#ffdd35',
  },
  {
    name: 'Tailwind CSS',
    version: '4.3',
    detail: 'CSS-first tokens compiled with @tailwindcss/vite.',
    accent: '#bd34fe',
  },
];

const commands = [
  { cmd: 'yarn dev', desc: 'Start Vite dev server with instant HMR' },
  { cmd: 'yarn validate', desc: 'Run type-check, ESLint 10 & Prettier 3' },
  { cmd: 'yarn build', desc: 'Type-check & build production bundle' },
  { cmd: 'yarn commit', desc: 'Guided Conventional Commit via Commitizen' },
];

const agentFiles = [
  { file: 'AGENTS.md', role: 'Single source of truth' },
  { file: 'CLAUDE.md', role: 'Claude Code entrypoint' },
  { file: '.cursor/rules/', role: 'Cursor project guardrails' },
  { file: '.agents/skills/', role: 'Portable Agent Skills' },
];

const qualityChecks = [
  'ESLint 10 Flat Config (@ialexanderbrito/eslint-config v3)',
  'Prettier 3 synced directly with ESLint rules',
  'Husky v9 + lint-staged + Commitlint pre-commit hooks',
  'Semantic Release & GitHub Actions CI ready',
];

const stagger = (index: number): CSSProperties =>
  ({ '--index': index }) as CSSProperties;

export default function App() {
  return (
    <div className="vite-hero-glow bg-vite-bg text-vite-text min-h-screen">
      <header className="border-vite-border bg-vite-bg/80 sticky top-0 z-20 border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <img src="/vite.svg" alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-tight">
              boilerplate-vite
            </span>
            <span className="bg-vite-brand-soft text-vite-brand-text rounded-full px-2 py-0.5 font-mono text-[11px] font-medium">
              v8.4
            </span>
          </div>

          <nav
            aria-label="Primary links"
            className="text-vite-text-muted flex items-center gap-6 text-sm"
          >
            <a href="#stack" className="hover:text-vite-text transition-colors">
              Stack
            </a>
            <a
              href="#commands"
              className="hover:text-vite-text transition-colors"
            >
              Commands
            </a>
            <a
              href="#agents"
              className="hover:text-vite-text transition-colors"
            >
              Agents
            </a>
            <a
              href="https://github.com/alx-ui/boilerplate-vite"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vite-text transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <section
          className="reveal mx-auto flex max-w-2xl flex-col items-center text-center"
          style={stagger(0)}
        >
          <div className="relative mb-8">
            <div
              aria-hidden="true"
              className="vite-chip-glow absolute -inset-4 rounded-full"
            />
            <div className="border-vite-border bg-vite-surface relative flex h-20 w-20 items-center justify-center rounded-2xl border shadow-lg">
              <img src="/vite.svg" alt="Vite logo" className="h-11 w-11" />
            </div>
          </div>

          <div className="border-vite-border bg-vite-surface text-vite-text-muted mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 font-mono text-xs">
            <span className="bg-vite-brand h-1.5 w-1.5 rounded-full" />
            <span>Vite 8 · React 19 · TypeScript 6 · Tailwind v4</span>
          </div>

          <h1 className="vite-title-gradient text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-6xl">
            Next Generation React Starter
          </h1>

          <p className="text-vite-text-muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            A fast, production-ready Vite 8 boilerplate pre-configured with
            React 19, React Router v7, Tailwind CSS v4, ESLint 10 Flat Config,
            Prettier 3, and universal AI agent rules.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/alx-ui/boilerplate-vite"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vite-brand hover:bg-vite-brand-hover inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-colors"
            >
              Get Started
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#commands"
              className="border-vite-border bg-vite-surface hover:border-vite-border-hover text-vite-text inline-flex items-center rounded-full border px-6 py-2.5 text-sm font-medium transition-colors"
            >
              Quick Commands
            </a>
          </div>

          <p className="text-vite-text-dim mt-6 font-mono text-xs">
            Start editing{' '}
            <code className="border-vite-border bg-vite-surface text-vite-text rounded border px-1.5 py-0.5">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </section>

        <section
          id="stack"
          aria-label="Core stack"
          className="reveal mt-20 grid scroll-mt-20 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          style={stagger(1)}
        >
          {stackItems.map((item) => (
            <article
              key={item.name}
              className="vite-card border-vite-border bg-vite-surface flex flex-col justify-between gap-4 rounded-xl border p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                  <h2 className="text-sm font-semibold tracking-tight">
                    {item.name}
                  </h2>
                </div>
                <span className="bg-vite-surface-soft text-vite-text-muted rounded-full px-2 py-0.5 font-mono text-[11px]">
                  v{item.version}
                </span>
              </div>
              <p className="text-vite-text-muted text-xs leading-relaxed">
                {item.detail}
              </p>
            </article>
          ))}
        </section>

        <section
          aria-label="Commands and AI agents"
          className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-12"
        >
          <article
            id="commands"
            className="vite-card reveal border-vite-border bg-vite-surface scroll-mt-20 overflow-hidden rounded-xl border md:col-span-7"
            style={stagger(2)}
          >
            <div className="border-vite-border flex items-center justify-between border-b px-5 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="bg-vite-border h-2.5 w-2.5 rounded-full" />
                <span className="bg-vite-border h-2.5 w-2.5 rounded-full" />
                <span className="bg-vite-border h-2.5 w-2.5 rounded-full" />
              </div>
              <span className="text-vite-text-dim font-mono text-[11px]">
                terminal — boilerplate-vite
              </span>
              <span className="w-10" aria-hidden="true" />
            </div>

            <div className="space-y-3.5 p-6 font-mono text-xs sm:text-sm">
              {commands.map((item) => (
                <div
                  key={item.cmd}
                  className="border-vite-border/80 flex flex-col justify-between gap-1 border-b pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-vite-brand-text select-none">$</span>
                    <code className="text-vite-text font-medium">
                      {item.cmd}
                    </code>
                  </div>
                  <span className="text-vite-text-muted font-sans text-xs">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article
            id="agents"
            className="vite-card reveal border-vite-border bg-vite-surface scroll-mt-20 rounded-xl border p-6 md:col-span-5"
            style={stagger(3)}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight">
                AI Agents Ready
              </h2>
              <span className="bg-vite-brand-soft text-vite-brand-text rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium">
                AAIF Spec
              </span>
            </div>

            <ul className="space-y-2.5">
              {agentFiles.map((entry) => (
                <li
                  key={entry.file}
                  className="border-vite-border bg-vite-surface-soft flex items-center justify-between gap-3 rounded-lg border px-3.5 py-2.5"
                >
                  <code className="text-vite-brand-text font-mono text-xs font-medium">
                    {entry.file}
                  </code>
                  <span className="text-vite-text-muted text-right text-xs">
                    {entry.role}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-vite-text-dim mt-4 text-xs">
              Compatible with Antigravity, Claude Code, Cursor, OpenCode, Codex,
              Grok, and GitHub Copilot.
            </p>
          </article>
        </section>

        <section
          aria-label="Linting and delivery"
          className="vite-card reveal border-vite-border bg-vite-surface mt-4 rounded-xl border p-6"
          style={stagger(4)}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold tracking-tight">
                Linting & Delivery
              </h2>
              <span className="bg-vite-surface-soft text-vite-text-muted rounded-full px-2.5 py-0.5 font-mono text-[11px]">
                Zero conflict
              </span>
            </div>
            <p className="text-vite-text-dim font-mono text-xs">
              eslint.config.mjs + prettier.config.mjs
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {qualityChecks.map((check) => (
              <li
                key={check}
                className="text-vite-text-muted flex items-start gap-2.5 text-sm leading-snug"
              >
                <svg
                  aria-hidden="true"
                  className="text-vite-brand-text mt-0.5 shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{check}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-vite-border border-t">
        <div className="text-vite-text-dim mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs sm:flex-row">
          <div className="flex items-center gap-2 font-mono">
            <img src="/vite.svg" alt="" className="h-3.5 w-3.5 opacity-80" />
            <span>boilerplate-vite · MIT License</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.npmjs.com/package/@ialexanderbrito/eslint-config"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vite-text transition-colors"
            >
              @ialexanderbrito/eslint-config
            </a>
            <a
              href="https://agents.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vite-text transition-colors"
            >
              AGENTS.md Spec
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
