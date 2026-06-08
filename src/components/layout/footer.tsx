import { useTranslation } from 'react-i18next'

const socialLinks = [
  {
    href: 'https://github.com/IvanAriass',
    label: 'GitHub',
    icon: 'github-icon',
  },
  {
    href: 'https://www.linkedin.com/in/iv%C3%A1n-arias-pastor-877754317/',
    label: 'LinkedIn',
    icon: 'linkedin-icon',
  },
]

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6">
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              aria-label={label}
            >
              <svg width="20" height="20" aria-hidden="true">
                <use href={`/icons.svg#${icon}`} />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Ivan. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
