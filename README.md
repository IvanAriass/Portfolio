# Portfolio — Iván Arias

Portfolio personal de **Iván Arias**, desarrollador Full Stack.  
Creado con **React 19**, **TypeScript 6** y **Vite 8**, con soporte de **Tailwind CSS 4**, **i18n** (español/inglés) y modo oscuro/claro.

## Secciones

- **Hero** — Presentación con enlaces a proyectos y contacto.
- **Sobre mí** — Descripción breve y descarga de CV.
- **Proyectos** — Tarjetas con proyectos, tecnologías y enlaces.
- **Skills** — Habilidades agrupadas por categoría con nivel visual.
- **Experiencia** — Línea de tiempo con formación académica.
- **Contacto** — Formulario funcional vía Formspree.

## Tecnologías

| Capa         | Tecnologías |
|-------------|-------------|
| Framework   | React 19, TypeScript 6 |
| Build       | Vite 8 |
| Estilos     | Tailwind CSS 4 |
| i18n        | i18next, react-i18next |
| Linter      | ESLint 10 |

## Scripts

```bash
pnpm dev        # Servidor de desarrollo
pnpm build      # Build para producción
pnpm preview    # Vista previa del build
pnpm lint       # Ejecutar ESLint
```

## Estructura

```
src/
├── components/   # Componentes UI y layout
├── contexts/     # Contexto de tema
├── data/         # Datos de proyectos, skills, experiencia
├── hooks/        # Hooks personalizados
├── i18n/         # Traducciones ES/EN
├── providers/    # ThemeProvider
├── sections/     # Secciones de la página
├── styles/       # Estilos globales
└── types/        # Interfaces TypeScript
```
