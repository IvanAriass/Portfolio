import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'voluntapp',
    title: 'VoluntApp',
    description: '',
    image: '/projects/voluntapp.png',
    tags: ['Spring Boot', 'Java', 'MySQL', 'Docker', 'Azure', 'Bootstrap', 'Angular', 'Ionic'],
    links: [
      { label: 'Código', url: 'https://github.com/', type: 'github' },
    ],
    featured: true,
    year: 2024,
  },
  {
    id: 'kebab',
    title: 'Kebab',
    description: '',
    image: '/projects/kebab.png',
    tags: ['Spring Boot', 'Java', 'MySQL', 'Docker'],
    links: [
      { label: 'Código', url: 'https://github.com/', type: 'github' },
    ],
    featured: true,
    year: 2024,
  },
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
