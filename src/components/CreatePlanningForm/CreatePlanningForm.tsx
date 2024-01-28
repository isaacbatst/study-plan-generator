'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormDescription,
  FormField,
  FormLabel
} from "@/components/ui/form"
import { toast } from "sonner"
import { Planning } from "../../domain/entities/Planning"
import { PlanningDistributionType } from "../../domain/entities/PlanningDistributor"
import Subject, { SubjectJSON } from "../../domain/entities/Subject"
import { SubjectRepositoryMemorySingleton } from "../../infra/persistance/repository/SubjectRepositoryMemorySingleton"
import CreatePlanningFormAvailableDays from "./CreatePlanningFormAvailableDays"
import CreatePlanningFormDistribution from "./CreatePlanningFormDistribution"
import CreatePlanningFormHoursPerDay from "./CreatePlanningFormHoursPerDay"
import CreatePlanningFormPeriod from "./CreatePlanningFormPeriod"
import { CreatePlanningFormSchema, CreatePlanningFormSchemaType } from "./CreatePlanningFormSchema"
import CreatePlanningFormSubjectSelect from "./CreatePlanningFormSubjectSelect"
import { useMemo } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import React from "react"
import { ChevronsUpDown } from "lucide-react"

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
  const [isAdvancedOpen, setIsAdvancedOpen] = React.useState(false)

  const watchFields = form.watch()
  const endDate = useMemo(() => {
    const startDate = watchFields.startDate
    const hoursPerDay = watchFields.hoursPerDay
    const availableDays = watchFields.availableDays
    const distribution = watchFields.distribution
    const selectedSubjects = watchFields.subjects

    if (!startDate || !hoursPerDay || !availableDays || !distribution || selectedSubjects.length === 0) {
      return null
    }

    const planning = new Planning({
      startDate,
      availableWeekDays: availableDays,
      availableHoursPerDay: hoursPerDay,
      distribution
    })

    selectedSubjects.forEach(selected => {
      const json = subjects.find(subject => subject.id === selected.value)
      if(json) {
        const subject = Subject.fromJSON(json)
        planning.addSubject(subject)
      }
    })

    return planning.endDate
  }, [watchFields, subjects])

  async function onSubmit(data: CreatePlanningFormSchemaType) {
    const subjects = await subjectsRepository.findAllByIds(data.subjects.map(subject => subject.value))
    const planning = new Planning({
      startDate: data.startDate,
      availableWeekDays: data.availableDays,
      availableHoursPerDay: data.hoursPerDay,
      distribution: data.distribution
    })
    subjects.forEach(subject => planning.addSubject(subject))
    
    savePlanning(planning)
    navigator.clipboard.writeText(planning.toString());
    toast('Copiado para a área de transferência', {
      description: 'Agora você pode colar seu plano de estudos em qualquer lugar!',
      position: 'bottom-center',
      duration: 10000,
    })
  }

  return (
    <div className="p-5 sm:p-0 text-center xl:text-left">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
          <FormField
            control={form.control}
            name='subjects'
            render={({ field }) => (
              <CreatePlanningFormSubjectSelect field={field} subjects={subjects} />
            )}
          />        
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <CreatePlanningFormPeriod field={field} />
              )}
            />
            {endDate && (
              <FormDescription>
                <span className="font-semibold">Previsão de término:</span> {endDate.toLocaleDateString()}
              </FormDescription>
            )}
          </div>
          <Collapsible
            open={isAdvancedOpen}
            onOpenChange={setIsAdvancedOpen}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4">
              <h4 className="text-sm font-semibold">
                Configurações avançadas
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">{isAdvancedOpen ? 'Fechar' : 'Abrir'}</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-8">
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
                name="distribution"
                render={({ field }) => (
                  <CreatePlanningFormDistribution field={field} />
                )}
              />
            </CollapsibleContent>
          </Collapsible>
          <Button type="submit" className="self-center">Criar plano de estudos</Button>
        </form>
      </Form>
    </div>
  )
}
