import { Either } from "./either/Either";
import { Subject } from "./Subject";
import { StudyDay, StudyDayError, StudyDayJSON } from "./StudyDay";
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
  availableWeekdays?: Set<number>;
  availabilityPerWeekday?: Map<number, number>;
};

export type PlanningJSON = {
  id: string;
  createdAt: string;
  startDate: string;
  subjects: Subject[];
  hoursPerDay: number;
  distribution: PlanningDistribution;
  availableWeekdays: Set<number>;
  studyDays: StudyDayJSON[];
};

export class Planning {
  private constructor(
    private id: string,
    private createdAt: Date,
    private startDate: Date,
    private subjects: Subject[],
    private hoursPerDay: number,
    private distribution: PlanningDistribution = PlanningDistribution.UNTIL_FINISH_SUBJECT,
    private availableWeekdays: Set<number>,
    private availabilityPerWeekday: Map<number, number>
  ) {
  }
  
  static create(props: PlanningProps): Either<string, Planning> {
    const availabilityPerWeekday = props.availabilityPerWeekday ?? new Map();

    for(let weekday = 0; weekday < 7; weekday += 1) {
      if(!availabilityPerWeekday.has(weekday)) {
        availabilityPerWeekday.set(weekday, props.hoursPerDay);
      }
    }

    console.log('availabilityPerWeekday', availabilityPerWeekday);

    return Either.right(new Planning(
      props.id, 
      props.createdAt, 
      props.startDate, 
      props.subjects, 
      props.hoursPerDay,
      props.distribution,
      props.availableWeekdays ?? new Set([
        0, 1, 2, 3, 4, 5, 6,
      ]), // Default to all weekdays
      availabilityPerWeekday
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
    default:
      return Either.left('Invalid distribution');
    }
  }

  getEndDate(): Either<string, Date> {
    const studyDaysOrError = this.getStudyDays();
    if(studyDaysOrError.isLeft()) {
      return Either.left(studyDaysOrError.getLeft());
    }
    const studyDays = studyDaysOrError.getRight();
    const lastStudyDay = studyDays[studyDays.length - 1];
    return Either.right(lastStudyDay.getDate());
  }

  toJSON(): PlanningJSON {
    return {
      id: this.id,
      createdAt: this.createdAt.toISOString(),
      startDate: this.startDate.toISOString(),
      subjects: this.subjects,
      hoursPerDay: this.hoursPerDay,
      distribution: this.distribution,
      availableWeekdays: this.availableWeekdays,
      studyDays: this.getStudyDays().getRight().map((studyDay) => studyDay.toJSON()) ?? [],
    }
  }

  private getNextDate(currentDate: Date): Date {
    const oneDay = 24 * 60 * 60 * 1000;
    const nextDate = new Date(currentDate.getTime() + oneDay);
    const nextWeekday = nextDate.getUTCDay();
    if(this.availableWeekdays.has(nextWeekday)) {
      return nextDate;
    }
    return this.getNextDate(nextDate);
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
    let currentDate = this.startDate;

    for(let index = 0; missingStudyObjectsPerSubject.size > 0; index += 1) {
      const subjectIndex = index % this.subjects.length;
      const subject = this.subjects[subjectIndex];
      const subjectStudyObjects = missingStudyObjectsPerSubject.get(subject);
      if (!subjectStudyObjects || subjectStudyObjects.length === 0) {
        missingStudyObjectsPerSubject.delete(subject);
        continue;
      }
      const studyDayOrError = StudyDay.create({
        date: currentDate,
        hours: this.hoursPerDay,
        availablityPerWeekday: this.availabilityPerWeekday,
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
      currentDate = this.getNextDate(currentDate);
      dayIndex += 1;
    }
  
    return Either.right(studyDays);
  }
  
  private getStudyDaysAlternatingSubjectPerStudyObject(): Either<string, StudyDay[]> {
    const studyDays: StudyDay[] = [];

    let currentStudyDayOrError = StudyDay.create({
      date: this.getFirstAvailableDate(this.startDate),
      hours: this.hoursPerDay,
      availablityPerWeekday: this.availabilityPerWeekday,
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
            const nextDay = this.getNextDate(currentStudyDay.getDate());
            currentStudyDayOrError = StudyDay.create({
              date: nextDay,
              hours: this.hoursPerDay,
              availablityPerWeekday: this.availabilityPerWeekday,
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
      date: this.getFirstAvailableDate(this.startDate),
      hours: this.hoursPerDay,
      availablityPerWeekday: this.availabilityPerWeekday,
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
              date:  this.getNextDate(currentStudyDay.getDate()),
              hours: this.hoursPerDay,
              availablityPerWeekday: this.availabilityPerWeekday,
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

    
  private isDayAvailable(date: Date): boolean {
    const weekday = date.getUTCDay();
    return this.availableWeekdays.has(weekday);
  }  

  private getFirstAvailableDate(date: Date): Date {
    if(this.isDayAvailable(date)) {
      return date;
    }
    return this.getFirstAvailableDate(this.getNextDate(date));
  }

  private getHoursPerWeekday(day: number): number {
    return this.availabilityPerWeekday.get(day) ?? this.hoursPerDay;
  }

  toString(): string {
    const studyDaysOrError = this.getStudyDays();
    if(studyDaysOrError.isLeft()) {
      console.error(studyDaysOrError.getLeft());
      return 'Erro ao gerar planejamento em formato de texto';
    }

    const title = `Planejamento de ${this.startDate.toLocaleDateString('pt-BR')} à ${this.getEndDate().getRight().toLocaleDateString('pt-BR')}\n`
    const body = studyDaysOrError.getRight().map(studyDay => studyDay.toString()).join('\n')
    return title + body
  }
}