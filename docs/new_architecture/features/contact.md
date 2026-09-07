# Contact

## Propósito

Exponer email, LinkedIn, GitHub, disponibilidad y zona horaria sin formulario ni backend.

## Archivos principales

- `src/features/contact/presentation/screens/ContactScreen.astro`
- `src/features/about/data/repositories/profile_repository.ts`

## Flujo de datos

Colección `profile` → `profile_repository` → `ContactScreen` → tarjetas con Ripple → HTML estático.

## Rutas

- EN: `/contact`
- ES: `/es/contacto`
