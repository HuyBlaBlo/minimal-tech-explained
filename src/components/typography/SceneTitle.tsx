import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import {
  BASE_COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACING,
  SPACING,
  SPRING_PRESETS,
  getSpringProgress,
} from "../../theme";

export interface SceneTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  animated?: boolean;
  startFrame?: number;
  color?: string;
  subtitleColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SceneTitle: React.FC<SceneTitleProps> = ({
  title,
  subtitle,
  align = "left",
  animated = true,
  startFrame = 0,
  color = BASE_COLORS.text,
  subtitleColor = BASE_COLORS.muted,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring progress
  const progress = animated
    ? getSpringProgress({
        frame,
        fps,
        startFrame,
        config: SPRING_PRESETS.snappy,
      })
    : 1;

  const subtitleProgress = animated && subtitle
    ? getSpringProgress({
        frame,
        fps,
        startFrame: startFrame + 4, // 4-frame stagger
        config: SPRING_PRESETS.snappy,
      })
    : 1;

  const titleOpacity = animated ? Math.min(1, Math.max(0, progress)) : 1;
  const titleY = animated ? (1 - progress) * 20 : 0;

  const subtitleOpacity = animated ? Math.min(1, Math.max(0, subtitleProgress)) : 1;
  const subtitleY = animated ? (1 - subtitleProgress) * 14 : 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems:
          align === "center"
            ? "center"
            : align === "right"
              ? "flex-end"
              : "flex-start",
        textAlign: align,
        width: "100%",
        gap: SPACING.xs,
        ...style,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: FONT_FAMILIES.primary,
          fontSize: FONT_SIZES.sceneTitle,
          fontWeight: FONT_WEIGHTS.bold,
          lineHeight: LINE_HEIGHTS.tight,
          letterSpacing: LETTER_SPACING.tight,
          color,
          opacity: titleOpacity,
          transform: titleY !== 0 ? `translate3d(0, ${titleY}px, 0)` : undefined,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            margin: 0,
            fontFamily: FONT_FAMILIES.primary,
            fontSize: FONT_SIZES.subheading,
            fontWeight: FONT_WEIGHTS.medium,
            lineHeight: LINE_HEIGHTS.snug,
            letterSpacing: LETTER_SPACING.normal,
            color: subtitleColor,
            opacity: subtitleOpacity,
            transform:
              subtitleY !== 0 ? `translate3d(0, ${subtitleY}px, 0)` : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
