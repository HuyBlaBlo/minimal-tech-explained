# Claude Code Guidelines: Minimal Tech Explainer

This file provides Claude Code with context and operating rules for this repository. It references the shared operational standards defined in `AGENTS.md`.

---

## 1. Primary References
- **Shared Guidelines**: See [AGENTS.md](./AGENTS.md) for core principles, dependencies, and git safety.
- **Visual Design**: See [docs/STYLE_GUIDE.md](./docs/STYLE_GUIDE.md) for colors, typography, and card anatomy.
- **Motion Standards**: See [docs/ANIMATION_GUIDE.md](./docs/ANIMATION_GUIDE.md) for spring configs and interpolation rules.
- **Workflow**: See [docs/WORKFLOW.md](./docs/WORKFLOW.md) for episode creation steps.

---

## 2. Remotion Skills & Tooling
- Remotion skills are located in `.agents/skills/` (symlinked via `.claude/skills`).
- Do NOT reinstall or clone external agent skills into this repo.
- Prioritize native Remotion primitives: `useCurrentFrame()`, `useVideoConfig()`, `spring()`, `interpolate()`, `<Series>`, `<Sequence>`, `<TransitionSeries>`.

---

## 3. Command Shortcuts
- **Studio Preview**: `npm run dev` (runs `remotion studio`)
- **Typecheck & Lint**: `npm run lint`
- **Build / Bundle**: `npm run build`
