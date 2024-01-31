export type CoursePeriodJSON = {
  id: string,
  name: string,
  courseId: string,
}

export class CoursePeriod {
  constructor(
    private id: string,
    private name: string,
    private courseId: string,
  ) {}
  
  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getCourseId(): string {
    return this.courseId
  }

  toJSON(): CoursePeriodJSON {
    return {
      id: this.id,
      name: this.name,
      courseId: this.courseId,
    }
  }
}