# Style Guide — Minimalist Tech Explainer

Use this guide for all compositions, scenes, diagrams, titles, UI panels and thumbnails. Reuse the tokens defined in `src/theme/`; do not duplicate values in components.

## Canvas and layout

- Production canvas: **1920 × 1080**, **30 FPS**, **16:9**.
- Safe margins: **80px horizontal** and **60px vertical**, as defined by `LAYOUT.safeZone` in `src/theme/layout.ts`.
- Maintain consistent visual alignment and gaps. Keep labels, nodes, packets and arrowheads inside their containers.
- Prefer left-to-right layouts for request flows; use top-to-bottom layouts for hierarchy or secondary paths.
- Empty space is useful for focus, but avoid large unexplained dead zones in final video scenes.

## Color palette

All values below are defined in `src/theme/colors.ts`.

| Token | Hex | Use |
|---|---|---|
| `BASE_COLORS.background` | `#0B171A` | Main canvas |
| `BASE_COLORS.surface` | `#14272B` | Cards and nodes |
| `BASE_COLORS.surfaceHover` | `#1E383E` | Raised / highlighted surfaces |
| `BASE_COLORS.surfaceSubtle` | `#0F1F23` | Code / terminal surfaces |
| `BASE_COLORS.primary` | `#7DE3D1` | Primary request flow, active highlights |
| `BASE_COLORS.secondary` | `#8CA8FF` | Clients, networking, secondary flows |
| `BASE_COLORS.accent` | `#B79AF7` | Databases and storage concepts |
| `BASE_COLORS.text` | `#F2F5F5` | Primary text |
| `BASE_COLORS.muted` | `#9BAEB0` | Secondary information |
| `BASE_COLORS.success` | `#8BE0A7` | Healthy / success |
| `BASE_COLORS.warning` | `#F5C063` | Warning / overload |
| `BASE_COLORS.error` | `#F07878` | Failure / dropped requests |

Use `SEMANTIC_COLORS` for borders, node types, status indicators, connections and packets rather than manually assigning unrelated colors. Reserve bright colors for the information viewers should notice.

## Typography

- **Inter:** scene titles, subtitles, body, card names.
- **JetBrains Mono:** commands, code, IP addresses, protocol labels, metrics.
- Fonts are loaded through `src/theme/fonts.ts` using `@remotion/google-fonts`; import and reuse `FONT_FAMILIES` / `TYPOGRAPHY_PRESETS`.
- Use the configured `FONT_SIZES` as defaults: scene title 56px, heading 44px, subheading 36px, body 24px, label 18px, code 20px, badge 14px.
- Use fewer words on screen. Avoid tiny fonts for essential information; enlarge important connection labels when necessary.
- Test at reduced playback size to approximate mobile viewing.

## Components and diagrams

- Reuse existing `SceneTitle`, `Label`, `InfoCard`, `Badge`, `CodePanel`, node, connection, packet and effect components.
- Diagram nodes: dark rounded card, semantic border, recognizable icon, short title, optional secondary line.
- Keep connections attached to **node boundaries**, not through the centers of nodes or text.
- Arrowheads should clearly indicate request versus response direction. Labels must not cover paths or moving packets.
- For error flows, show **where the failure occurs** and **what happens to the response**, not only a red border.
- Use restrained glows/shadows; effects must not obscure text.
- The diagram can evolve between scenes, but preserve node identities and colors so viewers can follow it.

## Code and terminal panels

- Use a dark surface with high-contrast JetBrains Mono.
- Preserve indentation and whitespace.
- Show only the lines needed for the current explanation.
- Prefer original example code or carefully attributed snippets; never fabricate a real command/output as factual evidence.

## Thumbnail direction

- 1280 × 720, 16:9; one simple visual idea with a clear focal point.
- High contrast and limited text (ideally 2–4 words, if any).
- Match the channel palette, but thumbnail legibility takes priority over exact in-video layout.
- Use original diagrams and properly licensed assets.

## Visual acceptance check

Before approving a scene: verify typography, safe zones, spacing, node geometry, arrow direction, packet alignment, contrast, clipping, and mobile readability. Always inspect the rendered MP4 before publishing.
