---
slug: munal-virtual
lang: es
name: "MUNAL Virtual"
summary: "Recorrido virtual en primera persona por una sala de exhibición del siglo XIX, inspirado en el criterio curatorial del Museo Nacional de Arte. La iluminación global se precomputa en Blender Cycles y se hornea en un segundo canal UV, la colisión usa una BVH sobre una malla envolvente separada del modelo visual, y el audio espacial combina un listener posicional con una respuesta al impulso convolutiva. Aún en desarrollo: faltan los archivos de audio definitivos y el rendimiento web final no se ha medido."
highlights:
  - "La iluminación global se precomputa en Blender Cycles y se hornea en un segundo canal UV para que el navegador muestre una sala más rica sin el costo de iluminación en tiempo real."
  - "El movimiento colisiona contra una malla simplificada acelerada con BVH, manteniendo separadas la geometría visual y la física."
  - "El audio espacial combina un listener posicional con reverberación por convolución; los assets finales y las mediciones de rendimiento real siguen marcados explícitamente como trabajo en curso."
repoUrl: "https://github.com/ArmandoAl/Diana-Galeria"
language: "TypeScript"
stack:
  - "React"
  - "Three.js"
  - "React Three Fiber"
  - "Zustand"
  - "three-mesh-bvh"
  - "Blender Cycles"
  - "Web Audio API"
stars: 0
order: 6
gallery:
  - src: "./images/munal-virtual-gallery.png"
    alt: "Sala de exhibición horneada en el recorrido MUNAL Virtual"
    kind: "desktop"
    caption: "Galería renderizada en navegador con lightmaps horneados en Blender Cycles."
---
