import { Either } from "./either/Either";

enum StudyObjectError {
  NEGATIVE_HOURS = "STUDY_OBJECT_NEGATIVE_HOURS",
}

type StudyObjectProps = {
  id: string;
  name: string;
  hours: number;
};

export class StudyObject {
  private constructor(
    private id: string,
    private name: string,
    private hours: number,
  ) {}

  static create(props: StudyObjectProps): Either<StudyObjectError, StudyObject> {
    if(props.hours < 0) {
      return Either.left(StudyObjectError.NEGATIVE_HOURS);
    }

    return Either.right(new StudyObject(props.id, props.name, props.hours));
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getHours(): number {
    return this.hours;
  }
}