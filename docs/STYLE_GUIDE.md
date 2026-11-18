# Style Guide: Minimalist Dark Technical Explainer

This document outlines the visual system, color palette, typography, and diagram standards for all Remotion video productions in this channel.

---

## 1. Design Principles
1. **Developer Dark Aesthetic**: Deep oceanic-slate backgrounds with luminous, high-contrast cyan, violet, and lavender accents.
2. **Intentional Minimalism**: Avoid superfluous decoration, heavy gradients, or visual noise. Whitespace (empty dark canvas) isolates focus.
3. **Structured Geometry**: Diagram nodes are crisp rounded cards (border radius 8px to 16px) with clean, subtle outlines.
4. **Color as Function**: Colors strictly convey semantic states (e.g., green for healthy/success, red for dropped packets/errors, cyan for incoming requests, violet for database/storage).

---

## 2. Color Palette

All color values are defined and exported in `src/theme/colors.ts`.

| Token Name | Hex Code | Description & Usage |
|---|---|---|
| `bg` | `#0B171A` | Canvas canvas background; ultra-dark slate/teal hue. |
| `surface` | `#14272B` | Card, container, and diagram node background. |
| `surfaceHover` | `#1E383E` | Highlighted cards or active step containers. |
| `border` | `#234147` | Subtle border for default nodes and dividers. |
| `borderActive` | `#7DE3D1` | Active, selected, or focused node border. |
| `primary` | `#7DE3D1` | Mint / Cyan. Used for primary flow paths, request packets, active highlights. |
| `secondary` | `#8CA8FF` | Soft Blue. Used for networking layers, clients, and protocols. |
| `accent` | `#B79AF7` | Violet / Lavender. Used for databases, storage nodes, internal state, hashing rings. |
| `text` | `#F2F5F5` | Primary text; off-white high contrast readability. |
| `muted` | `#9BAEB0` | Secondary labels, timestamps, metadata, inactive links. |
| `error` | `#F07878` | Coral Red. Dropped packets, 5xx server errors, dead nodes, bottlenecks. |
| `success` | `#8BE0A7` | Spring Green. 200 OK, healthy clusters, quorum achieved, cache hit. |
| `warning` | `#F5C063` | Amber. Throttled requests, degrading state, high load alerts. |

### Color Rules:
- The background (`#0B171A`) must remain consistent across all videos.
- Never use pure black (`#000000`) or pure white (`#FFFFFF`).
- High-visibility accents (`primary`, `secondary`, `accent`) should account for no more than 10–15% of screen area at any given moment to preserve visual focus.

---

## 3. Typography

| Role | Font Family | Weight | Recommended Size (1080p) | Line Height |
|---|---|---|---|---|
| **Scene Title** | `Inter`, sans-serif | 700 (Bold) | 52px – 64px | 1.1 |
| **Section Header** | `Inter`, sans-serif | 600 (SemiBold) | 36px – 44px | 1.2 |
| **Body / Explainer** | `Inter`, sans-serif | 400 / 500 (Medium) | 24px – 28px | 1.4 |
| **Node Label** | `Inter`, sans-serif | 600 (SemiBold) | 20px – 24px | 1.2 |
| **Code / Metrics / Hash** | `JetBrains Mono`, monospace | 500 / 700 | 18px – 24px | 1.4 |
| **Badge / Tag** | `JetBrains Mono`, monospace | 600 (SemiBold) | 14px – 16px | 1.0 |

*Note: If local system fonts are not bundled, clean Google Fonts / Web font fallbacks (`monospace`, `sans-serif`) must gracefully maintain layout dimensions without reflow.*

---

## 4. UI & Diagram Components

### A. Diagram Nodes (Client, Server, Database, Cache, Load Balancer)
- **Border**: `1.5px` or `2px` solid `#234147`.
- **Corner Radius**: `12px`.
- **Background**: `#14272B`.
- **Shadow / Glow**: Subtle inner glow or diffuse drop-shadow (`0 8px 24px rgba(0, 0, 0, 0.4)`). Active nodes emit a faint colored glow (`box-shadow: 0 0 20px rgba(125, 227, 209, 0.25)`).
- **Padding**: `16px 24px` standard.
- **Node Anatomy**:
  - Top row: Semantic Icon + Node Type Badge (`LB`, `DB`, `SRV-01`).
  - Center: Entity Name / Title.
  - Optional footer: State, IP address, or active connection metric in `JetBrains Mono`.

### B. Connection Lines & Animated Arrows
- **Default Wire**: `2px` dashed or solid `#234147`.
- **Active Transmission**: `2px` or `3px` solid `#7DE3D1` or `#8CA8FF`.
- **Packet Flow**: Small pills or glowing dots (`width: 12px, height: 12px`, border-radius 50%) traveling along paths from source to target.

### C. Terminal / Code Windows
- **Header**: Minimal 3 dots (`#F07878`, `#F5C063`, `#8BE0A7`) or window title.
- **Background**: `#0F1D21` (slightly darker than standard cards).
- **Border**: `1px solid #234147`.
- **Syntax Highlighting**: Restricted to palette tokens (`#7DE3D1` for keywords, `#8CA8FF` for functions/variables, `#B79AF7` for types/strings, `#9BAEB0` for comments).

---

## 5. Composition Layout Grids
- **Canvas Size**: 1920 × 1080.
- **Safe Zone**: 80px horizontal and vertical padding. No critical diagram nodes or subtitles should touch the outer 80px boundary.
- **Alignment**: Central-anchored flow (e.g. Left-to-Right dataflow: Client ➔ Gateway ➔ Services ➔ Database) or Top-to-Bottom hierarchy.
