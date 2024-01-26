export type SubjectThemeModuleJSON = {
  id: string,
  name: string,
} 

export default class SubjectThemeModule {
  constructor(
    readonly id: string,
    readonly name: string,
  ){}

  getId(): string {
    return this.id
  }

  toJSON(): SubjectThemeModuleJSON {
    return {
      id: this.id,
      name: this.name,
    }
  }
}