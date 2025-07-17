import { PrismaClient } from '@prisma/client'
import { subjects } from './seed/initial/subjects'
import { courses } from './seed/initial/courses'
import { coursePeriods } from './seed/initial/course-periods'
import { randomUUID } from 'crypto'

const prisma = new PrismaClient()

async function main() {
  await prisma.$transaction(async (tx) => {
    let estacio = await prisma.institution.findFirst({
      where: {
        name: 'Estácio de Sá'
      }
    })

    if(!estacio) {
      estacio = await tx.institution.create({
        data: {
          name: 'Estácio de Sá'
        }
      })
    }

    // Insert or update courses
    await Promise.all(Object.values(courses).map(async course => {
      await tx.course.upsert({
        where: { id: course.id },
        update: {
          name: course.name,
          version: 1,
          institutionId: estacio.id
        },
        create: {
          id: course.id,
          name: course.name,
          version: 1,
          institutionId: estacio.id
        }
      })
    }))

    // Insert or update course periods
    for (const [course, periods] of Array.from(coursePeriods.entries())) {
      await Promise.all(periods.map(async (period: any) => {
        if (period) {
          await tx.coursePeriod.upsert({
            where: { id: period.id },
            update: {
              position: period.position,
              courseId: period.courseId
            },
            create: {
              id: period.id,
              position: period.position,
              courseId: period.courseId
            }
          })
        }
      }))
    }

    // Insert or update subjects with study objects
    await Promise.all(Object.values(subjects).map(async subject => {
      const existingSubject = await tx.subject.findUnique({
        where: { id: subject.id },
        include: { studyObjects: true }
      })

      if (existingSubject) {
        // Update existing subject
        await tx.subject.update({
          where: { id: subject.id },
          data: {
            name: subject.name,
          }
        })

        // Delete existing study objects and recreate them
        await tx.studyObject.deleteMany({
          where: { subjectId: subject.id }
        })
      } else {
        // Create new subject
        await tx.subject.create({
          data: {
            id: subject.id,
            name: subject.name,
          }
        })
      }

      // Create study objects
      await tx.studyObject.createMany({
        data: subject.studyObjects.map((studyObjectName: string, index: number) => ({
          id: randomUUID(),
          name: studyObjectName,
          hours: 2,
          position: index,
          subjectId: subject.id
        }))
      })
    }))
  }, {
    timeout: 60000
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })