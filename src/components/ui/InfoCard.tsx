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

export interface InfoCardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  width?: number | string;
  maxWidth?: number | string;
  accentColor?: string; // Border accent or header accent
  highlight?: boolean;
  animated?: boolean;
  startFrame?: number;
  style?: React.CSSProperties;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  children,
  width,
  maxWidth,
  accentColor,
  highlight = false,
  animated = false,
  startFrame = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = animated
    ? getSpringProgress({
        frame,
        fps,
        startFrame,
        config: SPRING_PRESETS.snappy,
      })
    : 1;

  const opacity = animated ? Math.min(1, Math.max(0, progress)) : 1;
  const scale = animated ? 0.9 + progress * 0.1 : 1;
  const translateY = animated ? (1 - progress) * 16 : 0;

  const resolvedBorder = accentColor
    ? `${BORDER_WIDTH.thick}px solid ${accentColor}`
    : highlight
      ? `${BORDER_WIDTH.thick}px solid ${SEMANTIC_COLORS.borderFocus}`
      : `${BORDER_WIDTH.default}px solid ${SEMANTIC_COLORS.borderDefault}`;

  const resolvedBoxShadow = highlight || accentColor
    ? `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 24px ${accentColor ? `${accentColor}33` : "rgba(125, 227, 209, 0.15)"}`
    : "0 8px 24px rgba(0, 0, 0, 0.35)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: highlight ? BASE_COLORS.surfaceHover : SEMANTIC_COLORS.cardBackground,
        border: resolvedBorder,
        borderRadius: RADIUS.lg,
        padding: `${COMPONENT_SPACING.cardPadding.y}px ${COMPONENT_SPACING.cardPadding.x}px`,
        boxShadow: resolvedBoxShadow,
        width,
        maxWidth,
        opacity,
        transform:
          animated && (translateY !== 0 || scale !== 1)
            ? `translate3d(0, ${translateY}px, 0) scale(${scale})`
            : undefined,
        ...style,
      }}
    >
      {title && (
        <h3
          style={{
            margin: 0,
            marginBottom: description || children ? SPACING.xs : 0,
            fontFamily: FONT_FAMILIES.primary,
            fontSize: FONT_SIZES.bodyLarge,
            fontWeight: FONT_WEIGHTS.semiBold,
            lineHeight: LINE_HEIGHTS.snug,
            letterSpacing: LETTER_SPACING.tight,
            color: accentColor ?? BASE_COLORS.text,
          }}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          style={{
            margin: 0,
            marginBottom: children ? SPACING.md : 0,
            fontFamily: FONT_FAMILIES.primary,
            fontSize: FONT_SIZES.label,
            fontWeight: FONT_WEIGHTS.regular,
            lineHeight: LINE_HEIGHTS.normal,
            color: BASE_COLORS.muted,
          }}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
};
