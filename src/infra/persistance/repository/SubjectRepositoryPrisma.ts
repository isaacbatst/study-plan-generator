import { Prisma, PrismaClient, SubjectStatus } from '@prisma/client';
import { Subject, SubjectJSON } from '../../../domain/entities/Subject';
import { CoursePeriod } from '../../../domain/entities/CoursePeriod';
import { StudyObject } from '../../../domain/entities/StudyObject';

export class SubjectRepositoryPrisma {
  constructor(private prisma: PrismaClient) {}

  async create(subject: Subject): Promise<void> {
     await this.prisma.subject.create({
      data: {
        name: subject.getName(),
        coursePeriods: {
          connect: subject.getCoursePeriods().map(coursePeriod => ({
            id: coursePeriod.getId(),
          })),
        },
        studyObjects: {
          createMany: {
            data: subject.getStudyObjects().map((studyObject, index) => ({
              name: studyObject.getName(),
              hours: studyObject.getHours(),
              position: index,
            }))
          }
        }
      }
    });
  }

  async findAll(options: {
    status?: SubjectStatus
  } = {}) {
    const subjects = await this.prisma.subject.findMany({
      where: {
        status: options.status ?? SubjectStatus.approved,
      },
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
    console.log("Mapping subject:", subject.name, "created at:", subject.createdAt);
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
      createdAt: subject.createdAt,
      status: subject.status,
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