import * as crypto from "crypto";
import { Either } from "./either/Either";
import { CoursePeriod } from "./CoursePeriod";

type CourseProps = {
  id?: string;
  name: string;
  version?: number;
};

export type CourseJSON = {
  id: string;
  name: string;
  version: number;
};

export class Course {
  private constructor(
    private id: string,
    private name: string,
    private version: number = 1,
  ) {}

  static create(
    props: CourseProps,
  ): Either<string, Course> {
    if (!props.id) {
      props.id = crypto.randomUUID();
    }

    return Either.right(new Course(props.id, props.name, props.version));
  }

  static fromJSON(json: CourseJSON): Course {
    return new Course(json.id, json.name, json.version);
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getVersion(): number {
    return this.version
  }

  toJSON(): CourseJSON {
    return {
      id: this.id,
      name: this.name,
      version: this.version,
    };
  }
}