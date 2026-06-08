import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  const { t } = useTranslation()

  if (projects.length === 0) {
    return (
      <Section id="projects" title={t('projects.title')}>
        <p className="text-center text-neutral-500 dark:text-neutral-400">
          {t('projects.no_projects')}
        </p>
      </Section>
    )
  }

  return (
    <Section id="projects" title={t('projects.title')}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} hover className="flex flex-col">
            <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800" />

            <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
              {project.title}
            </h3>

            {project.description && (
              <p className="mb-4 flex-1 text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            )}

            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="flex gap-2">
              {project.links.map((link) => (
                <Button
                  key={link.url}
                  as="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
