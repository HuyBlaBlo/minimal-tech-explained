import React from "react";
import { useCurrentFrame, useVideoConfig, spring, SpringConfig } from "remotion";
import {
  BASE_COLORS,
  SPRING_PRESETS,
  getLinearProgress,
} from "../../theme";

// -----------------------------------------------------------------------------
// 1. FadeIn
// -----------------------------------------------------------------------------
export interface FadeInProps {
  children: React.ReactNode;
  startFrame?: number;
  durationInFrames?: number;
  translateY?: number;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  startFrame = 0,
  durationInFrames = 15,
  translateY = 0,
  style,
}) => {
  const frame = useCurrentFrame();

  const progress = getLinearProgress({
    frame,
    startFrame,
    durationInFrames,
  });

  const currentY = (1 - progress) * translateY;

  return (
    <div
      style={{
        opacity: progress,
        transform: translateY !== 0 ? `translate3d(0, ${currentY}px, 0)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// -----------------------------------------------------------------------------
// 2. FadeOut
// -----------------------------------------------------------------------------
export interface FadeOutProps {
  children: React.ReactNode;
  startFrame: number;
  durationInFrames?: number;
  translateY?: number;
  style?: React.CSSProperties;
}

export const FadeOut: React.FC<FadeOutProps> = ({
  children,
  startFrame,
  durationInFrames = 15,
  translateY = 0,
  style,
}) => {
  const frame = useCurrentFrame();

  const progress = getLinearProgress({
    frame,
    startFrame,
    durationInFrames,
  });

  const opacity = 1 - progress;
  const currentY = progress * translateY;

  // Fully hide and disable pointer events when fade-out finishes
  if (opacity <= 0.001) {
    return (
      <div
        style={{
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      style={{
        opacity,
        transform: translateY !== 0 ? `translate3d(0, ${currentY}px, 0)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// -----------------------------------------------------------------------------
// 3. ScaleIn
// -----------------------------------------------------------------------------
export interface ScaleInProps {
  children: React.ReactNode;
  startFrame?: number;
  initialScale?: number;
  config?: SpringConfig;
  style?: React.CSSProperties;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  startFrame = 0,
  initialScale = 0.8,
  config = SPRING_PRESETS.snappy,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - startFrame,
    fps,
    config,
  });

  const scale = initialScale + progress * (1 - initialScale);
  const opacity = Math.min(1, Math.max(0, progress));

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// -----------------------------------------------------------------------------
// 4. Pulse
// -----------------------------------------------------------------------------
export interface PulseProps {
  children: React.ReactNode;
  intensity?: number; // e.g. 0.04 for a 4% subtle breathing scale
  speedMultiplier?: number; // 1 = 1Hz (1 cycle per second)
  startFrame?: number;
  durationInFrames?: number; // If set, only pulses during this window
  style?: React.CSSProperties;
}

export const Pulse: React.FC<PulseProps> = ({
  children,
  intensity = 0.04,
  speedMultiplier = 1,
  startFrame = 0,
  durationInFrames,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const elapsed = frame - startFrame;
  const isActive = elapsed >= 0 && (durationInFrames === undefined || elapsed <= durationInFrames);

  const scale = isActive
    ? 1 + intensity * Math.sin(((elapsed / fps) * speedMultiplier) * Math.PI * 2)
    : 1;

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// -----------------------------------------------------------------------------
// 5. Glow
// -----------------------------------------------------------------------------
export interface GlowProps {
  children: React.ReactNode;
  color?: string;
  radius?: number; // blur radius in px
  startFrame?: number;
  durationInFrames?: number;
  intensity?: number;
  pulseGlow?: boolean;
  style?: React.CSSProperties;
}

export const Glow: React.FC<GlowProps> = ({
  children,
  color = BASE_COLORS.primary,
  radius = 24,
  startFrame = 0,
  durationInFrames,
  intensity = 0.5,
  pulseGlow = true,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const elapsed = frame - startFrame;
  const isActive = elapsed >= 0 && (durationInFrames === undefined || elapsed <= durationInFrames);

  let currentOpacity = 0;
  if (isActive) {
    if (pulseGlow) {
      const wave = (Math.sin(((elapsed / fps) * 1.5) * Math.PI * 2) + 1) / 2; // 0 to 1
      currentOpacity = intensity * (0.6 + wave * 0.4);
    } else {
      currentOpacity = intensity;
    }
  }

  return (
    <div
      style={{
        filter: currentOpacity > 0 ? `drop-shadow(0 0 ${radius}px ${color}${Math.round(currentOpacity * 255).toString(16).padStart(2, "0")})` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// -----------------------------------------------------------------------------
// 6. Shake
// -----------------------------------------------------------------------------
export interface ShakeProps {
  children: React.ReactNode;
  startFrame?: number;
  durationInFrames?: number;
  amplitude?: number; // max horizontal displacement in px
  frequency?: number; // how rapid the shake is
  style?: React.CSSProperties;
}

export const Shake: React.FC<ShakeProps> = ({
  children,
  startFrame = 0,
  durationInFrames = 20,
  amplitude = 10,
  frequency = 2,
  style,
}) => {
  const frame = useCurrentFrame();

  const elapsed = frame - startFrame;
  let offsetX = 0;

  if (elapsed >= 0 && elapsed <= durationInFrames) {
    // Damping factor: decay from 1 down to 0 over duration
    const decay = 1 - elapsed / durationInFrames;
    offsetX = Math.sin(elapsed * frequency) * amplitude * decay;
  }

  return (
    <div
      style={{
        transform: offsetX !== 0 ? `translate3d(${offsetX}px, 0, 0)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// -----------------------------------------------------------------------------
// 7. Highlight
// -----------------------------------------------------------------------------
export interface HighlightProps {
  children: React.ReactNode;
  startFrame?: number;
  durationInFrames?: number;
  color?: string; // Border or halo color
  borderWidth?: number;
  borderRadius?: number;
  style?: React.CSSProperties;
}

export const Highlight: React.FC<HighlightProps> = ({
  children,
  startFrame = 0,
  durationInFrames = 30,
  color = BASE_COLORS.warning,
  borderWidth = 2,
  borderRadius = 14,
  style,
}) => {
  const frame = useCurrentFrame();

  const elapsed = frame - startFrame;
  const progress = getLinearProgress({
    frame,
    startFrame,
    durationInFrames: Math.min(10, durationInFrames), // Quick entrance
  });

  // Calculate pulse or glow alpha
  const isWithin = elapsed >= 0 && elapsed <= durationInFrames;
  const opacity = isWithin ? progress : 0;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        ...style,
      }}
    >
      {children}
      {opacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: -4,
            border: `${borderWidth}px solid ${color}`,
            borderRadius,
            boxShadow: `0 0 16px ${color}60`,
            opacity,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};
