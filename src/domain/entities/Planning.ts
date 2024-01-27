import { NotEnoughDaysError } from "../errors/NotEnoughDaysError"
import StudyDay, { StudyDayJSON } from "./StudyDay"
import Subject from "./Subject"
import SubjectThemeModule from "./SubjectThemeModule"

export enum PlanningDistributionType {
  UNTIL_FINISH = 'until-finish',
  ALTERNATE = 'alternate',
  ALTERNATE_DAILY = 'alternate-daily'
} 

type PlanningParams = {
  startDate: Date
  endDate: Date
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
  availableDays: string[]
  necessaryDays: number
}

export class Planning {
  private id: string
  private createdAt: Date
  private startDate: Date
  private endDate: Date
  private subjects: Subject[] = []
  private availableWeekDays: boolean[]
  private hoursPerDay: number;
  private distribution: PlanningDistributionType

  constructor(params: PlanningParams) {
    this.id = params.id || crypto.randomUUID()
    this.createdAt = params.createdAt || new Date()
    this.availableWeekDays = params.availableWeekDays || [true, true, true, true, true, true, true]
    this.hoursPerDay = params.availableHoursPerDay || 2
    this.distribution = params.distribution || PlanningDistributionType.UNTIL_FINISH

    if (params.startDate > params.endDate) {
      throw new Error('START_DATE_AFTER_END_DATE')
    }

    if (params.startDate.getTime() === params.endDate.getTime()) {
      throw new Error('START_DATE_EQUAL_END_DATE')
    }

    this.startDate = params.startDate
    this.endDate = params.endDate
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject)
  }

  getStudyDays(): StudyDay[] {
    const studyDays = new Map<string, StudyDay>()
    const availableDays = this.getAvailableDays()
    let planningDaysIndex = 0
    let remainingHours = this.hoursPerDay;
    let modules: SubjectThemeModule[] = []

    if(availableDays.length < this.getNecessaryDays()) {
      throw new NotEnoughDaysError(this.getNecessaryDays(), availableDays.length)
    }

    if(this.distribution === 'until-finish') {
      modules = this.subjects
        .reduce<SubjectThemeModule[]>((acc, subject) => acc.concat(subject.getModules()), [])
    }

    if(this.distribution === 'alternate') {
      const [biggestSubject] = this.subjects
        .slice().sort((a, b) => b.getModules().length - a.getModules().length)
      for(let i = 0; i < biggestSubject.getModules().length; i++) {
        this.subjects.forEach(subject => {
          const subjectModule = subject.getModules()[i]
          if(subjectModule) {
            modules.push(subjectModule)
          }
        })
      }
    }

    if(this.distribution === 'alternate-daily') {
      const modulesIndexes = this.subjects.map(() => 0)
      let subjectIndex = 0
      for(let i = 0; i < availableDays.length; i++) {
        const availableDay = availableDays[i]
     

        const subject = this.subjects[subjectIndex]
        const subjectModuleIndex = modulesIndexes[subjectIndex]
        const subjectModules = subject.getModules()
        // 

        for(let j = subjectModuleIndex; j < subjectModules.length; j++) {
          const subjectModule = subjectModules[j]
          if(subjectModule && subjectModule.getNecessaryHours() <= remainingHours) {
            const studyDay = studyDays.get(availableDay.toISOString()) ?? new StudyDay(availableDay)
            const studyObjectName = `${subjectModule.getSubjectName()} ${subjectModule.getName()}`
            studyDay.addStudyObject(subjectModule.getId(), studyObjectName, subjectModule.getNecessaryHours())
            if(!studyDays.has(availableDay.toISOString())) {
              studyDays.set(availableDay.toISOString(), studyDay)
            }
      
            modulesIndexes[subjectIndex]++
            remainingHours -= subjectModule.getNecessaryHours()
          }
        }
        remainingHours = this.hoursPerDay
        for(let j = 0; j < this.subjects.length; j++) {
          subjectIndex = this.getNextIndex(subjectIndex, this.subjects)
          if(this.subjects[subjectIndex].getModules()[modulesIndexes[subjectIndex]]) {
            break
          }
        }     
      }
    }

    modules.forEach(module => {
      if(remainingHours < module.getNecessaryHours()) {
        planningDaysIndex++
        remainingHours = this.hoursPerDay
      }
      const availableDay = availableDays[planningDaysIndex]
      const studyDay = studyDays.get(availableDay.toISOString()) ?? new StudyDay(availableDay)

      const studyObjectName = `${module.getSubjectName()} ${module.getName()}`
      studyDay.addStudyObject(module.getId(), studyObjectName, module.getNecessaryHours())

      if(!studyDays.has(availableDay.toISOString())) {
        studyDays.set(availableDay.toISOString(), studyDay)
      }

      remainingHours -= module.getNecessaryHours()
    })
    return Array.from(studyDays.values())
  }

  getNextIndex<T>(index: number, array: T[]) {
    if(index === array.length - 1) {
      return 0
    }
    return index + 1
  }

  getHoursPerDay(): number {
    return this.hoursPerDay
  }
  
  getAvailableDays(): Date[] {
    const availableDays: Date[] = []
    const numberOfDays = this.getNumberOfDays()
    for (let i = 0; i < numberOfDays; i++) {
      const date = new Date(this.startDate)
      const nextDay = date.getDate() + i
      date.setDate(nextDay)
      if (this.isAvailable(date)) {
        availableDays.push(date)
      }
    }
    return availableDays
  }

  getNecessaryDays(): number {
    const necessaryHours = this.subjects
      .reduce((total, subject) => total + subject.getNecessaryHours(), 0)

    return Math.ceil(necessaryHours / this.hoursPerDay)
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
  
  getId(): string {
    return this.id
  }

  getCreatedAt(): Date {
    return this.createdAt
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
      availableDays: this.getAvailableDays().map(date => date.toISOString()),
      necessaryDays: this.getNecessaryDays()
    }
  }

  toString(): string {
    const title = `Planejamento de ${this.startDate.toLocaleDateString('pt-BR')} até ${this.endDate.toLocaleDateString('pt-BR')}\n`
    const body = this.getStudyDays().map(studyDay => studyDay.toString()).join('\n')
    return title + body
  }

  private isAvailable(date: Date): boolean {
    const day = date.getUTCDay()
    return this.availableWeekDays[day]
  }
}