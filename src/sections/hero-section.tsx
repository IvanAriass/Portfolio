import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center"
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        {t('hero.greeting')}
      </p>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
        Iván Arias
        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
          {t('hero.role')}
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400">
        {t('hero.tagline')}
      </p>

      <div className="mt-10 flex items-center gap-4">
        <Button as="a" href="#projects">
          {t('hero.cta')}
        </Button>
        <Button as="a" href="#contact" variant="secondary">
          {t('hero.contact')}
        </Button>
      </div>
    </section>
  )
}
