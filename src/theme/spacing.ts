/**
 * Spacing and sizing tokens for minimal-tech-explainer.
 * Optimized for 1920x1080 canvas.
 */

export const SPACING = {
  none: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  huge: 96,
} as const;

export const COMPONENT_SPACING = {
  // Padding inside cards and diagram nodes
  nodePadding: {
    x: SPACING.lg, // 24px
    y: SPACING.md, // 16px
  },
  cardPadding: {
    x: SPACING.xl, // 32px
    y: SPACING.lg, // 24px
  },
  badgePadding: {
    x: SPACING.xs, // 8px
    y: SPACING.xxs, // 4px
  },
  terminalPadding: {
    x: SPACING.lg, // 24px
    y: SPACING.md, // 16px
  },

  // Gaps between architecture elements
  nodeGap: {
    horizontal: SPACING.xxl, // 48px
    vertical: SPACING.xl, // 32px
    cluster: SPACING.xxxl, // 64px
  },

  // Margin & layout separation
  titleBottomMargin: SPACING.xxl, // 48px
  textLineGap: SPACING.sm, // 12px
} as const;

export const RADIUS = {
  none: 0,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  full: 9999,
} as const;

export const BORDER_WIDTH = {
  hairline: 1,
  default: 1.5,
  thick: 2,
  accent: 3,
} as const;

export type Spacing = typeof SPACING;
export type ComponentSpacing = typeof COMPONENT_SPACING;
export type Radius = typeof RADIUS;
