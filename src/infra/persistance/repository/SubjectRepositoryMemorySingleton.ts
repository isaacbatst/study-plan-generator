import SubjectRepositoryMemory from "./SubjectRepositoryMemory";

export class SubjectRepositoryMemorySingleton {
  private static instance: SubjectRepositoryMemory = new SubjectRepositoryMemory()

  static getInstance(): SubjectRepositoryMemory {
    return SubjectRepositoryMemorySingleton.instance
  }
}