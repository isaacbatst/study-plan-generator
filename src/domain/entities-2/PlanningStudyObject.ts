import { Either } from "./either/Either"
import { StudyObject } from "./StudyObject"

type PlanningStudyObjectProps = {
  studyObject: StudyObject
  hours: number
}

enum PlanningStudyObjectError {
  EXCEEDED_HOURS = "Exceeded hours left"
}

export class PlanningStudyObject {
  private constructor(
    private studyObject: StudyObject,
    private hours: number,
    private hoursLeft = hours
  ) {}

  static create(props: PlanningStudyObjectProps): Either<string, PlanningStudyObject> {
    return Either.right(new PlanningStudyObject(props.studyObject, props.hours))
  }

  allocate(hours: number = this.hoursLeft): Either<string, void> {
    if (this.hoursLeft < hours) {
      return Either.left(PlanningStudyObjectError.EXCEEDED_HOURS)
    }

    this.hoursLeft -= hours

    return Either.right(undefined)
  }

  getStudyObject(): StudyObject {
    return this.studyObject
  }

  getHours(): number {
    return this.hours
  }

  getHoursLeft(): number {
    return this.hoursLeft
  }
}