export default class StudyObject {
  constructor(
    private id: string,
  ){}

  getId(): string {
    return this.id
  }

  toJSON() {
    return {
      id: this.id,
    }
  }
}