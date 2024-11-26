import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ModalContextProvider, OpenModalProps } from './contexts/ModalContext'
import { ReactNode } from 'react'

export interface ModalProps extends OpenModalProps {
  children: ReactNode
  title: string
  className?: string
  titleClassName?: string
}

export function Modal({
  children,
  title,
  className,
  titleClassName,
  setOpen,
  open,
}: ModalProps) {
  return (
    <ModalContextProvider open={open} setOpen={setOpen}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 h-screen w-screen bg-black/80">
            <Dialog.Content
              className={cn([
                'absolute left-1/2 top-1/2 z-20 max-h-[95vh] w-full max-w-[900px] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-lg bg-white p-8 dark:bg-zinc-900',
                className,
              ])}
            >
              <Dialog.Close className="absolute right-6 top-6 rounded-lg p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-500 dark:hover:bg-zinc-800">
                <X size={24} aria-label="Fechar" />
              </Dialog.Close>

              <Dialog.Title
                className={cn([
                  'mb-8 text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50',
                  titleClassName,
                ])}
              >
                {title}
              </Dialog.Title>

              {children}
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </ModalContextProvider>
  )
}
