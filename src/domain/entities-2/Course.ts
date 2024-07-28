import * as crypto from "node:crypto";
import { Either } from "./either/Either";
import { CoursePeriod } from "./CoursePeriod";

type CourseProps = {
  id?: string;
  name: string;
  periods: CoursePeriod[];
  version?: number;
};

export class Course {
  private constructor(
    private id: string,
    private name: string,
    private periods: CoursePeriod[] = [],
    private version: number = 1,
  ) {}

  static create(
    props: CourseProps,
  ): Either<string, Course> {
    if (!props.id) {
      props.id = crypto.randomUUID();
    }

    return Either.right(new Course(props.id, props.name, props.periods, props.version));
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }
  
  getPeriods(): CoursePeriod[] {
    return this.periods
  }

  getVersion(): number {
    return this.version
  }
}