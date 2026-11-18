import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import {
  BASE_COLORS,
  SEMANTIC_COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACING,
  SPACING,
  COMPONENT_SPACING,
  RADIUS,
  BORDER_WIDTH,
  SPRING_PRESETS,
  getSpringProgress,
} from "../../theme";

export type NodeState = "default" | "active" | "success" | "warning" | "error" | "disabled";

export interface BaseNodeProps {
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  tag?: string;
  state?: NodeState;
  accentColor?: string;
  glowColor?: string;
  animated?: boolean;
  startFrame?: number;
  pulse?: boolean;
  width?: number | string;
  style?: React.CSSProperties;
}

export const BaseNode: React.FC<BaseNodeProps> = ({
  label,
  sublabel,
  icon,
  tag,
  state = "default",
  accentColor = BASE_COLORS.primary,
  glowColor,
  animated = false,
  startFrame = 0,
  pulse = false,
  width = 240,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring animation
  const progress = animated
    ? getSpringProgress({
        frame,
        fps,
        startFrame,
        config: SPRING_PRESETS.snappy,
      })
    : 1;

  const opacity = state === "disabled" ? 0.35 : animated ? Math.min(1, Math.max(0, progress)) : 1;
  const scaleEntrance = animated ? 0.85 + progress * 0.15 : 1;
  const translateY = animated ? (1 - progress) * 20 : 0;

  // Pulse animation for active states
  const pulseFactor = pulse && state === "active"
    ? 1 + 0.03 * Math.sin(((frame - startFrame) / fps) * Math.PI * 2)
    : 1;

  const finalScale = scaleEntrance * pulseFactor;

  // Resolve styling based on state
  let resolvedBorderColor: string = SEMANTIC_COLORS.borderDefault;
  let resolvedAccentColor: string = accentColor;
  let resolvedBoxShadow = "0 8px 24px rgba(0, 0, 0, 0.4)";
  let resolvedBg: string = BASE_COLORS.surface;

  const resolvedGlow = glowColor || `${accentColor}40`;

  switch (state) {
    case "active":
      resolvedBorderColor = accentColor;
      resolvedAccentColor = accentColor;
      resolvedBg = BASE_COLORS.surfaceHover;
      resolvedBoxShadow = `0 8px 30px rgba(0, 0, 0, 0.5), 0 0 24px ${resolvedGlow}`;
      break;
    case "success":
      resolvedBorderColor = BASE_COLORS.success;
      resolvedAccentColor = BASE_COLORS.success;
      resolvedBoxShadow = "0 8px 30px rgba(0, 0, 0, 0.5), 0 0 24px rgba(139, 224, 167, 0.25)";
      break;
    case "warning":
      resolvedBorderColor = BASE_COLORS.warning;
      resolvedAccentColor = BASE_COLORS.warning;
      resolvedBoxShadow = "0 8px 30px rgba(0, 0, 0, 0.5), 0 0 24px rgba(245, 192, 99, 0.25)";
      break;
    case "error":
      resolvedBorderColor = BASE_COLORS.error;
      resolvedAccentColor = BASE_COLORS.error;
      resolvedBoxShadow = "0 8px 30px rgba(0, 0, 0, 0.5), 0 0 24px rgba(240, 120, 120, 0.25)";
      break;
    case "disabled":
      resolvedBorderColor = SEMANTIC_COLORS.borderSubtle;
      resolvedAccentColor = BASE_COLORS.muted;
      resolvedBoxShadow = "none";
      break;
    case "default":
    default:
      resolvedBorderColor = SEMANTIC_COLORS.borderDefault;
      resolvedAccentColor = accentColor;
      break;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width,
        minWidth: 160,
        backgroundColor: resolvedBg,
        border: `${BORDER_WIDTH.thick}px solid ${resolvedBorderColor}`,
        borderRadius: RADIUS.lg,
        padding: `${COMPONENT_SPACING.nodePadding.y}px ${COMPONENT_SPACING.nodePadding.x}px`,
        boxShadow: resolvedBoxShadow,
        opacity,
        transform: `translate3d(0, ${translateY}px, 0) scale(${finalScale})`,
        boxSizing: "border-box",
        userSelect: "none",
        ...style,
      }}
    >
      {/* Top bar: Icon + Tag */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: SPACING.sm,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: RADIUS.md,
            backgroundColor: `${resolvedAccentColor}18`,
            color: resolvedAccentColor,
          }}
        >
          {icon}
        </div>

        {tag && (
          <span
            style={{
              fontFamily: FONT_FAMILIES.code,
              fontSize: FONT_SIZES.badge,
              fontWeight: FONT_WEIGHTS.semiBold,
              lineHeight: LINE_HEIGHTS.tight,
              letterSpacing: LETTER_SPACING.wide,
              color: resolvedAccentColor,
              backgroundColor: `${resolvedAccentColor}15`,
              padding: `3px 8px`,
              borderRadius: RADIUS.sm,
              textTransform: "uppercase",
            }}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Main Node Label */}
      <span
        style={{
          fontFamily: FONT_FAMILIES.primary,
          fontSize: FONT_SIZES.label,
          fontWeight: FONT_WEIGHTS.semiBold,
          lineHeight: LINE_HEIGHTS.snug,
          letterSpacing: LETTER_SPACING.tight,
          color: state === "disabled" ? BASE_COLORS.muted : BASE_COLORS.text,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>

      {/* Optional Sublabel / Address */}
      {sublabel && (
        <span
          style={{
            marginTop: SPACING.xxs,
            fontFamily: FONT_FAMILIES.code,
            fontSize: FONT_SIZES.badge,
            fontWeight: FONT_WEIGHTS.regular,
            lineHeight: LINE_HEIGHTS.normal,
            color: BASE_COLORS.muted,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {sublabel}
        </span>
      )}
    </div>
  );
};
