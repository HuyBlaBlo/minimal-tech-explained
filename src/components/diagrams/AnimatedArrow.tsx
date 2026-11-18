import React from "react";
import { useCurrentFrame } from "remotion";
import { evolvePath } from "@remotion/paths";
import { SEMANTIC_COLORS, getLinearProgress } from "../../theme";
import { Point, createConnectionPath } from "./geometry";

export interface AnimatedArrowProps {
  from: Point;
  to: Point;
  startFrame?: number;
  durationInFrames?: number;
  color?: string;
  strokeWidth?: number;
  reverse?: boolean;
  arrowhead?: boolean;
  arrowheadSize?: number;
  type?: "straight" | "orthogonal" | "curved";
  style?: React.CSSProperties;
}

export const AnimatedArrow: React.FC<AnimatedArrowProps> = ({
  from,
  to,
  startFrame = 0,
  durationInFrames = 20,
  color = SEMANTIC_COLORS.connectionLine.active,
  strokeWidth = 2.5,
  reverse = false,
  arrowhead = true,
  arrowheadSize = 8,
  type = "straight",
  style,
}) => {
  const frame = useCurrentFrame();
  const markerId = React.useId();

  // Deterministic progress calculation [0, 1]
  const progress = getLinearProgress({
    frame,
    startFrame,
    durationInFrames,
  });

  const pathD = createConnectionPath({ from, to, type });

  // Use evolvePath from @remotion/paths to trim and draw the path cleanly
  const strokeProgress = reverse ? 1 - progress : progress;
  const evolution = evolvePath(strokeProgress, pathD);

  // If progress is 0, do not render arrow to avoid stray dots
  if (strokeProgress <= 0.001) {
    return null;
  }

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
        strokeDasharray={evolution.strokeDasharray}
        strokeDashoffset={evolution.strokeDashoffset}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={arrowhead && strokeProgress >= 0.95 ? `url(#${markerId})` : undefined}
      />
    </svg>
  );
};
