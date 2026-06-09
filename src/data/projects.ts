import type { Project } from '@/types'
import voluntappImg from '@/assets/projects/voluntapp.png'
import ecoquestImg from '@/assets/projects/ecoquest.png'
import kebabImg from '@/assets/projects/kebab.png'
import { getProjectImages } from '@/lib/placeholder'

export const projects: Project[] = [
  {
    id: 'voluntapp',
    title: 'VoluntApp',
    description: '',
    image: voluntappImg,
    images: getProjectImages('voluntapp', voluntappImg),
    tags: ['Spring Boot', 'Java', 'MySQL', 'Docker', 'Azure', 'Bootstrap', 'Angular', 'Ionic', 'Figma'],
    links: [
      { label: 'Código', url: 'https://github.com/Alexparedes11/VoluntApp-Back', type: 'github' },
    ],
    featured: true,
    year: 2024,
    stars: 1,
    repo: 'Alexparedes11/VoluntApp-Back',
  },
  {
    id: 'ecoquest',
    title: 'EcoQuest',
    description: '',
    image: ecoquestImg,
    images: getProjectImages('ecoquest', ecoquestImg),
    tags: ['WPF', 'C#', 'Spring Boot', 'Java', 'MySQL', 'Figma'],
    links: [
      { label: 'Código', url: 'https://github.com/Prompt-pi2damiesbalmis/PROYECTOI2', type: 'github' },
    ],
    featured: true,
    year: 2026,
    repo: 'Prompt-pi2damiesbalmis/PROYECTOI2',
  },
  {
    id: 'kebab',
    title: 'Kebab',
    description: '',
    image: kebabImg,
    images: getProjectImages('kebab', kebabImg),
    tags: ['Spring Boot', 'Java', 'MySQL', 'Docker'],
    links: [
      { label: 'Código', url: 'https://github.com/IvanAriass/Proyecto-Web-Kebab-Spring', type: 'github' },
    ],
    featured: true,
    year: 2024,
    stars: 1,
    repo: 'IvanAriass/Proyecto-Web-Kebab-Spring',
  },
]
