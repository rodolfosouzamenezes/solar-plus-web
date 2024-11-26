'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../../../Button'

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      style={{ height: 40, width: 40 }}
    >
      {resolvedTheme === 'dark' ? (
        <Moon size={22} color="white" />
      ) : (
        <Sun size={22} color="white" />
      )}
    </Button>
  )
}
