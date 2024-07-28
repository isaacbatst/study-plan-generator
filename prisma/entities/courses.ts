import { Course } from "../../src/domain/entities-2/Course";
import { coursePeriods } from "./course-periods";

const coursesProps = [
  {
    name: 'Ciência da Computação',
    periods: coursePeriods.computerScience
  },
  {
    name: 'Análise e Desenvolvimento de Sistemas',
    periods: coursePeriods.systemsAnalysis,
  },
  {
    name: 'Cybersecurity',
    periods: coursePeriods.cybersecurity,
  }
]

export const courses = coursesProps.map(courseProps => {
  const course = Course.create(courseProps)
  if(course.isLeft()) {
    throw new Error(course.getLeft())
  }
  return course.getRight()
})