import StudyDay from "./StudyDay";

export enum PlanningDistributionType {
  UNTIL_FINISH = 'until-finish',
  ALTERNATE = 'alternate',
  ALTERNATE_DAILY = 'alternate-daily'
} 


export interface PlanningDistributor {
  readonly type: PlanningDistributionType
  getStudyDays(): StudyDay[]
}