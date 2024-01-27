import React from 'react'
import { WeekGroup } from '../domain/WeekGroup'
import { WeekDay } from '../domain/WeekDay'

type Props = {
  week: WeekGroup
  index: number
}

const monthNamesPtBr: string[] = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

const dayNamesPtBr: string[] = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
];

const Week = ({week, index}: Props) => {
  return (
    <section className="w-full py-2 lg:py-10">
      <h2 className='text-center mb-5 text-3xl font-extralight'>Semana {index + 1}</h2>
      <hr className='mb-10' />
      <div className="container grid gap-12 px-4 md:px-6 xl:grid-cols-7">
        {Object.values(WeekDay).map((day, dayIndex) => {
          const date = new Date(week.startDate)
          date.setDate(date.getDate()+dayIndex)
          const dayName = dayNamesPtBr[dayIndex]
          const header = (<div className='flex items-center xl:flex-col gap-2 xl:gap-1 xl:items-start'>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl 2xl:text-4xl flex lg:block items-center">
              <span>{date.getDate()} de {monthNamesPtBr[date.getMonth()]}</span>
            </h2>
            <p className="text-sm font-light text-gray-500 tracking-normal">
              {dayName}
            </p>
          </div>
          )
          const key = `${week.startDate}-${day}`
          const weekDay = week.studyDays.find(studyDay => new Date(studyDay.date).getDay() === dayIndex)
          if(!weekDay) return (
            <div key={key} className="space-y-2 lg:space-y-4">
              {header}
              <div className="space-y-4">
                <div className="space-y-1 xl:space-y-0">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl 2xl:text-3xl">Dia livre</h3>
                  <p className="max-w-[900px] font-light text-gray-500 md:text-base dark:text-gray-400">
                    Nenhum estudo programado para este dia
                  </p>
                </div>
              </div>
            </div>
          )

          return (
            <div key={key} className="space-y-2 lg:space-y-4">
              {header}
              <div className="space-y-2 lg:space-y-6">
                {weekDay.studyObjects.map(studyObject => (
                  <div key={studyObject.id} className="space-y-1 xl:space-y-0">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl 2xl:text-3xl">
                      {studyObject.name}
                    </h3>
                    <p className="max-w-[900px] text-gray-500 font-light md:text-base/relaxed dark:text-gray-400">
                      {studyObject.necessaryHours} horas
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      
      </div>
    </section>
  )
}

export default Week