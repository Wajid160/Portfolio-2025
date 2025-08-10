'use client'

import { ThemeProvider } from './theme-provider'

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="wajid-portfolio-theme"
    >
      {children}
    </ThemeProvider>
  )
} 