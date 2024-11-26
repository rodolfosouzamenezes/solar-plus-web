import { INormalizedResponse, IResponse } from '@/@types/responseAlta'
import { api } from '../lib/axios'
import { IPersonType, IPersonTypeResponse } from '@/@types/personType'
import { IPaginateListParams } from '@/@types/response'

class PersonTypeRepository {
  private normalizeResponse(response: IPersonTypeResponse): IPersonType {
    const { id, nomeDisplay, descricao, ativo } = response

    return {
      id,
      displayName: nomeDisplay,
      active: ativo === 'S',
      description: descricao,
    }
  }

  async list(
    params?: IPaginateListParams,
  ): Promise<INormalizedResponse<IPersonType[]>> {
    const response = await api.get<IResponse<IPersonTypeResponse[]>>(
      '/tipoParceiro',
      { params },
    )

    if (response.data.flagErro) {
      return {
        errorList: response.data.listaMensagens,
      }
    }

    const normalizedResponse = response.data.listaResultados.map((e) => {
      return this.normalizeResponse(e)
    })

    return { docs: normalizedResponse }
  }
}

export default new PersonTypeRepository()
