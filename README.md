# Portfolio — Iván Arias

Portfolio personal de **Iván Arias**, desarrollador Full Stack.  
Creado con **React 19**, **TypeScript 6** y **Vite 8**, con **Tailwind CSS 4**, **i18n** (español/inglés), modo oscuro/claro y **animaciones con Framer Motion**.

## Secciones

- **Hero** — Presentación con enlaces a proyectos y contacto.
- **Sobre mí** — Descripción breve y descarga de CV.
- **Proyectos** — Tarjetas con proyectos, tecnologías y enlaces.
- **Skills** — Habilidades agrupadas por categoría con nivel visual.
- **Experiencia** — Línea de tiempo con formación académica y laboral.
- **Contacto** — Formulario funcional vía Formspree.

## Tecnologías

| Capa            | Tecnologías |
|-----------------|-------------|
| Framework       | React 19, TypeScript 6 |
| Build           | Vite 8, rolldown |
| Estilos         | Tailwind CSS 4 |
| Animaciones     | Framer Motion |
| i18n            | i18next, react-i18next |
| Estado          | Zustand |
| Linter          | ESLint 10 (flat config) |
| React Compiler  | Babel plugin con react-compiler |

## Scripts

```bash
pnpm dev        # Servidor de desarrollo
pnpm build      # Typecheck + build para producción
pnpm preview    # Vista previa del build
pnpm lint       # Ejecutar ESLint
```

## Estructura

```
src/
├── assets/       # Recursos estáticos
├── components/   # Componentes UI (card, badge, button, reveal, section)
│   └── layout/   # Header y Footer
├── contexts/     # Contexto de tema
├── data/         # Datos de proyectos, skills, experiencia
├── hooks/        # Hooks personalizados (useScrollSpy, useMediaQuery)
├── i18n/         # Traducciones ES/EN con i18next
├── lib/          # Utilidades (cn, animaciones variants, toast store)
├── providers/    # ThemeProvider
├── sections/     # Secciones de la página (hero, about, projects, etc.)
├── styles/       # Estilos globales (Tailwind + texturas/gradientes)
└── types/        # Interfaces TypeScript compartidas
```
