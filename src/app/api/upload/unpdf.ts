import { extractText, getDocumentProxy } from "unpdf";

export async function extractTextFromPDF(buffer: Buffer): Promise<string> {
  const pdf = await getDocumentProxy(new Uint8Array(buffer));
  const extracted = await extractText(pdf, { mergePages: true });
  return extracted.text;
}
