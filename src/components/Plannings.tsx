'use client'
import { useEffect, useState } from 'react'
import { SubjectJSON } from '../domain/entities-2/Subject'
import CreatePlanningForm from './CreatePlanningForm/CreatePlanningForm'
import { CreatePlanningFormDialog } from './CreatePlanningForm/CreatePlanningFormDialog'
import { usePlanningsContext } from './PlanningsContext'
import PlanningView from './PlanningView'

type Props = {
  subjects: SubjectJSON[]
}

const Plannings = ({subjects}: Props) => {
  const {plannings, isLoading, addStudyPlan,removeStudyPlan} = usePlanningsContext()
  const [showInitialForm, setShowInitialForm] = useState<boolean>(plannings.length === 0)
  
  useEffect(() => {
    if(plannings.length === 0) {
      setShowInitialForm(true)
    }

    if(plannings.length > 0) {
      setShowInitialForm(false)
    }
  }, [plannings.length])

  return (
    <div className='bg-gray-50 flex-1 flex flex-col items-center justify-center'>
      {
        isLoading && <div className='flex justify-center items-center flex-1'>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="animate-spin">
            <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" className="spinner_P7sC"/>
          </svg>
        </div>
      }
      {!isLoading && !showInitialForm && <CreatePlanningFormDialog savePlanning={addStudyPlan} subjects={subjects}  />}
      <div className="flex flex-col items-center gap-5 py-5">
        {!isLoading && showInitialForm && <div className='px-0'>
          <CreatePlanningForm 
            savePlanning={(studyPlan) => {
              addStudyPlan(studyPlan)
              setShowInitialForm(false)
            }} 
            subjects={subjects} 
          />
        </div>}
        {plannings.map((studyPlan) => (
          <PlanningView key={studyPlan.id} removeStudyPlan={removeStudyPlan} studyPlan={studyPlan} />
        ))}
      </div>
    </div>
  )
}

export default Plannings