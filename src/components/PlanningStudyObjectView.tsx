import React from 'react'
import { StudyObjectJSON } from '../domain/entities-2/StudyObject'
import CheckboxWithText from './ui/checkbox-with-text';
import { usePlanningsContext } from './PlanningsContext';

type Props = {
  studyObject: StudyObjectJSON;
  hours: number;
  done: boolean;
  planningId: string;
  studyDayId: string;
  studyDayDate: string;
}

const capitalize = (str: string) => {
  return str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')
}

const getColor = (done: boolean, hasPassed: boolean) => {
  if(done) return 'bg-green-400'
  if(hasPassed) return 'bg-red-600'
  return 'bg-gray-400'
}

const PlanningStudyObjectView = ({
  done,
  hours,
  studyObject,
  planningId,
  studyDayId,
  studyDayDate
}: Props) => {
  const {toggleStudyObjectDone} = usePlanningsContext()

  const date = new Date(studyDayDate)
  const now = new Date()
  const hasPassed = date < now;
  const color = getColor(done, hasPassed)

  return (
    <div key={studyObject.id} className={`${color} bg-opacity-15 p-5 space-y-3`}>
      <div className='space-y-1 xl:space-y-2'>
        <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
          {studyObject.subjectName}
        </h3>
        <h4 className={`font-semibold`}>
          {capitalize(studyObject.name)}
        </h4>
        <p className="max-w-[900px] font-semibold text-gray-500 md:text-base dark:text-gray-400">
          {hours} horas
        </p>
      </div>
      <CheckboxWithText checked={done} onChange={() => toggleStudyObjectDone(planningId, studyDayId, studyObject.id)}>
        {
          done ?
            <span className='line-through'>Concluído</span> :
            <span className=''>Pendente</span>
        }
      </CheckboxWithText>
    </div>
  )
}

export default PlanningStudyObjectView