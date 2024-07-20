import { D, s } from "vitest/dist/reporters-rzC174PQ.js";
import { Either } from "./either/Either";
import { Subject } from "./Subject";
import { StudyDay } from "./StudyDay";
import { PlanningStudyObject } from "./PlanningStudyObject";

type PlanningProps = {
  id: string;
  createdAt: Date;
  startDate: Date;
  subjects: Subject[];
  hoursPerDay: number;
};

export class Planning {
  private constructor(
    private id: string,
    private createdAt: Date,
    private startDate: Date,
    private subjects: Subject[],
    private hoursPerDay: number,
  ) {
  }

  static create(props: PlanningProps): Either<string, Planning> {
    return Either.right(new Planning(
      props.id, 
      props.createdAt, 
      props.startDate, 
      props.subjects, 
      props.hoursPerDay,
    ));
  }

  getId(): string {
    return this.id;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  getSubjects(): Subject[] {
    return this.subjects;
  }

  getStudyDays(): Either<string, StudyDay[]> {
    const studyDays: StudyDay[] = [];
    let currentStudyDayOrError = StudyDay.create({
      date: this.startDate,
      hours: this.hoursPerDay,
    });
    if(currentStudyDayOrError.isLeft()) {
      return Either.left(currentStudyDayOrError.getLeft())
    }
    const currentStudyDay = currentStudyDayOrError.getRight();

    this.subjects.forEach((subject) => {
      subject.getStudyObjects().forEach((studyObject) => {
        const planningStudyObjectOrError = PlanningStudyObject.create({
          hours: studyObject.getHours(),
          studyObject,
        })
        const planningStudyObject = planningStudyObjectOrError.getRight();
        currentStudyDay.allocate(planningStudyObject)

        if(!studyDays.includes(currentStudyDay)) {
          studyDays.push(currentStudyDay);
        }
      });
    })

    return Either.right(studyDays);
  }

  getHoursPerDay(): number {
    return this.hoursPerDay;
  }
}