import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: '',
    image: '/projects/portfolio.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: [
      { label: 'Código', url: 'https://github.com/', type: 'github' },
    ],
    featured: true,
    year: 2026,
  },
]
