import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const personFormFieldsSchema = z.object({
  cpf: z
    .string({ message: 'Obrigatório' })
    .min(14, 'Informe o CPF completo, com 11 dígitos'),
  name: z.string({ message: 'Obrigatório' }).min(1, 'Obrigatório'),
  type: z.string({ message: 'Obrigatório' }).min(1, 'Obrigatório'),
})

export const personFormResolver = zodResolver(personFormFieldsSchema)

export type PersonFormFieldsType = z.infer<typeof personFormFieldsSchema>
