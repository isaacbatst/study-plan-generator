'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormField
} from "@/components/ui/form"
import { toast } from "sonner"
import { Planning, PlanningDistributionType } from "../../domain/entities/Planning"
import { SubjectJSON } from "../../domain/entities/Subject"
import { SubjectRepositoryMemorySingleton } from "../../infra/persistance/repository/SubjectRepositoryMemorySingleton"
import CreatePlanningFormAvailableDays from "./CreatePlanningFormAvailableDays"
import CreatePlanningFormDistribution from "./CreatePlanningFormDistribution"
import CreatePlanningFormHoursPerDay from "./CreatePlanningFormHoursPerDay"
import CreatePlanningFormPeriod from "./CreatePlanningFormPeriod"
import { CreatePlanningFormSchema, CreatePlanningFormSchemaType } from "./CreatePlanningFormSchema"
import CreatePlanningFormSubjectSelect from "./CreatePlanningFormSubjectSelect"

type Props = {
  subjects: SubjectJSON[]
  savePlanning: (studyPlan: Planning) => void
}

const subjectsRepository = SubjectRepositoryMemorySingleton.getInstance()

export default function CreatePlanningForm({subjects, savePlanning}: Props) {
  const form = useForm<CreatePlanningFormSchemaType>({
    resolver: zodResolver(CreatePlanningFormSchema),
    defaultValues: {
      availableDays: [false, true, true, true, true, true, false],
      hoursPerDay: 2,
      distribution: PlanningDistributionType.ALTERNATE_DAILY
    }
  })

  async function onSubmit(data: CreatePlanningFormSchemaType) {
    if(!data.period.from) {
      return form.setError('period', {
        type: 'manual',
        message: 'Selecione o início do período'
      })
    }
    
    if(!data.period.to) {
      return form.setError('period', {
        type: 'manual',
        message: 'Selecione o fim do período'
      })
    }
    
    const subjects = await subjectsRepository.findAllByIds(data.subjects.map(subject => subject.value))
    const planning = new Planning({
      startDate: data.period.from,
      endDate: data.period.to,
      availableWeekDays: data.availableDays,
      availableHoursPerDay: data.hoursPerDay,
      distribution: data.distribution
    })
    subjects.forEach(subject => planning.addSubject(subject))
    
    try {
      savePlanning(planning)
      navigator.clipboard.writeText(planning.toString());
      toast('Copiado para a área de transferência', {
        description: 'Agora você pode colar seu plano de estudos em qualquer lugar!',
        position: 'bottom-center',
        duration: 10000,
      })
    } catch (err) {
      form.setError('period', {
        message: (err as Error).message
      })
    }
  }

  return (
    <div className="p-5 sm:p-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
          <FormField
            control={form.control}
            name='subjects'
            render={({ field }) => (
              <CreatePlanningFormSubjectSelect field={field} subjects={subjects} />
            )}
          />        
          <FormField
            control={form.control}
            name='availableDays'
            render={({ field }) => (
              <CreatePlanningFormAvailableDays field={field} />
            )} />
          <FormField
            control={form.control}
            name="hoursPerDay"
            render={({ field }) => (
              <CreatePlanningFormHoursPerDay field={field} />
            )}
          />
          <FormField
            control={form.control}
            name="period"
            render={({ field }) => (
              <CreatePlanningFormPeriod field={field} />
            )}
          />
          <FormField
            control={form.control}
            name="distribution"
            render={({ field }) => (
              <CreatePlanningFormDistribution field={field} />
            )}
          />
          <Button type="submit" className="self-center">Criar plano de estudos</Button>
        </form>
      </Form>
    </div>
  )
}
