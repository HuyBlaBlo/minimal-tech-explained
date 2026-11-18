import React from "react";
import { SEMANTIC_COLORS } from "../../theme";
import { Point, createConnectionPath } from "./geometry";

export interface ArrowProps {
  from: Point;
  to: Point;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  arrowhead?: boolean;
  arrowheadSize?: number;
  type?: "straight" | "orthogonal" | "curved";
  style?: React.CSSProperties;
}

export const Arrow: React.FC<ArrowProps> = ({
  from,
  to,
  color = SEMANTIC_COLORS.connectionLine.default,
  strokeWidth = 2,
  opacity = 1,
  arrowhead = true,
  arrowheadSize = 8,
  type = "straight",
  style,
}) => {
  const pathD = createConnectionPath({ from, to, type });
  const markerId = React.useId();

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
        opacity,
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
            markerWidth={arrowheadSize}
            markerHeight={arrowheadSize}
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={color} />
          </marker>
        )}
      </defs>

      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={arrowhead ? `url(#${markerId})` : undefined}
      />
    </svg>
  );
};
