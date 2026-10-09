---
slug: ai-fit
lang: es
name: "AI-Fit"
summary: "Un atelier de moda con IA que modela el armario real de una persona como datos semánticos de prendas, compone outfits y genera pruebas virtuales conscientes de su identidad. Un cliente Flutter orquesta un pipeline por etapas con ranking local, intención estructurada, modelos Gemini multimodales y compresión de imágenes con concurrencia específica por plataforma."
highlights:
  - "Un pipeline por etapas separa conversación, intención estructurada, ranking local del armario, composición multimodal y generación de imagen, en vez de pedirle todo a un solo modelo."
  - "La metadata de prendas prefiltra el armario antes de inferencia, limita cada request multimodal a las imágenes relevantes y entrega propuestas antes de terminar el try-on en segundo plano."
  - "El procesamiento usa isolates en plataformas nativas pero evita copiar buffers en web, con límites de concurrencia distintos, caché de sesión y compresión según el payload."
  - "El pipeline de identidad combina referencias de rostro y cuerpo en una imagen base reutilizable para conservar a la persona en lugar de usar un maniquí genérico."
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
    alt: "Pantalla de armario de AI-Fit"
    kind: "mobile"
    caption: "El armario se convierte en entrada estructurada para el ranking local y los modelos multimodales."
  - src: "./images/ai-fit-outfits.png"
    alt: "Pantalla de outfits guardados de AI-Fit"
    kind: "mobile"
    caption: "Los looks se persisten mientras el try-on continúa en segundo plano."
  - src: "./images/ai-fit-outfit-detalle.png"
    alt: "Pantalla de detalle de outfit de AI-Fit"
    kind: "mobile"
    caption: "Cada resultado conserva las prendas elegidas y la explicación del match."
---
