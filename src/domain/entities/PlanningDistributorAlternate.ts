import { PlanningDistributionType, PlanningDistributor } from "./PlanningDistributor";
import { PlanningDistributorBase } from "./PlanningDistributorBase";
import StudyDay from "./StudyDay";
import Subject from "./Subject";
import SubjectThemeModule from "./SubjectThemeModule";

export class PlanningDistributorAlternate extends PlanningDistributorBase implements PlanningDistributor {
  readonly type: PlanningDistributionType = PlanningDistributionType.ALTERNATE
  
  constructor(private subjects: Subject[], modules: SubjectThemeModule[]){
    super(modules)
  }

  fillStudyDay(studyDay: StudyDay, subjectIndex: number): number {
    const modules = this.getModules()

    while(studyDay.hasAvailableHours() && modules.length > 0) {
      const subject = this.subjects[subjectIndex]
      const subjectModuleIndex = modules.findIndex(module => module.getSubjectName() === subject.getName())
      const subjectModule = modules[subjectModuleIndex]
      if(!subjectModule) {
        subjectIndex = this.nextIndex(this.subjects, subjectIndex)
        continue;
      };
      const hasSufficientHours = studyDay.hasSufficientHours(subjectModule.getNecessaryHours())
      if(!hasSufficientHours) break;
      studyDay.addStudyObject(subjectModule.getId(), subjectModule.getFullName(), subjectModule.getNecessaryHours())
      modules.splice(subjectModuleIndex, 1)
      subjectIndex = this.nextIndex(this.subjects, subjectIndex)
    }

    return subjectIndex
  }
}