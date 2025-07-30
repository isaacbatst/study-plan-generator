import { StudyDayJSON } from "./entities/StudyDay";

export type WeekGroup = {
  startDate: string;
  endDate: string;
  studyDays: StudyDayJSON[];
};
