---
slug: emotions-and-care-v1
lang: en
name: "EmotionsAndCareV1"
summary: "A Flutter client for a student mental-health app where journals, questionnaires, appointments, and anonymous letters drive a personal garden and its rewards. Feature-first layers and Cubit/BLoC state separate server-validated progress from optimistic growth animation across mobile and web."
highlights:
  - "Feature-first data, domain, and presentation layers give each module its own Cubit lifecycle while one UI Cubit owns the cross-cutting garden state."
  - "Server-validated progression remains authoritative, but optimistic animation makes growth feel immediate and reconciles through explicit API calls."
  - "Patient and specialist navigation stacks reuse journals, questionnaires, and community features in role-specific modes, with FCM events coordinating rewards and sync."
repoUrl: "https://github.com/ArmandoAl/EmotionsAndCareV1"
language: "JavaScript"
stack:
  - "Flutter 3"
  - "Dart 3.4"
  - "flutter_bloc"
  - "GetIt"
  - "Firebase Messaging"
  - "SharedPreferences"
  - "Lottie"
stars: 1
order: 3
gallery:
  - src: "./images/emotions-care-garden.png"
    alt: "Personal wellbeing garden in the Emotions and Care Flutter app"
    kind: "mobile"
    caption: "A server-validated habit system becomes a garden the student can understand at a glance."
  - src: "./images/emotions-care-overview.png"
    alt: "Overview of the Emotions and Care garden, community and rewards"
    kind: "desktop"
    caption: "One product connects journals, questionnaires, community support and rewards."
---
