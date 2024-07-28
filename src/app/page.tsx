import Header from "../components/Header";
import Plannings from "../components/Plannings";
import { Toaster } from "../components/ui/sonner";
import { SubjectRepositorySingleton } from "../infra/persistance/repository/SubjectRepositoryMemorySingleton";

const subjectsRepository = SubjectRepositorySingleton.getInstance()

export default async function Home() {
  const subjects = await subjectsRepository.findAll()

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Plannings subjects={subjects} />
      <Toaster closeButton />
    </main>
  );
}
