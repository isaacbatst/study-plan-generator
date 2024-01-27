import Header from "../components/Header";
import Plannings from "../components/Plannings";
import { Toaster } from "../components/ui/sonner";
import { SubjectRepositoryMemorySingleton } from "../infra/persistance/repository/SubjectRepositoryMemorySingleton";

const subjectsRepository = SubjectRepositoryMemorySingleton.getInstance()

export default async function Home() {
  const subjects = await subjectsRepository.findAll()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="xl:max-w-[80vw]">
        <Header />
        <Plannings subjects={subjects.map(subject => subject.toJSON())} />
        <Toaster closeButton />
      </div>
    </main>
  );
}
