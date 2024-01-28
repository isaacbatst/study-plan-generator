import { Planning } from "./Planning";
import { PlanningDistributor, PlanningDistributionType } from "./PlanningDistributor";
import { PlanningDistributorBase } from "./PlanningDistributorBase";
import StudyDay from "./StudyDay";

export class PlanningDistributorAlternateDaily extends PlanningDistributorBase implements PlanningDistributor { 
  type: PlanningDistributionType = PlanningDistributionType.ALTERNATE_DAILY;

  getStudyDays(): StudyDay[] {
    const modules = this.getModules()
    const subjects = this.getSubjects()
    const startDate = this.getStartDate()
    const hoursPerDay = this.getHoursPerDay()
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
      const studyDay = new StudyDay(studyDayDate, hoursPerDay)
      
      while(studyDay.hasAvailableHours() && modules.length > 0) {
        const subject = subjects[subjectIndex]
        const subjectModuleIndex = modules.findIndex(module => module.getSubjectName() === subject.getName())
        const subjectModule = modules[subjectModuleIndex]
        if(!subjectModule || !studyDay.hasSufficientHours(subjectModule.getNecessaryHours())) {
          break
        }
  
        studyDay.addStudyObject(subjectModule.getId(), subjectModule.getFullName(), subjectModule.getNecessaryHours())
        modules.splice(subjectModuleIndex, 1)
      }

      subjectIndex = this.nextIndex(subjects, subjectIndex)

      if(studyDay.getStudyObjects().length > 0) {
        studyDays.set(studyDayDate.toISOString(), studyDay)
        studyDayIndex++
      }
    }
    return Array.from(studyDays.values())
  }
}