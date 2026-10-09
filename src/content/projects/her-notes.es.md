---
slug: her-notes
lang: es
name: "HerNotes"
summary: "Un diario terapéutico en Flutter para nombrar emociones y, si se desea, compartir entradas con un terapeuta. Los flujos de paciente y terapeuta convergen en una arquitectura por capas con Provider, cuyo cliente HTTP puede alternar entre la API de Azure y un almacén de demostración en memoria."
highlights:
  - "Los roles de paciente y terapeuta comparten el mismo dominio de diario, pero exponen flujos distintos de escritura, revisión, nota clínica y ejercicios."
  - "Las pantallas dependen de Providers y servicios, no de la red; un solo cliente HTTP alterna entre la API de Azure y un almacén de demostración en memoria."
  - "Un shell con navegación inferior conserva vivas las vistas principales de cada rol mediante IndexedStack, mientras las tareas enfocadas se abren como rutas apiladas."
repoUrl: "https://github.com/ArmandoAl/HerNotes"
language: "JavaScript"
stack:
  - "Flutter"
  - "Dart"
  - "Provider"
  - "Firebase"
  - "Azure REST API"
  - "SharedPreferences"
stars: 0
order: 5
gallery:
  - src: "./images/her-notes-diary.png"
    alt: "Diario del paciente en la aplicación Flutter HerNotes"
    kind: "mobile"
    caption: "El paciente puede escribir en privado y decidir qué compartir con su terapeuta."
  - src: "./images/her-notes-therapist.png"
    alt: "Lista de pacientes del terapeuta en HerNotes"
    kind: "mobile"
    caption: "Un flujo propio para terapeuta permite revisar, asignar ejercicios y dejar notas clínicas."
---
