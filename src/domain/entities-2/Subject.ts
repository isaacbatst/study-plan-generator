import { Either } from "./either/Either";
import { StudyObject } from "./StudyObject";

type SubjectProps = {
  id: string;
  name: string;
  studyObjects: StudyObject[];
};

export class Subject {
  private constructor(
    private id: string,
    private name: string,
    private studyObjects: StudyObject[],
  ) {}

  static create(props: SubjectProps): Either<string, Subject> {
    return Either.right(new Subject(props.id, props.name, props.studyObjects));
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
}