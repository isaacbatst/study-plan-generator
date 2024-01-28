import { Planning } from "./Planning";
import { PlanningDistributionType, PlanningDistributor } from "./PlanningDistributor";
import StudyDay from "./StudyDay";
import Subject from "./Subject";
import SubjectThemeModule from "./SubjectThemeModule";

export abstract class PlanningDistributorBase implements PlanningDistributor {
  static oneDay = 1000 * 60 * 60 * 24

  abstract readonly type: PlanningDistributionType
  abstract getStudyDays(): StudyDay[]

  constructor(private planning: Planning){}

  protected getSubjects(): Subject[] {
    return this.planning.getSubjects()
  }

  protected getModules(): SubjectThemeModule[] {
    return this.planning.getModules()
  }

  protected getStartDate(): Date {
    return this.planning.getStartDate()
  }

  protected getHoursPerDay(): number {
    return this.planning.getHoursPerDay()
  }

  protected isAvailableDate(date: Date): boolean {
    return this.planning.isAvailableDate(date)
  }

  protected nextIndex<T>(array: T[], currentIndex: number): number {
    if(currentIndex === array.length - 1) {
      return 0
    }
    return currentIndex + 1
  }
}