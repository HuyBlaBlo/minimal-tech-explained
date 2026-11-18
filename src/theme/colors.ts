/**
 * Centralized color tokens for minimal-tech-explainer.
 * Follows the approved minimalist dark developer aesthetic.
 */

// 1. Base Palette Tokens
export const BASE_COLORS = {
  background: "#0B171A",
  surface: "#14272B",
  surfaceHover: "#1E383E",
  surfaceSubtle: "#0F1F23",
  primary: "#7DE3D1",
  secondary: "#8CA8FF",
  accent: "#B79AF7",
  text: "#F2F5F5",
  muted: "#9BAEB0",
  error: "#F07878",
  success: "#8BE0A7",
  warning: "#F5C063",
} as const;

// 2. Semantic Architecture & Diagram Tokens
export const SEMANTIC_COLORS = {
  // Canvas & Containers
  canvasBackground: BASE_COLORS.background,
  cardBackground: BASE_COLORS.surface,
  cardBackgroundHover: BASE_COLORS.surfaceHover,
  terminalBackground: BASE_COLORS.surfaceSubtle,

  // Borders & Dividers
  borderSubtle: "#1B3439",
  borderDefault: "#234147",
  borderFocus: BASE_COLORS.primary,
  borderError: BASE_COLORS.error,
  borderSuccess: BASE_COLORS.success,

  // Typography
  textPrimary: BASE_COLORS.text,
  textMuted: BASE_COLORS.muted,
  textHighlight: BASE_COLORS.primary,
  textCode: BASE_COLORS.secondary,

  // Diagram Node Entities
  clientNode: {
    bg: BASE_COLORS.surface,
    border: BASE_COLORS.secondary,
    accent: BASE_COLORS.secondary,
    glow: "rgba(140, 168, 255, 0.25)",
  },
  serverNode: {
    bg: BASE_COLORS.surface,
    border: BASE_COLORS.primary,
    accent: BASE_COLORS.primary,
    glow: "rgba(125, 227, 209, 0.25)",
  },
  databaseNode: {
    bg: BASE_COLORS.surface,
    border: BASE_COLORS.accent,
    accent: BASE_COLORS.accent,
    glow: "rgba(183, 154, 247, 0.25)",
  },
  cacheNode: {
    bg: BASE_COLORS.surface,
    border: BASE_COLORS.primary,
    accent: BASE_COLORS.primary,
    glow: "rgba(125, 227, 209, 0.2)",
  },
  loadBalancerNode: {
    bg: BASE_COLORS.surface,
    border: BASE_COLORS.secondary,
    accent: BASE_COLORS.secondary,
    glow: "rgba(140, 168, 255, 0.2)",
  },

  // Connection Lines & Wires
  connectionLine: {
    default: "#234147",
    active: BASE_COLORS.primary,
    secondary: BASE_COLORS.secondary,
    error: BASE_COLORS.error,
  },

  // Data Packets & Events
  packet: {
    default: BASE_COLORS.primary,
    secondary: BASE_COLORS.secondary,
    accent: BASE_COLORS.accent,
    error: BASE_COLORS.error,
    success: BASE_COLORS.success,
  },

  // System & Health States
  status: {
    healthy: BASE_COLORS.success,
    warning: BASE_COLORS.warning,
    error: BASE_COLORS.error,
    idle: BASE_COLORS.muted,
  },
} as const;

export type BaseColors = typeof BASE_COLORS;
export type SemanticColors = typeof SEMANTIC_COLORS;
