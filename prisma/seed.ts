import { PrismaClient } from '@prisma/client'
import { subjects } from './seed/subjects'
import { courses } from './seed/courses'

const prisma = new PrismaClient()

async function main() {
  await prisma.$transaction(async (tx) => {
    const estacio = await prisma.institution.create({
      data: {
        name: 'Estácio de Sá'
      }
    })

    await Promise.all(Object.values(subjects).map(async subject => {
      await tx.subject.create({
        data: {
          id: subject.getId(),
          name: subject.getName(),
          studyObjects: {
            createMany: {
              data: subject.getStudyObjects().map(studyObject => ({
                id: studyObject.getId(),
                name: studyObject.getName(),
                hours: studyObject.getHours(),
                position: studyObject.getPosition()
              }))
            }
          },
          coursePeriods: subject.getCoursePeriods().length > 0 ? {
            connectOrCreate: subject.getCoursePeriods().map(coursePeriod => ({
              where: { id: coursePeriod.getId() },
              create: {
                id: coursePeriod.getId(),
                position: coursePeriod.getPosition(),
                course: {
                  connectOrCreate: {
                    where: { id: coursePeriod.getCourse().getId() },
                    create: {
                      id: coursePeriod.getCourse().getId(),
                      name: coursePeriod.getCourse().getName(),
                      version: coursePeriod.getCourse().getVersion(),
                      institution: {
                        connect: {
                          id: estacio.id
                        }
                      }
                    }
                  }
                }
              }
            }))
          } : undefined 
        }
      })
    }))
  }, {
    timeout: 30000
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })