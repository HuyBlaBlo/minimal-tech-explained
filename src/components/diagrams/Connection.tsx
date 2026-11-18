import React from "react";
import {
  SEMANTIC_COLORS,
  BASE_COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
} from "../../theme";
import { Point, createConnectionPath } from "./geometry";

export type ConnectionState = "default" | "active" | "success" | "error" | "warning";

export interface ConnectionProps {
  from: Point;
  to: Point;
  label?: string;
  labelOffset?: { x?: number; y?: number };
  state?: ConnectionState;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
  arrowhead?: boolean;
  type?: "straight" | "orthogonal" | "curved";
  style?: React.CSSProperties;
}

export const Connection: React.FC<ConnectionProps> = ({
  from,
  to,
  label,
  labelOffset,
  state = "default",
  color,
  strokeWidth = 2,
  dashed = false,
  arrowhead = true,
  type = "straight",
  style,
}) => {
  const markerId = React.useId();

  // Resolve color from state or explicit override
  let resolvedColor = color || SEMANTIC_COLORS.connectionLine.default;
  if (!color) {
    switch (state) {
      case "active":
        resolvedColor = SEMANTIC_COLORS.connectionLine.active;
        break;
      case "success":
        resolvedColor = BASE_COLORS.success;
        break;
      case "error":
        resolvedColor = BASE_COLORS.error;
        break;
      case "warning":
        resolvedColor = BASE_COLORS.warning;
        break;
      case "default":
      default:
        resolvedColor = SEMANTIC_COLORS.connectionLine.default;
        break;
    }
  }

  const pathD = createConnectionPath({ from, to, type });

  // Calculate midpoint for label
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
        ...style,
      }}
    >
      <defs>
        {arrowhead && (
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={resolvedColor} />
          </marker>
        )}
      </defs>

      {/* Main wire */}
      <path
        d={pathD}
        fill="none"
        stroke={resolvedColor}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6 6" : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={arrowhead ? `url(#${markerId})` : undefined}
      />

      {/* Optional Mid-wire Badge/Label with enhanced mobile readability */}
      {label && (
        <g transform={`translate(${midX + (labelOffset?.x ?? 0)}, ${midY + (labelOffset?.y ?? 0)})`}>
          <rect
            x={-(label.length * 5.2 + 14)}
            y={-15}
            width={label.length * 10.4 + 28}
            height={30}
            rx={6}
            fill={BASE_COLORS.surfaceHover}
            stroke={resolvedColor}
            strokeWidth={1.5}
            style={{
              filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))",
            }}
          />
          <text
            x={0}
            y={4}
            textAnchor="middle"
            fill={BASE_COLORS.text}
            fontFamily={FONT_FAMILIES.code}
            fontSize={FONT_SIZES.label - 2}
            fontWeight={FONT_WEIGHTS.bold}
            letterSpacing="0.03em"
          >
            {label}
          </text>
        </g>
      )}
    </svg>
  );
};
