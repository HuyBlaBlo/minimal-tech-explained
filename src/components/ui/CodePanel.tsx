import React from "react";
import {
  BASE_COLORS,
  SEMANTIC_COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SPACING,
  COMPONENT_SPACING,
  RADIUS,
  BORDER_WIDTH,
} from "../../theme";

export interface CodePanelProps {
  code: string;
  title?: string;
  language?: string;
  width?: number | string;
  maxWidth?: number | string;
  style?: React.CSSProperties;
}

export const CodePanel: React.FC<CodePanelProps> = ({
  code,
  title,
  language,
  width,
  maxWidth,
  style,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: SEMANTIC_COLORS.terminalBackground,
        border: `${BORDER_WIDTH.hairline}px solid ${SEMANTIC_COLORS.borderDefault}`,
        borderRadius: RADIUS.md,
        overflow: "hidden",
        width,
        maxWidth,
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.45)",
        ...style,
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `${SPACING.xs}px ${COMPONENT_SPACING.terminalPadding.x}px`,
          backgroundColor: BASE_COLORS.surface,
          borderBottom: `${BORDER_WIDTH.hairline}px solid ${SEMANTIC_COLORS.borderDefault}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* Traffic lights */}
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: BASE_COLORS.error,
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: BASE_COLORS.warning,
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: BASE_COLORS.success,
              display: "inline-block",
            }}
          />
          {title && (
            <span
              style={{
                marginLeft: SPACING.xs,
                fontFamily: FONT_FAMILIES.code,
                fontSize: FONT_SIZES.badge,
                color: BASE_COLORS.muted,
                fontWeight: FONT_WEIGHTS.medium,
              }}
            >
              {title}
            </span>
          )}
        </div>

        {language && (
          <span
            style={{
              fontFamily: FONT_FAMILIES.code,
              fontSize: FONT_SIZES.badge,
              color: BASE_COLORS.muted,
              textTransform: "uppercase",
            }}
          >
            {language}
          </span>
        )}
      </div>

      {/* Code Area */}
      <pre
        style={{
          margin: 0,
          padding: `${COMPONENT_SPACING.terminalPadding.y}px ${COMPONENT_SPACING.terminalPadding.x}px`,
          fontFamily: FONT_FAMILIES.code,
          fontSize: FONT_SIZES.code,
          fontWeight: FONT_WEIGHTS.medium,
          lineHeight: LINE_HEIGHTS.relaxed,
          color: BASE_COLORS.secondary,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};
