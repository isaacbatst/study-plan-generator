import { NextRequest, NextResponse } from 'next/server';
import { extractText, getDocumentProxy } from 'unpdf'
export const config = {
  api: {
    bodyParser: false,
  },
};

async function extractTextFromPDF(buffer: Buffer): Promise<string> {
  const pdf = await getDocumentProxy(new Uint8Array(buffer))
  const extracted = await extractText(pdf, {mergePages: true})
  return extracted.text;
}
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  if(file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 });
  }

  if (file.size > 10 * 1024 * 1024) { // Limit to 10MB
    return NextResponse.json({ error: 'File size exceeds limit of 5MB' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const text = await extractTextFromPDF(buffer);

    return NextResponse.json({
      message: 'File uploaded successfully',
      text,
    });
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return NextResponse.json({ error: 'Error extracting text from PDF' }, { status: 500 });
  }
}