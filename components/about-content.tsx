'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Download, Github, Linkedin, Mail, MapPin, GraduationCap, Target, Heart, Calendar, Brain } from 'lucide-react'

export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="card p-8 mb-12"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-2 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/wajid-javed.png"
                alt="Wajid Javed"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Wajid Javed
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I am Wajid Javed, a passionate learner and developer in the field of Agentic AI. 
              My focus is on building intelligent systems with OpenAI Agents SDK, MCP, and related cutting-edge tools. 
              Currently completing my BS in Information Technology (2022–2025), I am committed to combining AI and robotics to create impactful solutions. 
              I have joined Panaversity's AI-201 program to deepen my expertise in agent frameworks, MCP protocols, and AI-first development patterns.
            </p>
            
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">BS Information Technology, 2022–2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">Agentic AI Developer & Researcher</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">AI-201: Explore Agentic AI & DACA frameworks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">AI Agents & Intelligent Systems</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://github.com/Wajid160"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/wajid-javed160"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:wajidjaved160@gmail.com"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="card p-8 mb-12"
      >
        <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
          Education & Training
        </h3>
        <div className="space-y-6">
          <div className="border-l-4 border-primary-500 pl-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              BS Information Technology
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-1">2022 – 2025</p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently completing my undergraduate degree with focus on AI and intelligent systems
            </p>
          </div>
          <div className="border-l-4 border-accent-500 pl-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              AI-201: Explore Agentic AI and DACA frameworks
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Panaversity • July 19, 2025 – Oct 2025</p>
            <p className="text-gray-600 dark:text-gray-400">
              Intensive program focused on agent frameworks, MCP protocols, and AI-first development patterns
            </p>
          </div>
        </div>
      </motion.div>

      {/* Goals Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="card p-8 mb-12"
      >
        <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
          My Goals & Aspirations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Short-term Goals
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Complete BS-IT with distinction</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Build intelligent customer support agent</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Master OpenAI Agents SDK and MCP</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Contribute to open-source AI projects</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Long-term Goals
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Advanced studies in AI Engineering</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Research in robotics + AI integration</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Lead AI projects in industry</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">Develop AI memory management systems</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* AI Focus Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="card p-8 mb-12 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20"
      >
        <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
          Focus on Agentic AI
        </h3>
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            My passion lies in building intelligent systems that can think, reason, and act autonomously. 
            Through the AI-201 program at Panaversity, I'm deepening my expertise in agent frameworks, 
            Model Context Protocol (MCP), and AI-first development patterns to create real-world solutions 
            that bridge the gap between AI research and practical applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Intelligent Agents
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building autonomous AI systems with reasoning capabilities
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Real-World Applications
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creating practical solutions for customer support and automation
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exploring robotics integration and next-gen AI systems
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Download CV */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/about" className="btn-primary inline-flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Download CV</span>
        </Link>
      </motion.div>
    </div>
  )
} 