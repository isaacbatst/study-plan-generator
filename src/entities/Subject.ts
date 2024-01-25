import StudyDay from "./StudyDay"

export default class Subject {
  private name: string
  private duration: number

  constructor(name: string, duration: number) {
    if (duration < 1) {
      throw new Error('DURATION_LESS_THAN_ONE')
    }

    this.name = name
    this.duration = duration
  }

  getName(): string {
    return this.name
  }

  getDuration(): number {
    return this.duration
  }

  getStudyDays(availableDays: Date[], index: number): StudyDay[] {
    const subjectDuration = this.getDuration()
    const studyDays: StudyDay[] = []
    for(let i = 0; i < subjectDuration; i++) {
      const availableDay = availableDays[index]
      const studyDay = new StudyDay(availableDay)
      studyDay.addSubject(this.getName())
      studyDays.push(studyDay)
      index++
    }
    return studyDays
  }
}