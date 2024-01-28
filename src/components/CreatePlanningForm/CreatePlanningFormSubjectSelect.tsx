import { useId } from 'react'
import Select from 'react-select'
import { SubjectJSON } from '../../domain/entities/Subject'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'
import { FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

type Props = {
  subjects: SubjectJSON[] 
  field: CreatePlanningFormField<'subjects'>
}

const CreatePlanningFormSubjectSelect = ({subjects, field}: Props) => {
  const subjectsSelectId = useId()
  return (
    <FormItem className="flex flex-col">
      <FormLabel>Quais matérias vou estudar</FormLabel>
      <Select 
        options={subjects.map(subject => ({label: subject.name, value: subject.id}))}
        isMulti
        instanceId={subjectsSelectId}
        value={field.value}
        onChange={field.onChange}
        placeholder="Selecione as matérias"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'blue' : 'neutral5',
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: 'rgb(100, 116, 139)',
          }),
        }}
      />
      <Popover>
        <PopoverTrigger>
          <FormDescription>
            Não encontrou suas matérias?
          </FormDescription>
        </PopoverTrigger>
        <PopoverContent className='flex p-0'>
          <a className='text-center hover:underline flex-1 py-3' href="mailto:isaacbatst@gmail.com">
            Me mande um email
          </a>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )
}

export default CreatePlanningFormSubjectSelect