import { Either } from "./either/Either";
import { Subject } from "./Subject";

export class CoursePeriod {
  private constructor(
    private subjects: Subject[]
  ){}

  static create(subjects: Subject[]): Either<string, CoursePeriod> {
    return Either.right(new CoursePeriod(subjects))
  }

  getSubjects() {
    return this.subjects
  }
} 