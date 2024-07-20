import { Either } from "./either/Either";
import { PlanningStudyObject } from "./PlanningStudyObject";
import { StudyObject } from "./StudyObject";

type StudyDayProps = {
  date: Date;
  hours: number;
};

enum StudyDayError {
  NOT_ENOUGH_HOURS_LEFT = "Not enough hours left",
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
  allocate(studyObject: PlanningStudyObject): Either<string, void> {
    studyObject.allocate()
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
    return this.hours - this.studyObjects.reduce((acc, allocated) => acc + allocated.getHours(), 0);
  }
}