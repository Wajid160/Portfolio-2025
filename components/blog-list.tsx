'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'My Journey into Agentic AI',
    excerpt: 'Sharing my learning path, challenges, and insights while exploring Agentic AI through Panaversity\'s AI-201 program.',
    date: '2025-07-19',
    readTime: '8 min read',
    tags: ['Agentic AI', 'MCP', 'OpenAI SDK'],
    slug: 'my-journey-into-agentic-ai'
  }
]

export function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="card overflow-hidden group"
        >
          <Link href={`/blog/${post.slug}`}>
            {/* Blog Post Image */}
            <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-500">🤖</span>
            </div>

            {/* Blog Post Content */}
            <div className="p-6">
              {/* Meta Information */}
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs px-2 py-1 rounded-full flex items-center space-x-1"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
} 