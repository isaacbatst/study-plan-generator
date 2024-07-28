import * as crypto from "node:crypto";
import { Either } from "./either/Either";
import { Subject } from "./Subject";

export type CoursePeriodProps = {
  name: string
  subjects: Subject[]
  position: number
  id?: string
}

export class CoursePeriod {
  private constructor(
    private id: string,
    private name: string,
    private subjects: Subject[],
    private position: number,
  ){}

  static create(props: CoursePeriodProps): Either<string, CoursePeriod> {
    if(!props.id) {
      props.id = crypto.randomUUID()
    }
    return Either.right(new CoursePeriod(props.id, props.name, props.subjects, props.position))
  }

  getId() {
    return this.id
  }

  getPosition() {
    return this.position
  }

  getName() {
    return this.name
  }

  getSubjects() {
    return this.subjects
  }
} 