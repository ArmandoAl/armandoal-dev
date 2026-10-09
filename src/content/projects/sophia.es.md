---
slug: sophia
lang: es
name: "Sophia"
summary: "Un asistente personal que aprende de aprobaciones, correcciones y rechazos, y destila esas decisiones en creencias que orientan acciones futuras. Una API en Go concentra la autorización sobre Firestore, mientras la síntesis diaria recompila un prompt acotado y un motor de confianza explicable limita la autonomía a acciones reversibles."
highlights:
  - "El cliente Flutter nunca accede directamente a Firestore: una API en Go concentra la autorización y los repositorios de producción, mientras implementaciones equivalentes en memoria mantienen 35 paquetes de pruebas sin dependencia de red."
  - "Un ciclo de aprendizaje basado solo en decisiones convierte aprobaciones, correcciones y rechazos en creencias versionadas con límites de confianza, peso de contradicción y decaimiento temporal."
  - "La síntesis diaria recompila el prompt base desde cero con un límite de 1,000 tokens; registros deterministas hacen que los reintentos sean idempotentes."
  - "Un motor de confianza explicable permite autonomía solo para acciones reversibles, y la persona puede inspeccionar, corregir o retirar cada creencia."
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
    alt: "Pantalla de conversación del asistente Sophia"
    kind: "mobile"
    caption: "Las propuestas permanecen visibles y requieren una decisión explícita."
  - src: "./images/sophia-diagnostico.png"
    alt: "Pantalla de diagnóstico y aprendizaje de Sophia"
    kind: "mobile"
    caption: "La persona puede inspeccionar lo que el asistente aprendió."
  - src: "./images/sophia-privacidad.png"
    alt: "Controles de privacidad de Sophia"
    kind: "mobile"
    caption: "Los controles de privacidad hacen reversibles las creencias aprendidas."
---
