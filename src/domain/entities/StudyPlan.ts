import StudyDay, { StudyDayJSON } from "./StudyDay";

export type StudyPlanJSON = {
  id: string,
  createdAt: string,
  studyDays: StudyDayJSON[]
}

export default class StudyPlan {
  private studyDays: StudyDay[] = []

  constructor(readonly id: string, readonly createdAt: Date, studyDays: StudyDay[]) {
    this.studyDays = studyDays
  }

  getStudyDays(): StudyDay[] {
    return this.studyDays
  }

  toJSON(): StudyPlanJSON {
    return {
      id: this.id,
      createdAt: this.createdAt.toISOString(),
      studyDays: this.studyDays.map(studyDay => studyDay.toJSON())
    }
  }

  toString(){
    return this.studyDays.map(studyDay => studyDay.toString()).join('\n')
  }
}