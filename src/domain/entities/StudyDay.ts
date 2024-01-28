import StudyObject, { StudyObjectJSON } from "./StudyObject"

export type StudyDayJSON = {
  date: string,
  remainingHours: number,
  studyObjects: StudyObjectJSON[],
}

export default class StudyDay {
  static fromJSON(json: StudyDayJSON): StudyDay {
    const studyDay = new StudyDay(new Date(json.date), json.remainingHours)
    json.studyObjects.forEach(studyObject => studyDay.addStudyObject(studyObject.id, studyObject.name, studyObject.necessaryHours))
    return studyDay
  }

  readonly studyObjects: StudyObject[] = []

  constructor(
    readonly date: Date,
    private remainingHours: number,
  ) {}

  getStudyObjects(): StudyObject[] {
    return this.studyObjects
  }

  addStudyObject(id: string, name: string, necessaryHours: number): void {
    this.studyObjects.push(new StudyObject(id, name, necessaryHours))
    this.remainingHours -= necessaryHours
  }

  hasSufficientHours(necessary: number): boolean {
    return this.remainingHours >= necessary
  }

  hasAvailableHours(): boolean {
    return this.remainingHours > 0
  }

  getRemainingHours(): number {
    return this.remainingHours
  }

  toString() {
    return `${this.date.toLocaleDateString('pt-BR')}: ${this.studyObjects.map(studyObject => studyObject.toString()).join(', ')}`
  }

  toJSON(): StudyDayJSON {
    return {
      date: this.date.toISOString(),
      remainingHours: this.remainingHours,
      studyObjects: this.studyObjects.map(studyObject => studyObject.toJSON()),
    }
  }
}