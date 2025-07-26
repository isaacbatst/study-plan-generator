import Header from "../components/Header";
import Plannings from "../components/Plannings";
import { Toaster } from "../components/ui/sonner";
import UploadFile from "../components/UploadFile";
import { SubjectRepositorySingleton } from "../infra/persistance/repository/SubjectRepositoryMemorySingleton";
import Wrapper from "./wrapper";

export const dynamic = "force-dynamic";

const subjectsRepository = SubjectRepositorySingleton.getInstance()

export default async function Home() {
  const subjects = await subjectsRepository.findAll()
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Wrapper>
        <div className="self-center py-2"><UploadFile /></div>
        <Plannings subjects={subjects} />
      </Wrapper>
      <Toaster closeButton />
    </main>
  );
}
