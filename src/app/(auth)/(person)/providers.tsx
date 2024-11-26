import { WithChildren } from '@/@types/general'
import { PersonContextProvider } from '@/contexts/PersonContext'

export function PersonProviders({ children }: WithChildren) {
  return <PersonContextProvider>{children}</PersonContextProvider>
}
