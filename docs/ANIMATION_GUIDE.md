# Animation Guide: Physics, Timing & Remotion Conventions

This document dictates all animation behavior across the video pipeline. Animations must feel mechanical, snappy, and intentional—avoiding sluggish eases or distracting, bouncy cartoon physics.

---

## 1. Core Animation Rules
1. **Never Animate Linearly Without Purpose**: Linear interpolation (`interpolate`) feels robotic and unnatural for spatial motion. Use `spring()` for element entrances and layout transitions, reserving linear solely for continuous background rotations or continuous progress bars.
2. **Frame-Rate Invariance**: Always compute animations using `fps` from `useVideoConfig()` and `frame` from `useCurrentFrame()`.
3. **Clamping by Default**: Whenever using `interpolate()`, explicitly specify `{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }` to prevent out-of-bounds visual bugs when frames exceed the animation window.
4. **Staggered Orchestration**: When multiple diagram nodes appear, stagger their entrance by 3 to 6 frames. Simultaneous popping feels flat and overwhelming.

---

## 2. Spring Physics Presets

All spring physics configs must be shared from `src/theme/animations.ts`.

Remotion's `spring()` takes `{ frame, fps, config }`. We utilize three standardized physics profiles:

```typescript
export const SPRING_PRESETS = {
  // Snappy: For cards, badges, nodes, and UI pop-ins. Zero overshoot.
  snappy: {
    damping: 18,
    mass: 0.8,
    stiffness: 180,
    overshootClamping: true,
  },

  // Smooth: For position slides, camera pans, and large layout shifts.
  smooth: {
    damping: 24,
    mass: 1.0,
    stiffness: 120,
    overshootClamping: false,
  },

  // Gentle: For subtle fade/scale reveals, tooltips, or glow effects.
  gentle: {
    damping: 30,
    mass: 1.2,
    stiffness: 90,
    overshootClamping: false,
  },
} as const;
```

---

## 3. Motion Patterns for Technical Diagrams

### A. Node Entrances (Scale + Fade + Slight Y-Shift)
- **Start**: `scale: 0.85`, `opacity: 0`, `translateY: 20px`.
- **Target**: `scale: 1.0`, `opacity: 1`, `translateY: 0px`.
- **Physics**: `SPRING_PRESETS.snappy`.
- **Duration**: Resolves in ~12–15 frames (0.4 – 0.5s at 30fps).

### B. Packet / Request Transmission
- Packets traveling along lines between nodes use `interpolate(frame, [startFrame, endFrame], [0, 1])` mapped to the SVG path stroke or X/Y coordinates.
- **Timing**:
  - Fast network call (e.g., local cache hit): 10–15 frames.
  - Normal RPC/HTTP network call: 20–30 frames.
  - Slow/Bottlenecked roundtrip: 45+ frames with trailing pulse.

### C. State Transitions (Healthy ➔ Overloaded / Down)
- Interpolate border color and glow over 8–10 frames.
- Node shake effect for failure:
  ```typescript
  const shake = Math.sin(frame * 1.5) * intensity; // where intensity fades from 8px to 0
  ```

### D. Camera & Focus Shifting
- In a complex distributed system, we zoom into subsystems (e.g., zooming from cluster overview into a single node's internal thread pool).
- Animate wrapper container:
  - `transform: scale(${zoom}) translate(${panX}px, ${panY}px)`
  - Use `SPRING_PRESETS.smooth` across 30–45 frames.

---

## 4. Scene Transitions
- **Cuts vs. Morphs**:
  - For continuous system evolution (e.g., adding a cache to an existing database architecture), do NOT hard-cut. Keep existing nodes mounted and smoothly transition positions with `spring()`.
  - For distinct conceptual sections (Hook ➔ Problem ➔ Solution ➔ Outro), use clean cross-fades or slide transitions using Remotion's `<TransitionSeries>` (e.g., slide or fade with duration 12–15 frames).

---

## 5. Performance Best Practices in Remotion
- Avoid calculating expensive layout mathematics inside inline render loops.
- Use CSS `transform` (GPU-accelerated `translate3d`, `scale`) and `opacity` rather than animating `top`, `left`, `width`, or `height`.
- For complex node graphs, keep SVG vector rendering efficient: use `<svg>` with pre-calculated paths.
