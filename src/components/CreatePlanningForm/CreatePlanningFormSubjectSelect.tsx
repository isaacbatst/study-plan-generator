import { useId } from 'react'
import Select from 'react-select'
import { FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'
import { Option } from '../../lib/Option'
import { SubjectJSON } from '../../domain/entities-2/Subject'

type Props = {
  subjects: SubjectJSON[] 
  field: CreatePlanningFormField<'subjects'>
  setSubjects: (subjects: Option[]) => void
}

const CreatePlanningFormSubjectSelect = ({subjects, field, setSubjects}: Props) => {
  const subjectsSelectId = useId()
  const coursesSelectId = useId()
  const coursePeriods = subjects
    .flatMap(subject => subject.coursePeriods)
    .filter((coursePeriod, index, self) => self.findIndex(cp => cp.id === coursePeriod.id) === index)

  const setCourseSubjects = (coursePeriodId?: string) => {
    if(coursePeriodId){
      const selectedSubjects = subjects.filter(subject => subject.coursePeriods.some(coursePeriod => coursePeriod.id === coursePeriodId))
      setSubjects(selectedSubjects.map(subject => ({label: subject.name, value: subject.id})))
    }
  }

  const sortedSubjects = subjects.slice().sort((a, b) => a.name.localeCompare(b.name))
  const sortedCoursePeriods = coursePeriods.slice().sort((a, b) => a.name.localeCompare(b.name))

  return (
    <FormItem className="flex flex-col">
      <FormLabel>Quais matérias vou estudar:</FormLabel>
      <Select 
        isClearable
        options={sortedCoursePeriods.map(subject => ({label: subject.name, value: subject.id}))}
        instanceId={coursesSelectId}
        onChange={(course) => setCourseSubjects(course?.value)}
        placeholder="Preencha automaticamente escolhendo o curso..."
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
      <Select 
        options={sortedSubjects.map(subject => ({label: subject.name, value: subject.id}))}
        isMulti
        instanceId={subjectsSelectId}
        value={field.value}
        onChange={field.onChange}
        placeholder="Ou selecione manualmente..."
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