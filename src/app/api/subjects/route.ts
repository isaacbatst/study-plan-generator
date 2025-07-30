import { NextRequest } from "next/server";
import { SubjectRepositorySingleton } from "../../../infra/persistance/repository/SubjectRepositoryMemorySingleton";
import { SubjectStatus } from "@prisma/client";
import prisma from "../../../infra/persistance/prisma";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const status = searchParams.get("status");
    if (
      status &&
      !Object.values(SubjectStatus).includes(status as SubjectStatus)
    ) {
      return new Response("Invalid status", { status: 400 });
    }
    const subjectsRepository = SubjectRepositorySingleton.getInstance();
    const subjects = await subjectsRepository.findAll({
      status: (status as SubjectStatus) ?? SubjectStatus.approved,
    });

    return new Response(JSON.stringify(subjects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subjectName, studyObjects, coursePeriod, isNewCoursePeriod } = body;

    if (!subjectName || !studyObjects || !coursePeriod) {
      return new Response(
        JSON.stringify({
          error: "Subject name, study objects, and course period are required",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const created = await prisma.subject.create({
      data: {
        name: subjectName,
        studyObjects: {
          createMany: {
            data: studyObjects.map((obj: any, i: number) => ({
              name: obj.name,
              hours: obj.hours || 2,
              position: i,
            })),
          },
        },
        status: SubjectStatus.pending,
        ...(isNewCoursePeriod
          ? {
              coursePeriodToCreate: coursePeriod,
            }
          : { coursePeriods: { connect: { id: coursePeriod } } }),
      },
      include: {
        studyObjects: true,
        coursePeriods: true,
      },
    });

    return new Response(JSON.stringify(created), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating subject:", error);
    return new Response(JSON.stringify({ error: "Error creating subject" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
