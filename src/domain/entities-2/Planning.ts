import { D } from "vitest/dist/reporters-rzC174PQ.js";
import { Either } from "./either/Either";
import { Subject } from "./Subject";

type PlanningProps = {
  id: string;
  createdAt: Date;
  startDate: Date;
  subjects: Subject[];
};

export class Planning {
  private endDate: Date;

  private constructor(
    private id: string,
    private createdAt: Date,
    private startDate: Date,
    private subjects: Subject[],
  ) {
    this.endDate = this.calculateEndDate();
  }

  static create(props: PlanningProps): Either<string, Planning> {
    return Either.right(new Planning(props.id, props.createdAt, props.startDate, props.subjects));
  }

  calculateEndDate(): Date {
    return new Date(this.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
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

  getEndDate(): Date {
    return this.endDate;
  }
}