import { Either } from "./either/Either";
import { PlanningStudyObject } from "./PlanningStudyObject";
import { StudyObject } from "./StudyObject";

type StudyDayProps = {
  date: Date;
  hours: number;
};

export enum StudyDayError {
  NOT_ENOUGH_HOURS_LEFT = "Not enough hours left",
  ZERO_HOURS_LEFT = "Zero hours left",
}

export class StudyDay {
  private constructor(
    private date: Date,
    private hours: number,
    private studyObjects: PlanningStudyObject[] = [],
  ) {}

  static create(
    props: StudyDayProps,
  ): Either<string, StudyDay> {
    return Either.right(new StudyDay(props.date, props.hours));
  }
  allocate(studyObject: PlanningStudyObject): Either<StudyDayError, void> {
    const hoursLeft = this.getHoursLeft();
    if(hoursLeft === 0) {
      return Either.left(StudyDayError.ZERO_HOURS_LEFT);
    }

    if (hoursLeft < studyObject.getHoursLeft()) {
      studyObject.addAllocation(this.date, hoursLeft);
      return Either.left(StudyDayError.NOT_ENOUGH_HOURS_LEFT);
    } 
    studyObject.addAllocation(this.date)
    this.studyObjects.push(studyObject);
    return Either.right(undefined)
  }
  getDate(): Date {
    return this.date;
  }

  getHours(): number {
    return this.hours;
  }
  getHoursLeft(): number {
    return this.hours - this.studyObjects.reduce((acc, allocated) => acc + allocated.getStudyObject().getHours(), 0);
  }

  getStudyObjects(): PlanningStudyObject[] {
    return this.studyObjects;
  }
}