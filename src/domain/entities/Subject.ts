import StudyDay from "./StudyDay"
import SubjectTheme, { SubjectThemeJSON } from "./SubjectTheme"

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

  getStudyDays(availableDays: Date[], index: number): StudyDay[] {
    const subjectDuration = this.getDuration()
    const studyDays: StudyDay[] = []
    for(let i = 0; i < subjectDuration; i++) {
      const availableDay = availableDays[index]
      const studyDay = new StudyDay(availableDay)
      studyDay.addSubject(this.getName())
      studyDays.push(studyDay)
      index++
    }
    return studyDays
  }

  toJSON(): SubjectJSON {
    return {
      id: this.id,
      name: this.name,
      themes: this.themes.map(theme => theme.toJSON()),
    }
  }
}