import climaImg from '@/assets/projects/clima.png'
import ecoquestImg from '@/assets/projects/ecoquest.png'
import kebabImg from '@/assets/projects/kebab.png'
import vetcareImg from '@/assets/projects/vetcare.png'
import voluntappImg from '@/assets/projects/voluntapp.png'
import { getProjectImages } from '@/lib/placeholder'
import type { Project } from '@/types'

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
  {
    id: 'ecoquest',
    title: 'EcoQuest',
    description: '',
    image: ecoquestImg,
    images: getProjectImages('ecoquest', ecoquestImg),
    tags: ['WPF', 'C#', 'Spring Boot', 'Java', 'MySQL', 'Figma'],
    links: [
      { label: 'Código', url: 'https://github.com/IvanAriass/EcoQuest', type: 'github' },
    ],
    featured: true,
    year: 2026,
    stars: 1,
    repo: 'IvanAriass/EcoQuest',
  },
  {
    id: 'clima',
    title: 'Buscador de Clima',
    description: '',
    image: climaImg,
    images: getProjectImages('clima', climaImg),
    tags: ['React', 'TypeScript', 'OpenWeatherMap API', 'Vite'],
    links: [
      { label: 'Código', url: 'https://github.com/IvanAriass/Buscador-de-Clima', type: 'github' },
    ],
    featured: true,
    year: 2026,
    stars: 0,
    repo: 'IvanAriass/Buscador-de-Clima',
  },
  {
    id: 'vetcare',
    title: 'VetCare',
    description: '',
    image: vetcareImg,
    images: getProjectImages('vetcare', vetcareImg),
    tags: ['React', 'TypeScript', 'Zustand', 'React Hook Form', 'Tailwind CSS'],
    links: [
      { label: 'Código', url: 'https://github.com/IvanAriass/VetCare', type: 'github' },
    ],
    featured: true,
    year: 2026,
    stars: 0,
    repo: 'IvanAriass/VetCare',
  },
]
