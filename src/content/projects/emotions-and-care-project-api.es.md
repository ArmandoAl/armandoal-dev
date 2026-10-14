---
slug: emotions-and-care-project-api
lang: es
name: "EmotionsAndCareProjectApi"
summary: "Una API REST para una app de acompañamiento emocional que conecta pacientes y especialistas, registra diarios y cuestionarios, y convierte la adherencia en un jardín con recompensas coleccionables. ASP.NET Core separa controllers, servicios de negocio, repositorios y modelos de dominio; los requisitos de cada etapa viven como datos y se ejecutan mediante estrategias de validación con nombre."
highlights:
  - "El crecimiento del jardín se valida en el servidor a partir de requisitos configurados como datos; estrategias con nombre agregan criterios sin hacer crecer un switch central."
  - "Las primeras acciones devuelven su logro y sticker en la misma respuesta, y la escritura del diario se revierte si la recompensa no puede persistirse."
  - "Las capas de dominio, datos, negocio y HTTP separan persistencia de reglas de progreso, mientras payloads tipados de Firebase llevan al cliente al módulo correcto."
repoUrl: "https://github.com/ArmandoAl/EmotionsAndCareProjectApi"
language: "C#"
stack:
  - "C#"
  - "ASP.NET Core 6"
  - "Entity Framework Core 6"
  - "SQL Server"
  - "Firebase Admin SDK"
  - "REST"
stars: 0
order: 2
gallery:
  - src: "./images/emotions-care-overview.png"
    alt: "Vista general del producto de acompañamiento emocional respaldado por la API"
    kind: "desktop"
    caption: "La API coordina los flujos de jardín, comunidad y recompensas mostrados en el cliente."
  - src: "./images/emotions-care-collection.png"
    alt: "Plantas y recompensas coleccionables entregadas por la API de progresión"
    kind: "desktop"
    caption: "Los hitos validados por el servidor desbloquean la colección mostrada en el cliente Flutter."
---
