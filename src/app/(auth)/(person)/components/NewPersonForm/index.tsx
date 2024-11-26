import * as Form from '@/components/Form'
import { useForm } from 'react-hook-form'
import { PersonFormFieldsType, personFormResolver } from './form.schema'
import { PersonFormFields } from './Fields'
import { toast } from 'react-toastify'
import { useModal } from '@/components/Modal/contexts/ModalContext'
import { usePerson } from '../../../../../contexts/PersonContext'
import { returnRequestError } from '@/utils/returnRequestError'
import PersonRepository from '@/Repositories/PersonRepository'

export function PersonForm() {
  const formMethods = useForm<PersonFormFieldsType>({
    resolver: personFormResolver,
  })

  const { setOpen } = useModal()
  const { setPersonList } = usePerson()

  const { reset } = formMethods

  const onSubmit = async (data: PersonFormFieldsType) => {
    try {
      await PersonRepository.create(data)

      toast.success('Pessoa criada com sucesso')

      setPersonList((state) => [data, ...state])
      setOpen(false)
      reset()
    } catch (error) {
      returnRequestError(error, {
        defaultMessage: 'Não foi criar nova pessoa',
      })
    }
  }

  return (
    <Form.Provider formMethods={formMethods} onSubmit={onSubmit}>
      <PersonFormFields />

      <Form.ButtonArea submitLabel="Enviar" />
    </Form.Provider>
  )
}
