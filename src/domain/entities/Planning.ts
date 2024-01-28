import { PlanningDistributor, PlanningDistributionType } from "./PlanningDistributor"
import { PlanningDistributorAlternate } from "./PlanningDistributorAlternate"
import { PlanningDistributorAlternateDaily } from "./PlanningDistributorAlternateDaily"
import { PlanningDistributorUntilFinish } from "./PlanningDistributorUntilFinish"
import StudyDay, { StudyDayJSON } from "./StudyDay"
import Subject, { SubjectJSON } from "./Subject"
import SubjectThemeModule from "./SubjectThemeModule"

type PlanningParams = {
  startDate: Date
  availableWeekDays?: boolean[]
  availableHoursPerDay?: number
  distribution?: PlanningDistributionType
  id?: string
  createdAt?: Date
}

export type PlanningJSON = {
  id: string
  createdAt: string
  startDate: string
  endDate: string
  availableWeekDays: boolean[]
  availableHoursPerDay: number
  distribution: PlanningDistributionType
  studyDays: StudyDayJSON[]
  necessaryDays: number
  subjects: SubjectJSON[]
}

export class Planning {
  static fromJSON(json: PlanningJSON): Planning {
    const planning = new Planning({
      id: json.id,
      createdAt: new Date(json.createdAt),
      startDate: new Date(json.startDate),
      availableWeekDays: json.availableWeekDays,
      availableHoursPerDay: json.availableHoursPerDay,
      distribution: json.distribution,
    })

    json.subjects.forEach(subject => planning.addSubject(Subject.fromJSON(subject)))
    return planning
  }

  private id: string
  private createdAt: Date
  private startDate: Date
  private subjects: Subject[] = []
  private availableWeekDays: boolean[]
  private hoursPerDay: number;
  private distribution: PlanningDistributionType


  constructor(params: PlanningParams) {
    this.id = params.id || crypto.randomUUID()
    this.createdAt = params.createdAt || new Date()
    this.availableWeekDays = params.availableWeekDays || [true, true, true, true, true, true, true]
    this.hoursPerDay = params.availableHoursPerDay || 2
    this.startDate = params.startDate
    this.distribution = params.distribution || PlanningDistributionType.UNTIL_FINISH
  }

  get endDate(): Date {
    const studyDays = this.getStudyDays()

    if(studyDays.length === 0) {
      return this.startDate
    }

    const lastStudyDay = studyDays[studyDays.length - 1]
    return lastStudyDay.date
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject)
  }

  getStudyDays(): StudyDay[] {
    const distribution = this.makeDistributor(this.distribution)
    return distribution.getStudyDays()
  }

  
  getHoursPerDay(): number {
    return this.hoursPerDay
  }

  calculateNecessaryDays(): number {
    const necessaryHours = this.subjects
      .reduce((total, subject) => total + subject.getNecessaryHours(), 0)

    return Math.ceil(necessaryHours / this.hoursPerDay)
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
  
  getId(): string {
    return this.id
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  getAvailableWeekDays(): boolean[] {
    return this.availableWeekDays
  }

  isAvailableDate(date: Date): boolean {
    const day = date.getUTCDay()
    return this.availableWeekDays[day]
  }

  getModules() {
    return this.subjects
      .reduce<SubjectThemeModule[]>((acc, subject) => acc.concat(subject.getModules()), [])
  }

  toJSON(): PlanningJSON {
    return {
      id: this.id,
      createdAt: this.createdAt.toISOString(),
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
      availableWeekDays: this.availableWeekDays,
      availableHoursPerDay: this.hoursPerDay,
      distribution: this.distribution,
      studyDays: this.getStudyDays().map(studyDay => studyDay.toJSON()),
      necessaryDays: this.calculateNecessaryDays(),
      subjects: this.subjects.map(subject => subject.toJSON()),
    }
  }

  toString(): string {
    const title = `Planejamento de ${this.startDate.toLocaleDateString('pt-BR')} até ${this.endDate.toLocaleDateString('pt-BR')}\n`
    const body = this.getStudyDays().map(studyDay => studyDay.toString()).join('\n')
    return title + body
  }

  private makeDistributor(type: PlanningDistributionType): PlanningDistributor {
    switch(type) {
    case PlanningDistributionType.UNTIL_FINISH:
      return new PlanningDistributorUntilFinish(this)
    case PlanningDistributionType.ALTERNATE:
      return new PlanningDistributorAlternate(this)
    case PlanningDistributionType.ALTERNATE_DAILY:
      return new PlanningDistributorAlternateDaily(this)
    default:
      throw new Error('Invalid distribution type')
    }
  }

}