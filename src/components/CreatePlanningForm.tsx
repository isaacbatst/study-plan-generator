'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import Select from 'react-select'
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useId } from 'react'
import { WeekDay } from '../domain/WeekDay'
import { Option } from '../lib/Option'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { SubjectRepositoryMemorySingleton } from "../infra/persistance/repository/SubjectRepositoryMemorySingleton"
import Subject, { SubjectJSON } from "../domain/entities/Subject"
import { Planning } from "../domain/entities/Planning"
import { Input } from "./ui/input"

const subjects: Option[] = [
  {label: 'Matemática', value: 'matematica'},
  {label: 'Estrutura de dados', value: 'estrutura-de-dados'},
  {label: 'Computação em Nuvem', value: 'computacao-em-nuvem'},
]

const FormSchema = z.object({
  period: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
  subjects: z.array(z.object({
    label: z.string(),
    value: z.string()
  })),
  availableDays: z.array(z.boolean()),
  hoursPerDay: z.number().min(1).max(24),
}).transform((data) => ({
  ...data,
  period: {
    from: data.period.from,
    to: data.period.to,
  },
}))

const weekDayLabels: Record<WeekDay, string> = {
  [WeekDay.Sunday]: 'D',
  [WeekDay.Monday]: 'S',
  [WeekDay.Tuesday]: 'T',
  [WeekDay.Wednesday]: 'Q',
  [WeekDay.Thursday]: 'Q',
  [WeekDay.Friday]: 'S',
  [WeekDay.Saturday]: 'S',
}

type Props = {
  subjects: SubjectJSON[]
}

const subjectsRepository = SubjectRepositoryMemorySingleton.getInstance()

export default function CreatePlanningForm({subjects}: Props) {
  const subjectsSelectId = useId()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      availableDays: [false, true, true, true, true, true, false]
    }
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
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
    })
    subjects.forEach(subject => planning.addSubject(subject))
    
    try {
      console.log(planning.getStudyDays())
    } catch (err) {
      console.log('catching')
      form.setError('period', {
        message: (err as Error).message
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
        <FormField
          control={form.control}
          name='subjects'
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Quais matérias vou estudar</FormLabel>
              <Select 
                options={subjects.map(subject => ({label: subject.name, value: subject.id}))}
                isMulti
                instanceId={subjectsSelectId}
                value={field.value}
                onChange={field.onChange}
                placeholder="Selecione as matérias"
              />
              <FormMessage />
            </FormItem>
          )}
        >        
        </FormField>
        <FormField
          control={form.control}
          name='availableDays'
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Dias que poderei me dedicar:</FormLabel>
              <ToggleGroup type="multiple" className='flex-wrap'
                value={Object.values(WeekDay).filter((day, index) => field.value[index])}
                onValueChange={(value) => {
                  const selectedDays = value as WeekDay[]
                  field.onChange(Object.values(WeekDay).map(day => selectedDays.includes(day)))
                }}>
                {Object.values(WeekDay)
                  .map((day, index) => (
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
          )} />
        <FormField
          control={form.control}
          name="hoursPerDay"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantas horas vou me dedicar por dia:</FormLabel>
              <FormControl>
                <Input placeholder="2" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="period"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Período que vou estudar:</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value && field.value.from && field.value.to ? (
                        <span>
                          {format(field.value.from, "dd/MM/yyyy")} até{" "}
                          {format(field.value.to, "dd/MM/yyyy")}
                        </span>
                      ) : (
                        <span>Selecione o início e o fim</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="self-center">Criar plano de estudos</Button>
      </form>
    </Form>
  )
}
