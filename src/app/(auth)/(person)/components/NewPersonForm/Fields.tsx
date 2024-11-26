import { useFormContext } from 'react-hook-form'
import { PersonFormFieldsType } from './form.schema'
import { Input } from '@/components/ui/input'
import { Combobox } from '@/components/Combobox'

export function PersonFormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PersonFormFieldsType>()

  return (
    <div className="grid grid-cols-3 gap-6">
      <Input
        label="Nome"
        placeholder="Nome"
        error={errors?.name?.message}
        containerClassName="col-span-3"
        {...register('name')}
      />
      <Input
        label="CPF"
        placeholder="000.000.000-00"
        error={errors?.cpf?.message}
        containerClassName="col-span-3"
        mask="cpf"
        {...register('cpf')}
      />

      <Combobox
        label="Tipo da pessoa"
        placeholder="Selecione o tipo da pessoa"
        options={[
          {
            id: 'Morador',
            type: 'Morador',
          },
          {
            id: 'Visitante',
            type: 'Visitante',
          },
          {
            id: 'Prestador',
            type: 'Prestador',
          },
        ]}
        valueKey="id"
        displayKey="type"
        filter={(search, option) => {
          return option.type.toLowerCase().includes(search.toLowerCase())
        }}
        renderItem={(option) => option.type}
        containerClassName="col-span-3"
        error={errors?.type?.message}
        name="type"
      />
    </div>
  )
}
