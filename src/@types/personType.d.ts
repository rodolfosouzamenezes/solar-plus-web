export interface IPersonType {
  id: number
  displayName: string
  description?: string
  active: boolean
}

export interface IPersonTypeResponse {
  id: number
  descricao: string
  nomeDisplay: string
  flagPessoaFisica: boolean
  flagPessoaJuridica: boolean
  flagEstudante: boolean
  observacoes: any
  dtCadastro: string
  idUsuarioCadastro: number
  dtAlteracao: string
  idUsuarioAlteracao: number
  ativo: string
  flagExcluido: string
  flagSistema: string
  tempoExpiracao: any
  flagApp: boolean
  flagIrFila: any
  flagPortaria: boolean
}
