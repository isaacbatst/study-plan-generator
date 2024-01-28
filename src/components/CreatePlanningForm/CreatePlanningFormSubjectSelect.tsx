import { useId } from 'react'
import Select from 'react-select'
import { SubjectJSON } from '../../domain/entities/Subject'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'
import { FormItem, FormLabel, FormMessage } from '../ui/form'

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
        // placeholder color
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
      <FormMessage />
    </FormItem>
  )
}

export default CreatePlanningFormSubjectSelect