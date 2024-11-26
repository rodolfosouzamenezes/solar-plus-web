import { PersonProviders } from './providers'
import { WithChildren } from '@/@types/general'

export default function PersonLayout({ children }: WithChildren) {
  return <PersonProviders>{children}</PersonProviders>
}
