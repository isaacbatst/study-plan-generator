export type SubjectThemeModuleJSON = {
  id: string,
  name: string,
  subjectName: string,
  necessaryHours: number,
} 

export default class SubjectThemeModule {
  static fromJSON(json: SubjectThemeModuleJSON): SubjectThemeModule {
    return new SubjectThemeModule(json.id, json.name, json.subjectName, json.necessaryHours)
  }

  constructor(
    readonly id: string,
    readonly name: string,
    readonly subjectName: string,
    readonly necessaryHours: number = 2
  ){}

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getFullName(): string {
    return `${this.subjectName} - ${this.name}`
  }

  getSubjectName(): string {
    return this.subjectName
  }

  getNecessaryHours(): number {
    return this.necessaryHours
  }

  toJSON(): SubjectThemeModuleJSON {
    return {
      id: this.id,
      name: this.name,
      subjectName: this.subjectName,
      necessaryHours: this.necessaryHours,
    }
  }
}