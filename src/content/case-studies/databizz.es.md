---
slug: databizz-es
translationKey: databizz
lang: es
title: "Un sistema de punto de venta de extremo a extremo — cliente, backend y hardware"
client: "DataBizz"
role: "Full-Stack Developer"
period: "Abril 2026 – Agosto 2026"
summary: "Diseñé y entregué a producción un sistema de punto de venta completo en cinco meses: una terminal Flutter para escritorio y tablet, un backend REST en Dart, una capa nativa de hardware Android y un instalador de Windows empaquetado para la instalación en sitio."
context: "DataBizz necesitaba un sistema de punto de venta para operaciones de retail — no un prototipo, sino software que opera un mostrador todo el día sobre hardware real, en locales donde quien lo usa no es técnico y quien lo repara no está presente."
problem: "Un sistema de punto de venta falla distinto a la mayoría del software. Tiene que seguir funcionando cuando se cae la red, correr sobre el hardware que el local ya tiene, sobrevivir a que lo instale alguien que no es ingeniero, y nunca perder un ticket. Eso abarca cuatro capas distintas — interfaz, lógica de negocio, hardware y distribución — y una falla en cualquiera de ellas vuelve inútiles a las otras tres."
approach:
  - "Construí la terminal como una sola aplicación Flutter para escritorio y tablet, de modo que un único codebase cubre cualquier formato que el local pueda tener en el mostrador."
  - "Escribí el backend en Dart como servicio REST, manteniendo todo el sistema en un solo lenguaje para poder razonar las reglas de negocio sin cambiar de modelo mental entre cliente y servidor."
  - "Implementé la capa nativa de Android para el hardware de punto de venta, aislando el comportamiento específico del dispositivo detrás de una interfaz estrecha en lugar de dejar que se filtrara al código de producto."
  - "Empaqueté un instalador de Windows con scripts de despliegue automatizado para que un operador no técnico pudiera completar la instalación en sitio sin un ingeniero presente."
  - "Endurecí el flujo de login y documenté el ciclo de vida del ticket y la arquitectura de cuentas abiertas como análisis escrito y revisable, para que el cliente se quede con el razonamiento y no solo con el código."
  - "Ejecuté una auditoría de organización de solo lectura del repositorio en la entrega, mapeando estructura y legibilidad para que el cliente pudiera asumir el mantenimiento."
constraints: "El sistema debía correr sobre hardware ya instalado en el local, no sobre hardware elegido para él. La instalación debía poder completarla el personal, no ingenieros. La base de código es propiedad del cliente; los detalles de implementación de su lógica de negocio no se publican aquí."
outcome: "El sistema se liberó a producción y opera el flujo completo de retail a través de cuatro capas — terminal Flutter, backend en Dart, integración nativa con hardware Android y distribución en Windows. Entregado en cinco meses, con la arquitectura, el flujo de tickets y el modelo de cuentas documentados por escrito para que el equipo del cliente pueda mantenerlo y extenderlo de forma independiente."
stack:
  - "Flutter"
  - "Dart"
  - "Shelf"
  - "Node.js"
  - "Kotlin"
  - "Java"
  - "APIs REST"
  - "Despliegue en Windows"
metrics:
  - label: "Capas entregadas"
    value: "4"
  - label: "Ventana de entrega"
    value: "5 meses"
  - label: "Plataformas"
    value: "Escritorio · Tablet · Android"
  - label: "Codebase de la terminal"
    value: "~250 archivos Dart"
featured: true
order: 2
coverAlt: "Aplicación de terminal punto de venta corriendo en escritorio y tablet con integración nativa de hardware Android"
---

La mayoría de los ingenieros móviles se detienen en la app. Este proyecto fue interesante justamente porque detenerse en la app no habría producido nada usable.

Una terminal de punto de venta es solo el software que está en medio del problema. De un lado hay hardware que se comporta distinto en cada unidad. Del otro hay una persona en un local que tiene que instalarlo, de noche, sin ayuda. Lograr que la interfaz Flutter quedara bien fue el tercio fácil.
