export interface ISyncError {
  message: string
  body: {
    codigo: string
    id: number
    idCliente: number
    idDevice: null
    idIntegracao: null
    idLocal: number
    idMarcaEquipamento: number
    idOrigem: number
    idParceiro: number
    idPessoa: number
    idReferenciaEntidade: null
    idTipo: number
    ipDevice: string
    nomeParceiro: string
    nomePessoa: string
  }
}

export interface ISynchronization {
  _id: string
  createdAt: string
  finished: boolean
  syncErrors: ISyncError[]
  totalDocs: number
  url: string
  requestsStarted: true

  ipDevice?: string
  idTipoPessoa?: number[]
}

export interface ISynchStatus {
  _id?: string
  percentage: number
  totalDocs?: number
  executedDocs?: number
  syncErrors?: ISyncError[]
}
