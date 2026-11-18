import React from "react";
import { useCurrentFrame } from "remotion";
import { getPointAtLength, getLength } from "@remotion/paths";
import { SEMANTIC_COLORS } from "../../theme";
import { Point, createConnectionPath } from "./geometry";

export interface PacketProps {
  from?: Point;
  to?: Point;
  path?: string; // Predefined SVG path string (takes precedence over from/to)
  type?: "straight" | "orthogonal" | "curved";
  startFrame?: number;
  durationInFrames?: number;
  color?: string;
  size?: number;
  glow?: boolean;
  reverse?: boolean;
  loop?: boolean;
  style?: React.CSSProperties;
}

export const Packet: React.FC<PacketProps> = ({
  from,
  to,
  path,
  type = "straight",
  startFrame = 0,
  durationInFrames = 24,
  color = SEMANTIC_COLORS.packet.default,
  size = 12,
  glow = true,
  reverse = false,
  loop = false,
  style,
}) => {
  const frame = useCurrentFrame();

  const pathD = path || (from && to ? createConnectionPath({ from, to, type }) : null);

  if (!pathD) {
    return null;
  }

  const elapsed = frame - startFrame;

  if (elapsed < 0) {
    return null;
  }

  if (!loop && elapsed > durationInFrames) {
    return null;
  }

  // Calculate normalized progress [0, 1]
  const currentElapsed = loop ? elapsed % durationInFrames : Math.min(elapsed, durationInFrames);
  const rawProgress = durationInFrames > 0 ? currentElapsed / durationInFrames : 1;
  const progress = reverse ? 1 - rawProgress : rawProgress;

  // Compute position along the exact path using @remotion/paths
  const totalLength = getLength(pathD);
  const currentLength = Math.max(0, Math.min(totalLength, progress * totalLength));
  const point = getPointAtLength(pathD, currentLength);

  if (!point) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: glow ? `0 0 ${size}px ${color}, 0 0 ${size * 2}px ${color}80` : undefined,
        transform: `translate3d(${point.x - size / 2}px, ${point.y - size / 2}px, 0)`,
        pointerEvents: "none",
        zIndex: 10,
        ...style,
      }}
    />
  );
};
