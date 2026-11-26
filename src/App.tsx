import { useState } from 'react';

type CliTab = 'dev' | 'validate' | 'build' | 'commit';

const cliCommands: Record<CliTab, { label: string; cmd: string }> = {
  dev: { label: 'dev', cmd: 'yarn dev' },
  validate: { label: 'validate', cmd: 'yarn validate' },
  build: { label: 'build', cmd: 'yarn build' },
  commit: { label: 'commit', cmd: 'yarn commit' },
};

const stackItems = [
  { name: 'Vite', version: '8.4', note: 'Rolldown · tsconfigPaths' },
  { name: 'React', version: '19.3', note: 'React Router v7 ready' },
  { name: 'TypeScript', version: '6.0', note: 'Strict mode · @/* alias' },
  { name: 'Tailwind CSS', version: '4.3', note: '@tailwindcss/vite' },
];

const agentEntries = [
  { file: 'AGENTS.md', desc: 'Single source of truth' },
  { file: 'CLAUDE.md', desc: 'Claude Code (@AGENTS.md)' },
  { file: '.cursor/rules/', desc: 'Cursor always-applied rules' },
  { file: '.github/copilot-instructions.md', desc: 'GitHub Copilot rules' },
  { file: '.agents/skills/', desc: 'Portable AAIF / SKILL.md' },
];

function ViteBracketMark({
  className = 'h-3.5 w-auto',
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 23 14"
      fill="none"
      className={className}
    >
      <path
        d="M20.7482 0H18.8887C21.641 3.93959 21.6571 10.0462 18.8887 14H20.7482C23.516 10.0462 23.4999 3.93959 20.7482 0Z"
        fill="currentColor"
      />
      <path
        d="M2.07027 3.05176e-05C-0.682028 3.93963 -0.698142 10.0463 2.07027 14H3.92985C1.16208 10.0463 1.1782 3.93963 3.92985 3.05176e-05H2.07027Z"
        fill="currentColor"
      />
      <path
        d="M12.0135 13.6771C11.815 13.9298 11.4089 13.7892 11.4089 13.4683V10.3853C11.4089 10.0114 11.106 9.70849 10.7321 9.70849H7.32818C7.05295 9.70849 6.89245 9.39716 7.05295 9.1735L9.29089 6.04026C9.61124 5.59228 9.29089 4.96963 8.73979 4.96963H4.62036C4.34513 4.96963 4.18463 4.65831 4.34512 4.43464L7.24632 0.372579C7.31013 0.283628 7.41262 0.230774 7.52155 0.230774H16.1671C16.4424 0.230774 16.6029 0.5421 16.4424 0.765765L14.2044 3.89901C13.8841 4.34698 14.2044 4.96963 14.7555 4.96963H18.1595C18.4418 4.96963 18.6004 5.29514 18.4257 5.51751L12.0142 13.6777L12.0135 13.6771Z"
        fill="#863BFF"
      />
    </svg>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<CliTab>('dev');
  const [copied, setCopied] = useState(false);

  const currentCommand = cliCommands[activeTab].cmd;

  const handleCopy = () => {
    void navigator.clipboard?.writeText(currentCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-primary min-h-screen text-white">
      <header className="border-nickel bg-primary/90 sticky top-0 z-20 border-b backdrop-blur-md">
        <div className="border-nickel mx-auto flex max-w-6xl items-center justify-between px-6 py-4 xl:border-x">
          <div className="flex items-center gap-6">
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-white"
            >
              <span>VITE</span>
              <ViteBracketMark className="h-3.5 w-auto text-white" />
            </a>

            <nav
              aria-label="Primary links"
              className="text-grey hidden items-center gap-6 text-sm sm:flex"
            >
              <a href="#stack" className="transition-colors hover:text-white">
                Stack
              </a>
              <a
                href="#features"
                className="transition-colors hover:text-white"
              >
                Features
              </a>
              <a href="#agents" className="transition-colors hover:text-white">
                AI Agents
              </a>
              <span className="border-nickel bg-slate text-vite rounded border px-2 py-0.5 font-mono text-xs">
                v8.4.0
              </span>
            </nav>
          </div>

          <a
            href="https://github.com/alx-ui/boilerplate-vite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
          >
            <svg
              aria-hidden="true"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </header>

      <main id="top" className="border-nickel mx-auto max-w-6xl xl:border-x">
        {/* Hero Split */}
        <section className="border-nickel divide-nickel grid grid-cols-1 border-b md:grid-cols-2 md:divide-x">
          <div className="flex flex-col justify-between gap-14 p-8 sm:p-12">
            <div>
              <div className="text-grey mb-6 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
                <span>BOILERPLATE</span>
                <span className="font-semibold text-white">VITE</span>
                <ViteBracketMark className="h-3 w-auto text-white" />
              </div>

              <h1 className="text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-white sm:text-6xl">
                The Starter
                <br />
                for the Web
              </h1>

              <p className="text-grey mt-5 max-w-md text-base leading-relaxed sm:text-lg">
                Pre-configured with Vite 8, React 19, React Router v7, Tailwind
                CSS v4, ESLint 10 Flat Config, Prettier 3, and universal AI
                agent rules.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/alx-ui/boilerplate-vite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vite-btn-primary"
                >
                  Get Started
                </a>

                <a href="#features" className="vite-btn-secondary">
                  Explore Stack
                </a>
              </div>
            </div>

            {/* Bottom CLI snippet matching vite.dev */}
            <div className="border-nickel bg-midnight overflow-hidden rounded-lg border">
              <div className="border-nickel flex items-center justify-between border-b px-4">
                <div
                  role="tablist"
                  aria-label="Project scripts"
                  className="flex items-center gap-4"
                >
                  {(Object.keys(cliCommands) as CliTab[]).map((tab) => {
                    const active = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        role="tab"
                        type="button"
                        aria-selected={active}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer border-b-2 py-2.5 font-mono text-xs transition-colors ${
                          active
                            ? 'border-vite font-medium text-white'
                            : 'text-grey border-transparent hover:text-white'
                        }`}
                      >
                        {cliCommands[tab].label}
                      </button>
                    );
                  })}
                </div>
                <span className="text-grey font-mono text-[11px]">bash</span>
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3.5 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-vite select-none">$</span>
                  <code className="text-white">{currentCommand}</code>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="border-nickel text-grey shrink-0 cursor-pointer rounded border px-2 py-0.5 font-mono text-[11px] transition-colors hover:border-white hover:text-white"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* Right column: Isometric 3D Vite chip */}
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden p-10 md:min-h-[480px]">
            <div className="vite-iso-scene vite-iso-float">
              <div className="vite-iso-ambient" aria-hidden="true" />
              <div className="vite-iso-tile">
                <ViteBracketMark className="h-8 w-auto text-white drop-shadow-[0_0_12px_rgba(134,59,255,0.75)]" />
              </div>
            </div>

            <div className="text-grey absolute right-5 bottom-4 font-mono text-[11px]">
              Edit <code className="text-white">src/App.tsx</code> to start
            </div>
          </div>
        </section>

        {/* Core Stack bar matching vite.dev trusted-by strip */}
        <section
          id="stack"
          aria-label="Core stack"
          className="border-nickel divide-nickel grid scroll-mt-16 grid-cols-2 divide-x divide-y border-b lg:grid-cols-4 lg:divide-y-0"
        >
          {stackItems.map((item) => (
            <div key={item.name} className="px-6 py-5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-white">
                  {item.name}
                </span>
                <span className="text-vite font-mono text-xs">
                  v{item.version}
                </span>
              </div>
              <p className="text-grey mt-1 text-xs">{item.note}</p>
            </div>
          ))}
        </section>

        {/* Section Heading matching vite.dev "Redefining developer experience" */}
        <section
          id="features"
          className="border-nickel scroll-mt-16 border-b px-6 py-16 text-center sm:py-20"
        >
          <h2 className="text-3xl leading-tight font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Redefining starter
            <br />
            experience
          </h2>
          <p className="text-grey mx-auto mt-4 max-w-lg text-sm sm:text-base">
            Modern tooling, zero lint conflicts, and universal AI agent setup
            out of the box.
          </p>
        </section>

        {/* 2x2 Architectural Feature Grid matching vite.dev */}
        <section
          aria-label="Boilerplate features"
          className="border-nickel divide-nickel grid grid-cols-1 divide-y border-b lg:grid-cols-2 lg:divide-x lg:divide-y-0"
        >
          {/* Card 1: Instant Server Start */}
          <article className="border-nickel flex flex-col justify-between border-b lg:border-b-0">
            <div className="p-8 sm:p-10">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Instant Server Start
              </h3>
              <p className="text-grey mt-2 max-w-md text-sm leading-relaxed">
                Native ESM dev server powered by Vite 8 with Rolldown and
                built-in <code className="text-white">tsconfigPaths</code>{' '}
                resolution.
              </p>
            </div>

            <div className="vite-streak-panel px-6 pt-8 sm:px-10 sm:pt-10">
              <div className="border-nickel bg-midnight mx-auto max-w-md rounded-t-lg border border-b-0 p-5 font-mono text-xs shadow-2xl">
                <div className="border-nickel bg-slate mb-4 inline-flex items-center gap-2 rounded border px-3 py-1.5 text-[11px]">
                  <span className="text-vite font-semibold">VITE v8.4.0</span>
                  <span className="text-grey">ready in</span>
                  <span className="font-semibold text-white">158 ms</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <p>
                    <span className="text-zest">➜</span>{' '}
                    <span className="text-white">Local:</span>{' '}
                    <span className="text-aqua">http://localhost:5173/</span>
                  </p>
                  <p className="text-grey">
                    <span className="text-grey">➜</span> Network: use{' '}
                    <span className="text-white">--host</span> to expose
                  </p>
                  <p className="text-grey">
                    <span className="text-grey">➜</span> press{' '}
                    <span className="text-white">h + enter</span> to show help
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: ESLint 10 & Prettier 3 */}
          <article className="flex flex-col justify-between">
            <div className="p-8 sm:p-10">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                ESLint 10 & Prettier 3 Synced
              </h3>
              <p className="text-grey mt-2 max-w-md text-sm leading-relaxed">
                Zero rule conflicts via{' '}
                <code className="text-white">
                  @ialexanderbrito/eslint-config
                </code>{' '}
                v3, enforced automatically by Husky v9 and lint-staged.
              </p>
            </div>

            <div className="px-6 pt-2 sm:px-10">
              <div className="mb-3 flex justify-end">
                <span className="border-electric-bright bg-midnight text-vite rounded-md border px-3 py-1 font-mono text-xs shadow-[0_0_16px_rgba(134,59,255,0.3)]">
                  eslint.config.mjs
                </span>
              </div>
              <pre className="border-nickel bg-midnight overflow-x-auto rounded-t-lg border border-b-0 p-5 font-mono text-xs leading-relaxed">
                <code>
                  <span className="text-vite">import</span>{' '}
                  <span className="text-white">alxConfig</span>{' '}
                  <span className="text-vite">from</span>{' '}
                  <span className="text-aqua">
                    &apos;@ialexanderbrito/eslint-config/react&apos;
                  </span>
                  ;{'\n\n'}
                  <span className="text-vite">export default</span> [{'\n'}
                  {'  '}...<span className="text-white">alxConfig</span>,{'\n'}
                  {'  '}
                  {'{ '}
                  <span className="text-grey">ignores:</span> [
                  <span className="text-aqua">&apos;.agents/**&apos;</span>,{' '}
                  <span className="text-aqua">&apos;dist/**&apos;</span>]{' }'}{' '}
                  {'\n'}
                  ];
                </code>
              </pre>
            </div>
          </article>
        </section>

        {/* Second row of 2x2 grid */}
        <section
          aria-label="Agents and build"
          className="border-nickel divide-nickel grid grid-cols-1 divide-y border-b lg:grid-cols-2 lg:divide-x lg:divide-y-0"
        >
          {/* Card 3: Universal AI Agents */}
          <article
            id="agents"
            className="border-nickel flex scroll-mt-16 flex-col justify-between border-b p-8 sm:p-10 lg:border-b-0"
          >
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Universal AI Agents Ready
              </h3>
              <p className="text-grey mt-2 max-w-md text-sm leading-relaxed">
                Open <code className="text-white">AGENTS.md</code> +{' '}
                <code className="text-white">.agents/skills/</code> setup ready
                for Antigravity, Claude Code, Cursor, OpenCode, Codex, Grok, and
                GitHub Copilot.
              </p>
            </div>

            <ul className="mt-8 space-y-2">
              {agentEntries.map((entry) => (
                <li
                  key={entry.file}
                  className="border-nickel bg-midnight flex items-center justify-between gap-3 rounded-md border px-3.5 py-2.5 text-xs"
                >
                  <code className="text-vite font-mono font-medium">
                    {entry.file}
                  </code>
                  <span className="text-grey text-right">{entry.desc}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Card 4: Optimized Build */}
          <article className="flex flex-col justify-between">
            <div className="p-8 sm:p-10">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Optimized Production Build
              </h3>
              <p className="text-grey mt-2 max-w-md text-sm leading-relaxed">
                Strict TypeScript 6 verification paired with Rolldown bundling,
                GitHub Actions CI, Commitlint, and Semantic Release.
              </p>
            </div>

            <div className="vite-streak-panel px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8">
              <div className="border-nickel bg-midnight mx-auto max-w-md rounded-lg border p-5 font-mono text-xs shadow-2xl">
                <p className="text-white">$ yarn build</p>
                <p className="mt-1">
                  <span className="text-vite">vite v8.4.0</span>{' '}
                  <span className="text-aqua">building for production...</span>
                </p>
                <p className="text-zest mt-1">✓ 16 modules transformed.</p>
                <div className="text-grey mt-2 space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span>
                      dist/<span className="text-zest">index.html</span>
                    </span>
                    <span className="text-white">1.03 kB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      dist/assets/
                      <span className="text-vite">index.css</span>
                    </span>
                    <span className="text-white">38.4 kB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      dist/assets/
                      <span className="text-aqua">index.js</span>
                    </span>
                    <span className="text-white">229.6 kB</span>
                  </div>
                </div>
                <p className="text-zest mt-2">✓ built in 349ms</p>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="border-nickel mx-auto max-w-6xl px-6 py-8 xl:border-x">
        <div className="text-grey flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <div className="flex items-center gap-2 font-mono">
            <ViteBracketMark className="h-3 w-auto text-white" />
            <span>boilerplate-vite · MIT License</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.npmjs.com/package/@ialexanderbrito/eslint-config"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              @ialexanderbrito/eslint-config
            </a>
            <a
              href="https://agents.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              AGENTS.md Spec
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
