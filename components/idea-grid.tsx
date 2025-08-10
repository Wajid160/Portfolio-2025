'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code, Zap, Clock, CheckCircle, Play } from 'lucide-react'

const ideas = [
  {
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent study companion that adapts to individual learning styles, creates personalized study plans, and provides real-time explanations.',
    status: 'prototype',
    category: 'Education',
    tech: ['OpenAI GPT-4', 'React', 'Python', 'Machine Learning'],
    icon: Lightbulb
  },
  {
    title: 'Smart Code Review Bot',
    description: 'Automated code review system that analyzes pull requests, suggests improvements, and ensures code quality using AI.',
    status: 'idea',
    category: 'Development',
    tech: ['GitHub API', 'OpenAI Codex', 'Node.js', 'Webhooks'],
    icon: Code
  },
  {
    title: 'Voice-Controlled AI Agent',
    description: 'A voice-activated AI assistant that can perform complex tasks, manage smart home devices, and provide contextual responses.',
    status: 'in-progress',
    category: 'AI Agents',
    tech: ['Speech Recognition', 'OpenAI Whisper', 'FastAPI', 'WebRTC'],
    icon: Zap
  },
  {
    title: 'Personal Finance AI Advisor',
    description: 'AI-powered financial advisor that analyzes spending patterns, provides investment recommendations, and helps with budgeting.',
    status: 'idea',
    category: 'Finance',
    tech: ['Python', 'Pandas', 'OpenAI API', 'React'],
    icon: Lightbulb
  },
  {
    title: 'Automated Content Creator',
    description: 'AI system that generates blog posts, social media content, and marketing materials based on given topics and brand guidelines.',
    status: 'prototype',
    category: 'Content',
    tech: ['OpenAI GPT-4', 'Next.js', 'Tailwind CSS', 'Contentful API'],
    icon: Code
  },
  {
    title: 'Smart Meeting Summarizer',
    description: 'Real-time meeting transcription and summarization tool that extracts key points, action items, and generates meeting notes.',
    status: 'in-progress',
    category: 'Productivity',
    tech: ['OpenAI Whisper', 'GPT-4', 'WebRTC', 'React'],
    icon: Zap
  },
  {
    title: 'AI-Powered Resume Builder',
    description: 'Intelligent resume builder that suggests improvements, optimizes for ATS systems, and provides personalized recommendations.',
    status: 'idea',
    category: 'Career',
    tech: ['React', 'OpenAI API', 'PDF Generation', 'ATS Analysis'],
    icon: Lightbulb
  },
  {
    title: 'Smart Recipe Generator',
    description: 'AI system that creates personalized recipes based on available ingredients, dietary restrictions, and cooking preferences.',
    status: 'prototype',
    category: 'Lifestyle',
    tech: ['OpenAI GPT-4', 'Recipe APIs', 'React Native', 'Image Recognition'],
    icon: Code
  },
  {
    title: 'Automated Email Responder',
    description: 'Smart email management system that drafts responses, prioritizes emails, and automates routine communication tasks.',
    status: 'idea',
    category: 'Productivity',
    tech: ['Gmail API', 'OpenAI API', 'Node.js', 'Natural Language Processing'],
    icon: Lightbulb
  }
]

const statusConfig = {
  idea: {
    label: 'Idea',
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    icon: Lightbulb
  },
  prototype: {
    label: 'Prototype',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    icon: Code
  },
  'in-progress': {
    label: 'In Progress',
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    icon: Clock
  },
  completed: {
    label: 'Completed',
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    icon: CheckCircle
  }
}

export function IdeaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ideas.map((idea, index) => {
        const status = statusConfig[idea.status as keyof typeof statusConfig]
        const StatusIcon = status.icon

        return (
          <motion.div
            key={idea.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card overflow-hidden group hover:scale-105 transition-transform duration-200"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <idea.icon className="w-8 h-8 text-primary-500" />
                <span className={`text-xs px-2 py-1 rounded-full ${status.color}`}>
                  {status.label}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {idea.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {idea.description}
              </p>

              <span className="text-xs text-primary-500 font-medium">
                {idea.category}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="p-6">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {idea.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="px-6 pb-6">
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Learn More</span>
              </button>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
} 