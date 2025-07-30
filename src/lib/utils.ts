import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SubjectJSON } from "../domain/entities/Subject";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractCoursePeriodsOptions(subjects: SubjectJSON[]) {
  const coursePeriods = subjects
    .flatMap((subject) => {
      return subject.coursePeriods.map((coursePeriod) => ({
        ...coursePeriod,
        status: subject.status,
      }));
    })
    .filter(
      (coursePeriod, index, self) =>
        self.findIndex((cp) => cp.id === coursePeriod.id) === index,
    );
  const sortedCoursePeriods = coursePeriods
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return sortedCoursePeriods;
}
