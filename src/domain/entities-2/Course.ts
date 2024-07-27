import { CoursePeriod } from "./CoursePeriod";
import { Either } from "./either/Either";

type CourseProps = {
  id: string;
  name: string;
  periods: CoursePeriod[];
};

export class Course {
  private constructor(
    private id: string,
    private name: string,
    private periods: CoursePeriod[] = [],
  ) {}

  static create(
    props: CourseProps,
  ): Either<string, Course> {
    return Either.right(new Course(props.id, props.name, props.periods));
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }
}