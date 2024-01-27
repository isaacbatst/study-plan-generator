import { NotEnoughDaysError } from "../errors/NotEnoughDaysError"
import StudyDay from "./StudyDay"
import Subject from "./Subject"
import SubjectThemeModule from "./SubjectThemeModule"

type PlanningParams = {
  startDate: Date
  endDate: Date
  availableWeekDays?: boolean[]
  availableHoursPerDay?: number
}

export class Planning {
  private startDate: Date
  private endDate: Date
  private subjects: Subject[] = []
  private availableWeekDays: boolean[]
  private hoursPerDay: number;

  constructor(params: PlanningParams) {
    this.availableWeekDays = params.availableWeekDays || [true, true, true, true, true, true, true]
    this.hoursPerDay = params.availableHoursPerDay || 2

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

  getStudyDays(strategy = 'default'): StudyDay[] {
    const studyDays = new Map<string, StudyDay>()
    const availableDays = this.getAvailableDays()
    let planningDaysIndex = 0
    let remainingHours = this.hoursPerDay;
    let modules: SubjectThemeModule[] = []

    if(strategy === 'default') {
      modules = this.subjects
        .reduce<SubjectThemeModule[]>((acc, subject) => acc.concat(subject.getModules()), [])
    }

    if(strategy === 'alternate') {
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

    if(strategy === 'alternate-daily') {
      const modulesIndexes = this.subjects.map(() => 0)
      let subjectIndex = 0
      for(let i = 0; i < availableDays.length; i++) {
        const availableDay = availableDays[i]
        const subject = this.subjects[subjectIndex]
        const subjectModuleIndex = modulesIndexes[subjectIndex]
        const subjectModules = subject.getModules()
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
        const subjectsLastIndex = this.subjects.length - 1
        remainingHours = this.hoursPerDay
        if(subjectIndex === subjectsLastIndex) {
          subjectIndex = 0
        } else {
          subjectIndex++
        }
      }
    }

    modules.forEach(module => {
      if(remainingHours < module.getNecessaryHours()) {
        planningDaysIndex++
        remainingHours = this.hoursPerDay
      }
      const availableDay = availableDays[planningDaysIndex]
      if(!availableDay) {
        throw new NotEnoughDaysError(this.getNecessaryDays(), availableDays.length)
      }

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

  private isAvailable(date: Date): boolean {
    const day = date.getUTCDay()
    return this.availableWeekDays[day]
  }
}