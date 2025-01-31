import { Course } from "../../../src/domain/entities/Course";
import { CoursePeriod, CoursePeriodProps } from "../../../src/domain/entities/CoursePeriod";
import { Subject } from "../../../src/domain/entities/Subject";
import { courses } from "./courses";
import { subjects } from "./subjects";

type PeriodProps = {
  position: number
}

const computerSciencePeriods: [Course, PeriodProps[]] = [
  courses.computerScience,
  [
    // {
    //   position: 0,
    // },
    // {
    //   position: 1,
    // },
    // {
    //   position: 2,
    // },
    {
      position: 3,
    },
  ],
];

// const cybersecurityPeriods: [Course, PeriodProps[]] = [courses.cybersecurity, [
//   {
//     position: 0,
//   },
//   {
//     position: 1,
//   },
// ]]

// const systemsAnalysisPeriods: [Course, (PeriodProps | null)[]] = [courses.systemsAnalysis, [
//   null,
//   {
//     position: 1,
//   },
// ]]

const periodsProps = new Map([
  computerSciencePeriods,
  // cybersecurityPeriods,
  // systemsAnalysisPeriods,
])

const coursePeriods = new Map<Course, (CoursePeriod | null)[]>()

periodsProps.forEach((periodProps, course) => {
  const periods = periodProps.map(period => {
    if (!period) {
      return null
    }

    const coursePeriod = CoursePeriod.create({
      ...period,
      course,
    })

    if (coursePeriod.isLeft()) {
      throw new Error(coursePeriod.getLeft())
    }

    return coursePeriod.getRight()
  })

  coursePeriods.set(course, periods)
})

export { coursePeriods }