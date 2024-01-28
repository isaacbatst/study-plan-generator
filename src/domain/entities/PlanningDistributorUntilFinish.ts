import { PlanningDistributionType } from "./PlanningDistributor";
import { PlanningDistributorBase } from "./PlanningDistributorBase";
import StudyDay from "./StudyDay";

export class PlanningDistributorUntilFinish extends PlanningDistributorBase {
  readonly type = PlanningDistributionType.UNTIL_FINISH

  fillStudyDay(studyDay: StudyDay, subjectIndex: number): number {
    const modules = this.getModules()
    while(studyDay.hasAvailableHours() && modules.length > 0) {
      const subjectModule = modules[0]
      const hasSufficientHours = studyDay.hasSufficientHours(subjectModule.getNecessaryHours())
      if(!hasSufficientHours) break;
      modules.splice(0, 1)
      studyDay.addStudyObject(subjectModule.getId(), subjectModule.getFullName(), subjectModule.getNecessaryHours())
    }

    return subjectIndex
  }
}