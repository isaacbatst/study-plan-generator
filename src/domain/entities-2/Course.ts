import { Either } from "./either/Either";

export class Course {
  private constructor(
    private id: string,
    private name: string,
  ) {}

  static create(id: string, name: string): Either<string, Course> {
    return Either.right(new Course(id, name));
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }
}