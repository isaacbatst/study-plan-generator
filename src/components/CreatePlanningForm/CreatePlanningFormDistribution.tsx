import React from 'react'
import { FormItem, FormLabel, FormMessage } from '../ui/form'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'
import { PlanningDistributionType } from '../../domain/entities/Planning'

type Props = {
  field: CreatePlanningFormField<'distribution'>
}

const distributions: Record<PlanningDistributionType, string> = {
  [PlanningDistributionType.ALTERNATE_DAILY]: 'Alternar matérias por dia',
  [PlanningDistributionType.ALTERNATE]: 'Alternar matérias por horário',
  [PlanningDistributionType.UNTIL_FINISH]: 'Manter matéria até finalizá-la',
}

const CreatePlanningFormDistribution = ({field}: Props) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="mb-2">Distribuição das matérias:</FormLabel>
      <ToggleGroup
        value={field.value}
        onValueChange={field.onChange}
        type="single"
        className="flex items-stretch"
      >
        {
          Object.entries(distributions).map(([value, label]) => (
            <ToggleGroupItem className="h-auto min-h-10 py-2" key={value} value={value}>{label}</ToggleGroupItem>
          ))
        }
      </ToggleGroup>
      <FormMessage />
    </FormItem>
  )
}

export default CreatePlanningFormDistribution