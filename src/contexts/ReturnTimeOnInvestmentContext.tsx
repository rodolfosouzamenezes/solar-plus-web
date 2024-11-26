'use client'

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { IReturnTimeOnInvestment } from '@/interfaces/returnTimeOnInvestment'

export interface ReturnTimeOnInvestmentContextDataProps {
  returnTimeOnInvestmentList: IReturnTimeOnInvestment[]
  setReturnTimeOnInvestmentList: Dispatch<
    SetStateAction<IReturnTimeOnInvestment[]>
  >
}

interface ReturnTimeOnInvestmentProviderProps {
  children: React.ReactNode
}

export const ReturnTimeOnInvestmentContext = createContext(
  {} as ReturnTimeOnInvestmentContextDataProps,
)

export function ReturnTimeOnInvestmentContextProvider({
  children,
}: ReturnTimeOnInvestmentProviderProps) {
  const [returnTimeOnInvestmentList, setReturnTimeOnInvestmentList] = useState<
    IReturnTimeOnInvestment[]
  >([])

  return (
    <ReturnTimeOnInvestmentContext.Provider
      value={{
        returnTimeOnInvestmentList,
        setReturnTimeOnInvestmentList,
      }}
    >
      {children}
    </ReturnTimeOnInvestmentContext.Provider>
  )
}

export const useReturnTimeOnInvestment = () =>
  useContext(ReturnTimeOnInvestmentContext)
