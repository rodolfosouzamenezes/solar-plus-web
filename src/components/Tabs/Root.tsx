'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface TabsRootProps {
  children: (props: {
    currentTab: string
    setCurrentTab: Dispatch<SetStateAction<string>>
  }) => ReactNode[] | ReactNode
}

export function TabsRoot({ children }: TabsRootProps) {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {children({ currentTab, setCurrentTab })}
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
