import { describe, expect, it } from "vitest";
import { Planning } from "./Planning";
import { Subject } from "./Subject";
import { StudyObject } from "./StudyObject";
import { StudyDay } from "./StudyDay";
import { PlanningStudyObject } from "./PlanningStudyObject";

describe("Planning", () => {
  it("should generate study days with single study object", () => {
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
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays.length).toBe(1);
  })

  it("should generate study days with multiple study objects", () => {
    const studyObject1 = StudyObject.create({
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObject2 = StudyObject.create({
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    const subject = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObject1, studyObject2],
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
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays.length).toBe(2);
  })

  it('should generate study days with multiple study objects and multiple subjects', () => {
    const studyObject1 = StudyObject.create({
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObject2 = StudyObject.create({
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObject1, studyObject2],
    }).getRight();

    const studyObject3 = StudyObject.create({
      id: "3",
      name: "Physics 101",
      hours: 2,
    }).getRight();
    const studyObject4 = StudyObject.create({
      id: "4",
      name: "Physics 102",
      hours: 2,
    }).getRight();
    const physics = Subject.create({
      id: "2",
      name: "Physics",
      studyObjects: [studyObject3, studyObject4],
    }).getRight();

    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math, physics],
      hoursPerDay: 2,
    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays[2].getDate()).toEqual(new Date("2021-01-03"));
    expect(studyDays[2].getHoursLeft()).toBe(0);
    expect(studyDays[3].getDate()).toEqual(new Date("2021-01-04"));
    expect(studyDays[3].getHoursLeft()).toBe(0);
    expect(studyDays.length).toBe(4);
  })

  it('should generate study days with multiply study objects per day', () => {
    const studyObject1 = StudyObject.create({
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObject2 = StudyObject.create({
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObject1, studyObject2],
    }).getRight();
    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math],
      hoursPerDay: 4,
    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);    
    expect(studyDays[0].getStudyObjects().length).toBe(2);
    expect(studyDays.length).toBe(1);
  })
})