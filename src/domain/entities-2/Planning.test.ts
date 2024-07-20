import { describe, expect, it } from "vitest";
import { Planning } from "./Planning";
import { Subject } from "./Subject";
import { StudyObject } from "./StudyObject";
import { Right } from "./either/Either";

describe("Planning", () => {
  it("should calculate the end date", () => {
    const studyObject = StudyObject.create({
      id: "1",
      name: "Math 101",
      hours: 2,
    }).value as StudyObject;
    const subject = Subject.create({
      id: "1",
      name: "Math",
      studyObjects: [studyObject],
    }).value as Subject;
    const planning = Planning.create({
      id: "1",
      createdAt: new Date(),
      startDate: new Date("2021-01-01"),
      subjects: [subject],
    }).value as Planning

    expect(planning.getEndDate()).toEqual(new Date("2021-01-01"));
  })
})