# Portfolio — Agent guidance

## Commands
```bash
pnpm dev        # dev server (Vite 8)
pnpm build      # tsc -b && vite build (typecheck then bundle)
pnpm lint       # ESLint 10 flat config
pnpm preview    # preview production build
pnpm tsc -b     # typecheck both tsconfig.app.json + tsconfig.node.json
```

No test suite exists.

## Architecture

Single-page React 19 app. Sections composed in `src/App.tsx` and rendered inside `<Layout>` (header + footer + scroll-spy nav). No routing library — hash anchors (`#hero`, `#about`, etc.) with smooth scrolling.

```
src/
  sections/     # page sections (hero, about, projects, skills, experience, contact)
  components/   # ui/ (card, badge, button, reveal, section) + layout/ (header, footer)
  data/         # static data (projects, skills, experience)
  contexts/     # theme context only
  providers/    # ThemeProvider
  hooks/        # useScrollSpy, useMediaQuery
  i18n/         # i18next (ES/EN, localStorage cache, fallback ES)
  lib/          # utils (cn), animations (framer-motion variants)
  types/        # shared interfaces
  styles/       # globals.css (Tailwind 4 import + custom textures/gradients)
```

## Key conventions

- **`@/` path alias** maps to `src/` — always import from `@/...` for src files, relative for same-directory siblings.
- **`verbatimModuleSyntax`** and **`erasableSyntaxOnly`** are on — use `import type` for type-only imports; never use `enum`, `namespace`, or `parameter properties`.
- **React Compiler** is active via `@rolldown/plugin-babel` + `reactCompilerPreset()` in `vite.config.ts`.
- **Theme**: dark mode via `.dark` class on `<html>`, persisted in `localStorage`. Use `useTheme()` from `@/contexts/theme-context`. Page loads with `.disable-transition` class (removed after initial render) to prevent flash.
- **i18n**: use `useTranslation()` from `react-i18next`. Locales in `src/i18n/locales/{es,en}.json`.
- **Section texture prop**: sections accept `texture` / `muted` props. Texture classes: `bg-noise`, `bg-dots`, `bg-grid`. Gradient classes: `bg-hero-gradient`, `bg-gradient-glow`, `bg-gradient-warm`, `bg-gradient-cool`.
- **Animations**: framer-motion variants live in `src/lib/animations.ts` (`staggerContainer`, `staggerItem`, `slideUp`, `scaleIn`).
- **favicon**: `public/favicon.svg`.
- **CV download**: `public/cv.pdf`.
- **Contact form**: Formspree (form action URL not in repo).
