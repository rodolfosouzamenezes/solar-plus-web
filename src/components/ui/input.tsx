'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { FormField } from '../FormField'
import { formatter } from '@/utils/formatter'
import { Button } from './button'
import { Eye, EyeOff, X } from 'lucide-react'
import { Skeleton } from '../Skeleton'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  info?: string
  secret?: boolean
  canClear?: boolean
  mask?: keyof typeof formatter
  containerClassName?: React.ComponentProps<'div'>['className']
  action?: {
    label: string
    icon?: React.ElementType
    action?: () => void
  }
  showError?: boolean
  isLoading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      mask,
      className,
      containerClassName,
      type,
      secret,
      action,
      disabled,
      canClear = false,
      isLoading = false,
      showError,
      info,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [isSecret, setIsSecret] = React.useState(secret)

    const handleToggleIsSecret = () => {
      setIsSecret(!isSecret)
    }

    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleClearValue = () => {
      if (inputRef.current?.value) {
        inputRef.current.value = ''

        if (onChange) {
          const syntheticEvent = {
            target: inputRef.current,
            currentTarget: inputRef.current,
          } as React.ChangeEvent<HTMLInputElement>

          onChange(syntheticEvent)
        }
      }
    }

    const inputClassName = cn(
      'flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-foreground/15 disabled:bg-foreground/10 disabled:text-foreground',
      className,
    )

    return (
      <FormField
        label={label}
        error={error}
        action={!disabled ? action : undefined}
        className={cn('relative', containerClassName)}
        showError={showError}
        info={info}
      >
        {!isLoading ? (
          <input
            className={inputClassName}
            ref={ref || inputRef}
            onChange={(e) => {
              if (mask) {
                const { value } = e.target

                const maskedValue = formatter[mask](value)

                e.target.value = maskedValue
              }

              onChange && onChange(e)
            }}
            disabled={disabled}
            type={isSecret ? 'password' : type}
            {...props}
          />
        ) : (
          <div className={inputClassName}>
            <Skeleton className="h-3 w-3/5" />
          </div>
        )}

        {secret && (
          <Button
            variant="ghost"
            className="absolute bottom-4 right-0 h-10 w-10 p-0"
            onClick={handleToggleIsSecret}
          >
            {isSecret ? (
              <Eye className="h-4 w-4 text-zinc-500" />
            ) : (
              <EyeOff className="h-4 w-5 text-zinc-500" />
            )}
          </Button>
        )}
        {inputRef.current?.value && canClear && (
          <Button
            variant="ghost"
            className="absolute right-2 top-2 h-6 w-6 p-0"
            onClick={handleClearValue}
          >
            <X className="h-4 w-4 text-zinc-500" />
          </Button>
        )}
      </FormField>
    )
  },
)
Input.displayName = 'Input'

export { Input }
