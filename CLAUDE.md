# Claude Code Instructions

Follow [`AGENTS.md`](AGENTS.md) as the primary coding and review standard for this project. Do not duplicate or override its rules here.

## Project context

- Stack: React, TypeScript, and Remotion.
- Purpose: reusable, English-language technical explainer videos (1920 × 1080, 30 FPS).
- Visual rules: `docs/STYLE_GUIDE.md` and `docs/ANIMATION_GUIDE.md`.
- Episode process: `docs/WORKFLOW.md` and `docs/VIDEO_PRODUCTION_STEP_BY_STEP.md`.
- Existing code and component APIs are authoritative; inspect them before proposing changes.

## Remotion skills

Read relevant installed skills from `.agents/skills/` if available in your environment. If they are inaccessible, report that limitation instead of assuming another directory contains copies or symlinks. Do not reinstall skills without approval.

## Common commands

```bash
npm run dev
npm run lint
npx remotion compositions src/index.ts
```

Implement only the requested task, preserve unrelated code, validate relevant changes, and summarize the result concisely. Do not commit or push unless explicitly instructed.
