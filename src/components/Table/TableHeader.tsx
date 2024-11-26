import { cn } from '@/lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('bg-primary-foreground [&_tr]:border-b', className)}
    {...props}
  />
))
TableHeader.displayName = 'TableHeader'