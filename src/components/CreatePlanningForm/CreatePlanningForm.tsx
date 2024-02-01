'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormDescription,
  FormField
} from "@/components/ui/form"
import { ChevronsUpDown } from "lucide-react"
import React, { useMemo } from "react"
import { toast } from "sonner"
import { Planning } from "../../domain/entities/Planning"
import { PlanningDistributionType } from "../../domain/entities/PlanningDistributor"
import Subject, { SubjectJSON } from "../../domain/entities/Subject"
import { PlanningInvalidParamsError } from "../../domain/errors/InvalidParamsError"
import { SubjectRepositoryMemorySingleton } from "../../infra/persistance/repository/SubjectRepositoryMemorySingleton"
import { Option } from "../../lib/Option"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import CreatePlanningFormAvailableDays from "./CreatePlanningFormAvailableDays"
import CreatePlanningFormDistribution from "./CreatePlanningFormDistribution"
import CreatePlanningFormHoursPerDay from "./CreatePlanningFormHoursPerDay"
import CreatePlanningFormPeriod from "./CreatePlanningFormPeriod"
import { CreatePlanningFormSchema, CreatePlanningFormSchemaType } from "./CreatePlanningFormSchema"
import CreatePlanningFormSubjectSelect from "./CreatePlanningFormSubjectSelect"

type Props = {
  subjects: SubjectJSON[]
  savePlanning: (studyPlan: Planning) => void
  insideModal?: boolean
}

const subjectsRepository = SubjectRepositoryMemorySingleton.getInstance()

export default function CreatePlanningForm({subjects, savePlanning, insideModal = false}: Props) {
  const form = useForm<CreatePlanningFormSchemaType>({
    resolver: zodResolver(CreatePlanningFormSchema),
    defaultValues: {
      availableDays: [false, true, true, true, true, true, false],
      hoursPerDay: 2,
      distribution: PlanningDistributionType.ALTERNATE_DAILY,
      subjects: []
    }
  })

  const setSubjects = React.useCallback((subjects: Option[]) => form.setValue('subjects', subjects), [form])

  const [isAdvancedOpen, setIsAdvancedOpen] = React.useState(false)

  const { availableDays, distribution, hoursPerDay, startDate, subjects: selectedSubjects } = form.watch()
  const endDate = useMemo(() => {
    try {
      const parsing = CreatePlanningFormSchema.safeParse({
        availableDays,
        distribution,
        hoursPerDay,
        startDate,
        subjects: selectedSubjects
      })
      if(!parsing.success) return
      const planning = new Planning({
        startDate: parsing.data.startDate,
        availableWeekDays: parsing.data.availableDays,
        availableHoursPerDay: parsing.data.hoursPerDay,
        distribution: parsing.data.distribution
      })
  
      selectedSubjects.forEach(selected => {
        const json = subjects.find(subject => subject.id === selected.value)
        if(json) {
          const subject = Subject.fromJSON(json)
          planning.addSubject(subject)
        }
      })
      
      return planning.endDate
    } catch (err) {
      console.log(err)
    }
  }, [availableDays, distribution, hoursPerDay, startDate, selectedSubjects, subjects])

  async function onSubmit(data: CreatePlanningFormSchemaType) {
    try {
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
    } catch (err) {
      if(err instanceof PlanningInvalidParamsError){
        form.setError(err.field, { message: err.message })
        return
      }

      form.setError('root.error', { message: 'Ocorreu um erro inesperado. Tente novamente mais tarde.' })
    }
  }

  const dynamicClasses = insideModal ? '' : 'lg:w-[80vw]'

  return (
    <div className={`sm:p-0 text-center xl:text-left flex justify-center ${dynamicClasses}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col flex-1">
          {form.formState.errors.root?.error && <p>{form.formState.errors.root.error.message}</p>}
          <FormField
            control={form.control}
            name='subjects'
            render={({ field }) => (
              <CreatePlanningFormSubjectSelect field={field} setSubjects={setSubjects} subjects={subjects} />
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
