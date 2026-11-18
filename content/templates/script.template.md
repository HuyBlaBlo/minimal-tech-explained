# Script: [Topic Name]

- **Target Duration**: ~3:30 - 4:00 (~500 words)
- **Target WPM**: ~140 words per minute
- **Voice Style**: Calm, authoritative, concise, neutral technical delivery.

---

### Scene 1: Hook & The Breakdown (0:00 - 0:35)
**Visual Cue**: *Dark canvas. Monolithic service receiving steady requests. Suddenly traffic surges 10x; server borders turn red, error counters spike.*

> **Narrator**:  
> [Write spoken voiceover here. Frame the problem immediately without preamble. Explain what fails when scale increases.]

---

### Scene 2: Naive Solution & Its Limitations (0:35 - 1:15)
**Visual Cue**: *Introduce basic mitigation (e.g., standard round robin or single cache node). Show why edge cases (hotkeys, node crashes) break the system.*

> **Narrator**:  
> [Explain why the obvious fix falls short in production.]

---

### Scene 3: The Core Mechanism (1:15 - 2:45)
**Visual Cue**: *Main animated visual sequence. Introduce components step-by-step. Animated packets flow between Client, Router/LB, and Services.*

> **Narrator**:  
> [Walk through the core algorithmic mechanics step-by-step.]

---

### Scene 4: Trade-offs & Production Reality (2:45 - 3:45)
**Visual Cue**: *Split screen or comparative matrix illustrating trade-offs (e.g. latency vs consistency, memory overhead).*

> **Narrator**:  
> [Discuss when to use this, and what engineering costs you incur.]

---

### Scene 5: Summary & Mental Model (3:45 - 4:15)
**Visual Cue**: *Clean full-architecture diagram showing the healthy state. 3 key takeaway bullet cards reveal sequentially.*

> **Narrator**:  
> [Recap the 3 core takeaways in under 30 seconds.]
