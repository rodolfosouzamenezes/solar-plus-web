import { Check, ChevronsUpDown, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ReactNode, useState, useMemo } from 'react'
import { FormField } from '../FormField'
import { useFormContext } from 'react-hook-form'
import { CommandLoading } from 'cmdk'
import { Skeleton } from '../Skeleton'

interface ComboboxProps<T extends Record<string, any>> {
  options: Array<T>
  valueKey: keyof T & (string | number)
  displayKey: (keyof T & (string | number)) | ((itemSelected: T) => string)
  filter: (search: string, option: T) => boolean
  renderItem: (option: T, isSelected: boolean) => ReactNode
  placeholder?: string
  type?: 'default' | 'array'
  name: string

  isLoading?: boolean
  disabled?: boolean

  label?: string
  error?: string
  secret?: boolean
  containerClassName?: React.ComponentProps<'div'>['className']
  action?: {
    label: string
    icon?: React.ElementType
    action?: () => void
  }
  showError?: boolean
  defaultValue?: string | number | null
}

export function Combobox<T extends Record<string, any>>({
  options,
  valueKey,
  displayKey,
  filter,
  renderItem,
  placeholder = 'Selecione uma opção...',
  isLoading = false,
  disabled = false,
  type = 'default',

  label,
  error,
  action,
  containerClassName,
  showError,
  name,
  defaultValue = null,
}: ComboboxProps<T>) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const { watch, setValue, register } = useFormContext()
  const formValue = watch(name)
  const formList = (formValue as Array<any>) || []

  const filteredOptions = useMemo(() => {
    return search === ''
      ? options
      : options.filter((option) => filter(search, option))
  }, [search, options, filter])

  const getDisplayValue = useMemo(() => {
    if (formValue === null) return placeholder

    if (type === 'array' && formList.length > 0) {
      return `${formList.length} ite${
        formList.length > 1 ? 'ns' : 'm'
      } selecionado${formList.length > 1 ? 's' : ''}`
    }

    const selectedOption = options.find(
      (option) => option[valueKey] === formValue,
    )

    if (!selectedOption) return placeholder

    return typeof displayKey === 'function'
      ? displayKey(selectedOption)
      : (selectedOption[displayKey] as string)
  }, [formValue, options, valueKey, displayKey, placeholder])

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <FormField
        label={label}
        error={error}
        action={action}
        className={cn('relative', containerClassName)}
        showError={showError}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn([
              'disabled:opacity-1 w-full justify-between font-normal disabled:cursor-not-allowed disabled:border-foreground/15 disabled:bg-foreground/10 disabled:text-foreground',
              { 'disabled:text-muted-foreground': !formValue },
            ])}
          >
            {!isLoading ? (
              <span
                className={cn([
                  'overflow-hidden',
                  { 'text-muted-foreground': getDisplayValue === placeholder },
                ])}
              >
                {getDisplayValue}
              </span>
            ) : (
              <Skeleton className="h-3 w-3/5" />
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <input type="hidden" {...register(name)} value={formValue ?? ''} />
      </FormField>
      <PopoverContent
        align="start"
        className="w-[--radix-popover-trigger-width] p-0"
      >
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            className={cn(
              'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
            )}
          />
        </div>
        <Command>
          <CommandList>
            {isLoading ? (
              <CommandLoading className="py-6 text-center text-sm">
                Carregando...
              </CommandLoading>
            ) : (
              <>
                <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
                <CommandGroup>
                  {filteredOptions.map((option) => {
                    const optionValue = String(
                      option[valueKey] as string | number,
                    )
                    const isSelected =
                      type === 'array'
                        ? formList?.some((v) => String(v) === optionValue)
                        : formValue === optionValue

                    return (
                      <CommandItem
                        key={optionValue}
                        value={String(optionValue)}
                        onSelect={(currentValue) => {
                          if (type === 'array') {
                            setValue(
                              name,
                              isSelected
                                ? formList?.filter(
                                    (v) => String(v) !== optionValue,
                                  )
                                : [...formList, currentValue],
                              { shouldValidate: !!error },
                            )
                          } else {
                            setValue(
                              name,
                              currentValue === String(formValue)
                                ? null
                                : currentValue,
                              { shouldValidate: !!error },
                            )
                            setOpen(false)
                          }
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            isSelected ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                        {renderItem(option, isSelected)}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
