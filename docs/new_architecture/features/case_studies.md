# Case studies

## Propósito

Listar los proyectos y presentar cada caso con contexto, problema, trabajo realizado, restricciones, resultado, métricas y tecnologías.

## Archivos principales

- `src/features/case_studies/data/repositories/case_study_repository.ts`
- `src/features/case_studies/presentation/screens/CaseStudiesScreen.astro`
- `src/features/case_studies/presentation/screens/CaseStudyScreen.astro`
- `src/features/case_studies/presentation/widgets/CaseStudyCard.astro`
- `src/features/case_studies/presentation/widgets/ProjectGallery.astro`

## Flujo de datos

Colección `caseStudies` → `case_study_repository` → pantallas → `CaseStudyCard` → HTML estático.

## Rutas

- EN: `/work` y `/work/[slug]`
- ES: `/es/proyectos` y `/es/proyectos/[slug]`

## Galería opcional

Coloca las capturas autorizadas en `src/content/case-studies/images/` y añade `gallery` al frontmatter del caso. Si se omite o queda vacío, no se renderiza ningún espacio de galería.

```yaml
gallery:
  - src: ./images/nombre-del-archivo.png
    alt: "Descripción accesible de la pantalla"
    kind: mobile
    caption: "Texto opcional"
```

Usa `kind: mobile` para capturas verticales cercanas a 9:19.5 y `kind: desktop` para capturas cercanas a 4:3. Los archivos se procesan con `astro:assets`; no deben colocarse en `public/`.
