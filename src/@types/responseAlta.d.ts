import { IPaginateConfig } from './response'

export interface IResponseList<T> {
  flagErro: boolean
  listaMensagens: string[]
  listaResultados: {
    paginas: number
    [key: string]: T[]
  }
}

export interface IResponse<T> {
  flagErro: boolean
  listaMensagens: string[]
  listaResultados: T
}

export interface INormalizedResponse<T> {
  docs?: T
  errorList?: string[]
}
export interface INormalizedListResponse<T>
  extends IPaginateConfig,
    INormalizedResponse<T> {}
