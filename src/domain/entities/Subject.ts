import { CoursePeriod, CoursePeriodJSON } from "./CoursePeriod"
import SubjectTheme, { SubjectThemeJSON } from "./SubjectTheme"
import SubjectThemeModule from "./SubjectThemeModule"

export type SubjectJSON = {
  id: string,
  name: string,
  themes: SubjectThemeJSON[],
  necessaryHours: number,
  coursePeriods: CoursePeriodJSON[]
}

export default class Subject {
  static fromJSON(json: SubjectJSON): Subject {
    const subject = new Subject(json.id, json.name)
    json.themes.forEach(theme => subject.addTheme(SubjectTheme.fromJSON(theme)))
    return subject
  }

  private id: string
  private name: string
  private themes: SubjectTheme[] = []
  private coursePeriods: CoursePeriod[]

  constructor(id: string, name: string, coursePeriods: CoursePeriod[] = []) {
    this.id = id
    this.name = name
    this.coursePeriods = coursePeriods
  }

  addTheme(theme: SubjectTheme): void {
    this.themes.push(theme)
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getNecessaryHours() {
    return this.themes.reduce((acc, theme) => acc + theme.getNecessaryHours(), 0)
  }

  getModules(): SubjectThemeModule[] {
    return this.themes.reduce<SubjectThemeModule[]>((acc, theme) => acc.concat(theme.getModules()), [])
  }

  toJSON(): SubjectJSON {
    return {
      id: this.id,
      name: this.name,
      themes: this.themes.map(theme => theme.toJSON()),
      necessaryHours: this.getNecessaryHours(),
      coursePeriods: this.coursePeriods.map(coursePeriod => coursePeriod.toJSON()),
    }
  }
}