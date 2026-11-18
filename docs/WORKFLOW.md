# Production Workflow: From Ideation to YouTube Upload

This document details the step-by-step lifecycle for producing a single video in the **Minimal Tech Explainer** channel.

---

## 1. Directory Lifecycle
Every episode lives in its own dedicated directory inside `content/`:
```
content/
└── 001-load-balancing-algorithms/
    ├── research.md       # Core engineering facts, citations, RFCs
    ├── script.md         # Voiceover script with visual cues & timestamps
    ├── storyboard.md     # Scene-by-scene diagram layouts & asset requirements
    ├── metadata.md       # YouTube Title, Description, Tags, Chapter Timestamps
    ├── voice/            # Rendered voiceover audio files (WAV/MP3)
    └── assets/           # Any episode-specific static SVGs or benchmark data
```

---

## 2. The 6-Step Production Stages

### Stage 1: Research & Outline (`research.md`)
1. Define the specific technical challenge (e.g., "Consistent Hashing with Virtual Nodes").
2. Clarify the 3 key takeaways the viewer must retain.
3. Verify accuracy against official documentation, RFCs, or engineering blog posts (AWS, Netflix, Google, Cloudflare).

### Stage 2: Scriptwriting & Voiceover (`script.md`)
1. Write the voiceover script using the template in `content/templates/script.template.md`.
2. Format: Two columns or synchronized blocks containing **Spoken Words** and **Visual Directives**.
3. Target word count: 450 – 650 words (~3 to 4.5 minutes at 140 WPM).
4. Generate the audio track (TTS API or human voiceover) and save to `content/<episode-slug>/voice/voiceover.mp3`.

### Stage 3: Storyboarding & Scene Breakdown (`storyboard.md`)
1. Map out scene timings matching the voiceover audio markers (in exact seconds and frames at 30 FPS).
2. Detail layout coordinates, diagram nodes required, and data flows.
3. Identify whether new reusable components are needed (if so, build them in `src/components/` and test in `ComponentShowcase`).

### Stage 4: Composition Assembly (`src/compositions/<Episode>/`)
1. Create the episode master composition under `src/compositions/<Episode>/index.tsx`.
2. Break into modular scenes inside `src/compositions/<Episode>/scenes/`.
3. Synchronize transitions using Remotion's `<Series>` or `<TransitionSeries>`.
4. Import voiceover using `<Audio src={staticFile('...')} />`.
5. Run `npm run dev` to preview in Remotion Studio and fine-tune spring physics and timing.

### Stage 5: Quality Assurance & Studio Validation
1. Verify safe zones (no text cut off at screen edges).
2. Check color contrast ratios against `#0B171A`.
3. Ensure no sudden visual frame drops or overlapping un-eased animations.
4. Verify audio/visual synchronization (the diagram node appears right as the speaker introduces it).

### Stage 6: Rendering & Publishing
1. Render full video:
   ```bash
   npx remotion render src/index.ts <CompositionId> out/<episode-slug>.mp4 --gl=angle
   ```
2. Render thumbnail still:
   ```bash
   npx remotion still src/index.ts <CompositionId> out/<episode-slug>-thumb.png --frame=<best-frame>
   ```
3. Prepare metadata using `content/<episode-slug>/metadata.md` for YouTube upload.
