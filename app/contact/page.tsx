import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing AI projects, collaboration opportunities, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
} 