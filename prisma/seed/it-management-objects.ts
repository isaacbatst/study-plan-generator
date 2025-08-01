import { PrismaClient } from "@prisma/client";
import { randomUUID } from 'crypto';

const COMPLIANCE_SUBJECT_ID = "d25a93bb-8d5d-4407-8fae-5c7915455f77";
const PROJECT_MANAGEMENT_SUBJECT_ID = "8b7df2ad-6e8d-401c-b8fc-3a843573b042";
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    const complianceStudyObjects = [
      "1.1 CONCEITO DE GOVERNANÇA CORPORATIVA",
      "1.2 REGRAS E CRITÉRIOS DA LEI SARBANES­OXLEY",
      "1.3 CONCEITO DE GOVERNANÇA CORPORATIVA COM AS ESTRATÉGIAS EMPRESARIAIS",
      "1.4 CONCEITO DE GOVERNANÇA CORPORATIVA COM O CONCEITO DE ÉTICA EMPRESARIAL",
      "2.1 CONCEITO DE RISCO NO CAMPO DA GESTÃO",
      "2.2 RISCOS INERENTES À CULTURA ORGANIZACIONAL E ÀS ESTRATÉGIAS.",
      "3.1 CARACTERÍSTICAS NECESSÁRIAS PARA A ADOÇÃO DE PROGRAMAS DE COMPLIANCE NAS ORGANIZAÇÕES",
      "3.2 ESCÂNDALOS CORPORATIVOS ESTIMULADORES DA ADOÇÃO DE PRÁTICAS DE COMPLIANCE NO AMBIENTE EMPRESARIAL",
      "3.3 UTILIZAÇÃO DO COMPLIANCE COMO INSTRUMENTO DE COMBATE À CORRUPÇÃO",
      "4.1 BENEFÍCIOS DO SISTEMA GRC",
    ];

    // Delete existing study objects for these subjects to avoid duplicates
    await tx.studyObject.deleteMany({
      where: {
        subjectId: {
          in: [COMPLIANCE_SUBJECT_ID, PROJECT_MANAGEMENT_SUBJECT_ID]
        }
      }
    })

    await tx.studyObject.createMany({
      data: complianceStudyObjects.map((name, index) => ({
        id: randomUUID(),
        name: name,
        hours: 2,
        position: index,
        subjectId: COMPLIANCE_SUBJECT_ID,
      })),
    });

    // project management
    const projectManagementStudyObjects = [
      "1.1 PRINCÍPIOS E CONCEITOS DO GERENCIAMENTO DE PROJETOS",
      "1.2 AS ESTRUTURAS ORGANIZACIONAIS",
      "1.3 A IMPORTÂNCIA DO ESCRITÓRIO DE PROJETOS",
      "1.4 A RELAÇÃO ENTRE O PMBOK E O GERENCIAMENTO DE PROJETOS",
      "2.1 O CICLO DE VIDA DO GERENCIAMENTO E A INTEGRAÇÃO DOS PROJETOS",
      "2.2 A GESTÃO DO ESCOPO DE UM PROJETO",
      "2.3 A GESTÃO DO TEMPO DO PROJETO ATRAVÉS DO USO DE UM CRONOGRAMA",
      "3.1 GERENCIAMENTO DE PESSOAS",
      "3.2 GERENCIAMENTO DAS COMUNICAÇÕES",
      "3.3 GERENCIAMENTO DE CUSTOS",
      "4.1 OS CONCEITOS E A ANÁLISE QUALITATIVA DE RISCOS",
      "4.2 O PLANO DE RESPOSTA A RISCOS",
      "4.3 OS CONCEITOS BÁSICOS DE QUALIDADE",
      "4.4 GESTÃO DA QUALIDADE EM PROJETOS",
      "5.1 VALORES E PRINCÍPIOS DO MANIFESTO ÁGIL",
      "5.2 PRINCIPAIS CARACTERÍSTICAS DO MÉTODO EXTREME PROGRAMMING (XP)",
      "5.3 PRINCIPAIS CARACTERÍSTICAS DO FRAMEWORK SCRUM",
    ];

    await tx.studyObject.createMany({
      data: projectManagementStudyObjects.map((name, index) => ({
        id: randomUUID(),
        name: name,
        hours: 2,
        position: index,
        subjectId: PROJECT_MANAGEMENT_SUBJECT_ID,
      })),
    });
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
