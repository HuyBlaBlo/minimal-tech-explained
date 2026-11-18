/**
 * Production canvas and layout dimensions for minimal-tech-explainer.
 */

import { SPACING } from "./spacing";

export const LAYOUT = {
  // Standard Production Specifications
  width: 1920,
  height: 1080,
  fps: 30,
  aspectRatio: "16:9",

  // Safe zones (keeping content clear of screen borders and platform UI)
  safeZone: {
    x: 80,
    y: 60,
  },

  // Usable area inside safe zones
  contentWidth: 1920 - 80 * 2, // 1760px
  contentHeight: 1080 - 60 * 2, // 960px

  // Common UI & Node Dimensions
  node: {
    minWidth: 160,
    maxWidth: 280,
    defaultHeight: 96,
    iconSize: 28,
  },

  packet: {
    size: 14,
    glowRadius: 10,
  },

  card: {
    minWidth: 320,
    maxWidth: 520,
  },

  terminal: {
    defaultWidth: 720,
    minHeight: 240,
  },

  header: {
    height: 100,
    marginBottom: SPACING.xl,
  },
} as const;

export type Layout = typeof LAYOUT;
