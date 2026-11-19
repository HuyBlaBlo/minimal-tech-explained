# Coding Agent Instructions — Minimal Tech Explainer

## Purpose

Maintain a reusable **React + TypeScript + Remotion** production system for 3–5 minute English-language, faceless technical explainer videos. The content focuses on System Design, Backend Engineering, Networking, Databases, Distributed Systems, and Cloud Computing.

**Target video:** 1920 × 1080, 30 FPS, 16:9. Reuse the same project for all episodes.

## Read before editing

1. Inspect the existing files and understand the requested change before writing code. Do not assume that planned files or features already exist.
2. Read only the relevant project documents:
   - `docs/CHANNEL_BRIEF.md` — audience and editorial direction.
   - `docs/STYLE_GUIDE.md` — visual system and layout.
   - `docs/ANIMATION_GUIDE.md` — frame-based motion standards.
   - `docs/WORKFLOW.md` — production workflow.
   - `docs/VIDEO_PRODUCTION_STEP_BY_STEP.md` — episode creation process.
   - `docs/ASSETS_AND_AUDIO.md` — assets, audio, subtitles and licensing.
   - `docs/VIDEO_QA_CHECKLIST.md` — final video quality checks.
3. Consult the relevant installed Remotion skills in `.agents/skills/` when accessible. Do not reinstall, replace, or modify skills unless requested.

## Implementation rules

- **Work on the requested scope only.** Implement one clearly defined component, scene, or change at a time.
- Reuse existing code in `src/theme/`, `src/components/`, and `src/compositions/` whenever possible.
- Use TypeScript with well-defined props and predictable component behavior. Avoid unnecessary abstractions and dependencies.
- Keep design tokens centralized; do not duplicate colors, font settings, spacing, or animation presets in individual components.
- Use the approved visual style: dark background, readable type, restrained highlights, clean system diagrams, and purposeful motion.
- Do not rewrite unrelated components or remove working compositions. Only update `src/Root.tsx` when registering or changing compositions is part of the task.
- Do not add packages, alter build configuration, change repository licensing, or restructure the project without a clear need and approval.
- Do not invent technical facts, benchmark figures, or system behavior. Keep diagrams consistent with verified explanations and the approved storyboard.
- Use assets with a verifiable right to use them; do not insert unlicensed audio, imagery, logos, or fonts.

## Remotion animation rules

- Animations must be **deterministic and frame-based**. Use `useCurrentFrame()`, `useVideoConfig()`, `spring()`, and `interpolate()` as appropriate.
- Account for **sequence-local frames**: `useCurrentFrame()` inside a `<Sequence>` starts at that sequence's local frame zero. Make time offsets explicit.
- Clamp interpolation where needed. Check states before, during, and after each animation, including final visibility.
- Avoid wall-clock timers, `setInterval`, and CSS keyframe animations for video motion.
- Keep nodes, labels, arrowheads, and packets inside the canvas/safe zones. Ensure connections attach to node boundaries and moving packets follow the correct path.
- Prioritize technical clarity over decorative effects. Review visuals at full resolution and at smaller viewing sizes.

## Episode workflow

- Keep each episode's research, script, storyboard, metadata, voice, and assets under `content/<episode-id>/`.
- Write **narration and public-facing video copy in English**. User-facing workflow documentation may be in Vietnamese.
- Review research and script before implementing visuals. Follow the approved storyboard scene by scene.
- Keep original media and editing assets separate from generated renders. Place files needed by Remotion's `staticFile()` in `public/`.
- Choose a clear audio-finishing workflow (Remotion or an external editor) and avoid embedding the same voice-over twice.

## Validation and handoff

For code changes, perform the checks relevant to the task:

```bash
npm run lint
npx remotion compositions src/index.ts
```

- Preview affected compositions in Remotion Studio; inspect key frames and any timing or layout changes.
- When possible, verify an actual still or video render. Do not claim a visual/render check passed unless it was performed.
- Review `git status` and the relevant diff. Never run `git add`, commit, push, reset, rebase, or force-push unless explicitly asked.
- Finish with a **brief report**: files changed, checks performed and their results, and any unresolved issue. Avoid long status narratives.
