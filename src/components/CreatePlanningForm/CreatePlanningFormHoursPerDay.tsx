import React from 'react'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'

type Props = {
  field: CreatePlanningFormField<'hoursPerDay'>
}

const CreatePlanningFormHoursPerDay = ({field}: Props) => {
  return (
    <FormItem>
      <FormLabel>Quantas horas vou me dedicar por dia:</FormLabel>
      <FormControl>
        <Input placeholder="2" {...field} type="number" />
      </FormControl>
      <FormDescription>Lembre-se de ser realista, estabeleça uma meta que vai conseguir cumprir.</FormDescription>
      <FormMessage />
    </FormItem>
  )
}

export default CreatePlanningFormHoursPerDay