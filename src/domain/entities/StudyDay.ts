import { Either } from "./either/Either";
import { PlanningStudyObject } from "./PlanningStudyObject";
import { StudyObject, StudyObjectJSON } from "./StudyObject";
import {v4} from 'uuid';

type StudyDayProps = {
  id?: string;
  date: Date;
  hours: number;
  availablityPerWeekday: Map<number, number>;
};

export enum StudyDayError {
  NOT_ENOUGH_HOURS_LEFT = "Not enough hours left",
  ZERO_HOURS_LEFT = "Zero hours left",
}

export type StudyDayJSON = {
  id: string;
  date: string;
  hours: number;
  hoursLeft: number;
  plannedStudyObjects: {
    studyObject: StudyObjectJSON;
    hours: number;
    done: boolean;
  }[];
};

export class StudyDay {
  private hours: number;

  private constructor(
    private id: string,
    private date: Date,
    defaultHoursPerDay: number,
    availablityPerWeekday: Map<number, number>,
    private planned: Map<StudyObject, {
      hours: number;
      done: boolean
    }> = new Map(),
  ) {
    this.hours = availablityPerWeekday.get(date.getUTCDay()) ?? defaultHoursPerDay;
  }

  static create(
    props: StudyDayProps,
  ): Either<string, StudyDay> {
    if(!props.id){
      props.id = v4();
    }

    return Either.right(new StudyDay(props.id, props.date, props.hours, props.availablityPerWeekday));
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
    
    const hoursToMap = this.planned.get(planningStudyObject.getStudyObject())
      ? this.planned.get(planningStudyObject.getStudyObject())!.hours + hoursToAllocate
      : hoursToAllocate;

    this.planned.set(planningStudyObject.getStudyObject(), {
      hours: hoursToMap,
      done: false
    });

    if (hoursLeftInDay < planningStudyObject.getHoursLeft()) {
      return Either.left(StudyDayError.NOT_ENOUGH_HOURS_LEFT);
    } 
    return Either.right(undefined)
  }

  getId(): string {
    return this.id;
  }

  getDate(): Date {
    return this.date;
  }

  getHours(): number {
    return this.hours;
  }
  getHoursLeft(): number {
    const hours = this.planned.values();
    return this.hours - Array.from(hours).reduce((acc, allocated) => acc + allocated.hours, 0);
  }

  getHoursPerStudyObjects(): Map<StudyObject, number> {
    return new Map(Array.from(this.planned.entries()).map(([studyObject, hours]) => [studyObject, hours.hours]));
  }

  toString() {
    return `${this.date.toLocaleDateString('pt-BR')}: ${
      Array.from(this.planned.entries())
        .map(([studyObject, { done, hours }]) => `${studyObject.getName()} (${hours}h)`)
        .join(',')
    }`
  }

  toJSON(): StudyDayJSON {
    return {
      id: this.id,
      date: this.date.toISOString(),
      hours: this.hours,
      hoursLeft: this.getHoursLeft(),
      plannedStudyObjects: Array.from(this.planned.entries()).map(([studyObject, { done, hours }]) => ({
        studyObject: studyObject.toJSON(),
        done,
        hours,
      })),
    };
  }
}