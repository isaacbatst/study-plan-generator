import { Either } from "./either/Either"
import { StudyObject } from "./StudyObject"

type PlanningStudyObjectProps = {
  studyObject: StudyObject
}

enum PlanningStudyObjectError {
  EXCEEDED_HOURS = "Exceeded hours left"
}

export class PlanningStudyObject {
  private constructor(
    private studyObject: StudyObject,
    private allocations: {
      date: Date
      hours: number
    }[] = [],
  ) {}
  
  get hoursLeft(): number {
    return this.studyObject.getHours() - this.allocations.reduce((acc, allocation) => acc + allocation.hours, 0)
  }

  static create(props: PlanningStudyObjectProps): Either<string, PlanningStudyObject> {
    return Either.right(new PlanningStudyObject(props.studyObject))
  }

  addAllocation(date: Date, hours: number = this.hoursLeft): Either<string, void> {
    if (this.hoursLeft < hours) {
      return Either.left(PlanningStudyObjectError.EXCEEDED_HOURS)
    }

    this.allocations.push({ date, hours })
    return Either.right(undefined)
  }

  getStudyObject(): StudyObject {
    return this.studyObject
  }

  getHoursLeft(): number {
    return this.hoursLeft
  }

  hasHoursLeft(): boolean {
    return this.hoursLeft > 0
  }
}