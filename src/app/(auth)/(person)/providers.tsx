import { WithChildren } from '@/@types/general'
import { ReturnTimeOnInvestmentContextProvider } from '@/contexts/ReturnTimeOnInvestmentContext'

export function PersonProviders({ children }: WithChildren) {
  return (
    <ReturnTimeOnInvestmentContextProvider>
      {children}
    </ReturnTimeOnInvestmentContextProvider>
  )
}
