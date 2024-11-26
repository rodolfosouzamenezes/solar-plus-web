'use client'

import React, { createContext, useContext, useState } from 'react'
import { IEquipment } from '@/@types/equipment'
import { IPaginateListParams, IPaginateListState } from '@/@types/response'
import EquipmentRepository from '@/Repositories/EquipmentRepository'

export interface EquipmentContextDataProps {
  equipmentList: IPaginateListState<IEquipment>
  currentEquipment: IEquipment | null
  getEquipmentList: (params?: IPaginateListParams) => Promise<void>
  setCurrentEquipment: (value: IEquipment | null) => void

  conditionalRender: boolean
  setConditionalRender: (render: boolean) => void
}

interface EquipmentProviderProps {
  children: React.ReactNode
}

export const EquipmentContext = createContext({} as EquipmentContextDataProps)

export function EquipmentContextProvider({ children }: EquipmentProviderProps) {
  const [equipmentList, setEquipmentList] = useState<
    IPaginateListState<IEquipment>
  >({
    docs: [],
  })
  const [currentEquipment, setCurrentEquipment] = useState<IEquipment | null>(
    null,
  )
  const [conditionalRender, setConditionalRender] = useState(true)

  const getEquipmentList = async (
    params?: IPaginateListParams,
  ): Promise<void> => {
    try {
      setConditionalRender(true)
      const queryParams = params?.page
        ? { ...equipmentList.params, page: params.page }
        : params

      const {
        docs,
        errorList: _,
        ...paginateConfig
      } = await EquipmentRepository.list(queryParams)

      setEquipmentList({
        docs: docs || [],
        paginateConfig,
        params: queryParams,
      })
    } finally {
      setConditionalRender(false)
    }
  }

  return (
    <EquipmentContext.Provider
      value={{
        equipmentList,
        currentEquipment,
        getEquipmentList,
        setCurrentEquipment: (value) => {
          setCurrentEquipment(value)
        },
        conditionalRender,
        setConditionalRender,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  )
}

export const useEquipment = () => useContext(EquipmentContext)
