import * as React from 'react'

import { cn } from '@/lib/utils'
import { FormField } from '../FormField'
import { Skeleton } from '../Skeleton'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  info?: string
  containerClassName?: React.ComponentProps<'div'>['className']
  action?: {
    label: string
    icon?: React.ElementType
    action?: () => void
  }
  showError?: boolean
  isLoading?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      className,
      containerClassName,
      action,
      disabled,
      isLoading = false,
      showError,
      info,
      ...props
    },
    ref,
  ) => {
    const textareaClassName = cn(
      'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
          <textarea
            className={textareaClassName}
            ref={ref}
            disabled={disabled}
            {...props}
          />
        ) : (
          <div className={textareaClassName}>
            <Skeleton className="h-3 w-3/5" />
          </div>
        )}
      </FormField>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
