import { useTheme } from '@/contexts/theme-context'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

const NAV_ITEMS = [
  { id: 'home', href: '#hero' },
  { id: 'about', href: '#about' },
  { id: 'projects', href: '#projects' },
  { id: 'skills', href: '#skills' },
  { id: 'experience', href: '#experience' },
  { id: 'contact', href: '#contact' },
]

export function Header() {
  const { t, i18n } = useTranslation()
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id), 80)
  const { theme, toggleTheme } = useTheme()

  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Portfolio
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  activeId === item.id
                    ? 'text-neutral-900 dark:text-white'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                )}
              >
                {t(`nav.${item.id}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-lg px-2 py-1 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            aria-label={t('language.switch')}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            aria-label={t(theme === 'dark' ? 'theme.light' : 'theme.dark')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  )
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
