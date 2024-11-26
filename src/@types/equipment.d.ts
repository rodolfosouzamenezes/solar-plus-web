export interface IEquipment {
  id: number
  title: string
  description?: string
  serialNumber: string
  ipDevice: string
  online: boolean
  active: boolean
}

export interface IEquipmentResponse {
  id: number
  titulo: string
  descricao: string
  serie: string
  flagDeteccaoTemperatura: boolean
  alarmeAltaTemperatura: number
  flagSaida: any
  dtOnline: any
  flagOnline: boolean
  ativo: string
  dtSincronizacaoNuvem: string
  idUsuarioCadastro: number
  dtCadastro: string
  idUsuarioAlteracao: any
  dtAlteracao: string
  idUsuarioExclusao: any
  dtExclusao: any
  motivoExclusao: any
  idUltimoAcesso: any
  dtUltimoAcesso: any
  ipDevice: string
  idMarcaEquipamento: number
  flagCNH: boolean
  flagLPR: any
}
