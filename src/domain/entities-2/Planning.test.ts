import { describe, expect, it } from "vitest";
import { Planning } from "./Planning";
import { Subject } from "./Subject";
import { StudyObject } from "./StudyObject";
import { StudyDay } from "./StudyDay";
import { PlanningStudyObject } from "./PlanningStudyObject";
import { PlanningDistribution } from "./PlanningDistribution";

describe("Planning", () => {
  it("should generate study days with single study object", () => {
    const studyObject = StudyObject.create({
      subjectName: "Math",
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
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObject2 = StudyObject.create({
      subjectName: "Math",
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
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObject2 = StudyObject.create({
      subjectName: "Math",
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
      subjectName: "Math",
      id: "3",
      name: "Physics 101",
      hours: 2,
    }).getRight();
    const studyObject4 = StudyObject.create({
      subjectName: "Math",
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
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObject2 = StudyObject.create({
      subjectName: "Math",
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
    expect(studyDays[0].getHoursPerStudyObjects().size).toBe(2);
    expect(studyDays.length).toBe(1);
  })

  it('should generate study days with splitted study object', () => {
    const studyObject1 = StudyObject.create({
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 3,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObject1],
    }).getRight();
    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math],
      hoursPerDay: 2,
    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObject1)).toBe(2);
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(1);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObject1)).toBe(1);
  })

  it('should generate study days with splitted study object and other study object after', () => {
    const studyObject1 = StudyObject.create({
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 3,
    }).getRight();
    const studyObject2 = StudyObject.create({
      subjectName: "Math",
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
      hoursPerDay: 2,
    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObject1)).toBe(2);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObject2)).toBeUndefined();
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObject1)).toBe(1);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObject2)).toBe(1);
    expect(studyDays[2].getDate()).toEqual(new Date("2021-01-03"));
    expect(studyDays[2].getHoursPerStudyObjects().get(studyObject2)).toBe(1);
    expect(studyDays[2].getHoursLeft()).toBe(1);
  })

  it('should generate study days alternating subjects per study object', () => {
    const studyObjectMath1 = StudyObject.create({
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObjectMath2 = StudyObject.create({
      subjectName: "Math",
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObjectMath1, studyObjectMath2],
    }).getRight();

    const studyObjectPhysics1 = StudyObject.create({
      subjectName: "Math",
      id: "3",
      name: "Physics 101",
      hours: 2,
    }).getRight();
    const studyObjectPhysics2 = StudyObject.create({
      subjectName: "Math",
      id: "4",
      name: "Physics 102",
      hours: 2,
    }).getRight();
    const physics = Subject.create({
      id: "2",
      name: "Physics",
      studyObjects: [studyObjectPhysics1, studyObjectPhysics2],
    }).getRight();

    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math, physics],
      hoursPerDay: 2,
      distribution: PlanningDistribution.ALTERNATE_SUBJECT_PER_STUDY_OBJECT

    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[0].getHoursPerStudyObjects().keys().next().value).toBe(studyObjectMath1);
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays[1].getHoursPerStudyObjects().keys().next().value).toBe(studyObjectPhysics1);

  })

  it('should generate study days alternating subjects per study object with splitted study object', () => {
    const studyObjectMath1 = StudyObject.create({
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 3,
    }).getRight();
    const studyObjectMath2 = StudyObject.create({
      subjectName: "Math",
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObjectMath1, studyObjectMath2],
    }).getRight();

    const studyObjectPhysics1 = StudyObject.create({
      subjectName: "Math",
      id: "3",
      name: "Physics 101",
      hours: 2,
    }).getRight();
    const studyObjectPhysics2 = StudyObject.create({
      subjectName: "Math",
      id: "4",
      name: "Physics 102",
      hours: 2,
    }).getRight();
    const physics = Subject.create({
      id: "2",
      name: "Physics",
      studyObjects: [studyObjectPhysics1, studyObjectPhysics2],
    }).getRight();

    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math, physics],
      hoursPerDay: 2,
      distribution: PlanningDistribution.ALTERNATE_SUBJECT_PER_STUDY_OBJECT

    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObjectMath1)).toBe(2);
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObjectMath1)).toBe(1);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObjectPhysics1)).toBe(1);
    expect(studyDays[2].getDate()).toEqual(new Date("2021-01-03"));
    expect(studyDays[2].getHoursLeft()).toBe(0);
    expect(studyDays[2].getHoursPerStudyObjects().get(studyObjectPhysics1)).toBe(1);
    expect(studyDays[2].getHoursPerStudyObjects().get(studyObjectMath2)).toBe(1);
    expect(studyDays[3].getDate()).toEqual(new Date("2021-01-04"));
    expect(studyDays[3].getHoursLeft()).toBe(0);
    expect(studyDays[3].getHoursPerStudyObjects().get(studyObjectMath2)).toBe(1);
    expect(studyDays[3].getHoursPerStudyObjects().get(studyObjectPhysics2)).toBe(1);
    expect(studyDays[4].getDate()).toEqual(new Date("2021-01-05"));
    expect(studyDays[4].getHoursLeft()).toBe(1);
    expect(studyDays[4].getHoursPerStudyObjects().get(studyObjectPhysics2)).toBe(1);
    expect(studyDays.length).toBe(5);        
  })

  it('should generate study days alternating subjects per day', () => {
    const studyObjectMath1 = StudyObject.create({
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObjectMath2 = StudyObject.create({
      subjectName: "Math",
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    // math 3 and 4
    const studyObjectMath3 = StudyObject.create({
      subjectName: "Math",
      id: "3",
      name: "Math 103",
      hours: 2,
    }).getRight();
    const studyObjectMath4 = StudyObject.create({
      subjectName: "Math",
      id: "4",
      name: "Math 104",
      hours: 2,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObjectMath1, studyObjectMath2, studyObjectMath3, studyObjectMath4],
    }).getRight();

    const studyObjectPhysics1 = StudyObject.create({
      subjectName: "Math",
      id: "5",
      name: "Physics 101",
      hours: 2,
    }).getRight();
    const studyObjectPhysics2 = StudyObject.create({
      subjectName: "Math",
      id: "6",
      name: "Physics 102",
      hours: 2,
    }).getRight();
    const physics = Subject.create({
      id: "2",
      name: "Physics",
      studyObjects: [studyObjectPhysics1, studyObjectPhysics2],
    }).getRight();

    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math, physics],
      hoursPerDay: 4,
      distribution: PlanningDistribution.ALTERNATE_SUBJECT_PER_DAY
    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    console.dir(studyDays, { depth: null });
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObjectMath1)).toBe(2);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObjectMath2)).toBe(2);
    // day [1] physics
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObjectPhysics1)).toBe(2);
  })

  it('should generate study days alternating subjects per day with splitted study object', () => {
    const studyObjectMath1 = StudyObject.create({
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 3,
    }).getRight();
    const studyObjectMath2 = StudyObject.create({
      subjectName: "Math",
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObjectMath1, studyObjectMath2],
    }).getRight();

    const studyObjectPhysics1 = StudyObject.create({
      subjectName: "Math",
      id: "3",
      name: "Physics 101",
      hours: 2,
    }).getRight();
    const studyObjectPhysics2 = StudyObject.create({
      subjectName: "Math",
      id: "4",
      name: "Physics 102",
      hours: 2,
    }).getRight();
    const physics = Subject.create({
      id: "2",
      name: "Physics",
      studyObjects: [studyObjectPhysics1, studyObjectPhysics2],
    }).getRight();

    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math, physics],
      hoursPerDay: 4,
      distribution: PlanningDistribution.ALTERNATE_SUBJECT_PER_DAY
    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    console.dir(studyDaysOrError.getRight(), { depth: null });
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01"));
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObjectMath1)).toBe(3);
    expect(studyDays[0].getHoursPerStudyObjects().get(studyObjectMath2)).toBe(1);
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-02"));
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObjectPhysics1)).toBe(2);
    expect(studyDays[1].getHoursPerStudyObjects().get(studyObjectPhysics2)).toBe(2);
    expect(studyDays[2].getDate()).toEqual(new Date("2021-01-03"));
    expect(studyDays[2].getHoursLeft()).toBe(3);
    expect(studyDays[2].getHoursPerStudyObjects().get(studyObjectMath2)).toBe(1);
  })

  it('should generate study days with custom available weekdays', () => {
    const studyObjectMath1 = StudyObject.create({
      subjectName: "Math",
      id: "1",
      name: "Math 101",
      hours: 2,
    }).getRight();
    const studyObjectMath2 = StudyObject.create({
      subjectName: "Math",
      id: "2",
      name: "Math 102",
      hours: 2,
    }).getRight();
    const math = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObjectMath1, studyObjectMath2],
    }).getRight();

    const studyObjectPhysics1 = StudyObject.create({
      subjectName: "Math",
      id: "3",
      name: "Physics 101",
      hours: 2,
    }).getRight();
    const studyObjectPhysics2 = StudyObject.create({
      subjectName: "Math",
      id: "4",
      name: "Physics 102",
      hours: 2,
    }).getRight();
    const physics = Subject.create({
      id: "2",
      name: "Physics",
      studyObjects: [studyObjectPhysics1, studyObjectPhysics2],
    }).getRight();

    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [math, physics],
      hoursPerDay: 2,
      availableWeekdays: new Set([1, 3, 5])
    }).getRight();

    const studyDaysOrError = planning.getStudyDays();
    expect(studyDaysOrError.isRight()).toBe(true);
    const studyDays = studyDaysOrError.getRight();
    expect(studyDays[0].getDate()).toEqual(new Date("2021-01-01")); // friday
    expect(studyDays[0].getHoursLeft()).toBe(0);
    expect(studyDays[1].getDate()).toEqual(new Date("2021-01-04")); // monday
    expect(studyDays[1].getHoursLeft()).toBe(0);
    expect(studyDays[2].getDate()).toEqual(new Date("2021-01-06")); // wednesday
    expect(studyDays[2].getHoursLeft()).toBe(0);
    expect(studyDays[3].getDate()).toEqual(new Date("2021-01-08")); // friday
    expect(studyDays[3].getHoursLeft()).toBe(0);
    expect(studyDays.length).toBe(4);
  })
})