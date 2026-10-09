---
slug: sophia
lang: en
name: "Sophia"
summary: "A personal assistant that learns from approvals, corrections, and rejections, distilling those decisions into beliefs that guide future actions. A Go API centralizes authorization over Firestore, while daily synthesis rebuilds a bounded prompt and an explainable confidence engine limits autonomy to reversible actions."
highlights:
  - "The Flutter client never accesses Firestore directly: a Go API owns authorization and production repositories, while matching in-memory repositories keep 35 test packages independent from the network."
  - "A decision-only learning loop turns approvals, corrections, and rejections into versioned beliefs with confidence ceilings, contradiction weighting, and time decay."
  - "Daily synthesis rebuilds the base prompt from scratch under a 1,000-token ceiling; deterministic job records make retries idempotent."
  - "An explainable confidence engine grants autonomy only to reversible actions, while users can inspect, correct, or retire every belief."
repoUrl: "https://github.com/ArmandoAl/Sophia"
language: "Go"
stack:
  - "Go"
  - "Flutter"
  - "Dart"
  - "Firestore"
  - "DeepSeek"
  - "Vertex AI"
  - "Cloud Run"
stars: 0
order: 1
gallery:
  - src: "./images/sophia-chat.png"
    alt: "Sophia assistant conversation screen"
    kind: "mobile"
    caption: "Proposals stay visible and require an explicit decision."
  - src: "./images/sophia-diagnostico.png"
    alt: "Sophia diagnostics and learning screen"
    kind: "mobile"
    caption: "The user can inspect what the assistant has learned."
  - src: "./images/sophia-privacidad.png"
    alt: "Sophia privacy controls screen"
    kind: "mobile"
    caption: "Privacy controls make learned beliefs reversible."
---
