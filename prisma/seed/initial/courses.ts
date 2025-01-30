import { Course } from "../../../src/domain/entities/Course";

const coursesProps = {
  computerScience: {
    name: 'Ciência da Computação',
  },
  systemsAnalysis: {
    name: 'Análise e Desenvolvimento de Sistemas',
  },
  cybersecurity: {
    name: 'Cybersecurity',
  }
}

export const courses = Object.fromEntries(
  Object.entries(coursesProps).map(([key, value]) => {
    const course = Course.create({
      name: value.name,
    })
    if (course.isLeft()) {
      throw new Error(course.getLeft())
    }
    return [key, course.getRight()]
  })
) as Record<keyof typeof coursesProps, Course>