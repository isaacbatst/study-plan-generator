import { useId } from 'react'
import Select from 'react-select'
import { SubjectJSON } from '../../domain/entities/Subject'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'
import { FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'

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
      <TooltipProvider>
        <Tooltip >
          <TooltipTrigger asChild>
            <FormDescription>
              Não encontrou suas matérias?
            </FormDescription>
          </TooltipTrigger>
          <TooltipContent>
            <a className='underline' href="mailto:isaacbatst@gmail.com">
              Me mande um email
            </a>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <FormMessage />
    </FormItem>
  )
}

export default CreatePlanningFormSubjectSelect