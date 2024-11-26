'use client'

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react'

export interface OpenModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

export type ModalContextDataProps = OpenModalProps

interface ModalProviderProps extends OpenModalProps {
  children: React.ReactNode
}

export const ModalContext = createContext({} as ModalContextDataProps)

export function ModalContextProvider({
  children,
  open,
  setOpen,
}: ModalProviderProps) {
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextDataProps => useContext(ModalContext)
