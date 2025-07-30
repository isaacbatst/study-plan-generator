import { NextRequest, NextResponse } from "next/server";
import { parseSubjectFromPDFText } from "./openai";
import { extractTextFromPDF } from "./unpdf";
import { StudyObject } from "../../../domain/entities/StudyObject";
import { SubjectRepositorySingleton } from "../../../infra/persistance/repository/SubjectRepositoryMemorySingleton";
import { Subject } from "../../../domain/entities/Subject";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const maxDuration = 30;

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const coursePeriod = formData.get("coursePeriod");
  const isNewCoursePeriod = formData.get("isNewCoursePeriod") === "true";

  if (!coursePeriod) {
    return NextResponse.json(
      { error: "Course period is required" },
      { status: 400 },
    );
  }

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json(
      { error: "Only PDF files are allowed" },
      { status: 400 },
    );
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { error: "File size exceeds limit of 5MB" },
      { status: 400 },
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const text = await extractTextFromPDF(buffer);
    if (!text) {
      return NextResponse.json(
        { error: "No text found in PDF" },
        { status: 400 },
      );
    }

    const parsed = await parseSubjectFromPDFText(text);
    if (!parsed) {
      return NextResponse.json(
        { error: "Failed to parse subject from PDF text" },
        { status: 400 },
      );
    }

    // Apenas retornar os dados processados, sem salvar no banco
    const processedData = {
      subjectName: parsed.subjectName,
      studyObjects: parsed.studyObjects.map((obj, i) => ({
        name: obj,
        hours: 2,
        position: i,
      })),
      coursePeriod: coursePeriod.toString(),
      isNewCoursePeriod,
    };

    return NextResponse.json(processedData, { status: 200 });
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    return NextResponse.json(
      { error: "Error extracting text from PDF" },
      { status: 500 },
    );
  }
}
