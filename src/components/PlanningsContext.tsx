import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Planning, PlanningJSON } from "../domain/entities/Planning";
import { useStoredState } from "../hooks/useStoredState";

type PlanningsContextType = {
  plannings: PlanningJSON[];
  isLoading: boolean;
  addStudyPlan: (studyPlan: Planning) => void;
  removeStudyPlan: (id: string) => void;
  toggleStudyObjectDone: (planningId: string, studyDayId: string, studyObjectId: string) => void;
};

const PlanningsContext = createContext<PlanningsContextType>(null as any);

export const PlanningsContextProvider = ({ children }: PropsWithChildren) => {
  const [studyPlans, setStudyPlans, isLoading] = useStoredState<PlanningJSON[]>('study-plans', [])

  const addStudyPlan = useCallback((studyPlan: Planning) => {
    const newPlans = [...studyPlans, studyPlan.toJSON()]
    setStudyPlans(newPlans)
  }, [studyPlans, setStudyPlans])
  const removeStudyPlan = useCallback( (id: string) => {
    const newPlans = studyPlans.filter((plan) => plan.id !== id)
    setStudyPlans(newPlans)
  }, [studyPlans, setStudyPlans])

  const sortedPlans = useMemo(() => {
    return studyPlans.slice().sort((a, b) => {
      const aDate = new Date(a.createdAt)
      const bDate = new Date(b.createdAt)
      return bDate.getTime() - aDate.getTime()
    })
  }, [studyPlans])

  const value = useMemo(() => ({
    plannings: sortedPlans,
    isLoading: isLoading,
    addStudyPlan,
    removeStudyPlan,
    toggleStudyObjectDone: (planningId: string, studyDayId: string, studyObjectId: string) => {
      const newPlans = studyPlans.map((plan) => {
        if(plan.id !== planningId) return plan
        const newStudyDays = plan.studyDays.map((studyDay) => {
          if(studyDay.id !== studyDayId) return studyDay
          const newStudyObjects = studyDay.plannedStudyObjects.map((planned) => {
            if(planned.studyObject.id !== studyObjectId) return planned
            return ({
              ...planned,
              done: !planned.done
            })
          })

          return ({
            ...studyDay,
            plannedStudyObjects: newStudyObjects
          })
        })
        return ({
          ...plan,
          studyDays: newStudyDays
        })
      })
      setStudyPlans(newPlans)
    }
  }), [studyPlans, sortedPlans, isLoading, setStudyPlans, addStudyPlan, removeStudyPlan])

  return <PlanningsContext.Provider value={value}>{children}</PlanningsContext.Provider>;
} 

export const usePlanningsContext = () => {
  const context = useContext(PlanningsContext)
  if(!context) {
    throw new Error('usePlanningsContext must be used within a PlanningsContextProvider')
  }
  return context
}