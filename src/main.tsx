import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/providers/theme-provider'
import App from './App'
import './i18n'
import './styles/globals.css'
import faviconHref from '@/assets/favicon.svg?url'

const faviconEl = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
if (faviconEl) faviconEl.href = faviconHref

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
