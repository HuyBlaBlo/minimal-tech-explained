# Agent Guidelines: Minimal Tech Explainer Production System

This document contains instructions for Antigravity, Claude Code, and compatible AI coding agents collaborating on this codebase.

---

## 1. Project Overview & Architecture
`minimal-tech-explainer` is an automated, code-driven video production system built with Remotion, React 19, and TypeScript. It produces faceless, technical 3–5 minute videos on System Design, Backend Engineering, Networking, and Cloud Computing.

### Key Directories
- `docs/`: Ground truth architecture, channel mission, style guidelines, and workflows.
- `content/`: Episode directories (`content/<episode-slug>/`) with scripts, storyboards, and audio assets.
- `content/templates/`: Standardized markdown blueprints for new episodes.
- `src/theme/`: Centralized design system (colors, typography scales, spring animation profiles).
- `src/components/`: Reusable, atomic visual components (nodes, arrows, cards, terminals).
- `src/scenes/`: High-level scene containers (Intro, ConceptFlow, Comparison, Outro).
- `src/compositions/`: Full Remotion compositions (per-episode compositions + `ComponentShowcase`).
- `.agents/skills/`: Native Remotion skills installed in the repository.

---

## 2. General Agent Rules & Protocol
1. **Never Reinstall or Overwrite Skills**: Use the existing skills in `.agents/skills/`. Never run commands that overwrite or duplicate them.
2. **Consult Remotion Skills First**:
   - For animation timing, springs, and layout: inspect `.agents/skills/remotion-markup`.
   - For composition structure and parameterization: inspect `.agents/skills/remotion-interactivity`.
   - For studio preview or command syntax: inspect `.agents/skills/remotion-studio` and `remotion-render`.
   - For subtitles/captions: inspect `.agents/skills/remotion-captions`.
3. **Preserve Functional Code**:
   - Keep the existing 720p sandbox composition in `src/Composition.tsx` intact unless explicitly asked to modify it.
   - Do not remove or alter existing configuration files (`remotion.config.ts`, `package.json`, `tsconfig.json`) without explicit approval.
4. **No Unapproved Dependencies**:
   - Do not install third-party UI libraries (Tailwind, Framer Motion, Radix, etc.). Remotion compositions rely on React, inline styles, CSS-in-JS, or lightweight standard CSS with Remotion spring primitives.
5. **Standard Output Specifications**:
   - Production Compositions: `1920 × 1080` (16:9), `30 FPS`.
   - Palette & Fonts: Strictly adhere to `docs/STYLE_GUIDE.md` and tokens in `src/theme/`.
6. **Git Discipline**:
   - Never commit or push without explicit user direction.
   - Validate TypeScript (`npm run lint` or `npx tsc --noEmit`) before completing any phase.
   - Summarize created/modified files clearly at the end of every turn.
