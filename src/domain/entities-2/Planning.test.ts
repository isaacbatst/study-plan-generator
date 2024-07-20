import { describe, expect, it } from "vitest";
import { Planning } from "./Planning";
import { Subject } from "./Subject";
import { StudyObject } from "./StudyObject";
import { StudyDay } from "./StudyDay";
import { PlanningStudyObject } from "./PlanningStudyObject";

describe("Planning", () => {
  it("should generate study days", () => {
    const studyObject = StudyObject.create({
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const subject = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObject],
    }).getRight();
    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [subject],
      hoursPerDay: 2,
    }).getRight();
    const studyDay = StudyDay.create({
      date: new Date("2021-01-01"),
      hours: 2,
    }).getRight()
    const planningStudyObject = PlanningStudyObject.create({
      hours: 2,
      studyObject,
    }).getRight();
    studyDay.allocate(planningStudyObject);
    const expected = [
      studyDay,
    ]

    expect(planning.getStudyDays()).toEqual(expected);
  })
})