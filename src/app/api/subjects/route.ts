import { NextRequest } from "next/server";
import { SubjectRepositorySingleton } from "../../../infra/persistance/repository/SubjectRepositoryMemorySingleton";
import { SubjectStatus } from "@prisma/client";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const status = searchParams.get("status");
    if(status && !Object.values(SubjectStatus).includes(status as SubjectStatus)) {
      return new Response("Invalid status", { status: 400 });
    }
    const subjectsRepository = SubjectRepositorySingleton.getInstance();
    const subjects = await subjectsRepository.findAll({
      status: (status as SubjectStatus) ?? SubjectStatus.approved
    });
    
    return new Response(JSON.stringify(subjects), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}