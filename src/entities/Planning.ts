import StudyDay from "./StudyDay"
import Subject from "./Subject"

type PlanningParams = {
  startDate: Date
  endDate: Date
  availableWeekDays?: boolean[]
}

export class Planning {
  private startDate: Date
  private endDate: Date
  private subjects: Subject[] = []
  private availableWeekDays: boolean[]

  constructor(params: PlanningParams) {
    this.availableWeekDays = params.availableWeekDays || [true, true, true, true, true, true, true]

    if (params.startDate > params.endDate) {
      throw new Error('START_DATE_AFTER_END_DATE')
    }

    if (params.startDate.getTime() === params.endDate.getTime()) {
      throw new Error('START_DATE_EQUAL_END_DATE')
    }

    this.startDate = params.startDate
    this.endDate = params.endDate
  }

  addSubject(name: string, duration: number): void {
    this.subjects.push(new Subject(name, duration))
  }

  getStudyDays(): StudyDay[] {
    const studyDays: StudyDay[] = []
    const availableDays = this.getAvailableDays()
    let planningDaysIndex = 0
    this.subjects.forEach(subject => {
      const subjectDuration = subject.getDuration()
      for(let i = 0; i < subjectDuration; i++) {
        const availableDay = availableDays[planningDaysIndex]
        const studyDay = new StudyDay(availableDay)
        studyDay.addSubject(subject.getName())
        studyDays.push(studyDay)
        planningDaysIndex++
      }
    })

    return studyDays 
  }
  
  getAvailableDays(): Date[] {
    const availableDays: Date[] = []
    const numberOfDays = this.getNumberOfDays()
    for (let i = 0; i < numberOfDays; i++) {
      const date = new Date(this.startDate)
      date.setDate(date.getDate() + i)
      if (this.isAvailable(date)) {
        availableDays.push(date)
      }
    }
    return availableDays
  }

  getSubjectsDays(): number {
    return this.subjects.reduce((total, subject) => total + subject.getDuration(), 0)
  }
  
  getNumberOfDays(): number {
    const oneDay = 1000 * 60 * 60 * 24
    const differenceInTime = this.endDate.getTime() - this.startDate.getTime()
    return Math.round(differenceInTime / oneDay) + 1
  }

  getSubjects(): Subject[] {
    return this.subjects
  }

  getStartDate(): Date {
    return this.startDate
  }

  getEndDate(): Date {
    return this.endDate
  }

  private isAvailable(date: Date): boolean {
    const day = date.getUTCDay()
    return this.availableWeekDays[day]
  }
}