import { ProjectsGrid } from '@/components/projects-grid'
import { ProjectFilters } from '@/components/project-filters'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work in AI, web development, and machine learning. 
            Each project represents a learning opportunity and a step towards my goals.
          </p>
        </div>

        <ProjectFilters />
        <ProjectsGrid />
      </div>
    </div>
  )
} 