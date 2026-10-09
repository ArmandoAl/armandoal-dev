---
slug: ai-fit
lang: en
name: "AI-Fit"
summary: "An AI-assisted fashion atelier that models a user's own wardrobe as semantic garment data, composes outfits, and generates identity-aware virtual try-ons. A Flutter client orchestrates a staged pipeline across local ranking, structured intent, multimodal Gemini models, and image compression with platform-specific concurrency."
highlights:
  - "A four-stage pipeline separates conversation, structured intent, local wardrobe ranking, multimodal composition, and image generation instead of asking one model to solve everything."
  - "Garment metadata prefilters the wardrobe before inference, limiting each multimodal request to the most relevant images and delivering outfit suggestions before background try-on completes."
  - "Image processing uses isolates on native platforms but avoids buffer-copy overhead on web, with separate concurrency limits, a session cache, and payload-specific compression."
  - "An identity pipeline combines face and body references into a reusable base image so generated looks preserve the person rather than use a generic mannequin."
repoUrl: "https://github.com/ArmandoAl/AI-Fit"
homepageUrl: "https://aifit-a7f6b.web.app"
language: "Dart"
stack:
  - "Flutter"
  - "Dart"
  - "BLoC"
  - "Cloud Firestore"
  - "Firebase Storage"
  - "Vertex AI"
  - "OpenAI"
  - "DeepSeek"
stars: 0
order: 4
gallery:
  - src: "./images/ai-fit-armario.png"
    alt: "AI-Fit wardrobe screen"
    kind: "mobile"
    caption: "The wardrobe becomes structured input for local ranking and multimodal models."
  - src: "./images/ai-fit-outfits.png"
    alt: "AI-Fit saved outfits screen"
    kind: "mobile"
    caption: "Generated looks are persisted while try-on work continues in the background."
  - src: "./images/ai-fit-outfit-detalle.png"
    alt: "AI-Fit outfit detail screen"
    kind: "mobile"
    caption: "Each result keeps the selected garments and match rationale inspectable."
---
