import { INormalizedListResponse, IResponseList } from '@/@types/responseAlta'
import { api } from '../lib/axios'
import { IEquipment, IEquipmentResponse } from '@/@types/equipment'
import { IPaginateListParams } from '@/@types/response'

class EquipmentRepository {
  private normalizeResponse(response: IEquipmentResponse): IEquipment {
    const { id, titulo, descricao, serie, ipDevice, flagOnline, ativo } =
      response

    return {
      id,
      title: titulo,
      active: ativo === 'S',
      ipDevice,
      serialNumber: serie,
      online: flagOnline,
      description: descricao,
    }
  }

  async list(
    params?: IPaginateListParams,
  ): Promise<INormalizedListResponse<IEquipment[]>> {
    const response = await api.get<IResponseList<IEquipmentResponse>>(
      '/equipamentos',
      {
        params: {
          ...params,
          limit: 10,
          page: params?.page || 0,
          valorBusca: params?.search,
        },
      },
    )

    if (response.data.flagErro) {
      return {
        errorList: response.data.listaMensagens,
        hasNextPage: false,
        hasPrevPage: false,
        limit: 10,
        nextPage: null,
        prevPage: null,
        pagingCounter: 1,
        totalDocs: 0,
        totalPages: 1,
        page: 1,
      }
    }

    const totalDocs = response.data.listaResultados.paginas
    const normalizedResponse = response.data.listaResultados.equipamentos.map(
      (e) => {
        return this.normalizeResponse(e)
      },
    )

    return {
      docs: normalizedResponse,
      hasNextPage: (params?.page || 1) < Math.ceil(totalDocs / 10),
      hasPrevPage: (params?.page || 1) > 1,
      limit: 10,
      nextPage:
        (params?.page || 1) < Math.ceil(totalDocs / 10)
          ? (params?.page || 1) + 1
          : null,
      prevPage: (params?.page || 1) > 1 ? (params?.page || 1) - 1 : null,
      pagingCounter: ((params?.page || 1) - 1) * 10 + 1,
      totalDocs,
      totalPages: Math.ceil(totalDocs / 10),
      page: params?.page || 1,
    }
  }
}

export default new EquipmentRepository()
