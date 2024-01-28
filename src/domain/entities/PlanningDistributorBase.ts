import { PlanningDistributionType, PlanningDistributor } from "./PlanningDistributor";
import StudyDay from "./StudyDay";
import SubjectThemeModule from "./SubjectThemeModule";

export abstract class PlanningDistributorBase implements PlanningDistributor {
  static oneDay = 1000 * 60 * 60 * 24

  abstract readonly type: PlanningDistributionType
  abstract fillStudyDay(studyDay: StudyDay, subjectIndex: number): number

  constructor(private modules: SubjectThemeModule[]){}

  protected getModules(): SubjectThemeModule[] {
    return this.modules
  }
  
  protected nextIndex<T>(array: T[], currentIndex: number): number {
    if(currentIndex === array.length - 1) {
      return 0
    }
    return currentIndex + 1
  }
}