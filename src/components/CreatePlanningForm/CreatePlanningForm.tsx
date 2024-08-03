'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, UseFieldArrayReturn, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormDescription,
  FormField,
  FormLabel
} from "@/components/ui/form"
import { ChevronsUpDown } from "lucide-react"
import React, { useMemo } from "react"
import { toast } from "sonner"
import { Planning } from "../../domain/entities/Planning"
import { PlanningDistribution } from "../../domain/entities/PlanningDistribution"
import { Subject, SubjectJSON } from "../../domain/entities/Subject"
import { PlanningInvalidParamsError } from "../../domain/errors/InvalidParamsError"
import { Option } from "../../lib/Option"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import CreatePlanningFormAvailableDays from "./CreatePlanningFormAvailableDays"
import CreatePlanningFormDistribution from "./CreatePlanningFormDistribution"
import CreatePlanningFormHoursPerDay from "./CreatePlanningFormHoursPerDay"
import CreatePlanningFormPeriod from "./CreatePlanningFormPeriod"
import { CreatePlanningFormSchema, CreatePlanningFormSchemaType } from "./CreatePlanningFormSchema"
import CreatePlanningFormSubjectSelect from "./CreatePlanningFormSubjectSelect"
import {v4} from 'uuid';
import CreatePlanningFormAvailabilityPerWeekday from "./CreatePlanningFormAvailabilityPerWeekday"

type Props = {
  subjects: SubjectJSON[]
  savePlanning: (studyPlan: Planning) => void
  insideModal?: boolean
}

const toWeekDaySet = (availableDays: boolean[]) => {
  return availableDays.reduce((acc: Set<number>, value, index) => {
    if(value) acc.add(index)
    return acc
  }, new Set<number>())
}

export default function CreatePlanningForm({subjects, savePlanning, insideModal = false}: Props) {
  const form = useForm<CreatePlanningFormSchemaType>({
    resolver: zodResolver(CreatePlanningFormSchema),
    defaultValues: {
      availableDays: [false, true, true, true, true, true, false],
      hoursPerDay: 2,
      distribution: PlanningDistribution.ALTERNATE_SUBJECT_PER_DAY,
      subjects: [],
      availabilityPerWeekday: [0, 2, 2, 2, 2, 2, 0].map(value => ({ value }))
    }
  })

  const {fields: availabilityPerWeekdayFields} = useFieldArray({
    control: form.control,
    name: 'availabilityPerWeekday'
  })

  const setSubjects = React.useCallback((subjects: Option[]) => form.setValue('subjects', subjects), [form])

  const [isAdvancedOpen, setIsAdvancedOpen] = React.useState(false)
  const [isDifferentHoursPerDay, setIsDifferentHoursPerDay] = React.useState(false)

  const { availableDays, distribution, hoursPerDay, startDate, subjects: selectedSubjects, availabilityPerWeekday: [
    { value: sunday },
    { value: monday },
    { value: tuesday },
    { value: wednesday },
    { value: thursday },
    { value: friday },
    { value: saturday },
  ] } = form.watch()

  const availabilityPerWeekday = useMemo(() => [
    Number(sunday), 
    Number(monday), 
    Number(tuesday), 
    Number(wednesday), 
    Number(thursday), 
    Number(friday), 
    Number(saturday)
  ], [sunday, monday, tuesday, wednesday, thursday, friday, saturday])
  
  const endDate = useMemo(() => {
    try {
      const parsing = CreatePlanningFormSchema.safeParse({
        availableDays,
        distribution,
        hoursPerDay,
        startDate,
        subjects: selectedSubjects,
        availabilityPerWeekday: availabilityPerWeekday.map(value => ({ value })),
      })
      if(!parsing.success) {
        console.log(parsing.error.errors)
        return
      }
      const planningOrError = Planning.create({
        startDate: parsing.data.startDate,
        availableWeekdays: toWeekDaySet(parsing.data.availableDays),
        hoursPerDay: parsing.data.hoursPerDay,
        availabilityPerWeekday: isDifferentHoursPerDay
          ? new Map(availabilityPerWeekday.map((value, index) => [index, value]))
          : undefined,
        distribution: parsing.data.distribution,
        createdAt: new Date(),
        id: v4(),
        subjects: selectedSubjects
          .filter(subject => subjects.find(s => s.id === subject.value))
          .map(subject => Subject.fromJSON(subjects.find(s => s.id === subject.value)!)),
      })

      if(planningOrError.isLeft()) return
      const planning = planningOrError.getRight()

      const endDateOrError = planning.getEndDate()
      if(endDateOrError.isLeft()) return
      return endDateOrError.getRight()
    } catch (err) {
      console.log(err)
    }
  }, [availableDays, distribution, hoursPerDay, startDate, selectedSubjects, subjects, availabilityPerWeekday, isDifferentHoursPerDay])

  async function onSubmit(data: CreatePlanningFormSchemaType) {
    try {
      const planningOrError = Planning.create({
        startDate: data.startDate,
        availableWeekdays: toWeekDaySet(data.availableDays),
        hoursPerDay: data.hoursPerDay,
        availabilityPerWeekday: isDifferentHoursPerDay
          ? new Map(data.availabilityPerWeekday.map((value, index) => [index, value.value]))
          : undefined,
        distribution: data.distribution,
        createdAt: new Date(),
        id: v4(),
        subjects: selectedSubjects
          .filter(subject => subjects.find(s => s.id === subject.value))
          .map(subject => Subject.fromJSON(subjects.find(s => s.id === subject.value)!)),
      })

      if(planningOrError.isLeft()) return
      const planning = planningOrError.getRight()
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

      console.log(err)

      form.setError('root.error', { message: 'Ocorreu um erro inesperado. Tente novamente mais tarde.' })
    }
  }

  const dynamicClasses = insideModal ? '' : 'shadow-lg rounded-lg lg:p-10 bg-white max-w-[100vw] lg:max-w-[50vw]'
  return (
    <div className={`text-center xl:text-left flex justify-center items-center flex-1 px-3 py-10 max-w-full ${dynamicClasses}`}>
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
              <div className="flex flex-col space-y-4">
                <FormLabel htmlFor="hoursPerDay">
                  Horas de estudo por dia
                </FormLabel>
                {
                  !isDifferentHoursPerDay && (
                    <FormField
                      control={form.control}
                      name='hoursPerDay'
                      render={({ field }) => (
                        <CreatePlanningFormHoursPerDay field={field} />
                      )}
                    />
                  )
                }
                <Collapsible className="flex flex-col gap-4 justify-center items-center"
                  open={isDifferentHoursPerDay}
                  onOpenChange={setIsDifferentHoursPerDay}
                >
                  <CollapsibleContent>
                    <div className="flex flex-col lg:flex-row space-x-2 justify-center">
                      {
                        availabilityPerWeekdayFields
                          .map((field, index) => (
                            <FormField
                              control={form.control}
                              key={field.id}
                              name={`availabilityPerWeekday.${index}.value`}
                              render={({ field }) => (
                                <CreatePlanningFormAvailabilityPerWeekday field={field} index={index} />
                              )}
                            />
                          ))
                      }
                    </div>
                  </CollapsibleContent>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' size='sm'>
                      {
                        isDifferentHoursPerDay ? 'Mesma quantidade de horas por dia' : 'Quero variar o número de horas por dia'
                      }
                    </Button>
                  </CollapsibleTrigger>
                </Collapsible>
              </div>
              <FormField
                control={form.control}
                name="distribution"
                render={({ field }) => (
                  <CreatePlanningFormDistribution field={field} />
                )}
              />
            </CollapsibleContent>
          </Collapsible>
          <Button type="submit" className="self-center"
          >Criar plano de estudos</Button>
        </form>
      </Form>
    </div>
  )
}
