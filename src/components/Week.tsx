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

// 1.2 O PROCESSO DE EXPLORAÇÃO DO POTENCIAL DOS COMPUTADORES ATRAVÉS DE CÓDIGOS E ALGORITMOS
//  to 1.2 O Processo de Exploração do Potencial dos Computadores Através de Códigos e Algoritmos
const capitalize = (str: string) => {
  return str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')
}

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
          const header = (<div className='flex items-end xl:flex-col gap-2 xl:gap-0 xl:items-start'>
            <h2 className="text-2xl font-bold tracking-tighter leading-7 sm:text-2xl 2xl:text-2xl flex lg:block items-center">
              <span>{date.getDate()} de {monthNamesPtBr[date.getMonth()]}</span>
            </h2>
            <p className="text-sm xl:text-base font-light text-gray-500 tracking-normal">
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
                <div className="space-y-1 xl:space-y-2">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-xl">Dia livre</h3>
                  <p className="max-w-[900px]  text-gray-500 md:text-base dark:text-gray-400">
                    Nenhum estudo programado para este dia
                  </p>
                </div>
              </div>
            </div>
          )

          return (
            <div key={key} className="space-y-3 lg:space-y-4">
              {header}
              <div className="space-y-3 lg:space-y-10">
                {weekDay.hoursPerStudyObjects.map(({ hours, studyObject }) => (
                  <div key={studyObject.id} className="space-y-1 xl:space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                      {studyObject.subjectName}
                    </h3>
                    <h4 className='  text-gray-500  dark:text-gray-400'>
                      {capitalize(studyObject.name)}
                    </h4>
                    <p className="max-w-[900px] font-semibold text-gray-500 md:text-base dark:text-gray-400">
                      {hours} horas
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