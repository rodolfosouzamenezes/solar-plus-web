import axios, { AxiosError, AxiosInstance } from 'axios'

import {
  IDocumentIdResponse,
  IPaginateList,
  IPaginateListParams,
  IResponse,
} from '@/@types/response'
import { apiServer } from '@/services/apiServer'

export class Repository<T> {
  constructor(
    protected path: string = '',
    protected api: AxiosInstance = apiServer,
  ) {
    this.path = path
    this.api = api
  }

  async list(
    params?: IPaginateListParams,
  ): Promise<IResponse<IPaginateList<T>>> {
    return this.execute<IPaginateList<T>>(() =>
      this.api.get(this.path, { params }),
    )
  }

  async getOne(id: string): Promise<
    IResponse<{
      [key: string]: T
    }>
  > {
    return this.execute(() => this.api.get(`${this.path}/${id}`))
  }

  async create(data?: Partial<T>): Promise<
    IResponse<{
      [key: string]: Partial<T>
    }>
  > {
    return this.execute(() => this.api.post(`${this.path}`, data))
  }

  async update(
    id: string,
    data: Partial<T>,
  ): Promise<IResponse<IDocumentIdResponse>> {
    return this.execute<IDocumentIdResponse>(() =>
      this.api.patch(`${this.path}/${id}`, data),
    )
  }

  async delete(id: string): Promise<IResponse<IDocumentIdResponse>> {
    return this.execute<IDocumentIdResponse>(() =>
      this.api.delete(`${this.path}/${id}`),
    )
  }

  async execute<K = T>(
    request: () => Promise<IResponse<K>>,
  ): Promise<IResponse<K>> {
    try {
      return await request()
    } catch (err) {
      if (axios.isCancel(err)) throw err
      throw (<AxiosError>err).response?.data
    }
  }
}
