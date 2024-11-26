import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        red: 'border-red-300 bg-red-200 text-red-800 dark:border-red-600/15 dark:text-red-200 dark:bg-red-600/20',
        orange:
          'border-orange-300 bg-orange-200 text-orange-800 dark:border-orange-600/15 dark:text-orange-200 dark:bg-red-600/20',
        emerald:
          'border-emarald-300 bg-emerald-200 text-emerald-800 dark:border-emerald-600/15 dark:text-emerald-200 dark:bg-emerald-600/20',
        amber:
          'border-amber-300 bg-amber-200 text-amber-800 dark:border-amber-600/15 dark:text-amber-200 dark:bg-amber-600/20',
        zinc: 'border-zinc-300 bg-zinc-200 text-zinc-800 dark:border-amber-600/15 dark:text-zinc-200 dark:bg-zinc-600/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
