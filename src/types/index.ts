export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  tags: string[]
  links: ProjectLink[]
  featured: boolean
  year: number
  stars?: number
  forks?: number
  repo?: string
  owner?: string
}

export interface ProjectLink {
  label: string
  url: string
  type: 'github' | 'demo' | 'docs'
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: number
  icon?: string
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'tools'
  | 'languages'

export interface Experience {
  id: string
  startDate: string
  endDate: string | null
  technologies: string[]
  type: 'work' | 'education'
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}
