import StudyObject, { StudyObjectJSON } from "./StudyObject"

export type StudyDayJSON = {
  date: string,
  studyObjects: StudyObjectJSON[],
}

export default class StudyDay {
  readonly studyObjects: StudyObject[] = []

  constructor(
    readonly date: Date,
  ) {}

  addStudyObject(id: string, name: string, necessaryHours: number): void {
    this.studyObjects.push(new StudyObject(id, name, necessaryHours))
  }

  toString() {
    return `${this.date.toLocaleDateString('pt-BR')}: ${this.studyObjects.map(studyObject => studyObject.toString()).join(', ')}`
  }

  toJSON(): StudyDayJSON {
    return {
      date: this.date.toISOString(),
      studyObjects: this.studyObjects.map(studyObject => studyObject.toJSON()),
    }
  }
}