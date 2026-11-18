# CLAUDE.md — Optional Claude Code Adapter

## Read first

- [AGENTS.md](./AGENTS.md): shared rules, do/don't, Git discipline.
- [docs/PROJECT_STATUS.md](./docs/PROJECT_STATUS.md): verified project state as of uploaded ZIP.
- [docs/ROADMAP_NEXT_PHASES.md](./docs/ROADMAP_NEXT_PHASES.md): pending phases and boundaries.
- [docs/STYLE_GUIDE.md](./docs/STYLE_GUIDE.md), [docs/ANIMATION_GUIDE.md](./docs/ANIMATION_GUIDE.md): visuals and timing.
- [docs/WORKFLOW.md](./docs/WORKFLOW.md), [docs/VIDEO_PRODUCTION_STEP_BY_STEP.md](./docs/VIDEO_PRODUCTION_STEP_BY_STEP.md): episode workflow.

## Remotion skills

Use installed rules under `.agents/skills/` when they are available to your agent. In the uploaded ZIP, `.claude/skills/` is empty; **do not assume symlinks** or copy/reinstall skills without approval. Ask to check compatibility if your agent cannot access `.agents/skills/`.

## Commands

```bash
npm run dev
npm run lint
npm run build
npx remotion compositions src/index.ts
```

Do not modify `src/Root.tsx`, `src/Composition.tsx`, existing skills or dependencies unless the current approved task requires it. Implement one phase/scene per task. Validate, preview, describe git diff; do not commit/push without explicit approval.
