export type CoursePeriodJSON = {
  id: string,
  name: string,
}

export class CoursePeriod {
  constructor(
    private id: string,
    private name: string,
  ) {}
  
  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  toJSON(): CoursePeriodJSON {
    return {
      id: this.id,
      name: this.name,
    }
  }
}