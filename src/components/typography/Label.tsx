import React from "react";
import {
  BASE_COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACING,
} from "../../theme";

export type LabelVariant = "primary" | "secondary" | "accent" | "muted" | "error" | "success" | "warning";
export type LabelSize = "badge" | "label" | "body" | "subheading" | "heading";

export interface LabelProps {
  children: React.ReactNode;
  variant?: LabelVariant;
  size?: LabelSize;
  mono?: boolean;
  weight?: keyof typeof FONT_WEIGHTS;
  color?: string; // Custom override
  style?: React.CSSProperties;
}

const VARIANT_COLORS: Record<LabelVariant, string> = {
  primary: BASE_COLORS.primary,
  secondary: BASE_COLORS.secondary,
  accent: BASE_COLORS.accent,
  muted: BASE_COLORS.muted,
  error: BASE_COLORS.error,
  success: BASE_COLORS.success,
  warning: BASE_COLORS.warning,
};

export const Label: React.FC<LabelProps> = ({
  children,
  variant = "muted",
  size = "label",
  mono = false,
  weight,
  color,
  style,
}) => {
  const resolvedColor = color ?? VARIANT_COLORS[variant];
  const resolvedFontFamily = mono ? FONT_FAMILIES.code : FONT_FAMILIES.primary;
  const resolvedFontSize = FONT_SIZES[size];
  const resolvedFontWeight = weight
    ? FONT_WEIGHTS[weight]
    : mono
      ? FONT_WEIGHTS.medium
      : FONT_WEIGHTS.semiBold;

  return (
    <span
      style={{
        fontFamily: resolvedFontFamily,
        fontSize: resolvedFontSize,
        fontWeight: resolvedFontWeight,
        lineHeight: LINE_HEIGHTS.snug,
        letterSpacing: mono ? LETTER_SPACING.wide : LETTER_SPACING.normal,
        color: resolvedColor,
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </span>
  );
};
