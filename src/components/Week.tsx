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

const Week = ({week, index}: Props) => {
  console.log(week)
  return (
    <section className="w-full py-5 lg:py-10">
      <h2 className='text-center mb-5 text-3xl font-extralight'>Semana {index + 1}</h2>
      <hr className='mb-10' />
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-7 lg:gap-12">
        {Object.values(WeekDay).map((day, dayIndex) => {
          const date = new Date(week.startDate)
          date.setDate(date.getDate()+dayIndex)
          const header = <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">{date.getDate()} de {monthNamesPtBr[date.getMonth()]}</h2>
          const key = `${week.startDate}-${day}`
          const weekDay = week.studyDays.find(studyDay => new Date(studyDay.date).getDay() === dayIndex)
          if(!weekDay) return (
            <div key={key} className="space-y-8 xl:space-y-10">
              {header}
              <div className="space-y-4 lg:space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl">Dia livre</h3>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Nenhuma atividade planejada
                  </p>
                </div>
              </div>
            </div>
          )

          return (
            <div key={key} className="space-y-8 xl:space-y-10">
              {header}
              <div className="space-y-4 lg:space-y-6">
                {weekDay.studyObjects.map(studyObject => (
                  <div key={studyObject.id} className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl">
                      {studyObject.name}
                    </h3>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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