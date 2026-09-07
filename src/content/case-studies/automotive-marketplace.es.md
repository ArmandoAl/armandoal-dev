---
slug: automotive-marketplace
translationKey: automotive-marketplace
lang: es
title: "Migrar 7 años de código nativo a Flutter — sin detener el roadmap"
client: "Plataforma de marketplace automotriz (bajo NDA)"
role: "Flutter Developer / Mobile Lead"
period: "Mayo 2024 – Actualidad"
summary: "Unifiqué una base de código Android e iOS con siete años de historia en una sola aplicación Flutter durante 14 meses, entregando siete módulos de producto nuevos en paralelo para que el negocio nunca tuviera que dejar de liberar funcionalidades."
context: "El cliente opera una plataforma de marketplace automotriz que usan alrededor de 700 personas en múltiples agencias de autos en Latinoamérica. Su producto móvil llevaba siete años en desarrollo continuo como dos bases de código nativas completamente separadas: Java en Android y Objective-C en iOS."
problem: "Dos bases de código independientes significaban que cada funcionalidad se diseñaba, construía, probaba y depuraba dos veces — y con el tiempo se habían separado, así que la misma pantalla se comportaba distinto según el dispositivo. El costo de mantenimiento crecía con cada liberación, la estabilidad se resentía, y contratar para una base de código en Objective-C cada vez costaba más. La solución evidente era reescribir, y la objeción evidente es la que plantea cualquier CTO: el roadmap no puede detenerse un año."
approach:
  - "Audité ambas bases nativas para mapear la paridad real de funcionalidades, y secuencié la migración para que los flujos de mayor tráfico se movieran primero y pudieran validarse pronto con usuarios reales."
  - "Diseñé la arquitectura objetivo antes de escribir código de producto: separación en tres capas de datos, dominio y presentación, con una sola fuente de verdad para cada estado."
  - "Estandaricé la gestión de estado en un único patrón predecible y centralicé el cableado de dependencias mediante un service locator, de modo que cualquier desarrollador pudiera rastrear una pantalla desde el evento hasta la fuente de datos sin leer el repositorio completo."
  - "Construí los puentes nativos que el producto realmente necesitaba — captura de audio con normalización de formato entre iOS y Android, una superficie web embebida e integración de mapas — manteniendo el código específico de plataforma aislado detrás de interfaces estrechas."
  - "Ejecuté la migración y el desarrollo de nuevas funcionalidades como un solo flujo en lugar de dos, de manera que cada módulo nuevo se construyó directamente en Flutter en vez de escribirse dos veces y migrarse después."
  - "Escribí la documentación de arquitectura y una plantilla obligatoria por feature, y la usé para incorporar a los ingenieros de Java y Objective-C existentes a Flutter hasta que pudieron entregar módulos de forma autónoma."
  - "Definí y estimé cada módulo tarea por tarea — interfaz, integración de API, ajustes específicos de plataforma, pruebas y liberación — contra fechas de entrega comprometidas."
constraints: "La entrega de funcionalidades no podía detenerse: el negocio necesitaba capacidad nueva durante toda la migración. El equipo de ingeniería existente no tenía experiencia en Flutter y debía mantener vivas las apps nativas mientras aprendía el nuevo stack. La seguridad del cliente y la composición específica del core de la plataforma son confidenciales y deliberadamente no se describen aquí."
outcome: "Dos bases de código se convirtieron en una. El producto ahora se libera desde un único codebase Flutter para iOS y Android, con la arquitectura y la documentación necesarias para que el equipo interno lo mantenga y lo extienda. Más de siete módulos nuevos — notas de voz, respuestas programadas, comentarios en mensajes, borradores locales, filtros de conversación, un tablero Kanban con gestos, y notas, tareas y eventos para el detalle de conversación — se entregaron durante la migración y no después. La colaboración es continua desde mayo de 2024."
stack:
  - "Flutter"
  - "Dart"
  - "Java"
  - "Kotlin"
  - "Objective-C"
  - "Platform Channels"
  - "Clean Architecture"
  - "Cubit / BLoC"
  - "APIs REST"
metrics:
  - label: "Código legacy reemplazado"
    value: "7 años"
  - label: "Duración de la migración"
    value: "14 meses"
  - label: "Bases de código unificadas"
    value: "2 → 1"
  - label: "Módulos nuevos en paralelo"
    value: "7+"
  - label: "Usuarios en agencias"
    value: "~700"
featured: true
order: 1
coverAlt: "Aplicación móvil de marketplace automotriz unificada desde dos bases de código nativas a una sola aplicación Flutter"
gallery:
  - src: ./images/automotive-marketplace-vehicle-form.png
    alt: "Formulario móvil para editar la publicación de un vehículo, con título, odómetro, precio, financiamiento y datos mecánicos"
    kind: mobile
    caption: "Formulario de publicación con datos del vehículo"
  - src: ./images/automotive-marketplace-channels.png
    alt: "Pantalla móvil para seleccionar canales de publicación y consultar cuotas de anuncios por marketplace"
    kind: mobile
    caption: "Selección de canales y gestión de cuotas"
  - src: ./images/automotive-marketplace-inventory.png
    alt: "Lista móvil de inventario de vehículos activos, con fotos, precios, kilometraje y filtros de estado"
    kind: mobile
    caption: "Inventario activo con filtros por estado de publicación"
  - src: ./images/automotive-marketplace-dashboard.png
    alt: "Tablero de escritorio con métricas de antigüedad de inventario, visitas, intenciones de llamada y mensajes"
    kind: desktop
    caption: "Tablero de operación para inventario y actividad de leads"
---

La parte interesante de este proyecto nunca fue la migración en sí. Fue la restricción.

La mayoría de las migraciones congelan el producto. El equipo desaparece un año, el roadmap se detiene, y el negocio paga por una reescritura que no entrega nada nuevo. Ese intercambio es la razón número uno por la que se rechazan las migraciones, y es la razón por la que las bases de código legacy sobreviven mucho después del punto en que debieron reemplazarse.

Ejecutar ambos flujos como uno solo — construir cada módulo nuevo directamente en el stack objetivo en lugar de escribirlo dos veces — hizo que la migración se pagara sola conforme avanzaba. El negocio siguió liberando. La base de código siguió encogiendo.
