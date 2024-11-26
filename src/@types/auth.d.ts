export interface IAccessGroup {
  id: number
  uuid: string
  name: string
}

export interface IAccessGroupResponse {
  id: number
  uuid: string
  nome: string

  dtAlteracao: string
  dtCadastro: string
  dtExclusao: null
  flagAtivo: number
  idUsuarioAlteracao: number
  idUsuarioCadastro: number
  idUsuarioExclusao: null
  motivoExclusao: null
}

export interface IUser {
  id: number
  name: string
  email: string
  login: string
}

export interface ILoginPayload {
  login: string
  senha: string
}

export type ILoginResponse = {
  id: number
  nome: string
  dtNascimento: string
  email: string
  login: string
  senha: string
  idGrupoAcesso: number
  flagAlterarSenha: string
  dtCadastro: string
  idUsuarioCadastro: number
  dtAlteracao: string
  idUsuarioAlteracao: number
  ativo: string
  flagSistema: string
  flagExcluido: string
}
