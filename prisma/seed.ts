import { PrismaClient } from '@prisma/client'
import { subjects } from './seed/initial/subjects'
import { courses } from './seed/initial/courses'

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