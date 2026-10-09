---
slug: emotions-and-care-v1
lang: es
name: "EmotionsAndCareV1"
summary: "Un cliente Flutter para una app de salud mental estudiantil donde diarios, cuestionarios, citas y cartas anónimas impulsan un jardín personal y sus recompensas. Las capas por feature y el estado con Cubit/BLoC separan el progreso validado por el servidor de la animación optimista de crecimiento en móvil y web."
highlights:
  - "Las capas data, domain y presentation por feature dan a cada módulo su propio ciclo de vida de Cubit, mientras un único UICubit posee el estado transversal del jardín."
  - "El progreso validado por el servidor conserva la autoridad, pero una animación optimista hace inmediato el crecimiento y se reconcilia mediante llamadas explícitas a la API."
  - "Los stacks de paciente y especialista reutilizan diario, cuestionarios y comunidad en modos por rol, con eventos de FCM coordinando recompensas y sincronización."
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
    alt: "Jardín personal de bienestar en la aplicación Flutter Emotions and Care"
    kind: "mobile"
    caption: "Un sistema de hábitos validado por el servidor se convierte en un jardín comprensible de un vistazo."
  - src: "./images/emotions-care-overview.png"
    alt: "Vista general del jardín, comunidad y recompensas de Emotions and Care"
    kind: "desktop"
    caption: "Un solo producto conecta diarios, cuestionarios, apoyo comunitario y recompensas."
---
