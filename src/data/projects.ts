import type { Project } from '@/types'
import voluntappImg from '@/assets/projects/voluntapp.png'
import ecoquestImg from '@/assets/projects/ecoquest.png'
import kebabImg from '@/assets/projects/kebab.png'

export const projects: Project[] = [
  {
    id: 'voluntapp',
    title: 'VoluntApp',
    description: '',
    image: voluntappImg,
    tags: ['Spring Boot', 'Java', 'MySQL', 'Docker', 'Azure', 'Bootstrap', 'Angular', 'Ionic', 'Figma'],
    links: [
      { label: 'Código', url: 'https://github.com/', type: 'github' },
    ],
    featured: true,
    year: 2024,
  },
  {
    id: 'EcoQuest',
    title: 'EcoQuest',
    description: '',
    image: ecoquestImg,
    tags: ['WPF', 'C#', 'Spring Boot', 'Java', 'MySQL', 'Figma'],
    links: [
      { label: 'Código', url: 'https://github.com/', type: 'github' },
    ],
    featured: true,
    year: 2026,
  },
  {
    id: 'kebab',
    title: 'Kebab',
    description: '',
    image: kebabImg,
    tags: ['Spring Boot', 'Java', 'MySQL', 'Docker'],
    links: [
      { label: 'Código', url: 'https://github.com/', type: 'github' },
    ],
    featured: true,
    year: 2024,
  },
  
]
