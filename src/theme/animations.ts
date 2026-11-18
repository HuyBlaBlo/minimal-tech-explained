/**
 * Centralized animation presets and interpolation helpers for minimal-tech-explainer.
 * Follows Remotion frame-based, deterministic animation principles.
 */

import {
  Easing,
  interpolate,
  spring,
  SpringConfig,
  InterpolateOptions,
} from "remotion";

/**
 * Standard spring physics profiles adhering to docs/ANIMATION_GUIDE.md.
 */
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

  // Gentle: For subtle fade/scale reveals, tooltips, or ambient glowing.
  gentle: {
    damping: 30,
    mass: 1.2,
    stiffness: 90,
    overshootClamping: false,
  },
} as const satisfies Record<string, SpringConfig>;

/**
 * Standard frame durations (at 30 FPS).
 */
export const ANIMATION_DURATIONS = {
  instant: 0,
  staggerDelay: 4, // 4 frames (~133ms) between sequential nodes
  popIn: 12, // ~400ms for node entrances
  fast: 8, // ~267ms for quick state toggles / pulses
  normal: 15, // ~500ms for layout transitions
  slide: 20, // ~667ms for cross-screen movements
  sceneTransition: 15, // ~500ms for cross-fades
  packetTravelFast: 12, // Cache hits / local memory access
  packetTravelNormal: 24, // Standard network RPC round-trip
  packetTravelSlow: 45, // Bottlenecked / high latency hop
} as const;

/**
 * Standard interpolation clamping options.
 * Clamping prevents wild out-of-range values if evaluated outside keyframes.
 */
export const DEFAULT_INTERPOLATE_OPTIONS: InterpolateOptions = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
};

/**
 * Standard Easing profiles for linear or non-spring interpolations.
 */
export const EASING_PRESETS = {
  easeOutCubic: Easing.bezier(0.33, 1, 0.68, 1),
  easeInOutCubic: Easing.bezier(0.65, 0, 0.35, 1),
  snappyOut: Easing.bezier(0.16, 1, 0.3, 1),
} as const;

/**
 * Spring entrance calculation helper.
 * Returns a value from 0 to 1 based on spring physics starting at startFrame.
 */
export const getSpringProgress = ({
  frame,
  fps,
  startFrame = 0,
  config = SPRING_PRESETS.snappy,
  delay = 0,
}: {
  frame: number;
  fps: number;
  startFrame?: number;
  config?: SpringConfig;
  delay?: number;
}): number => {
  return spring({
    frame: frame - startFrame - delay,
    fps,
    config,
  });
};

/**
 * Linear progress calculation helper with guaranteed clamping.
 */
export const getLinearProgress = ({
  frame,
  startFrame,
  durationInFrames,
  easing,
}: {
  frame: number;
  startFrame: number;
  durationInFrames: number;
  easing?: (input: number) => number;
}): number => {
  return interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    {
      ...DEFAULT_INTERPOLATE_OPTIONS,
      ...(easing ? { easing } : {}),
    }
  );
};

export type SpringPresets = typeof SPRING_PRESETS;
export type AnimationDurations = typeof ANIMATION_DURATIONS;
