import { Hero } from '@/components/hero'
import { FeaturedProjects } from '@/components/featured-projects'
import { SkillsSection } from '@/components/skills-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SkillsSection />
      <FeaturedProjects />
    </div>
  )
} 