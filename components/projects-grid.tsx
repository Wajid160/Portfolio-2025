'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const allProjects = [
  {
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot powered by OpenAI GPT-4 with custom knowledge base integration and real-time conversation capabilities.',
    image: '/api/placeholder/400/250',
    tech: ['Python', 'OpenAI API', 'React', 'FastAPI'],
    github: 'https://github.com/wajid/ai-chat-assistant',
    demo: 'https://ai-chat-demo.vercel.app',
    category: 'ai',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode and smooth animations.',
    image: '/api/placeholder/400/250',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/wajid/portfolio',
    demo: 'https://wajid-portfolio.vercel.app',
    category: 'web',
    featured: true
  },
  {
    title: 'Machine Learning Dashboard',
    description: 'Interactive dashboard for visualizing machine learning model performance and data analysis with real-time updates.',
    image: '/api/placeholder/400/250',
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/wajid/ml-dashboard',
    demo: 'https://ml-dashboard.streamlit.app',
    category: 'ai',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/wajid/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    category: 'web'
  },
  {
    title: 'Weather Forecast App',
    description: 'Mobile-first weather application with location-based forecasts, interactive maps, and weather alerts.',
    image: '/api/placeholder/400/250',
    tech: ['React Native', 'OpenWeather API', 'Redux', 'Expo'],
    github: 'https://github.com/wajid/weather-app',
    demo: 'https://weather-app-expo.vercel.app',
    category: 'mobile'
  },
  {
    title: 'Data Visualization Tool',
    description: 'Interactive data visualization platform for creating charts, graphs, and dashboards from CSV/JSON data.',
    image: '/api/placeholder/400/250',
    tech: ['D3.js', 'React', 'Python', 'Pandas'],
    github: 'https://github.com/wajid/data-viz-tool',
    demo: 'https://data-viz-demo.vercel.app',
    category: 'data'
  },
  {
    title: 'Code Snippet Manager',
    description: 'Developer tool for organizing and sharing code snippets with syntax highlighting and search functionality.',
    image: '/api/placeholder/400/250',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Prism.js'],
    github: 'https://github.com/wajid/snippet-manager',
    demo: 'https://snippet-manager.vercel.app',
    category: 'tools'
  },
  {
    title: 'Image Recognition API',
    description: 'RESTful API for image classification using pre-trained deep learning models with support for custom training.',
    image: '/api/placeholder/400/250',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    github: 'https://github.com/wajid/image-recognition-api',
    demo: 'https://image-recognition-api.herokuapp.com',
    category: 'ai'
  }
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="card overflow-hidden group"
        >
          {/* Project Image */}
          <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-500">📱</span>
            </div>
            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Link
                  href={project.github}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href={project.demo}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
              <Link
                href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center space-x-1 transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 