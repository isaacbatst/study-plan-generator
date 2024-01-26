import StudyDay from "./StudyDay"
import SubjectTheme, { SubjectThemeJSON } from "./SubjectTheme"
import SubjectThemeModule from "./SubjectThemeModule"

export type SubjectJSON = {
  id: string,
  name: string,
  themes: SubjectThemeJSON[],
}

export default class Subject {
  private id: string
  private name: string
  private themes: SubjectTheme[] = []

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
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

  getDuration(): number {
    return this.themes.reduce((acc, theme) => acc + theme.getDuration(), 0)
  }

  getModules(): SubjectThemeModule[] {
    return this.themes.reduce<SubjectThemeModule[]>((acc, theme) => acc.concat(theme.getModules()), [])
  }

  toJSON(): SubjectJSON {
    return {
      id: this.id,
      name: this.name,
      themes: this.themes.map(theme => theme.toJSON()),
    }
  }
}