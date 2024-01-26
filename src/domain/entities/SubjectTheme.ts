import SubjectThemeModule, { SubjectThemeModuleJSON } from "./SubjectThemeModule"

export type SubjectThemeJSON = {
  id: string,
  name: string,
  modules: SubjectThemeModuleJSON[],
}

export default class SubjectTheme {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly modules: SubjectThemeModule[],
  ){}

  getDuration(): number {
    return this.modules.length
  }

  getModules(): SubjectThemeModule[] {
    return this.modules
  }

  toJSON(): SubjectThemeJSON {
    return {
      id: this.id,
      name: this.name,
      modules: this.modules.map(module => module.toJSON()),
    }
  }
}