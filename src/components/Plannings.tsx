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
  const {plannings, addStudyPlan,removeStudyPlan} = usePlanningsContext()
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
    <div className='2xl:container'>
      {!showInitialForm && <CreatePlanningFormDialog savePlanning={addStudyPlan} subjects={subjects}  />}
      <div className="flex flex-col gap-5 py-5">
        {showInitialForm && <div className='px-0'>
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