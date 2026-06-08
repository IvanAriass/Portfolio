import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-8 text-center sm:px-6">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Ivan. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
