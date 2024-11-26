/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosResponse } from 'axios'

export interface IAction {
  action: 'create'
  date: Date
  userId: string
}

export interface IBaseEntity {
  _id?: string
  active: boolean
  branchId: string
  tenantId: string
  createdAt?: string
  actions: IAction[]
}

interface IPaginateListParams {
  search?: string
  limit?: number
  page?: number
  [key: string]: any
}

interface IPaginateConfig {
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: number | null
  page: number
  pagingCounter: number
  prevPage: number | null
  totalDocs: number
  totalPages: number
}

interface IPaginate<T> extends IPaginateConfig {
  docs: Array<T>
}

interface IPaginateListState<T> {
  paginateConfig?: IPaginateConfig
  params?: IPaginateListParams
  docs: Array<T>
}

interface IPaginateList<T> {
  [key: string]: IPaginate<T>
}

interface IDocumentIdResponse {
  [key: string]: string
}

interface IInputError {
  field: string
  message: string
}

interface IResponseData<T = undefined> {
  data?: T
  message: string
  code: number
  status: string
}

type IResponse<T> = AxiosResponse<IResponseData<T>>

export type {
  IDocumentIdResponse,
  IInputError,
  IPaginateListParams,
  IPaginateListState,
  IPaginateConfig,
  IPaginate,
  IPaginateList,
  IResponse,
  IResponseData,
}
