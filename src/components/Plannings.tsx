'use client'
import { useState } from 'react'
import StudyPlan, { StudyPlanJSON } from '../domain/entities/StudyPlan'
import { SubjectJSON } from '../domain/entities/Subject'
import CreatePlanningForm from './CreatePlanningForm'
import { CreatePlanningFormDialog } from './CreatePlanningFormDialog'
import StudyDays from './StudyDays'

type Props = {
  subjects: SubjectJSON[]
}

const Plannings = ({subjects}: Props) => {
  const [studyPlans, setStudyPlans] = useState<StudyPlanJSON[]>([])
  const [showInitialForm, setShowInitialForm] = useState<boolean>(studyPlans.length === 0)
  const addStudyPlan = (studyPlan: StudyPlan) => {
    const newPlans = [...studyPlans, studyPlan.toJSON()]
    setStudyPlans(newPlans)
  }
  return (
    <div>
      {showInitialForm && <CreatePlanningForm 
        addStudyPlan={(studyPlan) => {
          addStudyPlan(studyPlan)
          setShowInitialForm(false)
        }} 
        subjects={subjects} 
      />}
      {!showInitialForm && <CreatePlanningFormDialog addStudyPlan={addStudyPlan} subjects={subjects}  />}
      {studyPlans.map((studyPlan, index) => (
        <StudyDays key={index} studyDays={studyPlan.studyDays} />
      ))}

    </div>
  )
}

export default Plannings