import { PlanningDistributionType } from "./PlanningDistributor";
import { PlanningDistributorBase } from "./PlanningDistributorBase";
import StudyDay from "./StudyDay";
import SubjectThemeModule from "./SubjectThemeModule";

export class PlanningDistributorUntilFinish extends PlanningDistributorBase {
  readonly type = PlanningDistributionType.UNTIL_FINISH

  getStudyDays() {
    const startDate = this.getStartDate()
    const studyDays = new Map<string, StudyDay>()
    let studyDateIndex = 0

    let modules: SubjectThemeModule[] = this.getModules()
    while(modules.length > 0) {
      const passedDays = PlanningDistributorBase.oneDay * studyDateIndex
      const studyDayDate = new Date(startDate.getTime() + passedDays)
      if(!this.isAvailableDate(studyDayDate)) {
        studyDateIndex++
        continue;
      }
      const studyDay = new StudyDay(studyDayDate, this.getHoursPerDay())
      while(studyDay.hasAvailableHours() && modules.length > 0) {
        const subjectModule = modules[0]
        const hasSufficientHours = studyDay.hasSufficientHours(subjectModule.getNecessaryHours())
        if(!hasSufficientHours) break;
        modules.splice(0, 1)
        studyDay.addStudyObject(subjectModule.getId(), subjectModule.getName(), subjectModule.getNecessaryHours())
      }
      studyDays.set(studyDayDate.toISOString(), studyDay)
      studyDateIndex++
    }
    return Array.from(studyDays.values())
  }
}