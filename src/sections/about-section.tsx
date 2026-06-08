import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { useTranslation } from 'react-i18next'

interface AboutSectionProps {
  muted?: boolean
}

export function AboutSection({ muted }: AboutSectionProps) {
  const { t } = useTranslation()

  return (
    <Section id="about" title={t('about.title')} muted={muted} separator="strong">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          {t('about.description')}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button as="a" href="/cv.pdf" variant="secondary" download>
            {t('about.download_cv')}
          </Button>
        </div>
      </div>
    </Section>
  )
}
