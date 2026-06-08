import { Layout } from '@/components/layout/layout'
import { HeroSection } from '@/sections/hero-section'
import { AboutSection } from '@/sections/about-section'
import { ProjectsSection } from '@/sections/projects-section'
import { SkillsSection } from '@/sections/skills-section'
import { ExperienceSection } from '@/sections/experience-section'
import { ContactSection } from '@/sections/contact-section'

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  )
}

export default App
