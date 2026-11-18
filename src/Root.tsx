import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { ComponentShowcase } from "./compositions/ComponentShowcase";
import { LAYOUT } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Preserved sandbox composition */}
      <MyComposition />

      {/* Reusable Component Preview Composition (Phase 3A, 3B, 3C & 3D) */}
      <Composition
        id="ComponentShowcase"
        component={ComponentShowcase}
        durationInFrames={600}
        fps={LAYOUT.fps}
        width={LAYOUT.width}
        height={LAYOUT.height}
      />
    </>
  );
};
