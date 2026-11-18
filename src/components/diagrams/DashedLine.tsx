import React from "react";
import { SEMANTIC_COLORS } from "../../theme";
import { Point, createConnectionPath } from "./geometry";

export interface DashedLineProps {
  from: Point;
  to: Point;
  color?: string;
  strokeWidth?: number;
  dashArray?: string; // e.g. "6 6" or "8 4"
  opacity?: number;
  type?: "straight" | "orthogonal" | "curved";
  style?: React.CSSProperties;
}

export const DashedLine: React.FC<DashedLineProps> = ({
  from,
  to,
  color = SEMANTIC_COLORS.connectionLine.default,
  strokeWidth = 2,
  dashArray = "6 6",
  opacity = 0.8,
  type = "straight",
  style,
}) => {
  const pathD = createConnectionPath({ from, to, type });

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
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
