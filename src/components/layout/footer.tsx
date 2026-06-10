import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/ui/reveal'
import { useTranslation } from 'react-i18next'

const socialLinks = [
  {
    href: 'https://github.com/IvanAriass',
    label: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/iv%C3%A1n-arias-pastor-877754317/',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
]

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-neutral-50 dark:bg-neutral-900/40">
      <div className="pointer-events-none absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-neutral-200/70 to-transparent dark:via-neutral-800/40" />

      <Reveal>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <a
                href="#hero"
                className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
              >
                Portfolio
              </a>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {t('footer.made_with')} &hearts;
              </p>
            </div>

            

            <div className="flex flex-col gap-3 sm:items-end">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-neutral-200/60 bg-white px-4 py-2.5 text-sm font-medium text-neutral-500 transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm hover:text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:shadow-neutral-900/50 dark:hover:text-neutral-200"
                  aria-label={label}
                >
                  <span className="text-neutral-400 transition-colors group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300">
                    <Icon width="19" height="19" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 sm:flex-row dark:border-neutral-800">
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              &copy; {year} Ivan. {t('footer.copyright')}
            </p>
            <a
              href="#hero"
              className="flex items-center gap-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
              {t('nav.home')}
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
