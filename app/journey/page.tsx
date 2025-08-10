import { LearningTimeline } from '@/components/learning-timeline'

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Learning Journey
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational path from 2019 to present, documenting the milestones, 
            challenges, and achievements that have shaped my journey in technology.
          </p>
        </div>

        <LearningTimeline />
      </div>
    </div>
  )
} 