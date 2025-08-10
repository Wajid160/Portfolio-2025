import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ClientThemeProvider } from '@/components/client-theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Wajid Javed - Agentic AI Developer & Researcher',
  description: 'Agentic AI Developer & Researcher specializing in OpenAI Agents SDK, Model Context Protocol (MCP), and AI-first development patterns. Building intelligent systems with Python FastAPI.',
  keywords: ['Agentic AI', 'OpenAI Agents SDK', 'MCP', 'Python FastAPI', 'AI Developer', 'Intelligent Systems', 'Model Context Protocol', 'AI Research'],
  authors: [{ name: 'Wajid Javed' }],
  creator: 'Wajid Javed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wajid-portfolio.vercel.app',
    title: 'Wajid Javed - Agentic AI Developer & Researcher',
    description: 'Agentic AI Developer & Researcher specializing in OpenAI Agents SDK, Model Context Protocol (MCP), and AI-first development patterns. Building intelligent systems with Python FastAPI.',
    siteName: 'Wajid Javed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wajid Javed - Agentic AI Developer & Researcher',
    description: 'Agentic AI Developer & Researcher specializing in OpenAI Agents SDK, Model Context Protocol (MCP), and AI-first development patterns.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ClientThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  )
} 