export type StudyObjectJSON = {
  id: string
  name: string
  necessaryHours: number
}

export default class StudyObject {
  constructor(
    private id: string,
    private name: string,
    private necessaryHours: number,
  ){
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  toString(): string {
    return this.name
  }

  toJSON(): StudyObjectJSON {
    return {
      id: this.id,
      name: this.name,
      necessaryHours: this.necessaryHours
    }
  }
}