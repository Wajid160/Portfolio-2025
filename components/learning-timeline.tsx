'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Globe, Brain, Rocket, Calendar } from 'lucide-react'

const timelineEvents = [
  {
    year: '2025',
    title: 'AI-201: Explore Agentic AI & DACA frameworks',
    description: 'Joined Panaversity\'s intensive AI-201 program to deepen expertise in agent frameworks, MCP protocols, and AI-first development patterns.',
    icon: Brain,
    category: 'learning',
    achievements: ['Agentic AI Development', 'MCP Protocol Mastery', 'AI-First Patterns']
  },
  {
    year: '2025',
    title: 'Expected Graduation - BS Information Technology',
    description: 'Completing Bachelor of Science in Information Technology with focus on AI and intelligent systems development.',
    icon: GraduationCap,
    category: 'education',
    achievements: ['AI Specialization', 'Intelligent Systems', 'Research Projects']
  },
  {
    year: '2022',
    title: 'Started BS Information Technology',
    description: 'Began undergraduate studies in Information Technology with focus on AI, machine learning, and intelligent systems.',
    icon: BookOpen,
    category: 'education',
    achievements: ['Programming Fundamentals', 'AI Concepts', 'System Design']
  }
]

export function LearningTimeline() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
              <event.icon className="w-4 h-4 text-white" />
            </div>

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-500">{event.year}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    event.category === 'education' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                    event.category === 'learning' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                  }`}>
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {event.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {event.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future Goals */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="card p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Future Goals
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            My journey continues with ambitious goals for the future, including advancing 
            in Agentic AI development and contributing to cutting-edge intelligent systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Advanced AI Engineering Studies</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Robotics + AI Integration Research</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">AI Memory Management Systems</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Open Source AI Contributions</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 