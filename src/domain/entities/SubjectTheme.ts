export type SubjectThemeJSON = {
  name: string,
  modules: string[],
}

export default class SubjectTheme {
  constructor(
    readonly name: string,
    readonly modules: string[],
  ){}

  getDuration(): number {
    return this.modules.length
  }

  toJSON(): SubjectThemeJSON {
    return {
      name: this.name,
      modules: this.modules,
    }
  }
}