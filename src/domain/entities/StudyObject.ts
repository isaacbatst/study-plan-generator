import { v4 } from "uuid";
import { Either } from "./either/Either";

enum StudyObjectError {
  NEGATIVE_HOURS = "STUDY_OBJECT_NEGATIVE_HOURS",
}

type StudyObjectProps = {
  id?: string;
  name: string;
  hours: number;
  subjectName: string;
  position?: number;
};

export type StudyObjectJSON = {
  id: string;
  name: string;
  hours: number;
  position: number;
  subjectName: string;
  fullName: string;
};

export class StudyObject {
  private constructor(
    private id: string,
    private name: string,
    private hours: number,
    private position: number,
    private subjectName: string,
  ) {}

  static create(
    props: StudyObjectProps,
  ): Either<StudyObjectError, StudyObject> {
    if (!props.id) {
      props.id = v4();
    }
    if (props.hours < 0) {
      return Either.left(StudyObjectError.NEGATIVE_HOURS);
    }

    return Either.right(
      new StudyObject(
        props.id,
        props.name,
        props.hours,
        props.position ?? 0,
        props.subjectName,
      ),
    );
  }

  static fromJSON(json: StudyObjectJSON): StudyObject {
    return new StudyObject(
      json.id,
      json.name,
      json.hours,
      json.position,
      json.subjectName,
    );
  }

  static getFullName(subjectName: string, name: string): string {
    return `${subjectName} - ${name}`;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getFullName(): string {
    return StudyObject.getFullName(this.subjectName, this.name);
  }

  getHours(): number {
    return this.hours;
  }

  getPosition(): number {
    return this.position;
  }

  toJSON(): StudyObjectJSON {
    return {
      id: this.id,
      name: this.name,
      hours: this.hours,
      position: this.position,
      fullName: this.getFullName(),
      subjectName: this.subjectName,
    };
  }

  toString(): string {
    return this.getFullName();
  }
}
