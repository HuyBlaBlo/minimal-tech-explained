# Storyboard — [Video Topic]

- **Episode ID:** [NNN-topic]
- **Format:** 1920 × 1080, 30 FPS, 16:9
- **Inputs:** Approved `research.md` and `script.md`
- **Status:** Draft / Visual approved / Audio-synced

## Timeline overview

| Scene | Goal | Narration section | Start (s) | Duration (s) | Global start frame | Frames in scene |
|---|---|---|---:|---:|---:|---:|
| 01 | [Hook] | [Script section] | | | | |
| 02 | [Problem] | [Script section] | | | | |
| 03 | [Explanation] | [Script section] | | | | |
| 04 | [Flow] | [Script section] | | | | |
| 05 | [Trade-offs] | [Script section] | | | | |
| 06 | [Summary] | [Script section] | | | | |

**Timing rule:** 1 second = 30 frames. Update durations using actual narration. A frame read inside a Remotion `<Sequence>` may be local to that Sequence; do not mix it up with composition-global frames. Account for transition overlaps.

## Scene details

*Duplicate this block for each scene.*

### Scene [NN] — [Scene Name]

- **Goal:** [What viewers should understand after this scene]
- **Narration:** [Approved text or exact script section]
- **Duration:** [X seconds / Y frames]
- **Layout:** [Node positions, alignment, safe margins, visual hierarchy]
- **Reusable components:** [Actual components needed]
- **On-screen text:** [Exact brief labels]
- **Connections / packet directions:** [Source -> destination; response path]
- **Visual states:** [Default -> Active -> Success / Warning / Error]

**Animation timeline (local frames):**

| Local frame range | Visual action | Narration cue / purpose |
|---|---|---|
| 0–[N] | [Reveal a node / label] | [Spoken phrase] |
| [N]–[M] | [Animate connection / packet] | [Spoken phrase] |
| [M]–end | [Hold, highlight or transition] | [Spoken phrase] |

- **Transition:** [Cut / Fade / Slide / None]
- **Audio / SFX:** [File with license, or none]
- **Risk to check:** [Clipping / overlap / readability / incorrect logic]
- **Acceptance:** [What must be visible and understandable]

## Additional needs

| Asset / component | Already available? | Needed action | License / source |
|---|---|---|---|
| [Item] | [Yes / No] | [Reuse / Add] | [URL or original] |

## Storyboard approval

- [ ] Every scene has one clear purpose and a matching narration cue.
- [ ] Diagram behavior and error/response logic have been checked.
- [ ] On-screen text remains readable at mobile size.
- [ ] Timings can be updated after recording without redesigning everything.
- [ ] Existing Remotion components are reused wherever possible.
