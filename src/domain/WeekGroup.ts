import { StudyDayJSON } from "./entities-2/StudyDay";

export type WeekGroup = {
  startDate: string;
  endDate: string;
  studyDays: StudyDayJSON[];
};