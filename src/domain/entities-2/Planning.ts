import { Either } from "./either/Either";
import { Subject } from "./Subject";
import { StudyDay, StudyDayError } from "./StudyDay";
import { PlanningStudyObject } from "./PlanningStudyObject";
import { PlanningDistribution } from "./PlanningDistribution";
import { StudyObject } from "./StudyObject";

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
      return this.getStudyDaysAlternatingSubjectPerStudyObject();
    case PlanningDistribution.ALTERNATE_SUBJECT_PER_DAY:
      return this.getStudyDaysAlternatingSubjectPerDay();
    case PlanningDistribution.ALTERNATE_SUBJECT_PER_WEEK:
      return Either.left('Not implemented');
    default:
      return Either.left('Invalid distribution');
    }
  }

  private getStudyDaysAlternatingSubjectPerDay(): Either<string, StudyDay[]> {
    const studyDays: StudyDay[] = [];
    const missingStudyObjectsPerSubject = new Map<Subject, PlanningStudyObject[]>();
  
    this.subjects.forEach((subject) => {
      const planningStudyObjects = subject.getStudyObjects().map((studyObject) => {
        const planningStudyObjectOrError = PlanningStudyObject.create({
          studyObject,
        });
        return planningStudyObjectOrError.getRight();
      })
      missingStudyObjectsPerSubject.set(subject, planningStudyObjects);
    });
    
    let dayIndex = 0;

    for(let index = 0; missingStudyObjectsPerSubject.size > 0; index += 1) {
      const subjectIndex = index % this.subjects.length;
      const subject = this.subjects[subjectIndex];
      const subjectStudyObjects = missingStudyObjectsPerSubject.get(subject);
      if (!subjectStudyObjects || subjectStudyObjects.length === 0) {
        missingStudyObjectsPerSubject.delete(subject);
        continue;
      }
      const date = new Date(this.startDate.getTime() + dayIndex * 24 * 60 * 60 * 1000);
      const studyDayOrError = StudyDay.create({
        date,
        hours: this.hoursPerDay,
      });
      if(studyDayOrError.isLeft()) {
        return Either.left(studyDayOrError.getLeft());
      }
      const studyDay = studyDayOrError.getRight();
      while(subjectStudyObjects.length > 0 && studyDay.hasHoursLeft()) {
        const studyObject = subjectStudyObjects[0];
        studyDay.allocate(studyObject);
        if(!studyObject.hasHoursLeft()) {
          subjectStudyObjects.shift();
        }
      } 
      studyDays.push(studyDay);
      dayIndex += 1;
    }
  
    return Either.right(studyDays);
  }
  
  
  
  private getStudyDaysAlternatingSubjectPerStudyObject(): Either<string, StudyDay[]> {
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
    
    const missingStudyObjectsPerSubject = new Map<Subject, StudyObject[]>();
    
    this.subjects.forEach((subject) => {
      missingStudyObjectsPerSubject.set(subject, subject.getStudyObjects());
    });
    
    while(missingStudyObjectsPerSubject.size > 0) {
      this.subjects.forEach((subject) => {
        const studyObjects = missingStudyObjectsPerSubject.get(subject);
        if(!studyObjects || studyObjects.length === 0) {
          missingStudyObjectsPerSubject.delete(subject);
          return;
        }
        const studyObject = studyObjects[0];
        const planningStudyObjectOrError = PlanningStudyObject.create({
          studyObject,
        })
        const planningStudyObject = planningStudyObjectOrError.getRight();
        while(planningStudyObject.getHoursLeft() > 0) {
          const allocationOrError = currentStudyDay.allocate(planningStudyObject);
          if(allocationOrError.isLeft()) {
            const oneDay = 24 * 60 * 60 * 1000;
            const nextDay = new Date(currentStudyDay.getDate().getTime() + oneDay);
            currentStudyDayOrError = StudyDay.create({
              date: nextDay,
              hours: this.hoursPerDay,
            });
            if(currentStudyDayOrError.isLeft()) {
              return Either.left(currentStudyDayOrError.getLeft());
            }
            currentStudyDay = currentStudyDayOrError.getRight();
            studyDays.push(currentStudyDay);
          }
        }
        missingStudyObjectsPerSubject.set(subject, studyObjects.slice(1));
      });
    }
    
    return Either.right(studyDays);
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