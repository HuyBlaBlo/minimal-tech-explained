/**
 * Centralized typography tokens for minimal-tech-explainer.
 * Optimized for 1920x1080 (16:9) presentations.
 *
 * Font Licensing & Loading Approach:
 * - 'Inter' (SIL Open Font License 1.1) and 'JetBrains Mono' (OFL 1.1) are standard open-source developer typefaces.
 * - To ensure zero render flickers and zero external network latency during remotion render/studio,
 *   we specify standard robust font stacks falling back gracefully to system sans-serif and monospace.
 * - Standard web font loaders (@remotion/google-fonts or local woff2 imports) can be optionally mounted,
 *   while CSS font families defined here provide fallback safety.
 */

import React from "react";
import { BASE_COLORS } from "./colors";

export const FONT_FAMILIES = {
  primary:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  code:
    "'JetBrains Mono', 'Fira Code', 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
} as const;

export const FONT_WEIGHTS = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
} as const;

export const FONT_SIZES = {
  badge: 14,
  label: 18,
  code: 20,
  body: 24,
  bodyLarge: 28,
  subheading: 36,
  heading: 44,
  sceneTitle: 56,
  heroTitle: 68,
} as const;

export const LINE_HEIGHTS = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.4,
  relaxed: 1.6,
} as const;

export const LETTER_SPACING = {
  tighter: "-0.04em",
  tight: "-0.02em",
  normal: "0em",
  wide: "0.04em",
  wider: "0.08em",
} as const;

export const TYPOGRAPHY_PRESETS = {
  sceneTitle: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.sceneTitle,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
    color: BASE_COLORS.text,
  },
  sectionHeader: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.heading,
    fontWeight: FONT_WEIGHTS.semiBold,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.tight,
    color: BASE_COLORS.text,
  },
  subheading: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.subheading,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.normal,
    color: BASE_COLORS.muted,
  },
  body: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.body,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    color: BASE_COLORS.text,
  },
  bodyMuted: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.body,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    color: BASE_COLORS.muted,
  },
  nodeLabel: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.label,
    fontWeight: FONT_WEIGHTS.semiBold,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.tight,
    color: BASE_COLORS.text,
  },
  code: {
    fontFamily: FONT_FAMILIES.code,
    fontSize: FONT_SIZES.code,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    color: BASE_COLORS.secondary,
  },
  badge: {
    fontFamily: FONT_FAMILIES.code,
    fontSize: FONT_SIZES.badge,
    fontWeight: FONT_WEIGHTS.semiBold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.wide,
    textTransform: "uppercase" as const,
  },
} as const satisfies Record<string, React.CSSProperties>;

export type FontFamilies = typeof FONT_FAMILIES;
export type FontWeights = typeof FONT_WEIGHTS;
export type FontSizes = typeof FONT_SIZES;
export type TypographyPresets = typeof TYPOGRAPHY_PRESETS;
