import { PlanningDistributionType, PlanningDistributor } from "./PlanningDistributor";
import { PlanningDistributorBase } from "./PlanningDistributorBase";
import StudyDay from "./StudyDay";
import Subject from "./Subject";
import SubjectThemeModule from "./SubjectThemeModule";

export class PlanningDistributorAlternateDaily extends PlanningDistributorBase implements PlanningDistributor { 
  type: PlanningDistributionType = PlanningDistributionType.ALTERNATE_DAILY;

  constructor(private subjects: Subject[], modules: SubjectThemeModule[]){
    super(modules)
  }

  fillStudyDay(studyDay: StudyDay, subjectIndex: number): number {
    const modules = this.getModules()
    while(studyDay.hasAvailableHours() && modules.length > 0) {
      const subject = this.subjects[subjectIndex]
      const subjectModuleIndex = modules.findIndex(module => module.getSubjectName() === subject.getName())
      const subjectModule = modules[subjectModuleIndex]
      if(!subjectModule && studyDay.getStudyObjects().length > 0) {
        break
      }
        
      if(!subjectModule) {
        subjectIndex++
        continue;
      }
        
      if(!studyDay.hasSufficientHours(subjectModule.getNecessaryHours())) {
        break
      }
  
      studyDay.addStudyObject(subjectModule.getId(), subjectModule.getFullName(), subjectModule.getNecessaryHours())
      modules.splice(subjectModuleIndex, 1)
    }

    return this.nextIndex(this.subjects, subjectIndex)
  }
}