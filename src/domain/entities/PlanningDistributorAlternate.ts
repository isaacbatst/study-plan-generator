import { PlanningDistributionType, PlanningDistributor } from "./PlanningDistributor";
import { PlanningDistributorBase } from "./PlanningDistributorBase";
import StudyDay from "./StudyDay";

export class PlanningDistributorAlternate extends PlanningDistributorBase implements PlanningDistributor {
  readonly type: PlanningDistributionType = PlanningDistributionType.ALTERNATE
  
  getStudyDays(): StudyDay[] {
    const modules = this.getModules()
    const subjects = this.getSubjects()
    const startDate = this.getStartDate()
    const studyDays = new Map<string, StudyDay>()
    let studyDayIndex = 0
    let subjectIndex = 0

    while(modules.length > 0) {
      const passedDays = PlanningDistributorBase.oneDay * studyDayIndex
      const studyDayDate = new Date(startDate.getTime() + passedDays)      
      if(!this.isAvailableDate(studyDayDate)) {
        studyDayIndex++
        continue;
      }
      
      const studyDay = new StudyDay(studyDayDate, this.getHoursPerDay())
      
      while(studyDay.hasAvailableHours() && modules.length > 0) {
        const subject = subjects[subjectIndex]
        const subjectModuleIndex = modules.findIndex(module => module.getSubjectName() === subject.getName())
        if(subjectModuleIndex === -1) {
          subjectIndex = this.nextIndex(subjects, subjectIndex)
          continue;
        };
        const subjectModule = modules[subjectModuleIndex]
        const hasSufficientHours = studyDay.hasSufficientHours(subjectModule.getNecessaryHours())
        if(!hasSufficientHours) break;
        studyDay.addStudyObject(subjectModule.getId(), subjectModule.getFullName(), subjectModule.getNecessaryHours())
        modules.splice(subjectModuleIndex, 1)
        subjectIndex = this.nextIndex(subjects, subjectIndex)
      }
      studyDays.set(studyDayDate.toISOString(), studyDay)
      studyDayIndex++
    }

    return Array.from(studyDays.values())
  }
}