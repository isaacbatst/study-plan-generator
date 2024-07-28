import { Prisma, PrismaClient } from '@prisma/client';
import { SubjectJSON } from '../../../domain/entities-2/Subject';
import { CoursePeriod } from '../../../domain/entities-2/CoursePeriod';
import { StudyObject } from '../../../domain/entities-2/StudyObject';

export class SubjectRepositoryPrisma {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    const subjects = await this.prisma.subject.findMany({
      include: {
        studyObjects: true,
        coursePeriods: {
          include: {
            course: true
          }
        }
      }
    })

    return subjects.map(subject => this.mapSubject(subject))
  }

  private mapSubject(subject: Prisma.SubjectGetPayload<{
    include: {
      studyObjects: true;
      coursePeriods: {
        include: {
          course: true;
        };
      };
    };
  }>): SubjectJSON {
    return {
      id: subject.id,
      name: subject.name,
      studyObjects: subject.studyObjects.map(studyObject => ({
        id: studyObject.id,
        name: studyObject.name,
        hours: studyObject.hours,
        position: studyObject.position,
        subjectName: subject.name,
        fullName: StudyObject.getFullName(subject.name, studyObject.name)
      })),
      coursePeriods: subject.coursePeriods.map(coursePeriod => ({
        id: coursePeriod.id,
        position: coursePeriod.position,
        name: CoursePeriod.getName(coursePeriod.position, coursePeriod.course.name),
        course: {
          id: coursePeriod.course.id,
          name: coursePeriod.course.name,
          version: coursePeriod.course.version
        }
      }))
    }
  }
}