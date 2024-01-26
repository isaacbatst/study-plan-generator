export type SubjectThemeModuleJSON = {
  id: string,
  name: string,
} 

export default class SubjectThemeModule {
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
    }
  }
}