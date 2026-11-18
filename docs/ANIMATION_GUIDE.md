# Animation Guide — Remotion Conventions

All motion should explain a system behavior or guide the viewer's attention. Prefer predictable, restrained transitions over decorative animation.

## Rules

1. Derive motion from `useCurrentFrame()` and `useVideoConfig()`; keep rendering deterministic.
2. Reuse `SPRING_PRESETS`, `ANIMATION_DURATIONS`, `EASING_PRESETS` and interpolation helpers from `src/theme/animations.ts`.
3. Clamp interpolation outside a defined animation window (`extrapolateLeft/Right: "clamp"`).
4. Use springs for arrivals, scaling and spatial changes. Linear progress is appropriate for fades, constant-speed packets and progress indicators.
5. Use small, meaningful staggers instead of introducing all nodes together.
6. Do not use unseeded randomness, `setInterval`, wall-clock timers or CSS keyframe timing for rendered animations.
7. Preserve an element's position and identity when a diagram changes; avoid resetting the full composition unnecessarily.

## Shared spring presets

Use these exported values rather than recreating configs:

| Preset | Damping | Mass | Stiffness | Overshoot clamp | Typical use |
|---|---:|---:|---:|---|---|
| `snappy` | 18 | 0.8 | 180 | Yes | Node / card appearance |
| `smooth` | 24 | 1.0 | 120 | No | Layout changes, camera pans |
| `gentle` | 30 | 1.2 | 90 | No | Subtle emphasis and reveals |

At 30 FPS, `ANIMATION_DURATIONS` provides a starting point: 4-frame stagger, 12-frame pop-in, 15-frame normal transition, 15-frame scene transition, and 12/24/45-frame packet movements. These are **design defaults, not network latency measurements**.

## Effect behavior

| Effect | Expected behavior |
|---|---|
| `FadeIn` | Opacity 0 → 1, then stays visible |
| `FadeOut` | Opacity 1 → 0, then stays hidden |
| `ScaleIn` | Slightly smaller → full size, optional fade |
| `Pulse` | Subtle repeated emphasis for active objects |
| `Glow` | Highlight an active or important system element |
| `Shake` | Brief damped feedback for errors; ends at zero offset |
| `Highlight` | Draw attention to one region without concealing neighbors |

Do not let effects cause unwanted layout shifts, hide essential labels or compete with narration.

## Nodes, connections and packets

- Introduce architecture nodes in the order the narration mentions them.
- Draw or reveal connection paths before moving a packet along them.
- Packet position must match the actual SVG path, including bends and return paths.
- Keep connection labels readable at all times, including while packets pass.
- Visually distinguish success, warning, failure and recovery through consistent semantic colors.
- In a failure scene, clearly depict the cause, affected node, failed request and resulting response or retry (only if technically accurate for the chosen system).

## Timeline and `Sequence`

Inside Remotion's `<Sequence from={...}>`, `useCurrentFrame()` is **relative to the Sequence**, not necessarily the composition's global timeline. Define clearly whether any prop such as `startFrame` is local or global; convert deliberately if needed.

For every timed effect, test at three local frames: **before**, **midway**, **after**. For `FadeOut`, opacity should be approximately **1 / 0.5 / 0**. Check that its post-animation state is maintained. `visibility: hidden` does not remove the wrapper's space from layout.

If using `TransitionSeries`, account for overlap when calculating total composition duration.

## Scene timing and narration

- Draft scene durations from the script, then adapt to the measured voice-over.
- Sync node reveal, packet movement and labels to actual narration cues.
- If a diagram needs more explanation time, extend that scene; do not rush the voice to match arbitrary frames.
- Keep transitions short enough that they do not delay the explanation.

## Validation

- `npm run lint` passes.
- Studio Play and timeline scrubbing produce the same result at a given frame.
- Check the first, middle, last and boundary frames of each scene.
- No clipping, flashing, drifting packets, unexpected fades or overlap.
- The final video is inspected after render, not only in Studio.
