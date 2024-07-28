import * as crypto from "crypto";
import { Course, CourseJSON } from "./Course";
import { Either } from "./either/Either";

export type CoursePeriodProps = {
  id?: string
  position: number
  course: Course
}

export type CoursePeriodJSON = {
  id: string
  name: string
  position: number
  course: CourseJSON
}

export class CoursePeriod {
  private constructor(
    private id: string,
    private position: number,
    private course: Course,
  ){}

  static create(props: CoursePeriodProps): Either<string, CoursePeriod> {
    if(!props.id) {
      props.id = crypto.randomUUID()
    }
    return Either.right(new CoursePeriod(props.id, props.position, props.course))
  }

  static fromJSON(json: CoursePeriodJSON): CoursePeriod {
    return new CoursePeriod(
      json.id,
      json.position,
      Course.fromJSON(json.course)
    )
  }

  static getName(position: number, courseName: string) {
    return `${position + 1}º Período - ${courseName}`
  }

  getId() {
    return this.id
  }

  getPosition() {
    return this.position
  }

  getName() {
    return CoursePeriod.getName(this.position, this.course.getName())
  }

  getCourse() {
    return this.course
  }

  toJSON(): CoursePeriodJSON {
    return {
      id: this.id,
      name: this.getName(),
      position: this.position,
      course: this.course.toJSON()
    }
  }
} 