import { User } from 'lucide-react'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface AvatarProps extends ComponentProps<'div'> {
  userName?: string
  avatarUrl?: string
  size?: number
}

export function Avatar({
  userName,
  avatarUrl,
  className,
  size = 35,
  ...props
}: AvatarProps) {
  const firstCharacter = userName?.substring(0, 1)

  return (
    <div
      className={twMerge(
        'flex items-center justify-center overflow-hidden rounded-full',
        !avatarUrl
          ? 'bg-red-300 text-xl font-semibold uppercase text-red-800'
          : 'bg-zinc-200 dark:bg-zinc-700',
        className,
      )}
      {...props}
      style={{
        minHeight: size,
        maxHeight: size,
        height: size,
        minWidth: size,
        maxWidth: size,
        width: size,
        fontSize: size / 2,
        ...props.style,
      }}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt=""
          width={200}
          height={200}
          quality={100}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{firstCharacter || <User className="h-5 w-5" />}</span>
      )}
    </div>
  )
}
