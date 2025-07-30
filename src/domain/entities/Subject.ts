import { v4 } from "uuid";
import { Either } from "./either/Either";
import { StudyObject, StudyObjectJSON } from "./StudyObject";
import { CoursePeriod, CoursePeriodJSON } from "./CoursePeriod";
import { SubjectStatus } from "@prisma/client";

export type SubjectProps = {
  id?: string;
  name: string;
  studyObjects: StudyObject[];
  coursePeriods?: CoursePeriod[];
  status?: SubjectStatus;
};

export type SubjectJSON = {
  id: string;
  createdAt?: Date;
  name: string;
  studyObjects: StudyObjectJSON[];
  coursePeriods: CoursePeriodJSON[];
  status?: SubjectStatus;
};

export class Subject {
  private constructor(
    private id: string,
    private name: string,
    private studyObjects: StudyObject[],
    private coursePeriods: CoursePeriod[],
    private status: SubjectStatus = SubjectStatus.approved,
  ) {}

  static create(props: SubjectProps): Either<string, Subject> {
    if (!props.id) {
      props.id = v4();
    }
    return Either.right(
      new Subject(
        props.id,
        props.name,
        props.studyObjects,
        props.coursePeriods ?? [],
      ),
    );
  }

  static fromJSON(json: SubjectJSON): Subject {
    return new Subject(
      json.id,
      json.name,
      json.studyObjects.map((studyObject) => StudyObject.fromJSON(studyObject)),
      json.coursePeriods.map((coursePeriod) =>
        CoursePeriod.fromJSON(coursePeriod),
      ),
      json.status ?? SubjectStatus.approved,
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
      studyObjects: this.studyObjects.map((studyObject) =>
        studyObject.toJSON(),
      ),
      coursePeriods: this.coursePeriods.map((coursePeriod) =>
        coursePeriod.toJSON(),
      ),
      status: this.status,
    };
  }
}
