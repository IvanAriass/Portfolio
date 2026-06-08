import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <Section
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
    >
      <div className="mx-auto max-w-xl">
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
            />
          </div>

          <Button type="submit" className="w-full">
            {t('contact.send')}
          </Button>
        </form>
      </div>
    </Section>
  )
}
