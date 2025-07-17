import { randomUUID } from 'crypto';
import { courses } from "./courses";

const computerSciencePeriods = [
  {
    id: randomUUID(),
    position: 0,
    courseId: courses.computerScience.id,
  },
  {
    id: randomUUID(),
    position: 1,
    courseId: courses.computerScience.id,
  },
  {
    id: randomUUID(),
    position: 2,
    courseId: courses.computerScience.id,
  },
  {
    id: randomUUID(),
    position: 3,
    courseId: courses.computerScience.id,
  },
];

const cybersecurityPeriods = [
  {
    id: randomUUID(),
    position: 0,
    courseId: courses.cybersecurity.id,
  },
  {
    id: randomUUID(),
    position: 1,
    courseId: courses.cybersecurity.id,
  },
];

const systemsAnalysisPeriods = [
  null,
  {
    id: randomUUID(),
    position: 1,
    courseId: courses.systemsAnalysis.id,
  },
];

export const coursePeriods = new Map([
  [courses.computerScience, computerSciencePeriods],
  [courses.cybersecurity, cybersecurityPeriods],
  [courses.systemsAnalysis, systemsAnalysisPeriods],
]);