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
    private hoursPerStudyObjects: Map<StudyObject, number> = new Map()
  ) {}

  static create(
    props: StudyDayProps,
  ): Either<string, StudyDay> {
    return Either.right(new StudyDay(props.date, props.hours));
  }

  hasHoursLeft(): boolean {
    return this.getHoursLeft() > 0;
  }

  allocate(planningStudyObject: PlanningStudyObject): Either<StudyDayError, void> {
    const hoursLeftInDay = this.getHoursLeft();
    if(hoursLeftInDay === 0) {
      return Either.left(StudyDayError.ZERO_HOURS_LEFT);
    }
    const hoursToAllocate = hoursLeftInDay < planningStudyObject.getHoursLeft() 
      ? hoursLeftInDay 
      : planningStudyObject.getHoursLeft();

    planningStudyObject.addAllocation(this.date, hoursToAllocate);
    
    const hoursToMap = this.hoursPerStudyObjects.get(planningStudyObject.getStudyObject())
      ? this.hoursPerStudyObjects.get(planningStudyObject.getStudyObject())! + hoursToAllocate
      : hoursToAllocate;

    this.hoursPerStudyObjects.set(planningStudyObject.getStudyObject(), hoursToMap);

    if (hoursLeftInDay < planningStudyObject.getHoursLeft()) {
      return Either.left(StudyDayError.NOT_ENOUGH_HOURS_LEFT);
    } 
    return Either.right(undefined)
  }

  getDate(): Date {
    return this.date;
  }

  getHours(): number {
    return this.hours;
  }
  getHoursLeft(): number {
    const hours = this.hoursPerStudyObjects.values();
    return this.hours - Array.from(hours).reduce((acc, allocated) => acc + allocated, 0);
  }

  getHoursPerStudyObjects(): Map<StudyObject, number> {
    return this.hoursPerStudyObjects;
  }
}