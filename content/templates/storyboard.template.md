# Storyboard: [Topic Name]

- **Resolution**: 1920 × 1080
- **FPS**: 30
- **Total Estimated Frames**: ~7200 frames (4 minutes @ 30 FPS)

---

## Scene Timeline

### Scene 1: Problem Hook
- **Frame Range**: `0` – `1050` (0s – 35s)
- **Layout**: Centered single service card with incoming packet stream.
- **Components Used**: `Client`, `Server`, `AnimatedArrow`, `Packet`.
- **Key Animations**:
  - `f 0 - 30`: Client and Server enter with `snappy` spring.
  - `f 30 - 300`: Normal green packet stream flows at 20 frames/hop.
  - `f 300 - 450`: Packet rate quadruples; Server border interpolates to `#F07878` (error red).
  - `f 450 - 550`: Error badge pop-in (`503 Service Unavailable`).

---

### Scene 2: Naive Solution
- **Frame Range**: `1050` – `2250` (35s – 75s)
- **Layout**: Split 2-node cluster with naive distributor.
- **Components Used**: `Client`, `Server` (x2), `Arrow`, `InfoCard`.
- **Key Animations**:
  - `f 1050 - 1100`: Canvas transitions via `<TransitionSeries.Fade>`.
  - `f 1100 - 1400`: Show uneven hash distribution, one node overheating.

---

### Scene 3: Core Mechanism Deep Dive
- **Frame Range**: `2250` – `4950` (75s – 165s)
- **Layout**: Master diagram layout (Client ➔ LoadBalancer ➔ 3x Worker Nodes + Redis Cache).
- **Components Used**: `Client`, `LoadBalancer`, `Server` (x3), `Cache`, `AnimatedArrow`, `Packet`.
- **Key Animations**:
  - Step-by-step introduction of virtual slots/consistent ring or token bucket refill.
  - Smooth camera zoom into single worker node state.

---

### Scene 4: Trade-off Comparison
- **Frame Range**: `4950` – `6750` (165s – 225s)
- **Layout**: 2-column comparative layout or metrics panel.
- **Components Used**: `InfoCard` (x2), `TerminalWindow`, metrics bar graphs.

---

### Scene 5: Outro & Recap
- **Frame Range**: `6750` – `7200` (225s – 240s)
- **Layout**: Centered architecture diagram with 3 takeaway cards below.
- **Components Used**: `SceneTitle`, `InfoCard` (x3).
