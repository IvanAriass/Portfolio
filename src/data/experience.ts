import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'work-freelance',
    role: 'Desarrollador Full Stack Freelance',
    company: 'Freelance / Autónomo',
    description: 'Desarrollo de aplicaciones web completas para pequeños negocios y clientes particulares. Implementación de frontends con React y TypeScript, backends con Node.js y desplegados en entornos cloud.',
    startDate: '2024',
    endDate: null,
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    type: 'work',
  },
  {
    id: 'work-practices',
    role: 'Desarrollador Web en Prácticas',
    company: 'TECNOLOGÍAS INFORMÁTICAS DEL MEDITERRÁNEO',
    description: 'Prácticas profesionales en empresa del sector TI. Participación en el desarrollo y mantenimiento de aplicaciones web internas, colaboración en equipos ágiles y soporte técnico a usuarios.',
    startDate: '2024',
    endDate: '2024',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Git', 'Jira'],
    type: 'work',
  },
  {
    id: 'edu-daw',
    role: 'Desarrollo de Aplicaciones Web',
    company: 'IES DOCTOR BALMIS',
    description: 'Formación profesional centrada en el desarrollo de aplicaciones web modernas. Adquisición de competencias en frontend, backend, bases de datos y despliegue en servidores.',
    startDate: '2022',
    endDate: '2024',
    technologies: ['Java', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'PHP', 'Spring Boot', 'Docker'],
    type: 'education',
  },
  {
    id: 'edu-dam',
    role: 'Desarrollo de Aplicaciones Multiplataforma',
    company: 'IES DOCTOR BALMIS',
    description: 'Formación avanzada en desarrollo de aplicaciones para múltiples plataformas. Enfoque en kotlin para Android, WPF para escritorio y servicios cloud con AWS.',
    startDate: '2024',
    endDate: '2026',
    technologies: ['Kotlin', 'Java', 'WPF', 'AWS', 'MongoDB'],
    type: 'education',
  },
]
