import StudyDay, { StudyDayJSON } from "./StudyDay";

export type StudyPlanJSON = {
  id: string,
  studyDays: StudyDayJSON[]
}

export default class StudyPlan {
  private studyDays: StudyDay[] = []

  constructor(readonly id: string, studyDays: StudyDay[]) {
    this.studyDays = studyDays
  }

  getStudyDays(): StudyDay[] {
    return this.studyDays
  }

  toJSON(): StudyPlanJSON {
    return {
      id: this.id,
      studyDays: this.studyDays.map(studyDay => studyDay.toJSON())
    }
  }

  toString(){
    return this.studyDays.map(studyDay => studyDay.toString()).join('\n')
  }
}