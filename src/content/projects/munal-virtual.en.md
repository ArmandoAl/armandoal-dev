---
slug: munal-virtual
lang: en
name: "MUNAL Virtual"
summary: "A first-person virtual walkthrough of a 19th-century exhibition room, inspired by the curatorial approach of Mexico City's National Museum of Art. Global illumination is precomputed in Blender Cycles and baked into a second UV channel, collision runs on a BVH over a collider mesh separated from the visual model, and spatial audio combines a positional listener with a convolution-based impulse response. Still in progress: the final audio files are missing and real-world web performance hasn't been measured yet."
highlights:
  - "Global illumination is precomputed in Blender Cycles and baked into a second UV channel so the browser can render a richer room without real-time lighting cost."
  - "Movement collides against a simplified mesh accelerated by a BVH, keeping visual geometry independent from physics geometry."
  - "Spatial audio combines a positional listener with convolution reverb; final assets and real-world performance measurements remain explicitly in progress."
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
    alt: "Baked exhibition room in the MUNAL Virtual walkthrough"
    kind: "desktop"
    caption: "A browser-rendered gallery using lightmaps baked from Blender Cycles."
---
