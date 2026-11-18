import React from "react";
import {
  BASE_COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACING,
  COMPONENT_SPACING,
  RADIUS,
  BORDER_WIDTH,
} from "../../theme";

export type BadgeState = "success" | "warning" | "error" | "neutral" | "primary" | "secondary";

export interface BadgeProps {
  label: string;
  state?: BadgeState;
  variant?: "solid" | "outline" | "subtle";
  style?: React.CSSProperties;
}

interface StateColorConfig {
  color: string;
  bgSubtle: string;
}

const STATE_COLORS: Record<BadgeState, StateColorConfig> = {
  success: {
    color: BASE_COLORS.success,
    bgSubtle: "rgba(139, 224, 167, 0.12)",
  },
  warning: {
    color: BASE_COLORS.warning,
    bgSubtle: "rgba(245, 192, 99, 0.12)",
  },
  error: {
    color: BASE_COLORS.error,
    bgSubtle: "rgba(240, 120, 120, 0.12)",
  },
  neutral: {
    color: BASE_COLORS.muted,
    bgSubtle: "rgba(155, 174, 176, 0.12)",
  },
  primary: {
    color: BASE_COLORS.primary,
    bgSubtle: "rgba(125, 227, 209, 0.12)",
  },
  secondary: {
    color: BASE_COLORS.secondary,
    bgSubtle: "rgba(140, 168, 255, 0.12)",
  },
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  state = "neutral",
  variant = "subtle",
  style,
}) => {
  const cfg = STATE_COLORS[state];

  let bg: string = cfg.bgSubtle;
  let text: string = cfg.color;
  let border: string = `${BORDER_WIDTH.hairline}px solid ${cfg.color}40`;

  if (variant === "outline") {
    bg = "transparent";
    border = `${BORDER_WIDTH.default}px solid ${cfg.color}`;
  } else if (variant === "solid") {
    bg = cfg.color;
    text = BASE_COLORS.background;
    border = "none";
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT_FAMILIES.code,
        fontSize: FONT_SIZES.badge,
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS.tight,
        letterSpacing: LETTER_SPACING.wide,
        textTransform: "uppercase",
        color: text,
        backgroundColor: bg,
        border,
        borderRadius: RADIUS.sm,
        padding: `${COMPONENT_SPACING.badgePadding.y}px ${COMPONENT_SPACING.badgePadding.x}px`,
        ...style,
      }}
    >
      {label}
    </span>
  );
};
