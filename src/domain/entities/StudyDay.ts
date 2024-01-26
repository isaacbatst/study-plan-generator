import StudyObject from "./StudyObject"

export default class StudyDay {
  readonly studyObjects: StudyObject[] = []

  constructor(
    readonly date: Date,
  ) {}

  addStudyObject(moduleId: string): void {
    this.studyObjects.push(new StudyObject(moduleId))
  }

  toJSON() {
    return {
      date: this.date.toISOString(),
      subjects: this.studyObjects.map(studyObject => studyObject.toJSON()),
    }
  }
}