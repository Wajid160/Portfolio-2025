'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Globe, Zap, Database, Cloud, GitBranch, Rocket } from 'lucide-react'

const skills = [
  // AI/ML Skills
  {
    name: 'Agentic AI',
    icon: Brain,
    category: 'AI/ML',
    color: 'text-purple-600'
  },
  {
    name: 'OpenAI Agents SDK',
    icon: Brain,
    category: 'AI/ML',
    color: 'text-green-600'
  },
  {
    name: 'Model Context Protocol (MCP)',
    icon: Brain,
    category: 'AI/ML',
    color: 'text-blue-600'
  },
  {
    name: 'AI-First Development',
    icon: Brain,
    category: 'AI/ML',
    color: 'text-indigo-600'
  },
  // Backend Skills
  {
    name: 'Python FastAPI',
    icon: Code2,
    category: 'Backend',
    color: 'text-yellow-500'
  },
  {
    name: 'Docker',
    icon: Cloud,
    category: 'Backend',
    color: 'text-blue-500'
  },
  {
    name: 'Pydantic',
    icon: Code2,
    category: 'Backend',
    color: 'text-green-500'
  },
  // DevOps / Tools
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    category: 'DevOps',
    color: 'text-orange-600'
  },
  {
    name: 'VS Code',
    icon: Code2,
    category: 'DevOps',
    color: 'text-blue-600'
  },
  // Future Learning
  {
    name: 'Robotics Integration',
    icon: Rocket,
    category: 'Future Learning',
    color: 'text-red-600'
  },
  {
    name: 'AI Memory Management',
    icon: Database,
    category: 'Future Learning',
    color: 'text-purple-500'
  }
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent systems and bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex justify-center mb-4">
                <skill.icon className={`w-12 h-12 ${skill.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex justify-center mb-4">
                <Brain className="w-12 h-12 text-primary-500" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                Agentic AI Development
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Building intelligent agents using OpenAI Agents SDK, MCP protocols, and AI-first development patterns
              </p>
            </div>
            <div className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex justify-center mb-4">
                <Globe className="w-12 h-12 text-primary-500" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                Backend Development
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Creating robust APIs with Python FastAPI, Docker containerization, and Pydantic data validation
              </p>
            </div>
            <div className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-primary-500" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                Future Innovation
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Exploring robotics integration and AI memory management systems for next-generation applications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 