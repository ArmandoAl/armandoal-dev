# Arquitectura Astro con organización Flutter

Este proyecto conserva el routing obligatorio de Astro y organiza el resto del código con una estructura familiar para un desarrollador Flutter.

## Equivalencias

| Concepto Flutter | Equivalente en este proyecto |
| --- | --- |
| `MaterialApp` / `Scaffold` | `src/app/shell/AppShell.astro` |
| `Widget` | Componente `.astro` |
| Cubit / estado | Props + content collections |
| Repository | `data/repositories/` |
| Service | Loaders de contenido |
| GoRouter | `src/pages/` + `src/app/router/route_names.ts` |
| ThemeData | `src/core/theme/` |

## Regla de la capa delgada

`src/pages/` existe únicamente porque Astro define ahí sus rutas. Cada archivo de esa carpeta debe importar y renderizar un único `Screen` ubicado en `src/features/<feature>/presentation/screens/`. No debe contener lógica, estado ni markup de contenido.

## Cómo agregar un feature

1. Crea `src/features/<feature>/domain/`, `data/repositories/`, `presentation/screens/` y `presentation/widgets/`.
2. Implementa el contenido de la pantalla en `presentation/screens/<Feature>Screen.astro` y coloca sus componentes privados en `presentation/widgets/`.
3. Añade sus rutas para inglés y español en `src/app/router/route_names.ts`.
4. Crea el archivo de ruta en `src/pages/` (y bajo `src/pages/es/` cuando corresponda) con solo el import del `Screen` y `<FeatureScreen />`.
5. Ejecuta `npm run check` y `npm run build`.

## Estado final

- Sitio estático bilingüe con Home, proyectos, detalle de proyecto, perfil, contacto y 404.
- Navegación adaptativa Material 3: barra inferior, rail o drawer según el ancho mediante CSS.
- Contenido editorial validado por colecciones estrictas y consumido exclusivamente mediante repositorios.
- SEO con canonical, pares `hreflang`, Open Graph, Twitter Card, sitemap, robots y JSON-LD `Person` en ambas páginas de inicio.
- Firebase Hosting preparado para `newportfolio-16a51`; el despliegue queda como operación manual del dueño.
- Los archivos profesionales siguen marcados con `TODO: contenido pendiente` hasta recibir el contenido definitivo y los PDF del CV.

La documentación específica de cada módulo vive en `docs/new_architecture/features/`.
