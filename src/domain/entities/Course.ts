export default class Course {
  constructor(
    private id: string,
    private name: string,
  ) {}

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }
}