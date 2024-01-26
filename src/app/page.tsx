import Plannings from "../components/Plannings";
import { Toaster } from "../components/ui/toaster";
import { SubjectRepositoryMemorySingleton } from "../infra/persistance/repository/SubjectRepositoryMemorySingleton";

const subjectsRepository = SubjectRepositoryMemorySingleton.getInstance()

export default async function Home() {
  const subjects = await subjectsRepository.findAll()

  return (
    <main className="flex min-h-screen flex-col py-10 px-5">
      <Plannings subjects={subjects.map(subject => subject.toJSON())} />
      <Toaster />
    </main>
  );
}
