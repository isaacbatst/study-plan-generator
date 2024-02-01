import { CoursePeriod } from "./CoursePeriod"

export default class Course {
  constructor(
    private id: string,
    private name: string,
    private period = new Map<number, CoursePeriod>()
  ) {}

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }
  
}