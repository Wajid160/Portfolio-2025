'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Wajid160',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/wajid-javed160',
    icon: Linkedin
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/wajidjaved160',
    icon: Twitter
  },
  {
    name: 'Email',
    href: 'mailto:wajidjaved160@gmail.com',
    icon: Mail
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-heading font-bold text-xl">Wajid Javed</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Agentic AI Developer & Researcher specializing in OpenAI Agents SDK, 
              Model Context Protocol (MCP), and AI-first development patterns.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/journey" className="text-gray-400 hover:text-white transition-colors">
                  Learning Journey
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="text-gray-400 hover:text-white transition-colors">
                  Idea Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:wajidjaved160@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  wajidjaved160@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Wajid Javed. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
} 