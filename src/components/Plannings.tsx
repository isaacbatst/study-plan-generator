'use client'
import { useEffect, useMemo, useState } from 'react'
import { Planning, PlanningJSON } from '../domain/entities-2/Planning'
import { SubjectJSON } from '../domain/entities-2/Subject'
import CreatePlanningForm from './CreatePlanningForm/CreatePlanningForm'
import { CreatePlanningFormDialog } from './CreatePlanningForm/CreatePlanningFormDialog'
import PlanningView from './PlanningView'
import { useStoredState } from '../hooks/useStoredState'

type Props = {
  subjects: SubjectJSON[]
}

const Plannings = ({subjects}: Props) => {
  const [studyPlans, setStudyPlans] = useStoredState<PlanningJSON[]>('study-plans', [])
  const [showInitialForm, setShowInitialForm] = useState<boolean>(studyPlans.length === 0)
  
  useEffect(() => {
    if(studyPlans.length === 0) {
      setShowInitialForm(true)
    }

    if(studyPlans.length > 0) {
      setShowInitialForm(false)
    }
  }, [studyPlans.length])

  const addStudyPlan = (studyPlan: Planning) => {
    const newPlans = [...studyPlans, studyPlan.toJSON()]
    setStudyPlans(newPlans)
  }
  const removeStudyPlan = (id: string) => {
    const newPlans = studyPlans.filter((plan) => plan.id !== id)
    setStudyPlans(newPlans)
  }

  const sortedPlans = useMemo(() => {
    return studyPlans.slice().sort((a, b) => {
      const aDate = new Date(a.createdAt)
      const bDate = new Date(b.createdAt)
      return bDate.getTime() - aDate.getTime()
    })
  }, [studyPlans])
  return (
    <div className='sm:container'>
      {!showInitialForm && <CreatePlanningFormDialog savePlanning={addStudyPlan} subjects={subjects}  />}
      <div className="flex flex-col items-center gap-5 py-5">
        {showInitialForm && <div className='px-0'>
          <CreatePlanningForm 
            savePlanning={(studyPlan) => {
              addStudyPlan(studyPlan)
              setShowInitialForm(false)
            }} 
            subjects={subjects} 
          />
        </div>}
        {sortedPlans.map((studyPlan) => (
          <PlanningView key={studyPlan.id} removeStudyPlan={removeStudyPlan} studyPlan={studyPlan} />
        ))}
      </div>
    </div>
  )
}

export default Plannings