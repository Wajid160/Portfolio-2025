'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'web', name: 'Web Development' },
  { id: 'tools', name: 'Tools & Utilities' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'data', name: 'Data Science' }
]

export function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(category.id)}
          className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 ${
            activeFilter === category.id
              ? 'bg-primary-500 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  )
} 