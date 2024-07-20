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

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays.length).toBe(1);
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
  })
})