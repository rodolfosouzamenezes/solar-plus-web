import { ComponentProps } from 'react'
import { ClipLoader } from 'react-spinners'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'flex justify-center items-center gap-2 rounded-lg p-4 text-sm font-semibold shadow-sm outline-none uppercase',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 disabled:bg-zinc-400 disabled:text-zinc-600 disabled:hover:bg-zinc-400 disabled:dark:bg-zinc-400',
  ],

  variants: {
    variant: {
      disabled: 'bg-zinc-600 text-white hover:bg-zinc-600 dark:bg-zinc-600',
      primary:
        'bg-red-800 text-white hover:bg-red-900 dark:bg-red-800 dark:hover:bg-red-900',
      outline: `border border-red-800 dark:border-red-600 dark:text-red-600 text-red-800 hover:bg-red-500/5 hover:border-red-900`,
      ghost:
        'rounded-md px-2 hover:bg-black/20 shadow-none text-zinc-500 dark:hover:bg-white/20 dark:text-zinc-300',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  isLoading?: boolean
  showChildrenOnLoading?: boolean
}

export function Button({
  variant,
  className,
  disabled,
  children,
  isLoading,
  showChildrenOnLoading = true,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={!!(isLoading || disabled)}
      className={button({ variant, className })}
      {...props}
    >
      {!showChildrenOnLoading && isLoading ? <></> : children}
      {isLoading && (
        <ClipLoader
          loading={isLoading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </button>
  )
}
