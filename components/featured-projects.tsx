'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight, Clock, Wrench } from 'lucide-react'

const featuredProjects = [
  {
    title: 'Intelligent Customer Support Agent',
    description: 'An AI-powered customer support agent leveraging OpenAI Agents SDK, MCP, and FastAPI backend. Currently in progress.',
    image: '/api/placeholder/400/250',
    tech: ['OpenAI Agents SDK', 'MCP', 'FastAPI', 'Docker'],
    github: '#',
    demo: '#',
    status: 'In Progress',
    featured: true
  },
  {
    title: 'Robotics + AI Integration Lab',
    description: 'Experimenting with combining robotics frameworks and intelligent agents. Conceptual phase.',
    tech: ['ROS', 'OpenAI Agents SDK', 'Python'],
    github: '#',
    demo: '#',
    status: 'Planning',
    featured: true
  }
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in Agentic AI and intelligent systems development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
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
                  <span className="text-4xl font-bold text-primary-500">🤖</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                    {project.status === 'In Progress' ? 'In Progress' : 'Planning'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Status */}
                <div className="flex items-center space-x-2 mb-4">
                  {project.status === 'In Progress' ? (
                    <Clock className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Wrench className="w-4 h-4 text-blue-500" />
                  )}
                  <span className={`text-sm font-medium ${
                    project.status === 'In Progress' ? 'text-yellow-600' : 'text-blue-600'
                  }`}>
                    {project.status}
                  </span>
                </div>

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

        {/* View All Projects Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 