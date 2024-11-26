import { cn } from '@/lib/utils'
import { ComponentProps, ElementType } from 'react'
import { Info } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { HoverCardPortal } from '@radix-ui/react-hover-card'

interface FormFieldProps extends ComponentProps<'div'> {
  label?: string
  error?: string
  info?: string
  action?: {
    label: string
    action?: () => void
    icon?: ElementType
  }
  showError?: boolean
}

export function FormField({
  label,
  error,
  children,
  className,
  action,
  info,
  showError = true,
  ...props
}: FormFieldProps) {
  const Icon = action?.icon

  return (
    <div className={cn(['flex flex-col', className])} {...props}>
      <div className="flex w-full">
        {label && (
          <HoverCard openDelay={200} closeDelay={200}>
            <HoverCardTrigger asChild>
              <div className="mb-2 mr-auto flex items-center">
                <label className="font-medium">{label}</label>
                {info && <Info className="ml-2 h-3 w-3" />}
              </div>
            </HoverCardTrigger>
            <HoverCardPortal>
              <HoverCardContent
                align="center"
                side="right"
                className={cn([
                  '-mt-4 flex w-auto max-w-80 items-center px-3 text-sm',
                  !info && 'hidden',
                ])}
              >
                {info}
              </HoverCardContent>
            </HoverCardPortal>
          </HoverCard>
        )}

        {action && (
          <button
            type="button"
            onClick={() => {
              action.action && action.action()
            }}
            className="flex flex-row items-center text-indigo-500 hover:border-b hover:border-indigo-500"
          >
            <span className="mr-1.5 text-sm">{action.label}</span>
            {Icon && <Icon className="h-[10px] w-[10px]" />}
          </button>
        )}
      </div>
      {children}
      {showError && (
        <span className="mt-2 h-2 text-sm text-red-600">{error}</span>
      )}
    </div>
  )
}
