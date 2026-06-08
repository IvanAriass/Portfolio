import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'

export function ExperienceSection() {
  const { t } = useTranslation()

  return (
    <Section id="experience" title={t('experience.title')}>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-800" />

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12">
              <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-neutral-400 bg-white dark:border-neutral-500 dark:bg-neutral-950" />

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge variant="outline">
                  {t(`experience.${exp.type}`)}
                </Badge>
                <span className="text-xs text-neutral-400">
                  {exp.startDate} — {exp.endDate ?? t('experience.present')}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {exp.role}
              </h3>

              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {exp.company}
              </p>

              {exp.description && (
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {exp.description}
                </p>
              )}

              {exp.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
