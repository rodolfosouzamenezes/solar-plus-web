'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '../Button'
import { Eye, EyeOff } from 'lucide-react'

interface RootProps extends ComponentProps<'div'> {
  label?: string
  secret?: boolean
}

type InputContextType = {
  id: string
  isSecret: boolean
}

const InputContext = createContext({} as InputContextType)

export function Root({ label, secret = false, ...props }: RootProps) {
  const [isSecret, setIsSecret] = useState(secret)

  const id = useId()

  const handleToggleIsSecret = () => {
    setIsSecret(!isSecret)
  }

  return (
    <InputContext.Provider
      value={{
        id,
        isSecret,
      }}
    >
      <div className="w-full space-y-1">
        {label && (
          <label className="text-sm font-semibold uppercase">{label}</label>
        )}
        <div
          {...props}
          className={twMerge(
            'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-2 py-2 shadow-sm',
            'focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50',
            'dark:border-zinc-800 dark:bg-zinc-800 dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-500/20',
            props.className,
          )}
        >
          {props.children}
          {secret && (
            <Button variant="ghost" onClick={handleToggleIsSecret}>
              {isSecret ? (
                <Eye className="h-5 w-5 text-zinc-500" />
              ) : (
                <EyeOff className="h-5 w-5 text-zinc-500" />
              )}
            </Button>
          )}
        </div>
      </div>
    </InputContext.Provider>
  )
}

export const useInput = () => useContext(InputContext)
