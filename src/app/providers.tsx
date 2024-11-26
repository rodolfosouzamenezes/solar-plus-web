'use client'

import { AuthContextProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider enableSystem attribute="class">
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeProvider>
  )
}
