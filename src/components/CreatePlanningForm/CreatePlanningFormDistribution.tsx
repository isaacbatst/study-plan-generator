import React from 'react'
import { FormItem, FormLabel, FormMessage } from '../ui/form'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { CreatePlanningFormField } from './CreatePlanningFormSchema'
import { PlanningDistribution } from '../../domain/entities/PlanningDistribution'

type Props = {
  field: CreatePlanningFormField<'distribution'>
}

const distributions: Record<PlanningDistribution, string> = {
  [PlanningDistribution.ALTERNATE_SUBJECT_PER_DAY]: 'Trocar matéria todo dia',
  // [PlanningDistribution.ALTERNATE_SUBJECT_PER_WEEK]: 'Alternar matérias semanalmente',
  [PlanningDistribution.ALTERNATE_SUBJECT_PER_STUDY_OBJECT]: 'Trocar matéria a cada assunto',
  [PlanningDistribution.UNTIL_FINISH_SUBJECT]: 'Só trocar matéria quando terminá-la',
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