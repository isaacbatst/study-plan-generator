import { FormControl, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'

type Props = {
  field: CreatePlanningFormField<'hoursPerDay'>
}

const CreatePlanningFormHoursPerDay = ({field}: Props) => {
  return (
    <FormItem>
      <FormControl>
        <Input placeholder="2" {...field} type="number" />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default CreatePlanningFormHoursPerDay