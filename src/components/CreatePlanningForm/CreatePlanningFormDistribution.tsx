import React from 'react'
import { FormItem, FormLabel, FormMessage } from '../ui/form'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'
import { PlanningDistributionType } from '../../domain/entities/PlanningDistributor'

type Props = {
  field: CreatePlanningFormField<'distribution'>
}

const distributions: Record<PlanningDistributionType, string> = {
  [PlanningDistributionType.ALTERNATE_DAILY]: 'Trocar matéria todo dia',
  [PlanningDistributionType.ALTERNATE]: 'Trocar matéria sempre que concluir um módulo',
  [PlanningDistributionType.UNTIL_FINISH]: 'Só trocar matéria quando concluir todos seus módulos',
}

const CreatePlanningFormDistribution = ({field}: Props) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="mb-2">Distribuição das matérias:</FormLabel>
      <ToggleGroup
        value={field.value}
        onValueChange={field.onChange}
        type="single"
        className="flex flex-col sm:flex-row items-stretch"
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