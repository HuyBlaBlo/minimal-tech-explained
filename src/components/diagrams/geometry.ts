/**
 * Path and geometry utilities for node-to-node connections and data packet flows.
 */

export interface Point {
  x: number;
  y: number;
}

export interface NodeRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type ConnectionAnchor = "top" | "bottom" | "left" | "right" | "center";

/**
 * Calculates the exact boundary anchor point for a rectangular node.
 */
export const getNodeAnchor = (rect: NodeRect, anchor: ConnectionAnchor): Point => {
  switch (anchor) {
    case "top":
      return { x: rect.x + rect.width / 2, y: rect.y };
    case "bottom":
      return { x: rect.x + rect.width / 2, y: rect.y + rect.height };
    case "left":
      return { x: rect.x, y: rect.y + rect.height / 2 };
    case "right":
      return { x: rect.x + rect.width, y: rect.y + rect.height / 2 };
    case "center":
    default:
      return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
  }
};

/**
 * Generates an SVG path string between two points.
 * - straight: direct line
 * - orthogonal: right-angled routing with middle corner break
 * - curved: smooth cubic bezier
 */
export const createConnectionPath = ({
  from,
  to,
  type = "straight",
}: {
  from: Point;
  to: Point;
  type?: "straight" | "orthogonal" | "curved";
  radius?: number;
}): string => {
  if (type === "straight") {
    return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  }

  if (type === "curved") {
    const dx = to.x - from.x;
    const cp1x = from.x + dx * 0.5;
    const cp1y = from.y;
    const cp2x = from.x + dx * 0.5;
    const cp2y = to.y;
    return `M ${from.x} ${from.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`;
  }

  // Orthogonal (Z / S shaped routing)
  const midX = (from.x + to.x) / 2;
  const isHorizontalFirst = Math.abs(to.x - from.x) >= Math.abs(to.y - from.y);

  if (isHorizontalFirst) {
    if (Math.abs(from.y - to.y) < 1) {
      return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
    }
    // H -> V -> H
    return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
  } else {
    // V -> H -> V
    const midY = (from.y + to.y) / 2;
    if (Math.abs(from.x - to.x) < 1) {
      return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
    }
    return `M ${from.x} ${from.y} L ${from.x} ${midY} L ${to.x} ${midY} L ${to.x} ${to.y}`;
  }
};
