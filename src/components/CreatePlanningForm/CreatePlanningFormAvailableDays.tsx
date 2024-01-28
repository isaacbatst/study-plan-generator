import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import React from 'react'
import { WeekDay } from '../../domain/WeekDay'
import { FormItem, FormLabel, FormMessage } from '../ui/form'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'

type Props = {
  field: CreatePlanningFormField<'availableDays'>
}

const weekDayLabels: Record<WeekDay, string> = {
  [WeekDay.Sunday]: 'D',
  [WeekDay.Monday]: 'S',
  [WeekDay.Tuesday]: 'T',
  [WeekDay.Wednesday]: 'Q',
  [WeekDay.Thursday]: 'Q',
  [WeekDay.Friday]: 'S',
  [WeekDay.Saturday]: 'S',
}

const CreatePlanningFormAvailableDays = ({field}: Props) => {
  return (
    <FormItem className="flex flex-col ">
      <FormLabel className='mb-2'>Dias que poderei me dedicar:</FormLabel>
      <ToggleGroup type="multiple" className='flex-wrap'
        value={Object.values(WeekDay).filter((_, index) => field.value[index])}
        onValueChange={(value) => {
          const selectedDays = value as WeekDay[]
          field.onChange(Object.values(WeekDay).map(day => selectedDays.includes(day)))
        }}>
        {Object.values(WeekDay)
          .map((day) => (
            <ToggleGroupItem 
              key={day} 
              value={day}
            >
              {weekDayLabels[day]}
            </ToggleGroupItem>
          ))}
      </ToggleGroup>
      <FormMessage />
    </FormItem>
  )
}

export default CreatePlanningFormAvailableDays