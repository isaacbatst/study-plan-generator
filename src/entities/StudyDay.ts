export default class StudyDay {
  readonly subjects: string[] = []

  constructor(
    readonly date: Date,
  ) {}

  addSubject(subject: string): void {
    this.subjects.push(subject)
  }
}