import * as crypto from "crypto";
import { Either } from "./either/Either";
import { StudyObject, StudyObjectJSON } from "./StudyObject";
import { CoursePeriod, CoursePeriodJSON } from "./CoursePeriod";

export type SubjectProps = {
  id?: string;
  name: string;
  studyObjects: StudyObject[];
  coursePeriods?: CoursePeriod[];
};

export type SubjectJSON = {
  id: string;
  name: string;
  studyObjects: StudyObjectJSON[];
  coursePeriods: CoursePeriodJSON[];
};

export class Subject {
  private constructor(
    private id: string,
    private name: string,
    private studyObjects: StudyObject[],
    private coursePeriods: CoursePeriod[]
  ) {}

  static create(props: SubjectProps): Either<string, Subject> {
    if (!props.id) {
      props.id = crypto.randomUUID();
    }
    return Either.right(new Subject(props.id, props.name, props.studyObjects, props.coursePeriods ?? []));
  }

  static fromJSON(json: SubjectJSON): Subject {
    return new Subject(
      json.id,
      json.name,
      json.studyObjects.map((studyObject) => StudyObject.fromJSON(studyObject)),
      json.coursePeriods.map((coursePeriod) => CoursePeriod.fromJSON(coursePeriod)),
    );
  }


  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getStudyObjects(): StudyObject[] {
    return this.studyObjects;
  }

  getCoursePeriods(): CoursePeriod[] {
    return this.coursePeriods;
  }

  toJSON(): SubjectJSON {
    return {
      id: this.id,
      name: this.name,
      studyObjects: this.studyObjects.map((studyObject) => studyObject.toJSON()),
      coursePeriods: this.coursePeriods.map((coursePeriod) => coursePeriod.toJSON()),
    };
  }
}