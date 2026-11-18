# Channel Brief — Minimal Tech Explainer

## Channel identity

- **Format:** Faceless English-language educational videos using original diagrams and motion graphics.
- **Topics:** System Design, Backend Engineering, Networking, Databases, Distributed Systems and Cloud Computing.
- **Audience:** Software engineering students, beginner/junior developers and curious developers learning how systems work.
- **Target length:** 3–5 minutes per video; confirm the actual duration against recorded narration.
- **Output:** 1920 × 1080, 16:9, 30 FPS.
- **Tone:** Clear, calm, practical and accurate. No filler, exaggerated claims or unnecessary jargon.

## Content pillars

| Pillar | Examples |
|---|---|
| System Design | Load balancing, caching, rate limiting, high availability |
| Backend | API gateways, message queues, service communication |
| Networking | DNS, HTTP, TCP, TLS, WebSockets |
| Databases | Indexes, replication, transactions, isolation |
| Distributed Systems | Consistency, failure handling, partitioning |
| Cloud | Containers, basic infrastructure, observability |

## Narrative structure

Each video answers **one central question** and leaves viewers with **two or three key takeaways**.

1. **Hook:** Show an interesting problem or practical question.
2. **Problem:** Explain why the simplest approach has a limitation.
3. **Mechanism:** Introduce the solution using a clear technical diagram.
4. **Request flow:** Show what happens step by step, including the response where relevant.
5. **Trade-offs:** Explain one important limitation or failure case.
6. **Takeaway:** Summarize the system in plain English.

Combine or split scenes as needed. Do not force six scenes when a topic is clearer with fewer.

## Writing rules

- Prefer short, natural English sentences and concrete examples.
- Explain a new technical term the first time it appears.
- Use an initial **350–500-word script** as a planning guideline, not a strict duration guarantee. Adjust the script and pauses after a voice test.
- Base important technical claims on verifiable documentation (official docs, RFCs or reliable engineering sources).
- Distinguish general principles from product-specific implementations.
- Do not invent benchmarks, percentages, failure rates or quotes.
- Use fictional service names, IP addresses and metrics as clearly illustrative examples, never as real-world evidence.

## Visual storytelling rules

- Prefer one clear diagram over a dense slide full of text.
- Make arrows, packet movement, labels and failure states technically meaningful.
- Introduce information progressively; do not animate everything simultaneously.
- Optimize readability for phones, not only a full-size desktop preview.
- Follow [STYLE_GUIDE.md](STYLE_GUIDE.md) and [ANIMATION_GUIDE.md](ANIMATION_GUIDE.md).

## Quality standard

A video is ready when a beginner can explain the main mechanism after watching, the technical facts have been checked, the English narration is understandable, the motion matches the narration, and the final exported video has passed QA.
