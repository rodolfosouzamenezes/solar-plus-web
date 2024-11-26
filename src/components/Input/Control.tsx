import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { useInput } from './Root'

interface InputControlProps extends ComponentProps<'input'> {
  onChangeText?: (value: string) => void
}

export function Control({ onChangeText, ...props }: InputControlProps) {
  const { isSecret } = useInput()

  return (
    <input
      {...props}
      type={isSecret ? 'password' : props.type}
      className={twMerge(
        `flex-1 border-0  bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400`,
        props.className,
      )}
      onChange={(e) => {
        const { value } = e.currentTarget

        props?.onChange && props.onChange(e)
        onChangeText && onChangeText(value)
      }}
    />
  )
}
