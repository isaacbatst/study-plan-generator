import prisma from "../prisma";
import { SubjectRepositoryPrisma } from "./SubjectRepositoryPrisma";

export class SubjectRepositorySingleton {
  private static instance = new SubjectRepositoryPrisma(prisma)

  static getInstance(): SubjectRepositoryPrisma {
    return SubjectRepositorySingleton.instance
  }
}