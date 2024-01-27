'use client'
import { useEffect, useMemo, useState } from 'react'
import StudyPlan, { StudyPlanJSON } from '../domain/entities/StudyPlan'
import { SubjectJSON } from '../domain/entities/Subject'
import CreatePlanningForm from './CreatePlanningForm'
import { CreatePlanningFormDialog } from './CreatePlanningFormDialog'
import StudyPlanView from './StudyPlan'
import { useStoredState } from '../hooks/useStoredState'

type Props = {
  subjects: SubjectJSON[]
}

const Plannings = ({subjects}: Props) => {
  const [studyPlans, setStudyPlans] = useStoredState<StudyPlanJSON[]>('study-plans', [])
  const [showInitialForm, setShowInitialForm] = useState<boolean>(studyPlans.length === 0)
  
  useEffect(() => {
    if(studyPlans.length === 0) {
      setShowInitialForm(true)
    }

    if(studyPlans.length > 0) {
      setShowInitialForm(false)
    }
  }, [studyPlans.length])

  const addStudyPlan = (studyPlan: StudyPlan) => {
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
    <div>
      {!showInitialForm && <CreatePlanningFormDialog addStudyPlan={addStudyPlan} subjects={subjects}  />}
      <div className="flex flex-col gap-5 py-5">
        {showInitialForm && <CreatePlanningForm 
          addStudyPlan={(studyPlan) => {
            addStudyPlan(studyPlan)
            setShowInitialForm(false)
          }} 
          subjects={subjects} 
        />}
        {sortedPlans.map((studyPlan) => (
          <StudyPlanView key={studyPlan.id} removeStudyPlan={removeStudyPlan} studyPlan={studyPlan} />
        ))}
      </div>
    </div>
  )
}

export default Plannings