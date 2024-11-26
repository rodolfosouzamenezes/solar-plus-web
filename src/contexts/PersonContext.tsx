'use client'

import { IPerson } from '@/@types/person'
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export interface PersonContextDataProps {
  personList: IPerson[]
  setPersonList: Dispatch<SetStateAction<IPerson[]>>
}

interface PersonProviderProps {
  children: React.ReactNode
}

export const PersonContext = createContext({} as PersonContextDataProps)

export function PersonContextProvider({ children }: PersonProviderProps) {
  const [personList, setPersonList] = useState<IPerson[]>([])

  return (
    <PersonContext.Provider
      value={{
        personList,
        setPersonList,
      }}
    >
      {children}
    </PersonContext.Provider>
  )
}

export const usePerson = () => useContext(PersonContext)
