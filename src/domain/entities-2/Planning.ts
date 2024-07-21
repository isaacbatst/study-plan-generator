import { Either } from "./either/Either";
import { Subject } from "./Subject";
import { StudyDay, StudyDayError } from "./StudyDay";
import { PlanningStudyObject } from "./PlanningStudyObject";
import { PlanningDistribution } from "./PlanningDistribution";

type PlanningProps = {
  id: string;
  createdAt: Date;
  startDate: Date;
  subjects: Subject[];
  hoursPerDay: number;
  distribution?: PlanningDistribution;
};


export class Planning {
  private constructor(
    private id: string,
    private createdAt: Date,
    private startDate: Date,
    private subjects: Subject[],
    private hoursPerDay: number,
    private distribution: PlanningDistribution = PlanningDistribution.UNTIL_FINISH_SUBJECT,
  ) {
  }
  
  static create(props: PlanningProps): Either<string, Planning> {
    return Either.right(new Planning(
      props.id, 
      props.createdAt, 
      props.startDate, 
      props.subjects, 
      props.hoursPerDay,
      props.distribution,
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
  
  getHoursPerDay(): number {
    return this.hoursPerDay;
  }
  
  getStudyDays(): Either<string, StudyDay[]> {
    switch(this.distribution) {
    case PlanningDistribution.UNTIL_FINISH_SUBJECT:
      return this.getStudyDaysUntilFinishSubject();
    case PlanningDistribution.ALTERNATE_SUBJECT_PER_STUDY_OBJECT:
      return Either.left('Not implemented');
    case PlanningDistribution.ALTERNATE_SUBJECT_PER_DAY:
      return Either.left('Not implemented');
    case PlanningDistribution.ALTERNATE_SUBJECT_PER_WEEK:
      return Either.left('Not implemented');
    default:
      return Either.left('Invalid distribution');
    }
  }

  private getStudyDaysAlternatingSubjectPerStudyObject(): Either<string, StudyDay[]> {
    return Either.left('Not implemented');
  }
  
  private getStudyDaysUntilFinishSubject(): Either<string, StudyDay[]> {
    const studyDays: StudyDay[] = [];
    let currentStudyDayOrError = StudyDay.create({
      date: this.startDate,
      hours: this.hoursPerDay,
    });
    if(currentStudyDayOrError.isLeft()) {
      return Either.left(currentStudyDayOrError.getLeft())
    }
    let currentStudyDay = currentStudyDayOrError.getRight();
    studyDays.push(currentStudyDay);
    
    this.subjects.forEach((subject) => {
      subject.getStudyObjects().forEach((studyObject) => {
        const planningStudyObjectOrError = PlanningStudyObject.create({
          studyObject,
        })
        const planningStudyObject = planningStudyObjectOrError.getRight();
        while(planningStudyObject.getHoursLeft() > 0) {
          const allocationOrError = currentStudyDay.allocate(planningStudyObject);
          if(allocationOrError.isLeft()) {
            currentStudyDayOrError = StudyDay.create({
              date: new Date(currentStudyDay.getDate().getTime() + 24 * 60 * 60 * 1000),
              hours: this.hoursPerDay,
            });
            if(currentStudyDayOrError.isLeft()) {
              return Either.left(currentStudyDayOrError.getLeft());
            }
            currentStudyDay = currentStudyDayOrError.getRight();
            studyDays.push(currentStudyDay);
          }
        }
      });
    })
    
    return Either.right(studyDays);
  }
}