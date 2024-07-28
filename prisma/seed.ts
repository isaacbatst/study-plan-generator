import {PrismaClient} from '@prisma/client'
import { courses } from './entities/courses'

const prisma = new PrismaClient()

async function main() {
  await prisma.$transaction(async (tx) => {
    const estacio = await prisma.institution.create({
      data: {
        name: 'Estácio de Sá'
      }
    })
  
    await Promise.all(courses.map(async course => {
      await tx.course.create({
        data: {
          id: course.getId(),
          name: course.getName(),
          version: course.getVersion(),
          institutionId: estacio.id
        }
      })
  
      await Promise.all(course.getPeriods().map(async period => {
        await tx.coursePeriod.create({
          data: {
            id: period.getId(),
            name: period.getName(),
            courseId: course.getId(),
            position: period.getPosition(),
            subjects: {
              connectOrCreate: period.getSubjects().map(subject => ({
                where: { id: subject.getId() },
                create: {
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
                  }
                }
              }))
            }
          }
        })
      }))
    }))
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })