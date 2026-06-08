import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'
import { cn } from '@/lib/utils'

interface ExperienceSectionProps {
  muted?: boolean
}

export function ExperienceSection({ muted }: ExperienceSectionProps) {
  const { t } = useTranslation()

  const workExperiences = experiences.filter((exp) => exp.type === 'work')
  const educationExperiences = experiences.filter((exp) => exp.type === 'education')

  return (
    <Section id="experience" title={t('experience.title')} muted={muted}>
      <div className="space-y-16">
        <TimelineGroup
          title={t('experience.work')}
          items={workExperiences}
          accentColor="indigo"
          icon={<BriefcaseIcon />}
        />
        <TimelineGroup
          title={t('experience.education')}
          items={educationExperiences}
          accentColor="emerald"
          icon={<GraduationIcon />}
        />
      </div>
    </Section>
  )
}

interface TimelineGroupProps {
  title: string
  items: typeof experiences
  accentColor: 'indigo' | 'emerald'
  icon: React.ReactNode
}

function TimelineGroup({ title, items, accentColor, icon }: TimelineGroupProps) {
  const { t } = useTranslation()

  if (items.length === 0) return null

  const dotBorder = accentColor === 'indigo'
    ? 'border-indigo-400 dark:border-indigo-500'
    : 'border-emerald-400 dark:border-emerald-500'

  const dotBg = accentColor === 'indigo'
    ? 'bg-indigo-100 dark:bg-indigo-950'
    : 'bg-emerald-100 dark:bg-emerald-950'

  const lineColor = accentColor === 'indigo'
    ? 'bg-indigo-200 dark:bg-indigo-900'
    : 'bg-emerald-200 dark:bg-emerald-900'

  const headerColor = accentColor === 'indigo'
    ? 'text-indigo-600 dark:text-indigo-400'
    : 'text-emerald-600 dark:text-emerald-400'

  return (
    <div>
      <h3 className={cn('mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest', headerColor)}>
        {icon}
        {title}
      </h3>

      <div className="relative mx-auto max-w-3xl">
        <div className={cn('absolute left-4 top-0 h-full w-px', lineColor)} />

        <div className="space-y-12">
          {items.map((exp) => (
            <div key={exp.id} className="relative pl-12">
              <div className={cn('absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 bg-white dark:bg-neutral-950', dotBorder, dotBg)} />

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge
                  variant="outline"
                  className={cn(
                    accentColor === 'indigo'
                      ? 'border-indigo-200 text-indigo-600 dark:border-indigo-800 dark:text-indigo-400'
                      : 'border-emerald-200 text-emerald-600 dark:border-emerald-800 dark:text-emerald-400',
                  )}
                >
                  {t(`experience.${accentColor === 'indigo' ? 'work' : 'education'}`)}
                </Badge>
                <span className="text-xs text-neutral-400">
                  {exp.startDate} — {exp.endDate ?? t('experience.present')}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {t(`experience.items.${exp.id}.role`)}
              </h4>

              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {t(`experience.items.${exp.id}.company`)}
              </p>

              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {t(`experience.items.${exp.id}.description`)}
              </p>

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
    </div>
  )
}

function BriefcaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}
